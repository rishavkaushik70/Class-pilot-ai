import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DashboardPreview } from "@/components/landing/dashboard-preview"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background Accent Gradients (Restrained & Subtle) */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/15 to-accent/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Top Content */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center mb-6">
            <Badge
              variant="outline"
              className="gap-1.5 px-3 py-1 text-xs font-medium border-border/80 bg-muted/40 text-foreground"
            >
              <Sparkles className="size-3 text-primary" />
              Next-Gen Coaching Institute Management SaaS
            </Badge>
          </div>

          {/* Single H1 for SEO */}
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-sans">
            Run Your Coaching Institute.{" "}
            <span className="block text-primary">Not the Chaos.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans">
            Manage students, track fees, automate attendance, and keep parents
            informed — all from one intelligent platform built for modern
            coaching institutes.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#get-started"
              className={buttonVariants({
                size: "lg",
                className: "w-full sm:w-auto h-11 px-6 text-sm font-semibold gap-2 shadow-sm",
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
              Explore Features
            </Link>
          </div>

          {/* Compact Trust / Value Statement */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              <span>Less manual work</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              <span>Better visibility</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              <span>Smarter decisions</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Section */}
        <div className="mt-12 sm:mt-16">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
