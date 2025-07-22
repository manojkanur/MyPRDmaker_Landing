"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BlogCard } from "./blog-card"
import type { BlogPost } from "@/lib/blog-data"

interface RelatedArticlesProps {
  articles: BlogPost[]
  currentArticleSlug: string
}

export function RelatedArticles({ articles, currentArticleSlug }: RelatedArticlesProps) {
  const filteredArticles = articles.filter((article) => article.slug !== currentArticleSlug).slice(0, 3) // Show up to 3 related articles

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-16 pt-8 border-t border-light-gray"
    >
      <h2 className="text-2xl md:text-3xl font-sora font-bold mb-8 text-pure-black text-center">Related Articles</h2>
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <BlogCard
              key={article.slug}
              title={article.title}
              description={article.description}
              tag={article.tags[0]}
              readTimeMinutes={article.readTimeMinutes}
              href={`/blog/${article.slug}`}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-medium-gray">No related articles found.</p>
      )}
    </motion.div>
  )
}
