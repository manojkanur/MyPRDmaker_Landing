"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function SupportedPlatforms() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { y: 0, opacity: 1 },
  }

  const logos = [
    { src: "/images/replit.png", alt: "Replit Logo" },
    { src: "/images/devin.png", alt: "Devin Logo" },
    { src: "/images/dia-new.png", alt: "Dia Logo" },
    { src: "/images/junie.png", alt: "Junie Logo" },
    { src: "/images/cursor.png", alt: "Cursor Logo" },
    { src: "/images/codex.png", alt: "Codex Logo" },
    { src: "/images/lovable.png", alt: "Lovable Logo" },
    { src: "/images/bolt.png", alt: "Bolt Logo" },
    { src: "/images/roocode.png", alt: "Roocode Logo" },
    { src: "/images/trae.png", alt: "TRAE Logo" },
    { src: "/images/same.png", alt: "Same Logo" },
    { src: "/images/cline.png", alt: "Cline Logo" },
    { src: "/images/v0.png", alt: "v0 Logo" },
    { src: "/images/windsuf.png", alt: "Windsurf Logo" },
    { src: "/images/vscode.png", alt: "VSCode Logo" },
  ]

  // Duplicate logos multiple times for seamless continuous scrolling
  const allLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container text-center"
      >
        <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-soft-black" variants={itemVariants}>
          Supported Platforms
        </motion.h2>

        {/* Single curved rectangle box for all logo rows */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden py-8"
          variants={itemVariants}
        >
          {/* Row 1: scrolls left */}
          <div className="flex items-center justify-start w-[200%] animate-scroll-left mb-4">
            {allLogos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-4 p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md w-40 h-20 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill // Make logo fill the box
                  className="object-contain" // Ensure entire logo is visible
                />
              </div>
            ))}
          </div>

          {/* Row 2: scrolls right */}
          <div className="flex items-center justify-start w-[200%] animate-scroll-right mb-4">
            {allLogos.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-4 p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md w-40 h-20 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill // Make logo fill the box
                  className="object-contain" // Ensure entire logo is visible
                />
              </div>
            ))}
          </div>

          {/* Row 3: scrolls left */}
          <div className="flex items-center justify-start w-[200%] animate-scroll-left mb-4">
            {allLogos.map((logo, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 mx-4 p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md w-40 h-20 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill // Make logo fill the box
                  className="object-contain" // Ensure entire logo is visible
                />
              </div>
            ))}
          </div>

          {/* Row 4: scrolls right */}
          <div className="flex items-center justify-start w-[200%] animate-scroll-right">
            {allLogos.map((logo, index) => (
              <div
                key={`row4-${index}`}
                className="flex-shrink-0 mx-4 p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md w-40 h-20 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill // Make logo fill the box
                  className="object-contain" // Ensure entire logo is visible
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
