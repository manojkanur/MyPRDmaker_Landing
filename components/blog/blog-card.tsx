"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  title: string
  description: string
  tag: string
  readTimeMinutes: number
  href: string
}

export function BlogCard({ title, description, tag, readTimeMinutes, href }: BlogCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Link href={href}>
        <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-light-gray/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-soft-gray text-pure-black">
                  {tag}
                </Badge>
                <div className="flex items-center text-medium-gray text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {readTimeMinutes} min
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-sora font-semibold text-pure-black line-clamp-2 hover:text-soft-black transition-colors">
                  {title}
                </h3>
                <p className="text-medium-gray line-clamp-3 leading-relaxed">{description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
