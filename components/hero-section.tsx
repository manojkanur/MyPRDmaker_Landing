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
    <section className="relative flex items-center justify-center min-h-screen px-6 py-20 text-center bg-white text-[#212121]">
      <motion.div
        className="w-full max-w-4xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-sora font-extrabold leading-tight tracking-tight mb-6"
          variants={itemVariants}
        >
          Generate Perfect Prompts <br /> for Your Coding Tools — Instantly.
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-[#666666] mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Save 90% of your time and effort with AI-optimized prompts for Vibe, Cursor, Codex, Same.dev, and more.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Button
            asChild
            className="w-full sm:w-auto px-8 py-5 text-base md:text-lg font-medium rounded-xl bg-[#3ECF8E] text-white hover:opacity-90 transition shadow-lg hover:shadow-xl"
          >
            <Link href="#generate-prompt">Generate Prompt</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto px-8 py-5 text-base md:text-lg font-medium rounded-xl border-[#212121] text-[#212121] hover:bg-[#f4f4f4] transition shadow-md hover:shadow-lg"
          >
            <Link href="#see-example">See Example</Link>
          </Button>
        </motion.div>

        <motion.p
          className="text-sm text-[#999999] mt-6"
          variants={itemVariants}
        >
          Trusted by indie devs, startup teams, and creative technologists.
        </motion.p>
      </motion.div>
    </section>
  )
}
