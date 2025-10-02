"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Grid, PerspectiveCamera } from "@react-three/drei"

function Scene() {
  const gridRef = useRef<THREE.Object3D | null>(null)

  // Stable grid config (no re-renders)
  const gridProps = useMemo(
    () => ({
      renderOrder: -1 as number,
      position: [0, -1.5, 0] as [number, number, number],
      infiniteGrid: true,
      cellSize: 0.6,
      sectionSize: 3,
      sectionColor: "#999999",
      sectionThickness: 0.8,
      fadeDistance: 25,
      followCamera: false,
      cellColor: "#F5F5F5",
      cellThickness: 0.4,
      opacity: 0.7,
    }),
    [],
  )

  useFrame((_state, _delta) => {
    // Optional subtle animation:
    // if (gridRef.current) gridRef.current.rotation.y += _delta * 0.01
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <Grid ref={gridRef as any} {...gridProps} />
      {/* OrbitControls not needed (all interactions disabled); remove to save bytes */}
    </>
  )
}

export function ThreeBackground() {
  // Guard against SSR/window and use preferred R3F DPR range
  const dpr = useMemo<[number, number]>(() => {
    if (typeof window === "undefined") return [1, 1]
    const max = Math.min(window.devicePixelRatio || 1, 2)
    return [1, max]
  }, [])

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas dpr={dpr} frameloop="demand">
        <Scene />
      </Canvas>
    </div>
  )
}
