import { CalendarDays } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function TeacherTimetablePage() {
  return (
    <RoutePlaceholder
      title="Institute Master Timetable"
      description="Weekly schedule grid, classroom utilization, and educator lecture allocations."
      icon={CalendarDays}
      returnHref="/teacher"
      returnLabel="Back to Staff Overview"
      plannedFeatures={[
        "Interactive weekly routine grid across all batches and rooms",
        "Faculty substitution workflows and conflict detection",
        "Automated timetable sync for students and parents",
      ]}
    />
  )
}
