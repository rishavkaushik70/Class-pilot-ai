import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { ProblemSolution } from "@/components/landing/problem-solution"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { AIShowcase } from "@/components/landing/ai-showcase"
import { FAQ } from "@/components/landing/faq"
import { CTAFooter } from "@/components/landing/cta-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section (with Dashboard Preview) */}
        <Hero />

        {/* 3. Problem & Value Proposition Section */}
        <ProblemSolution />

        {/* 4. Core Features Section */}
        <Features />

        {/* 5. How It Works Section */}
        <HowItWorks />

        {/* 6. AI Insights Showcase */}
        <AIShowcase />

        {/* 7. FAQ Section */}
        <FAQ />

        {/* 8. Final CTA */}
        <CTAFooter />
      </main>
    </div>
  )
}
