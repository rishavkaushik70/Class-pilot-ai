import * as React from "react"
import {
  CreditCard,
  Users,
  QrCode,
  BellRing,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const CORE_FEATURES = [
  {
    title: "Smart Fee Tracking",
    description:
      "Track due dates, payment status, and outstanding fees with flexible installment schedules, automated receipts, and multi-batch tracking.",
    icon: CreditCard,
    highlights: [
      "Automated due reminders",
      "Installment breakdown",
      "Digital receipt logs",
    ],
  },
  {
    title: "Student Management",
    description:
      "Organize student profiles, batches, guardian contact details, and academic records in a centralized, searchable institute directory.",
    icon: Users,
    highlights: [
      "Multi-batch assignment",
      "Guardian contact directory",
      "Enrollment history",
    ],
  },
  {
    title: "QR-Based Attendance",
    description:
      "Generate time-limited attendance sessions with server-verified participation and location checks in upcoming releases to eliminate proxy check-ins.",
    icon: QrCode,
    highlights: [
      "Dynamic time-limited QR",
      "Proxy prevention checks",
      "Instant batch tally",
    ],
  },
  {
    title: "Parent Alerts",
    description:
      "Help notify parents about repeated absences, fee payment reminders, and important institute announcements via automated message queues.",
    icon: BellRing,
    highlights: [
      "Absence warning triggers",
      "Fee due alerts",
      "Institute-wide notices",
    ],
  },
  {
    title: "Teacher & Student Portals",
    description:
      "Provide role-appropriate access to classes, attendance rosters, timetables, and relevant study notices without administrative clutter.",
    icon: ShieldCheck,
    highlights: [
      "Educator class console",
      "Student study schedules",
      "Secure role-based access",
    ],
  },
  {
    title: "AI-Powered Insights",
    description:
      "Turn institute data into useful summaries and actionable recommendations to help owners detect attendance dips and optimize operations.",
    icon: Sparkles,
    highlights: [
      "Attendance dip signals",
      "Cashflow projections",
      "Daily operational brief",
    ],
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 text-xs font-medium">
            Core Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            Engineered for Institute Operations, Not Just Spreadsheets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Six purpose-built capabilities designed to remove daily operational
            friction for institute owners, teachers, students, and parents.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_FEATURES.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card
                key={idx}
                className="group relative flex flex-col justify-between border-border/70 bg-card transition-all duration-200 hover:-translate-y-1 hover:border-border hover:shadow-md"
              >
                <CardHeader className="space-y-3 pb-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground font-sans">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                  <div className="border-t border-border/60 pt-3">
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {feature.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="size-1 rounded-full bg-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Roadmap Clarification Banner */}
        <div className="mt-8 rounded-xl border border-border/60 bg-muted/30 p-4 text-center">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">
              Planned Platform Capabilities:
            </span>{" "}
            Modules reflect the planned architectural roadmap for upcoming
            releases of CLASS PILOT AI.
          </p>
        </div>
      </div>
    </section>
  )
}
