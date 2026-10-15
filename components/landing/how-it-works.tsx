import * as React from "react"
import { Building2, FolderKanban, Activity, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const STEPS = [
  {
    step: "01",
    title: "Set up your coaching institute",
    description:
      "Configure your campus branches, academic sessions, course offerings, and customized fee structures in a simple guided setup.",
    icon: Building2,
    details: [
      "Branch & campus profile setup",
      "Customizable fee breakdown rules",
      "Role-based staff permissions",
    ],
  },
  {
    step: "02",
    title: "Organize students, batches, fees, and classes",
    description:
      "Import student rosters, create batches, schedule class timetables, and assign faculty without tedious manual data entry.",
    icon: FolderKanban,
    details: [
      "Fast student roster onboarding",
      "Batch & timetable allocation",
      "Automated fee payment schedules",
    ],
  },
  {
    step: "03",
    title: "Use insights and automated workflows",
    description:
      "Streamline daily operations with quick attendance sessions, automated parent notifications, and proactive operational summaries.",
    icon: Activity,
    details: [
      "Fast session check-in flows",
      "Multi-channel parent due alerts",
      "Executive operational signals",
    ],
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 border-t border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 text-xs font-medium">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            From Setup to Smooth Operations in Three Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            CLASS PILOT AI is designed to integrate cleanly into your existing
            coaching routine without technical friction or lengthy onboarding.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-xl border border-border/70 bg-card p-6 shadow-xs transition-all hover:border-border hover:shadow-sm"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-xs font-bold tracking-widest text-primary uppercase">
                      Step {item.step}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground font-sans">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="mt-6 border-t border-border/60 pt-4">
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="size-3.5 text-primary shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
