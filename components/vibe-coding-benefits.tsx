"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, Brain, Lightbulb } from "lucide-react"
import Image from "next/image"

export function VibeCodingBenefits() {
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
      <motion.div
        className="relative w-full h-64 md:h-96 bg-light-gray rounded-xl overflow-hidden shadow-lg order-2 md:order-1"
        variants={itemVariants}
      >
        <Image
          src="/images/prd2.png"
          alt="MakePRD Platform Selection Interface"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </motion.div>
      <div className="space-y-6 order-1 md:order-2">
        <motion.h2
          className="text-3xl md:text-4xl font-sora font-bold leading-tight text-soft-black"
          variants={itemVariants}
        >
          Why Vibe Coding Matters & Saves Time
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
          In a world increasingly driven by functional requirements, vibe coding offers a refreshing space for pure
          creativity and experimentation. It allows developers and designers to explore new artistic dimensions and push
          the boundaries of what code can create.
        </motion.p>
        <motion.ul className="space-y-4 text-soft-black" variants={itemVariants}>
          <li className="flex items-start gap-3">
            <Clock className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>**Time-Saving:** Focus on creative execution, not prompt crafting.</span>
          </li>
          <li className="flex items-start gap-3">
            <Brain className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>**Boosts Creativity:** Frees up mental space for artistic exploration.</span>
          </li>
          <li className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 flex-shrink-0 text-medium-gray" />
            <span>**Reduces Friction:** Get started faster with clear, inspiring prompts.</span>
          </li>
        </motion.ul>
        <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
          By automating the prompt generation, MakePRD ensures you spend less time articulating your vision and more
          time bringing it to life.
        </motion.p>
      </div>
    </motion.div>
  )
}
