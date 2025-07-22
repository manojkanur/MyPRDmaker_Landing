"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface FeaturedBlogCardProps {
  title: string
  description: string
  tag: string
  readTimeMinutes: number
  href: string
  imageSrc: string
  imageAlt: string
}

export function FeaturedBlogCard({
  title,
  description,
  tag,
  readTimeMinutes,
  href,
  imageSrc,
  imageAlt,
}: FeaturedBlogCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants}>
      <Link href={href} className="block h-full">
        <Card className="h-full flex flex-col md:flex-row bg-white border-light-gray shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.005]">
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between p-6">
            <CardHeader className="pb-4 px-0 pt-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-light-gray text-medium-gray">{tag}</span>
                <span className="text-sm text-medium-gray">{readTimeMinutes} min read</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-sora font-bold text-pure-black leading-tight">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow px-0 pb-0">
              <CardDescription className="text-base text-medium-gray line-clamp-4">{description}</CardDescription>
            </CardContent>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
