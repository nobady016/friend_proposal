"use client"

import { useCallback, useState } from "react"
import confetti from "canvas-confetti"
import { FloatingHearts } from "@/components/floating-hearts"
import { MissionHeader } from "@/components/mission-header"
import { ToastProvider, useToast } from "@/components/toast"
import { IntroStage } from "@/components/stages/intro-stage"
import { NamesStage } from "@/components/stages/names-stage"
import { PhotosStage } from "@/components/stages/photos-stage"
import { ShayariStage } from "@/components/stages/shayari-stage"
import { BollywoodStage } from "@/components/stages/bollywood-stage"
import { QuestionStage } from "@/components/stages/question-stage"
import { YesStage } from "@/components/stages/yes-stage"
import type { Names, Stage } from "@/lib/proposal-data"

function Experience() {
  const [stage, setStage] = useState<Stage>("intro")
  const [names, setNames] = useState<Names>({ crush: "", me: "" })
  const [dodges, setDodges] = useState(0)
  const toast = useToast()

  const fireConfetti = useCallback(() => {
    const colors = ["#e11d48", "#fb7185", "#f97316", "#fda4af", "#fbbf24"]
    const burst = (originX: number) =>
      confetti({
        particleCount: 70,
        spread: 70,
        startVelocity: 45,
        origin: { x: originX, y: 0.6 },
        colors,
        scalar: 1.1,
      })
    burst(0.25)
    burst(0.75)
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 },
      colors,
      scalar: 1.2,
    })
  }, [])

  const goToNames = () => setStage("names")

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-secondary via-background to-accent/15">
      <FloatingHearts />

      <div className="relative z-10">
        <MissionHeader onEdit={() => setStage("names")} />

        {stage === "intro" && (
          <IntroStage crush={names.crush} onNext={goToNames} />
        )}

        {stage === "names" && (
          <NamesStage
            initial={names}
            onSave={(n) => {
              setNames(n)
              toast("Naam save ho gaye 💌")
              setStage("photos")
            }}
            onSkip={() => setStage("photos")}
          />
        )}

        {stage === "photos" && (
          <PhotosStage me={names.me} onNext={() => setStage("shayari")} />
        )}

        {stage === "shayari" && (
          <ShayariStage
            crush={names.crush}
            onNext={() => setStage("bollywood")}
          />
        )}

        {stage === "bollywood" && (
          <BollywoodStage
            crush={names.crush}
            onNext={() => setStage("question")}
          />
        )}

        {stage === "question" && (
          <QuestionStage
            crush={names.crush}
            me={names.me}
            onYes={(d) => {
              setDodges(d)
              fireConfetti()
              toast("YES bola! Main chand pe hoon abhi 🌕")
              setStage("yes")
            }}
          />
        )}

        {stage === "yes" && (
          <YesStage
            crush={names.crush}
            me={names.me}
            dodges={dodges}
            onReplay={() => {
              setStage("intro")
              setDodges(0)
            }}
            onShare={async () => {
              const text = `${names.crush || "She"} said YES! 💍 Operation: Dil Chori successful 🎉`
              try {
                if (navigator.share) {
                  await navigator.share({ title: "Operation: Dil Chori", text })
                } else {
                  await navigator.clipboard.writeText(text)
                  toast("Message copy ho gaya — ab paste karke sabko bata do 📋")
                }
              } catch {
                toast("Arre, share cancel ho gaya 😅")
              }
            }}
          />
        )}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <ToastProvider>
      <Experience />
    </ToastProvider>
  )
}
