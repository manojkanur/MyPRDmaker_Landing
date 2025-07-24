import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThreeBackground } from "@/components/three-background"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

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
      <body className={`${inter.variable} ${sora.variable} font-inter antialiased bg-white text-soft-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Default to light theme for black-on-white
          enableSystem
          disableTransitionOnChange
        >
          <ThreeBackground />
          <SiteHeader />
          <div className="relative z-10">
            {" "}
            {/* Content wrapper to be above 3D background */}
            {children}
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
