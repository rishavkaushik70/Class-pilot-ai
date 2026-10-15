import * as React from "react"
import {
  Users,
  CreditCard,
  CheckCircle2,
  Bell,
  Clock,
  Sparkles,
  QrCode,
  AlertTriangle,
  TrendingUp,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border/80 bg-card p-3 sm:p-5 shadow-xl shadow-foreground/5 ring-1 ring-border/50",
        className
      )}
    >
      {/* Dashboard Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-3.5 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-destructive/60" />
            <span className="size-2.5 rounded-full bg-amber-500/60" />
            <span className="size-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="h-4 w-px bg-border/80 mx-1" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span className="font-heading text-xs font-semibold tracking-tight text-foreground">
              Apex IIT &amp; NEET Academy
            </span>
            <span className="text-[11px] text-muted-foreground hidden sm:inline">
              • Academic Session 2026
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Session Active
          </div>
          <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5">
            Illustrative Demo
          </Badge>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
        {/* Total Students */}
        <div className="rounded-xl border border-border/70 bg-muted/30 p-3 transition-colors hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              Total Students
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="size-3.5" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              428
            </span>
            <span className="inline-flex items-center text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="mr-0.5 size-3" />
              +14 this term
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">
            12 active batches across 2 wings
          </p>
        </div>

        {/* Fee Collection */}
        <div className="rounded-xl border border-border/70 bg-muted/30 p-3 transition-colors hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              Fee Collection
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CreditCard className="size-3.5" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              ₹4,85,000
            </span>
            <span className="rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
              93.2%
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">
            ₹35,000 pending across 8 accounts
          </p>
        </div>

        {/* Today's Attendance */}
        <div className="rounded-xl border border-border/70 bg-muted/30 p-3 transition-colors hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              Today&apos;s Attendance
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CheckCircle2 className="size-3.5" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              94.6%
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              182/193 marked
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">
            11 absentees • Alerts queued
          </p>
        </div>

        {/* Pending Reminders */}
        <div className="rounded-xl border border-border/70 bg-muted/30 p-3 transition-colors hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              Pending Reminders
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Bell className="size-3.5" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              14 Queued
            </span>
            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              Automated
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Scheduled for 10:00 AM dispatch
          </p>
        </div>
      </div>

      {/* Main Grid: Upcoming Classes & Fee Tracking vs AI Insights */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Left Column (7 cols): Upcoming Classes & Fee Ledger Preview */}
        <div className="space-y-4 lg:col-span-7">
          {/* Upcoming Classes */}
          <div className="rounded-xl border border-border/70 bg-card p-3.5">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5">
                <Clock className="size-4 text-primary" />
                <h4 className="font-heading text-xs font-semibold text-foreground">
                  Today&apos;s Class Schedule
                </h4>
              </div>
              <span className="text-[11px] text-muted-foreground">
                3 batches remaining
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 p-2.5 text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      Advanced Physics (Batch JEE-A)
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-primary/15 px-1.5 py-0.2 text-[10px] font-medium text-primary">
                      <QrCode className="size-3" />
                      QR Active
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    04:00 PM – 05:30 PM • Room 302 • Prof. V. Sharma
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  48/50 Present
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 p-2.5 text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      Organic Chemistry (Batch NEET-Prime)
                    </span>
                    <span className="rounded bg-muted px-1.5 py-0.2 text-[10px] font-medium text-muted-foreground">
                      Upcoming
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    05:45 PM – 07:15 PM • Room 204 • Dr. Anita Rao
                  </p>
                </div>
                <span className="text-[11px] text-muted-foreground">
                  Starts in 35m
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 p-2.5 text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      Calculus &amp; Vectors (Batch 12-B)
                    </span>
                    <span className="rounded bg-muted px-1.5 py-0.2 text-[10px] font-medium text-muted-foreground">
                      Scheduled
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    07:30 PM – 09:00 PM • Room 101 • Er. K. Patel
                  </p>
                </div>
                <span className="text-[11px] text-muted-foreground">
                  Session 18
                </span>
              </div>
            </div>
          </div>

          {/* Fee Collection Overview Bar */}
          <div className="rounded-xl border border-border/70 bg-card p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-foreground">
                Term 1 Collection Progress
              </span>
              <span className="text-xs font-medium text-primary">
                ₹4.85L / ₹5.20L Target
              </span>
            </div>
            {/* Visual progress bar */}
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: "93.2%" }}
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>84% On-time</span>
              <span>9% Grace Period</span>
              <span className="text-destructive/80 font-medium">7% Overdue</span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): AI Insights Card & Batch Attendance */}
        <div className="space-y-4 lg:col-span-5">
          {/* AI Operational Insights Card */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-3.5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5">
                <div className="flex size-5 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Sparkles className="size-3" />
                </div>
                <span className="font-heading text-xs font-semibold text-foreground">
                  AI Operational Signals
                </span>
              </div>
              <Badge variant="outline" className="text-[9px] border-primary/30 text-primary">
                Demo Preview
              </Badge>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="rounded-lg border border-border/80 bg-background/80 p-2.5">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium text-foreground text-[11px] leading-tight">
                      Attendance Risk: 3 students in Batch JEE-A missed 2 consecutive sessions.
                    </p>
                    <p className="text-[10px] text-muted-foreground leading-normal">
                      Suggested Action: Automated parent check-in drafted for review.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border/80 bg-background/80 p-2.5">
                <div className="flex items-start gap-2">
                  <TrendingUp className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium text-foreground text-[11px] leading-tight">
                      Cashflow Projection: 91% probability of collecting ₹32,000 pending dues.
                    </p>
                    <p className="text-[10px] text-muted-foreground leading-normal">
                      Based on historical response to WhatsApp reminder queues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Batch Summary */}
          <div className="rounded-xl border border-border/70 bg-card p-3.5">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold text-foreground">
                Batch Attendance Snapshot
              </span>
              <span className="text-[11px] text-muted-foreground">Live Sync</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-border/50">
                <span className="text-muted-foreground text-[11px]">JEE Advanced Droppers</span>
                <span className="font-medium text-foreground text-[11px]">48/50 (96%)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/50">
                <span className="text-muted-foreground text-[11px]">NEET 12th Regular</span>
                <span className="font-medium text-foreground text-[11px]">62/66 (94%)</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-muted-foreground text-[11px]">Foundation 10th Maths</span>
                <span className="font-medium text-foreground text-[11px]">72/77 (93%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Illustrative Demo Data • Future Operational Interface Preview</span>
        <span className="hidden sm:inline">CLASS PILOT AI Institute Command View</span>
      </div>
    </div>
  )
}
