"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, Target, Sparkles } from "lucide-react"

export function ImportanceOfPrompts() {
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
    visible: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-16 md:py-24 bg-light-gray text-soft-black"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 text-pure-black" variants={itemVariants}>
          The Unseen Power of a Well-Crafted Prompt
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-medium-gray mb-12" variants={itemVariants}>
          In the age of AI, the quality of your output is directly proportional to the quality of your input. A precise
          and thoughtful prompt is no longer just an instruction; it's the key to unlocking AI's full potential.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="space-y-4 p-6 bg-white rounded-lg shadow-sm" variants={itemVariants}>
            <Lightbulb className="w-10 h-10 text-soft-black mx-auto" />
            <h3 className="text-xl font-sora font-bold text-soft-black">Clarity & Precision</h3>
            <p className="text-medium-gray text-sm">
              Eliminate ambiguity and guide the AI to generate exactly what you envision, saving countless iterations.
            </p>
          </motion.div>
          <motion.div className="space-y-4 p-6 bg-white rounded-lg shadow-sm" variants={itemVariants}>
            <Target className="w-10 h-10 text-soft-black mx-auto" />
            <h3 className="text-xl font-sora font-bold text-soft-black">Efficiency & Speed</h3>
            <p className="text-medium-gray text-sm">
              Reduce development time by getting highly relevant and usable outputs on the first try.
            </p>
          </motion.div>
          <motion.div className="space-y-4 p-6 bg-white rounded-lg shadow-sm" variants={itemVariants}>
            <Sparkles className="w-10 h-10 text-soft-black mx-auto" />
            <h3 className="text-xl font-sora font-bold text-soft-black">Unleash Creativity</h3>
            <p className="text-medium-gray text-sm">
              Transform abstract ideas into concrete instructions, allowing you to focus on artistic execution.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
