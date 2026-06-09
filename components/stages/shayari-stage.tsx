"use client"

import { useState } from "react"
import { Mic, Gem } from "lucide-react"
import { SHAYARIS } from "@/lib/proposal-data"

export function ShayariStage({
  crush,
  onNext,
}: {
  crush: string
  onNext: () => void
}) {
  const [index, setIndex] = useState(0)
  const isLast = index === SHAYARIS.length - 1

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-10 text-center">
      <p className="font-script text-2xl text-accent">
        ♪ Shayari #{index + 1} of {SHAYARIS.length} ♪
      </p>

      <div
        key={index}
        className="animate-pop-in mt-6 w-full max-w-2xl rounded-3xl border border-border bg-card/85 p-8 shadow-xl backdrop-blur-sm sm:p-12"
      >
        <p className="whitespace-pre-line font-heading text-2xl font-medium italic leading-relaxed text-primary sm:text-3xl">
          {SHAYARIS[index]}
        </p>
        <p className="mt-6 font-script text-lg text-accent">
          — for {crush ? crush : "tum"}, with extra cheese 🧀
        </p>
      </div>

      <button
        onClick={() => (isLast ? onNext() : setIndex((i) => i + 1))}
        className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
      >
        {isLast ? (
          <>
            <Gem className="size-5" />
            Bas, ab asli baat 💍
          </>
        ) : (
          <>
            <Mic className="size-5" />
            Ek aur sunau? 🎤
          </>
        )}
      </button>
    </div>
  )
}
