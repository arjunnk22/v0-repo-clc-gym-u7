"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight, Check, Upload, X } from "lucide-react"
import Link from "next/link"
import SignatureCanvas from "react-signature-canvas"

interface FormData {
  // Student Information
  studentName: string
  studentDob: string
  studentGender: string
  schoolAttended: string
  areaOfResidence: string
  
  // Contact Information
  parentGuardianName: string
  email: string
  phone: string
  
  // Program Interest
  programsAppliedFor: string[]
  currentlyEnrolled: string
  
  // Household Information
  householdSize: string
  multipleChildren: string
  otherChildrenNames: string
  
  // Financial Need
  financialNeedExplanation: string
  youthBenefitExplanation: string
  
  // Family Contribution
  familyContribution: string
  
  // Acknowledgments
  certificationAcknowledged: boolean
  scholarshipAvailabilityAcknowledged: boolean
  programCommitmentAcknowledged: boolean
  renewalUnderstandingAcknowledged: boolean
  communicationConsentAcknowledged: boolean
  financialDataConsentAcknowledged: boolean
  
  // Referral
  referralSource: string[]
  referralOther: string
  
  // Income Verification
  incomeVerificationFiles: File[]
  documentsRedactedConfirmed: boolean
  
  // Signature
  signatureType: "typed" | "drawn"
  signatureTyped: string
  signatureDrawn: string
  signatureDate: string
}

const STEPS = [
  "Student Information",
  "Program Interest",
  "Household Information",
  "Financial Need",
  "Family Contribution",
  "Acknowledgments",
  "Referral Source",
  "Income Verification",
  "Review & Signature"
]

