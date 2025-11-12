"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote } from "lucide-react"

export function SocialProof() {
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

  const testimonials = [
    {
      quote: "Went from idea to working prototype in a day.",
      author: "Indie Hacker",
    },
    {
      quote: "Best kickoff doc I've seen — and I didn't write it.",
      author: "Product Manager",
    },
    {
      quote: "Made my product site and PRD in one sitting.",
      author: "Solo Founder",
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
          className="text-3xl md:text-4xl font-sora font-bold mb-4 text-center text-soft-black"
          variants={itemVariants}
        >
          What users say
        </motion.h2>
        <motion.p className="text-lg text-medium-gray mb-12 text-center" variants={itemVariants}>
          Real feedback from builders like you
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <Quote className="w-8 h-8 text-medium-gray mb-4" />
              <p className="text-lg text-soft-black mb-4 font-medium">"{testimonial.quote}"</p>
              <p className="text-sm text-medium-gray">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
