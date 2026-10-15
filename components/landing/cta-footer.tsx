import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { BrandLogo } from "@/components/landing/brand-logo"

export function CTAFooter() {
  return (
    <>
      {/* Final CTA Section */}
      <section
        id="get-started"
        className="relative py-16 md:py-24 border-t border-border/60 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-border/80 bg-card p-8 sm:p-12 text-center shadow-lg ring-1 ring-border/50">
            {/* Subtle glow effect */}
            <div
              className="pointer-events-none absolute inset-x-0 -top-24 -z-10 flex justify-center overflow-hidden blur-2xl"
              aria-hidden="true"
            >
              <div className="h-44 w-96 rounded-full bg-primary/15" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl font-sans">
              Spend Less Time Managing.{" "}
              <span className="block text-primary">More Time Teaching.</span>
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
              Join forward-thinking coaching institute owners who are streamlining
              daily operations, eliminating fee collection headaches, and providing
              parents with total peace of mind.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full sm:w-auto h-11 px-8 text-sm font-semibold gap-2 shadow-sm",
                })}
              >
                Get Started
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#features"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto h-11 px-6 text-sm font-semibold",
                })}
              >
                Explore Platform Roadmap
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-primary" />
                No complex enterprise setup
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-primary" />
                Role-based access for staff &amp; students
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-primary" />
                Built for modern tuition &amp; exam centres
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-muted/30 py-12 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
            {/* Brand Logo & Tagline */}
            <BrandLogo showTagline />

            {/* Navigation Links */}
            <nav
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
              aria-label="Footer Navigation"
            >
              <Link
                href="#features"
                className="transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="transition-colors hover:text-foreground"
              >
                How It Works
              </Link>
              <Link
                href="#ai-insights"
                className="transition-colors hover:text-foreground"
              >
                AI Insights
              </Link>
              <Link
                href="#faq"
                className="transition-colors hover:text-foreground"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              &copy; 2026 CLASS PILOT AI. All rights reserved. Built for modern
              coaching institutes.
            </p>
            <p className="text-center sm:text-right">
              Run Your Coaching Institute. Not the Chaos.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
