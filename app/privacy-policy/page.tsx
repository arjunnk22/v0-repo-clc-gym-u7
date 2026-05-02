import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | CLC's Gymnastics Academy",
  description: "Privacy Policy for CLC's Gymnastics Academy. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
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
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">
                  CLC's Gymnastics Academy ("we," "us," or "our") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website, enroll in our programs, or submit scholarship applications.
                </p>
                <p>
                  As a 501(c)(3) nonprofit organization, we are committed to maintaining the trust and confidence 
                  of all visitors, participants, and families we serve. This policy applies to all information 
                  collected through our website, enrollment processes, and scholarship applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2.1 Personal Information</h3>
                  <p className="mb-4">We may collect the following types of personal information:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Student information (name, date of birth, gender, school attended)</li>
                    <li>Household information (number of people in household, area of residence)</li>
                    <li>Emergency contact information</li>
                    <li>Program enrollment and participation history</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">2.2 Financial Information (Scholarship Applications)</h3>
                  <p className="mb-4">For scholarship applications, we collect sensitive financial information including:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Household income documentation (tax returns, pay stubs, benefit letters)</li>
                    <li>Financial need explanations</li>
                    <li>Family contribution preferences</li>
                  </ul>
                  <p className="mt-2 text-sm font-semibold">
                    Financial documents are used solely for scholarship eligibility determination, are treated 
                    as highly confidential, and are accessed only by authorized scholarship review personnel. 
                    We do not share financial information with third parties except as required by law or with 
                    your explicit consent.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">2.3 Technical Information</h3>
                  <p className="mb-4">We automatically collect certain information when you visit our website:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website addresses</li>
                    <li>Device information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">2.4 Uploaded Documents</h3>
                  <p>
                    When submitting scholarship applications, you may upload documents such as income verification. 
                    These files are stored securely and accessed only by authorized personnel. Access to uploaded 
                    documents is restricted based on role and limited strictly to personnel with a legitimate need 
                    to review such information.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Process program enrollments and registrations</li>
                  <li>Review and process scholarship applications</li>
                  <li>Communicate with families about programs, schedules, and updates</li>
                  <li>Maintain accurate student and family records</li>
                  <li>Ensure student safety and emergency preparedness</li>
                  <li>Process donations and maintain donor records</li>
                  <li>Improve our programs and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Send newsletters and program updates (with consent)</li>
                </ul>
                <p className="mt-4">
                  We process personal information based on your consent, our obligation to provide program services, 
                  compliance with legal requirements, and our legitimate interest in operating and improving our 
                  programs safely and effectively.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Encrypted storage for sensitive data at rest</li>
                  <li>Secure file storage with access controls</li>
                  <li>Limited access to personal information (authorized personnel only)</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on data privacy and security</li>
                </ul>
                <p className="mt-4 font-semibold">
                  Scholarship application documents are stored in secure, encrypted databases with restricted 
                  access limited to scholarship review committee members only.
                </p>
                <p className="mt-4">
                  In the event of a data breach or security incident that may affect your personal information, 
                  we will take prompt steps to investigate, contain, and mitigate the issue, and will notify 
                  affected individuals as required by applicable law.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website, processing payments, managing communications, or securely storing data. These providers are contractually obligated to protect your information and use it only for authorized purposes.</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Safety:</strong> To protect the rights, property, or safety of CLC's Gymnastics Academy, our students, or others</li>
                  <li><strong>With Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
                <p className="mt-4">
                  Financial documents submitted with scholarship applications are NEVER shared with third parties 
                  and are reviewed only by authorized scholarship committee members.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">We retain personal information for different periods depending on the purpose:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Active Student Records:</strong> Maintained during program participation and for 3 years after last enrollment</li>
                  <li><strong>Scholarship Applications:</strong> Retained for 30 days after application decision</li>
                  <li><strong>Financial Documents:</strong> Securely deleted 30 days after application decision</li>
                  <li><strong>Donation Records:</strong> Maintained for 7 years for tax and accounting purposes</li>
                  <li><strong>Website Analytics:</strong> Aggregated data retained indefinitely; individual user data for 26 months</li>
                </ul>
                <p className="mt-4">
                  After the applicable retention period, personal information is securely deleted, destroyed, or 
                  anonymized in accordance with industry standards and legal requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to applicable legal, regulatory, or operational retention requirements</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a structured, commonly used format</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:clcsboard@gmail.com" className="text-primary hover:underline">
                    clcsboard@gmail.com
                  </a>
                  {" "}or call (808) 635-2266.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">
                  Our programs serve children ages 1–15. We follow best practices aligned with the Children's 
                  Online Privacy Protection Act (COPPA) and applicable student privacy protections.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>We collect personal information about children only with verifiable parental consent</li>
                  <li>Parents/guardians may review, update, or delete their child's information at any time</li>
                  <li>We do not knowingly collect more information than reasonably necessary for program participation</li>
                  <li>Children's information is never sold or shared with third parties for marketing purposes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your website experience. 
                  Cookies are small data files stored on your device.
                </p>
                <p className="mt-2"><strong>We use cookies for:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Session management</li>
                  <li>Remembering your preferences</li>
                  <li>Analytics to understand how visitors use our site</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. Note that disabling cookies may affect 
                  website functionality.
                </p>
                <p className="mt-2">
                  Our website does not currently respond to "Do Not Track" signals from web browsers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Our website may contain links to third-party websites (e.g., enrollment portal, payment processors). 
                  We are not responsible for the privacy practices, security, or content of these external sites. 
                  We encourage you to review their privacy policies before providing any personal information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal 
                  requirements. We will notify you of significant changes by:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                  <li>Sending email notifications to registered families (for material changes)</li>
                </ul>
                <p className="mt-4">
                  Your continued use of our services after changes take effect constitutes your acknowledgment 
                  and acceptance of the updated Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                  please contact us:
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
                  <p><strong>Mailing Address:</strong> Available upon request</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  We will respond to your inquiry within 30 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Consent</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  By using our website, enrolling in programs, or submitting applications, you acknowledge that 
                  you have read, understood, and agree to this Privacy Policy and the collection, use, and 
                  disclosure of your information as described herein.
                </p>
                <p className="mt-4">
                  For scholarship applications involving sensitive financial information, you will be asked to 
                  provide explicit consent before submission.
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
