"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScholarshipPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Don't show popup on scholarship pages
  const excludedPages = ['/scholarship', '/scholarship/success']
  const shouldHidePopup = excludedPages.includes(pathname)

  useEffect(() => {
    // Don't show popup on excluded pages
    if (shouldHidePopup) {
      return
    }

    // Check if user has already dismissed this popup in current session
    const dismissed = sessionStorage.getItem("scholarship-popup-dismissed")
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [shouldHidePopup])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem("scholarship-popup-dismissed", "true")
  }

  const handleApply = () => {
    handleDismiss()
    router.push('/scholarship')
  }

  if (!isVisible || shouldHidePopup) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border-4 border-primary">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Scholarships Available –{" "}
            <span className="text-primary text-3xl">APPLY NOW</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer need-based scholarships to ensure access to gymnastics for all keiki.
          </p>
          
          <Button 
            onClick={handleApply}
            size="lg"
            className="w-full text-lg font-semibold cursor-pointer hover:scale-105 transition-all duration-200"
          >
            Apply for Scholarship
          </Button>
        </div>
      </div>
    </div>
  )
}
