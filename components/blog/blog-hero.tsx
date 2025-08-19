"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredPosts = [
  {
    id: "ai-affiliate-marketing-2025",
    title: "AI Affiliate Marketing Strategies for 2025",
    excerpt:
      "Discover how AI is revolutionizing affiliate marketing and learn the top strategies for maximizing your income in 2025.",
    date: "April 12, 2025",
    author: "Alex Morgan",
    category: "Affiliate Marketing",
    image: "/ai-marketing-nexus.png",
  },
  {
    id: "passive-income-systems",
    title: "Building Passive Income Systems That Actually Work",
    excerpt: "Discover the proven frameworks for creating truly passive income streams in the digital economy.",
    date: "April 5, 2025",
    author: "Sarah Johnson",
    category: "Passive Income",
    image: "/interconnected-digital-growth.png",
  },
  {
    id: "ai-content-marketing",
    title: "AI-Powered Content Marketing: A Complete Guide",
    excerpt: "Master the art of using AI to create, distribute, and optimize your content marketing strategy.",
    date: "April 1, 2025",
    author: "Michael Chen",
    category: "Content Marketing",
    image: "/AI-Driven-Content-Strategy.png",
  },
]

export default function BlogHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredPosts.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredPosts.length - 1 : prev - 1))
  }

  const post = featuredPosts[currentSlide]

  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden circuit-pattern bg-white">
      <div className="absolute inset-0 z-0 animated-gradient-bg opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden tech-border">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-secondary text-[#535353]">
                  {post.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#535353]">{post.title}</h2>
                <div className="flex items-center text-sm text-[#535353]">
                  <span className="mr-4">By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-[400px] bg-gradient-tech opacity-20 rounded-lg blur-lg -z-10"></div>

            <div className="flex justify-between mt-4">
              <Button variant="outline" size="icon" onClick={prevSlide} className="border-white/10 hover:bg-white/5">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {featuredPosts.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-gradient-tech" : "bg-white/20"}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextSlide} className="border-white/10 hover:bg-white/5">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 font-poppins">
              <span className="bg-gradient-tech bg-clip-text text-transparent animate-gradient-wave">
                Reslivin Blog
              </span>
            </h1>
            <p className="text-lg text-[#535353] mb-8 font-inter">
              Insights, strategies, and success stories for building resilient income streams with AI. Discover the
              latest trends and proven methods to thrive in the digital economy.
            </p>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:opacity-90 transition-all duration-300 btn-hover-lift"
            >
              <Link href={`/blog/${post.id}`}>Read Featured Article</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
