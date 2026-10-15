import type { Metadata } from "next"
import Link from "next/link"
import { ShieldAlert, ArrowRight, Home, LogOut } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { BrandLogo } from "@/components/landing/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Access Restricted — CLASS PILOT AI",
  description: "Role-based authorization restriction screen.",
}

export const instant = false

interface ForbiddenPageProps {
  searchParams: Promise<{ reason?: string }>
}

export default async function ForbiddenPage({ searchParams }: ForbiddenPageProps) {
  const { reason } = await searchParams

  const contentMap: Record<
    string,
    { title: string; desc: string; targetHref?: string; targetLabel?: string }
  > = {
    teacher_portal_staff_only: {
      title: "Staff Access Required",
      desc: "You are currently signed in with a Student account. The Teacher & Staff Portal is restricted to authorized faculty and institute administrators.",
      targetHref: "/student",
      targetLabel: "Go to Student Portal",
    },
    student_portal_students_only: {
      title: "Student Portal Access Only",
      desc: "You are currently signed in with a Staff role (Owner, Admin, or Teacher). This portal is reserved for student accounts.",
      targetHref: "/teacher",
      targetLabel: "Go to Staff Portal",
    },
    admin_privileges_required: {
      title: "Administrator Privileges Required",
      desc: "This area is restricted to Institute Owners and Administrators. Your current role does not have administrative permissions for this action.",
      targetHref: "/teacher",
      targetLabel: "Return to Staff Overview",
    },
    unauthorized_role: {
      title: "Access Denied",
      desc: "Your organization membership does not have permission to view this resource.",
      targetHref: "/",
      targetLabel: "Return to Home",
    },
  }

  const current =
    (reason && contentMap[reason]) || {
      title: "Access Restricted",
      desc: "You do not have the required role or organization permission to access this area.",
      targetHref: "/",
      targetLabel: "Return to Home",
    }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border/70 bg-card/60 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <BrandLogo />
        <ThemeToggle />
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-md w-full">
          <Card className="border-destructive/30 bg-card shadow-sm">
            <CardHeader className="space-y-3 pb-3 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <ShieldAlert className="size-6" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold font-sans">
                {current.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                {current.desc}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 pt-3">
              {current.targetHref && current.targetLabel && (
                <Link
                  href={current.targetHref}
                  className={buttonVariants({
                    className: "w-full justify-center gap-1.5",
                  })}
                >
                  <span>{current.targetLabel}</span>
                  <ArrowRight className="size-4" />
                </Link>
              )}

              <div className="flex items-center gap-2 pt-2">
                <Link
                  href="/"
                  className={buttonVariants({
                    variant: "outline",
                    className: "flex-1 justify-center gap-1.5 text-xs",
                  })}
                >
                  <Home className="size-3.5" />
                  <span>Landing Page</span>
                </Link>

                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "flex-1 justify-center gap-1.5 text-xs",
                  })}
                >
                  <LogOut className="size-3.5" />
                  <span>Switch Account</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
