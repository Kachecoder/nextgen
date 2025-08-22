import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, Linkedin, Rss, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#2e2e2e] text-white font-body py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://synaz3xz7xc7xzre.public.blob.vercel-storage.com/NextGen%20PLR/3.png"
                alt="NextGen PLR"
                width={280}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-[#B7B7B7] text-sm leading-relaxed">
              Empowering creators with AI-driven tools to build faceless, resilient income online.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="hover:text-[#0096b1] transition">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#0096b1] transition">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#0096b1] transition">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#0096b1] transition">
                <Rss className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold font-display mb-4 text-white">Explore</h3>
            <ul className="space-y-2 text-sm text-[#B7B7B7]">
              <li>
                <Link href="#pillars" className="hover:text-white">
                  Our Pillars
                </Link>
              </li>
              <li>
                <Link href="#how" className="hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#guide" className="hover:text-white">
                  Free Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold font-display mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-[#B7B7B7]">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@reslivin.co</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2e2e2e] mt-12 pt-6 text-sm text-[#B7B7B7] text-center">
          © {new Date().getFullYear()} Reslivin. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
