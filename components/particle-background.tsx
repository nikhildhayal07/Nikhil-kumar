"use client"

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Particle Container */}
      <div className="absolute inset-0">
        {/* Generate 30 particles with varying positions and animation delays */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: `${0.2 + Math.random() * 0.4}`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
