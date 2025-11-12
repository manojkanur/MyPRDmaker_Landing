"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const logos = [
    { src: "/images/replit.png", alt: "Replit Logo" },
    { src: "/images/devin.png", alt: "Devin Logo" },
    { src: "/images/dia.png", alt: "Dia Logo" },
    { src: "/images/Junie.png", alt: "Junie Logo" },
    { src: "/images/cursor.png", alt: "Cursor Logo" },
    { src: "/images/codex.png", alt: "Codex Logo" },
    { src: "/images/lovable.png", alt: "Lovable Logo" },
    { src: "/images/bolt.png", alt: "Bolt Logo" },
    { src: "/images/roocode.png", alt: "Roocode Logo" },
    { src: "/images/trae.png", alt: "TRAE Logo" },
    { src: "/images/same.png", alt: "Same Logo" },
    { src: "/images/cline.png", alt: "Cline Logo" },
    { src: "/images/v0.png", alt: "v0 Logo" },
    { src: "/images/windsurf.png", alt: "Windsurf Logo" },
    { src: "/images/vscode.png", alt: "VSCode Logo" },
  ]

  const duplicatedLogos = [...logos, ...logos]

  return (
    <section
      role="banner"
      aria-label="Hero section with MakePRD intro"
      className="relative min-h-screen flex flex-col justify-between bg-white text-soft-black overflow-hidden"
    >
      {/* Background depth gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/10 to-transparent opacity-50 animate-pulse-slow" />
      </div>

      {/* Hero Content - Properly spaced to avoid header overlap */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 md:pt-40 pb-4">
        <motion.div
          className="w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="block text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wide mb-8"
            variants={itemVariants}
          >
            Loved by founders, PMs, and indie hackers
          </motion.span>

          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight mb-6 tracking-tighter bg-gradient-to-br from-black via-neutral-700 to-gray-500 text-transparent bg-clip-text text-center"
            variants={itemVariants}
          >
            One prompt. One product.
            <br />
            Live in minutes.
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-medium-gray mb-8 max-w-4xl mx-auto text-center leading-relaxed"
            variants={itemVariants}
          >
            MakePRD.ai turns a single idea into a product website, a clear PRD, and build-ready prompts — so you can
            ship micro-SaaS fast and save 90% of time and credits.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-6" variants={itemVariants}>
            <Button
              asChild
              className="px-8 py-4 text-lg font-semibold rounded-2xl bg-soft-black text-white hover:bg-pure-black transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Link href="https://app.makeprd.ai/" prefetch={false}>
                Start Building
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-soft-black text-soft-black hover:bg-light-gray transition-all duration-300 bg-transparent"
            >
              <Link href="#demo" prefetch={false}>
                Watch Demo
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Supported Platforms Section - Compact and at bottom */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 px-4 pb-8"
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.h2
            className="text-xl md:text-2xl font-sora font-bold mb-6 text-soft-black text-center"
            variants={itemVariants}
          >
            Supported Platforms
          </motion.h2>

          {/* Logo container with scrolling animation */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden py-4"
            variants={itemVariants}
          >
            {/* Row 1 - scrolls left */}
            <div className="flex items-center justify-start w-[200%] animate-scroll-left mb-3">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-2 bg-white rounded-lg shadow-md w-20 h-14 md:w-24 md:h-16 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2"
                    loading="lazy"
                    sizes="(max-width: 768px) 80px, 96px"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 - scrolls right */}
            <div className="flex items-center justify-start w-[200%] animate-scroll-right">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-2 bg-white rounded-lg shadow-md w-20 h-14 md:w-24 md:h-16 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2"
                    loading="lazy"
                    sizes="(max-width: 768px) 80px, 96px"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
