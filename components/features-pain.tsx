"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Sparkles, FileText, Workflow, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturesPain() {
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
    <section className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
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
          Features That Remove the Pain
        </motion.h2>
        <motion.p className="text-lg text-medium-gray mb-12 text-center max-w-3xl mx-auto" variants={itemVariants}>
          Fast, efficient, and built for builders who want to ship today
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1: Vibe Prompt */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-light-gray rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="p-3 rounded-full bg-white text-soft-black mb-6 inline-flex">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-sora font-bold text-soft-black mb-3">
              Vibe Prompt <span className="text-sm font-normal text-medium-gray">(Flagship)</span>
            </h3>
            <p className="text-medium-gray mb-4 font-semibold">
              Pain: "I have an idea but don't know what to prompt. I waste credits and still don't get real UI."
            </p>
            <p className="text-soft-black mb-4">
              <span className="font-semibold">Fix:</span> Type one short line. We create a build-ready prompt that
              renders real UI in V0, Lovable, Bolt, Cursor.
            </p>
            <div className="mb-4 space-y-2 text-sm">
              <p className="text-soft-black">You get:</p>
              <ul className="list-disc list-inside space-y-1 text-medium-gray">
                <li>Clean, build-ready prompt (no guessing)</li>
                <li>Auto-generated flows and screens</li>
                <li>Copy-paste into your builder and go</li>
              </ul>
            </div>
            <p className="text-soft-black font-semibold">Benefit: Save ~90% time and credits.</p>
          </motion.div>

          {/* Feature 2: PRD Mode */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-light-gray rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="p-3 rounded-full bg-white text-soft-black mb-6 inline-flex">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-sora font-bold text-soft-black mb-3">
              PRD Mode <span className="text-sm font-normal text-medium-gray">(Clarity for Devs)</span>
            </h3>
            <p className="text-medium-gray mb-4 font-semibold">
              Pain: "Specs take days. Edge cases get missed. Engineers ask: 'What exactly are we building?'"
            </p>
            <p className="text-soft-black mb-4">
              <span className="font-semibold">Fix:</span> A clear PRD in minutes: features, user stories, acceptance
              criteria, edge cases, success metrics.
            </p>
            <div className="mb-4 space-y-2 text-sm">
              <p className="text-soft-black">You get:</p>
              <ul className="list-disc list-inside space-y-1 text-medium-gray">
                <li>Engineering-grade PRD</li>
                <li>Less back-and-forth</li>
                <li>Smooth handoff to build</li>
              </ul>
            </div>
          </motion.div>

          {/* Feature 3: Platform Templates */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-light-gray rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="p-3 rounded-full bg-white text-soft-black mb-6 inline-flex">
              <Workflow className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-sora font-bold text-soft-black mb-3">
              Platform Templates & Website Copy{" "}
              <span className="text-sm font-normal text-medium-gray">(Launch Faster)</span>
            </h3>
            <p className="text-medium-gray mb-4 font-semibold">
              Pain: "I rewrite prompts for each tool and struggle to write the website."
            </p>
            <p className="text-soft-black mb-4">
              <span className="font-semibold">Fix:</span> 16+ platform templates that work where you build +
              ready-to-ship website copy.
            </p>
            <div className="mb-4 space-y-2 text-sm">
              <p className="text-soft-black">You get:</p>
              <ul className="list-disc list-inside space-y-1 text-medium-gray">
                <li>Tool-specific prompts that just work</li>
                <li>Landing page copy that converts</li>
                <li>Exports to PDF/Markdown for sharing</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Mini CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Button
            asChild
            className="px-8 py-4 text-lg font-semibold rounded-2xl bg-soft-black text-white hover:bg-pure-black transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Link href="https://app.makeprd.ai/" prefetch={false}>
              Ready to skip the hard parts? Start with Vibe Prompt
              <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
