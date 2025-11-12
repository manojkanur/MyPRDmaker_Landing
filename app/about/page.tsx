"use client"

import Image from "next/image"
import { ImportanceOfPrompts } from "@/components/importance-of-prompts"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutUsPage() {
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
    <main className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container"
      >
        <motion.h1 className="text-4xl md:text-5xl font-sora font-bold text-center mb-12" variants={itemVariants}>
          About MakePRD
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-16">
          <div className="space-y-6">
            <motion.h2 className="text-3xl md:text-4xl font-sora font-bold leading-tight" variants={itemVariants}>
              Our Mission
            </motion.h2>
            <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
              At MakePRD, our mission is to empower creative developers and designers by streamlining the most critical
              step in bringing digital art to life: defining the creative prompt. We believe that great generative art
              starts with clear, concise, and inspiring prompts, and our AI is built to make that process effortless.
            </motion.p>
            <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
              We are dedicated to building tools that enhance creativity and efficiency, allowing teams to focus on
              building, not just documenting.
            </motion.p>
          </div>
          <motion.div
            className="relative w-full h-64 md:h-96 bg-light-gray rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <Image
              src="/professional-business-team-collaborating-on-projec.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-16">
          <motion.div
            className="relative w-full h-64 md:h-96 bg-light-gray rounded-xl overflow-hidden shadow-lg order-2 md:order-1"
            variants={itemVariants}
          >
            <Image
              src="/modern-professional-office-workspace-with-technolo.jpg"
              alt="Our Vision"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="space-y-6 order-1 md:order-2">
            <motion.h2 className="text-3xl md:text-4xl font-sora font-bold leading-tight" variants={itemVariants}>
              Our Vision
            </motion.h2>
            <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
              We envision a world where every creative idea, no matter how abstract, can be articulated into a clear,
              actionable prompt within minutes. By leveraging cutting-edge AI, we aim to eliminate the friction in
              conceptualization, fostering faster artistic exploration and better creative outcomes for individuals and
              studios alike.
            </motion.p>
            <motion.p className="text-lg md:text-xl text-medium-gray" variants={itemVariants}>
              Our commitment is to continuous improvement, ensuring MakePRD remains the most intuitive and powerful
              prompt generation tool on the market.
            </motion.p>
          </div>
        </div>

        {/* New section for Importance of Prompts */}
        <ImportanceOfPrompts />
      </motion.div>
    </main>
  )
}
