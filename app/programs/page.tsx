import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Users, ArrowRight, AlertCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gymnastics Classes for Kids on Kaua'i | Baby Stars to Shooting Stars",
  description:
    "Quality gymnastics programs for ages 1-15 at three Kaua'i locations. Baby Stars, Mini Stars, All Stars, and Shooting Stars classes in Kapa'a, Līhu'e, and Po'ipū. Expert coaching, small class ratios, affordable tuition.",
}

export default function ProgramsPage() {
  const schedules = [
    {
      location: "Kapa'a - All Saint's Gym",
      address: "4-1061 Kuhio Hwy, Kapa\u02bba, HI 96746",
      programs: [
        { name: "Baby Stars (1-3)", day: "Saturday", time: "8:00 AM - 8:45 AM" },
        { name: "Mini Stars (3-5)", day: "Saturday", time: "8:00 AM - 9:00 AM" },
        { name: "All Stars (6-15)", day: "Saturday", time: "9:15 AM - 10:15 AM" },
        { name: "Shooting Stars (6-15)", day: "Saturday", time: "10:30 AM - 11:30 AM" },
      ],
    },
    {
      location: "Līhu'e - United Church Parish Hall",
      address: "4340 Nawiliwili Rd, Līhu'e, HI 96766",
      programs: [

        { name: "Mini Stars (3-5)", day: "Tuesday", time: "3:30 PM - 4:30 PM" },
        { name: "All Stars (6-15)", day: "Tuesday", time: "4:45 PM - 5:45 PM" },
        { name: "Shooting Stars (6-15)", day: "Tuesday", time: "6:00 PM - 7:00 PM" },
      ],
    },
    {
      location: "Po'ipū - Kaua'i Christian Fellowship",
      address: "2731 Ala Kinoiki, Koloa, HI 96756",
      programs: [
        { name: "Mini Stars (3-5)", day: "Monday", time: "3:00 PM - 4:00 PM" },
        { name: "All Stars (6-15)", day: "Monday", time: "4:15 PM - 5:15 PM" },
        { name: "Shooting Stars (6-15)", day: "Monday", time: "5:30 PM - 6:30 PM" },
      ],
    },
  ]

  const programDetails = [
    {
      name: "Baby Stars",
      age: "Ages walking-2",
      description:
        "Our Baby Stars class is designed to help babies develop fine & gross motor skills through balance coordination and strength through fundamental basic skills on beam, bars, floor and yes, even vault.",
      schedules: [
        { day: "Saturdays", location: "Kapa'a", time: "8:00-8:45 a.m." }
      ],
      duration: "45 minutes",
      ratio: "Ratio 1:6",
      image: "/images/baby-stars.png",
      skills: ["Fine & gross motor skills", "Balance & coordination", "Strength building", "Fundamental skills"],
    },
    {
      name: "Mini Stars",
      age: "Ages 3-5",
      description:
        "Our Mini-Stars class is designed to help our preschoolers to continue to develop fine & gross motor skills through balance coordination and strength along with promoting physical fitness through fundamental basic skills on beam, bars, floor and yes, even vault. Plus, meeting new friends is the icing on the cake :)",
      schedules: [
        { day: "Mondays", location: "Po'ipū", time: "3:00-4:00 p.m." },
        { day: "Tuesdays", location: "Līhu'e", time: "3:30-4:30 p.m." },
        { day: "Saturdays", location: "Kapa'a", time: "8:00-9:00 a.m." }
      ],
      duration: "60 minutes",
      ratio: "Ratio 1:6",
      image: "/images/mini-stars.png",
      skills: ["Fine & gross motor skills", "Physical fitness", "Social development", "Fundamental skills"],
    },
    {
      name: "All Stars",
      age: "Ages 6-15",
      description:
        "Our All-Stars class for after school students provides students with essential skills such as handstands, cartwheels, rolls, and jumps, as well as more advanced techniques like flips and swings. Additionally, it introduces fundamental skills for beam, bars, and vaulting.",
      schedules: [
        { day: "Mondays", location: "Po'ipū", time: "4:15-5:15 p.m." },
        { day: "Tuesdays", location: "Līhu'e", time: "4:45-5:45 p.m." },
        { day: "Saturdays", location: "Kapa'a", time: "9:15-10:15 a.m." }
      ],
      duration: "60 minutes",
      ratio: "Ratio 1:8",
      image: "/images/all-stars.png",
      skills: ["Handstands & cartwheels", "Rolls & jumps", "Flips & swings", "Beam, bars, and vault"],
    },
    {
      name: "Shooting Stars",
      age: "Ages 6-15",
      description:
        "Our Shooting Stars is an ability based class designed for athletes looking to master advanced tumbling combinations, tricking and aerial acrobatics and more. This high energy class focuses on strength and body control in a safe and supportive environment led by Coach Kevin.",
      schedules: [
        { day: "Mondays", location: "Po'ipū", time: "5:30-6:30 p.m." },
        { day: "Tuesdays", location: "Līhu'e", time: "6:00-7:00 p.m." },
        { day: "Saturdays", location: "Kapa'a", time: "10:30-11:30 a.m." }
      ],
      duration: "60 minutes",
      ratio: "Ratio 1:8",
      requirements: [
        "Perform a bridge kickover",
        "Demonstrate cartwheels with proper form (will be evaluated)",
        "Hold a handstand with control (against wall or freestanding, evaluated)",
        "Perform forward and backward rolls with good technique",
      ],
      requirementsNote:
        "All new students will complete a brief skill evaluation to ensure appropriate class placement.",
      image: "/images/shooting-stars.png",
      skills: ["Advanced tumbling", "Tricking & aerials", "Strength & body control", "Progressive combinations"],
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <section className="relative py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/three-locations.jpeg"
              alt="Children in gymnastics class"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/90" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              {/* Left Column - Hero Content */}
              <div className="text-center lg:text-left text-white">
                <div className="inline-block mb-4 px-4 py-2 bg-accent/90 text-accent-foreground rounded-full text-sm font-medium">
                  Choose Your Program
                </div>
                <h1 className="text-4xl font-bold text-balance lg:text-6xl animate-fadeIn">Our Programs</h1>
                <p className="mt-6 text-lg leading-relaxed opacity-95 animate-fadeIn animation-delay-200">
                  High-quality gymnastics classes designed for every age and skill level, offered at three convenient
                  locations across Kaua'i.
                </p>
                <Button
                  size="lg"
                  className="mt-8 bg-white text-secondary hover:bg-white/90 animate-fadeIn animation-delay-400"
                  asChild
                >
                  <a href="https://portal.iclasspro.com/clcsgymnastics" target="_blank" rel="noopener noreferrer">
                    View Class Schedule
                  </a>
                </Button>
              </div>
              
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-20">
              {programDetails.map((program, index) => (
                <div
                  key={program.name}
                  className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center reveal ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                        index === 0
                          ? "bg-accent text-accent-foreground"
                          : index === 1
                            ? "bg-primary/10 text-primary"
                            : index === 2
                              ? "bg-secondary/10 text-secondary"
                              : "bg-accent/10 text-accent"
                      }`}
                    >
                      {program.age}
                    </div>
                    <h2 className="text-3xl font-bold lg:text-4xl">{program.name}</h2>
                    <div className="mt-2 space-y-1">
                      {program.schedules.map((schedule, idx) => (
                        <p key={idx} className="text-sm text-primary font-medium">
                          {schedule.day} {schedule.location} {schedule.time}
                        </p>
                      ))}
                    </div>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{program.description}</p>
                    {program.requirements && (
                      <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-sm font-semibold text-accent mb-2">Special Requirements:</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Participants should have a foundational understanding of beginner gymnastics skills. To enroll
                          in Shooting Stars (Level 2), athletes should be able to:
                        </p>
                        <ul className="space-y-1 mb-2">
                          {(program.requirements as string[]).map((req) => (
                            <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {req}
                            </li>
                          ))}
                        </ul>
                        {"requirementsNote" in program && (
                          <p className="text-sm text-muted-foreground italic">{(program as any).requirementsNote}</p>
                        )}
                      </div>
                    )}
                    <div className="mt-6 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{program.ratio}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-semibold mb-2">Skills Covered:</h3>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {program.skills.map((skill) => (
                          <li key={skill} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                      <a href="https://portal.iclasspro.com/clcsgymnastics" target="_blank" rel="noopener noreferrer">
                        Enroll Now
                      </a>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] w-full rounded-2xl shadow-xl overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedules */}
        <section className="bg-secondary text-secondary-foreground py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-balance lg:text-5xl">Class Schedules & Locations</h2>
              <p className="mt-4 text-lg opacity-90">Choose the location and time that works best for your family</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {schedules.map((schedule, i) => (
                <Card key={schedule.location} className={`bg-card card-lift reveal reveal-delay-${i + 1}`}>
                  <CardHeader>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                      <div>
                        <CardTitle className="text-xl">{schedule.location}</CardTitle>
                        {schedule.address && <p className="mt-1 text-sm text-muted-foreground">{schedule.address}</p>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {schedule.programs.map((program, i) => (
                        <div key={i} className="border-l-2 border-accent pl-4">
                          <h3 className="font-semibold">{program.name}</h3>
                          <p className="text-sm text-muted-foreground">{program.day}</p>
                          <p className="text-sm font-bold text-accent">{program.time}</p>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      size="sm"
                      asChild
                    >
                      <a href="https://portal.iclasspro.com/clcsgymnastics" target="_blank" rel="noopener noreferrer">
                        Sign Up for This Location
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tuition Info */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-balance lg:text-4xl text-center mb-12">Tuition & Policies</h2>
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="space-y-6 text-sm leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Session Structure</h3>
                      <p className="text-muted-foreground">
                        Tuition is calculated on a 4-week cycle and is due on the 1st of each month. Classes are
                        prorated accordingly if a regularly scheduled class falls on a holiday or if the gym is closed
                        for special circumstances.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Session Intervals 2026</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          <strong>Interval I:</strong> Jan. 12 – March 28, 2026{" "}
                          <span className="text-xs">(Break: March 16–21)</span>
                        </li>
                        <li>
                          <strong>Interval II:</strong> March 30 – June 20, 2026{" "}
                          <span className="text-xs">(Break: June 22–27)</span>
                        </li>
                        <li>
                          <strong>Interval III:</strong> June 29 – Sept. 19, 2026{" "}
                          <span className="text-xs">(Break: Sept. 21–26)</span>
                        </li>
                        <li>
                          <strong>Interval IV:</strong> Sept. 28 – Dec. 19, 2026{" "}
                          <span className="text-xs">(Break: Dec. 20–28)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Enrollment</h3>
                      <p className="text-muted-foreground">
                        Enrollment is ongoing throughout the year. Contact us to schedule a trial class and find the
                        perfect program for your child.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground text-center">
                        View our complete{" "}
                        <Link href="/policies" className="text-primary hover:underline font-semibold">
                          Policies & Procedures
                        </Link>
                      </p>
                    </div>
                  </div>
                  <Button size="lg" className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <a href="https://portal.iclasspro.com/clcsgymnastics" target="_blank" rel="noopener noreferrer">
                      Contact Us to Enroll
                    </a>
                  </Button>
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
