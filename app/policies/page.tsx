import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Clock, ShieldCheck, UserCheck, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Enrollment Policies & Procedures | CLC's Gymnastics Academy Kaua'i",
  description:
    "Review our enrollment policies, safety procedures, class schedules, tuition information, and important guidelines for CLC's Gymnastics Academy on Kaua'i. Clear, family-friendly policies for a positive experience.",
}

export default function PoliciesPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/strong-foundations.jpeg"
              alt="Children in gymnastics class"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="mx-auto max-w-3xl text-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/90 text-accent-foreground rounded-full text-sm font-medium">
                Important Information
              </div>
              <h1 className="text-4xl font-bold text-balance lg:text-6xl animate-fadeIn">Policies & Procedures</h1>
              <p className="mt-6 text-lg leading-relaxed opacity-95 animate-fadeIn animation-delay-200">
                Quick reference guide for enrollments, class policies, and important procedures at CLC's Gymnastics
                Academy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Enrollments & Drop-Ins */}
                <Card className="border-2 border-primary/20 md:col-span-2">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Enrollments & Drop-Ins</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Annual Fee</h3>
                      <p className="text-muted-foreground">$60 nonrefundable, due yearly.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Tuition</h3>
                      <p className="text-muted-foreground">
                        4-week billing cycle (teams monthly). Due on the 1st; $25 late fee after 5th.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Payments</h3>
                      <p className="text-muted-foreground">
                        Autopay required unless paid early by cash, check, or card.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Missed Classes</h3>
                      <p className="text-muted-foreground">No refunds or prorating; make-ups allowed.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Withdrawal</h3>
                      <p className="text-muted-foreground">Written notice before 1st to avoid next cycle charges.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Drop-Ins</h3>
                      <p className="text-muted-foreground">Available for Open classes only.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Attire */}
                <Card className="border-2 border-secondary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-secondary/10 p-3">
                        <UserCheck className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle>Attire</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p className="text-muted-foreground">
                      <strong>Girls:</strong> Leotard or athletic shorts
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Boys:</strong> Tucked shirt & shorts (no pockets)
                    </p>
                    <p className="text-muted-foreground">Hair tied up; no jewelry</p>
                    <p className="text-muted-foreground">Gymnasts perform barefoot</p>
                  </CardContent>
                </Card>

                {/* Arrival & Pickup */}
                <Card className="border-2 border-accent/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-accent/10 p-3">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle>Arrival & Pickup</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Arrive ≤5 minutes before class starts.</p>
                  </CardContent>
                </Card>

                {/* Behavior */}
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Behavior</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground">Follow safety rules</p>
                    <p className="text-muted-foreground">No parental coaching</p>
                    <p className="text-muted-foreground">Zero tolerance for bullying</p>
                  </CardContent>
                </Card>

                {/* Food & Drink */}
                <Card className="border-2 border-secondary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-secondary/10 p-3">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle>Food & Drink</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Water only in sealed container.</p>
                  </CardContent>
                </Card>

                {/* Supervision */}
                <Card className="border-2 border-accent/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-accent/10 p-3">
                        <AlertTriangle className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle>Supervision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Use equipment only with coach(es).</p>
                  </CardContent>
                </Card>

                {/* Closures */}
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Closures</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Gym may close for holidays/events/session breaks. See Session Intervals on the Programs page.
                    </p>
                  </CardContent>
                </Card>

                {/* Medical */}
                <Card className="border-2 border-secondary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-secondary/10 p-3">
                        <ShieldCheck className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle>Medical</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">No medication stored or given by staff.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
