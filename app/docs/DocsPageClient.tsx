"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: `
      <h2>What is MakePRD.ai?</h2>
      <p>MakePRD.ai turns one short idea into a product plan (PRD), website copy, and build-ready prompts for tools like V0, Lovable, Bolt, Cursor, Replit. It helps you go from idea → product → site in minutes.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Vibe Prompt</strong> - one-line idea → build-ready prompt that renders real UI in supported tools</li>
        <li><strong>PRD Mode</strong> - clear, engineering-friendly Product Requirements Document</li>
        <li><strong>Ideastorm Mode</strong> - explore niches, angles, and pricing before you build</li>
        <li><strong>Platform Templates & Website Copy</strong> - prompts that work where you build + launch-ready site content</li>
        <li><strong>Smart Chat & Exports</strong> - refine anything, export to PDF/Markdown</li>
      </ul>
    `,
  },
  {
    id: "vibe-prompt",
    title: "Vibe Prompt",
    content: `
      <h2>Overview</h2>
      <p>Vibe Prompt converts a single sentence into a build-ready prompt and basic UI screens in tools like V0, Lovable, Bolt, and Cursor.</p>
      
      <h3>When to use</h3>
      <ul>
        <li>You have a rough idea and want to see real UI fast</li>
        <li>You're testing multiple micro-SaaS directions in a day</li>
        <li>You want a starting point for design + build tools</li>
      </ul>
      
      <h3>Quick Start</h3>
      <ol>
        <li>Go to MakePRD.ai → New Project → Vibe Prompt</li>
        <li>Type one sentence about your product</li>
        <li>Click Generate</li>
        <li>Copy the build prompt into your tool (V0, Lovable, Bolt, Cursor)</li>
      </ol>
      
      <h3>Example input</h3>
      <p class="example">Personal finance dashboard that tracks spending and recommends savings goals.</p>
      
      <h3>Step-by-Step</h3>
      <ol>
        <li><strong>Describe:</strong> Write a short line with the product goal + primary user</li>
        <li><strong>Generate:</strong> We produce a refined build prompt + suggested sections/screens</li>
        <li><strong>Open your builder:</strong> V0 / Lovable / Bolt / Cursor</li>
        <li><strong>Paste + Run:</strong> Render the UI base; iterate in your builder</li>
        <li><strong>Refine:</strong> Use Smart Chat to adjust fields, flows, copy</li>
      </ol>
      
      <h3>Output</h3>
      <ul>
        <li>Refined build prompt</li>
        <li>Suggested screens/components</li>
        <li>Optional starter copy for headings and CTAs</li>
      </ul>
      
      <h3>Pro Tips</h3>
      <ul>
        <li>Start small (one core job-to-be-done). You can add features later.</li>
        <li>Include your audience in the line: "for freelancers," "for HR leads"</li>
        <li>If UI looks generic, add a tone: "clean dashboard, simple charts"</li>
      </ul>
      
      <h3>FAQs</h3>
      <p><strong>Q: My builder failed to render some parts.</strong><br>
      A: Reduce scope and re-generate; paste the updated prompt again.</p>
      
      <p><strong>Q: Can I control style (colors, layout)?</strong><br>
      A: Yes. Add style hints in the input: "minimal, light theme, card layout."</p>
      
      <h3>Troubleshooting</h3>
      <ul>
        <li><strong>Too many components:</strong> Ask Smart Chat: "Simplify to 3 screens: dashboard, settings, onboarding."</li>
        <li><strong>Wrong audience:</strong> Add: "for indie founders" or "for recruiters."</li>
      </ul>
    `,
  },
  {
    id: "prd-mode",
    title: "PRD Mode",
    content: `
      <h2>Overview</h2>
      <p>PRD Mode creates a clean, professional Product Requirements Document in minutes: features, user stories, acceptance criteria, edge cases, and success metrics.</p>
      
      <h3>When to use</h3>
      <ul>
        <li>You need a document for dev handoff or stakeholder review</li>
        <li>You want alignment on scope before coding</li>
        <li>You need clear success metrics</li>
      </ul>
      
      <h3>Quick Start</h3>
      <ol>
        <li>New Project → PRD Mode</li>
        <li>Enter the product idea + goals</li>
        <li>Click Generate</li>
        <li>Review sections and refine with Smart Chat</li>
        <li>Export to PDF or Markdown</li>
      </ol>
      
      <h3>Example input</h3>
      <p class="example">AI tool for founders that writes personalized cold outreach.<br>
      Goal: faster replies, simple setup, integrates with Gmail.</p>
      
      <h3>Step-by-Step</h3>
      <ol>
        <li><strong>Describe:</strong> Audience, problem, and 1-2 key features</li>
        <li><strong>Generate PRD:</strong> You'll get sections for features, flows, criteria, metrics</li>
        <li><strong>Refine:</strong> Ask Smart Chat to add/remove features or expand edge cases</li>
        <li><strong>Handoff:</strong> Export PDF/MD and share with your team or investors</li>
      </ol>
      
      <h3>Output</h3>
      <ul>
        <li>Problem, goals, scope</li>
        <li>Feature list with user stories</li>
        <li>Acceptance criteria & edge cases</li>
        <li>Success metrics & non-functional requirements</li>
      </ul>
      
      <h3>Pro Tips</h3>
      <ul>
        <li>Keep v1 small. Move extras to "Future iterations."</li>
        <li>Add example data to make acceptance criteria testable.</li>
      </ul>
      
      <h3>FAQs</h3>
      <p><strong>Q: Can I add my own template sections?</strong><br>
      A: Yes. Ask Smart Chat: "Add a Security & Privacy section" or "Add Risks & Mitigations."</p>
      
      <h3>Troubleshooting</h3>
      <ul>
        <li><strong>Scope creep:</strong> Ask: "Cut to MVP. Keep only the core flow."</li>
        <li><strong>Ambiguous criteria:</strong> Ask: "Make acceptance criteria binary and testable."</li>
      </ul>
    `,
  },
  {
    id: "ideastorm-mode",
    title: "Ideastorm Mode",
    content: `
      <h2>Overview</h2>
      <p>Ideastorm Mode helps you explore angles, niches, and pricing so you can pick a winning direction before you build.</p>
      
      <h3>When to use</h3>
      <ul>
        <li>You're not sure which niche or pricing makes sense</li>
        <li>You want a simple story that stands out</li>
        <li>You want to validate before writing code</li>
      </ul>
      
      <h3>Quick Start</h3>
      <ol>
        <li>New Project → Ideastorm Mode</li>
        <li>Give the core idea + target user (if known)</li>
        <li>Click Generate</li>
        <li>Review options; keep or combine the strongest ones</li>
      </ol>
      
      <h3>Example input</h3>
      <p class="example">Micro-SaaS to summarize customer feedback for small e-commerce brands.</p>
      
      <h3>Step-by-Step</h3>
      <ol>
        <li><strong>Describe:</strong> What it does + who it helps</li>
        <li><strong>Generate variants:</strong> ICPs, value props, pricing ideas, differentiators</li>
        <li><strong>Select:</strong> Choose the best angle (or merge two)</li>
        <li><strong>Move to PRD/Vibe:</strong> Turn the chosen angle into a PRD or Vibe Prompt</li>
      </ol>
      
      <h3>Output</h3>
      <ul>
        <li>3-7 variations with ICP, promise, and pricing</li>
        <li>Positioning lines & website headline options</li>
        <li>Simple validation plan (what to test first)</li>
      </ul>
      
      <h3>Pro Tips</h3>
      <ul>
        <li>Keep one audience per version. Broader audiences dilute value.</li>
        <li>Use "anti-goals" (what you will NOT do) to stay focused.</li>
      </ul>
      
      <h3>FAQs</h3>
      <p><strong>Q: Can I combine two ideas?</strong><br>
      A: Yes. Tell Smart Chat: "Merge option A's ICP with option C's pricing."</p>
      
      <h3>Troubleshooting</h3>
      <ul>
        <li><strong>Ideas feel generic:</strong> Add constraints: industry, team size, budget.</li>
        <li><strong>Too many options:</strong> Ask: "Show top 3 only with pros/cons."</li>
      </ul>
    `,
  },
  {
    id: "platform-templates",
    title: "Platform Templates & Website Copy",
    content: `
      <h2>Overview</h2>
      <p>Use platform-specific templates that work in V0, Lovable, Bolt, Cursor, Replit, VS Code, plus website copy you can publish right away.</p>
      
      <h3>When to use</h3>
      <ul>
        <li>You want to build in your favorite tool without re-writing prompts</li>
        <li>You need a product landing page now</li>
      </ul>
      
      <h3>Quick Start</h3>
      <ol>
        <li>Open Platform Templates & Website Copy</li>
        <li>Pick your tool (V0, Lovable, Bolt, Cursor…)</li>
        <li>Copy the suggested prompt / template</li>
        <li>Generate and tweak in your tool</li>
        <li>Copy website sections into your CMS/editor</li>
      </ol>
      
      <h3>Step-by-Step</h3>
      <ol>
        <li><strong>Choose platform:</strong> Select from supported tools</li>
        <li><strong>Copy prompt:</strong> It's tuned for that tool's format</li>
        <li><strong>Generate UI:</strong> Run it and get your base screens</li>
        <li><strong>Website copy:</strong> Use the provided hero, features, pricing, FAQs</li>
        <li><strong>Iterate:</strong> Adjust with Smart Chat or directly in your tool</li>
      </ol>
      
      <h3>Output</h3>
      <ul>
        <li>Tool-ready prompts (by platform)</li>
        <li>Hero, features, pricing, FAQs</li>
        <li>Optional screenshot/script blocks for demos</li>
      </ul>
      
      <h3>Pro Tips</h3>
      <ul>
        <li>Keep platform prompts short; add complexity after the base UI renders.</li>
        <li>For websites, choose 1-2 clear CTAs only.</li>
      </ul>
      
      <h3>FAQs</h3>
      <p><strong>Q: Can I add my brand voice?</strong><br>
      A: Yes. Provide 2-3 lines that represent your tone, and ask: "Rewrite copy in this voice."</p>
      
      <h3>Troubleshooting</h3>
      <ul>
        <li><strong>Prompt errors in a tool:</strong> Remove advanced parts, generate basics, then layer in.</li>
        <li><strong>Copy too long:</strong> Ask: "Cut hero to 10 words. Keep benefit first."</li>
      </ul>
    `,
  },
  {
    id: "smart-chat",
    title: "Smart Chat & Exports",
    content: `
      <h2>Overview</h2>
      <p>Smart Chat lets you refine any part of your PRD, Vibe Prompt, or website copy. Exports let you share and archive.</p>
      
      <h3>When to use</h3>
      <ul>
        <li>You want to adjust wording, scope, or structure</li>
        <li>You need clean files for review or handoff</li>
      </ul>
      
      <h3>Quick Start</h3>
      <ol>
        <li>Open any generated section</li>
        <li>Click Smart Chat</li>
        <li>Give a direct instruction</li>
        <li>Export when you're happy</li>
      </ol>
      
      <h3>Examples</h3>
      <ul>
        <li>"Cut features to MVP only."</li>
        <li>"Add acceptance criteria for the onboarding flow."</li>
        <li>"Rewrite the hero in simple English."</li>
        <li>"Turn this into a checklist."</li>
      </ul>
      
      <h3>Step-by-Step</h3>
      <ol>
        <li><strong>Select target:</strong> PRD section, prompt, or website copy</li>
        <li><strong>Write instruction:</strong> Be clear; include goals/constraints</li>
        <li><strong>Review changes:</strong> Accept or ask for another pass</li>
        <li><strong>Export:</strong> Choose PDF or Markdown for sharing</li>
      </ol>
      
      <h3>Output</h3>
      <ul>
        <li>Updated copy/sections in place</li>
        <li>Exported files (.pdf / .md)</li>
      </ul>
      
      <h3>Pro Tips</h3>
      <ul>
        <li>Use numbers and constraints: "3 features max," "100 words," "non-technical."</li>
        <li>If you want a new section, say "Create section: Risks & Mitigations."</li>
      </ul>
      
      <h3>FAQs</h3>
      <p><strong>Q: Can I compare versions?</strong><br>
      A: Duplicate the page or keep changes in project chat threads for history.</p>
      
      <h3>Troubleshooting</h3>
      <ul>
        <li><strong>Edits drift off-brief:</strong> Remind Chat: "Keep ICP = HR leads at startups, not enterprises."</li>
        <li><strong>Formatting issues in export:</strong> Preview before sending; re-generate if needed.</li>
      </ul>
    `,
  },
  {
    id: "accounts",
    title: "Accounts & Projects",
    content: `
      <h2>Projects</h2>
      <ul>
        <li>Each idea is a Project</li>
        <li>Projects can include: Vibe Prompt, PRD, Ideastorm results, Website copy, Exports</li>
        <li>Use folders or tags to group related ideas</li>
      </ul>
      
      <h2>Teams (if enabled)</h2>
      <ul>
        <li>Invite teammates for shared editing</li>
        <li>Use comments/notes to request changes</li>
        <li>Keep one "source of truth" PRD</li>
      </ul>
    `,
  },
  {
    id: "faq",
    title: "FAQ",
    content: `
      <h2>Frequently Asked Questions</h2>
      
      <h3>Is MakePRD.ai only for micro-SaaS?</h3>
      <p>No. It's great for any product scope or landing page. Micro-SaaS is just where speed matters most.</p>
      
      <h3>Which tools are supported?</h3>
      <p>V0, Lovable, Bolt, Cursor, Replit, VS Code, and more. We keep adding platforms.</p>
      
      <h3>How do I make my outputs unique?</h3>
      <p>Provide examples of tone, add your ICP, and keep MVP scope tight.</p>
      
      <h3>Can I export to docs I already use?</h3>
      <p>Yes. Export PDF or Markdown and share anywhere.</p>
      
      <h2>Need help?</h2>
      <ul>
        <li><strong>Email:</strong> support@makeprd.ai</li>
        <li><strong>X / Twitter:</strong> @makeprdai</li>
        <li><strong>Community:</strong> Join our builders' space</li>
      </ul>
    `,
  },
]

export function DocsPageClient() {
  const [activeSection, setActiveSection] = useState("getting-started")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeContent = sections.find((s) => s.id === activeSection)

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-white to-light-grey pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Sidebar Toggle */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden fixed top-24 left-4 z-50 bg-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="ml-2">{sidebarOpen ? "Close" : "Menu"}</span>
          </Button>

          {/* Sidebar */}
          <aside
            className={cn(
              "lg:w-64 lg:sticky lg:top-32 lg:self-start",
              "fixed inset-0 z-40 bg-white/95 backdrop-blur-sm lg:bg-transparent",
              "transition-transform duration-300 lg:transform-none",
              sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
            )}
          >
            <Card className="p-6 lg:bg-white/80 lg:backdrop-blur-sm">
              <h2 className="text-lg font-bold mb-4 text-soft-black">Documentation</h2>
              <div className="overflow-y-auto max-h-[calc(100vh-200px)] lg:max-h-none">
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id)
                        setSidebarOpen(false)
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group",
                        activeSection === section.id
                          ? "bg-soft-black text-white"
                          : "hover:bg-warm-white text-soft-black",
                      )}
                    >
                      <span className="text-sm font-medium">{section.title}</span>
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform",
                          activeSection === section.id ? "text-white" : "text-muted-grey group-hover:translate-x-1",
                        )}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm">
              <h1 className="text-4xl font-bold mb-6 text-soft-black">{activeContent?.title}</h1>
              <div
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: activeContent?.content || "" }}
              />
            </Card>
          </main>
        </div>
      </div>

      <style jsx global>{`
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #2a2a2a;
        }
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.75;
          color: #4a4a4a;
        }
        .prose ul,
        .prose ol {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
          color: #4a4a4a;
        }
        .prose strong {
          font-weight: 600;
          color: #1a1a1a;
        }
        .prose .example {
          background: #f5f5f5;
          padding: 1rem;
          border-left: 4px solid #1a1a1a;
          margin: 1rem 0;
          font-style: italic;
        }
        .prose code {
          background: #f5f5f5;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  )
}
