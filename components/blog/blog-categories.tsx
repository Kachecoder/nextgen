"use client"

import { useState } from "react"

const categories = [
  { id: "all", name: "All Posts" },
  { id: "affiliate", name: "Affiliate Marketing" },
  { id: "ai-tools", name: "AI Tools" },
  { id: "passive-income", name: "Passive Income" },
  { id: "content", name: "Content Creation" },
  { id: "digital-products", name: "Digital Products" },
]

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-8 bg-[#d9d9d9] border-y border-[#B7B7B7]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-tech text-white btn-hover-lift"
                  : "bg-[#f0eadb] text-[#535353] hover:text-[#0096b1] border border-[#B7B7B7]/20"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
