import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Kids Gymnastics Classes Kaua'i",
  description:
    "Get answers about enrollment, class schedules, tuition, and programs at CLC's Gymnastics Academy. Learn about trial classes, age groups, locations in Kapa'a, Līhu'e, and Po'ipū, and what to expect.",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What age groups do you offer classes for?",
      answer:
        "We offer classes for children ages walking- age 15. Currently our classes are divided into four main programs. Baby-Stars (ages walking-2) Mini-Stars (ages 3-5) All-Stars (ages 6-15) Shooting Stars (ages 6-15)",
    },
    {
      question: "Do you offer trial classes?",
      answer:
        "We offer a 50% off new student drop-in for each of our classes. We encourage families to schedule a drop-in class before enrolling. This gives your child a chance to experience our program and meet our coaches.",
    },
    {
      question: "What should my child wear to class?",
      answer:
        "Students should wear comfortable athletic clothing that allows for movement - leggings or shorts and a fitted t-shirt work well. No jewelry or loose clothing. Hair should be pulled back shoulder length or above. Gymnasts perform barefoot, so no shoes are needed.",
    },
    {
      question: "How is tuition structured?",
      answer:
        "Tuition is calculated on a 4-week cycle and is due on the 1st of each month. If a regularly scheduled class falls on a holiday or the gym is closed, tuition will be prorated accordingly. We accept multiple payment methods for your convenience.",
    },
    {
      question: "What is your cancellation and makeup policy?",
      answer:
        "We understand that life happens! If your child misses a class, please let us know as soon as possible. We offer makeup classes when space is available. For extended absences, please contact us to discuss options.",
    },
    {
      question: "How do you handle different skill levels within the same age group?",
      answer:
        "Our experienced coaches are skilled at differentiating instruction within each class. We provide progressions and modifications to ensure every child is appropriately challenged and supported, regardless of their current skill level.",
    },
    {
      question: "Is gymnastics safe for my child?",
      answer:
        "Safety is our top priority. Our coaches have extensive coaching experience and are CPR/First Aid certified. We maintain proper coach-to-student ratios, use appropriate progressions for skill development, and ensure all equipment is well-maintained. We also emphasize proper warm-ups, conditioning, and technique.",
    },
    {
      question: "Do you offer competitive gymnastics?",
      answer:
        "Currently, we focus on recreational gymnastics that builds fundamental skills, strength, and confidence. Our program emphasizes personal growth and achievement rather than competition. However, we do provide a strong foundation for students who may wish to pursue competitive gymnastics in the future.",
    },
    {
      question: "Can parents watch classes?",
      answer:
        "We have designated viewing areas at each location where parents are welcome to watch. For our youngest students, we find that some children focus better when parents are not in direct view, but this varies by child and we can discuss what works best for your family.",
    },
    {
      question: "What if my child is nervous or shy?",
      answer:
        "Many children are nervous when starting something new, and that's completely normal! Our coaches are experienced in helping shy or anxious children feel comfortable. We recommend staying positive, arriving early, and allowing your child time to warm up to the environment. Most children are excited and engaged within a few classes.",
    },
    {
      question: "Do you offer sibling discounts?",
      answer:
        "Yes! As a nonprofit organization, we strive to make our programs accessible. We offer sibling and multiple class discounts and have scholarship opportunities available for families who qualify. Please contact us to learn more about financial assistance options.",
    },
    {
      question: "What happens during class?",
      answer:
        "Each class begins with a warm-up and stretching, followed by skill development across various apparatus (floor, beam, bars, vault) appropriate to the age group. We incorporate games and activities to keep classes fun and engaging. Classes end with a cool-down and often a fun activity or challenge.",
    },
    {
      question: "How often should my child attend classes?",
      answer:
        "This depends on your child's age, goals, and schedule. Most of our students attend 1-2 times per week. Consistency is important for skill development, but we understand that every family's situation is different. Our coaches can provide recommendations based on your child's progress.",
    },
    {
      question: "Are there opportunities for my child to perform or showcase skills?",
      answer:
        "Yes! We host periodic showcases and events where students can demonstrate what they've learned for family and friends. These are non-competitive, fun events that celebrate each child's progress and build confidence.",
    },
    {
      question: "How can I support CLC's Gymnastics Academy?",
      answer:
        "As a 501(c)(3) nonprofit, we rely on community support. You can help by making a donation, spreading the word about our programs, volunteering at events, or considering corporate sponsorship opportunities. Every contribution helps us serve more children!",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <section className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-secondary via-primary to-accent">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/expert-coaches.jpeg"
              alt="Gymnastics training"
              className="h-full w-full object-cover opacity-20"
            />
          </div>
          {/* </CHANGE> */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-white animate-bounce" />
            <div className="absolute top-20 right-20 w-16 h-16 rounded-full border-4 border-white animate-pulse" />
            <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full border-4 border-white" />
            <div className="absolute bottom-10 right-1/3 w-14 h-14 rounded-full border-4 border-white animate-bounce animation-delay-400" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="mx-auto max-w-3xl text-center text-white">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/90 text-secondary rounded-full text-sm font-medium">
                <HelpCircle className="h-4 w-4" />
                Questions & Answers
              </div>
              <h1 className="text-4xl font-bold text-balance lg:text-6xl animate-fadeIn">Frequently Asked Questions</h1>
              <p className="mt-6 text-lg leading-relaxed opacity-95 animate-fadeIn animation-delay-200">
                Find answers to common questions about our programs, policies, and enrollment process.
              </p>
              <div className="mt-8 flex justify-center gap-6 text-sm animate-fadeIn animation-delay-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Enrollment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Safety</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Policies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-lg border border-border bg-card px-6 reveal"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          className="relative py-20 lg:py-32"
          style={{ backgroundImage: "url('/images/wave-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-white/40" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="mx-auto max-w-3xl">
              <Card>
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold lg:text-3xl">Still Have Questions?</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {"We're"} here to help! Reach out to us and {"we'll"} be happy to answer any questions you have
                    about our programs.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      href="mailto:clcsboard@gmail.com"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Mail className="h-4 w-4" />
                      Email Us
                    </a>
                    <a
                      href="tel:+18086352266"
                      className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <Phone className="h-4 w-4" />
                      Call Us
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
