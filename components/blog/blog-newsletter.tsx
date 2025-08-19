import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BlogNewsletter() {
  return (
    <section className="py-16 bg-[#f0eadb] relative overflow-hidden circuit-pattern">
      {/* Abstract shape */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[400px] h-[400px] opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="url(#newsletter-gradient)"
            d="M45.7,-77.2C58.9,-69.2,69.2,-55.3,76.9,-40.5C84.6,-25.7,89.7,-9.9,87.7,5C85.7,19.9,76.7,33.9,66.4,46.3C56.1,58.7,44.6,69.5,31.1,75.3C17.6,81.1,2.2,81.9,-13.9,79.5C-30,77.1,-46.8,71.5,-59.2,60.8C-71.6,50.1,-79.6,34.3,-83.1,17.5C-86.6,0.7,-85.6,-17.1,-78.9,-31.6C-72.2,-46.1,-59.8,-57.3,-46,-66.1C-32.2,-74.9,-16.1,-81.3,0.5,-82.1C17.1,-82.9,32.5,-85.2,45.7,-77.2Z"
            transform="translate(100 100)"
          />
          <defs>
            <linearGradient id="newsletter-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D1C1" />
              <stop offset="50%" stopColor="#FF5A5F" />
              <stop offset="100%" stopColor="#FFD166" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl font-black mb-4 font-poppins">
            <span className="bg-gradient-tech bg-clip-text text-transparent">Subscribe to Our Newsletter</span>
          </h2>
          <p className="text-lg text-[#535353] mb-8 font-inter">
            Get the latest insights, strategies, and success stories delivered straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-[#262626] border-white/10 h-12" />
            <Button className="bg-accent text-accent-foreground hover:opacity-90 transition-all duration-300 btn-hover-lift h-12 whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-4 font-inter">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
