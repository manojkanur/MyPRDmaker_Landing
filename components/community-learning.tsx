"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Youtube } from "lucide-react"
import Link from "next/link"

export function CommunityLearning() {
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

  const resources = [
    {
      icon: BookOpen,
      title: "Our Blog",
      description: "Dive into articles on prompt engineering, vibe coding techniques, and product updates.",
      href: "/blog",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other creative coders, share ideas, and get support.",
      href: "#community",
    },
    {
      icon: Youtube,
      title: "Video Tutorials",
      description: "Learn how to master MakePRD and advanced prompt generation with our video guides.",
      href: "#tutorials",
    },
  ]

  return (
    <section className="relative z-10 py-16 md:py-24 bg-light-gray text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container text-center"
      >
        <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-pure-black" variants={itemVariants}>
          Join Our Vibrant Community & Learn More
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={resource.href} className="block h-full">
                <Card className="bg-white/80 backdrop-blur-sm border border-light-gray shadow-lg rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <CardHeader className="p-0 mb-4">
                    <div className="p-3 rounded-full bg-light-gray text-soft-black mb-4 inline-flex">
                      <resource.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-sora font-bold text-soft-black">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-medium-gray">
                    <p>{resource.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
