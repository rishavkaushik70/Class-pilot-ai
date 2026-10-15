import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { Building2, ArrowRight, Shield, GraduationCap } from "lucide-react"
import { requireAuthenticatedUser } from "@/lib/authorization"
import { prisma } from "@/lib/prisma"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BrandLogo } from "@/components/landing/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { setActiveInstituteAction } from "@/app/actions/institute-actions"
import type { Member, Organization } from "@prisma/client"

export const metadata: Metadata = {
  title: "Select Coaching Institute — CLASS PILOT AI",
  description: "Select your active coaching institute workspace.",
}

export const instant = false

type MemberWithOrg = Member & { organization: Organization }

export default async function SelectInstitutePage() {
  const { user } = await requireAuthenticatedUser()

  let memberships: MemberWithOrg[] = []
  try {
    memberships = await prisma.member.findMany({
      where: { userId: user.id },
      include: { organization: true },
      orderBy: { createdAt: "desc" },
    })
  } catch {
    redirect("/onboarding?status=db_unconfigured")
  }

  if (memberships.length === 0) {
    redirect("/onboarding")
  }

  // If user only belongs to one institute, auto-redirect directly
  if (memberships.length === 1) {
    const single = memberships[0]
    if (single.role === "student") {
      redirect("/student")
    } else {
      redirect("/teacher")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border/70 bg-card/60 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <BrandLogo />
        <ThemeToggle />
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-lg w-full space-y-6">
          <Card className="border-border/80 bg-card shadow-sm">
            <CardHeader className="space-y-2 pb-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Building2 className="size-5" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold font-sans">
                Select Coaching Institute
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Your account is associated with multiple coaching institutes.
                Select which institute workspace you would like to enter.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 pt-3">
              {memberships.map((m) => {
                const isStudent = m.role === "student"
                return (
                  <form
                    key={m.id}
                    action={setActiveInstituteAction.bind(null, m.organizationId)}
                  >
                    <button
                      type="submit"
                      className="w-full flex items-center justify-between rounded-xl border border-border/70 bg-muted/20 p-4 text-left transition-all hover:border-border hover:bg-muted/40 hover:shadow-xs group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                            {m.organization.name}
                          </span>
                          <Badge
                            variant={isStudent ? "outline" : "default"}
                            className="text-[10px] capitalize font-mono"
                          >
                            {isStudent ? (
                              <GraduationCap className="mr-1 size-3" />
                            ) : (
                              <Shield className="mr-1 size-3" />
                            )}
                            {m.role}
                          </Badge>
                        </div>
                        <p className="text-[11px] text-muted-foreground">
                          {isStudent
                            ? "Enter Student Portal"
                            : "Enter Teacher & Staff Portal"}
                        </p>
                      </div>

                      <div className="flex size-8 items-center justify-center rounded-lg bg-background text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary">
                        <ArrowRight className="size-4" />
                      </div>
                    </button>
                  </form>
                )
              })}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
