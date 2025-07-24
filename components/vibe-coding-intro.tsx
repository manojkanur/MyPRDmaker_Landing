"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Sparkles, Code, Palette } from "lucide-react"
import Image from "next/image"

export function VibeCodingIntro() {
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
          Why Prompt is Important in Vibe Coding
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
          Prompts are the heart of vibe coding. They serve as creative instructions that guide AI models to generate
          code, visuals, or interactions that capture a desired mood, aesthetic, or feeling. A well-crafted prompt can
          translate abstract vibes into tangible digital expressions.
        </motion.p>
        <motion.ul className="space-y-4 text-soft-black" variants={itemVariants}>
          <li className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Enables the expression of abstract emotions and concepts through AI-generated outputs.</span>
          </li>
          <li className="flex items-start gap-3">
            <Code className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Prompts shape generative code that aligns with the intended aesthetic or theme.</span>
          </li>
          <li className="flex items-start gap-3">
            <Palette className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Bridges intuition and execution—turning creative intent into functional art.</span>
          </li>
        </motion.ul>
      </div>
      <motion.div
        className="relative w-full h-64 md:h-96 bg-light-gray rounded-xl overflow-hidden shadow-lg"
        variants={itemVariants}
      >
        <Image
          src="/images/prd1.png"
          alt="Prompt-driven Vibe Coding Example"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  )
}
