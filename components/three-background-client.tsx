"use client"

import dynamic from "next/dynamic"

const ThreeBackground = dynamic(
  () => import("./three-background").then((mod) => mod.ThreeBackground).catch(() => () => null),
  {
    ssr: false,
    loading: () => null,
  },
)

export default function ThreeBackgroundClient() {
  return <ThreeBackground />
}
