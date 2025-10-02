import Link from "next/link"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-8 md:py-12 bg-white/80 backdrop-blur-sm text-soft-black border-t border-light-gray shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm px-4">
        <nav aria-label="Footer" className="w-full md:w-auto">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/terms"
                className="text-medium-gray hover:text-soft-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-light-gray"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-medium-gray hover:text-soft-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-light-gray"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-medium-gray hover:text-soft-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-light-gray"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/social"
                className="text-medium-gray hover:text-soft-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-light-gray"
              >
                Social
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-medium-gray font-mono text-xs md:text-sm">
          &copy; {year} MakePRD. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
