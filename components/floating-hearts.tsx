"use client"

import { useEffect, useState } from "react"

const EMOJIS = ["💖", "💕", "🌹", "💘", "🌸", "💞", "🍓", "💝", "🌷", "💗", "🍫", "💐"]

type FloatingHeartsProps = {
  count?: number
}

type Item = {
  id: number
  left: number
  duration: number
  delay: number
  size: number
  opacity: number
  emoji: string
}

export function FloatingHearts({ count = 22 }: FloatingHeartsProps) {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    setItems(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 9 + Math.random() * 12,
        delay: -Math.random() * 18,
        size: 14 + Math.random() * 26,
        opacity: 0.5 + Math.random() * 0.45,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      })),
    )
  }, [count])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {items.map((item) => (
        <span
          key={item.id}
          className="animate-float absolute bottom-0 select-none"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            // @ts-expect-error custom property
            "--float-opacity": item.opacity,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  )
}
