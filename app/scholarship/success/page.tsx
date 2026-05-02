import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Application Submitted | CLC's Gymnastics Academy",
  description: "Your scholarship application has been submitted successfully.",
}

export default function ScholarshipSuccessPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-8">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-xl text-muted-foreground">
              Mahalo for your interest in CLC Gymnastics Academy and for supporting youth participation in athletics.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Application Review</h3>
                    <p className="text-sm text-muted-foreground">
                      Our scholarship committee will carefully review your application along with all other submissions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Notification</h3>
                    <p className="text-sm text-muted-foreground">
                      You will receive an email notification once scholarship decisions have been made. 
                      Please check your spam folder if you don't see it in your inbox.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Next Steps</h3>
                    <p className="text-sm text-muted-foreground">
                      If your application is approved, we'll provide information about enrollment, 
                      class schedules, and getting started with the program.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Important Information</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Scholarships are limited</strong> and awarded based on financial need, 
                    available funding, and program capacity.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Review time may vary</strong> depending on the number of applications received.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Financial documents</strong> will be securely stored and deleted 30 days 
                    after the application decision.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">Confirmation Email Sent</h3>
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to the email address you provided. 
                If you have any questions about your application, please contact us at{" "}
                <a href="mailto:clcsboard@gmail.com" className="text-primary hover:underline font-semibold">
                  clcsboard@gmail.com
                </a>.
              </p>
            </div>

            <div className="pt-4 flex gap-4 justify-center">
              <Button asChild>
                <Link href="/">Return to Homepage</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Mahalo for your interest in CLC Gymnastics Academy and for supporting youth participation in athletics!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
