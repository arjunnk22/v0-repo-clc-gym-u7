import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary/10">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/clc-logo-footer.png"
                alt="CLC's Gymnastics Academy"
                width={120}
                height={120}
                className="h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building strength, flexibility, focus, and confidence for life through quality gymnastics programs on
              Kaua'i.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">501(c)(3) Nonprofit Organization</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Coaches
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-muted-foreground hover:text-primary transition-colors">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors font-semibold">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Locations</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Kapa'a: All Saint's Gym</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Līhu'e: United Church Parish Hall</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Po'ipū: Kaua'i Christian Fellowship</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:clcsboard@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  clcsboard@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18086352266"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (808) 635-2266
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href="https://www.facebook.com/p/CLCs-Gymnastics-Academy-61566330641628/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/clc_gymnastics/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Visit our Instagram profile"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {"CLC's Gymnastics Academy"}. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
