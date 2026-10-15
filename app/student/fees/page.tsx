import { CreditCard } from "lucide-react"
import { RoutePlaceholder } from "@/components/portal/route-placeholder"

export default function StudentFeesPage() {
  return (
    <RoutePlaceholder
      title="My Fee Account & Receipts"
      description="View scheduled fee installments, paid receipts, and upcoming payment due dates."
      icon={CreditCard}
      returnHref="/student"
      returnLabel="Back to Student Overview"
      plannedFeatures={[
        "Personal fee payment ledger with official digital invoice download",
        "Upcoming installment due dates and payment status tags",
        "Online payment verification and guardian billing records",
      ]}
    />
  )
}
