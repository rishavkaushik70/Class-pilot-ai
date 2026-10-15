import * as React from "react"
import {
  FileText,
  Clock,
  Layers,
  BellOff,
  EyeOff,
  CheckCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const PROBLEMS_AND_SOLUTIONS = [
  {
    problem: "Manual fee tracking & forgotten due dates",
    problemDesc:
      "Paper registers, loose receipt books, and messy spreadsheets make it hard to know who has paid, who is overdue, and who needs follow-up.",
    solution: "Automated fee schedules & instant digital ledgers",
    solutionDesc:
      "Transparent batch fee structures, automated installment tracking, and polite multi-channel due reminders with zero awkward phone calls.",
    icon: FileText,
  },
  {
    problem: "Time-consuming roll-call attendance",
    problemDesc:
      "Calling out names takes 10 to 15 minutes away from every teaching session, with frequent proxy attendance and unrecorded late arrivals.",
    solution: "Rapid QR-based session check-ins",
    solutionDesc:
      "Time-limited dynamic QR sessions allow hundreds of students to check in within seconds, verified on the server without disruption.",
    icon: Clock,
  },
  {
    problem: "Scattered student & batch records",
    problemDesc:
      "Student contacts, batch allocations, academic scores, and emergency numbers are scattered across different teacher phones and paper files.",
    solution: "One centralized student profile dossier",
    solutionDesc:
      "A single searchable directory containing academic histories, batch assignments, attendance records, guardian contacts, and fee status.",
    icon: Layers,
  },
  {
    problem: "Parents left waiting for updates",
    problemDesc:
      "Parents often discover repeated student absences or falling performance weeks later during tense parent-teacher confrontations.",
    solution: "Proactive automated parent communication",
    solutionDesc:
      "Automated alerts for consecutive absences, upcoming fee dues, and urgent notices keep parents confident and informed in real time.",
    icon: BellOff,
  },
  {
    problem: "Zero visibility into institute operational health",
    problemDesc:
      "Institute owners rarely have a clear picture of month-over-month fee collections, batch occupancy, or drop-off warning signs.",
    solution: "Clear operational summaries & early signals",
    solutionDesc:
      "Real-time dashboards highlight attendance trends, cashflow projections, and at-risk students before operational issues escalate.",
    icon: EyeOff,
  },
]

export function ProblemSolution() {
  return (
    <section className="py-16 md:py-24 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 text-xs font-medium">
            Operational Reality
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            Why Managing a Coaching Institute Gets Overwhelming
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Most institute leaders start with a commitment to quality teaching,
            but soon get consumed by administrative friction, payment delays,
            and fragmented communication.
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="mt-12 space-y-4 max-w-4xl mx-auto">
          {PROBLEMS_AND_SOLUTIONS.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-xl border border-border/70 bg-card p-5 sm:p-6 transition-all hover:border-border hover:shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                  {/* The Old Pain Point */}
                  <div className="space-y-2 border-b md:border-b-0 md:border-r border-border/60 pb-4 md:pb-0 md:pr-6">
                    <div className="flex items-center gap-2 text-destructive">
                      <div className="flex size-7 items-center justify-center rounded-md bg-destructive/10">
                        <Icon className="size-4" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        The Friction
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground font-sans">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>

                  {/* The CLASS PILOT AI Solution */}
                  <div className="space-y-2 md:pl-2">
                    <div className="flex items-center gap-2 text-primary">
                      <div className="flex size-7 items-center justify-center rounded-md bg-primary/10">
                        <CheckCircle className="size-4" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        With CLASS PILOT AI
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground font-sans">
                      {item.solution}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
