"use client"

import { motion } from "framer-motion"
import { FlipWords } from "@/components/ui/flip-words"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  // Words to cycle through in the FlipWords component
  const words = ["AI Automation", "Public Label Rights", "Digital Products", "Content Systems"]

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/90 mb-10 font-body">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex items-end">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: "brightness(1)" }}
          onError={(e) => {
            console.warn("Video failed to load:", e)
          }}
        >
          <source
            src="https://synaz3xz7xc7xzre.public.blob.vercel-storage.com/NextGen%20PLR/pink_wave.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 3 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="max-w-2xl mx-auto text-xl text-white/90 mb-10 font-body leading-relaxed"
        >
          Discover how <FlipWords words={words} duration={5000} className="inline text-xl font-medium" /> can unlock
          your earning potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 3 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 z-10"
        >
          <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-[#0096b1] to-[#8b07e7] hover:opacity-90 text-white transition-all duration-300 btn-hover-lift font-display">
            <span className="relative z-10">Get Your Free Guide</span>
            <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
