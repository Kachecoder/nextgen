"use client"

import { Timeline } from "@/components/ui/timeline"
import { Bot, Workflow, TrendingUp, Sparkles, BarChart3, Zap } from "lucide-react"

export default function ReslivinHowItWorks() {
  const timelineData = [
    {
      title: "Pick Your PLR Bundle",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Bot className="w-6 h-6 text-[#0096b1] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display font-extrabold text-white mb-1">Choose a PLR Product</h3>
              <p>
                Choose from a growing collection of premium PLR products crafted for creators and digital entrepreneurs
                ready to launch.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-[#0096b1] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display font-extrabold text-white mb-1">Customize & Launch</h3>
              <p>Edit your files, upload to your store or marketplace, and start selling.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Shape It to Fit Your Brand — Fast",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Workflow className="w-6 h-6 text-[#0096b1] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display font-extrabold text-white mb-1">Customize & Launch</h3>
              <p>
                Make it your own with simple edits, no design or tech skills required. Use our templates, brand guides,
                and step-by-step tutorials to customize fast. Add your logo, tweak the voice, and start publishing.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-[#0096b1] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display font-extrabold text-white mb-1">AI Automation Tools</h3>
              <p>
                Use our plug-and-play templates and AI-powered tools to handle the heavy lifting, from content creation
                to market research — so you can stay focused on strategy, growth, and making sales.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Market Smarter, Not Harder",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-[#0096b1] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display font-extrabold text-white mb-1">Growth Framework</h3>
              <p>
                Use our AI tools and strategies to grow traffic, increase conversions, and multiply your income streams.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BarChart3 className="w-6 h-6 text-[#0096b1] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-display font-extrabold text-white mb-1">
                Launch-Ready Social Content, Powered by AI
              </h3>
              <p>
                AI-powered prompts, prewritten copy, and ready-to-use marketing kits make it easy to promote across
                platforms. Just plug in, post, and start driving traffic without the overwhelm.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return <Timeline data={timelineData} />
}
