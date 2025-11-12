"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Sparkles, FileText, Workflow, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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

  const showcaseImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aq1GjbrQlCs8oRidIUibXMO86FaqSr.png",
      alt: "Hiring Signal Synthesizer Dashboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dM3gh5XrOGxJP7K6eu5YMZLWMhMwza.png",
      alt: "Finance Close Copilot Dashboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k0UdaqC7iJ9FeZGZCQE0cCWUSgWG84.png",
      alt: "Code Review + Risk Radar Dashboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2iQfHSodfwgf8yhytrE8SdKOeQtBIm.png",
      alt: "DealDesk Copilot Dashboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NA4wSSw99qHnQdz6kv6TcDmwHzXBo2.png",
      alt: "Smart RFP/RFI Responder Dashboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ijppO8vrAy68Sg4oCxyR78j4VdclG.png",
      alt: "Compliance Policy Copilot Dashboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lZQVuF7R4KcCpEuVTMR6KkbSmKW23J.png",
      alt: "Product Feedback Brain Dashboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WnW2NKjpHYmcE6i3lnjathtVBX4xg2.png",
      alt: "Smart RFP/RFI Responder Landing Page",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QtoeXYy4oANfYcI7eoBzcqwaHEZ2Fz.png",
      alt: "Experiment Platform Dashboard",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-white text-soft-black overflow-hidden">
      <div className="absolute right-0 top-1/4 w-64 h-64 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <g className="animate-pulse">
            <circle cx="100" cy="100" r="60" fill="url(#sparkGradient)" opacity="0.3" />
            <path
              d="M100 40 L110 85 L155 85 L120 115 L130 160 L100 135 L70 160 L80 115 L45 85 L90 85 Z"
              fill="url(#sparkGradient)"
              className="animate-spin-slow"
              style={{ transformOrigin: "center", animation: "spin 8s linear infinite" }}
            />
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
        <motion.div variants={itemVariants} className="text-center mb-20">
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

        <motion.div variants={itemVariants} className="mt-20">
          <h3 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-center text-soft-black">
            See The Magic With Our Prompt
          </h3>

          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-scroll-rtl">
              {/* First set of images */}
              {showcaseImages.map((image, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-[600px] h-[400px] relative rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {showcaseImages.map((image, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[600px] h-[400px] relative rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
