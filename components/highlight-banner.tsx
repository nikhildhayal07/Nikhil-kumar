"use client"

import { AnimatedCard } from "@/components/animated-card"

export function HighlightBanner() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <AnimatedCard>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-card/80 backdrop-blur-xl" />
            
            {/* Gradient glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50" />
            
            {/* Border */}
            <div className="absolute inset-0 rounded-2xl border border-primary/20" />
            
            {/* Content */}
            <div className="relative px-8 py-12 md:py-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Currently pursuing more certifications in Cloud Computing and DevOps
              </p>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}
