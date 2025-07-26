export type ArticleContentType =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; code: string; language: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "table"; headers: string[]; rows: string[][] }

export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  author: string
  date: string // YYYY-MM-DD
  readTimeMinutes: number
  tags: string[]
  description: string // For cards and meta description
  featured?: boolean
  content: ArticleContentType[]
}

export const blogCategories = [
  "All",
  "Vibe Coding Fundamentals", // Updated category
  "Prompt Engineering",
  "Tool Integration",
  "Use Cases",
  "Tutorials",
  "Product Announcements",
  "Compare & Explain",
]

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-write-a-vibe-coding-prompt",
    title: "How to Write a Vibe Coding Prompt in 2025",
    subtitle: "A comprehensive guide for creative coders and designers.",
    author: "Alice Johnson",
    date: "2025-07-15",
    readTimeMinutes: 15,
    tags: ["Vibe Coding Fundamentals", "Tutorials"], // Updated tag
    description:
      "Learn the essential steps to craft clear, concise, and inspiring prompts that drive successful vibe coding projects.",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "A Vibe Coding Prompt is a crucial starting point in the creative coding process. It serves as a blueprint, outlining the aesthetic, emotional tone, and desired functionality of a generative art piece or interactive experience. In 2025, with the rise of AI-powered tools like MakePRD, the process of creating these prompts has become significantly more efficient, yet understanding the core principles remains paramount.",
      },
      {
        type: "heading",
        level: 2,
        text: "What is a Vibe Coding Prompt and Why is it Important?",
      },
      {
        type: "paragraph",
        text: "A Vibe Coding Prompt is a document or statement that defines the creative output being built. It typically includes details about the desired mood, visual style, interaction patterns, and conceptual goals. Its importance cannot be overstated:",
      },
      {
        type: "list",
        items: [
          "**Aligns Vision:** Ensures everyone from concept to code is on the same page.",
          "**Guides Creation:** Provides clear instructions for generative algorithms and artistic choices.",
          "**Reduces Creative Block:** Helps maintain focus on the core artistic intent.",
          "**Facilitates Iteration:** Offers a baseline for refining and evolving the artwork.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Key Components of an Effective Vibe Coding Prompt",
      },
      {
        type: "paragraph",
        text: "While formats can vary, a robust prompt generally includes:",
      },
      {
        type: "list",
        items: [
          "**Introduction:** Purpose, scope, and target emotional response.",
          "**Desired Vibe/Mood:** Keywords and descriptions of the aesthetic.",
          "**Visual Elements:** Colors, shapes, textures, motion characteristics.",
          "**Interaction Patterns:** How users engage with the piece.",
          "**Technical Considerations:** Platform, libraries, performance goals.",
          "**Inspirations:** References to art, music, or other media.",
          "**Success Metrics:** How the 'vibe' will be evaluated.",
          "**Open Questions:** Any unresolved artistic or technical items.",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Abstract vs. Concrete Elements",
      },
      {
        type: "paragraph",
        text: "Understanding the difference is key. Abstract elements describe the feeling (e.g., 'ethereal, melancholic'). Concrete elements describe the implementation (e.g., 'particles fading out, slow sine wave motion').",
      },
      {
        type: "heading",
        level: 2,
        text: "Leveraging AI for Prompt Generation",
      },
      {
        type: "paragraph",
        text: "Tools like MakePRD can significantly accelerate the prompt creation process. By providing intelligent inputs, you can generate a structured draft in minutes, allowing you to focus on refining the artistic details rather than building from scratch. This is particularly useful for exploring many creative directions quickly.",
      },
      {
        type: "code",
        language: "json",
        code: `{
  "projectTitle": "Nebula Drift",
  "vibe": "calm, expansive, cosmic, slow-moving",
  "visuals": "soft gradients, subtle particle movement, deep blues and purples",
  "interaction": "mouse hover reveals hidden constellations"
}`,
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "AI-powered creative prompt generation workflow",
        caption: "Figure 1: Streamlined creative workflow with AI assistance.",
      },
      {
        type: "heading",
        level: 2,
        text: "Best Practices for Vibe Coding Prompt Writing",
      },
      {
        type: "list",
        items: [
          "**Be Evocative:** Use descriptive language to convey the feeling.",
          "**Be Specific:** Ambiguity leads to misinterpretation in code.",
          "**Iterate:** Prompts are living documents; update them as your vision evolves.",
          "**Collaborate:** Share with other artists or developers for feedback.",
          "**Link to Inspirations:** Reference music, images, or videos that capture the vibe.",
        ],
      },
      {
        type: "table",
        headers: ["Component", "Description", "Example"],
        rows: [
          ["Desired Vibe", "The overall feeling or mood.", "Dreamy, Energetic, Minimalist"],
          ["Visuals", "Specific visual elements.", "Particle systems, Line art, Glitch effects"],
          ["Interactions", "How users engage.", "Mouse tracking, Keyboard input, Audio reactivity"],
        ],
      },
      {
        type: "paragraph",
        text: "This article provides a foundational understanding of Vibe Coding Prompts. For practical application, consider trying out MakePRD to generate your first prompt instantly.",
      },
    ],
  },
  {
    slug: "prompt-engineering-for-vibe-coding",
    title: "Mastering Prompt Engineering for AI-Generated Vibe Coding Prompts",
    subtitle: "Unlock the full potential of AI in creative coding documentation.",
    author: "Bob Williams",
    date: "2025-07-10",
    readTimeMinutes: 10,
    tags: ["Prompt Engineering", "Tutorials"],
    description:
      "Learn advanced prompt engineering techniques to get the most accurate and inspiring vibe coding prompts from AI tools like MakePRD.",
    content: [
      {
        type: "paragraph",
        text: "Prompt engineering is the art and science of crafting effective inputs for AI models to achieve desired outputs. When it comes to generating Vibe Coding Prompts with AI, mastering prompt engineering can significantly enhance the quality and relevance of the generated creative instructions.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Basics of Effective Prompts for Vibe Coding",
      },
      {
        type: "paragraph",
        text: "Start with clear, concise, and specific instructions. Avoid ambiguity. Think of the AI as a highly intelligent but literal assistant.",
      },
      {
        type: "list",
        items: [
          "**Define the Role:** Tell the AI what role it should adopt (e.g., 'Act as a creative coding assistant').",
          "**Specify the Output Format:** Request a specific structure (e.g., 'Generate a prompt with sections for Vibe, Visuals, and Interactions').",
          "**Provide Context:** Give background information about your artistic goals, target platform, and desired emotional impact.",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Example of a Basic Vibe Coding Prompt",
      },
      {
        type: "code",
        language: "plaintext",
        code: `Generate a prompt for a p5.js sketch: 'Retro Arcade Vibe'.
Desired visuals: pixel art, neon colors, simple geometric shapes.
Interaction: keyboard input for movement.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Advanced Prompt Engineering Techniques for Creativity",
      },
      {
        type: "paragraph",
        text: "To get truly exceptional vibe coding prompts, consider these advanced techniques:",
      },
      {
        type: "list",
        items: [
          "**Iterative Prompting:** Start with a broad vibe, then refine with follow-up prompts for specific elements.",
          "**Constraint-Based Prompting:** Add negative constraints (e.g., 'Do not use bright primary colors').",
          "**Few-Shot Learning:** Provide examples of successful vibe coding prompts or artistic descriptions.",
          "**Chain-of-Thought Prompting:** Ask the AI to 'think step-by-step' about how to achieve the vibe before generating the final output.",
        ],
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Prompt engineering flow chart for creative coding",
        caption: "Figure 2: Iterative prompt refinement for better creative outputs.",
      },
      {
        type: "heading",
        level: 2,
        text: "Integrating with MakePRD for Vibe Coding",
      },
      {
        type: "paragraph",
        text: "MakePRD's intelligent prompt interface is designed to guide you through the process, offering suggestions and structured inputs to help you craft the most effective prompts for your creative coding projects. This reduces the learning curve for prompt engineering and ensures high-quality prompt generation from day one.",
      },
      {
        type: "paragraph",
        text: "By understanding and applying these prompt engineering principles, you can transform your artistic ideas into professional, AI-generated vibe coding prompts with unprecedented speed and accuracy. Explore our platform to see how these techniques come to life.",
      },
    ],
  },
  {
    slug: "ai-vs-manual-prompts",
    title: "AI-Generated vs. Manual Vibe Coding Prompts: A Comprehensive Comparison",
    subtitle: "Understanding the pros and cons of each approach.",
    author: "Charlie Green",
    date: "2025-07-01",
    readTimeMinutes: 8,
    tags: ["Compare & Explain", "Vibe Coding Fundamentals"], // Updated tag
    description:
      "We break down the differences between creating vibe coding prompts manually and using AI, helping you decide the best approach for your creative workflow.",
    content: [
      {
        type: "paragraph",
        text: "The debate between manual and AI-generated creative instructions is growing, especially in fields like generative art and creative coding. This article compares the two approaches for creating Vibe Coding Prompts, highlighting their strengths and weaknesses.",
      },
      {
        type: "heading",
        level: 2,
        text: "Manual Prompt Creation",
      },
      {
        type: "paragraph",
        text: "Traditionally, creative prompts are crafted manually by artists and developers. This involves extensive brainstorming, artistic research, and meticulous articulation of ideas.",
      },
      {
        type: "list",
        items: [
          "**Pros:** Deep personal connection to the vision, highly customized, full artistic control.",
          "**Cons:** Time-consuming, prone to creative blocks, requires significant mental effort.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "AI-Generated Prompt Creation",
      },
      {
        type: "paragraph",
        text: "AI tools like MakePRD leverage large language models to generate prompt drafts based on user inputs.",
      },
      {
        type: "list",
        items: [
          "**Pros:** Speed, consistency in structure, can suggest novel ideas, reduces boilerplate.",
          "**Cons:** Requires careful prompting, may lack nuanced artistic context without detailed input, potential for generic content if not guided.",
        ],
      },
      {
        type: "table",
        headers: ["Aspect", "Manual Prompt", "AI-Generated Prompt"],
        rows: [
          ["Time to Draft", "Hours to Days", "Minutes"],
          ["Consistency", "Variable", "High"],
          ["Effort Required", "High", "Low to Medium"],
          ["Customization", "Full", "High (with good prompts)"],
          ["Learning Curve", "High (artistic articulation)", "Low (prompting)"],
        ],
      },
      {
        type: "paragraph",
        text: "Ultimately, the best approach often involves a hybrid model. Use AI to generate initial creative directions and handle repetitive structural elements, then manually refine and add the unique, nuanced artistic details that only human insight can provide. This combines the speed of AI with the precision of human creativity.",
      },
    ],
  },
  {
    slug: "integrating-prompts-with-creative-platforms",
    title: "Seamlessly Integrating Your Prompts with Creative Coding Platforms",
    subtitle: "Connecting your artistic vision to execution.",
    author: "David Lee",
    date: "2025-06-25",
    readTimeMinutes: 7,
    tags: ["Tool Integration", "Use Cases"],
    description:
      "Discover how to link your MakePRD-generated prompts with popular creative coding environments like p5.js, Three.js, and TouchDesigner for a smooth workflow.",
    content: [
      {
        type: "paragraph",
        text: "A well-written vibe coding prompt is only as effective as its integration into your creative workflow. Connecting your AI-generated prompt with platforms like p5.js, Three.js, or TouchDesigner ensures that your artistic vision translates directly into actionable code for your creative projects.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Integrate Your Prompt?",
      },
      {
        type: "list",
        items: [
          "**Clarity:** Ensure your creative intent is clear before coding.",
          "**Efficiency:** Reduce time spent on initial setup and conceptualization.",
          "**Experimentation:** Quickly test different artistic directions.",
          "**Collaboration:** Share clear starting points with other artists.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Integration Strategies",
      },
      {
        type: "paragraph",
        text: "There are several ways to integrate your prompt with creative coding tools:",
      },
      {
        type: "list",
        items: [
          "**Direct Copy/Paste:** Transfer prompt sections directly into comments or initial code blocks.",
          "**Structured Input:** Use prompt elements to configure parameters in generative systems.",
          "**API Automation:** For advanced users, use APIs to automatically set up project structures based on prompt details.",
        ],
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Creative coding workflow with prompts diagram",
        caption: "Figure 3: Example workflow for prompt integration with creative platforms.",
      },
      {
        type: "heading",
        level: 2,
        text: "MakePRD and Tool Integrations",
      },
      {
        type: "paragraph",
        text: "While MakePRD focuses on generating the prompt content, its structured output makes it easy to copy and paste sections into your preferred creative coding environment. Future updates may include direct integrations to further streamline this process.",
      },
      {
        type: "paragraph",
        text: "By establishing a clear link between your prompt and your creative coding tasks, you ensure that every line of code contributes directly to the artistic vision. This seamless flow from idea to execution is key to agile and expressive creative development.",
      },
    ],
  },
]

export function getArticleMetadata(post: BlogPost) {
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

export function getArticleJsonLd(post: BlogPost, baseUrl = "https://makeprd.com") {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: "MakePRD",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/placeholder-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    url: `${baseUrl}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    articleSection: post.tags[0] || "Blog",
    wordCount: post.content.reduce((count, item) => {
      if (item.type === "paragraph") {
        return count + item.text.split(" ").length
      }
      return count
    }, 0),
    timeRequired: `PT${post.readTimeMinutes}M`,
  }
}
