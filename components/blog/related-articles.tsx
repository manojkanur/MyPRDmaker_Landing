"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BlogCard } from "./blog-card"
import type { BlogPost } from "@/lib/blog-data"

interface RelatedArticlesProps {
  articles: BlogPost[]
  currentArticleSlug: string
  maxArticles?: number
}

export function RelatedArticles({ articles, currentArticleSlug, maxArticles = 3 }: RelatedArticlesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Filter out current article and get related articles
  const relatedArticles = articles.filter((article) => article.slug !== currentArticleSlug).slice(0, maxArticles)

  if (relatedArticles.length === 0) {
    return null
  }

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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-16 pt-8 border-t border-light-gray"
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl md:text-3xl font-sora font-bold text-pure-black mb-8 text-center"
      >
        Related Articles
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedArticles.map((article) => (
          <motion.div key={article.slug} variants={itemVariants}>
            <BlogCard
              title={article.title}
              description={article.description}
              tag={article.tags[0]}
              readTimeMinutes={article.readTimeMinutes}
              href={`/blog/${article.slug}`}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
