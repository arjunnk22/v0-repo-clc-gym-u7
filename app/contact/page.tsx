import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative py-20 lg:py-32"
          style={{ backgroundImage: "url('/images/wave-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-white/40" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold lg:text-6xl mb-6" style={{ color: "#0d3b66" }}>Get in Touch</h1>
              <p className="text-lg lg:text-xl leading-relaxed" style={{ color: "#1a4d38" }}>
                Have questions about our programs? Want to learn more about enrollment? We&apos;d love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="reveal">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Reach out to us directly or fill out the contact form. We typically respond within 1-2 business
                  days.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:clcsboard@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          clcsboard@gmail.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+18086352266"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (808) 635-2266
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <h3 className="font-semibold">Our Locations</h3>
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground ml-10">
                        <div>
                          <p className="font-semibold text-foreground">Kapa'a</p>
                          <p>All Saint's Gym</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Līhu'e</p>
                          <p>United Church Parish Hall</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Po'ipū</p>
                          <p>Kaua'i Christian Fellowship</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="reveal reveal-delay-2">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <Card>
                  <CardContent className="p-6">
                    <ContactForm />
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
