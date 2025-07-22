"use client"

import { useState, useMemo } from "react"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"
import { FeaturedBlogCard } from "@/components/blog/featured-blog-card"
import { BlogFilter } from "@/components/blog/blog-filter"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
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

  const featuredPost = useMemo(() => blogPosts.find((post) => post.featured), [])
  const otherPosts = useMemo(() => blogPosts.filter((post) => !post.featured), [])

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return otherPosts
    }
    return otherPosts.filter((post) => post.tags.includes(selectedCategory))
  }, [selectedCategory, otherPosts])

  return (
    <main className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container"
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-sora font-bold text-pure-black mb-4">
            Insights, Prompts, and Vibe Coding Best Practices
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-2xl mx-auto">
            A knowledge library for creative coders, designers, and indie builders.
          </p>
        </motion.div>

        <BlogFilter
          categories={blogCategories}
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        {featuredPost && selectedCategory === "All" && (
          <div className="mt-12 mb-16">
            <FeaturedBlogCard
              title={featuredPost.title}
              description={featuredPost.description}
              tag={featuredPost.tags[0]}
              readTimeMinutes={featuredPost.readTimeMinutes}
              href={`/blog/${featuredPost.slug}`}
              imageSrc={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(featuredPost.title)}`}
              imageAlt={featuredPost.title}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              tag={post.tags[0]}
              readTimeMinutes={post.readTimeMinutes}
              href={`/blog/${post.slug}`}
            />
          ))}
          {filteredPosts.length === 0 && (
            <p className="col-span-full text-center text-medium-gray">No articles found for this category.</p>
          )}
        </div>
      </motion.div>
    </main>
  )
}
