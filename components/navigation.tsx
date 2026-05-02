"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/coaches", label: "Coaches" },
    { href: "/testimonials", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/scholarship", label: "Scholarship" },
    { href: "/donate", label: "Donate" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          mounted && isScrolled ? "h-16 lg:h-20" : "h-20"
        }`}>
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo-mark.png"
              alt="CLC's Gymnastics Academy"
              width={48}
              height={48}
              className={`transition-all duration-300 group-hover:scale-105 ${
                mounted && isScrolled ? "lg:w-12 lg:h-12 w-8 h-8" : ""
              }`}
            />
            <Image
              src="/logo-wordmark.png"
              alt="CLC's Gymnastics Academy"
              width={240}
              height={48}
              className="hidden lg:block"
            />
          </Link>

          {/* Mobile Action Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xs px-3"
              asChild
            >
              <a href="https://portal.iclasspro.com/clcsgymnastics" target="_blank" rel="noopener noreferrer">
                Sign Up
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-bold text-xs px-3"
              asChild
            >
              <Link href="/donate">
                Donate
              </Link>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-primary group ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            })}
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
              asChild
            >
              <a href="https://portal.iclasspro.com/clcsgymnastics" target="_blank" rel="noopener noreferrer">
                Sign Up
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-transform duration-200 active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block transition-all duration-300 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </span>
          </button>
        </div>

        {/* Mobile Navigation — slide down */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ transitionDelay: mobileMenuOpen ? `${i * 40}ms` : "0ms" }}
                    className={`flex items-center text-sm font-semibold tracking-wide uppercase px-2 py-2 rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                      isActive ? "text-primary bg-primary/10 border-l-4 border-primary pl-3" : "text-foreground/80"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Button
                size="sm"
                className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 w-full font-bold tracking-wide"
                asChild
              >
                <a href="https://portal.iclasspro.com/clcsgymnastics" target="_blank" rel="noopener noreferrer">
                  Sign Up
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
