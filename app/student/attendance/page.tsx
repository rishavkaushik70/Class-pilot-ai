import { CalendarCheck } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function StudentAttendancePage() {
  return (
    <RoutePlaceholder
      title="My Attendance Record"
      description="View personal session attendance logs, monthly percentages, and excused absence requests."
      icon={CalendarCheck}
      returnHref="/student"
      returnLabel="Back to Student Overview"
      plannedFeatures={[
        "Session-by-session check-in history with timestamp proofs",
        "Subject-wise attendance breakdown and eligibility criteria",
        "Leave application request submission to teachers",
      ]}
    />
  )
}
