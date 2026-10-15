import type { Metadata } from "next"
import Link from "next/link"
import {
  Users,
  CheckCircle2,
  CreditCard,
  AlertTriangle,
  Clock,
  Sparkles,
  QrCode,
  TrendingUp,
  ArrowRight,
  ShieldAlert,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { TEACHER_DEMO_DATA } from "@/lib/mock-portal-data"

export const metadata: Metadata = {
  title: "Teacher Overview — CLASS PILOT AI",
  description: "Teacher and institute staff operational dashboard.",
}

export default function TeacherOverviewPage() {
  const { metrics, upcomingClasses, pendingFollowUps, aiInsights } = TEACHER_DEMO_DATA

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-sans">
            Institute Operational Overview
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Daily command view for batches, session attendance, and pending student follow-ups.
          </p>
        </div>

        {/* Illustrative Notice Badge */}
        <Badge variant="outline" className="text-xs font-mono w-fit border-primary/30 text-primary">
          Illustrative Preview Data
        </Badge>
      </div>

      {/* 4 Top Metric Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Students */}
        <Card className="border-border/70 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <span className="text-xs font-medium text-muted-foreground">
              Total Enrolled Students
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="size-3.5" />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-2xl font-bold text-foreground">
              {metrics.totalStudents}
            </div>
            <p className="text-[11px] text-muted-foreground flex items-center gap-1">
              <TrendingUp className="size-3 text-emerald-600 dark:text-emerald-400" />
              <span>{metrics.activeBatches} active coaching batches</span>
            </p>
          </CardContent>
        </Card>

        {/* Today's Attendance */}
        <Card className="border-border/70 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <span className="text-xs font-medium text-muted-foreground">
              Today&apos;s Attendance
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CheckCircle2 className="size-3.5" />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-2xl font-bold text-foreground">
              {metrics.todayAttendanceRate}%
            </div>
            <p className="text-[11px] text-muted-foreground">
              {metrics.presentCount} present • {metrics.absentCount} absentees logged
            </p>
          </CardContent>
        </Card>

        {/* Fee Collection Overview */}
        <Card className="border-border/70 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <span className="text-xs font-medium text-muted-foreground">
              Fee Collection Overview
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CreditCard className="size-3.5" />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-2xl font-bold text-foreground">
              ₹{(metrics.feeCollectedAmount / 100000).toFixed(2)}L
            </div>
            <p className="text-[11px] text-muted-foreground">
              {metrics.feePercentage}% of ₹{(metrics.feeTargetAmount / 100000).toFixed(2)}L target
            </p>
          </CardContent>
        </Card>

        {/* Pending Follow-Ups */}
        <Card className="border-border/70 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <span className="text-xs font-medium text-muted-foreground">
              Pending Follow-Ups
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <AlertTriangle className="size-3.5" />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-2xl font-bold text-foreground">
              {metrics.pendingFollowUpsCount}
            </div>
            <p className="text-[11px] text-muted-foreground">
              3 urgent parent check-ins required
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid: Upcoming Classes Schedule + AI Insights & Follow-ups */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column (7 cols): Today's Classes & Schedules */}
        <div className="space-y-6 lg:col-span-7">
          <Card className="border-border/70 bg-card shadow-xs">
            <CardHeader className="pb-3 border-b border-border/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" />
                  <CardTitle className="text-sm font-semibold">
                    Today&apos;s Class Sessions
                  </CardTitle>
                </div>
                <Link
                  href="/teacher/timetable"
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  Full Schedule <ArrowRight className="size-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {upcomingClasses.map((cls) => (
                <div
                  key={cls.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-border/60 bg-muted/20 p-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground text-sm">
                        {cls.title}
                      </span>
                      {cls.status === "active_qr" && (
                        <span className="inline-flex items-center gap-1 rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                          <QrCode className="size-3" />
                          QR Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {cls.time} • {cls.room} • {cls.instructor}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {cls.attendanceTally}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Follow-ups Queue */}
          <Card className="border-border/70 bg-card shadow-xs">
            <CardHeader className="pb-3 border-b border-border/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="size-4 text-destructive" />
                  <CardTitle className="text-sm font-semibold">
                    Pending Student Follow-Ups
                  </CardTitle>
                </div>
                <span className="text-xs text-muted-foreground">Attention Queue</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {pendingFollowUps.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-3 rounded-lg border border-border/60 bg-muted/20 p-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">
                        {item.studentName}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        ({item.batch})
                      </span>
                      <Badge
                        variant={item.urgency === "high" ? "destructive" : "secondary"}
                        className="text-[9px] uppercase px-1.5 py-0.2"
                      >
                        {item.urgency}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column (5 cols): AI Insights Signals */}
        <div className="space-y-6 lg:col-span-5">
          <Card className="border-primary/30 bg-primary/5 shadow-xs relative overflow-hidden">
            <CardHeader className="pb-3 border-b border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Sparkles className="size-3.5" />
                  </div>
                  <CardTitle className="text-sm font-semibold text-foreground">
                    AI Operational Signals
                  </CardTitle>
                </div>
                <Badge variant="outline" className="text-[10px] border-primary/40 text-primary">
                  Demo Preview
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {aiInsights.map((insight) => (
                <div
                  key={insight.id}
                  className="rounded-lg border border-border/80 bg-background/80 p-3 text-xs space-y-1.5"
                >
                  <h4 className="font-semibold text-foreground text-xs">
                    {insight.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {insight.summary}
                  </p>
                  <div className="pt-1 border-t border-border/50 text-[10px] text-primary font-medium">
                    Recommended: {insight.recommendedAction}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card className="border-border/70 bg-card shadow-xs">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">
                Quick Actions
              </CardTitle>
              <CardDescription className="text-xs">
                Common teacher and batch workflows
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link
                href="/teacher/attendance"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "w-full justify-start text-xs gap-2",
                })}
              >
                <QrCode className="size-3.5 text-primary" />
                Launch QR Attendance Session
              </Link>
              <Link
                href="/teacher/students"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "w-full justify-start text-xs gap-2",
                })}
              >
                <Users className="size-3.5 text-primary" />
                View Student Batch Rosters
              </Link>
              <Link
                href="/teacher/announcements"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "w-full justify-start text-xs gap-2",
                })}
              >
                <CheckCircle2 className="size-3.5 text-primary" />
                Draft Batch Announcement
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
