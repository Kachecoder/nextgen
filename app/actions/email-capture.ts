"use server"

interface EmailCaptureResult {
  success: boolean
  message: string
  downloadUrl?: string
}

export async function captureEmailAndDeliverPDF(formData: FormData): Promise<EmailCaptureResult> {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Here you would typically:
    // 1. Save email to your database
    // 2. Add to email marketing service (ConvertKit, Mailchimp, etc.)
    // 3. Send welcome email with PDF attachment

    console.log("Email captured:", email)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For now, we'll return a success with download URL
    // In production, you might send the PDF via email instead
    return {
      success: true,
      message: "Success! Your guide is ready for download.",
      downloadUrl: "/api/download-pdf", // We'll create this endpoint
    }
  } catch (error) {
    console.error("Error capturing email:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}
