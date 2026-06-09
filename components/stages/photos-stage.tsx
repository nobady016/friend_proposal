"use client"

import Image from "next/image"
import { Mic } from "lucide-react"
import { PHOTOS } from "@/lib/proposal-data"

export function PhotosStage({
  me,
  onNext,
}: {
  me: string
  onNext: () => void
}) {
  return (
    <div className="animate-pop-in flex flex-col items-center px-5 pb-16 pt-4 text-center">
      <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
        📸 Photo Reveal Time
      </span>

      <h2 className="mt-6 font-heading text-4xl font-black sm:text-6xl">
        <span className="text-gradient-love">Pehle mujhe dekho...</span>
      </h2>
      <p className="mt-3 font-script text-xl text-accent sm:text-2xl">
        — {me ? me : "main"}, presenting himself like a Bollywood hero 🎬
      </p>

      <div className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PHOTOS.map((photo, i) => (
          <figure
            key={photo.src}
            className="animate-pop-in flex flex-col rounded-2xl border border-border bg-card p-3 shadow-lg"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={`mera intro ${i}`}
              width={320}
              height={340}
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
            <figcaption className="px-1 py-4 font-script text-lg leading-snug text-primary">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        onClick={onNext}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
      >
        <Mic className="size-5" />
        Ab shayari sun lo 🎤
      </button>

      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        (Photos badalni hain? Code mein <span className="font-semibold">PHOTOS</span> array update kar do 📸)
      </p>
    </div>
  )
}
