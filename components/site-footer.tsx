import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="relative z-10 py-8 md:py-12 bg-white/80 backdrop-blur-sm text-soft-black border-t border-light-gray shadow-inner">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex space-x-6">
          <Link href="/terms" className="text-medium-gray hover:text-soft-black transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="text-medium-gray hover:text-soft-black transition-colors">
            Privacy
          </Link>
          <Link href="/contact" className="text-medium-gray hover:text-soft-black transition-colors">
            Contact
          </Link>
          <Link href="#social" className="text-medium-gray hover:text-soft-black transition-colors">
            Social
          </Link>
        </div>
        <div className="text-medium-gray font-mono text-xs md:text-sm">{"© 2025 MakePRD. All rights reserved."}</div>
      </div>
    </footer>
  )
}
