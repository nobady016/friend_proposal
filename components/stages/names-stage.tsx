"use client"

import { useState } from "react"
import type { Names } from "@/lib/proposal-data"

export function NamesStage({
  initial,
  onSave,
  onSkip,
}: {
  initial: Names
  onSave: (names: Names) => void
  onSkip: () => void
}) {
  const [crush, setCrush] = useState(initial.crush)
  const [me, setMe] = useState(initial.me)

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 py-10">
      <div className="animate-pop-in w-full max-w-xl rounded-3xl border border-border bg-card/90 p-7 shadow-xl backdrop-blur-sm sm:p-10">
        <h2 className="font-heading text-4xl font-bold text-primary sm:text-5xl">
          Ek choti si formality
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Apna aur unka naam likh do — taaki message thoda personal lage. (Chhupa
          bhi sakte ho — skip kar do)
        </p>

        <div className="mt-7 space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-secondary-foreground">
              Crush ka naam
            </label>
            <input
              value={crush}
              onChange={(e) => setCrush(e.target.value)}
              placeholder="Jaise: Aisha, Priya, Riya..."
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-secondary-foreground">
              Tumhara naam
            </label>
            <input
              value={me}
              onChange={(e) => setMe(e.target.value)}
              placeholder="Tumhara naam"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={onSkip}
            className="flex-1 rounded-xl border border-border bg-card px-5 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
          >
            Skip kar do
          </button>
          <button
            onClick={() => onSave({ crush: crush.trim(), me: me.trim() })}
            className="flex-1 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-transform hover:scale-[1.02] active:scale-95"
          >
            Aage chalo →
          </button>
        </div>
      </div>
    </div>
  )
}
