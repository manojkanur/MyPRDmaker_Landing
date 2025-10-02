"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, Target, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function GeneratePromptPRDSection() {
  return (
    <section className="py-16 md:py-24 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Generate Prompt PRD for 16+ Tools</h2>
              <p className="text-lg text-gray-600 mb-8">
                Create platform-specific PRDs optimized for your favorite AI development tools. Get tailored prompts
                that speak the language of each platform.
              </p>
            </div>

            {/* Three Bullet Points */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Platform-Optimized Prompts</h3>
                  <p className="text-gray-600">
                    Each PRD is tailored to work perfectly with specific AI tools like Cursor, v0, Replit, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Context-Rich Instructions</h3>
                  <p className="text-gray-600">
                    Detailed specifications that provide the right context for AI tools to generate better code.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Best Practice Templates</h3>
                  <p className="text-gray-600">
                    Pre-built templates following industry standards for maximum AI tool compatibility.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3">
              <Link href="https://app.makeprd.ai/">Generate Prompt PRD</Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/prd1.png"
                alt="Generate Prompt PRD Interface"
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
