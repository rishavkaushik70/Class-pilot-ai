import * as React from "react"
import { requireTeacherPortalAccess } from "@/lib/authorization"
import { PortalShell } from "@/components/portal/portal-shell"

export const instant = false

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, organization, membership } = await requireTeacherPortalAccess()

  return (
    <PortalShell
      portalType="teacher"
      instituteName={organization.name}
      role={membership.role}
      userName={user.name}
      userEmail={user.email}
    >
      {children}
    </PortalShell>
  )
}
