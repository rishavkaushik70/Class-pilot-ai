"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Menu,
  X,
  LogOut,
  Building2,
  Shield,
  GraduationCap,
} from "lucide-react"
import { BrandLogo } from "@/components/landing/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

interface PortalHeaderProps {
  instituteName: string
  role: "owner" | "admin" | "teacher" | "student"
  userName: string
  userEmail: string
  portalType: "teacher" | "student"
  onToggleMobileMenu?: () => void
  isMobileMenuOpen?: boolean
}

export function PortalHeader({
  instituteName,
  role,
  userName,
  userEmail,
  portalType,
  onToggleMobileMenu,
  isMobileMenuOpen = false,
}: PortalHeaderProps) {
  const router = useRouter()
  const [signingOut, setSigningOut] = React.useState(false)

  const handleSignOut = async () => {
    setSigningOut(true)
    try {
      await authClient.signOut()
      router.push("/sign-in")
      router.refresh()
    } catch {
      setSigningOut(false)
    }
  }

  const roleBadgeVariants: Record<
    string,
    { label: string; variant: "default" | "secondary" | "outline" }
  > = {
    owner: { label: "Institute Owner", variant: "default" },
    admin: { label: "Institute Admin", variant: "default" },
    teacher: { label: "Faculty / Teacher", variant: "secondary" },
    student: { label: "Student", variant: "outline" },
  }

  const currentRole = roleBadgeVariants[role] || {
    label: role,
    variant: "outline",
  }

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border/70 bg-card/85 px-4 sm:px-6 backdrop-blur-md">
      {/* Left Area: Mobile Menu Trigger + Institute Brand */}
      <div className="flex items-center gap-3">
        {onToggleMobileMenu && (
          <button
            type="button"
            onClick={onToggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close sidebar menu" : "Open sidebar menu"}
            aria-expanded={isMobileMenuOpen}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground md:hidden hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        )}

        <div className="flex items-center gap-2">
          <BrandLogo className="hidden sm:inline-flex" />
          <span className="hidden sm:inline text-border/80">/</span>
          <div className="flex items-center gap-1.5">
            <div className="flex size-6 items-center justify-center rounded bg-primary/10 text-primary">
              <Building2 className="size-3.5" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-foreground truncate max-w-[160px] sm:max-w-xs">
              {instituteName}
            </span>
          </div>
        </div>
      </div>

      {/* Right Area: Role Badge + User Info + Theme Toggle + Sign Out */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Badge
          variant={currentRole.variant}
          className="hidden sm:inline-flex text-[11px] font-mono px-2 py-0.5"
        >
          {portalType === "teacher" ? (
            <Shield className="mr-1 size-3 text-primary" />
          ) : (
            <GraduationCap className="mr-1 size-3 text-primary" />
          )}
          {currentRole.label}
        </Badge>

        <ThemeToggle />

        <div className="hidden lg:flex flex-col text-right">
          <span className="text-xs font-medium text-foreground truncate max-w-[140px]">
            {userName || "Educator"}
          </span>
          <span className="text-[10px] text-muted-foreground truncate max-w-[140px]">
            {userEmail}
          </span>
        </div>

        <button
          type="button"
          onClick={handleSignOut}
          disabled={signingOut}
          title="Sign out of coaching portal"
          aria-label="Sign out"
          className={buttonVariants({
            variant: "ghost",
            size: "icon-sm",
            className: "text-muted-foreground hover:text-foreground",
          })}
        >
          <LogOut className="size-4" />
        </button>
      </div>
    </header>
  )
}
