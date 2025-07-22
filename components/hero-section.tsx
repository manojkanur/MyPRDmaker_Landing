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
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section className="relative flex items-center justify-center min-h-screen text-center px-4 py-16 md:py-24 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white overflow-hidden">
      <motion.div className="max-w-4xl mx-auto z-10" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold leading-tight mb-6 tracking-tighter"
          variants={itemVariants}
        >
          Generate a Complete Prompt for Your Website in Seconds
        </motion.h1>
        <motion.p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto" variants={itemVariants}>
          Save 90% of your time and creative energy using AI-designed prompt blueprints.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={itemVariants}>
          <Button
            asChild
            className="w-full sm:w-auto px-10 py-6 text-lg rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="#generate-prompt">Generate Prompt</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto px-10 py-6 text-lg rounded-xl border-white text-white hover:bg-zinc-700 transition-all duration-300 bg-transparent shadow-lg hover:shadow-xl"
          >
            <Link href="#see-example">See Example</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
