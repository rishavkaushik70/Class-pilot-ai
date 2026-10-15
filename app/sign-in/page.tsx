import type { Metadata } from "next"
import { Suspense } from "react"
import { AuthLayout } from "@/components/auth/auth-layout"
import { SignInForm } from "@/components/auth/sign-in-form"

export const metadata: Metadata = {
  title: "Sign In — CLASS PILOT AI",
  description: "Sign in to continue to your coaching workspace.",
}

export default function SignInPage() {
  return (
    <AuthLayout
      heading="Welcome back"
      subheading="Sign in to continue to your coaching workspace."
    >
      <Suspense
        fallback={
          <div className="h-56 flex items-center justify-center text-xs text-muted-foreground">
            Loading sign in...
          </div>
        }
      >
        <SignInForm />
      </Suspense>
    </AuthLayout>
  )
}
