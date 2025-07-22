"use client"

import Link from "next/link"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, LifeBuoy } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Form submitted:", formData)
    alert("Your message has been sent!")
    setFormData({ name: "", email: "", message: "" })
    setIsLoading(false)
  }

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
        className="container max-w-3xl mx-auto"
      >
        <motion.h1 className="text-4xl md:text-5xl font-sora font-bold text-center mb-12" variants={itemVariants}>
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div className="bg-light-gray p-8 rounded-xl shadow-lg" variants={itemVariants}>
            <h2 className="text-2xl font-sora font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-soft-black">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white border-medium-gray/30 text-soft-black focus:border-soft-black focus:ring-soft-black rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-soft-black">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white border-medium-gray/30 text-soft-black focus:border-soft-black focus:ring-soft-black rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-soft-black">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="mt-1 bg-white border-medium-gray/30 text-soft-black focus:border-soft-black focus:ring-soft-black rounded-lg"
                />
              </div>
              <Button
                type="submit"
                className="w-full px-8 py-6 text-lg rounded-xl bg-soft-black text-white hover:bg-pure-black transition-all duration-300 shadow-md hover:shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-light-gray"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-sora font-bold mb-6">Contact Information</h2>
            <div className="space-y-6 text-medium-gray">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-soft-black" />
                <a href="mailto:support@makeprd.com" className="hover:text-soft-black transition-colors">
                  support@makeprd.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-soft-black" />
                <a href="tel:+1234567890" className="hover:text-soft-black transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <LifeBuoy className="w-5 h-5 text-soft-black" />
                <Link href="/faq" className="hover:text-soft-black transition-colors">
                  Visit our Help Center
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
