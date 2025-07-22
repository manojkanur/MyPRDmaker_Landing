"use client"

import { notFound } from "next/navigation"
import { blogPosts, getArticleJsonLd } from "@/lib/blog-data"
import { ArticleContentRenderer } from "@/components/blog/article-content-renderer"
import { RelatedArticles } from "@/components/blog/related-articles"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ArticlePageProps {
  params: { slug: string }
}

export default function BlogArticlePageClient({ params }: ArticlePageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <main className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd(post)) }} />
      <div className="container max-w-3xl mx-auto">
        <motion.header initial="hidden" animate="visible" variants={headerVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-pure-black leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray mb-6">{post.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-medium-gray">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{post.readTimeMinutes} min read</span>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative group text-soft-black hover:text-pure-black transition-colors duration-200"
              >
                #{tag}
                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-soft-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>
        </motion.header>

        <ArticleContentRenderer content={post.content} />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={ctaVariants}
          className="mt-16 pt-8 border-t border-light-gray text-center"
        >
          <h2 className="text-2xl md:text-3xl font-sora font-bold mb-8 text-pure-black">
            Ready to generate your own Vibe Coding Prompt?
          </h2>
          <Button
            asChild
            className="px-8 py-6 text-lg rounded-xl bg-soft-black text-white hover:bg-pure-black transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Link href="#generate-prompt">Generate Your First Prompt</Link>
          </Button>
        </motion.div>

        <RelatedArticles articles={blogPosts} currentArticleSlug={post.slug} />
      </div>
    </main>
  )
}
