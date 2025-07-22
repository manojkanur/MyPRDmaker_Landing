import { blogPosts } from "@/lib/blog-data"
import TagPageClient from "./TagPageClient"

interface TagPageProps {
  params: { tagSlug: string }
}

export async function generateStaticParams() {
  const uniqueTags = new Set<string>()
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => uniqueTags.add(tag.toLowerCase().replace(/\s+/g, "-")))
  })
  return Array.from(uniqueTags).map((tagSlug) => ({ tagSlug }))
}

export default function TagPage(props: TagPageProps) {
  return <TagPageClient {...props} />
}
