import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ExternalLink } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Parent Reviews & Testimonials | CLC's Gymnastics Academy Kaua'i",
  description:
    "Read what Kaua'i families say about CLC's Gymnastics Academy. Real reviews from parents praising our expert coaches, safe environment, and transformative impact on their children's confidence and skills.",
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "We are truly grateful for this gym, this is the only place that meet such high standards for gymnastics. The coaches are consistently motivated and energetic, always bringing out the best in our kids. Christine's kids are a wonderful asset, always kind and supportive, helping others get into their routines and leading by example. Coach Kevin becomes fully immersed in his passion and keeps going even after class ends. After each class, there is a game that helps the kids build stronger connections with each other! He watches every kid and makes sure everyone gets the attention they deserve! Thank you so much for providing this incredible opportunity!",
      author: "ilopi",
      timeAgo: "8 months ago",
      rating: 5,
      photos: ["/images/reviews/ilopi-1.webp", "/images/reviews/ilopi-2.webp"],
    },
    {
      quote:
        "My kids have loved going to gymnastics class with coach Kevin!! He is wonderful with my kids and is so intuitive to each of their skill sets and needs. I have seen such a renewed confidence in their skills and abilities too! Excellent teaching of foundations and technique! Highly recommend!",
      author: "Holly Kennedy",
      timeAgo: "8 months ago",
      rating: 5,
      photos: [],
    },
    {
      quote:
        "We couldn't be more thrilled with our experience at CLC's Gymnastics Academy. From the moment we enrolled, it was clear that this gym is dedicated to providing a safe, fun, and educational environment for young athletes. The instructors are not only highly skilled but also incredibly patient and encouraging, making every class enjoyable for our child.",
      author: "Jessy Monz",
      timeAgo: "7 months ago",
      rating: 5,
      photos: [],
    },
    {
      quote:
        "We Love CLC's Gymnastics Academy! Coach Kevin is great with the kids and we have seen our daughter progress profoundly in just a few months. We definitely recommend them to our friends!",
      author: "Cheyanne Price",
      timeAgo: "7 months ago",
      rating: 5,
      photos: [],
    },
    {
      quote:
        "This is a fantastic gymnastics group. The coach is does great with my son. My son is a beginner and he focuses on the safety of the kids focusing on correct form and techniques. He is able to redirect my son with his adhd easily. The team is great as well!",
      author: "Elizabeth Gipson",
      timeAgo: "8 months ago",
      rating: 5,
      photos: [],
    },
    {
      quote:
        'Kevin Tiess is a truly phenomenal gymnastics coach in every sense of the word—the kind of coach who is "all in" every single day. His passion shines through in everything he does, pouring his heart into his work and inspiring those around him.',
      author: "Eva",
      timeAgo: "8 months ago",
      rating: 5,
      photos: ["/images/reviews/eva-1.webp", "/images/reviews/eva-2.webp", "/images/reviews/eva-3.webp"],
    },
    {
      quote:
        "We love CLC's gymnastics Academy and their coaches. They meet students at their individual level and are full of encouragement, enthusiasm and fun. I highly recommend this program!",
      author: "Jennifer Schwartz",
      timeAgo: "8 months ago",
      rating: 5,
      photos: [],
    },
    {
      quote:
        "CLC's Gymnastics Academy was so kind to let our 9-year-old daughter do drop-in lessons while we were on Kauai for 2 weeks. She had a great time and got lots of useful feedback and inputs. Coach Kevin manages to motivate the whole group of young gymnasts to give their best and have fun at the same time. Thank you!",
      author: "Sandra Derungs",
      timeAgo: "2 months ago",
      rating: 5,
      photos: [],
    },
    {
      quote:
        "Amazing for both my kids. They are at very different levels with different objectives- both are being met in the same class. My daughter wants to be doing back walkovers, walking on her hands for hand stands and eventually back handsprings. My son just wants to have fun and learn some cool moves.",
      author: "Imua Coffee Roasters",
      timeAgo: "7 months ago",
      rating: 5,
      photos: ["/images/reviews/imua-1.webp"],
    },
  ]

  const reviewsWithPhotos = testimonials.filter((t) => t.photos && t.photos.length > 0)
  const reviewsWithoutPhotos = testimonials.filter((t) => !t.photos || t.photos.length === 0)

  return (
    <>
      <Navigation />
      <main>
        <section className="relative py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/Building-Foundations-Banner-v2.webp"
              alt="Happy children in gymnastics"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-primary/90 to-secondary/90" />
          </div>
          {/* </CHANGE> */}
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="mx-auto max-w-3xl text-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-white/90 text-secondary rounded-full text-sm font-medium">
                Google Reviews
              </div>
              <h1 className="text-4xl font-bold text-balance lg:text-6xl animate-fadeIn">What Families Say</h1>
              <p className="mt-6 text-lg leading-relaxed opacity-95 animate-fadeIn animation-delay-200">
                Real reviews from families who trust us with their children's gymnastics journey.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3 animate-fadeIn animation-delay-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-7 w-7 fill-white text-white" />
                  ))}
                </div>
                <span className="text-lg font-medium">5.0 Stars on Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/search?sca_esv=f0f46d557053f7c4&sxsrf=ANbL-n7T52YJGjsXd51gV7H9T5CTiRfqIA:1776107754549&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdw4w42UW1B-irXxpyZWqxjcIQXu_SMPs9rTaJKp1e-52XKhZh8BmFHN16foKn5ff5_94HA35NBVy6RH1ChqedurKGBfUC-Ml3ls5xLl04cIVZ9h1Q%3D%3D&q=CLC%E2%80%99s+Gymnastics+Academy+Reviews&sa=X&ved=2ahUKEwjgv6v-xOuTAxVIIUQIHUgpO4sQ0bkNegQIIRAH&biw=2240&bih=1172&dpr=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Leave a Review
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.google.com/search?sca_esv=f0f46d557053f7c4&sxsrf=ANbL-n7T52YJGjsXd51gV7H9T5CTiRfqIA:1776107754549&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdw4w42UW1B-irXxpyZWqxjcIQXu_SMPs9rTaJKp1e-52XKhZh8BmFHN16foKn5ff5_94HA35NBVy6RH1ChqedurKGBfUC-Ml3ls5xLl04cIVZ9h1Q%3D%3D&q=CLC%E2%80%99s+Gymnastics+Academy+Reviews&sa=X&ved=2ahUKEwjgv6v-xOuTAxVIIUQIHUgpO4sQ0bkNegQIIRAH&biw=2240&bih=1172&dpr=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                See All Reviews
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-12">
              {/* Featured Reviews with Photos */}
              {reviewsWithPhotos.map((testimonial, index) => (
                <Card key={`photo-${index}`} className={`overflow-hidden reveal ${index % 2 === 0 ? "" : "bg-muted/30"}`}>
                  <CardContent className="p-0">
                    <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
                      {/* Photo Gallery */}
                      <div className="lg:w-1/2">
                        {testimonial.photos.length === 1 ? (
                          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                            <Image
                              src={testimonial.photos[0] || "/placeholder.svg"}
                              alt={`Photo from ${testimonial.author}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 lg:grid-rows-2 lg:h-full">
                            {testimonial.photos.slice(0, 4).map((photo, photoIndex) => (
                              <div key={photoIndex} className="relative aspect-square">
                                <Image
                                  src={photo || "/placeholder.svg"}
                                  alt={`Photo ${photoIndex + 1} from ${testimonial.author}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Review Content */}
                      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <Quote className="h-12 w-12 text-primary/20 mb-6" />
                        <div className="mb-4 flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-base lg:text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                        <div className="border-t border-border pt-6">
                          <div className="font-semibold text-lg">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground mt-1">{testimonial.timeAgo}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Text-Only Reviews Grid */}
              {reviewsWithoutPhotos.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                  {reviewsWithoutPhotos.map((testimonial, index) => (
                    <Card key={`text-${index}`} className={`relative overflow-hidden flex flex-col card-lift reveal reveal-delay-${Math.min(index % 3 + 1, 4)}`}>
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
                        <div className="mb-4 flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground relative z-10 flex-1">
                          "{testimonial.quote}"
                        </p>

                        <div className="mt-6 border-t border-border pt-4">
                          <div className="font-semibold">{testimonial.author}</div>
                          <div className="text-xs text-muted-foreground mt-1">{testimonial.timeAgo}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/search?sca_esv=f0f46d557053f7c4&sxsrf=ANbL-n7T52YJGjsXd51gV7H9T5CTiRfqIA:1776107754549&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdw4w42UW1B-irXxpyZWqxjcIQXu_SMPs9rTaJKp1e-52XKhZh8BmFHN16foKn5ff5_94HA35NBVy6RH1ChqedurKGBfUC-Ml3ls5xLl04cIVZ9h1Q%3D%3D&q=CLC%E2%80%99s+Gymnastics+Academy+Reviews&sa=X&ved=2ahUKEwjgv6v-xOuTAxVIIUQIHUgpO4sQ0bkNegQIIRAH&biw=2240&bih=1172&dpr=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Leave a Review
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.google.com/search?sca_esv=f0f46d557053f7c4&sxsrf=ANbL-n7T52YJGjsXd51gV7H9T5CTiRfqIA:1776107754549&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdw4w42UW1B-irXxpyZWqxjcIQXu_SMPs9rTaJKp1e-52XKhZh8BmFHN16foKn5ff5_94HA35NBVy6RH1ChqedurKGBfUC-Ml3ls5xLl04cIVZ9h1Q%3D%3D&q=CLC%E2%80%99s+Gymnastics+Academy+Reviews&sa=X&ved=2ahUKEwjgv6v-xOuTAxVIIUQIHUgpO4sQ0bkNegQIIRAH&biw=2240&bih=1172&dpr=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                See All Reviews
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-balance lg:text-5xl">Ready to Join Our Community?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Experience the CLC's difference for yourself. Schedule a trial class and see why families across Kaua'i
              trust us with their children.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:clcsboard@gmail.com?subject=Trial Class Request"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Schedule a Trial Class
              </a>
              <a
                href="tel:+18086352266"
                className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
