import { blogPosts, getArticleMetadata } from "@/lib/blog-data"
import BlogArticlePageClient from "./BlogArticlePageClient"

interface ArticlePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) {
    return {}
  }
  return getArticleMetadata(post)
}

export default function BlogArticlePage({ params }: ArticlePageProps) {
  return <BlogArticlePageClient params={params} />
}
