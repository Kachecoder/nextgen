"use server"

interface BeehiivSubscribeResult {
  success: boolean
  message: string
  error?: string
}

export async function subscribeToBeehiiv(formData: FormData): Promise<BeehiivSubscribeResult> {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Updated with correct Beehiiv publication ID format
  // You'll need to get the correct pub_* ID from your Beehiiv dashboard
  const publicationId = "pub_539554b2-50d1-4e40-9105-82b77d9b518b" // This should match your iframe URL
  const apiKey = "SiM9KdVXavlEXJCJjkjtv0p3uBRLzZDYxwbPkXJEsBtKj6unMUHW5rGG1wd5G9NU"

  try {
    console.log("Attempting to subscribe email to Beehiiv:", email)

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: true,
        send_welcome_email: true,
      }),
    })

    const responseData = await response.json()
    console.log("Beehiiv API response:", response.status, responseData)

    if (response.ok) {
      return {
        success: true,
        message: "Success! Check your email for the download link.",
      }
    } else {
      // Handle specific error cases
      if (response.status === 400 && responseData.message?.includes("already exists")) {
        return {
          success: true,
          message: "You're already subscribed! Check your email for the guide.",
        }
      }

      return {
        success: false,
        message: "Subscription failed. Please try again.",
        error: responseData.message || `HTTP ${response.status}`,
      }
    }
  } catch (error) {
    console.error("Beehiiv subscription error:", error)
    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
