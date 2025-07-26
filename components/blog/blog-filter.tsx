"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface BlogFilterProps {
  categories: string[]
  onSelectCategory: (category: string) => void
  selectedCategory: string
}

export function BlogFilter({ categories, onSelectCategory, selectedCategory }: BlogFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="sticky top-24 z-40 bg-white py-4 border-b border-light-gray -mx-4 px-4 md:mx-0 md:px-0"
    >
      <div className="container overflow-x-auto no-scrollbar">
        <div className="flex space-x-3 pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              onClick={() => onSelectCategory(category)}
              className={cn(
                "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                selectedCategory === category
                  ? "bg-soft-black text-white hover:bg-pure-black border-soft-black"
                  : "bg-light-gray text-medium-gray hover:bg-medium-gray/20 border-light-gray",
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
