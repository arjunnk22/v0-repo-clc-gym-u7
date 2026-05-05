import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { addRowToSheet, uploadToDrive, makeFilePublic } from '@/lib/google-sheets'
import { generateScholarshipPDF } from '@/lib/generate-pdf'

// Increase body size limit for Pro plan (allows up to 50MB)
export const runtime = 'nodejs'
export const maxDuration = 60 // 60 seconds max execution time (Pro plan)

const resend = new Resend(process.env.RESEND_API_KEY)
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID || ''
const DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || ''

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract all form fields
    const studentName = formData.get('studentName') as string
    const studentDob = formData.get('studentDob') as string
    const studentGender = formData.get('studentGender') as string
    const schoolAttended = formData.get('schoolAttended') as string
    const areaOfResidence = formData.get('areaOfResidence') as string
    const parentGuardianName = formData.get('parentGuardianName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const programsAppliedFor = JSON.parse(formData.get('programsAppliedFor') as string)
    const currentlyEnrolled = formData.get('currentlyEnrolled') as string
    const householdSize = formData.get('householdSize') as string
    const multipleChildren = formData.get('multipleChildren') as string
    const otherChildrenNames = formData.get('otherChildrenNames') as string
    const financialNeedExplanation = formData.get('financialNeedExplanation') as string
    const youthBenefitExplanation = formData.get('youthBenefitExplanation') as string
    const familyContribution = formData.get('familyContribution') as string
    const referralSource = JSON.parse(formData.get('referralSource') as string)
    const referralOther = formData.get('referralOther') as string
    const signatureType = formData.get('signatureType') as string
    const signatureTyped = formData.get('signatureTyped') as string
    const signatureDrawn = formData.get('signatureDrawn') as string
    const signatureDate = formData.get('signatureDate') as string
    
    // Get files (Drive upload disabled for demo - files are attached to emails instead)
    const files = formData.getAll('files') as File[]
    const fileLinks: string[] = []
    
    // NOTE: Google Drive upload disabled - Service Accounts don't have storage quota
    // Files are attached directly to admin emails instead
    // Uncomment below to re-enable Drive uploads (requires Shared Drive or OAuth)
    /*
    for (const file of files) {
      try {
        const uploadedFile = await uploadToDrive(file, DRIVE_FOLDER_ID)
        if (uploadedFile.id) {
          await makeFilePublic(uploadedFile.id)
          fileLinks.push(uploadedFile.webViewLink || uploadedFile.webContentLink || '')
        }
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
    */
    
    const fileNames = files.map(f => f.name).join(', ')
    const fileLinksList = fileLinks.length > 0 ? fileLinks.join('\n') : 'Files attached to email'
    
    // Build acknowledgments list
    const acknowledgments = []
    if (formData.get('certificationAcknowledged') === 'true') acknowledgments.push('Certification of Information')
    if (formData.get('scholarshipAvailabilityAcknowledged') === 'true') acknowledgments.push('Scholarship Availability')
    if (formData.get('programCommitmentAcknowledged') === 'true') acknowledgments.push('Program Commitment')
    if (formData.get('renewalUnderstandingAcknowledged') === 'true') acknowledgments.push('Renewal Understanding')
    if (formData.get('communicationConsentAcknowledged') === 'true') acknowledgments.push('Communication Consent')
    if (formData.get('financialDataConsentAcknowledged') === 'true') acknowledgments.push('Financial Data Processing Consent')

    // Create email content for admin
    const adminEmailHtml = `
      <h2>New Scholarship Application Submitted</h2>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
      
      <h3>Student Information</h3>
      <p><strong>Student Name:</strong> ${studentName}</p>
      <p><strong>Date of Birth:</strong> ${studentDob}</p>
      <p><strong>Gender:</strong> ${studentGender || 'Not specified'}</p>
      <p><strong>School:</strong> ${schoolAttended}</p>
      <p><strong>Area of Residence:</strong> ${areaOfResidence}</p>
      
      <h3>Contact Information</h3>
      <p><strong>Parent/Guardian:</strong> ${parentGuardianName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      
      <h3>Program Interest</h3>
      <p><strong>Programs Applied For:</strong> ${programsAppliedFor.join(', ')}</p>
      <p><strong>Currently Enrolled:</strong> ${currentlyEnrolled}</p>
      
      <h3>Household Information</h3>
      <p><strong>Household Size:</strong> ${householdSize}</p>
      <p><strong>Multiple Children:</strong> ${multipleChildren}</p>
      ${otherChildrenNames ? `<p><strong>Other Children:</strong> ${otherChildrenNames}</p>` : ''}
      
      <h3>Financial Need</h3>
      <p><strong>Explanation:</strong></p>
      <p>${financialNeedExplanation}</p>
      <p><strong>Benefit to Youth:</strong></p>
      <p>${youthBenefitExplanation}</p>
      
      <h3>Family Contribution</h3>
      <p><strong>Monthly Contribution:</strong> ${familyContribution}</p>
      
      <h3>Acknowledgments</h3>
      <ul>
        ${acknowledgments.map(ack => `<li>${ack}</li>`).join('')}
      </ul>
      
      <h3>Referral Source</h3>
      <p>${referralSource.join(', ')}${referralOther ? ` - ${referralOther}` : ''}</p>
      
      <h3>Income Verification</h3>
      <p><strong>Files Uploaded:</strong> ${fileNames || 'None'}</p>
      ${files.length > 0 ? '<p style="color: #2563eb;"><em>Income verification files are attached to this email</em></p>' : ''}
      
      <h3>Signature</h3>
      <p><strong>Type:</strong> ${signatureType === 'typed' ? 'Typed' : 'Drawn'}</p>
      ${signatureType === 'typed' 
        ? `<p><strong>Signature:</strong> <span style="font-family: 'Dancing Script', cursive; font-size: 28px; font-weight: 600; color: #1e40af;">${signatureTyped}</span></p>` 
        : `<p><strong>Signature:</strong> <em>See attached PDF for drawn signature</em></p>`
      }
      <p><strong>Date:</strong> ${signatureDate}</p>
    `

    // Create email content for applicant
    const applicantEmailHtml = `
      <h2>Scholarship Application Received</h2>
      <p>Dear ${parentGuardianName},</p>
      
      <p>Thank you for submitting a scholarship application for <strong>${studentName}</strong> to CLC's Gymnastics Academy.</p>
      
      <p>We have received your application and will review it carefully. Our scholarship committee will contact you 
      once decisions have been made.</p>
      
      <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0;">
        <p style="margin: 0; font-weight: bold; color: #1e40af;">📄 Your Signed Application</p>
        <p style="margin: 5px 0 0 0; font-size: 14px;">
          A copy of your signed scholarship application is attached to this email for your records. 
          This document shows all the information you submitted and your digital signature.
        </p>
      </div>
      
      <h3>What happens next:</h3>
      <ul>
        <li>Your application will be reviewed by our scholarship committee</li>
        <li>You will be notified of the decision via email</li>
        <li>If awarded, we will provide details about next steps</li>
      </ul>
      
      <p>If you have any questions, please contact us at <a href="mailto:clcsboard@gmail.com">clcsboard@gmail.com</a>.</p>
      
      <p><strong>Application Summary:</strong></p>
      <p>Student: ${studentName}<br/>
      Programs: ${programsAppliedFor.join(', ')}<br/>
      Submitted: ${new Date().toLocaleDateString()}</p>
      
      <p>Mahalo for your interest in CLC Gymnastics Academy!</p>
      
      <p>Best regards,<br/>
      CLC Gymnastics Academy</p>
    `

    // Try to generate PDF (optional - don't block emails if it fails)
    let pdfBuffer: Buffer | null = null
    let pdfFilename = ''
    
    try {
      pdfBuffer = await generateScholarshipPDF({
        studentName,
        studentDob,
        studentGender: studentGender || 'Not specified',
        schoolAttended,
        areaOfResidence,
        parentGuardianName,
        email,
        phone,
        programsAppliedFor,
        currentlyEnrolled,
        householdSize,
        multipleChildren,
        otherChildrenNames: otherChildrenNames || 'N/A',
        financialNeedExplanation,
        youthBenefitExplanation,
        familyContribution,
        acknowledgments,
        referralSource,
        referralOther: referralOther || '',
        fileNames,
        signatureType,
        signatureTyped: signatureTyped || '',
        signatureDrawn: signatureDrawn || '',
        signatureDate
      })
      pdfFilename = `Scholarship_Application_${studentName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`
    } catch (error) {
      console.error('PDF generation failed:', error)
      // Continue without PDF
    }

    // Send email to admin (with PDF and income verification files)
    try {
      // Build attachments array
      const adminAttachments: any[] = []
      
      // Add PDF if generated
      if (pdfBuffer && pdfFilename) {
        adminAttachments.push({
          filename: pdfFilename,
          content: pdfBuffer,
        })
      }
      
      // Add income verification files
      for (const file of files) {
        const fileBuffer = Buffer.from(await file.arrayBuffer())
        adminAttachments.push({
          filename: file.name,
          content: fileBuffer,
        })
      }
      
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'contact@clcgymnastics.com',
        to: process.env.RESEND_TO_EMAIL || 'clcsboard@gmail.com',
        cc: ['avatar0611@gmail.com'],
        subject: `New Scholarship Application: ${studentName}`,
        html: adminEmailHtml,
        ...(adminAttachments.length > 0 ? { attachments: adminAttachments } : {})
      })
      console.log('Admin email sent successfully')
    } catch (error) {
      console.error('Failed to send admin email:', error)
    }

    // Send confirmation email to applicant (with or without PDF)
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'contact@clcgymnastics.com',
        to: email,
        subject: 'CLC Gymnastics Academy - Scholarship Application Received',
        html: applicantEmailHtml,
        ...(pdfBuffer && pdfFilename ? {
          attachments: [{
            filename: pdfFilename,
            content: pdfBuffer,
          }]
        } : {})
      })
      console.log('Applicant email sent successfully')
    } catch (error) {
      console.error('Failed to send applicant email:', error)
    }

    // Add submission to Google Sheets with proper column mapping
    try {
      await addRowToSheet(SPREADSHEET_ID, [
        // Columns 1-6: Manual entry fields (leave empty)
        '', // Application Status
        new Date().toLocaleString(), // Submission Date
        '', // Application ID
        '', // Reviewed
        '', // Decision
        '', // Notes
        
        // Columns 7-28: Auto-filled from form
        studentName,
        studentDob,
        studentGender || 'Not specified',
        schoolAttended,
        areaOfResidence,
        parentGuardianName,
        email,
        phone,
        programsAppliedFor.join(', '),
        currentlyEnrolled,
        householdSize,
        multipleChildren,
        otherChildrenNames || 'N/A',
        financialNeedExplanation,
        youthBenefitExplanation,
        familyContribution,
        acknowledgments.join(', '),
        referralSource.join(', ') + (referralOther ? ` - ${referralOther}` : ''),
        fileNames,
        fileLinksList, // Google Drive links
        signatureType,
        signatureType === 'typed' ? signatureTyped : 'See email for drawn signature',
        signatureDate,
        
        // Columns 29-33: Manual scoring fields (leave empty)
        '', // Financial Need Score
        '', // Household Score
        '', // Priority Score
        '', // Total Score
        '', // Date Reviewed
      ])
    } catch (error) {
      console.error('Error adding to Google Sheets:', error)
      // Continue even if sheets fails - we still have email
    }

    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully'
    })

  } catch (error) {
    console.error('Scholarship submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}
