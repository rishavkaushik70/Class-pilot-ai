"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Laptop } from "lucide-react"
import { cn } from "@/lib/utils"

const emptySubscribe = () => () => {}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex h-8 items-center rounded-lg border border-border/80 bg-muted/40 p-0.5 text-muted-foreground",
          className
        )}
        aria-hidden="true"
      >
        <span className="size-7 rounded-md p-1" />
        <span className="size-7 rounded-md p-1" />
        <span className="size-7 rounded-md p-1" />
      </div>
    )
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme preference"
      className={cn(
        "inline-flex h-8 items-center rounded-lg border border-border/80 bg-muted/60 p-0.5 text-muted-foreground transition-colors",
        className
      )}
    >
      <button
        type="button"
        role="radio"
        aria-checked={theme === "light"}
        onClick={() => setTheme("light")}
        className={cn(
          "inline-flex size-7 items-center justify-center rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          theme === "light"
            ? "bg-background text-foreground shadow-xs font-medium"
            : "text-muted-foreground hover:text-foreground"
        )}
        title="Light theme"
        aria-label="Switch to light theme"
      >
        <Sun className="size-3.5" />
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={theme === "system"}
        onClick={() => setTheme("system")}
        className={cn(
          "inline-flex size-7 items-center justify-center rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          theme === "system"
            ? "bg-background text-foreground shadow-xs font-medium"
            : "text-muted-foreground hover:text-foreground"
        )}
        title="System theme"
        aria-label="Follow system theme"
      >
        <Laptop className="size-3.5" />
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={theme === "dark"}
        onClick={() => setTheme("dark")}
        className={cn(
          "inline-flex size-7 items-center justify-center rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          theme === "dark"
            ? "bg-background text-foreground shadow-xs font-medium"
            : "text-muted-foreground hover:text-foreground"
        )}
        title="Dark theme"
        aria-label="Switch to dark theme"
      >
        <Moon className="size-3.5" />
      </button>
    </div>
  )
}
