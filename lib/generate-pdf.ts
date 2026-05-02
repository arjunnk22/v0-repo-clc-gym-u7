import { jsPDF } from 'jspdf'

interface ScholarshipData {
  studentName: string
  studentDob: string
  studentGender: string
  schoolAttended: string
  areaOfResidence: string
  parentGuardianName: string
  email: string
  phone: string
  programsAppliedFor: string[]
  currentlyEnrolled: string
  householdSize: string
  multipleChildren: string
  otherChildrenNames: string
  financialNeedExplanation: string
  youthBenefitExplanation: string
  familyContribution: string
  acknowledgments: string[]
  referralSource: string[]
  referralOther: string
  fileNames: string
  signatureType: string
  signatureTyped: string
  signatureDrawn: string
  signatureDate: string
}

export async function generateScholarshipPDF(data: ScholarshipData): Promise<Buffer> {
  const doc = new jsPDF()
  let yPos = 20
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const leftMargin = 20
  const rightMargin = pageWidth - 20
  const contentWidth = rightMargin - leftMargin

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number = 20) => {
    if (yPos > pageHeight - 30 - requiredSpace) {
      doc.addPage()
      yPos = 20
    }
  }

  // Helper function to add section title
  const addSectionTitle = (title: string) => {
    checkNewPage(15)
    doc.setFillColor(37, 99, 235)
    doc.rect(leftMargin, yPos, contentWidth, 10, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text(title, leftMargin + 3, yPos + 7)
    doc.setTextColor(0, 0, 0)
    yPos += 15
  }

  // Helper function to add field
  const addField = (label: string, value: string, largeText: boolean = false) => {
    checkNewPage(largeText ? 40 : 15)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(100, 116, 139)
    doc.text(label.toUpperCase(), leftMargin, yPos)
    yPos += 5
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(30, 41, 59)
    const lines = doc.splitTextToSize(value, contentWidth)
    doc.text(lines, leftMargin, yPos)
    yPos += (lines.length * 5) + 3
  }

  // Header
  doc.setFillColor(37, 99, 235)
  doc.rect(0, 0, pageWidth, 35, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.text("CLC GYMNASTICS ACADEMY", pageWidth / 2, 15, { align: 'center' })
  doc.setFontSize(14)
  doc.setFont('helvetica', 'normal')
  doc.text("Scholarship Application", pageWidth / 2, 23, { align: 'center' })
  doc.setFontSize(9)
  doc.text(`Submitted: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth / 2, 30, { align: 'center' })
  
  doc.setTextColor(0, 0, 0)
  yPos = 45

  // Section 1 - Student Information
  addSectionTitle('Section 1 — Student Information')
  addField('Student Name', data.studentName)
  addField('Date of Birth', new Date(data.studentDob).toLocaleDateString())
  if (data.studentGender && data.studentGender !== 'prefer-not-to-say') {
    addField('Gender', data.studentGender.charAt(0).toUpperCase() + data.studentGender.slice(1))
  }
  addField('School Attended', data.schoolAttended)
  addField('Area of Residence', data.areaOfResidence)

  // Contact Information
  addSectionTitle('Contact Information')
  addField('Parent/Guardian Name', data.parentGuardianName)
  addField('Email Address', data.email)
  addField('Phone Number', data.phone)

  // Section 2 - Program Interest
  addSectionTitle('Section 2 — Program Interest')
  addField('Programs Applied For', data.programsAppliedFor.join(', '))
  addField('Currently Enrolled', data.currentlyEnrolled === 'yes' ? 'Yes' : 'No')

  // Section 3 - Household Information
  addSectionTitle('Section 3 — Household Information')
  addField('Household Size', `${data.householdSize} people`)
  addField('Multiple Children in Program', data.multipleChildren === 'yes' ? 'Yes' : 'No')
  if (data.otherChildrenNames && data.otherChildrenNames !== 'N/A') {
    addField('Other Children Names', data.otherChildrenNames)
  }

  // Section 4 - Financial Need
  addSectionTitle('Section 4 — Financial Need')
  addField('Why scholarship assistance would help', data.financialNeedExplanation, true)
  addField('How gymnastics would benefit the child', data.youthBenefitExplanation, true)

  // Section 5 - Family Contribution
  addSectionTitle('Section 5 — Family Contribution')
  addField('Monthly Contribution Amount', data.familyContribution)

  // Section 6 - Acknowledgments
  addSectionTitle('Section 6 — Acknowledgments')
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('The applicant acknowledges and agrees to the following:', leftMargin, yPos)
  yPos += 7
  
  data.acknowledgments.forEach((ack) => {
    checkNewPage(15)
    doc.setTextColor(34, 197, 94)
    doc.setFont('helvetica', 'bold')
    doc.text('✓', leftMargin, yPos)
    doc.setTextColor(30, 41, 59)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    const lines = doc.splitTextToSize(ack, contentWidth - 5)
    doc.text(lines, leftMargin + 5, yPos)
    yPos += (lines.length * 4.5) + 2
  })
  yPos += 5

  // Section 7 - Referral Source
  addSectionTitle('Section 7 — Referral Source')
  addField('How did you hear about CLC?', data.referralSource.join(', ') + (data.referralOther ? ` - ${data.referralOther}` : ''))

  // Section 8 - Income Verification
  addSectionTitle('Section 8 — Income Verification')
  addField('Files Uploaded', data.fileNames || 'None')
  doc.setFontSize(8)
  doc.setTextColor(100, 116, 139)
  const noteLines = doc.splitTextToSize('Note: Financial documents remain confidential and will be securely deleted 30 days after application decision.', contentWidth)
  doc.text(noteLines, leftMargin, yPos)
  yPos += (noteLines.length * 4) + 10

  // Section 9 - Signature Box
  checkNewPage(60)
  doc.setFillColor(248, 250, 252)
  doc.setDrawColor(37, 99, 235)
  doc.setLineWidth(1)
  const boxStartY = yPos
  doc.rect(leftMargin, yPos, contentWidth, 55, 'FD')
  yPos += 5
  
  doc.setFillColor(37, 99, 235)
  doc.rect(leftMargin, yPos, contentWidth, 8, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Section 9 — Signature', leftMargin + 3, yPos + 6)
  yPos += 13
  
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  const certText = doc.splitTextToSize('By signing below, I certify that all information provided is accurate and agree to the terms outlined above.', contentWidth - 6)
  doc.text(certText, leftMargin + 3, yPos)
  yPos += (certText.length * 4.5) + 5

  // Add signature
  if (data.signatureType === 'typed' && data.signatureTyped) {
    doc.setFont('times', 'bolditalic')
    doc.setFontSize(24)
    doc.setTextColor(30, 64, 175)
    doc.text(data.signatureTyped, leftMargin + 3, yPos)
    yPos += 12
  } else if (data.signatureDrawn) {
    try {
      doc.addImage(data.signatureDrawn, 'PNG', leftMargin + 3, yPos, 70, 18)
      yPos += 20
    } catch (e) {
      doc.setFontSize(10)
      doc.setTextColor(100, 116, 139)
      doc.text('[Digital Signature]', leftMargin + 3, yPos)
      yPos += 12
    }
  }

  // Signature details
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(100, 116, 139)
  doc.text(`Date: ${new Date(data.signatureDate).toLocaleDateString()}`, leftMargin + 3, yPos)
  doc.text(`Type: ${data.signatureType === 'typed' ? 'Typed' : 'Drawn'}`, leftMargin + 80, yPos)

  // Footer on every page
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(100, 116, 139)
    const footerY = pageHeight - 15
    doc.text("CLC's Gymnastics Academy | 501(c)(3) Nonprofit Organization", pageWidth / 2, footerY, { align: 'center' })
    doc.text("This document serves as an official record of the scholarship application", pageWidth / 2, footerY + 4, { align: 'center' })
  }

  return Buffer.from(doc.output('arraybuffer'))
}
