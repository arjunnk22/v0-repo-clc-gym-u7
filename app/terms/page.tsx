import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms & Conditions | CLC's Gymnastics Academy",
  description: "Terms and Conditions for CLC's Gymnastics Academy programs and scholarship applications.",
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Last Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">March 20, 2026</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  By accessing and using the CLC's Gymnastics Academy website, enrolling in our programs, 
                  or submitting scholarship applications, you agree to be bound by these Terms and Conditions 
                  and our Privacy Policy.
                </p>
                <p className="mt-2">
                  If you do not agree to these terms, please do not use our services or submit applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. About CLC's Gymnastics Academy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  CLC's Gymnastics Academy is a 501(c)(3) nonprofit organization dedicated to providing 
                  quality gymnastics programs to youth on Kaua'i. Our mission is to build strength, 
                  coordination, flexibility, confidence, and a lifelong love of movement in a safe, 
                  inclusive, and affordable environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Program Enrollment</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.1 Enrollment Requirements</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>All enrollments must be completed by a parent or legal guardian for participants under 18</li>
                    <li>Accurate and complete information must be provided during registration</li>
                    <li>Required waivers and consent forms must be signed before participation</li>
                    <li>Emergency contact information must be kept current</li>
                    <li>CLC reserves the right to refuse or cancel enrollment at its discretion.</li>
                  </ul>
                  
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.2 Tuition and Payment</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Tuition is calculated on a 4-week cycle and is due on the 1st of each month</li>
                    <li>Tuition will be prorated if a regularly scheduled class falls on a holiday or if the gym is closed</li>
                    <li>Payment plans may be available upon request</li>
                    <li>Scholarships and financial assistance are available for eligible families</li>
                    <li>CLC reserves the right to suspend or deny participation for accounts that are past due.</li>
                  </ul>
                  
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.3 Class Attendance</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Regular attendance is encouraged for skill development and safety</li>
                    <li>Makeup classes may be available for excused absences (subject to availability)</li>
                    <li>Students must arrive on time and be picked up promptly after class</li>
                    <li>Students should wear appropriate athletic clothing and have hair tied back</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Scholarship Program Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">4.1 Scholarship Eligibility</h3>
                  <p className="mb-4">
                    Scholarships are available to help ensure youth in our community have access to gymnastics 
                    training regardless of financial circumstances. Limited scholarships are awarded based on:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Demonstrated financial need</li>
                    <li>Program capacity</li>
                    <li>Available funding</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">4.2 Application Process</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>All information provided must be accurate and truthful</li>
                    <li>Income verification documentation is required (tax returns, pay stubs, benefit letters, etc.)</li>
                    <li>Applications are reviewed confidentially by the scholarship committee</li>
                    <li>Decisions are made based on financial need, program capacity, and available funding</li>
                    <li>Families will be notified of decisions once the review is complete</li>
                  </ul>
                  <p className="mt-2 font-semibold">
                    Submission of false or misleading information may result in denial or revocation of scholarship assistance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">4.3 Scholarship Awards</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Scholarships may be full or partial depending on available funding</li>
                    <li>Awards may apply only to a specific session and may require reapplication for future sessions</li>
                    <li>Scholarship recipients are expected to attend classes regularly and follow program guidelines</li>
                    <li>CLC's Gymnastics Academy reserves the right to revoke scholarships if program guidelines are not followed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">4.4 Family Contribution</h3>
                  <p>
                    Some scholarships may require a family contribution toward tuition. The contribution amount 
                    will be determined based on financial circumstances and indicated in the scholarship award notification.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">4.5 Financial Information Confidentiality</h3>
                  <p className="font-semibold">
                    All financial documents and information submitted with scholarship applications remain strictly 
                    confidential and are used solely for scholarship eligibility determination. Financial information 
                    is never shared with third parties and is securely deleted after the retention period.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Non-Discrimination Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  CLC's Gymnastics Academy does not discriminate on the basis of race, color, national origin, 
                  sex, gender identity, sexual orientation, disability, age, religion, or any other protected 
                  characteristic in our programs, activities, or operations.
                </p>
                <p className="mt-2">
                  We are committed to providing equal access to our programs and scholarship opportunities for 
                  all eligible youth in our community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Safety and Code of Conduct</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">6.1 Student Conduct</h3>
                  <p className="mb-4">All participants are expected to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Treat coaches, staff, and fellow students with respect</li>
                    <li>Follow safety instructions and program guidelines</li>
                    <li>Use equipment properly and safely</li>
                    <li>Notify coaches immediately of any injuries or safety concerns</li>
                    <li>Refrain from bullying, harassment, or disruptive behavior</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">6.2 Disciplinary Action</h3>
                  <p>
                    Violation of the code of conduct may result in warnings, temporary suspension, or permanent 
                    removal from the program without refund. Severe violations (including violence, harassment, 
                    or behavior endangering others) may result in immediate removal.
                  </p>
                  <p className="mt-2 font-semibold">
                    CLC reserves the right to remove a participant immediately if safety is at risk.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">6.3 Medical and Safety</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Parents must disclose any medical conditions, allergies, or special needs during enrollment</li>
                    <li>Participants should be in good health to participate in physical activities</li>
                    <li>In case of injury or medical emergency, staff will provide first aid and contact emergency services and parents/guardians immediately</li>
                    <li>Signed waivers and medical consent forms are required for all participants</li>
                    <li>By enrolling, you authorize CLC staff to obtain emergency medical care for your child if you cannot be reached.</li>
                  </ul>
                  
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Liability and Assumption of Risk</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Participation in gymnastics involves inherent and significant risks of physical injury, including 
                  but not limited to falls from equipment, collisions, improper landings, physical exertion, and use 
                  of gymnastics apparatus. Injuries may include sprains, strains, fractures, head injuries, or more 
                  serious harm.
                </p>
                <p className="mt-2">
                  By enrolling in our programs, you knowingly and voluntarily assume all risks, both known and unknown, 
                  associated with participation.
                </p>
                <p className="mt-2">
                  To the fullest extent permitted by law, CLC's Gymnastics Academy, its directors, officers, coaches, 
                  staff, and volunteers shall not be liable for any injury, loss, or damage arising from participation 
                  in programs or use of facilities, including claims based on negligence, except in cases of gross 
                  negligence or willful misconduct.
                </p>
                <p className="mt-2 font-semibold">
                  Signed liability waivers are required for all participants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Photography and Media</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  CLC's Gymnastics Academy may photograph or video record classes, events, and activities for 
                  promotional, educational, and archival purposes. Images may be used on our website, social media, 
                  or marketing materials.
                </p>
                <p className="mt-2 font-semibold">
                  Participation constitutes consent unless a written opt-out is submitted.
                </p>
                <p className="mt-2">
                  If you do not wish for your child to be photographed or featured in promotional materials, 
                  please notify us in writing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Cancellations and Refunds</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tuition is non-refundable once the session begins</li>
                  <li>Prorated refunds may be issued in cases of long-term injury or relocation (with documentation)</li>
                  <li>CLC's Gymnastics Academy reserves the right to cancel classes due to low enrollment, facility issues, or emergencies</li>
                  <li>If we cancel a class, families will receive prorated refunds or credits toward future sessions</li>
                  <li>Refund decisions are made at the sole discretion of CLC's Gymnastics Academy.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Force Majeure (Events Beyond Our Control)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  CLC's Gymnastics Academy shall not be held responsible for delays, cancellations, or interruptions 
                  in programs or services due to events beyond our reasonable control. These events may include, but 
                  are not limited to, natural disasters, severe weather, facility damage, public health emergencies, 
                  government orders, or other unforeseen circumstances.
                </p>
                <p className="mt-2">
                  In such cases, CLC reserves the right to modify schedules, suspend operations, or provide credits 
                  or rescheduling options at its discretion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  All content on the CLC's Gymnastics Academy website, including text, graphics, logos, images, 
                  and software, is the property of CLC's Gymnastics Academy or its content suppliers and is 
                  protected by copyright and trademark laws.
                </p>
                <p className="mt-2">
                  You may not reproduce, distribute, modify, or create derivative works without express written permission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Website Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">You agree to use our website only for lawful purposes and in a way that does not:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Infringe on the rights of others</li>
                  <li>Restrict or inhibit anyone else's use of the website</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Transmit harmful code, viruses, or malicious software</li>
                  <li>Engage in data mining, scraping, or automated data collection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  CLC's Gymnastics Academy reserves the right to modify these Terms and Conditions at any time. 
                  Changes will be posted on our website with an updated "Last Updated" date.
                </p>
                <p className="mt-2">
                  Continued use of our services after changes are posted constitutes acceptance of the modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>14. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  These Terms and Conditions are governed by and construed in accordance with the laws of the 
                  State of Hawai'i, without regard to its conflict of law provisions.
                </p>
                <p className="mt-2">
                  Any disputes arising from these terms or your use of our services shall be resolved in the 
                  courts of Kaua'i County, Hawai'i.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>15. Severability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If any provision of these Terms and Conditions is found to be invalid or unenforceable, 
                  the remaining provisions shall continue in full force and effect.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>17. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If you have questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong>CLC's Gymnastics Academy</strong></p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:clcsboard@gmail.com" className="text-primary hover:underline">
                      clcsboard@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+18086352266" className="text-primary hover:underline">
                      (808) 635-2266
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>17. Acknowledgment</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  By using our website, enrolling in programs, or submitting applications, you acknowledge that 
                  you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
                </p>
                <p className="mt-4 text-center font-semibold">
                  Thank you for being part of the CLC's Gymnastics Academy community!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
