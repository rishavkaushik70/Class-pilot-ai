import { redirect } from "next/navigation"
import { requireAuthenticatedUser } from "@/lib/authorization"
import { prisma } from "@/lib/prisma"

export const instant = false

/**
 * Post-Authentication Dispatcher:
 * Resolves verified organization membership on the server and redirects
 * to the appropriate role-based portal (/teacher or /student), or prompts
 * multi-membership choice (/select-institute) or onboarding (/onboarding).
 */
export default async function DashboardPage() {
  const { user, session } = await requireAuthenticatedUser()

  try {
    const memberships = await prisma.member.findMany({
      where: { userId: user.id },
      include: { organization: true },
      orderBy: { createdAt: "asc" },
    })

    // If account has no valid institute membership, show clear onboarding
    if (!memberships || memberships.length === 0) {
      redirect("/onboarding")
    }

    // If multiple memberships exist and none is active, show institute choice
    if (memberships.length > 1 && !session.activeOrganizationId) {
      redirect("/select-institute")
    }

    const active = session.activeOrganizationId
      ? memberships.find((m) => m.organizationId === session.activeOrganizationId) ||
        memberships[0]
      : memberships[0]

    // Route based on verified server-side role
    if (active.role === "student") {
      redirect("/student")
    } else {
      redirect("/teacher")
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error
    }
    redirect("/onboarding?status=db_unconfigured")
  }
}
