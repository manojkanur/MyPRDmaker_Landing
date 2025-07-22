"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Grid, OrbitControls, PerspectiveCamera } from "@react-three/drei"

function Scene() {
  const gridRef = useRef<any>()

  useFrame((state, delta) => {
    // Optional: subtle animation for the grid
    // gridRef.current.rotation.y += delta * 0.01;
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <Grid
        ref={gridRef}
        renderOrder={-1}
        position={[0, -1.5, 0]} // Adjust position to be below content
        infiniteGrid
        cellSize={0.6}
        sectionSize={3}
        sectionColor="#999999" // Medium gray
        sectionThickness={0.8}
        fadeDistance={25}
        followCamera={false} // Grid stays fixed
        cellColor="#F5F5F5" // Light gray
        cellThickness={0.4}
        opacity={0.7} // Increased opacity for better visibility
        args={[10, 10]} // Initial size, infiniteGrid makes it extend
      />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />{" "}
      {/* Disable controls for fixed background */}
    </>
  )
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}
