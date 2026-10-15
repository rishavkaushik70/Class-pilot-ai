import { BookOpen } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function StudentHomeworkPage() {
  return (
    <RoutePlaceholder
      title="Homework & Assignments"
      description="Track assigned practice problem sheets, submission deadlines, and educator feedback."
      icon={BookOpen}
      returnHref="/student"
      returnLabel="Back to Student Overview"
      plannedFeatures={[
        "Active homework assignments with downloadable problem sheets",
        "Digital submission upload and timestamp verification",
        "Teacher feedback, scoring, and correction reviews",
      ]}
    />
  )
}
