import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ReslivinCorePillars from "@/components/reslivin-core-pillars"
import ReslivinHowItWorks from "@/components/reslivin-how-it-works"
import ReslivinQuickStartGuide from "@/components/reslivin-quick-start-guide"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import { ErrorBoundary } from "@/components/error-boundary"
import LampDemo from "@/components/lamp-demo"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ErrorBoundary>
        <ParticleBackground />
      </ErrorBoundary>

      <div className="relative z-10">
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>

        <ErrorBoundary>
          <LampDemo />
        </ErrorBoundary>

        <ErrorBoundary>
          <ReslivinCorePillars />
        </ErrorBoundary>

        <ErrorBoundary>
          <ReslivinHowItWorks />
        </ErrorBoundary>

        <ErrorBoundary>
          <ReslivinQuickStartGuide />
        </ErrorBoundary>

        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </div>
  )
}
