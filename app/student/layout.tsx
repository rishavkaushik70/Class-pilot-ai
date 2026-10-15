import * as React from "react"
import { requireStudentPortalAccess } from "@/lib/authorization"
import { PortalShell } from "@/components/portal/portal-shell"

export const instant = false

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, organization, membership } = await requireStudentPortalAccess()

  return (
    <PortalShell
      portalType="student"
      instituteName={organization.name}
      role={membership.role}
      userName={user.name}
      userEmail={user.email}
    >
      {children}
    </PortalShell>
  )
}
