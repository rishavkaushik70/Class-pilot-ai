import * as React from "react"
import Link from "next/link"
import { LucideIcon, ArrowLeft, Layers } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

interface RoutePlaceholderProps {
  title: string
  description: string
  icon?: LucideIcon
  returnHref: string
  returnLabel: string
  plannedFeatures: string[]
}

export function RoutePlaceholder({
  title,
  description,
  icon: Icon = Layers,
  returnHref,
  returnLabel,
  plannedFeatures,
}: RoutePlaceholderProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-sans">
            {title}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <Badge variant="outline" className="text-xs font-mono w-fit">
          Milestone Shell
        </Badge>
      </div>

      <Card className="border-border/80 bg-card shadow-xs">
        <CardHeader className="space-y-3 pb-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-5" />
          </div>
          <CardTitle className="text-base sm:text-lg font-semibold font-sans">
            {title} Module
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            This module shell is securely protected behind verified organization
            membership and role guards. Full business logic and database CRUD
            operations will be connected in upcoming development sprints.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 pt-2">
          <div className="rounded-lg border border-border/70 bg-muted/20 p-4 space-y-2">
            <span className="text-xs font-semibold text-foreground">
              Planned Capabilities for this Module:
            </span>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {plannedFeatures.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-primary" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <Link
              href={returnHref}
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "gap-1.5 text-xs",
              })}
            >
              <ArrowLeft className="size-3.5" />
              <span>{returnLabel}</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
