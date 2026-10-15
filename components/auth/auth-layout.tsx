import * as React from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, CreditCard, QrCode, BellRing } from "lucide-react"
import { BrandLogo } from "@/components/landing/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"

interface AuthLayoutProps {
  children: React.ReactNode
  heading: string
  subheading: string
}

const BRAND_HIGHLIGHTS = [
  {
    title: "Smart Fee Tracking",
    description: "Automated due dates, installment breakdowns, and instant receipts.",
    icon: CreditCard,
  },
  {
    title: "Rapid QR Attendance",
    description: "Time-limited dynamic QR sessions for hundreds of students.",
    icon: QrCode,
  },
  {
    title: "Automated Parent Updates",
    description: "Keep parents informed with absence alerts and fee reminders.",
    icon: BellRing,
  },
]

export function AuthLayout({ children, heading, subheading }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      {/* Top Navigation Bar */}
      <header className="w-full border-b border-border/60 bg-background/80 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Home</span>
          </Link>
          <span className="h-4 w-px bg-border/60 hidden sm:inline" aria-hidden="true" />
          <BrandLogo />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Split Content Area */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto w-full">
        {/* Left Form Column (Focal Point) */}
        <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-sans">
                {heading}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {subheading}
              </p>
            </div>

            {/* Form Content */}
            <div className="rounded-xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm ring-1 ring-border/40">
              {children}
            </div>
          </div>
        </div>

        {/* Right Brand Panel (Desktop Only) */}
        <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 border-l border-border/60 bg-muted/20 p-8 xl:p-12 flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Background Glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 size-80 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="space-y-8 relative z-10 my-auto">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                CLASS PILOT AI
              </div>
              <h2 className="text-2xl xl:text-3xl font-bold tracking-tight text-foreground font-sans">
                Your coaching institute, intelligently managed.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Manage students, simplify fees, and bring your coaching
                operations together in one place.
              </p>
            </div>

            {/* Benefit Highlights List */}
            <div className="space-y-4 pt-2">
              {BRAND_HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-lg border border-border/60 bg-background/70 p-3.5 backdrop-blur-xs transition-colors"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-xs font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Trust statement */}
            <div className="pt-4 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              <span>Production-ready authentication powered by Better Auth.</span>
            </div>
          </div>

          <div className="relative z-10 pt-6 text-[11px] text-muted-foreground flex items-center justify-between">
            <span>&copy; 2026 CLASS PILOT AI</span>
            <span>Security &amp; Privacy First</span>
          </div>
        </div>
      </main>
    </div>
  )
}
