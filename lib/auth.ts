import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { organization } from "better-auth/plugins/organization"
import { defaultAc, defaultRoles } from "better-auth/plugins/organization/access"
import { prisma } from "@/lib/prisma"

// Define custom roles for CLASS PILOT AI Coaching Institute SaaS
const teacherRole = defaultAc.newRole({
  // Teachers have access to classes, timetable, attendance, and student listings
})

const studentRole = defaultAc.newRole({
  // Students have personal view permissions for their own timetable and records
})

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL:
    process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    "http://localhost:3000",
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "class-pilot-ai-default-auth-secret-key-at-least-32-chars",
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  plugins: [
    organization({
      roles: {
        owner: defaultRoles.owner,
        admin: defaultRoles.admin,
        teacher: teacherRole,
        student: studentRole,
      },
    }),
  ],
})
