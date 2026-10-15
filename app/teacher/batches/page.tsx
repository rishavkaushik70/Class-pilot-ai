import { FolderKanban } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function TeacherBatchesPage() {
  return (
    <RoutePlaceholder
      title="Batches & Classrooms"
      description="Configure academic batches, student capacity limits, and instructor assignments."
      icon={FolderKanban}
      returnHref="/teacher"
      returnLabel="Back to Staff Overview"
      plannedFeatures={[
        "Batch creation, room allocation, and capacity thresholds",
        "Assigned faculty mapping and subject coverage",
        "Student roster bulk allocation and migration",
      ]}
    />
  )
}
