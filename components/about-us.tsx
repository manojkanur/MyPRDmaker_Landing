"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, Heart, TrendingUp } from "lucide-react"

export function AboutUs() {
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

  const values = [
    {
      icon: Target,
      title: "Ship faster with less waste",
    },
    {
      icon: Heart,
      title: "Keep docs simple and useful",
    },
    {
      icon: TrendingUp,
      title: "Support builders at every stage",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container max-w-4xl mx-auto text-center"
      >
        <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-6 text-soft-black" variants={itemVariants}>
          About Us
        </motion.h2>
        <motion.p className="text-lg text-medium-gray mb-6" variants={itemVariants}>
          We believe building should be simple.
        </motion.p>
        <motion.p className="text-base text-medium-gray mb-8 max-w-2xl mx-auto" variants={itemVariants}>
          MakePRD.ai started with a question: Why does every new product begin with a blank page?
        </motion.p>
        <motion.p className="text-base text-medium-gray mb-12 max-w-2xl mx-auto" variants={itemVariants}>
          We combine clear product thinking with AI to turn ideas into buildable plans and launch-ready websites - fast.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-2xl font-sora font-bold text-soft-black mb-8">Our promise:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-light-gray rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="p-3 rounded-full bg-white text-soft-black mb-4 inline-flex">
                  <value.icon className="w-6 h-6" />
                </div>
                <p className="text-base font-semibold text-soft-black">{value.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
