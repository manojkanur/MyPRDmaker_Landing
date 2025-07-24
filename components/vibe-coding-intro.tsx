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
          What is Vibe Coding?
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
          Vibe coding is an emerging approach to creative development where the focus is on capturing an aesthetic,
          emotional, or conceptual "vibe" in code, rather than strictly adhering to functional requirements. It's about
          expressing an artistic vision through programming, often resulting in generative art, interactive
          installations, or unique digital experiences.
        </motion.p>
        <motion.ul className="space-y-4 text-soft-black" variants={itemVariants}>
          <li className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Focus on aesthetic and emotional expression.</span>
          </li>
          <li className="flex items-start gap-3">
            <Code className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Exploration of generative art and interactive experiences.</span>
          </li>
          <li className="flex items-start gap-3">
            <Palette className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>Bridging the gap between art and technology.</span>
          </li>
        </motion.ul>
      </div>
      <motion.div
        className="relative w-full h-64 md:h-96 bg-light-gray rounded-xl overflow-hidden shadow-lg"
        variants={itemVariants}
      >
        <Image
          src="/images/prd1.png"
          alt="MakePRD Dashboard Interface"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  )
}
