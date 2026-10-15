import * as React from "react"
import Link from "next/link"
import { Compass } from "lucide-react"
import { cn } from "@/lib/utils"

interface BrandLogoProps {
  className?: string
  showTagline?: boolean
}

export function BrandLogo({ className, showTagline = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none",
        className
      )}
      aria-label="CLASS PILOT AI Home"
    >
      <div className="relative flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs transition-transform duration-200 group-hover:scale-105">
        <Compass className="size-5 transition-transform duration-300 group-hover:rotate-45" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-sans text-base font-bold tracking-tight text-foreground">
            CLASS PILOT
          </span>
          <span className="rounded bg-primary/10 px-1 py-0.5 text-[10px] font-bold tracking-wider text-primary uppercase">
            AI
          </span>
        </div>
        {showTagline && (
          <span className="text-[11px] text-muted-foreground mt-0.5">
            Run Your Coaching Institute. Not the Chaos.
          </span>
        )}
      </div>
    </Link>
  )
}
