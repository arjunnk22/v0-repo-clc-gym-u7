"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingUp } from "lucide-react"

export function DonationForm() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    const numValue = Number.parseInt(value)
    if (!isNaN(numValue)) {
      setSelectedAmount(numValue)
    }
  }

  const impactAmount = customAmount ? Number.parseInt(customAmount) || 50 : selectedAmount

  return (
    <div className="w-full max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-lg border border-border">
      {/* Donation Type Toggle */}
      <div className="mb-6">
        <Label className="mb-3 block font-semibold">Donation Type</Label>
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant={donationType === "one-time" ? "default" : "outline"}
            className={
              donationType === "one-time" ? "bg-accent hover:bg-accent/90 text-white" : "bg-transparent hover:bg-muted"
            }
            onClick={() => setDonationType("one-time")}
          >
            One-Time
          </Button>
          <Button
            type="button"
            variant={donationType === "monthly" ? "default" : "outline"}
            className={
              donationType === "monthly" ? "bg-accent hover:bg-accent/90 text-white" : "bg-transparent hover:bg-muted"
            }
            onClick={() => setDonationType("monthly")}
          >
            Monthly
          </Button>
        </div>
      </div>

      {/* Donation Amount Selection */}
      <div className="mb-6">
        <Label className="mb-3 block font-semibold">Select Donation Amount</Label>
        <div className="grid grid-cols-5 gap-3">
          {[25, 50, 100, 250, 500].map((amount) => (
            <Button
              key={amount}
              type="button"
              variant={selectedAmount === amount && !customAmount ? "default" : "outline"}
              className={
                selectedAmount === amount && !customAmount
                  ? "bg-accent hover:bg-accent/90 text-white"
                  : "bg-transparent hover:bg-muted"
              }
              onClick={() => handleAmountSelect(amount)}
            >
              ${amount}
            </Button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div className="mb-6">
        <Label className="mb-3 block font-semibold">Custom Amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
          <Input
            type="number"
            placeholder="50"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            className="pl-7 text-base"
          />
        </div>
      </div>

      {/* Impact Section */}
      <div className="mb-6 bg-accent/5 rounded-lg p-4 border border-accent/20">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-5 w-5 text-accent" />
          <span className="font-semibold">Your Impact</span>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">•</span>
            <span>
              ${impactAmount} provides equipment for {Math.floor(impactAmount / 10)} students
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">•</span>
            <span>
              ${impactAmount} sponsors {Math.floor(impactAmount / 25)} classes for underserved families
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">•</span>
            <span>${impactAmount} supports our community outreach and scholarship programs</span>
          </li>
        </ul>
      </div>

      {/* Donor Information */}
      <div className="mb-6">
        <Label className="mb-3 block font-semibold">Donor Information</Label>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="firstName" className="mb-2 block text-sm">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input id="firstName" placeholder="John" required />
          </div>
          <div>
            <Label htmlFor="lastName" className="mb-2 block text-sm">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input id="lastName" placeholder="Doe" required />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="email" className="mb-2 block text-sm">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input id="email" type="email" placeholder="john@example.com" required />
        </div>
        <div className="mt-4">
          <Label htmlFor="phone" className="mb-2 block text-sm">
            Phone Number
          </Label>
          <Input id="phone" type="tel" placeholder="(808) 123-4567" />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        size="lg"
        className="w-full bg-accent hover:bg-accent/90 text-white text-lg"
        onClick={() => alert(`Processing $${impactAmount} ${donationType} donation...`)}
      >
        Donate ${impactAmount}
      </Button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Secure transaction. {"CLC's Gymnastics Academy"} is a 501(c)(3) nonprofit organization.
      </p>
    </div>
  )
}
