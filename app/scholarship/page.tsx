import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScholarshipApplicationForm } from "@/components/scholarship-application-form"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Scholarship Application | CLC's Gymnastics Academy",
  description: "Apply for a scholarship at CLC's Gymnastics Academy. Limited scholarships available for eligible families.",
}

export default function ScholarshipPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-8 reveal">
            <h1 className="text-4xl font-bold mb-4">CLC Gymnastics Academy</h1>
            <h2 className="text-2xl font-semibold text-primary">Scholarship Application</h2>
            <p className="mt-4 text-muted-foreground">
              Thank you for your interest in the CLC Gymnastics Academy scholarship program. Limited scholarships 
              are available to help ensure youth in our community have access to gymnastics training regardless 
              of financial circumstances.
            </p>
            <p className="mt-2 text-muted-foreground">
              Please complete the form below. Applications are reviewed based on financial need, program capacity, 
              and available funding.
            </p>
          </div>

          <div className="mb-8 reveal reveal-delay-1">
            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Application Review Process</h3>
                    <p className="text-sm">
                      Applications are reviewed on a rolling basis. Families will be notified of their status as
                      applications are received and reviewed. Approved participants will be placed based on
                      availability, with new enrollments beginning at the start of each monthly session to ensure
                      a smooth and structured transition into the program.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <ScholarshipApplicationForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
