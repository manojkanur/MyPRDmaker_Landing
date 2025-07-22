"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, Zap, Rocket } from "lucide-react"

export function ProblemSolution() {
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
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
    >
      <div className="space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-sora font-bold leading-tight text-soft-black"
          variants={itemVariants}
        >
          The Pain of Manual Prompt Creation
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
          Crafting precise and inspiring prompts for vibe coding platforms is often a tedious, time-consuming, and
          inconsistent process. It drains valuable creative time from developers and designers, leading to delays and
          uninspired outputs.
        </motion.p>
        <motion.ul className="space-y-4 text-soft-black" variants={itemVariants}>
          <li className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Hours spent on finding the right words, not coding.</span>
          </li>
          <li className="flex items-start gap-3">
            <Zap className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Inconsistent quality across different creative projects.</span>
          </li>
          <li className="flex items-start gap-3">
            <Rocket className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Delays in bringing your creative visions to life.</span>
          </li>
        </motion.ul>
      </div>
      <div className="space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-sora font-bold leading-tight text-soft-black"
          variants={itemVariants}
        >
          MakePRD: Your AI-Powered Prompt Solution
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
          MakePRD transforms your creative vision into a polished coding prompt instantly. Our AI-powered platform
          automates the entire process, allowing you to focus on innovation and the actual "vibe coding."
        </motion.p>
        <motion.ul className="space-y-4 text-soft-black" variants={itemVariants}>
          <li className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Generate detailed prompts from simple ideas.</span>
          </li>
          <li className="flex items-start gap-3">
            <Zap className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Ensure consistency and high quality every time.</span>
          </li>
          <li className="flex items-start gap-3">
            <Rocket className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Accelerate your creative coding workflow.</span>
          </li>
        </motion.ul>
      </div>
    </motion.div>
  )
}
