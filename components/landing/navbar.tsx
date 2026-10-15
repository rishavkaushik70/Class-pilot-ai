"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { BrandLogo } from "@/components/landing/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "AI Insights", href: "#ai-insights" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "border-border/80 bg-background/90 backdrop-blur-md shadow-xs"
          : "border-border/40 bg-background/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "text-muted-foreground hover:text-foreground",
            })}
          >
            Sign In
          </Link>
          <Link
            href="#get-started"
            className={buttonVariants({
              size: "sm",
              className: "gap-1.5",
            })}
          >
            Get Started
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-border bg-background/98 px-4 pt-2 pb-6 shadow-lg backdrop-blur-xl animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-border/80">
            <Link
              href="/sign-in"
              onClick={() => setMobileMenuOpen(false)}
              className={buttonVariants({
                variant: "outline",
                className: "w-full justify-center",
              })}
            >
              Sign In
            </Link>
            <Link
              href="#get-started"
              onClick={() => setMobileMenuOpen(false)}
              className={buttonVariants({
                className: "w-full justify-center gap-2",
              })}
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
