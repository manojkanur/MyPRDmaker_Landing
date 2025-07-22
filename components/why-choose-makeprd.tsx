"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle, Zap, Lightbulb, Users } from "lucide-react"

export function WhyChooseMakePRD() {
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
      icon: CheckCircle,
      title: "Unmatched Precision",
      description:
        "Our AI understands the nuances of your creative vision, delivering prompts that are highly relevant and accurate.",
    },
    {
      icon: Zap,
      title: "Blazing Fast Generation",
      description:
        "Say goodbye to creative blocks. Generate detailed prompts in seconds, not hours, accelerating your workflow.",
    },
    {
      icon: Lightbulb,
      title: "Enhanced Creativity",
      description:
        "Focus on the artistic execution. MakePRD handles the prompt articulation, freeing your mind for innovation.",
    },
    {
      icon: Users,
      title: "Seamless Collaboration",
      description:
        "Share and refine prompts with your team effortlessly, ensuring everyone is on the same creative page.",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container text-center"
      >
        <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-pure-black" variants={itemVariants}>
          Why Choose MakePRD?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-light-gray rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-full bg-white text-soft-black mb-4 inline-flex">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-sora font-bold text-soft-black mb-2">{feature.title}</h3>
              <p className="text-medium-gray text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
