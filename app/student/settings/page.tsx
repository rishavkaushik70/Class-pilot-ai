import { Settings } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function StudentSettingsPage() {
  return (
    <RoutePlaceholder
      title="Student Account Settings"
      description="Update your contact information, notification preferences, and account security."
      icon={Settings}
      returnHref="/student"
      returnLabel="Back to Student Overview"
      plannedFeatures={[
        "Profile contact information and emergency phone numbers",
        "Parent / Guardian alert preferences (WhatsApp, SMS, Email)",
        "Security, active devices, and password management",
      ]}
    />
  )
}
