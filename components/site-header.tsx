"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "https://preview--make-prd-magic-ui.lovable.app/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  const handleLoginClick = () => {
    router.push("https://preview--make-prd-magic-ui.lovable.app/login")
  }

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-4rem)] max-w-3xl",
        "transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg rounded-full py-2 px-6"
          : "bg-transparent rounded-3xl py-4 px-8",
      )}
    >
      <div className="flex items-center justify-between h-14">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-soft-black">MakePRD</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-pure-black",
                scrolled ? "text-soft-black" : "text-soft-black",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button size="sm" onClick={handleLoginClick} className="bg-soft-black text-white hover:bg-pure-black">
            Login
          </Button>
        </nav>
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-soft-black">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white text-soft-black">
            <nav className="flex flex-col gap-4 pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium hover:text-pure-black"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button onClick={handleLoginClick} className="bg-soft-black text-white hover:bg-pure-black">
                Login
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
