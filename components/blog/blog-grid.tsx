import Link from "next/link"
import Image from "next/image"
import { Calendar, User, MessageSquare } from "lucide-react"

const blogPosts = [
  {
    id: "ai-affiliate-marketing-2025",
    title: "AI Affiliate Marketing Strategies for 2025",
    excerpt:
      "Discover how AI is revolutionizing affiliate marketing and learn the top strategies for maximizing your income in 2025.",
    date: "April 12, 2025",
    author: "Alex Morgan",
    comments: 24,
    category: "Affiliate Marketing",
    image: "/ai-marketing-nexus.png",
  },
  {
    id: "passive-income-systems",
    title: "Building Passive Income Systems That Actually Work",
    excerpt: "Discover the proven frameworks for creating truly passive income streams in the digital economy.",
    date: "April 5, 2025",
    author: "Sarah Johnson",
    comments: 18,
    category: "Passive Income",
    image: "/interconnected-digital-growth.png",
  },
  {
    id: "ai-content-marketing",
    title: "AI-Powered Content Marketing: A Complete Guide",
    excerpt: "Master the art of using AI to create, distribute, and optimize your content marketing strategy.",
    date: "April 1, 2025",
    author: "Michael Chen",
    comments: 32,
    category: "Content Marketing",
    image: "/AI-Driven-Content-Strategy.png",
  },
  {
    id: "ai-product-creation",
    title: "5 AI Tools to Create Digital Products in Hours, Not Weeks",
    excerpt: "Learn how to leverage AI to create high-quality digital products quickly and efficiently.",
    date: "March 28, 2025",
    author: "Emily Rodriguez",
    comments: 15,
    category: "AI Tools",
    image: "/ai-digital-creation.png",
  },
  {
    id: "side-hustle-automation",
    title: "Automating Your Side Hustle: A Step-by-Step Guide",
    excerpt: "Learn how to set up systems that run your side business with minimal ongoing effort.",
    date: "March 22, 2025",
    author: "David Kim",
    comments: 27,
    category: "Automation",
    image: "/automation-workflow.png",
  },
  {
    id: "ai-writing-tools",
    title: "The Best AI Writing Tools for Content Creators in 2025",
    excerpt: "A comprehensive comparison of the top AI writing assistants to boost your productivity.",
    date: "March 15, 2025",
    author: "Jessica Taylor",
    comments: 41,
    category: "AI Tools",
    image: "/ai-writing-tools.png",
  },
]

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogPosts.map((post, index) => (
        <article
          key={post.id}
          className="bg-[#d9d9d9] rounded-lg overflow-hidden border border-[#B7B7B7]/20 tech-border transition-all duration-300 card-hover-lift fade-in-section"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <Link href={`/blog/${post.id}`} className="block">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-[#535353]">
                  {post.category}
                </span>
              </div>
            </div>
          </Link>

          <div className="p-6">
            <Link href={`/blog/${post.id}`}>
              <h3 className="text-xl font-bold mb-3 font-poppins hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
            </Link>

            <p className="text-[#535353] text-sm mb-4 font-inter line-clamp-2">{post.excerpt}</p>

            <div className="flex flex-wrap items-center text-xs text-gray-400 gap-4">
              <div className="flex items-center">
                <User className="h-3.5 w-3.5 mr-1.5 text-primary" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1.5 text-secondary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-3.5 w-3.5 mr-1.5 text-accent" />
                <span>{post.comments} Comments</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
