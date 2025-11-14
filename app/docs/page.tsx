import { DocsPageClient } from "./DocsPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation - MakePRD.AI",
  description: "Learn how to use MakePRD.ai - from Vibe Prompt to PRD Mode, Ideastorm, Platform Templates, and more.",
}

export default function DocsPage() {
  return <DocsPageClient />
}
