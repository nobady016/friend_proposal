export type Stage =
  | "intro"
  | "names"
  | "photos"
  | "shayari"
  | "bollywood"
  | "question"
  | "yes"

export type Names = {
  crush: string
  me: string
}

export const PHOTOS: { src: string; caption: string }[] = [
  {
    src: "/photos/me-0.png",
    caption: "Document waali photo... bas tumhare liye smile add nahi kar paaya 😅",
  },
  {
    src: "/photos/me-1.png",
    caption: "Yehi waali ID-card type photo dikhaani thi pehle — fir socha cute version send karu 💁‍♂️",
  },
  {
    src: "/photos/me-2.png",
    caption: "Travel mode on. Agle trip mein tum chalo, GPS tum ho 🗺️❤️",
  },
  {
    src: "/photos/me-3.png",
    caption: "Pose dekho, dialogue suno: 'Tum mile toh main complete ho gaya' 🎬",
  },
]

export const SHAYARIS: string[] = [
  "Tum mile toh laga, zindagi ka WiFi connect ho gaya —\nab buffering bhi sweet lagti hai. 📶💕",
  "Chand bhi sharma jaye tumhari smile dekh ke,\naur main? Main toh already gir chuka hoon — literally, seedhiyon se. 🌙😅",
  "Coffee thandi ho jaye, mujhe farak nahi padta…\nbas tum garam mood mein mat aana mere pe. ☕❤️",
  "Tumhare bina din aise hai jaise biryani bina raita —\nchal toh sakta hai, par maza nahi aata. 🍚🥲",
]
