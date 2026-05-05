"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home } from "lucide-react"

const donationCategories = [
  {
    id: "gym_fund",
    name: "Gym Fund",
    title: "Help Us Give Our Kids a Gym of Their Own",
    subtitle: "Every Child Deserves a Place to Move, Play, and Grow",
    icon: Home,
    badge: "Greatest Need",
    description:
      "Right now, our gymnastics program operates in **borrowed spaces**, spread across **three different locations**, with access limited to just **three days per week**. While we are grateful for these opportunities, this limited schedule makes it difficult to serve more families and impossible to save enough to move into a permanent facility.\n\nThe demand from our community is there but without a gym of our own, we are limited in how many classes we can offer and how many children we can support.",
    details: [
      "Offer **consistent schedules and more classes**",
      "Welcome **more children into our program**",
      "Provide a safe, familiar space where kids can build confidence and skills",
      "Create long-term stability for our nonprofit",
    ],
    context: "We are raising funds to take the first steps toward securing a permanent space, including initial rent, deposits, and move-in costs. Commercial spaces suitable for gymnastics typically range from **$12,000–$16,000 per month**, and community support is essential to help us reach this goal.",
    impact: "Your donation helps move us closer to a gym our kids can finally call home.",
    color: "primary",
  },
  {
    id: "scholarship_fund",
    name: "Scholarship Fund",
    title: "Sponsor a Child Through Gymnastics",
    subtitle: "Because Every Child Deserves the Chance to Participate",
    icon: Heart,
    badge: null,
    description:
      "Gymnastics helps children build confidence, strength, coordination and joy, but for some families, the cost makes participation out of reach. Our scholarship fund ensures that **no child is turned away due to financial hardship**, no matter which class is right for them.\n\nYour donation helps provide access to recreational gymnastics classes in a safe, supportive and inclusive environment.",
    details: [
      "$100–$180 sponsors a child for one full 4-week class session",
      "$50–$75 helps cover part of a child's monthly tuition",
      "Any amount helps a child move, learn, and belong",
    ],
    closingText: "Whether it supports Baby Stars, Mini Stars, All Stars or Shooting Stars, every gift helps a child participate and thrive.\n\nWhen you give, you're not just covering tuition; you're giving a child confidence, connection, and a place to grow.",
    context: "Our 4-week class sessions range from $100–$180, depending on age and level. Scholarships are applied where the need is greatest.",
    impact: "Your gift gives a child confidence, connection, and a place to grow.",
    color: "accent",
  },

]

