"use client"

import { BookOpen, Trophy, Globe, Building } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

const platforms = [
  {
    name: "Coursera",
    count: 2,
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Udemy",
    count: 4,
    icon: Trophy,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Google",
    count: 1,
    icon: Globe,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Lovely Professional University",
    count: 1,
    icon: Building,
    color: "from-primary to-primary/80",
  },
]

export function PlatformsStrip() {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {platforms.map((platform, index) => (
          <AnimatedCard key={platform.name} delay={index * 75}>
            <div className="group relative h-full p-6 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
              {/* Subtle glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Animated accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-primary/80 to-primary/50 transition-all duration-400 group-hover:w-full" />

              <div className="relative flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`p-3 rounded-lg bg-gradient-to-br ${platform.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className="h-6 w-6 text-white" />
                </div>

                {/* Platform name */}
                <h4 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
                  {platform.name}
                </h4>

                {/* Certificate count */}
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold text-primary">
                    {platform.count}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {platform.count === 1 ? "Certificate" : "Certificates"}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}
