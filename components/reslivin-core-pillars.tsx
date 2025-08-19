"use client"

import { motion } from "framer-motion"
import { Sparkles, ShieldCheck, Layers3 } from "lucide-react"
import { useEffect, useState } from "react"

const pillars = [
  {
    title: "Ready-to-Sell Digital Products",
    description: "Beautifully designed ebooks, workbooks, templates, and mini-courses you can customize, brand, and sell as your own — with zero writing or design required.",
    icon: <Sparkles className="w-8 h-8 text-white" />,
    glow: "from-[#0096b1] to-[#8b07e7]",
  },
  {
    title: "AI-Powered Growth Tools",
    description: "We include automation-ready prompts, marketing kits, and repurposing workflows that help you turn each product into a money-making machine.",
    icon: <Layers3 className="w-8 h-8 text-white" />,
    glow: "from-[#8b07e7] to-[#535353]",
  },
  {
    title: "Plug-and-Play Systems",
    description: "No fluff. Just proven launch strategies, sales funnels, and branding tools to help you go from zero to store-ready in days, not weeks.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    glow: "from-[#535353] to-[#0096b1]",
  },
]

export default function ReslivinCorePillars() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <section id="pillars" className="relative py-20 px-6 md:px-16 bg-[#0f0f0f] overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 relative z-10 text-balance">
         AI-Powered Growth Kit
        </h2>
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {pillars.map((pillar, index) => (
            <div key={index} className="relative bg-[#1c1c1c] rounded-xl p-6 shadow-md border border-[#2e2e2e] h-full">
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${pillar.glow} flex items-center justify-center shadow-lg mb-4`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{pillar.title}</h3>
              <p className="text-[#B7B7B7] text-sm font-body leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section id="pillars" className="relative py-20 px-6 md:px-16 bg-[#0f0f0f] overflow-hidden text-white">
      {/* Background Blob */}
      <div className="absolute -top-24 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#0096b1] to-[#8b07e7] blur-[120px] opacity-20 z-0 animate-pulse"></div>

      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 relative z-10 text-balance">
        Your NextGenPLR Blueprint
      </h2>

      <div className="grid md:grid-cols-3 gap-6 relative z-10">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
            onError={(error) => {
              console.warn("Motion error in pillar:", error)
            }}
          >
            {/* Gradient border wrapper */}
            <div
              className={`absolute -inset-0.5 bg-gradient-to-br ${pillar.glow} rounded-xl opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none transition-all duration-500 group-hover:duration-200`}
            ></div>

            {/* Card content */}
            <div className="relative bg-[#1c1c1c] rounded-xl p-6 shadow-md border border-[#2e2e2e] group-hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              {/* Hover gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pillar.glow} opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out`}
              ></div>

              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${pillar.glow} flex items-center justify-center shadow-lg group-hover:scale-110 transform transition-transform duration-300 mb-4 relative z-10`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 relative z-10">{pillar.title}</h3>
              <p className="text-[#B7B7B7] text-sm font-body leading-relaxed relative z-10">{pillar.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
