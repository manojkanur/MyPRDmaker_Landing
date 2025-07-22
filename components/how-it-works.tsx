"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileInputIcon as Input, Layout, Code } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface StepCardProps {
  icon: React.ElementType
  step: number
  title: string
  description: string
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, step, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants}>
      <Card className="bg-white/80 backdrop-blur-sm border border-light-gray shadow-lg rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
        <CardHeader className="p-0 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-full bg-light-gray text-soft-black">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-4xl font-sora font-bold text-medium-gray opacity-20">{`0${step}`}</span>
          </div>
          <CardTitle className="text-2xl font-sora font-bold text-soft-black">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-medium-gray">
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function HowItWorks() {
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

  const steps = [
    {
      icon: Input,
      step: 1,
      title: "Describe Your Vibe",
      description:
        "Simply describe your creative coding idea or desired 'vibe' using our intelligent prompt interface. Be as expressive as you like!",
    },
    {
      icon: Layout,
      step: 2,
      title: "Choose a Style",
      description:
        "Select from a variety of prompt styles tailored for different coding platforms, languages, or creative outputs.",
    },
    {
      icon: Code,
      step: 3,
      title: "Get a Ready-Made Prompt",
      description:
        "Instantly receive a comprehensive, well-structured coding prompt, ready for your creative platform.",
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="text-center"
    >
      <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-soft-black" variants={itemVariants}>
        How It Works
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepCard key={step.step} {...step} />
        ))}
      </div>
    </motion.div>
  )
}
