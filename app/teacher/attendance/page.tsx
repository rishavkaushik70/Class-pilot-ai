import { CheckSquare } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function TeacherAttendancePage() {
  return (
    <RoutePlaceholder
      title="Attendance Management"
      description="Launch time-limited QR sessions or record fast batch attendance roll calls."
      icon={CheckSquare}
      returnHref="/teacher"
      returnLabel="Back to Staff Overview"
      plannedFeatures={[
        "Dynamic time-limited QR code generator with geo/timestamp verification",
        "Fast manual batch checklist for quick roll-calls",
        "Automated parent absence notification queue",
      ]}
    />
  )
}
