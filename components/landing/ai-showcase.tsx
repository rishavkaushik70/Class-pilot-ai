import * as React from "react"
import {
  Sparkles,
  TrendingDown,
  CalendarCheck2,
  FileCheck2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function AIShowcase() {
  return (
    <section id="ai-insights" className="py-16 md:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 text-xs font-medium border-primary/40 bg-primary/5 text-primary"
          >
            <Sparkles className="mr-1 size-3" />
            Next-Gen Intelligence
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            Actionable Operational Signals. Not Complex Analytics.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            See how future AI-driven insights can help institute owners catch
            attendance drop-offs, anticipate cashflow gaps, and stay ahead of daily
            administrative tasks.
          </p>

          {/* Conceptual Disclaimer Badge */}
          <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/40 px-3.5 py-1 text-xs text-muted-foreground">
            <span>
              Preview Examples • Conceptual AI capabilities planned for upcoming releases.
            </span>
          </div>
        </div>

        {/* 3 AI Showcase Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Example 1: Attendance Risk */}
          <Card className="relative overflow-hidden border-border/80 bg-card p-5 transition-all hover:border-border hover:shadow-md">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <TrendingDown className="size-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">
                  Attendance Anomaly
                </span>
              </div>
              <Badge variant="outline" className="text-[10px] text-muted-foreground">
                Signal #1
              </Badge>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-lg border border-border/70 bg-muted/30 p-3">
                <p className="text-xs font-semibold text-foreground">
                  3 Students with Declining Attendance
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Batch JEE-2026: Attendance fell from 92% to 64% over the last 3 weeks.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Risk Evaluation</span>
                  <span className="font-medium text-amber-600 dark:text-amber-400">
                    High Dropout Risk
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Recommended Action</span>
                  <span className="font-medium text-foreground">
                    Supportive Parent Outreach
                  </span>
                </div>
              </div>

              <div className="rounded-md border border-primary/20 bg-primary/5 p-2.5 text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Pre-Drafted Action:</span>{" "}
                Personalized attendance summary ready for guardian WhatsApp notification.
              </div>
            </div>
          </Card>

          {/* Example 2: Fee Follow-Up Prioritization */}
          <Card className="relative overflow-hidden border-border/80 bg-card p-5 transition-all hover:border-border hover:shadow-md">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CalendarCheck2 className="size-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">
                  Fee Collection Forecast
                </span>
              </div>
              <Badge variant="outline" className="text-[10px] text-muted-foreground">
                Signal #2
              </Badge>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-lg border border-border/70 bg-muted/30 p-3">
                <p className="text-xs font-semibold text-foreground">
                  ₹68,000 Due Across 18 Accounts
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Upcoming 5-day cycle. 4 accounts flagged with previous delayed cycles.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Follow-Up Strategy</span>
                  <span className="font-medium text-primary">
                    Automated 48h Advance Alert
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Projected Recovery</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    94% On-Time Collection
                  </span>
                </div>
              </div>

              <div className="rounded-md border border-primary/20 bg-primary/5 p-2.5 text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Pre-Drafted Action:</span>{" "}
                Gentle reminders staged with payment links for instant UPI/bank settlement.
              </div>
            </div>
          </Card>

          {/* Example 3: Daily Operational Summary */}
          <Card className="relative overflow-hidden border-border/80 bg-card p-5 transition-all hover:border-border hover:shadow-md">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <FileCheck2 className="size-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">
                  Daily Briefing
                </span>
              </div>
              <Badge variant="outline" className="text-[10px] text-muted-foreground">
                Signal #3
              </Badge>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-lg border border-border/70 bg-muted/30 p-3">
                <p className="text-xs font-semibold text-foreground">
                  Morning Operational Digest
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Instant executive overview delivered to owner before classes start.
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Scheduled Batches</span>
                  <span className="font-medium text-foreground">5 Sessions Today</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Faculty Coverage</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    100% Confirmed
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Room Allocations</span>
                  <span className="font-medium text-foreground">Zero Conflicts</span>
                </div>
              </div>

              <div className="rounded-md border border-primary/20 bg-primary/5 p-2.5 text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Summary Value:</span>{" "}
                Eliminates 45 minutes of morning manual checks across staff registers.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
