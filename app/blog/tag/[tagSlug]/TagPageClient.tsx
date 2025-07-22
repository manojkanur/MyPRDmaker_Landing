"use client"

import { notFound } from "next/navigation"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface TagPageProps {
  params: { tagSlug: string }
}

export default function TagPageClient({ params }: TagPageProps) {
  const tagName = params.tagSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) // Convert slug back to readable tag

  // Check if the tag exists in our predefined categories (optional, for validation)
  if (!blogCategories.includes(tagName) && tagName !== "All") {
    notFound()
  }

  const filteredPosts = blogPosts.filter((post) =>
    post.tags.map((t) => t.toLowerCase().replace(/\s+/g, "-")).includes(params.tagSlug),
  )

  const tagDescriptions: { [key: string]: string } = {
    "Vibe Coding Fundamentals": "Dive deep into the core concepts and best practices of Vibe Coding Prompts.",
    "Prompt Engineering": "Learn how to craft effective prompts to get the best results from AI prompt generators.",
    "Tool Integration":
      "Discover how to seamlessly integrate your prompts with popular creative coding environments and tools.",
    "Use Cases": "Explore real-world scenarios and applications of MakePRD for various roles and industries.",
    Tutorials: "Step-by-step guides to help you master MakePRD and creative prompt generation.",
    "Product Announcements": "Stay updated with the latest features, improvements, and news from MakePRD.",
    "Compare & Explain": "Understand the differences and benefits of various creative coding approaches and tools.",
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
        className="container"
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-sora font-bold text-pure-black mb-4">Articles Tagged: {tagName}</h1>
          {tagDescriptions[tagName] && (
            <p className="text-lg md:text-xl text-medium-gray max-w-2xl mx-auto">{tagDescriptions[tagName]}</p>
          )}
        </motion.div>

        {filteredPosts.length > 0 ? (
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
          </div>
        ) : (
          <p className="text-center text-medium-gray text-lg">No articles found for this tag yet.</p>
        )}
      </motion.div>
    </main>
  )
}
