"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, AlertCircle } from "lucide-react"
import { PasswordInput } from "@/components/auth/password-input"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { buttonVariants } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

type SignInValues = z.infer<typeof signInSchema>

export function SignInForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  // Sanitize internal redirect URL to prevent open-redirect vulnerabilities
  const safeRedirectUrl =
    callbackUrl.startsWith("/") && !callbackUrl.startsWith("//")
      ? callbackUrl
      : "/dashboard"

  const [serverError, setServerError] = React.useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: SignInValues) => {
    if (isSubmitting) return
    setIsSubmitting(true)
    setServerError(null)

    try {
      const response = await authClient.signIn.email({
        email: values.email,
        password: values.password,
        callbackURL: safeRedirectUrl,
      })

      if (response.error) {
        // Map server errors gracefully without exposing sensitive internals
        const message =
          response.error.message ||
          (response.error.status === 401
            ? "Invalid email or password. Please verify your credentials."
            : "Sign in request could not be completed. Please try again.")
        setServerError(message)
        setIsSubmitting(false)
        return
      }

      // Successful sign in: Navigate to the safe destination
      router.push(safeRedirectUrl)
      router.refresh()
    } catch {
      setServerError(
        "Unable to communicate with the authentication service. Please verify your network and database configuration."
      )
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Server Error Alert */}
      {serverError && (
        <div
          role="alert"
          aria-live="polite"
          className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive dark:border-destructive/60 dark:bg-destructive/15"
        >
          <AlertCircle className="size-4 shrink-0 mt-0.5" />
          <div className="space-y-0.5 leading-relaxed">
            <span className="font-semibold">Sign in failed</span>
            <p>{serverError}</p>
          </div>
        </div>
      )}

      {/* Email Field */}
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-xs font-semibold text-foreground">
          Email address
        </Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="admin@coachinginstitute.com"
          disabled={isSubmitting}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="h-10 text-sm"
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-xs font-medium text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label
            htmlFor="password"
            className="text-xs font-semibold text-foreground"
          >
            Password
          </Label>
        </div>
        <PasswordInput
          id="password"
          autoComplete="current-password"
          placeholder="••••••••••••"
          disabled={isSubmitting}
          error={!!errors.password}
          aria-describedby={errors.password ? "password-error" : undefined}
          {...register("password")}
        />
        {errors.password && (
          <p
            id="password-error"
            className="text-xs font-medium text-destructive"
          >
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={buttonVariants({
          className: "w-full h-10 mt-2 font-semibold justify-center gap-2",
        })}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Signing in...</span>
          </>
        ) : (
          <span>Sign In</span>
        )}
      </button>

      {/* Navigation to Sign Up */}
      <div className="pt-3 border-t border-border/60 text-center text-xs text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Create an account
        </Link>
      </div>
    </form>
  )
}
