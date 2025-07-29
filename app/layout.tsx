import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import dynamic from "next/dynamic"

// Lazy load the heavy 3D background component
const ThreeBackground = dynamic(
  () => import("@/components/three-background").then((mod) => ({ default: mod.ThreeBackground })),
  {
    ssr: false,
    loading: () => null,
  },
)

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "MakePRD - AI-powered PRD Generator",
  description: "Instantly generate professional Product Requirement Documents using intelligent prompts.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://mt.makeprd.ai" />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-inter antialiased bg-white text-soft-black`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ThreeBackground />
          <SiteHeader />
          <div className="relative z-10">
            {children}
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
