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
      description: "Get hero copy, features, pricing, and FAQs — ready to ship.",
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
      description: "PDF, Markdown, or copy-paste — share your PRD your way.",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-light-gray text-soft-black">
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
