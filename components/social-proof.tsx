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
      author: "Sarah K., Indie Hacker",
    },
    {
      quote: "Best kickoff doc I've seen - and I didn't write it.",
      author: "Mike T., Product Manager",
    },
    {
      quote: "Made my product site and PRD in one sitting.",
      author: "Alex R., Solo Founder",
    },
    {
      quote: "Saved me weeks of planning. The PRD was ready for my dev team instantly.",
      author: "Jessica L., Startup Founder",
    },
    {
      quote: "The Vibe Prompt feature is magic. I got real UI on the first try.",
      author: "David M., Designer",
    },
    {
      quote: "Finally, a tool that understands what I'm trying to build.",
      author: "Chris P., Technical Lead",
    },
    {
      quote: "Cut my ideation time by 90%. Now I can test ideas fast.",
      author: "Emma W., Product Designer",
    },
    {
      quote: "The platform templates saved me hours of rewriting prompts.",
      author: "James B., Full-stack Developer",
    },
    {
      quote: "Best investment for my agency. We ship client projects faster now.",
      author: "Nina S., Agency Owner",
    },
    {
      quote: "This is exactly what the micro-SaaS community needed.",
      author: "Tom H., Indie Maker",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-light-gray text-soft-black overflow-hidden">
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
      </motion.div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 w-[350px] p-8 bg-white rounded-xl shadow-lg">
              <Quote className="w-8 h-8 text-medium-gray mb-4" />
              <p className="text-lg text-soft-black mb-4 font-medium">"{testimonial.quote}"</p>
              <p className="text-sm text-medium-gray">- {testimonial.author}</p>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 w-[350px] p-8 bg-white rounded-xl shadow-lg">
              <Quote className="w-8 h-8 text-medium-gray mb-4" />
              <p className="text-lg text-soft-black mb-4 font-medium">"{testimonial.quote}"</p>
              <p className="text-sm text-medium-gray">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
