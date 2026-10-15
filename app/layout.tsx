import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const geistMonoHeading = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#161b22" },
  ],
};

export const metadata: Metadata = {
  title: "CLASS PILOT AI — Run Your Coaching Institute. Not the Chaos.",
  description:
    "One intelligent platform to manage students, automate fee tracking, simplify attendance, keep parents informed, and gain actionable insights into your coaching business.",
  keywords: [
    "coaching institute management",
    "coaching management software",
    "tuition management",
    "student batch attendance",
    "fee reminder automation",
    "parent communication portal",
  ],
  authors: [{ name: "CLASS PILOT AI" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        outfit.variable,
        geistMonoHeading.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
