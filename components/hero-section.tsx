"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 py-20 text-center bg-gradient-to-b from-black via-[#1a1a1a] to-[#2a2a2a] text-white overflow-hidden">
      {/* Optional animated pulse overlay for subtle depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 opacity-10 animate-pulse" />
      </div>

      <motion.div
        className="w-full max-w-4xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-sora font-extrabold leading-tight tracking-tight mb-6"
          variants={itemVariants}
        >
          Generate Perfect Prompts <br /> for Your Coding Tools — Instantly.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base md:text-xl text-[#BBBBBB] mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Save 90% of your time and effort with AI-optimized prompts for Vibe, Cursor, Codex, Same.dev, and more.
          Whether you're building, debugging, or designing — we've got your next best command.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Button
            asChild
            className="w-full sm:w-auto px-8 py-5 text-base md:text-lg font-medium rounded-xl bg-[#3ECF8E] text-black hover:opacity-90 transition shadow-lg hover:shadow-xl"
          >
            <Link href="#generate-prompt">Generate Prompt</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto px-8 py-5 text-base md:text-lg font-medium rounded-xl border-white text-white hover:bg-[#444444] transition shadow-md hover:shadow-lg"
          >
            <Link href="#see-example">See Example</Link>
          </Button>
        </motion.div>

        {/* Trusted by line */}
        <motion.p
          className="text-sm text-[#888888] mt-6"
          variants={itemVariants}
        >
          Trusted by indie devs, startup teams, and creative technologists.
        </motion.p>
      </motion.div>
    </section>
  )
}
