import { ShieldCheck } from "lucide-react"
import { requireInstituteAdminAccess } from "@/lib/authorization"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default async function TeacherStaffPage() {
  await requireInstituteAdminAccess()

  return (
    <RoutePlaceholder
      title="Staff & Role Permissions"
      description="Institute Owner & Administrator management panel for faculty roles, invitations, and permissions."
      icon={ShieldCheck}
      returnHref="/teacher"
      returnLabel="Back to Staff Overview"
      plannedFeatures={[
        "Staff member directory with role assignment (Owner, Admin, Teacher)",
        "Verified email invitation provisioning for new faculty members",
        "Permission auditing and revocation controls",
      ]}
    />
  )
}
