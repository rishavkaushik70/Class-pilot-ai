"use client"

import * as React from "react"
import { Sparkles, ArrowRight, Loader2, AlertCircle } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { buttonVariants } from "@/components/ui/button"
import { createInstituteAction } from "@/app/actions/institute-actions"

export function OnboardingForm() {
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const formData = new FormData(e.currentTarget)
    try {
      const res = await createInstituteAction(formData)
      if (res?.error) {
        setError(res.error)
        setLoading(false)
      }
    } catch {
      // In Next.js, server redirect throws a NEXT_REDIRECT signal which router handles
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive"
        >
          <AlertCircle className="size-4 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-xs font-semibold">
          Institute Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          disabled={loading}
          placeholder="e.g. Apex Science &amp; IIT Academy"
          className="h-10 text-sm"
        />
        <p className="text-[11px] text-muted-foreground">
          The official name of your academy or tuition centre.
        </p>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="slug" className="text-xs font-semibold">
          Institute URL Identifier (Slug)
        </Label>
        <Input
          id="slug"
          name="slug"
          type="text"
          disabled={loading}
          placeholder="e.g. apex-academy"
          className="h-10 text-sm"
        />
        <p className="text-[11px] text-muted-foreground">
          Used for unique multi-tenant identification (letters, numbers, hyphens).
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={buttonVariants({
          className: "w-full h-10 font-semibold justify-center gap-2 mt-2",
        })}
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Creating Institute...</span>
          </>
        ) : (
          <>
            <Sparkles className="size-4" />
            <span>Create Institute &amp; Enter Portal</span>
            <ArrowRight className="size-4" />
          </>
        )}
      </button>
    </form>
  )
}
