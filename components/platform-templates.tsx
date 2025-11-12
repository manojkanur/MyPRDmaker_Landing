"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, FileOutput, Globe } from "lucide-react"

export function PlatformTemplates() {
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
    <section className="relative z-10 py-16 md:py-24 bg-light-gray text-soft-black overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-8 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <g>
            <path
              d="M70 80 L50 100 L70 120"
              fill="none"
              stroke="url(#codeGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
            >
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </path>
            <path
              d="M130 80 L150 100 L130 120"
              fill="none"
              stroke="url(#codeGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
            >
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </path>
            <line
              x1="90"
              y1="75"
              x2="110"
              y2="125"
              stroke="url(#codeGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
            >
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1s" repeatCount="indefinite" />
            </line>
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
          className="text-3xl md:text-4xl font-sora font-bold mb-4 text-center text-soft-black"
          variants={itemVariants}
        >
          Platform Templates & Prompts
        </motion.h2>
        <motion.p className="text-lg text-medium-gray mb-12 text-center max-w-3xl mx-auto" variants={itemVariants}>
          Works where you build: V0, Lovable, Bolt, Cursor, Replit, VS Code - and more.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariants}
            className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-center"
          >
            <div className="p-4 rounded-full bg-light-gray text-soft-black mb-6 inline-flex">
              <Code2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-sora font-bold text-soft-black mb-3">Platform-specific prompts</h3>
            <p className="text-medium-gray">Tailored for your preferred development environment</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-center"
          >
            <div className="p-4 rounded-full bg-light-gray text-soft-black mb-6 inline-flex">
              <FileOutput className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-sora font-bold text-soft-black mb-3">PRD exports</h3>
            <p className="text-medium-gray">Download as PDF or Markdown for easy sharing</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-center"
          >
            <div className="p-4 rounded-full bg-light-gray text-soft-black mb-6 inline-flex">
              <Globe className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-sora font-bold text-soft-black mb-3">Website copy</h3>
            <p className="text-medium-gray">Landing page content structured for quick publishing</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
