"use client"
import { motion } from "motion/react"
import { LampContainer } from "@/components/ui/lamp"

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-12 text-4xl md:text-6xl font-display font-bold text-center text-white"
      >
        {"Plug-and-Profit"} <br /> {"PLR That Actually Sells"}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-xl font-display font-semibold text-left text-white max-w-2xl mt-4"
      >
        Launch your online business fast with premium PLR products, done-for-you systems, and AI-powered tools designed
        to help you earn — even if you're just starting out.
      </motion.p>
    </LampContainer>
  )
}
