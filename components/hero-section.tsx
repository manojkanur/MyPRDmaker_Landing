"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
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

  return (
    <section
      role="banner"
      aria-label="Hero section with prompt generator intro"
      className="relative flex items-center justify-center min-h-screen text-center px-4 py-16 md:py-24 bg-white text-soft-black overflow-hidden"
    >
      {/* Subtle radial gradient overlay for depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/10 to-transparent opacity-50 animate-pulse-slow" />
      </div>

      <motion.div
        className="max-w-5xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="block text-base md:text-lg font-semibold text-gray-500 uppercase tracking-wide mb-4"
          variants={itemVariants}
        >
          MakePRD AI Generator
        </motion.span>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-sora font-bold leading-tight mb-6 tracking-tighter bg-gradient-to-br from-black via-neutral-700 to-gray-500 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Generate Full Prompts for Your Website —  
          <br className="hidden md:block" />
          In Just One Click.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-medium-gray mb-10 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Save 90% of your time and credits with AI-crafted, production-ready prompts tailored for developers, designers, and makers.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={itemVariants}>
          <Button
            asChild
            className="w-full sm:w-auto px-10 py-7 text-xl rounded-xl bg-soft-black text-white hover:bg-pure-black transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="#generate-prompt">Generate Prompt</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto px-10 py-7 text-xl rounded-xl border-soft-black text-soft-black hover:bg-light-gray transition-all duration-300 bg-transparent shadow-lg hover:shadow-xl"
          >
            <Link href="#see-example">See Example</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