// Helper function to render text with bold formatting
function renderTextWithBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function DonatePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section
          className="relative py-20 lg:py-32"
          style={{ backgroundImage: "url('/images/wave-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-white/40" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold lg:text-6xl mb-6">Support CLC's Gymnastics Academy</h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4">
                Your donation helps us provide safe, inclusive, and affordable gymnastics programs to children across
                Kaua'i. Every contribution makes a real difference in a child's life.
              </p>
              <div className="inline-block bg-secondary/10 rounded-lg px-6 py-3 border-2 border-secondary">
                <p className="font-semibold text-secondary">
                  CLC's Gymnastics Academy is a 501(c)(3) nonprofit organization
                </p>
                <p className="text-sm text-muted-foreground mt-1">Your donation is tax-deductible</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Categories */}

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {donationCategories.map((category, index) => (
                <DonationCategoryCard key={category.id} category={category} featured={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-10 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-1">Secure Payments</h3>
                <p className="text-sm text-muted-foreground">Powered by Stripe</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Instant Receipt</h3>
                <p className="text-sm text-muted-foreground">Emailed immediately</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Tax Deductible</h3>
                <p className="text-sm text-muted-foreground">501(c)(3) nonprofit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prefer to Donate by Check */}
        <section
          className="relative py-20 lg:py-28"
          style={{ backgroundImage: "url('/images/wave-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-white/50" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 reveal">
                <h2 className="text-3xl font-bold lg:text-4xl mb-3" style={{ color: "#0d3b66" }}>
                  Prefer to Donate by Check?
                </h2>
                <p className="text-base text-foreground/70 max-w-xl mx-auto leading-relaxed">
                  We gratefully accept check donations. Simply make your check payable and mail it to the address below.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Mailing address card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg p-10 flex flex-col justify-center reveal">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Make checks payable to</p>
                  <address className="not-italic">
                    <p className="text-2xl font-bold text-foreground leading-snug mb-1">CLC&apos;s Gymnastics Academy</p>
                    <p className="text-lg text-muted-foreground">P.O. Box 162</p>
                    <p className="text-lg text-muted-foreground">Kapaa, HI 96746</p>
                  </address>
                </div>

                {/* Supporting info card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg p-10 flex flex-col justify-between reveal reveal-delay-2">
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <p className="text-base leading-relaxed text-foreground">
                        Donation receipts are provided for <span className="font-semibold">all contributions</span>.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <p className="text-base leading-relaxed text-foreground">
                        CLC&apos;s Gymnastics Academy is a <span className="font-semibold">501(c)(3) nonprofit</span> — your gift is tax-deductible to the extent allowed by law.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <p className="text-base leading-relaxed text-foreground">
                        Every dollar goes directly toward supporting Kaua&apos;i&apos;s keiki in safe, structured gymnastics programs.
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 text-lg font-bold text-primary">Mahalo for your support 💛</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function DonationCategoryCard({
  category,
  featured,
}: {
  category: (typeof donationCategories)[0]
  featured?: boolean
}) {
  const progress = category.goal ? Math.min((category.currentAmount! / category.goal) * 100, 100) : null

  return (
    <Card
      className={`overflow-hidden reveal ${featured ? "border-4 border-primary shadow-xl" : "border-2 hover:border-primary/50 transition-all card-lift"}`}
    >
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Side - Description */}
          <div className="p-8 lg:p-12 bg-gradient-to-br from-muted/30 to-background">
            <div className="flex items-start gap-3 mb-4">
              <category.icon className="h-10 w-10 text-primary flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h2 className="text-2xl lg:text-3xl font-bold">{category.title}</h2>
                  {category.badge && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {category.badge}
                    </span>
                  )}
                </div>
                <p className="text-lg font-semibold">{category.subtitle}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {category.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed">{renderTextWithBold(paragraph)}</p>
              ))}
            </div>

            {/* Progress Bar for Equipment Fund */}
            {progress !== null && category.goal && (
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Equipment Goal: ${category.goal.toLocaleString()}</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  ${category.currentAmount?.toLocaleString()} raised of ${category.goal.toLocaleString()}
                </p>
              </div>
            )}

            <div className="space-y-2 mb-6">
              {category.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm">{renderTextWithBold(detail)}</span>
                </div>
              ))}
            </div>

            {category.context && (
              <div className="mb-6">
                {category.context.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground mb-2">{renderTextWithBold(paragraph)}</p>
                ))}
              </div>
            )}

            {category.closingText && (
              <div className="mb-6 space-y-4">
                {category.closingText.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-sm leading-relaxed">{renderTextWithBold(paragraph)}</p>
                ))}
              </div>
            )}

            <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary mb-6">
              <p className="text-sm font-medium">{category.impact}</p>
            </div>

            {category.preferDonate && (
              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-3">{category.preferDonate.title}</h3>
                <div className="space-y-3 mb-4">
                  {category.preferDonate.text.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{renderTextWithBold(paragraph)}</p>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={category.preferDonate.productLink} target="_blank" rel="noopener noreferrer">
                      View Product at Norbert's
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Donation Form */}
          <div className="p-8 lg:p-12 bg-background flex items-center justify-center">
            <div className="max-w-md mx-auto w-full">
              {/* Donate Button */}
              <Button
                size="lg"
                className={`w-full text-lg font-bold py-6 ${
                  category.id === "gym_fund"
                    ? "bg-primary hover:bg-primary/90"
                    : category.id === "scholarship_fund"
                      ? "bg-accent hover:bg-accent/90"
                      : "bg-secondary hover:bg-secondary/90"
                }`}
                asChild
              >
                <a href="https://buy.stripe.com/8x25kweV84ffgZs1r5gjC00" target="_blank" rel="noopener noreferrer">
                  {category.id === "equipment_fund" ? "Donate to the Equipment Fund" : "Donate Now"}
                </a>
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Secure payment processing powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
