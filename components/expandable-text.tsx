"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExpandableTextProps {
  preview: React.ReactNode
  full: React.ReactNode
  previewHeight?: string
  buttonClassName?: string
}

export function ExpandableText({ preview, full, previewHeight = "auto", buttonClassName }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative">
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-full" : "max-h-[200px]"}`}>
        {isExpanded ? full : preview}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className={buttonClassName || "mt-4 text-primary hover:text-primary/80 p-0 h-auto font-semibold"}
      >
        {isExpanded ? (
          <>
            Read Less <ChevronUp className="ml-1 h-4 w-4" />
          </>
        ) : (
          <>
            Read More <ChevronDown className="ml-1 h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  )
}
