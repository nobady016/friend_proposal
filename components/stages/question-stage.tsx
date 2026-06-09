"use client"

import { useState } from "react"

export function QuestionStage({
  crush,
  me,
  onYes,
}: {
  crush: string
  me: string
  onYes: (dodges: number) => void
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [dodges, setDodges] = useState(0)

  const runAway = () => {
    const x = (Math.random() - 0.5) * 320
    const y = (Math.random() - 0.5) * 220
    setPos({ x, y })
    setDodges((d) => d + 1)
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-5 py-10 text-center">
      <p className="font-script text-2xl text-accent">
        Toh, {crush ? crush : "meri jaan"}...
      </p>

      <h2 className="mt-4 max-w-3xl text-balance font-heading text-5xl font-black leading-[1.05] sm:text-7xl">
        <span className="text-primary">Will you be my</span>{" "}
        <span className="text-gradient-love">Valentine</span>
        <br />
        <span className="font-script text-accent">...forever?</span>
      </h2>

      <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
        Pakka pakka socho. Phir bhi haan bolna. —{" "}
        <strong className="text-primary">{me ? me : "main"}</strong> 💌
      </p>

      <div className="relative mt-12 flex w-full max-w-md items-center justify-center gap-4">
        <button
          onClick={() => onYes(dodges)}
          className="animate-heartbeat rounded-full bg-primary px-9 py-5 text-lg font-bold text-primary-foreground shadow-xl shadow-primary/40 transition-transform hover:scale-110"
        >
          Haan 💍 (obviously)
        </button>

        <button
          onMouseEnter={runAway}
          onTouchStart={(e) => {
            e.preventDefault()
            runAway()
          }}
          onClick={runAway}
          style={
            pos
              ? {
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  transition: "transform 0.18s ease-out",
                }
              : undefined
          }
          className="rounded-full border border-border bg-card px-7 py-4 font-semibold text-secondary-foreground shadow-md"
        >
          Nahi 🙄
        </button>
      </div>

      <p className="mt-10 font-script text-lg text-accent">
        {dodges === 0
          ? 'No button ko 0 baar pakad\u2019ne ki koshish ki hai.'
          : `No button ko ${dodges} baar pakad\u2019ne ki koshish ki hai. 😏`}
      </p>
    </div>
  )
}
