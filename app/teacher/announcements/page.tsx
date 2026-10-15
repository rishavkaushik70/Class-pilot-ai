import { BellRing } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function TeacherAnnouncementsPage() {
  return (
    <RoutePlaceholder
      title="Announcements & Broadcasts"
      description="Publish official institute notices, exam schedules, and holiday bulletins to students and parents."
      icon={BellRing}
      returnHref="/teacher"
      returnLabel="Back to Staff Overview"
      plannedFeatures={[
        "Targeted broadcasts by batch, subject, or entire institute",
        "Multi-channel dispatch via app notifications, SMS, and WhatsApp",
        "Read receipts and acknowledgement logging",
      ]}
    />
  )
}
