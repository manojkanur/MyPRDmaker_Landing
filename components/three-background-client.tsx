"use client"

import dynamic from "next/dynamic"

const ThreeBackground = dynamic(() => import("./three-background"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-white" />,
})

export default function ThreeBackgroundClient() {
  return <ThreeBackground />
}
