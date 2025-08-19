import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import BlogHero from "@/components/blog/blog-hero"
import BlogCategories from "@/components/blog/blog-categories"
import BlogGrid from "@/components/blog/blog-grid"
import BlogSidebar from "@/components/blog/blog-sidebar"
import BlogNewsletter from "@/components/blog/blog-newsletter"

export default function BlogPage() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />
        <BlogHero />
        <BlogCategories />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-2/3">
                <BlogGrid />
              </div>
              <div className="w-full lg:w-1/3">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </section>

        <BlogNewsletter />
        <Footer />
      </div>
    </div>
  )
}
