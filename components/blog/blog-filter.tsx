"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface BlogFilterProps {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function BlogFilter({ categories, selectedCategory, onSelectCategory }: BlogFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-2 justify-center"
    >
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className={`
            transition-all duration-200
            ${
              selectedCategory === category
                ? "bg-pure-black text-white hover:bg-soft-black"
                : "border-light-gray text-medium-gray hover:border-pure-black hover:text-pure-black"
            }
          `}
        >
          {category}
        </Button>
      ))}
    </motion.div>
  )
}
