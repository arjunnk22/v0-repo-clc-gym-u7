import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Expert Gymnastics Coaches on Kaua'i | CPR Certified & Experienced",
  description:
    "Meet our certified gymnastics coaches with 30+ years of experience. CPR/First Aid certified professionals dedicated to building confidence in Kaua'i's youth through safe, supportive gymnastics training.",
}

export default function CoachesPage() {
  const coaches = [
    {
      name: "Kevin Tiess",
      title: "Head Coach",
      experience: "30+ years",
      image: "/coach-kevin-tiess.png",
      bio: "Kevin brings over 30 years of gymnastics coaching experience. Born into gymnastics, he grew up in a family of gymnasts and started flipping before he could walk. He began coaching at just 18 years old at Congress during the Olympic Trials in Boston.",
      highlights: [
        "Certified team coach",
        "Worked alongside Olympic and top-tier college coaches",
        "Developed state and regional championship teams",
        "Helped athletes earn full Ivy League scholarships",
        "Mission: Create a positive, growth-oriented environment and establish a new gymnastics legacy on Kaua'i",
      ],
    },
    {
      name: "Christina Rytting",
      title: "Assistant Coach",
      experience: "Started 2024",
      image: "/coach-christina-rytting.png",
      bio: "Christina was inspired to coach after seeing her own child struggle with gymnastics and then make remarkable progress. She began coaching in early 2024 and trained under Coach Kevin Tiess, mastering skills, techniques, and form in detail.",
      highlights: [
        "Her child is now one of Kaua'i's top gymnasts",
        "Dedicated to helping young athletes unlock their potential and build confidence",
        "Philosophy: 'Never let anyone stop you from your dreams. If you want it badly enough and have the will and desire, extraordinary people will help you along the way!'",
      ],
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <section className="relative py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/building-confident.jpeg"
              alt="Coaches teaching gymnastics"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/85" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="mx-auto max-w-3xl text-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/90 text-accent-foreground rounded-full text-sm font-medium">
                Expert Instructors
              </div>
              <h1 className="text-4xl font-bold text-balance lg:text-6xl">Meet Our Coaches</h1>
              <p className="mt-6 text-lg leading-relaxed opacity-95 animation-delay-200">
                Our experienced, certified coaches are passionate about helping every child discover their potential
                through gymnastics.
              </p>
              <div className="mt-8 flex justify-center gap-4 animation-delay-400">
                <div className="text-center">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="w-px bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Certified</div>
                </div>
                <div className="w-px bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold">2</div>
                  <div className="text-sm opacity-90">Dedicated Coaches</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coach Highlights */}
        <section
          className="relative py-20 lg:py-32"
          style={{ backgroundImage: "url('/images/wave-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-white/50" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="mb-16 grid gap-8 md:grid-cols-3">
              {[

                {
                  icon: Award,
                  title: "Certified Professionals",
                  description:
                    "All coaches are certified and maintain current CPR/First Aid certifications.",
                },
                {
                  icon: Heart,
                  title: "Student-Centered",
                  description:
                    "We prioritize creating supportive, inclusive environments where every child feels valued and encouraged.",
                },
                {
                  icon: Star,
                  title: "Experienced Team",
                  description:
                    "Our coaching team brings decades of gymnastics teaching and competitive experience to every class.",
                },
              ].map((highlight, i) => (
                <Card key={highlight.title} className={`card-lift reveal reveal-delay-${i + 1}`}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <highlight.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{highlight.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
              {coaches.map((coach, i) => (
                <Card key={coach.name} className={`overflow-hidden group hover:shadow-lg transition-shadow card-lift reveal reveal-delay-${i + 1}`}>
                  <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={coach.image || "/placeholder.svg"}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold">{coach.name}</h3>
                    <p className="text-sm font-medium text-primary">{coach.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{coach.experience} experience</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{coach.bio}</p>
                    <div className="mt-6 space-y-2">
                      {coach.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="bg-gradient-to-br from-secondary to-primary py-20 text-white lg:py-32">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-balance lg:text-5xl">Join Our Coaching Team</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
              Are you passionate about gymnastics and working with kids? We're always looking for dedicated coaches to
              join our ohana.
            </p>
            <div className="mt-8">
              <a
                href="mailto:clcsboard@gmail.com?subject=Coaching Opportunity"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-secondary transition-colors hover:bg-white/90"
              >
                Contact Us About Coaching
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
