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
    <section className="relative z-10 py-16 md:py-24 bg-white text-soft-black overflow-hidden">
      <div className="absolute left-0 top-1/4 w-72 h-72 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <g>
            <circle cx="70" cy="80" r="18" fill="url(#teamGradient)" opacity="0.5">
              <animate attributeName="cy" values="80;75;80" dur="3s" repeatCount="indefinite" />
            </circle>
            <path d="M70 98 Q70 120 55 130 L85 130 Q70 120 70 98" fill="url(#teamGradient)" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.7;0.5" dur="3s" repeatCount="indefinite" />
            </path>
            <circle cx="130" cy="80" r="18" fill="url(#teamGradient)" opacity="0.5">
              <animate attributeName="cy" values="80;75;80" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <path d="M130 98 Q130 120 115 130 L145 130 Q130 120 130 98" fill="url(#teamGradient)" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.7;0.5" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container relative z-10"
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
