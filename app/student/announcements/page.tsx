import { BellRing } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function StudentAnnouncementsPage() {
  return (
    <RoutePlaceholder
      title="Student Announcements"
      description="Official announcements, test routine notices, and holiday schedules published by the institute."
      icon={BellRing}
      returnHref="/student"
      returnLabel="Back to Student Overview"
      plannedFeatures={[
        "Institute-wide notices and batch-specific announcements",
        "Examination timetables, syllabus release, and hall tickets",
        "Real-time notifications for room changes or schedule adjustments",
      ]}
    />
  )
}
