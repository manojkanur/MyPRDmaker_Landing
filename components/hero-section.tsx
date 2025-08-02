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

  const duplicatedLogos = [...logos, ...logos]

  return (
    <section
      role="banner"
      aria-label="Hero section with prompt generator intro"
      className="relative flex flex-col justify-between items-center min-h-screen px-4 py-6 md:py-10 bg-white text-soft-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/10 to-transparent opacity-50 animate-pulse-slow" />
      </div>

      {/* Hero Content */}
      <motion.div
        className="max-w-5xl mx-auto z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="block text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wide mb-2"
          variants={itemVariants}
        >
          Powered By SOCIAL EAGLE.AI
        </motion.span>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold leading-tight mb-3 tracking-tighter bg-gradient-to-br from-black via-neutral-700 to-gray-500 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Generate Full Prompts for Your Website —{" "}
          <br className="hidden md:block" />
          In Just One Click.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-medium-gray mb-5 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Save 90% of your time and credits with AI-crafted, production-ready prompts
          tailored for developers, designers, and makers.
        </motion.p>

        <motion.div className="flex justify-center mb-4" variants={itemVariants}>
          <Button
            asChild
            className="px-8 py-5 text-lg md:text-xl font-semibold rounded-2xl bg-soft-black text-white hover:bg-pure-black transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <Link href="https://mt.makeprd.ai/login" prefetch={false}>
              Generate Prompt
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Supported Platforms */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full max-w-6xl mx-auto z-10 flex flex-col items-center pb-2"
      >
        <motion.h2
          className="text-xl md:text-2xl font-sora font-bold mb-2 text-soft-black"
          variants={itemVariants}
        >
          Supported Platforms
        </motion.h2>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden py-2 px-1"
          variants={itemVariants}
        >
          {/* Row 1 */}
          <div className="flex items-center justify-start w-[200%] animate-scroll-left mb-1">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-1 bg-white rounded-lg shadow-md w-20 h-14 md:w-24 md:h-16 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-start w-[200%] animate-scroll-right">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-1 bg-white rounded-lg shadow-md w-20 h-14 md:w-24 md:h-16 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
