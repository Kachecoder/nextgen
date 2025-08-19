// Fixed debug script with correct publication ID format
async function debugBeehiivAPIFixed() {
  console.log("🔍 Testing Beehiiv API with Corrected Publication ID...")

  // Extract publication ID from your iframe URL: 539554b2-50d1-4e40-9105-82b77d9b518b
  // Convert to proper Beehiiv format
  const publicationId = "pub_539554b2-50d1-4e40-9105-82b77d9b518b"
  const apiKey = "SiM9KdVXavlEXJCJjkjtv0p3uBRLzZDYxwbPkXJEsBtKj6unMUHW5rGG1wd5G9NU"

  console.log(`📋 Corrected Publication ID: ${publicationId}`)
  console.log(`🔑 API Key: ${apiKey.substring(0, 10)}...`)

  try {
    // Test 1: Check if publication exists with correct format
    console.log("\n1️⃣ Testing publication access with correct ID format...")
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
      console.log(`🆔 ID: ${pubData.data?.id}`)
    } else {
      const errorData = await pubResponse.text()
      console.log("❌ Publication access failed:", errorData)

      // Try alternative: get all publications to find the correct ID
      console.log("\n🔍 Trying to list all publications to find correct ID...")
      const listResponse = await fetch("https://api.beehiiv.com/v2/publications", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      })

      if (listResponse.ok) {
        const listData = await listResponse.json()
        console.log("📋 Available publications:")
        listData.data?.forEach((pub, index) => {
          console.log(`  ${index + 1}. ${pub.name} (ID: ${pub.id})`)
        })
      }

      return // Stop if we can't access the publication
    }

    // Test 2: Try creating a test subscription
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
        send_welcome_email: false,
      }),
    })

    console.log(`📊 Subscription Status: ${createResponse.status} ${createResponse.statusText}`)

    if (createResponse.ok) {
      const createData = await createResponse.json()
      console.log("✅ Subscription created successfully!")
      console.log(`🆔 Subscription ID: ${createData.data?.id}`)
      console.log(`📧 Email: ${createData.data?.email}`)

      console.log("\n🎉 SUCCESS: The integration is working correctly!")
    } else {
      const errorData = await createResponse.text()
      console.log("❌ Subscription creation failed:", errorData)
    }
  } catch (networkError) {
    console.log("💥 Network Error:", networkError.message)
  }

  console.log("\n📋 Next Steps:")
  console.log("1. If publication access worked, the pub_ ID format is correct")
  console.log("2. Update the server action with the correct publication ID")
  console.log("3. Test the fallback form on your website")
}

// Run the fixed test
debugBeehiivAPIFixed()
