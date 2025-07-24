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
      <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 text-soft-black" variants={itemVariants}>
        Ready to generate your first Vibe Coding Prompt?
      </motion.h2>
      <motion.div variants={itemVariants}>
        <Button
          asChild
          className="px-10 py-7 text-xl rounded-xl bg-soft-black text-white hover:bg-pure-black transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Link href="https://preview--make-prd-magic-ui.lovable.app/login">Start Generating Now</Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
