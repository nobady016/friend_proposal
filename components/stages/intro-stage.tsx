"use client"

import { Sparkles } from "lucide-react"
import { PHOTOS } from "@/lib/proposal-data"
import Image from "next/image"

export function IntroStage({
  crush,
  onNext,
}: {
  crush: string
  onNext: () => void
}) {
  return (
    <div className="animate-pop-in flex flex-col items-center px-5 pb-16 pt-6 text-center">
      <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
        ⚠️ Top Secret Mission
      </span>

      <h1 className="mt-8 max-w-4xl text-balance font-heading text-5xl font-black leading-[1.05] sm:text-7xl">
        <span className="text-gradient-love">
          Hey {crush ? crush : "Meri Jaan"}...
        </span>
        <br />
        <span className="font-script font-bold text-primary">
          ek baat boloon?
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        Tension mat lo. Yeh koi WhatsApp forward nahi hai. Yeh asli waala message
        hai — direct heart se, no buffering. 💌
      </p>

      <button
        onClick={onNext}
        className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
      >
        <Sparkles className="size-5" />
        Chalo sun lo na...
      </button>

      <p className="mt-4 font-script text-lg text-accent">
        (psst... ek choti si tayyari ki hai tumhare liye)
      </p>

      <div className="mt-10 flex items-end justify-center">
        {PHOTOS.map((photo, i) => (
          <div
            key={photo.src}
            className="-mx-3 rounded-md border-4 border-card bg-card p-1 shadow-xl"
            style={{
              transform: `rotate(${(i - 1.5) * 6}deg)`,
              zIndex: i,
            }}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={`me-${i}`}
              width={110}
              height={130}
              className="h-28 w-24 rounded-sm object-cover sm:h-32 sm:w-28"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
