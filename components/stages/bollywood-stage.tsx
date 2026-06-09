"use client"

import { Gem } from "lucide-react"

export function BollywoodStage({
  crush,
  onNext,
}: {
  crush: string
  onNext: () => void
}) {
  const name = crush ? crush : "tumhara"

  return (
    <div className="animate-pop-in flex flex-col items-center px-5 pb-16 pt-4 text-center">
      <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
        🎞️ Bollywood Moment — 1995 Yashraj style
      </span>

      <h2 className="mt-6 font-heading text-5xl font-black sm:text-7xl">
        <span className="text-gradient-love">&quot;Palat...</span>
        <br />
        <span className="font-script text-accent">palat...&quot;</span>
      </h2>

      <div className="mt-9 w-full max-w-2xl rounded-3xl border border-border bg-card/85 p-7 text-left shadow-xl backdrop-blur-sm sm:p-10">
        <p className="text-pretty leading-relaxed text-foreground">
          🌧️ <em>Baarish ho rahi hai.</em> Background mein purana romantic gaana
          baj raha hai.
          <br />
          Slow-motion mein hawa chal rahi hai... pankhe ki, but still — vibe set
          hai. 🎬
        </p>
        <p className="mt-5 leading-relaxed text-foreground">
          Director shouting: <strong className="text-primary">&quot;Action!&quot;</strong>
          <br />
          Main ghutne pe baith chuka hoon (figuratively, mera knee dard kar raha
          hai actually 😅).
        </p>
        <p className="mt-5 leading-relaxed text-foreground">
          Maine pure Bollywood se permission le li hai — hero ne bhi smile karke
          haan bola. Ab bas{" "}
          <strong className="text-primary">{name}</strong> ka dil hi reh gaya hai.
        </p>
        <p className="mt-5 font-script text-xl text-accent">
          &quot;Aaj agar haan bol diya, toh interval ke baad seedha happy ending 🍿&quot;
        </p>
      </div>

      <button
        onClick={onNext}
        className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
      >
        <Gem className="size-5" />
        Suno asli sawaal 💍
      </button>
    </div>
  )
}
