import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import type { User, Session, Organization, Member } from "@prisma/client"

export type InstituteRole = "owner" | "admin" | "teacher" | "student"

export interface ActiveMembershipContext {
  user: User
  session: Session
  organization: Organization
  membership: Member & { role: InstituteRole }
  allMemberships: (Member & { organization: Organization })[]
}

/**
 * Validates that a user is authenticated via Better Auth.
 * Redirects to /sign-in if no valid session exists.
 */
export async function requireAuthenticatedUser(): Promise<{
  user: User
  session: Session
}> {
  try {
    const sessionData = await auth.api.getSession({
      headers: await headers(),
    })

    if (!sessionData?.user || !sessionData?.session) {
      redirect("/sign-in")
    }

    return {
      user: sessionData.user as unknown as User,
      session: sessionData.session as unknown as Session,
    }
  } catch (error) {
    // If redirect was thrown by Next.js, rethrow it
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error
    }
    redirect("/sign-in")
  }
}

/**
 * Resolves the authenticated user's active institute and membership.
 * Directs users without memberships to /onboarding, and users with multiple
 * unselected memberships to /select-institute.
 */
type MemberWithOrg = Member & { organization: Organization }

export async function requireActiveOrganization(): Promise<ActiveMembershipContext> {
  const { user, session } = await requireAuthenticatedUser()

  try {
    const memberships: MemberWithOrg[] = await prisma.member.findMany({
      where: { userId: user.id },
      include: { organization: true },
      orderBy: { createdAt: "asc" },
    })

    if (!memberships || memberships.length === 0) {
      redirect("/onboarding")
    }

    // Determine active membership
    let active: MemberWithOrg | undefined | null = session.activeOrganizationId
      ? memberships.find(
          (m: MemberWithOrg) => m.organizationId === session.activeOrganizationId
        )
      : null

    // If activeOrg is not set or not in memberships, pick first or prompt selection if multiple
    if (!active) {
      if (memberships.length === 1) {
        active = memberships[0]
      } else {
        redirect("/select-institute")
      }
    }

    return {
      user,
      session,
      organization: active.organization,
      membership: active as Member & { role: InstituteRole },
      allMemberships: memberships as (Member & { organization: Organization })[],
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error
    }
    // If database is not reachable or tables not migrated, route to onboarding with clear status
    redirect("/onboarding?status=db_unconfigured")
  }
}

/**
 * Enforces access to the Teacher/Staff Portal (/teacher).
 * Permitted roles: owner, admin, teacher.
 * Denies student accounts with an access-denied redirect.
 */
export async function requireTeacherPortalAccess(): Promise<ActiveMembershipContext> {
  const context = await requireActiveOrganization()
  const role = context.membership.role as InstituteRole

  if (role === "student") {
    redirect("/forbidden?reason=teacher_portal_staff_only")
  }

  if (role !== "owner" && role !== "admin" && role !== "teacher") {
    redirect("/forbidden?reason=unauthorized_role")
  }

  return context
}

/**
 * Enforces access to the Student Portal (/student).
 * Permitted role: student.
 * Denies staff accounts with a role-mismatch redirect.
 */
export async function requireStudentPortalAccess(): Promise<ActiveMembershipContext> {
  const context = await requireActiveOrganization()
  const role = context.membership.role as InstituteRole

  if (role !== "student") {
    redirect("/forbidden?reason=student_portal_students_only")
  }

  return context
}

/**
 * Enforces owner/admin management privileges.
 */
export async function requireInstituteAdminAccess(): Promise<ActiveMembershipContext> {
  const context = await requireActiveOrganization()
  const role = context.membership.role as InstituteRole

  if (role !== "owner" && role !== "admin") {
    redirect("/forbidden?reason=admin_privileges_required")
  }

  return context
}
