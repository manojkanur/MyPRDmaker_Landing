"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Wand2, Sparkles, Code } from "lucide-react"

export function MakePRDVibeCoding() {
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
      className="text-center py-16 md:py-24 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl"
    >
      <div className="container max-w-4xl mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 text-pure-black" variants={itemVariants}>
          MakePRD: Your Partner in Vibe Coding
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-medium-gray mb-12" variants={itemVariants}>
          MakePRD is specifically designed to bridge the gap between your abstract creative ideas and concrete coding
          prompts. We understand the nuances of artistic expression and translate them into actionable instructions for
          your favorite vibe coding platforms.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="space-y-4 p-6 bg-light-gray rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            variants={itemVariants}
          >
            <Wand2 className="w-10 h-10 text-soft-black mx-auto" />
            <h3 className="text-xl font-sora font-bold text-soft-black">Intuitive Prompt Generation</h3>
            <p className="text-medium-gray text-sm">
              Describe your desired aesthetic, mood, or interaction, and our AI crafts a detailed prompt.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4 p-6 bg-light-gray rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            variants={itemVariants}
          >
            <Sparkles className="w-10 h-10 text-soft-black mx-auto" />
            <h3 className="text-xl font-sora font-bold text-soft-black">Creative Exploration</h3>
            <p className="text-medium-gray text-sm">
              Experiment with different styles and parameters to unlock new creative possibilities.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4 p-6 bg-light-gray rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            variants={itemVariants}
          >
            <Code className="w-10 h-10 text-soft-black mx-auto" />
            <h3 className="text-xl font-sora font-bold text-soft-black">Platform Agnostic Output</h3>
            <p className="text-medium-gray text-sm">
              Generate prompts compatible with various creative coding environments and frameworks.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
