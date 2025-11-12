"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { User, Briefcase, Code, Building2 } from "lucide-react"

export function UseCases() {
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

  const useCases = [
    {
      icon: User,
      title: "Solo founders / indie hackers",
      description: "Launch a micro-SaaS this weekend.",
    },
    {
      icon: Briefcase,
      title: "Product managers",
      description: "Align scope fast and hand off cleanly.",
    },
    {
      icon: Code,
      title: "Engineers",
      description: "Start building with clear requirements.",
    },
    {
      icon: Building2,
      title: "Agencies / studios",
      description: "Generate specs and sites quickly for clients.",
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
          className="text-3xl md:text-4xl font-sora font-bold mb-12 text-center text-soft-black"
          variants={itemVariants}
        >
          Use Cases
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-light-gray rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-center"
            >
              <div className="p-3 rounded-full bg-white text-soft-black mb-4 inline-flex">
                <useCase.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-sora font-bold text-soft-black mb-2">{useCase.title}</h3>
              <p className="text-sm text-medium-gray">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
