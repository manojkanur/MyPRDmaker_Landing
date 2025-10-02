"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Grid, OrbitControls, PerspectiveCamera } from "@react-three/drei"

function Scene() {
  const gridRef = useRef<any>()

  // Memoize grid props to prevent unnecessary re-renders
  const gridProps = useMemo(
    () => ({
      renderOrder: -1,
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
      args: [10, 10] as [number, number],
    }),
    [],
  )

  useFrame((state, delta) => {
    // Optional: subtle animation for the grid
    // gridRef.current.rotation.y += delta * 0.01;
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <Grid ref={gridRef} {...gridProps} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  )
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas dpr={Math.min(window.devicePixelRatio, 2)} performance={{ min: 0.5 }} frameloop="demand">
        <Scene />
      </Canvas>
    </div>
  )
}
