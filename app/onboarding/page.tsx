import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import {
  Building2,
  Shield,
  GraduationCap,
  Database,
  Info,
  LogOut,
} from "lucide-react"
import { requireAuthenticatedUser } from "@/lib/authorization"
import { prisma } from "@/lib/prisma"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { BrandLogo } from "@/components/landing/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { OnboardingForm } from "@/components/portal/onboarding-form"

export const metadata: Metadata = {
  title: "Institute Setup & Onboarding — CLASS PILOT AI",
  description: "Set up your coaching institute or view account access status.",
}

export const instant = false

interface OnboardingPageProps {
  searchParams: Promise<{ status?: string }>
}

export default async function OnboardingPage({ searchParams }: OnboardingPageProps) {
  const { user } = await requireAuthenticatedUser()
  const { status } = await searchParams

  // Check if user already has an institute membership
  try {
    const existingMembership = await prisma.member.findFirst({
      where: { userId: user.id },
      include: { organization: true },
    })

    if (existingMembership) {
      if (existingMembership.role === "student") {
        redirect("/student")
      } else {
        redirect("/teacher")
      }
    }
  } catch {
    // Database unmigrated or unreachable
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/70 bg-card/60 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <BrandLogo />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "gap-1 text-xs",
            })}
          >
            <LogOut className="size-3.5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-2xl w-full space-y-6">
          {/* Database Unconfigured Banner */}
          {status === "db_unconfigured" && (
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs space-y-2 text-foreground">
              <div className="flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-400">
                <Database className="size-4 shrink-0" />
                <span>Database Connection Notice</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your account is authenticated via Better Auth, but the Neon
                PostgreSQL database has not yet been synchronized with the latest
                organization schema. Please add your <code>DATABASE_URL</code> in{" "}
                <code>.env</code> and run:
              </p>
              <pre className="rounded bg-background/80 p-2 font-mono text-[11px] border border-border/60">
                npx prisma db push
              </pre>
            </div>
          )}

          {/* Institute Setup Card (For Owners) */}
          <Card className="border-border/80 bg-card shadow-sm">
            <CardHeader className="space-y-2 pb-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Building2 className="size-5" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold font-sans">
                Set Up Your Coaching Institute
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Welcome, {user.name || "Educator"}! To access the Teacher &amp;
                Staff Portal, register your coaching institute below. You will be
                assigned the verified <span className="font-semibold text-foreground">Owner</span> role.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <OnboardingForm />
            </CardContent>
          </Card>

          {/* For Teachers and Students waiting for an invitation */}
          <Card className="border-border/60 bg-muted/20 shadow-xs">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Info className="size-4 text-primary" />
                <CardTitle className="text-sm font-semibold">
                  Are you an enrolled Student or invited Teacher?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-muted-foreground leading-relaxed">
              <p>
                Student and teacher access requires an authorized invitation or
                batch activation issued by your coaching institute administrator.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground mb-1">
                    <Shield className="size-3.5 text-primary" />
                    <span>Faculty &amp; Staff</span>
                  </div>
                  <p className="text-[11px]">
                    Ask your institute owner to add your email address to the
                    Staff roster. You will automatically receive access upon verification.
                  </p>
                </div>

                <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground mb-1">
                    <GraduationCap className="size-3.5 text-primary" />
                    <span>Students</span>
                  </div>
                  <p className="text-[11px]">
                    Your coaching centre will provide you with a student activation
                    link linked directly to your student record.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
