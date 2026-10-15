import { CreditCard } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function TeacherFeesPage() {
  return (
    <RoutePlaceholder
      title="Fee Management & Ledgers"
      description="Track student fee schedules, payment milestones, outstanding balances, and digital receipts."
      icon={CreditCard}
      returnHref="/teacher"
      returnLabel="Back to Staff Overview"
      plannedFeatures={[
        "Custom fee structure builder with multiple installment rules",
        "Payment reconciliation ledger and digital receipt generation",
        "Automated WhatsApp & SMS reminder queues for upcoming and overdue fees",
      ]}
    />
  )
}
