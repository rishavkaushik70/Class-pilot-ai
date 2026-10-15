"use client"

import * as React from "react"
import { PortalHeader } from "@/components/portal/portal-header"
import { TeacherSidebar } from "@/components/portal/teacher-sidebar"
import { StudentSidebar } from "@/components/portal/student-sidebar"

interface PortalShellProps {
  portalType: "teacher" | "student"
  instituteName: string
  role: "owner" | "admin" | "teacher" | "student"
  userName: string
  userEmail: string
  children: React.ReactNode
}

export function PortalShell({
  portalType,
  instituteName,
  role,
  userName,
  userEmail,
  children,
}: PortalShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <PortalHeader
        portalType={portalType}
        instituteName={instituteName}
        role={role}
        userName={userName}
        userEmail={userEmail}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        isMobileMenuOpen={mobileMenuOpen}
      />
      <div className="flex flex-1">
        {portalType === "teacher" ? (
          <TeacherSidebar
            role={role}
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          />
        ) : (
          <StudentSidebar
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          />
        )}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl space-y-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
