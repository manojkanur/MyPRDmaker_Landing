"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Search, History } from "lucide-react"
import Image from "next/image"

export function StorePreviousPRDSection() {
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Store Your Previous PRDs</h2>
              <p className="text-lg text-gray-600 mb-8">
                Securely store, organize, and access all your PRDs in one place. Never lose track of your project
                documentation again.
              </p>
            </div>

            {/* Three Bullet Points */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Secure Cloud Storage</h3>
                  <p className="text-gray-600">
                    Enterprise-grade security with 256-bit encryption and 99.9% uptime guarantee.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Smart Search & Organization</h3>
                  <p className="text-gray-600">
                    Quickly find any PRD with powerful search and intelligent categorization features.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <History className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Version History & Backup</h3>
                  <p className="text-gray-600">
                    Track changes over time with complete version history and automatic backups.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">View My PRDs</Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-50 px-8 py-3 bg-transparent">
                Upgrade Storage
              </Button>
            </div>
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
                alt="Store Previous PRDs Interface"
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
