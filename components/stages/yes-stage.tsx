"use client"

import { RefreshCw, Megaphone } from "lucide-react"

export function YesStage({
  crush,
  me,
  dodges,
  onReplay,
  onShare,
}: {
  crush: string
  me: string
  dodges: number
  onReplay: () => void
  onShare: () => void
}) {
  return (
    <div className="animate-pop-in flex flex-col items-center px-5 pb-16 pt-4 text-center">
      <h2 className="mt-6 font-heading text-5xl font-black leading-[1.05] sm:text-7xl">
        <span className="text-primary">SHE SAID</span>
        <br />
        <span className="text-gradient-love">YES! 💍✨</span>
      </h2>

      <p className="mt-5 font-script text-2xl text-accent sm:text-3xl">
        Mubarak ho {me ? me : "dost"} — life sorted 🎉
      </p>

      <div className="mt-9 w-full max-w-2xl rounded-3xl border border-border bg-card/85 p-7 text-left shadow-xl backdrop-blur-sm sm:p-10">
        <p className="leading-relaxed text-foreground">
          🍿 <strong className="text-primary">Breaking News:</strong>{" "}
          {crush ? crush : "Unhone"} ne haan bol diya hai. Bollywood ne credits
          roll kar diye.
        </p>
        <p className="mt-4 leading-relaxed text-foreground">
          Tumne kul <strong className="text-primary">{dodges}</strong> baar
          &quot;Nahi&quot; button ko pakad&apos;ne ki koshish ki — par hum dono
          jaante hain, dil mein toh shuru se YES tha. 😉
        </p>
        <p className="mt-4 font-script text-xl text-accent">
          Now go and buy ice-cream. Aaj treat banti hai 🍦
        </p>
      </div>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={onReplay}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
        >
          <RefreshCw className="size-5" />
          Phir se dikhao 🔁
        </button>
        <button
          onClick={onShare}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
        >
          <Megaphone className="size-5" />
          Sabko bata do 📣
        </button>
      </div>
    </div>
  )
}
