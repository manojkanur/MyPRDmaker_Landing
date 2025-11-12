"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="text-center"
    >
      <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-4 text-soft-black" variants={itemVariants}>
        Your next product can be live today.
      </motion.h2>
      <motion.p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto" variants={itemVariants}>
        One prompt → PRD, website, and build prompts.
      </motion.p>
      <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
        <Button
          asChild
          className="px-10 py-7 text-xl rounded-xl bg-soft-black text-white hover:bg-pure-black transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Link href="https://app.makeprd.ai/">Start Building</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="px-10 py-7 text-xl rounded-xl border-2 border-soft-black text-soft-black hover:bg-light-gray transition-all duration-300 bg-transparent"
        >
          <Link href="https://app.makeprd.ai/">View Pricing</Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
