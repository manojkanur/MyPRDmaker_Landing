"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-light-gray/20">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full">
            <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-pure-black/20 to-transparent" />
          </div>

          <CardContent className="p-8 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-pure-black text-white">Featured</Badge>
                <Badge variant="secondary" className="bg-soft-gray text-pure-black">
                  {tag}
                </Badge>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-sora font-bold text-pure-black leading-tight">{title}</h2>
                <p className="text-medium-gray leading-relaxed">{description}</p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center text-medium-gray text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {readTimeMinutes} min read
                </div>

                <Link href={href}>
                  <Button className="bg-pure-black hover:bg-soft-black text-white group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}
