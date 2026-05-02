"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: "Joy Through Movement",
    description:
      "Watch your child's confidence soar as they master new skills, make friends, and discover the joy of gymnastics in a positive, encouraging environment.",
    image: "/images/joy-movement.jpeg",
    primaryCta: { text: "Sign Up Today", href: "https://portal.iclasspro.com/clcsgymnastics" },
    secondaryCta: { text: "See Testimonials", href: "/testimonials" },
  },
  {
    title: "Three Convenient Locations Across Kaua'i",
    description:
      "With locations in Kapa'a, Līhu'e, and Po'ipū, we make it easy for families across the island to access quality gymnastics training.",
    image: "/images/three-locations.jpeg",
    primaryCta: { text: "Find a Location", href: "/programs" },
    secondaryCta: { text: "View Schedule", href: "/programs" },
  },
  {
    title: "Building Confident Kids Through Gymnastics",
    description:
      "At CLC's Gymnastics Academy, we help kids build strength, flexibility, focus, and confidence for life through fun, high-quality gymnastics classes on Kaua'i.",
    image: "/images/building-confident.jpeg",
    primaryCta: { text: "View Programs", href: "/programs" },
    secondaryCta: { text: "Schedule a Visit", href: "https://portal.iclasspro.com/clcsgymnastics" },
  },
  {
    title: "Building Strong Foundations",
    description:
      "Our structured classes focus on fundamental gymnastics skills including flexibility, strength, coordination, and body awareness for all age groups.",
    image: "/images/Building-Foundations-Banner-v2.webp",
    primaryCta: { text: "View Programs", href: "/programs" },
    secondaryCta: { text: "Learn More", href: "/about" },
  },
  {
    title: "Expert Coaches, World-Class Training",
    description:
      "Our certified coaches bring years of experience and passion to every class, creating a safe and encouraging environment where every child can thrive.",
    image: "/images/expert-coaches.jpeg",
    primaryCta: { text: "Meet Our Coaches", href: "/coaches" },
    secondaryCta: { text: "Learn More", href: "/programs" },
  },
]
// </CHANGE>

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0">
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="h-full w-full object-cover" />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <div className="relative z-20 container mx-auto px-14 sm:px-20 py-20 lg:px-12 lg:py-32 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold leading-tight text-balance lg:text-6xl text-white">{slide.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-pretty text-white/90">{slide.description}</p>
              <div className="mt-8 flex flex-wrap gap-4 relative z-30">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  {slide.primaryCta.href.startsWith("http") ? (
                    <a href={slide.primaryCta.href} target="_blank" rel="noopener noreferrer">
                      {slide.primaryCta.text}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  ) : (
                    <Link href={slide.primaryCta.href}>
                      {slide.primaryCta.text}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  )}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-white/10 backdrop-blur-sm transition-colors"
                  asChild
                >
                  {slide.secondaryCta.href.startsWith("http") ? (
                    <a href={slide.secondaryCta.href} target="_blank" rel="noopener noreferrer">
                      {slide.secondaryCta.text}
                    </a>
                  ) : (
                    <Link href={slide.secondaryCta.href}>{slide.secondaryCta.text}</Link>
                  )}
                </Button>
              </div>
              {index === 0 && (
                <div className="mt-8 flex items-center gap-2 text-sm text-white/80">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm"
                      />
                    ))}
                  </div>
                  <span>Trusted by over 200 families on Kaua'i</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Smaller size for better spacing */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
