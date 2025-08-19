// Test script to verify Beehiiv API integration
async function testBeehiivIntegration() {
  const testEmail = "test@example.com"
  const publicationId = "3c277f79-420e-4e62-9817-c3250b538b9c"
  const apiKey = "SiM9KdVXavlEXJCJjkjtv0p3uBRLzZDYxwbPkXJEsBtKj6unMUHW5rGG1wd5G9NU"

  console.log("🧪 Testing Beehiiv API Integration...")
  console.log(`📧 Test email: ${testEmail}`)
  console.log(`📋 Publication ID: ${publicationId}`)

  try {
    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: testEmail,
        reactivate_existing: false,
        send_welcome_email: true,
      }),
    })

    console.log(`📊 Response Status: ${response.status} ${response.statusText}`)

    const responseData = await response.json()
    console.log("📄 Response Data:", JSON.stringify(responseData, null, 2))

    if (response.ok) {
      console.log("✅ SUCCESS: Email subscription worked!")
      console.log("🎉 The form integration should work correctly")

      // Test getting the subscription to verify it was created
      console.log("\n🔍 Verifying subscription was created...")
      const verifyResponse = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })

      if (verifyResponse.ok) {
        const subscriptions = await verifyResponse.json()
        console.log("📋 Recent subscriptions:", subscriptions)
      }
    } else {
      console.log("❌ ERROR: Subscription failed")
      console.log("🔧 Possible issues:")

      if (response.status === 401) {
        console.log("   - Invalid API key")
      } else if (response.status === 404) {
        console.log("   - Invalid publication ID")
      } else if (response.status === 400) {
        console.log("   - Invalid request format or email already exists")
      } else {
        console.log(`   - HTTP ${response.status}: ${responseData.message || "Unknown error"}`)
      }
    }
  } catch (error) {
    console.log("💥 NETWORK ERROR:", error.message)
    console.log("🔧 Possible issues:")
    console.log("   - Network connectivity")
    console.log("   - CORS policy (if running from browser)")
    console.log("   - API endpoint changed")
  }
}

// Run the test
testBeehiivIntegration()
