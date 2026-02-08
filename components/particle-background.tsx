"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  left: number
  top: number
  width: number
  height: number
  duration: number
  delay: number
  opacity: number
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Generate particles only on client side after hydration
    const generatedParticles: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: 2 + Math.random() * 3,
      height: 2 + Math.random() * 3,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
      opacity: 0.2 + Math.random() * 0.4,
    }))
    
    setParticles(generatedParticles)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Particle Container */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
    </div>
  )
}
