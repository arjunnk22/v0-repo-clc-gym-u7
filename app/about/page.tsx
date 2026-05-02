import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About CLC's Gymnastics Academy | Youth Gymnastics on Kaua'i",
  description:
    "Learn about CLC's Gymnastics Academy, a nonprofit gymnastics program empowering Kaua'i youth through movement and mentorship. Serving Kapa'a, Līhu'e, and Po'ipū with expert coaching and inclusive programs for ages 1-15.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-accent py-20 text-primary-foreground lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/joy-movement.jpeg"
              alt="CLC's Gymnastics Academy"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/90" />
          </div>
          {/* </CHANGE> */}
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm mb-6">
                <Award className="h-4 w-4" />
                501(c)(3) Nonprofit Organization
              </div>
              <h1 className="text-4xl font-bold text-balance lg:text-6xl">About CLC's Gymnastics Academy</h1>
              <p className="mt-6 text-xl leading-relaxed opacity-95">
                Dedicated to empowering Kaua'i's youth through movement, mentorship, and community.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-accent/5 to-accent/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 reveal">
                <h2 className="text-3xl font-bold text-balance lg:text-5xl mb-6">Our Story</h2>
              </div>

              <div className="space-y-12">
                {/* First section with image float right */}
                <div className="relative reveal">
                  <div className="lg:float-right lg:w-80 lg:ml-8 mb-6 lg:mb-0">
                    <img
                      src="/images/coach-kevin-and-christabella.jpg"
                      alt="Coach Kevin and Christabella at Aloha Gymfest"
                      className="relative aspect-[3/4] rounded-lg shadow-lg w-full object-cover"
                    />
                    {/* </CHANGE> */}
                  </div>

                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p>It all began with just one gymnast and one coach.</p>
                    <p>
                      Christabella Lilliana Cargill and Coach Kevin Tiess first met through Kauaʻi's small gymnastics
                      community. As Christabella's passion for the sport deepened, her family began seeking a more
                      personalized and supportive training experience, one that could nurture her potential in a safe,
                      focused and progress-oriented environment.
                    </p>
                    <p>
                      With no other suitable options nearby, her parents reached out to Coach Kevin to ask whether he
                      would consider offering private lessons at their home. Honored by their trust and inspired by
                      Christabella's dedication, Kevin enthusiastically agreed.
                    </p>
                    <p>
                      What started as a simple plan to help one young gymnast maintain and build her skills soon evolved
                      into something much greater. The connection between coach and gymnast that was rooted in trust,
                      commitment and shared joy planted the seed for a broader vision: a place where Kauaʻi's keiki
                      could grow strong in both body and spirit.
                    </p>
                  </div>
                  <div className="clear-both"></div>
                </div>

                {/* Second section with image float left */}
                <div className="relative reveal reveal-delay-1">
                  <div className="lg:float-left lg:w-80 lg:mr-8 mb-6 lg:mb-0">
                    <img
                      src="/images/mobile-program-kids-carrying-mats.jpg"
                      alt="Mobile gymnastics program in action"
                      className="relative aspect-[4/3] rounded-lg shadow-lg w-full object-cover"
                    />
                    {/* </CHANGE> */}
                  </div>

                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      As word spread about these sessions, more and more families reached out, eager to have their
                      children experience the same thoughtful, high-quality expert coaching.
                    </p>
                    <p>
                      And so, CLC's Gymnastics Academy was born and named in honor of Christabella Lilliana Cargill, and
                      representing Creating Lifelong Champions, a reflection of our mission to offer high-quality
                      gymnastics training guiding every child toward physical strength, emotional confidence, and a
                      lifelong love for movement.
                    </p>
                    <p>
                      What began with one gymnast and one coach has grown into a vibrant and supportive community fueled
                      by passion, purpose, and aloha.
                    </p>
                  </div>
                  <div className="clear-both"></div>
                </div>

                {/* Final paragraph */}
                <div className="max-w-3xl mx-auto text-center pt-8">
                  <p className="text-xl leading-relaxed text-foreground font-semibold">
                    Mahalo for being part of our story. We're only just beginning, and we can't wait to flip into the
                    future with you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div className="reveal">
                <Users className="h-12 w-12 mb-6 text-primary" />
                <h2 className="text-3xl font-bold text-balance lg:text-5xl mb-6">Our Leadership</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  CLC's Gymnastics Academy is a registered{" "}
                  <span className="font-semibold text-foreground">501(c)(3) nonprofit organization</span> based on the
                  island of Kaua'i.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  The Academy is guided by a dedicated and diverse Board of Directors representing a range of
                  professional and economic backgrounds, each committed to advancing youth development through movement
                  and mentorship.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Our day-to-day programs are led by a team of skilled coaches who are devoted to providing every
                  athlete with a positive, inclusive, and high-quality gymnastics experience rooted in{" "}
                  <span className="font-semibold text-foreground">kindness, understanding, and encouragement</span>.
                </p>
              </div>
              <div className="space-y-4">
                <img
                  src="/images/leadership-gym-class.png"
                  alt="Children practicing gymnastics in spacious facility"
                  className="relative aspect-[16/9] rounded-lg shadow-lg w-full object-cover"
                />
                <img
                  src="/images/leadership-coach-kevin.png"
                  alt="Coach Kevin leading dynamic class with students"
                  className="relative aspect-[16/9] rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <Award className="h-12 w-12 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold text-balance lg:text-5xl">Our Values</h2>
              <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
                The principles that guide everything we do at CLC's Gymnastics Academy
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {[
                {
                  title: "Inclusivity",
                  description: "Every child, regardless of background or ability, deserves access to quality programs.",
                  delay: "0ms",
                },
                {
                  title: "Safety",
                  description: "We prioritize the physical and emotional well-being of every athlete in our care.",
                  delay: "100ms",
                },
                {
                  title: "Growth",
                  description: "We celebrate progress over perfection and support each child's individual journey.",
                  delay: "200ms",
                },
                {
                  title: "Community",
                  description: "We build lasting connections and support networks that extend beyond the gym.",
                  delay: "300ms",
                },
              ].map((value, i) => (
                <div
                  key={value.title}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20 card-lift reveal reveal-delay-${i + 1}`}
                >
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
