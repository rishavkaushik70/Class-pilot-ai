"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  CreditCard,
  CalendarDays,
  BellRing,
  Sparkles,
  Settings,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface TeacherSidebarProps {
  role: "owner" | "admin" | "teacher" | "student"
  isOpen?: boolean
  onClose?: () => void
}

const BASE_NAV_ITEMS = [
  { label: "Overview", href: "/teacher", icon: LayoutDashboard },
  { label: "Students", href: "/teacher/students", icon: Users },
  { label: "Batches", href: "/teacher/batches", icon: FolderKanban },
  { label: "Attendance", href: "/teacher/attendance", icon: CheckSquare },
  { label: "Fees", href: "/teacher/fees", icon: CreditCard },
  { label: "Timetable", href: "/teacher/timetable", icon: CalendarDays },
  { label: "Announcements", href: "/teacher/announcements", icon: BellRing },
  { label: "AI Insights", href: "/teacher/ai-insights", icon: Sparkles },
  { label: "Settings", href: "/teacher/settings", icon: Settings },
]

const ADMIN_ONLY_ITEMS = [
  { label: "Staff & Roles", href: "/teacher/staff", icon: ShieldCheck },
]

export function TeacherSidebar({ role, isOpen = false, onClose }: TeacherSidebarProps) {
  const pathname = usePathname()
  const isOwnerOrAdmin = role === "owner" || role === "admin"

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
            {/* Main Navigation Group */}
            <div className="space-y-1">
              <span className="px-3 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                Staff Portal
              </span>
              <nav className="mt-2 space-y-1" aria-label="Teacher Navigation">
                {BASE_NAV_ITEMS.map((item) => {
                  const Icon = item.icon
                  const isActive =
                    item.href === "/teacher"
                      ? pathname === "/teacher"
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

            {/* Admin Management Section (Owner & Admin Only) */}
            {isOwnerOrAdmin && (
              <div className="space-y-1 pt-4 border-t border-border/60">
                <span className="px-3 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                  Administration
                </span>
                <nav className="mt-2 space-y-1" aria-label="Admin Navigation">
                  {ADMIN_ONLY_ITEMS.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname?.startsWith(item.href)

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
            )}
          </div>

          {/* Footer Institute Scope Notice */}
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2.5 text-[11px] text-muted-foreground">
            <span className="font-semibold text-foreground block">
              Scoped Permissions
            </span>
            Active role: <span className="capitalize">{role}</span>
          </div>
        </div>
      </aside>
    </>
  )
}
