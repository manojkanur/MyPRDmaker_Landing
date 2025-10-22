"use client"

import dynamic from "next/dynamic"

const ThreeBackground = dynamic(() => import("./three-background").then((mod) => ({ default: mod.ThreeBackground })), {
  ssr: false,
  loading: () => null,
})

export default function ThreeBackgroundClient() {
  return <ThreeBackground />
}