export function ScholarshipApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    studentDob: "",
    studentGender: "",
    schoolAttended: "",
    areaOfResidence: "",
    parentGuardianName: "",
    email: "",
    phone: "",
    programsAppliedFor: [],
    currentlyEnrolled: "",
    householdSize: "",
    multipleChildren: "",
    otherChildrenNames: "",
    financialNeedExplanation: "",
    youthBenefitExplanation: "",
    familyContribution: "",
    certificationAcknowledged: false,
    scholarshipAvailabilityAcknowledged: false,
    programCommitmentAcknowledged: false,
    renewalUnderstandingAcknowledged: false,
    communicationConsentAcknowledged: false,
    financialDataConsentAcknowledged: false,
    referralSource: [],
    referralOther: "",
    incomeVerificationFiles: [],
    documentsRedactedConfirmed: false,
    signatureType: "typed",
    signatureTyped: "",
    signatureDrawn: "",
    signatureDate: new Date().toISOString().split('T')[0]
  })

  const signatureCanvasRef = useRef<SignatureCanvas>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [field]: checked }))
  }

  const handleMultiCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentValues = prev[field as keyof FormData] as string[]
      if (checked) {
        return { ...prev, [field]: [...currentValues, value] }
      } else {
        return { ...prev, [field]: currentValues.filter((v: string) => v !== value) }
      }
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    
    // Validate: max 3 files, each max 5MB, only PDF/JPG/PNG
    const validFiles = files.filter(file => {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
      const maxSize = 5 * 1024 * 1024 // 5MB
      return validTypes.includes(file.type) && file.size <= maxSize
    }).slice(0, 3)
    
    if (files.length !== validFiles.length) {
      alert('Some files were rejected. Please ensure each file is under 5MB and in PDF, JPG, or PNG format.')
    }
    
    setFormData(prev => ({ ...prev, incomeVerificationFiles: validFiles }))
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      incomeVerificationFiles: prev.incomeVerificationFiles.filter((_, i) => i !== index)
    }))
  }

  const clearSignature = () => {
    signatureCanvasRef.current?.clear()
  }

  const saveSignature = () => {
    if (signatureCanvasRef.current) {
      const dataUrl = signatureCanvasRef.current.toDataURL()
      setFormData(prev => ({ ...prev, signatureDrawn: dataUrl }))
    }
  }

  const validateCurrentStep = (): boolean => {
    switch (currentStep) {
      case 0: // Student Information
        return !!(
          formData.studentName &&
          formData.studentDob &&
          formData.schoolAttended &&
          formData.areaOfResidence &&
          formData.parentGuardianName &&
          formData.email &&
          formData.phone
        )
      case 1: // Program Interest
        return formData.programsAppliedFor.length > 0 && !!formData.currentlyEnrolled
      case 2: // Household Information
        return !!(formData.householdSize && formData.multipleChildren)
      case 3: // Financial Need
        return !!(formData.financialNeedExplanation && formData.youthBenefitExplanation)
      case 4: // Family Contribution
        return !!formData.familyContribution
      case 5: // Acknowledgments
        return !!(
          formData.certificationAcknowledged &&
          formData.scholarshipAvailabilityAcknowledged &&
          formData.programCommitmentAcknowledged &&
          formData.renewalUnderstandingAcknowledged &&
          formData.communicationConsentAcknowledged &&
          formData.financialDataConsentAcknowledged
        )
      case 6: // Referral Source
        return formData.referralSource.length > 0
      case 7: // Income Verification
        return formData.incomeVerificationFiles.length > 0 && formData.documentsRedactedConfirmed
      case 8: // Review & Signature
        if (formData.signatureType === 'typed') {
          return !!(formData.signatureTyped && formData.signatureDate)
        } else {
          return !!formData.signatureDate // For drawn, we'll check canvas when submitting
        }
      default:
        return true
    }
  }

  const nextStep = () => {
    if (!validateCurrentStep()) {
      alert('Please fill in all required fields before proceeding.')
      return
    }
    
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async () => {
    // Validate and capture drawn signature FIRST
    let finalFormData = { ...formData }
    
    if (formData.signatureType === "drawn") {
      if (!signatureCanvasRef.current || signatureCanvasRef.current.isEmpty()) {
        alert('Please draw your signature before submitting.')
        return
      }
      // Capture drawn signature as data URL
      const dataUrl = signatureCanvasRef.current.toDataURL()
      finalFormData.signatureDrawn = dataUrl
    } else {
      if (!formData.signatureTyped) {
        alert('Please type your name as signature before submitting.')
        return
      }
    }

    if (!formData.signatureDate) {
      alert('Please select a signature date before submitting.')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Create FormData for file upload
      const submitData = new FormData()
      
      // Add all form fields using finalFormData
      Object.keys(finalFormData).forEach(key => {
        if (key === 'incomeVerificationFiles') {
          finalFormData.incomeVerificationFiles.forEach((file) => {
            submitData.append('files', file)
          })
        } else if (Array.isArray((finalFormData as any)[key])) {
          submitData.append(key, JSON.stringify((finalFormData as any)[key]))
        } else {
          submitData.append(key, (finalFormData as any)[key])
        }
      })

      const response = await fetch('/api/scholarship/submit', {
        method: 'POST',
        body: submitData,
      })

      if (response.ok) {
        // Redirect to success page
        window.location.href = '/scholarship/success'
      } else {
        alert('Error submitting application. Please try again.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      alert('Error submitting application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Student Information
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="studentName">Student Name *</Label>
              <Input
                id="studentName"
                value={formData.studentName}
                onChange={(e) => handleInputChange('studentName', e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="studentDob">Student Date of Birth *</Label>
              <Input
                id="studentDob"
                type="date"
                value={formData.studentDob}
                onChange={(e) => handleInputChange('studentDob', e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div>
              <Label>Student Gender (Optional Field)</Label>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="gender-female"
                    name="gender"
                    value="female"
                    checked={formData.studentGender === 'female'}
                    onChange={(e) => handleInputChange('studentGender', e.target.value)}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="gender-female" className="font-normal cursor-pointer">Female</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="gender-male"
                    name="gender"
                    value="male"
                    checked={formData.studentGender === 'male'}
                    onChange={(e) => handleInputChange('studentGender', e.target.value)}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="gender-male" className="font-normal cursor-pointer">Male</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="gender-prefer-not"
                    name="gender"
                    value="prefer-not-to-say"
                    checked={formData.studentGender === 'prefer-not-to-say'}
                    onChange={(e) => handleInputChange('studentGender', e.target.value)}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="gender-prefer-not" className="font-normal cursor-pointer">Prefer not to say</Label>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="schoolAttended">School Student Attends *</Label>
              <Input
                id="schoolAttended"
                value={formData.schoolAttended}
                onChange={(e) => handleInputChange('schoolAttended', e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="areaOfResidence">Area of Residence *</Label>
              <Input
                id="areaOfResidence"
                placeholder="Example: Lihue, Kapaa, Wailua, Koloa, Waimea, Hanapepe, Other"
                value={formData.areaOfResidence}
                onChange={(e) => handleInputChange('areaOfResidence', e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Example options: Lihue, Kapaa, Wailua, Koloa, Waimea, Hanapepe, Other
              </p>
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="parentGuardianName">Parent/Guardian Name *</Label>
                  <Input
                    id="parentGuardianName"
                    value={formData.parentGuardianName}
                    onChange={(e) => handleInputChange('parentGuardianName', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 1: // Program Interest
        return (
          <div className="space-y-6">
            <div>
              <Label className="mb-3 block">Which class/program are you applying for? *</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="program-saturday"
                    checked={formData.programsAppliedFor.includes('Saturday Gymnastics Class')}
                    onCheckedChange={(checked) => handleMultiCheckboxChange('programsAppliedFor', 'Saturday Gymnastics Class', checked as boolean)}
                  />
                  <Label htmlFor="program-saturday" className="font-normal cursor-pointer">Saturday Gymnastics Class</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="program-tuesday"
                    checked={formData.programsAppliedFor.includes('Tuesday Gymnastics Class')}
                    onCheckedChange={(checked) => handleMultiCheckboxChange('programsAppliedFor', 'Tuesday Gymnastics Class', checked as boolean)}
                  />
                  <Label htmlFor="program-tuesday" className="font-normal cursor-pointer">Tuesday Gymnastics Class</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="program-future"
                    checked={formData.programsAppliedFor.includes('Other / Future Program')}
                    onCheckedChange={(checked) => handleMultiCheckboxChange('programsAppliedFor', 'Other / Future Program', checked as boolean)}
                  />
                  <Label htmlFor="program-future" className="font-normal cursor-pointer">Other / Future Program</Label>
                </div>
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Is the student currently enrolled in CLC Gymnastics Academy? *</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="enrolled-yes"
                    name="currently-enrolled"
                    value="yes"
                    checked={formData.currentlyEnrolled === 'yes'}
                    onChange={(e) => handleInputChange('currentlyEnrolled', e.target.value)}
                    className="w-4 h-4"
                    required
                  />
                  <Label htmlFor="enrolled-yes" className="font-normal cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="enrolled-no"
                    name="currently-enrolled"
                    value="no"
                    checked={formData.currentlyEnrolled === 'no'}
                    onChange={(e) => handleInputChange('currentlyEnrolled', e.target.value)}
                    className="w-4 h-4"
                    required
                  />
                  <Label htmlFor="enrolled-no" className="font-normal cursor-pointer">No</Label>
                </div>
              </div>
            </div>
          </div>
        )

      case 2: // Household Information
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="householdSize">Number of people in household *</Label>
              <Input
                id="householdSize"
                type="number"
                min="1"
                value={formData.householdSize}
                onChange={(e) => handleInputChange('householdSize', e.target.value)}
                required
              />
            </div>

            <div>
              <Label className="mb-3 block">Are there multiple children participating in CLC programs? *</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="multiple-yes"
                    name="multiple-children"
                    value="yes"
                    checked={formData.multipleChildren === 'yes'}
                    onChange={(e) => handleInputChange('multipleChildren', e.target.value)}
                    className="w-4 h-4"
                    required
                  />
                  <Label htmlFor="multiple-yes" className="font-normal cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="multiple-no"
                    name="multiple-children"
                    value="no"
                    checked={formData.multipleChildren === 'no'}
                    onChange={(e) => handleInputChange('multipleChildren', e.target.value)}
                    className="w-4 h-4"
                    required
                  />
                  <Label htmlFor="multiple-no" className="font-normal cursor-pointer">No</Label>
                </div>
              </div>
            </div>

            {formData.multipleChildren === 'yes' && (
              <div>
                <Label htmlFor="otherChildrenNames">If yes, please list their names</Label>
                <textarea
                  id="otherChildrenNames"
                  value={formData.otherChildrenNames}
                  onChange={(e) => handleInputChange('otherChildrenNames', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}
          </div>
        )

      case 3: // Financial Need
        return (
          <div className="space-y-6">
            <div className="bg-primary/5 border-l-4 border-primary p-4 mb-6">
              <p className="text-sm font-semibold">Section 4 — Financial Need</p>
              <p className="text-sm text-muted-foreground mt-1">All Required fields.</p>
            </div>

            <div>
              <Label htmlFor="financialNeedExplanation" className="font-semibold">
                Please briefly share why scholarship assistance would help your child participate in this program. *
              </Label>
              <textarea
                id="financialNeedExplanation"
                value={formData.financialNeedExplanation}
                onChange={(e) => handleInputChange('financialNeedExplanation', e.target.value)}
                placeholder="(Open text box)"
                rows={5}
                className="w-full mt-2 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <Label htmlFor="youthBenefitExplanation" className="font-semibold">
                How would participating in gymnastics benefit your child? *
              </Label>
              <p className="text-xs text-muted-foreground mt-1">
                Examples may include increased confidence, physical activity, discipline, personal, focus or personal development.
              </p>
              <textarea
                id="youthBenefitExplanation"
                value={formData.youthBenefitExplanation}
                onChange={(e) => handleInputChange('youthBenefitExplanation', e.target.value)}
                placeholder="(Open text box)"
                rows={5}
                className="w-full mt-2 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>
        )

      case 4: // Family Contribution
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 border-l-4 border-secondary p-4 mb-6">
              <p className="text-sm font-semibold">Section 5 — Family Contribution</p>
              <p className="text-sm text-muted-foreground mt-1">
                Scholarships may be full or partial depending on available funding.
              </p>
            </div>

            <div>
              <Label className="mb-3 block font-semibold">
                If offered a scholarship, what monthly amount could your family contribute toward tuition? *
              </Label>
              <div className="space-y-2">
                {['$0', '$25', '$50', '$75', 'Full tuition'].map((amount) => (
                  <div key={amount} className="flex items-center gap-2">
                    <input
                      type="radio"
                      id={`contribution-${amount}`}
                      name="family-contribution"
                      value={amount}
                      checked={formData.familyContribution === amount}
                      onChange={(e) => handleInputChange('familyContribution', e.target.value)}
                      className="w-4 h-4"
                      required
                    />
                    <Label htmlFor={`contribution-${amount}`} className="font-normal cursor-pointer">{amount}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 5: // Acknowledgments
        return (
          <div className="space-y-6">
            <div className="bg-primary/5 border-l-4 border-primary p-4 mb-6">
              <p className="text-sm font-semibold">Section 6 — Acknowledgments</p>
              <p className="text-sm text-muted-foreground mt-1">
                Please review and acknowledge the following statements.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Checkbox
                  id="cert-info"
                  checked={formData.certificationAcknowledged}
                  onCheckedChange={(checked) => handleCheckboxChange('certificationAcknowledged', checked as boolean)}
                  required
                />
                <div>
                  <Label htmlFor="cert-info" className="font-semibold cursor-pointer">Certification of Information</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    I certify that the information provided in this application is accurate to the best of my knowledge.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Checkbox
                  id="scholarship-availability"
                  checked={formData.scholarshipAvailabilityAcknowledged}
                  onCheckedChange={(checked) => handleCheckboxChange('scholarshipAvailabilityAcknowledged', checked as boolean)}
                  required
                />
                <div>
                  <Label htmlFor="scholarship-availability" className="font-semibold cursor-pointer">Scholarship Availability</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    I understand scholarships are limited and awarded based on available funding and program capacity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Checkbox
                  id="program-commitment"
                  checked={formData.programCommitmentAcknowledged}
                  onCheckedChange={(checked) => handleCheckboxChange('programCommitmentAcknowledged', checked as boolean)}
                  required
                />
                <div>
                  <Label htmlFor="program-commitment" className="font-semibold cursor-pointer">Program Commitment</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    If awarded a scholarship, my child is expected to attend classes regularly and follow CLC program guidelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Checkbox
                  id="renewal-understanding"
                  checked={formData.renewalUnderstandingAcknowledged}
                  onCheckedChange={(checked) => handleCheckboxChange('renewalUnderstandingAcknowledged', checked as boolean)}
                  required
                />
                <div>
                  <Label htmlFor="renewal-understanding" className="font-semibold cursor-pointer">Renewal Understanding</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    I understand scholarship awards may apply only to a specific session and may require reapplication in the future.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Checkbox
                  id="communication-consent"
                  checked={formData.communicationConsentAcknowledged}
                  onCheckedChange={(checked) => handleCheckboxChange('communicationConsentAcknowledged', checked as boolean)}
                  required
                />
                <div>
                  <Label htmlFor="communication-consent" className="font-semibold cursor-pointer">Communication Consent</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    I agree to be contacted regarding this application and related program information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border-2 border-primary/20 bg-primary/5 rounded-lg">
                <Checkbox
                  id="financial-data-consent"
                  checked={formData.financialDataConsentAcknowledged}
                  onCheckedChange={(checked) => handleCheckboxChange('financialDataConsentAcknowledged', checked as boolean)}
                  required
                />
                <div>
                  <Label htmlFor="financial-data-consent" className="font-semibold cursor-pointer text-primary">
                    Financial Data Processing Consent *
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    I consent to the processing of sensitive financial documents for scholarship review purposes. 
                    I understand that financial information remains strictly confidential and will be securely 
                    deleted 30 days after the application decision. See our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline" target="_blank">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 6: // Referral Source
        return (
          <div className="space-y-6">
            <div>
              <Label className="mb-3 block font-semibold">How did you hear about CLC Gymnastics Academy? *</Label>
              <div className="space-y-2">
                {['School', 'Friend / Family', 'Social Media', 'Community Event', 'Other'].map((source) => (
                  <div key={source} className="flex items-center gap-2">
                    <Checkbox
                      id={`referral-${source}`}
                      checked={formData.referralSource.includes(source)}
                      onCheckedChange={(checked) => handleMultiCheckboxChange('referralSource', source, checked as boolean)}
                    />
                    <Label htmlFor={`referral-${source}`} className="font-normal cursor-pointer">{source}</Label>
                  </div>
                ))}
              </div>
            </div>

            {formData.referralSource.includes('Other') && (
              <div>
                <Label htmlFor="referralOther">Please specify</Label>
                <Input
                  id="referralOther"
                  value={formData.referralOther}
                  onChange={(e) => handleInputChange('referralOther', e.target.value)}
                  placeholder="How did you hear about us?"
                />
              </div>
            )}
          </div>
        )

      case 7: // Income Verification
        return (
          <div className="space-y-6">
            <div className="bg-primary/5 border-l-4 border-primary p-4 mb-6">
              <p className="text-sm font-semibold">Section 8 — Income Verification</p>
              <p className="text-sm text-muted-foreground mt-1">
                To help verify eligibility for the scholarship program, please upload one document showing 
                household income or assistance eligibility.
              </p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="text-yellow-600 font-bold text-lg">⚠️</div>
                <div className="space-y-2 text-sm">
                  <p className="font-bold text-yellow-900">
                    Please redact (black out) all Social Security Numbers and any non-essential identifying numbers 
                    before uploading documents.
                  </p>
                  <p className="text-yellow-800">
                    Applications containing unredacted Social Security Numbers may be rejected and returned for resubmission.
                  </p>
                  <p className="text-yellow-800">
                    Acceptable documents include redacted tax returns, pay stubs, or benefit letters showing income only.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Label className="font-semibold mb-2 block">Accepted documents include:</Label>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                <li>Most recent tax return (first page only)</li>
                <li>Recent pay stub</li>
                <li>SNAP / EBT eligibility letter</li>
                <li>Free or Reduced School Lunch eligibility letter</li>
                <li>SSI / disability income letter</li>
                <li>Other official documentation showing household income</li>
              </ul>
            </div>

            <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-muted/30">
              <div className="text-center">
                <Upload className="h-12 w-12 mx-auto text-primary mb-4" />
                <Label htmlFor="file-upload" className="font-semibold mb-2 block cursor-pointer">
                  Upload File *
                </Label>
                <p className="text-sm text-muted-foreground mb-4">
                  Accepted formats: PDF, JPG, PNG<br />
                  Maximum 3 files, 5MB each
                </p>
                <input
                  ref={fileInputRef}
                  id="file-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  required={formData.incomeVerificationFiles.length === 0}
                />
                <Button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                >
                  Choose Files
                </Button>
              </div>
            </div>

            {formData.incomeVerificationFiles.length > 0 && (
              <div className="space-y-2">
                <Label className="font-semibold">Selected Files:</Label>
                {formData.incomeVerificationFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-background">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{file.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {formData.incomeVerificationFiles.length > 0 && (
              <div className="border-2 border-primary rounded-lg p-4 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="documentsRedactedConfirmed"
                    checked={formData.documentsRedactedConfirmed}
                    onCheckedChange={(checked) => handleCheckboxChange('documentsRedactedConfirmed', checked as boolean)}
                  />
                  <Label 
                    htmlFor="documentsRedactedConfirmed" 
                    className="text-sm cursor-pointer leading-relaxed"
                  >
                    I confirm that all uploaded documents have Social Security Numbers and sensitive identifiers redacted. *
                  </Label>
                </div>
              </div>
            )}

            <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">Confidentiality Notice:</p>
              <p>
                Financial documents are used only to review scholarship eligibility and will remain confidential. 
                Documents will be securely deleted 30 days after the application decision.
              </p>
            </div>
          </div>
        )

      case 8: // Review & Signature
        return (
          <div className="space-y-6">
            <div className="bg-primary/5 border-l-4 border-primary p-4 mb-6">
              <p className="text-sm font-semibold">Section 9 — Signature</p>
              <p className="text-sm text-muted-foreground mt-1">
                Please review your application and provide your signature below.
              </p>
            </div>

            {/* Application Summary */}
            <div className="bg-muted/30 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-lg mb-4">Application Summary</h3>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-muted-foreground">Student Name:</p>
                  <p>{formData.studentName || "(Not provided)"}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Date of Birth:</p>
                  <p>{formData.studentDob || "(Not provided)"}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Parent/Guardian:</p>
                  <p>{formData.parentGuardianName || "(Not provided)"}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Email:</p>
                  <p>{formData.email || "(Not provided)"}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Programs Applied For:</p>
                  <p>{formData.programsAppliedFor.join(', ') || "(Not selected)"}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Family Contribution:</p>
                  <p>{formData.familyContribution || "(Not selected)"}</p>
                </div>
              </div>
            </div>

            {/* Signature Type Selection */}
            <div>
              <Label className="font-semibold mb-3 block">Signature Method *</Label>
              <div className="flex gap-4 mb-4">
                <Button
                  type="button"
                  variant={formData.signatureType === 'typed' ? 'default' : 'outline'}
                  onClick={() => handleInputChange('signatureType', 'typed')}
                >
                  Type Name
                </Button>
                <Button
                  type="button"
                  variant={formData.signatureType === 'drawn' ? 'default' : 'outline'}
                  onClick={() => handleInputChange('signatureType', 'drawn')}
                >
                  Draw Signature
                </Button>
              </div>
            </div>

            {/* Typed Signature */}
            {formData.signatureType === 'typed' && (
              <div>
                <Label htmlFor="signatureTyped" className="font-semibold">
                  Parent/Guardian Name (Typed Signature) *
                </Label>
                <style jsx>{`
                  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');
                  #signatureTyped {
                    font-family: 'Dancing Script', cursive;
                    font-size: 28px;
                    font-weight: 600;
                    color: #1e40af;
                  }
                `}</style>
                <Input
                  id="signatureTyped"
                  value={formData.signatureTyped}
                  onChange={(e) => handleInputChange('signatureTyped', e.target.value)}
                  placeholder="Type your full legal name"
                  required
                  className="mt-2"
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '28px',
                    fontWeight: 600,
                    color: '#1e40af'
                  }}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  By typing your name, you certify that all information provided is accurate and agree to the 
                  terms outlined in this application. Timestamp: {new Date().toLocaleString()}
                </p>
              </div>
            )}

            {/* Drawn Signature */}
            {formData.signatureType === 'drawn' && (
              <div>
                <Label className="font-semibold mb-2 block">Draw Your Signature *</Label>
                <div className="border-2 border-primary/30 rounded-lg bg-white">
                  <SignatureCanvas
                    ref={signatureCanvasRef}
                    canvasProps={{
                      className: 'w-full h-48 cursor-crosshair',
                    }}
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={clearSignature}
                  >
                    Clear Signature
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  By signing above, you certify that all information provided is accurate and agree to the 
                  terms outlined in this application. Timestamp: {new Date().toLocaleString()}
                </p>
              </div>
            )}

            <div>
              <Label htmlFor="signatureDate">Date *</Label>
              <Input
                id="signatureDate"
                type="date"
                value={formData.signatureDate}
                onChange={(e) => handleInputChange('signatureDate', e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                required
                className="mt-2"
              />
            </div>

            <div className="bg-muted/50 p-4 rounded-lg text-sm">
              <p className="font-semibold mb-2">Submit Application</p>
              <p className="text-muted-foreground mb-2">
                Applications will be reviewed and families will be notified once decisions are made.
              </p>
              <p className="text-muted-foreground">
                Mahalo for your interest in CLC Gymnastics Academy and for supporting youth participation in athletics.
              </p>
            </div>

            <div className="flex items-start gap-3 p-4 border-2 border-primary rounded-lg bg-primary/5">
              <div>
                <p className="text-sm">
                  By submitting this application, you acknowledge that you have read and agree to our{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline font-semibold" target="_blank">
                    Privacy Policy
                  </Link>
                  {" "}and{" "}
                  <Link href="/terms" className="text-primary hover:underline font-semibold" target="_blank">
                    Terms & Conditions
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Card className="border-2">
      <CardHeader>
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">
              Step {currentStep + 1} of {STEPS.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentStep + 1) / STEPS.length) * 100)}% Complete
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>

        <CardTitle className="text-2xl">
          {STEPS[currentStep]}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={(e) => { e.preventDefault(); if (currentStep === STEPS.length - 1) handleSubmit() }}>
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            {currentStep < STEPS.length - 1 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={
                  (currentStep === 5 && !(
                    formData.certificationAcknowledged &&
                    formData.scholarshipAvailabilityAcknowledged &&
                    formData.programCommitmentAcknowledged &&
                    formData.renewalUnderstandingAcknowledged &&
                    formData.communicationConsentAcknowledged &&
                    formData.financialDataConsentAcknowledged
                  )) ||
                  (currentStep === 7 && !(
                    formData.incomeVerificationFiles.length > 0 &&
                    formData.documentsRedactedConfirmed
                  ))
                }
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="bg-primary">
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
