"use client"

import { Heart, Pencil } from "lucide-react"

export function MissionHeader({ onEdit }: { onEdit: () => void }) {
  return (
    <header className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-8">
      <div className="flex items-center gap-2">
        <Heart className="size-5 fill-primary text-primary animate-heartbeat sm:size-6" />
        <span className="font-heading text-lg font-bold text-primary sm:text-xl">
          Operation: Dil Chori
        </span>
      </div>
      <button
        onClick={onEdit}
        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary"
      >
        <Pencil className="size-4" />
        Naam edit karo
      </button>
    </header>
  )
}
