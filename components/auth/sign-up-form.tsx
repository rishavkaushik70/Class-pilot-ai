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

const signUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters")
      .max(70, "Full name cannot exceed 70 characters"),
    email: z
      .string()
      .trim()
      .min(1, "Email address is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(128, "Password cannot exceed 128 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type SignUpValues = z.infer<typeof signUpSchema>

export function SignUpForm() {
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
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (values: SignUpValues) => {
    if (isSubmitting) return
    setIsSubmitting(true)
    setServerError(null)

    try {
      const response = await authClient.signUp.email({
        name: values.name,
        email: values.email,
        password: values.password,
        callbackURL: safeRedirectUrl,
      })

      if (response.error) {
        // Map error gracefully without leaking database internals or user enumeration details
        const message =
          response.error.message ||
          (response.error.status === 422 || response.error.status === 400
            ? "Could not create account with the provided details. Please verify your information."
            : "Registration could not be completed. Please try again.")
        setServerError(message)
        setIsSubmitting(false)
        return
      }

      // Successful registration: Redirect to safe destination
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
            <span className="font-semibold">Registration failed</span>
            <p>{serverError}</p>
          </div>
        </div>
      )}

      {/* Full Name Field */}
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-xs font-semibold text-foreground">
          Full name
        </Label>
        <Input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Vikram Sharma"
          disabled={isSubmitting}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="h-10 text-sm"
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-xs font-medium text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-xs font-semibold text-foreground">
          Work or personal email
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
        <Label
          htmlFor="password"
          className="text-xs font-semibold text-foreground"
        >
          Password
        </Label>
        <PasswordInput
          id="password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
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

      {/* Confirm Password Field */}
      <div className="space-y-1.5">
        <Label
          htmlFor="confirmPassword"
          className="text-xs font-semibold text-foreground"
        >
          Confirm password
        </Label>
        <PasswordInput
          id="confirmPassword"
          autoComplete="new-password"
          placeholder="Re-enter your password"
          disabled={isSubmitting}
          error={!!errors.confirmPassword}
          aria-describedby={
            errors.confirmPassword ? "confirmPassword-error" : undefined
          }
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p
            id="confirmPassword-error"
            className="text-xs font-medium text-destructive"
          >
            {errors.confirmPassword.message}
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
            <span>Creating account...</span>
          </>
        ) : (
          <span>Create Account</span>
        )}
      </button>

      {/* Navigation to Sign In */}
      <div className="pt-3 border-t border-border/60 text-center text-xs text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Sign In
        </Link>
      </div>
    </form>
  )
}
