"use client"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactPage() {
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
        className="container max-w-2xl mx-auto"
      >
        <motion.h1 className="text-4xl md:text-5xl font-sora font-bold text-center mb-12" variants={itemVariants}>
          Get in Touch
        </motion.h1>

        {/* Contact Info */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-lg border border-light-gray"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-sora font-bold mb-8">Contact Information</h2>
          <div className="space-y-6 text-medium-gray">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-soft-black" />
              <a href="mailto:makeprd.ai@gmail.com" className="hover:text-soft-black transition-colors">
                makeprd.ai@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-soft-black" />
              <a href="tel:+91 84284 26800" className="hover:text-soft-black transition-colors">
                +91 84284 26800
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-soft-black mt-1" />
              <div className="hover:text-soft-black transition-colors">
                Chennai, Tamil Nadu,
                <br />
                India
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
