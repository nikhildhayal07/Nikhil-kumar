"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Clock, Layers, Target } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  label: string
  value: number
  suffix: string
}

export function CertificationStats() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats: Stat[] = [
    { icon: <Award className="h-6 w-6" />, label: "Certifications", value: 8, suffix: "+" },
    { icon: <Clock className="h-6 w-6" />, label: "Learning Hours", value: 100, suffix: "+" },
    { icon: <Layers className="h-6 w-6" />, label: "Learning Platforms", value: 4, suffix: "" },
    { icon: <Target className="h-6 w-6" />, label: "Core Domains", value: 3, suffix: "" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          // Animate numbers counting up
          stats.forEach((stat, index) => {
            let current = 0
            const increment = Math.ceil(stat.value / 30) // Divide into 30 steps for smooth animation
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setCounts((prev) => {
                const newCounts = [...prev]
                newCounts[index] = current
                return newCounts
              })
            }, 50) // 1.5 second total animation (30 steps * 50ms)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <div ref={sectionRef} className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative">
            {/* Icon */}
            <div className="mb-3 text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              {stat.icon}
            </div>

            {/* Count */}
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              {counts[index]}
              <span className="text-lg">{stat.suffix}</span>
            </div>

            {/* Label */}
            <p className="text-sm text-muted-foreground group-hover:text-secondary-foreground transition-colors">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
