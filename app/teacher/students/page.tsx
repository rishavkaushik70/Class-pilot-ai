import { Users } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function TeacherStudentsPage() {
  return (
    <RoutePlaceholder
      title="Student Directory"
      description="Manage enrolled students, academic profiles, guardian contacts, and batch allocations."
      icon={Users}
      returnHref="/teacher"
      returnLabel="Back to Staff Overview"
      plannedFeatures={[
        "Student directory with multi-filter search",
        "Guardian contact records and emergency alerts",
        "Individual academic history and batch transfer tools",
      ]}
    />
  )
}
