// Enhanced debug script for Beehiiv API - Testing Current Configuration
async function debugBeehiivAPI() {
  console.log("🔍 Testing Current Beehiiv Configuration...")

  const publicationId = "3c277f79-420e-4e62-9817-c3250b538b9c"
  const apiKey = "SiM9KdVXavlEXJCJjkjtv0p3uBRLzZDYxwbPkXJEsBtKj6unMUHW5rGG1wd5G9NU"

  console.log(`📋 Publication ID: ${publicationId}`)
  console.log(`🔑 API Key: ${apiKey.substring(0, 10)}...`)

  try {
    // Test 1: Check if publication exists
    console.log("\n1️⃣ Testing publication access...")
    const pubResponse = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    })

    console.log(`📊 Publication Status: ${pubResponse.status} ${pubResponse.statusText}`)

    if (pubResponse.ok) {
      const pubData = await pubResponse.json()
      console.log("✅ Publication found!")
      console.log(`📰 Name: ${pubData.data?.name || "Unknown"}`)
      console.log(`🌐 Website: ${pubData.data?.website || "Not set"}`)
    } else {
      const errorData = await pubResponse.text()
      console.log("❌ Publication access failed:", errorData)
      return // Stop if we can't access the publication
    }

    // Test 2: Try creating a test subscription (same as server action)
    console.log("\n2️⃣ Testing subscription creation...")
    const testEmail = `test-${Date.now()}@example.com`
    console.log(`📧 Test email: ${testEmail}`)

    const createResponse = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: testEmail,
        reactivate_existing: true,
        send_welcome_email: false, // Don't send email to test address
      }),
    })

    console.log(`📊 Subscription Status: ${createResponse.status} ${createResponse.statusText}`)

    if (createResponse.ok) {
      const createData = await createResponse.json()
      console.log("✅ Subscription created successfully!")
      console.log(`🆔 Subscription ID: ${createData.data?.id}`)
      console.log(`📧 Email: ${createData.data?.email}`)
      console.log(`📅 Created: ${createData.data?.created}`)

      console.log("\n🎉 SUCCESS: The server action should work correctly!")
      console.log("✅ Both iframe and fallback form will connect to Beehiiv properly")
    } else {
      const errorData = await createResponse.text()
      console.log("❌ Subscription creation failed:", errorData)

      try {
        const errorJson = JSON.parse(errorData)
        console.log("🔍 Error details:", errorJson)

        if (createResponse.status === 400) {
          console.log("💡 This might be a validation error or duplicate email")
        } else if (createResponse.status === 401) {
          console.log("💡 API key might be invalid or expired")
        } else if (createResponse.status === 403) {
          console.log("💡 API key might not have permission for this publication")
        }
      } catch (e) {
        console.log("🔍 Raw error response:", errorData)
      }
    }

    // Test 3: Test duplicate email handling
    console.log("\n3️⃣ Testing duplicate email handling...")
    const duplicateResponse = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: testEmail, // Same email as before
        reactivate_existing: true,
        send_welcome_email: false,
      }),
    })

    console.log(`📊 Duplicate Status: ${duplicateResponse.status} ${duplicateResponse.statusText}`)

    if (duplicateResponse.ok) {
      console.log("✅ Duplicate handling works - reactivated existing subscription")
    } else {
      const dupErrorData = await duplicateResponse.text()
      console.log("ℹ️ Duplicate response:", dupErrorData)
    }
  } catch (networkError) {
    console.log("💥 Network Error:", networkError.message)
    console.log("🌐 This might be a CORS issue or network connectivity problem")
    console.log("🔧 The server action should still work since it runs on the server")
  }

  console.log("\n📋 Test Summary:")
  console.log("- If you see ✅ for publication and subscription creation, the integration will work")
  console.log("- The server action runs on the server, so CORS issues won't affect it")
  console.log("- Both the iframe and fallback form should connect to Beehiiv properly")
}

// Run the test
debugBeehiivAPI()
