import type { Metadata } from "next"
import { Suspense } from "react"
import { AuthLayout } from "@/components/auth/auth-layout"
import { SignUpForm } from "@/components/auth/sign-up-form"

export const metadata: Metadata = {
  title: "Create Account — CLASS PILOT AI",
  description: "Get started with smarter coaching management.",
}

export default function SignUpPage() {
  return (
    <AuthLayout
      heading="Create your account"
      subheading="Get started with smarter coaching management."
    >
      <Suspense
        fallback={
          <div className="h-64 flex items-center justify-center text-xs text-muted-foreground">
            Loading registration...
          </div>
        }
      >
        <SignUpForm />
      </Suspense>
    </AuthLayout>
  )
}
