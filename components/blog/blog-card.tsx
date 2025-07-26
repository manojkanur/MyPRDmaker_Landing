"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  title: string
  description: string
  tag: string
  readTimeMinutes: number
  href: string
  className?: string
}

export function BlogCard({ title, description, tag, readTimeMinutes, href, className }: BlogCardProps) {
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
        <Card
          className={cn(
            "h-full flex flex-col justify-between bg-white border-light-gray shadow-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.01]",
            className,
          )}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-light-gray text-medium-gray">{tag}</span>
              <span className="text-xs text-medium-gray">{readTimeMinutes} min read</span>
            </div>
            <CardTitle className="text-xl font-sora font-bold text-soft-black leading-tight">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-sm text-medium-gray line-clamp-3">{description}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
