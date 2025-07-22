"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function PrivacyPage() {
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
          Privacy Policy
        </motion.h1>

        <div className="prose prose-neutral max-w-none text-soft-black space-y-6">
          <motion.p variants={itemVariants}>
            Your privacy is important to us. This Privacy Policy explains how MakePRD ("we," "us," or "our") collects,
            uses, and discloses information about you when you use our website and services (collectively, the
            "Service").
          </motion.p>

          <motion.h2 variants={itemVariants}>1. Information We Collect</motion.h2>
          <motion.p variants={itemVariants}>
            We collect information about you in various ways when you use our Service, including:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li>
              **Information You Provide:** We collect information you provide directly to us, such as your name, email
              address, and any content you submit (e.g., prompt descriptions, generated outputs).
            </li>
            <li>
              **Usage Data:** We automatically collect certain information about your use of the Service, including your
              IP address, browser type, operating system, referring URLs, pages viewed, and access times.
            </li>
            <li>
              **Cookies and Tracking Technologies:** We use cookies and similar tracking technologies to track activity
              on our Service and hold certain information.
            </li>
          </motion.ul>

          <motion.h2 variants={itemVariants}>2. How We Use Your Information</motion.h2>
          <motion.p variants={itemVariants}>
            We use the information we collect for various purposes, including to:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li>Provide, maintain, and improve our Service.</li>
            <li>Process your requests and transactions.</li>
            <li>Send you technical notices, updates, security alerts, and support messages.</li>
            <li>Respond to your comments, questions, and customer service requests.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Service.</li>
            <li>
              Personalize and improve the Service and provide advertisements, content, or features that match your
              interests.
            </li>
          </motion.ul>

          <motion.h2 variants={itemVariants}>3. Sharing of Information</motion.h2>
          <motion.p variants={itemVariants}>
            We may share information about you as follows or as otherwise described in this Privacy Policy:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li>
              With vendors, consultants, and other service providers who need access to such information to carry out
              work on our behalf.
            </li>
            <li>
              In response to a request for information if we believe disclosure is in accordance with, or required by,
              any applicable law, regulation, or legal process.
            </li>
            <li>
              In connection with, or during negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business by another company.
            </li>
          </motion.ul>

          <motion.h2 variants={itemVariants}>4. Data Security</motion.h2>
          <motion.p variants={itemVariants}>
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized
            access, disclosure, alteration, and destruction.
          </motion.p>

          <motion.h2 variants={itemVariants}>5. Your Choices</motion.h2>
          <motion.p variants={itemVariants}>
            You may update, correct, or delete information about you at any time by logging into your online account or
            emailing us at [your support email].
          </motion.p>

          <motion.h2 variants={itemVariants}>6. Contact Us</motion.h2>
          <motion.p variants={itemVariants}>
            If you have any questions about this Privacy Policy, please contact us at support@makeprd.com.
          </motion.p>

          <motion.p className="text-sm text-medium-gray mt-12" variants={itemVariants}>
            Last updated: July 21, 2025
          </motion.p>
        </div>
      </motion.div>
    </main>
  )
}
