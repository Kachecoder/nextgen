"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle } from "lucide-react"
import { subscribeToBeehiiv } from "@/app/actions/beehiiv-subscribe"

export default function ReslivinQuickStartGuide() {
  const [isFormLoaded, setIsFormLoaded] = useState(false)
  const [showFallback, setShowFallback] = useState(true) // Start with fallback by default in production
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [iframeError, setIframeError] = useState(false)

  useEffect(() => {
    // Only try to load Beehiiv iframe if we're in development or if explicitly requested
    const shouldTryIframe = process.env.NODE_ENV === "development" || window.location.search.includes("iframe=true")

    if (shouldTryIframe) {
      setShowFallback(false)

      // Load Beehiiv embed script
      const embedScript = document.createElement("script")
      embedScript.src = "https://subscribe-forms.beehiiv.com/embed.js"
      embedScript.async = true
      embedScript.onload = () => {
        console.log("Beehiiv script loaded")
      }
      embedScript.onerror = () => {
        console.log("Beehiiv script failed to load, showing fallback")
        setIframeError(true)
        setShowFallback(true)
      }
      document.head.appendChild(embedScript)

      // Set a timeout to show fallback if iframe doesn't load
      const fallbackTimer = setTimeout(() => {
        if (!isFormLoaded) {
          console.log("Iframe timeout, showing fallback")
          setShowFallback(true)
        }
      }, 3000) // Reduced timeout for faster fallback

      return () => {
        clearTimeout(fallbackTimer)
        const existingEmbedScript = document.querySelector('script[src="https://subscribe-forms.beehiiv.com/embed.js"]')
        if (existingEmbedScript) {
          document.head.removeChild(existingEmbedScript)
        }
      }
    }
  }, [isFormLoaded])

  const handleFallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const formData = new FormData()
      formData.append("email", email)

      const result = await subscribeToBeehiiv(formData)

      if (result.success) {
        setIsSuccess(true)
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      console.error("Subscription error:", error)
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="guide" className="relative py-20 px-6 md:px-16 bg-[#0f0f0f] text-white overflow-hidden">
      {/* Background blob */}
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#0096b1] to-[#8b07e7] blur-[120px] opacity-10 z-0 animate-pulse" />

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left: Guide Cover */}
        <div className="flex justify-center">
          <img
            src="https://synaz3xz7xc7xzre.public.blob.vercel-storage.com/NextGen%20PLR/NGEN_PDF_Img.png"
            alt="Quick-Start Guide Cover"
            className="w-[300px] h-auto rounded-xl shadow-2xl drop-shadow-2xl"
          />
        </div>

        {/* Right: Form Section */}
        <div className="flex flex-col justify-center">
          {/* Form Container */}
          <div className="relative">
            {/* Beehiiv Iframe - Primary (only in development or when explicitly requested) */}
            {!showFallback && !iframeError && (
              <div className="beehiiv-form-wrapper">
                <iframe
                  src="https://subscribe-forms.beehiiv.com/539554b2-50d1-4e40-9105-82b77d9b518b"
                  className="beehiiv-embed"
                  data-test-id="beehiiv-embed"
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "275px",
                    margin: "0",
                    borderRadius: "12px",
                    backgroundColor: "transparent",
                    border: "none",
                    maxWidth: "100%",
                  }}
                  onLoad={() => {
                    setIsFormLoaded(true)
                    console.log("Beehiiv form loaded successfully")
                  }}
                  onError={() => {
                    console.log("Beehiiv form failed to load, showing fallback")
                    setIframeError(true)
                    setShowFallback(true)
                  }}
                />

                {/* Loading indicator */}
                {!isFormLoaded && (
                  <div className="absolute inset-0 bg-[#1c1c1c] rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0096b1] mx-auto mb-4"></div>
                      <p className="text-sm">Loading subscription form...</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Fallback Form - Primary in production */}
            {showFallback && (
              <div className="fallback-form bg-[#1c1c1c] rounded-xl p-8 border border-[#2e2e2e]">
                {!isSuccess ? (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 font-display text-left">Get Your Free Guide</h3>
                      <p className="text-[#B7B7B7] text-sm font-inter leading-relaxed text-left">
                        Kick off your NextGen PLR journey with actionable tools, step-by-step systems, and AI-powered
                        strategies to build income online. No fluff. No guesswork.
                      </p>
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                      <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center">
                        <AlertCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        <p className="text-red-400 text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <form onSubmit={handleFallbackSubmit} className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#2e2e2e] border-[#3e3e3e] text-white placeholder-[#B7B7B7] h-12"
                        required
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#0096b1] to-[#8b07e7] text-white py-3 h-12 font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Subscribing...
                          </div>
                        ) : (
                          "Get Started"
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Success!</h3>
                    <p className="text-[#B7B7B7] mb-4">
                      Thank you for subscribing! Check your email for the download link.
                    </p>
                    <Button
                      onClick={() => window.open("/api/download-pdf", "_blank")}
                      className="bg-gradient-to-r from-[#0096b1] to-[#8b07e7] text-white hover:opacity-90"
                    >
                      Download Guide Now
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          <p className="text-xs text-[#B7B7B7] mt-4 font-body text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>

          {/* Development notice */}
          {process.env.NODE_ENV === "development" && iframeError && (
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <p className="text-xs text-blue-400">
                <strong>Development Mode:</strong> Beehiiv iframe failed to load. Using fallback form connected to
                Beehiiv API.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Updated styles */}
      <style jsx global>
        {`
          .beehiiv-form-wrapper {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            background: #1c1c1c;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            min-height: 275px;
          }

          .beehiiv-form-wrapper:hover {
            transform: translateY(-2px);
          }

          .beehiiv-embed {
            border-radius: 12px !important;
            background-color: transparent !important;
            border: none !important;
            width: 100% !important;
            min-height: 275px !important;
            position: relative;
            z-index: 10;
          }

          @media (max-width: 768px) {
            .beehiiv-embed {
              min-height: 295px !important;
            }
          }

          @media (max-width: 480px) {
            .beehiiv-embed {
              min-height: 315px !important;
            }
          }
        `}
      </style>
    </section>
  )
}
