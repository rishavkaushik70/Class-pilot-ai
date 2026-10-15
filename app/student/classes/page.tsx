import { GraduationCap } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function StudentClassesPage() {
  return (
    <RoutePlaceholder
      title="My Classes & Timetable"
      description="View your enrolled batch schedule, upcoming lecture topics, and classroom allocations."
      icon={GraduationCap}
      returnHref="/student"
      returnLabel="Back to Student Overview"
      plannedFeatures={[
        "Personalized weekly timetable view with live class status",
        "Assigned faculty details and course syllabus tracker",
        "Upcoming session topics and lecture notes access",
      ]}
    />
  )
}
