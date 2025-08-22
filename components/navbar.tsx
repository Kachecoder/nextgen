import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-16 py-4 bg-[#0f0f0f] border-b border-[#2e2e2e] text-white fixed top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://synaz3xz7xc7xzre.public.blob.vercel-storage.com/NextGen%20PLR/3.png"
            alt="NextGen PLR"
            width={280}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-body font-medium">
          <a href="#pillars" className="hover:text-[#0096b1] transition">
            Our Pillars
          </a>
          <a href="#how" className="hover:text-[#0096b1] transition">
            How It Works
          </a>
          <a href="#guide" className="hover:text-[#0096b1] transition">
            Free Guide
          </a>
          <a href="/blog" className="hover:text-[#0096b1] transition">
            Blog
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 text-sm font-body items-center">
          <a href="/login" className="text-[#B7B7B7] hover:text-white transition py-2 px-4">
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}
