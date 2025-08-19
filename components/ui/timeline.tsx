"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data = [] }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (ref.current && isClient) {
      try {
        const rect = ref.current.getBoundingClientRect()
        setHeight(rect.height)
      } catch (error) {
        console.warn("Error getting timeline height:", error)
        setHeight(0)
      }
    }
  }, [ref, isClient, data])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  // Fallback if no data
  if (!data || data.length === 0) {
    return (
      <section className="w-full bg-[#0f0f0f] text-white font-body md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6 text-center">How NextGenPLR Works</h2>
          <p className="text-[#B7B7B7] text-sm md:text-base text-center max-w-2xl mx-auto">
            Loading timeline content...
          </p>
        </div>
      </section>
    )
  }

  if (!isClient) {
    return (
      <section className="w-full bg-[#0f0f0f] text-white font-body md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6 text-center">How NextGenPLR Works</h2>
          <p className="text-[#B7B7B7] text-sm md:text-base text-center max-w-2xl mx-auto">
            Ready to go from idea to launch without starting from scratch? NextGenPLR gives you everything you need to
            pick a product, make it your own, and start growing — fast.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full bg-[#0f0f0f] text-white font-body md:px-10 overflow-hidden" ref={containerRef} id="how">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6 text-center">How NextGenPLR Works</h2>
        <p className="text-[#B7B7B7] text-sm md:text-base text-center max-w-2xl mx-auto">
          Ready to go from idea to launch without starting from scratch? NextGenPLR gives you everything you need to
          pick a product, make it your own, and start growing — fast.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          if (!item || !item.title) return null

          return (
            <div key={`timeline-${index}-${item.title}`} className="flex justify-start pt-10 md:pt-32 md:gap-10">
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#0f0f0f] flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-[#2e2e2e] border border-[#8b07e7] p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-display font-extrabold text-white">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 font-display font-extrabold text-white">{item.title}</h3>
                <div className="text-[#B7B7B7] text-sm md:text-base max-w-2xl leading-relaxed">
                  {item.content || <p>Content loading...</p>}
                </div>
              </div>
            </div>
          )
        })}

        {/* Scroll line */}
        {height > 0 && (
          <div
            style={{ height: height + "px" }}
            className="absolute md:left-8 left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-[#2e2e2e] to-transparent mask-gradient"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#8b07e7] via-[#0096b1] to-transparent rounded-full"
            />
          </div>
        )}
      </div>
    </section>
  )
}
