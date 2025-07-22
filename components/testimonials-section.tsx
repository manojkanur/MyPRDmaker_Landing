"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
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

  const testimonials = [
    {
      quote:
        "MakePRD has revolutionized my creative workflow. Generating prompts used to be a bottleneck, now it's instant and inspiring!",
      name: "Alex Chen",
      title: "Generative Artist",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "The AI-generated prompts are surprisingly nuanced and capture the 'vibe' perfectly. It's like having a creative co-pilot.",
      name: "Samantha Lee",
      title: "Creative Developer",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "I can explore so many more artistic directions in less time. MakePRD is an essential tool for any serious vibe coder.",
      name: "Jordan Kim",
      title: "Interactive Designer",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container text-center"
      >
        <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-pure-black" variants={itemVariants}>
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/80 backdrop-blur-sm border border-light-gray shadow-lg rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardContent className="p-0">
                  <Quote className="w-8 h-8 text-medium-gray mb-4" />
                  <p className="text-lg text-soft-black italic mb-6">
                    {'"'}
                    {testimonial.quote}
                    {'"'}
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <Avatar className="w-12 h-12 border border-light-gray">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-sora font-bold text-soft-black">{testimonial.name}</p>
                      <p className="text-sm text-medium-gray">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
