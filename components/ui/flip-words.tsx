"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect, useCallback } from "react"

interface FlipWordsProps {
  words: string[]
  duration?: number
  className?: string
}

export function FlipWords({ words = [], duration = 5000, className = "" }: FlipWordsProps) {
  const [index, setIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side before starting animations
  useEffect(() => {
    setIsClient(true)
  }, [])

  const nextWord = useCallback(() => {
    if (words && words.length > 0) {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }
  }, [words])

  useEffect(() => {
    if (!isClient || !words || words.length === 0) return

    const interval = setInterval(nextWord, duration)
    return () => clearInterval(interval)
  }, [words, duration, isClient, nextWord])

  // Fallback if no words provided
  if (!words || words.length === 0) {
    return <span className={className}>Income</span>
  }

  // Don't render anything until we're on the client
  if (!isClient) {
    return <span className={className}>{words[0] || "Income"}</span>
  }

  const currentWord = words[index] || words[0] || "Income"

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={`${currentWord}-${index}`}
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              opacity: { duration: 1.2, ease: "easeInOut" },
              y: { type: "spring", stiffness: 100, damping: 25, duration: 1.5 },
              filter: { duration: 1.0, ease: "easeOut" },
            },
          }}
          exit={{
            opacity: 0,
            y: -10,
            filter: "blur(8px)",
            transition: {
              opacity: { duration: 0.5, ease: "easeInOut" },
              y: { duration: 0.5 },
              filter: { duration: 0.4 },
            },
          }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b07e7] via-[#0096b1] to-[#8b07e7] font-extrabold drop-shadow-[0_0_8px_rgba(139,7,231,0.5)] cursor-pointer hover:scale-110 transition duration-300"
          onClick={nextWord}
          title="Click to flip"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
