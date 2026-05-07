import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Target, MapPin, TrendingUp, AlertCircle, Heart } from "lucide-react"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"
import { ExpandableText } from "@/components/expandable-text"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <HeroCarousel />

        {/* Scholarship CTA */}
        <section className="relative overflow-hidden bg-secondary py-20 lg:py-28 brand-pattern brand-pattern-secondary">

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">

              {/* Left: text content */}
              <div className="reveal">
                {/* Eyebrow label */}
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/40 px-4 py-1.5 mb-6">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Scholarships Available
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-balance text-secondary-foreground lg:text-5xl xl:text-6xl leading-tight">
                  Gymnastics for Every Keiki on Kaua&#699;i
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-secondary-foreground/80 max-w-lg">
                  We&apos;re proud to support local youth through safe, structured programs that build confidence,
                  strength, and life skills. No family should have to choose between opportunity and affordability.
                </p>

                {/* Trust signals */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { icon: Heart, label: "Need-based awards" },
                    { icon: Star, label: "Limited spots available" },
                    { icon: Target, label: "501(c)(3) Nonprofit" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-secondary-foreground/90">{label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-secondary font-bold hover:bg-primary/90 text-base px-8 py-6"
                  >
                    <Link href="/scholarship">
                      Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary-foreground text-secondary font-bold hover:bg-secondary-foreground/90 text-base px-8 py-6"
                  >
                    <Link href="/donate">Support a Keiki</Link>
                  </Button>
                </div>
              </div>

              {/* Right: visual card */}
              <div className="relative flex justify-center lg:justify-end reveal reveal-delay-2">
                <div className="relative w-full max-w-md">
                  {/* Main image */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30">
                    <img
                      src="/images/leadership-gym-class.png"
                      alt="Young gymnasts training at CLC Gymnastics Academy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Floating stat badge */}
                  <div className="absolute -bottom-5 -left-5 rounded-xl bg-primary px-5 py-4 shadow-xl float-badge">
                    <p className="text-2xl font-bold text-secondary leading-none">100+</p>
                    <p className="text-xs font-semibold text-secondary/80 mt-1">Keiki Served</p>
                  </div>
                  {/* Floating accent badge */}
                  <div className="absolute -top-4 -right-4 rounded-xl bg-secondary-foreground px-4 py-3 shadow-lg float-badge-slow">
                    <p className="text-xs font-bold text-secondary uppercase tracking-wide">Kauaʻi&apos;s Own</p>
                    <p className="text-xs text-secondary/70 mt-0.5">Nonprofit Gym</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* Gymnasts Video Section */}
        <section
          className="relative py-20 lg:py-28"
          style={{
            backgroundImage: "url('/images/wave-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle light overlay so heading text stays crisp */}
          <div className="absolute inset-0 bg-white/30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h2 className="text-center text-3xl font-bold text-balance lg:text-4xl mb-10" style={{ color: "#0d3b66" }}>
              Hear from our Gymnasts
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/HEKNMKgFN5w?modestbranding=1&controls=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1"
                  title="Hear from our Gymnasts — CLC Gymnastics Academy"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Class Updates & Closure Dates */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-8">
                <AlertCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  
                  
                  {/* Session Intervals 2026 */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">Session Intervals 2026</h3>
                    <div className="space-y-2 text-secondary/80">
                      <p className="text-base">
                        <span className="font-semibold">Interval I:</span> Jan. 12 – March 28, 2026{" "}
                        <span className="text-sm">(Break: March 16-21)</span>
                      </p>
                      <p className="text-base">
                        <span className="font-semibold">Interval II:</span> March 30 – June 20, 2026{" "}
                        <span className="text-sm">(Break: July 20-25)</span>
                      </p>
                      <p className="text-base">
                        <span className="font-semibold">Interval III:</span> June 29 – Sept. 19, 2026{" "}
                        <span className="text-sm">(Break: Sept. 21-26)</span>
                      </p>
                      <p className="text-base">
                        <span className="font-semibold">Interval IV:</span> Sept. 28 – Dec. 19, 2026{" "}
                        <span className="text-sm">(Break: Dec. 20-28)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start mt-8 ml-[50px]">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/programs">
                    View Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-32 brand-pattern brand-pattern-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="reveal">
                <Target className="h-12 w-12 mb-6 opacity-90" />
                <h2 className="text-3xl font-bold text-balance lg:text-5xl mb-6">Our Mission</h2>
                <ExpandableText
                  preview={
                    <p className="text-lg leading-relaxed">
                      At CLC's Gymnastics Academy, our mission provides every child in our community with access to a{" "}
                      <span className="font-semibold">safe, inclusive and affordable</span> gymnastics program that
                      builds strength, coordination, flexibility, confidence and a lifelong love of movement...
                    </p>
                  }
                  full={
                    <>
                      <p className="text-lg leading-relaxed">
                        At CLC's Gymnastics Academy, our mission provides every child in our community with access to a{" "}
                        <span className="font-semibold">safe, inclusive and affordable</span> gymnastics program that
                        builds strength, coordination, flexibility, confidence and a lifelong love of movement. We
                        strive to create a supportive environment where athletes of all backgrounds can experience the
                        power, beauty, and benefits of gymnastics developing not only physical skills, but also
                        character, resilience and self-esteem.
                      </p>
                      <p className="text-lg leading-relaxed mt-4">
                        Currently operating as a mobile program, we've brought gymnastics to children throughout the
                        island. We are working toward building a permanent, state-of-the-art home gym to expand access
                        and opportunity for Kaua'i's youth while enriching the health and balance of our community.
                      </p>
                    </>
                  }
                  buttonClassName="text-primary-foreground hover:text-primary-foreground/80"
                />
                <div className="mt-6">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl reveal reveal-delay-2">
                <img
                  src="/images/clc-team-photo.png"
                  alt="CLC's Gymnastics Academy coaches and students"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-background brand-pattern">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-xl lg:order-1 max-w-md mx-auto lg:mx-0 reveal" suppressHydrationWarning>
                <iframe
                  src="https://www.youtube.com/embed/uRUSGmGSj4U?modestbranding=1&controls=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1"
                  title="CLC Gymnastics Academy Impact"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  suppressHydrationWarning
                />
              </div>
              <div className="lg:order-2 reveal reveal-delay-2">
                <Target className="h-12 w-12 mb-6 text-accent" />
                <h2 className="text-3xl font-bold text-balance lg:text-5xl mb-6">Our Impact</h2>
                <ExpandableText
                  preview={
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Kaua'i faces a shortage of structured, after-school programs that keep children active, supported
                      and safe. Gymnastics fills that need by giving kids a place to move, learn, and connect to a place
                      where they can channel their energy into something positive and grow surrounded by mentors who
                      believe in them...
                    </p>
                  }
                  full={
                    <>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        Kaua'i faces a shortage of structured, after-school programs that keep children active,
                        supported and safe. Gymnastics fills that need by giving kids a place to move, learn, and
                        connect to a place where they can channel their energy into something positive and grow
                        surrounded by mentors who believe in them. Gymnastics has the power to shape not just strong
                        athletes, but strong individuals and the need for that impact on Kaua'i has never been greater.
                        Our keiki deserve programs that inspire confidence, discipline, and joy through movement, while
                        giving them a positive and healthy path to follow.
                      </p>
                      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        In response, CLC's Gymnastics Academy has shown just how much our community values this sport.
                        As a mobile program, we've reached a multitude of children across the island but the demand
                        continues to outgrow our capacity. A permanent home gym would allow us to provide consistent
                        training, expand access and build a lasting space where every child can belong while teaching
                        them to set goals, face fears and celebrate progress. All necessary tools to learn perseverance,
                        confidence and focus that carry into school, relationships and life.
                      </p>
                    </>
                  }
                />
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/programs">
                      Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-secondary py-20 text-secondary-foreground lg:py-32 brand-pattern brand-pattern-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { number: "100+", label: "Active and Recurring Drop-In Students" },
                { number: "3", label: "Island Locations" },
                { number: "2+", label: "Expert Coaches" },
                { number: "501(c)(3)", label: "Nonprofit Status" },
              ].map((stat, i) => (
                <div key={stat.label} className={`text-center reveal reveal-delay-${i + 1}`}>
                  <div className="text-4xl font-bold lg:text-5xl">{stat.number}</div>
                  <div className="mt-2 text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-muted/20 brand-pattern brand-pattern-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <TrendingUp className="h-12 w-12 mb-6 text-primary" />
                <h2 className="text-3xl font-bold text-balance lg:text-5xl mb-6">Gymnastics to You</h2>
                <ExpandableText
                  preview={
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Our Mobile Gymnastics Program brings high-quality instruction directly to the community by
                      transporting all essential equipment such as mats, balance beams, bars and more to each site.
                      Classes are offered in a wide range of locations by experienced coaches delivering a structured,
                      age appropriate curriculum...
                    </p>
                  }
                  full={
                    <>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        Our Mobile Gymnastics Program brings high-quality instruction directly to the community by
                        transporting all essential equipment such as mats, balance beams, bars and more to each site.
                        Classes are offered in a wide range of locations by experienced coaches delivering a structured,
                        age appropriate curriculum focused on fundamental skills such as rolls, cartwheels, balance,
                        coordination, strength and body control. With an emphasis on safety, confidence-building, and
                        positive movement experience our program is accessible to children of all backgrounds and
                        abilities.
                      </p>
                      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        As we continue to grow, we are working toward establishing a permanent, state-of-the-art home
                        gym that will expand access for Kaua'i's youth and further strengthen the health and wellbeing
                        of our community.
                      </p>
                    </>
                  }
                />
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/programs">View Class Schedule</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/gymnastics-to-you.png"
                  alt="Mobile gymnastics program with coach instructing children"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Preview */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-balance lg:text-5xl">Our Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground">Classes for all ages and skill levels across Kaua'i</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Baby Stars",
                  age: "Ages 1-3",
                  description:
                    "A fun, interactive class where little ones build motor skills, coordination, and confidence through play, music and movement.",
                  image: "/images/baby-stars.png",
                  color: "accent",
                },
                {
                  title: "Mini Stars",
                  age: "Ages 3-5",
                  description:
                    "A beginner class teaching basic gymnastics skills and listening skills through fun activities.",
                  image: "/images/mini-stars.png",
                  color: "primary",
                },
                {
                  title: "All Stars",
                  age: "Ages 6-15",
                  description: "An after-school beginner class.",
                  image: "/images/all-stars.png",
                  color: "secondary",
                },
                {
                  title: "Shooting Stars",
                  age: "Ages 6-15",
                  description: "An advanced tumbling class. Requiring prior experience with back handsprings or flips.",
                  image: "/images/shooting-stars.png",
                  color: "accent",
                },
              ].map((program, i) => (
                <Card
                  key={program.title}
                  className={`overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary card-lift reveal reveal-delay-${i + 1}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div
                      className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        program.color === "accent"
                          ? "bg-accent text-accent-foreground"
                          : program.color === "primary"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {program.age}
                    </div>
                    <h3 className="text-xl font-semibold">{program.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="mt-4 w-full text-primary hover:text-primary hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/programs">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                size="lg"
                variant="default"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/programs">
                  View All Programs & Schedule
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="bg-[#7FE2BC] py-20 lg:py-32 brand-pattern brand-pattern-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-balance lg:text-5xl">Our Locations</h2>
              <p className="mt-4 text-lg text-muted-foreground">Serving families across Kaua'i</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Kapa'a",
                  venue: "All Saint's Gym",
                  address: "4-1065 Kuhio Hwy, Kapaʻa, HI 96746",
                  image: "/images/kapaa-location.png",
                  mapsUrl: "https://www.google.com/maps/search/?api=1&query=4-1065+Kuhio+Hwy+Kapaa+HI+96746",
                },
                {
                  name: "Līhu'e",
                  venue: "Līhu'e United Church Parish Hall",
                  address: "4340 Nawiliwili Rd, Līhu'e, HI 96766",
                  image: "/images/lihue-location.png",
                  mapsUrl: "https://www.google.com/maps/search/?api=1&query=4340+Nawiliwili+Rd+Lihue+HI+96766",
                },
                {
                  name: "Po'ipū",
                  venue: "Kaua'i Christian Fellowship",
                  address: "2731 Ala Kinoiki, Poipu, HI 96756",
                  image: "/images/poipu-location.png",
                  mapsUrl: "https://www.google.com/maps/search/?api=1&query=2731+Ala+Kinoiki+Poipu+HI+96756",
                },
              ].map((location, i) => (
                <Card
                  key={location.name}
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={`${location.name} gymnastics facility`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary">{location.name}</h3>
                    <p className="mt-2 font-medium">{location.venue}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{location.address}</p>
                    <Button
                      className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      size="sm"
                      asChild
                    >
                      <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <Link href="/programs">View Class Schedules by Location</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h2 className="text-3xl font-bold text-balance lg:text-5xl">What Families Say</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    "My kids have loved going to gymnastics class with coach Kevin!! He is wonderful with my kids and is so intuitive to each of their skill sets and needs. I have seen such a renewed confidence in their skills and abilities too! Excellent teaching of foundations and technique! Highly recommend!",
                  author: "Holly Wasser",
                  time: "8 months ago",
                },
                {
                  quote:
                    "We Love CLC's Gymnastics Academy! Coach Kevin is great with the kids and we have seen our daughter progress profoundly in just a few months. We definitely recommend them to our friends!",
                  author: "Cheyanne Price",
                  time: "7 months ago",
                },
                {
                  quote:
                    "We love CLC's gymnastics Academy and their coaches. They meet students at their individual level and are full of encouragement, enthusiasm and fun. I highly recommend this program!",
                  author: "Jennifer Schwartz",
                  time: "8 months ago",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="border-l-4 border-l-accent hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{testimonial.quote}</p>
                    <div className="mt-4">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.time}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                <Link href="/testimonials">
                  Read More Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Support Our Mission Section */}
        <section className="py-20 lg:py-32 bg-accent/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold text-balance lg:text-5xl mb-6">Help Us Build a Lasting Impact</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                As a 501(c)(3) nonprofit, we rely on community support to keep our programs accessible and affordable
                for all families. Your donation helps us secure a permanent gym, provide scholarships, and purchase
                essential equipment for our young athletes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 font-bold" asChild>
                  <Link href="/donate">
                    Make a Donation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
                  asChild
                >
                  <Link href="/donate">Learn About Our Needs</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Every contribution, big or small, makes a real difference in a child's life.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary via-secondary to-accent py-20 text-white lg:py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-balance lg:text-5xl">Ready to Begin Your Journey?</h2>
              <p className="mt-6 text-lg leading-relaxed opacity-95">
                Join over 200 families who trust CLC's Gymnastics Academy to provide a safe, fun, and supportive
                environment for their children to thrive.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-8 font-bold" asChild>
                  <a href="https://portal.iclasspro.com/clcsgymnastics" target="_blank" rel="noopener noreferrer">
                    Enroll Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm text-lg px-8"
                  asChild
                >
                  <Link href="/programs">Learn More About Programs</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm text-lg px-8 font-bold"
                  asChild
                >
                  <Link href="/donate">Support Our Mission</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
