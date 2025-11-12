"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, Lightbulb, Sparkles, Layers } from "lucide-react"

export function ModesSection() {
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
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const modes = [
    {
      icon: FileText,
      title: "PRD Mode",
      description: "Full Product Requirements Document for clean handoff.",
    },
    {
      icon: Lightbulb,
      title: "Ideastorm Mode",
      description: "Explore niches, pricing, and differentiators.",
    },
    {
      icon: Sparkles,
      title: "Vibe PRD Mode",
      description: "Turn rough ideas into refined build prompts that render UI.",
    },
    {
      icon: Layers,
      title: "General PRD Mode",
      description: "Generate full documentation for bigger apps.",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-sora font-bold mb-4 text-center text-soft-black"
          variants={itemVariants}
        >
          Modes
        </motion.h2>
        <motion.p className="text-lg text-medium-gray mb-12 text-center max-w-2xl mx-auto" variants={itemVariants}>
          Choose the right mode for your project needs
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-light-gray rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-center"
            >
              <div className="p-3 rounded-full bg-white text-soft-black mb-4 inline-flex mx-auto">
                <mode.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-sora font-bold text-soft-black mb-2">{mode.title}</h3>
              <p className="text-sm text-medium-gray">{mode.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
