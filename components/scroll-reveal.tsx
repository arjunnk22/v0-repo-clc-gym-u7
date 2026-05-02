"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset all reveal elements to un-revealed on route change
    const elements = document.querySelectorAll(".reveal")
    elements.forEach((el) => el.classList.remove("revealed"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    // Small delay so the new page's DOM is fully painted
    const timer = setTimeout(() => {
      const newElements = document.querySelectorAll(".reveal")
      newElements.forEach((el) => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
