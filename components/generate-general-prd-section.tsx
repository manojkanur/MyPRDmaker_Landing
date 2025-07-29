"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Users, CheckCircle } from "lucide-react"
import Image from "next/image"

export function GenerateGeneralPRDSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/prd2.png"
                alt="Generate General PRD Interface"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Generate General PRD</h2>
              <p className="text-lg text-gray-600 mb-8">
                Create comprehensive Product Requirements Documents for traditional project management. Perfect for
                teams, stakeholders, and detailed project planning.
              </p>
            </div>

            {/* Three Bullet Points */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Documentation</h3>
                  <p className="text-gray-600">
                    Complete PRDs with requirements, user stories, success metrics, and technical architecture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Team Collaboration Ready</h3>
                  <p className="text-gray-600">
                    Structured format that's perfect for sharing with development teams and stakeholders.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Industry Standards</h3>
                  <p className="text-gray-600">
                    Follows best practices and industry standards for professional product development.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">Create General PRD</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
