import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const popularPosts = [
  {
    id: "ai-affiliate-marketing-2025",
    title: "AI Affiliate Marketing Strategies for 2025",
    date: "April 12, 2025",
    image: "/ai-marketing-nexus.png",
  },
  {
    id: "passive-income-systems",
    title: "Building Passive Income Systems That Actually Work",
    date: "April 5, 2025",
    image: "/interconnected-digital-growth.png",
  },
  {
    id: "ai-content-marketing",
    title: "AI-Powered Content Marketing: A Complete Guide",
    date: "April 1, 2025",
    image: "/AI-Driven-Content-Strategy.png",
  },
]

const categories = [
  { name: "Affiliate Marketing", count: 12 },
  { name: "AI Tools", count: 18 },
  { name: "Passive Income", count: 9 },
  { name: "Content Creation", count: 15 },
  { name: "Digital Products", count: 7 },
]

const tags = [
  "AI",
  "Marketing",
  "Passive Income",
  "Side Hustle",
  "Automation",
  "Digital Products",
  "Content",
  "SEO",
  "Social Media",
  "Tools",
]

export default function BlogSidebar() {
  return (
    <div className="space-y-10">
      {/* Search */}
      <div className="bg-[#d9d9d9] rounded-lg p-6 border border-[#B7B7B7]/20 fade-in-section">
        <h3 className="text-lg font-bold mb-4 font-poppins">Search</h3>
        <div className="flex">
          <Input
            type="text"
            placeholder="Search articles..."
            className="bg-charcoal border-white/10 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button className="rounded-l-none bg-accent text-accent-foreground hover:bg-accent/90">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Popular Posts */}
      <div
        className="bg-[#d9d9d9] rounded-lg p-6 border border-[#B7B7B7]/20 fade-in-section"
        style={{ animationDelay: "0.1s" }}
      >
        <h3 className="text-lg font-bold mb-4 font-poppins">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="flex gap-3 group">
              <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div
        className="bg-[#d9d9d9] rounded-lg p-6 border border-[#B7B7B7]/20 fade-in-section"
        style={{ animationDelay: "0.2s" }}
      >
        <h3 className="text-lg font-bold mb-4 font-poppins">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex justify-between items-center py-2 border-b border-white/5 hover:text-primary transition-colors duration-300"
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-400">({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div
        className="bg-[#d9d9d9] rounded-lg p-6 border border-[#B7B7B7]/20 fade-in-section"
        style={{ animationDelay: "0.3s" }}
      >
        <h3 className="text-lg font-bold mb-4 font-poppins">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-3 py-1 text-xs rounded-full bg-[#f0eadb] border border-[#B7B7B7]/20 hover:bg-primary hover:border-transparent transition-all duration-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
