"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function createInstituteAction(formData: FormData) {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  })

  if (!sessionData?.user) {
    redirect("/sign-in")
  }

  const name = (formData.get("name") as string)?.trim()
  if (!name || name.length < 2) {
    return { error: "Institute name must be at least 2 characters." }
  }

  const rawSlug = (formData.get("slug") as string)?.trim() || name
  const slug = rawSlug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")

  try {
    const existing = await prisma.organization.findUnique({
      where: { slug },
    })

    if (existing) {
      return {
        error:
          "An institute with this handle or slug already exists. Please choose another unique identifier.",
      }
    }

    // Create organization and attach user as verified owner
    const org = await prisma.organization.create({
      data: {
        name,
        slug,
        members: {
          create: {
            userId: sessionData.user.id,
            role: "owner",
          },
        },
      },
    })

    // Update session active organization
    await prisma.session.updateMany({
      where: { userId: sessionData.user.id },
      data: { activeOrganizationId: org.id },
    })
  } catch {
    return {
      error:
        "Database connection error. Please verify DATABASE_URL is configured and migrations are executed.",
    }
  }

  redirect("/teacher")
}

export async function setActiveInstituteAction(organizationId: string) {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  })

  if (!sessionData?.user) {
    redirect("/sign-in")
  }

  try {
    const membership = await prisma.member.findUnique({
      where: {
        organizationId_userId: {
          organizationId,
          userId: sessionData.user.id,
        },
      },
    })

    if (!membership) {
      redirect("/forbidden?reason=unauthorized_role")
    }

    await prisma.session.updateMany({
      where: { userId: sessionData.user.id },
      data: { activeOrganizationId: organizationId },
    })

    if (membership.role === "student") {
      redirect("/student")
    } else {
      redirect("/teacher")
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error
    }
    redirect("/sign-in")
  }
}
