import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollReveal } from "@/components/scroll-reveal"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "CLC's Gymnastics Academy | Kids Gymnastics Classes Kaua'i | Kapa'a, Līhu'e, Po'ipū",
  description:
    "Premier youth gymnastics academy on Kaua'i offering classes for ages 1-15. Expert certified coaches, three convenient locations (Kapa'a, Līhu'e, Po'ipū). Build strength, confidence, and skills. 501(c)(3) nonprofit. Enroll today!",
  generator: "v0.app",
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  metadataBase: new URL("https://clcgymnastics.com"),
  openGraph: {
    title: "CLC's Gymnastics Academy | Youth Gymnastics on Kaua'i",
    description:
      "Building strength, flexibility, focus, and confidence for life. Quality gymnastics classes for kids on Kaua'i in Kapa'a, Līhu'e, and Po'ipū.",
    images: [
      {
        url: "/images/CLC-Open-Graph.webp",
        width: 1200,
        height: 630,
        alt: "CLC's Gymnastics Academy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLC's Gymnastics Academy | Youth Gymnastics on Kaua'i",
    description:
      "Building strength, flexibility, focus, and confidence for life. Quality gymnastics classes for kids on Kaua'i in Kapa'a, Līhu'e, and Po'ipū.",
    images: ["/images/CLC-Open-Graph.webp"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ScrollReveal />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
