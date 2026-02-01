"use client"

import { Trophy, Users, Lightbulb, Clock } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

export function Achievements() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide mb-4">
            Recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achievements
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatedCard>
            <div className="relative p-8 rounded-2xl bg-card border border-primary/30 ring-1 ring-primary/10">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      HackVerse 2024
                    </h3>
                    <p className="text-muted-foreground">
                      Lovely Professional University • March 2024
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Participated in &quot;HackVerse 2024&quot; Hackathon, collaborating with
                  multidisciplinary teams to build innovative tech solutions under
                  competitive and time-bound constraints. Certificate ID: HV24/352
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teamwork</p>
                      <p className="font-medium text-foreground">
                        Cross-functional collaboration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Innovation</p>
                      <p className="font-medium text-foreground">
                        Creative problem-solving
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pressure</p>
                      <p className="font-medium text-foreground">
                        Time-bound delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}
