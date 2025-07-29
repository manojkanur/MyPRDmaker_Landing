"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const platforms = [
  { name: "Cursor", logo: "/images/cursor.png" },
  { name: "v0", logo: "/images/v0.png" },
  { name: "Replit", logo: "/images/replit.png" },
  { name: "Bolt", logo: "/images/bolt.png" },
  { name: "Lovable", logo: "/images/lovable.png" },
  { name: "Cline", logo: "/images/cline.png" },
  { name: "Devin", logo: "/images/devin.png" },
  { name: "Windsurf", logo: "/images/windsuf.png" },
  { name: "VS Code", logo: "/images/vscode.png" },
  { name: "Trae", logo: "/images/trae.png" },
  { name: "Junie", logo: "/images/junie.png" },
  { name: "RooCode", logo: "/images/roocode.png" },
  { name: "Same", logo: "/images/same.png" },
  { name: "Codex", logo: "/images/codex.png" },
  { name: "Dia", logo: "/images/dia-new.png" },
]

export function SupportedPlatforms() {
  return (
    <section className="py-16 md:py-24 bg-white text-soft-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Supported Platforms</h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Generate optimized PRDs for 16+ AI development tools and platforms
          </p>
        </motion.div>

        {/* First row - scrolling left */}
        <div className="relative overflow-hidden mb-8">
          <motion.div
            className="flex space-x-8 animate-scroll-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Duplicate platforms for seamless scrolling */}
            {[...platforms, ...platforms].map((platform, index) => (
              <div
                key={`${platform.name}-${index}`}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-light-gray rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-200"
              >
                <Image
                  src={platform.logo || "/placeholder.svg"}
                  alt={`${platform.name} logo`}
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - scrolling right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 animate-scroll-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Duplicate platforms for seamless scrolling */}
            {[...platforms.slice().reverse(), ...platforms.slice().reverse()].map((platform, index) => (
              <div
                key={`${platform.name}-reverse-${index}`}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-light-gray rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-200"
              >
                <Image
                  src={platform.logo || "/placeholder.svg"}
                  alt={`${platform.name} logo`}
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
