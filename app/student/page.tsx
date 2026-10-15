import type { Metadata } from "next"
import Link from "next/link"
import {
  CalendarDays,
  CalendarCheck,
  CreditCard,
  BookOpen,
  BellRing,
  Clock,
  ArrowRight,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { STUDENT_DEMO_DATA } from "@/lib/mock-portal-data"

export const metadata: Metadata = {
  title: "Student Portal — CLASS PILOT AI",
  description: "Student daily timetable, attendance records, and assignments.",
}

export default function StudentOverviewPage() {
  const {
    metrics,
    todayTimetable,
    upcomingClasses,
    homeworkAssignments,
    announcements,
  } = STUDENT_DEMO_DATA

  return (
    <div className="space-y-6">
      {/* Student Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-sans">
            My Study Dashboard
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Track your daily timetable, personal attendance record, and upcoming assignments.
          </p>
        </div>

        <Badge variant="outline" className="text-xs font-mono w-fit border-primary/30 text-primary">
          Student Record View
        </Badge>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Attendance Summary */}
        <Card className="border-border/70 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <span className="text-xs font-medium text-muted-foreground">
              My Attendance Rate
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CalendarCheck className="size-3.5" />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-2xl font-bold text-foreground">
              {metrics.attendanceRate}%
            </div>
            <p className="text-[11px] text-muted-foreground">
              {metrics.attendedSessions} of {metrics.totalSessions} sessions attended
            </p>
          </CardContent>
        </Card>

        {/* Homework & Assignments */}
        <Card className="border-border/70 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <span className="text-xs font-medium text-muted-foreground">
              Pending Homework
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BookOpen className="size-3.5" />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-2xl font-bold text-foreground">
              {metrics.pendingAssignments}
            </div>
            <p className="text-[11px] text-muted-foreground">
              2 assignments due this week
            </p>
          </CardContent>
        </Card>

        {/* Fee Payment Status */}
        <Card className="border-border/70 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <span className="text-xs font-medium text-muted-foreground">
              Fee Status
            </span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CreditCard className="size-3.5" />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              All Clear
            </div>
            <p className="text-[11px] text-muted-foreground">
              Next installment: {metrics.nextFeeDueDate}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid: Today's Timetable & Upcoming Classes vs Homework & Announcements */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column (7 cols): Today's Classes & Timetable */}
        <div className="space-y-6 lg:col-span-7">
          {/* Today's Timetable */}
          <Card className="border-border/70 bg-card shadow-xs">
            <CardHeader className="pb-3 border-b border-border/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" />
                  <CardTitle className="text-sm font-semibold">
                    Today&apos;s Class Schedule
                  </CardTitle>
                </div>
                <Link
                  href="/student/classes"
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  My Classes <ArrowRight className="size-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {todayTimetable.map((cls) => (
                <div
                  key={cls.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-lg border border-border/60 bg-muted/20 p-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground text-sm">
                        {cls.subject}
                      </span>
                      {cls.status === "live_now" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live Now
                        </span>
                      ) : (
                        <Badge variant="outline" className="text-[10px]">
                          Upcoming
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {cls.time} • {cls.room} • {cls.instructor}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Classes */}
          <Card className="border-border/70 bg-card shadow-xs">
            <CardHeader className="pb-3 border-b border-border/60">
              <div className="flex items-center gap-2">
                <CalendarDays className="size-4 text-primary" />
                <CardTitle className="text-sm font-semibold">
                  Upcoming Classes Later This Week
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-2.5">
              {upcomingClasses.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 p-2.5 text-xs"
                >
                  <div>
                    <span className="font-semibold text-foreground">
                      {item.subject}
                    </span>
                    <p className="text-[11px] text-muted-foreground">
                      {item.topic}
                    </p>
                  </div>
                  <div className="text-right text-[11px] text-muted-foreground font-medium">
                    {item.date} @ {item.time}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column (5 cols): Homework & Announcements */}
        <div className="space-y-6 lg:col-span-5">
          {/* Homework Assignments */}
          <Card className="border-border/70 bg-card shadow-xs">
            <CardHeader className="pb-3 border-b border-border/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-primary" />
                  <CardTitle className="text-sm font-semibold">
                    Homework &amp; Tasks
                  </CardTitle>
                </div>
                <Link
                  href="/student/homework"
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  View All <ArrowRight className="size-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-2.5">
              {homeworkAssignments.map((hw) => (
                <div
                  key={hw.id}
                  className="rounded-lg border border-border/60 bg-muted/20 p-3 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">
                      {hw.subject}
                    </span>
                    <Badge
                      variant={hw.status === "pending" ? "destructive" : "secondary"}
                      className="text-[9px] uppercase px-1.5 py-0.2"
                    >
                      {hw.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{hw.title}</p>
                  <p className="text-[10px] text-muted-foreground pt-1">
                    Due: {hw.dueDate}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Institute Announcements */}
          <Card className="border-border/70 bg-card shadow-xs">
            <CardHeader className="pb-3 border-b border-border/60">
              <div className="flex items-center gap-2">
                <BellRing className="size-4 text-primary" />
                <CardTitle className="text-sm font-semibold">
                  Institute Announcements
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {announcements.map((ann) => (
                <div
                  key={ann.id}
                  className="rounded-lg border border-border/60 bg-muted/20 p-3 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground text-xs">
                      {ann.title}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {ann.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {ann.excerpt}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
