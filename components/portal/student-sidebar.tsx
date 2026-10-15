"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  GraduationCap,
  CalendarCheck,
  CreditCard,
  BookOpen,
  BellRing,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface StudentSidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

const STUDENT_NAV_ITEMS = [
  { label: "Overview", href: "/student", icon: LayoutDashboard },
  { label: "My Classes", href: "/student/classes", icon: GraduationCap },
  { label: "My Attendance", href: "/student/attendance", icon: CalendarCheck },
  { label: "My Fees", href: "/student/fees", icon: CreditCard },
  { label: "Homework", href: "/student/homework", icon: BookOpen },
  { label: "Announcements", href: "/student/announcements", icon: BellRing },
  { label: "Settings", href: "/student/settings", icon: Settings },
]

export function StudentSidebar({ isOpen = false, onClose }: StudentSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-xs md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed top-16 bottom-0 left-0 z-40 w-64 border-r border-border/70 bg-card/95 transition-transform duration-200 ease-in-out md:static md:translate-x-0 md:bg-card/50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col justify-between p-4">
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="px-3 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                Student Portal
              </span>
              <nav className="mt-2 space-y-1" aria-label="Student Navigation">
                {STUDENT_NAV_ITEMS.map((item) => {
                  const Icon = item.icon
                  const isActive =
                    item.href === "/student"
                      ? pathname === "/student"
                      : pathname?.startsWith(item.href)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      )}
                    >
                      <Icon className="size-4 shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Student Privacy Notice */}
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2.5 text-[11px] text-muted-foreground">
            <span className="font-semibold text-foreground block">
              Private Student View
            </span>
            Access limited strictly to personal records
          </div>
        </div>
      </aside>
    </>
  )
}
