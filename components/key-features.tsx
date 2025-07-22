"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Lightbulb, Code, Users } from "lucide-react"

export function KeyFeatures() {
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

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Prompt Generation",
      description: "Transform abstract ideas into concrete, actionable coding prompts with intelligent AI assistance.",
    },
    {
      icon: Lightbulb,
      title: "Customizable Vibe Styles",
      description:
        "Choose from a library of artistic styles or define your own to match your creative vision perfectly.",
    },
    {
      icon: Code,
      title: "Multi-Platform Compatibility",
      description:
        "Generate prompts optimized for various creative coding environments like p5.js, Three.js, and more.",
    },
    {
      icon: Users,
      title: "Collaborative Workflows",
      description:
        "Share and iterate on prompts with your team, ensuring everyone is aligned on the creative direction.",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-light-gray text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container text-center"
      >
        <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-pure-black" variants={itemVariants}>
          Unlock Your Creative Potential with MakePRD
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/80 backdrop-blur-sm border border-light-gray shadow-lg rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader className="p-0 mb-4">
                  <div className="p-3 rounded-full bg-light-gray text-soft-black mb-4 inline-flex">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-sora font-bold text-soft-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-medium-gray">
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
