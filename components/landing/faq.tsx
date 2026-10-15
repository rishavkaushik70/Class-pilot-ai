"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const FAQS = [
  {
    id: "item-1",
    question: "What is CLASS PILOT AI?",
    answer:
      "CLASS PILOT AI is an intelligent coaching institute management SaaS designed to replace administrative chaos with streamlined operations. It centralizes student dossiers, batch schedules, fee tracking, attendance workflows, parent communication, and actionable operational insights in one modern, accessible platform.",
  },
  {
    id: "item-2",
    question: "Can multiple coaching institutes use the platform?",
    answer:
      "Yes. CLASS PILOT AI is architected with multi-tenant isolation. Whether you operate a single-room tuition centre, a specialized entrance exam academy, or a multi-branch regional institute with hundreds of batches, your institute data, staff permissions, and student records remain strictly private and dedicated.",
  },
  {
    id: "item-3",
    question: "How will QR attendance work?",
    answer:
      "In upcoming releases, instructors or institute display kiosks can initiate a time-limited dynamic QR attendance session at the start of a class. Students scan the code on their mobile devices, and the server validates the session timestamp and location context to ensure rapid, proxy-free attendance records in seconds.",
  },
  {
    id: "item-4",
    question: "Can students and teachers have separate accounts?",
    answer:
      "Yes. Role-based access control is a core foundation of CLASS PILOT AI. Institute administrators have comprehensive management oversight; faculty members access their assigned classes, rosters, and schedules; and students (along with their parents) access their individual attendance histories, test milestones, and fee invoices.",
  },
  {
    id: "item-5",
    question: "How will fee reminders and parent notifications work?",
    answer:
      "Institute administrators can configure automated reminder rules based on upcoming due dates, grace periods, or consecutive unexcused absences. The system prepares and dispatches polite notifications via automated WhatsApp, SMS, or email queues, ensuring parents stay informed without embarrassing manual calls.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <Badge variant="outline" className="mb-4 text-xs font-medium">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-sans">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Straightforward answers to common questions about CLASS PILOT AI,
            its architecture, and planned capabilities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 rounded-xl border border-border/80 bg-card p-6 shadow-xs">
          <Accordion defaultValue={["item-1"]} className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="py-2">
                <AccordionTrigger className="text-left font-sans text-base font-medium hover:no-underline hover:text-primary transition-colors py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1 pb-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          Have more questions regarding upcoming modules or architecture?{" "}
          <span className="font-medium text-foreground">
            More roadmap updates and documentation will be released as development progresses.
          </span>
        </div>
      </div>
    </section>
  )
}
