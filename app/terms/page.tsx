"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function TermsPage() {
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
        staggerChildren: 0.1,
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
        className="container max-w-3xl mx-auto"
      >
        <motion.h1 className="text-4xl md:text-5xl font-sora font-bold text-center mb-12" variants={itemVariants}>
          Terms of Service
        </motion.h1>

        <div className="prose prose-neutral max-w-none text-soft-black space-y-6">
          <motion.p variants={itemVariants}>
            Welcome to MakePRD! These Terms of Service ("Terms") govern your access to and use of the MakePRD website
            and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by
            these Terms.
          </motion.p>

          <motion.h2 variants={itemVariants}>1. Acceptance of Terms</motion.h2>
          <motion.p variants={itemVariants}>
            By using our Service, you confirm that you accept these Terms and that you agree to comply with them. If you
            do not agree to these Terms, you must not use our Service.
          </motion.p>

          <motion.h2 variants={itemVariants}>2. Changes to Terms</motion.h2>
          <motion.p variants={itemVariants}>
            We may revise these Terms at any time by amending this page. Please check this page from time to time to
            take notice of any changes we made, as they are binding on you.
          </motion.p>

          <motion.h2 variants={itemVariants}>3. Accessing Our Service</motion.h2>
          <motion.p variants={itemVariants}>
            Our Service is made available free of charge. We do not guarantee that our Service, or any content on it,
            will always be available or be uninterrupted. Access to our Service is permitted on a temporary basis. We
            may suspend, withdraw, discontinue or change all or any part of our Service without notice. We will not be
            liable to you if for any reason our Service is unavailable at any time or for any period.
          </motion.p>

          <motion.h2 variants={itemVariants}>4. Your Account</motion.h2>
          <motion.p variants={itemVariants}>
            If you choose, or are provided with, a user identification code, password or any other piece of information
            as part of our security procedures, you must treat such information as confidential. You must not disclose
            it to any third party.
          </motion.p>

          <motion.h2 variants={itemVariants}>5. Intellectual Property Rights</motion.h2>
          <motion.p variants={itemVariants}>
            We are the owner or the licensee of all intellectual property rights in our Service, and in the material
            published on it. Those works are protected by copyright laws and treaties around the world. All such rights
            are reserved.
          </motion.p>

          <motion.h2 variants={itemVariants}>6. Limitation of Our Liability</motion.h2>
          <motion.p variants={itemVariants}>
            Nothing in these Terms of Use excludes or limits our liability for death or personal injury arising from our
            negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or
            limited by English law.
          </motion.p>
          <motion.p variants={itemVariants}>
            To the extent permitted by law, we exclude all conditions, warranties, representations or other terms which
            may apply to our Service or any content on it, whether express or implied.
          </motion.p>

          <motion.h2 variants={itemVariants}>7. Governing Law</motion.h2>
          <motion.p variants={itemVariants}>
            These Terms of Use, their subject matter and their formation, are governed by English law. You and we both
            agree that the courts of England and Wales will have exclusive jurisdiction.
          </motion.p>

          <motion.p className="text-sm text-medium-gray mt-12" variants={itemVariants}>
            Last updated: July 21, 2025
          </motion.p>
        </div>
      </motion.div>
    </main>
  )
}
