"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, Globe, FileCheck, MessageSquare, Zap, Download } from "lucide-react"

export function CoreBenefits() {
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

  const benefits = [
    {
      icon: Clock,
      title: "Save 90% time & credits",
      description: "Stop wasting cycles on planning and formatting.",
    },
    {
      icon: Globe,
      title: "From idea to website",
      description: "Get hero copy, features, pricing, and FAQs - ready to ship.",
    },
    {
      icon: FileCheck,
      title: "Clear PRDs for handoff",
      description: "User stories, acceptance criteria, edge cases, success metrics.",
    },
    {
      icon: MessageSquare,
      title: "Edit with Smart Chat",
      description: "Update any section quickly.",
    },
    {
      icon: Zap,
      title: "Micro-SaaS friendly",
      description: "Perfect for quick launches, validation, and iteration.",
    },
    {
      icon: Download,
      title: "Export anywhere",
      description: "PDF, Markdown, or copy-paste - share your PRD your way.",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-light-gray text-soft-black overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 opacity-8 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="benefitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <g className="animate-pulse">
            <path
              d="M100 30 L110 70 L150 75 L120 100 L130 140 L100 120 L70 140 L80 100 L50 75 L90 70 Z"
              fill="url(#benefitGradient)"
              opacity="0.5"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <circle cx="100" cy="100" r="45" fill="none" stroke="url(#benefitGradient)" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
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
          Core Benefits
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="p-3 rounded-full bg-light-gray text-soft-black mb-4 inline-flex">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-sora font-bold text-soft-black mb-2">{benefit.title}</h3>
              <p className="text-medium-gray">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
