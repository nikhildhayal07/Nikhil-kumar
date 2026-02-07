"use client"

import { Trophy, Users, Lightbulb, Clock, Globe, Star, Mic } from "lucide-react"
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

        <div className="max-w-3xl mx-auto space-y-8">
          {/* HackVerse 2024 */}
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

          {/* One India One World */}
          <AnimatedCard delay={100}>
            <div className="relative p-8 rounded-2xl bg-card border border-primary/30 ring-1 ring-primary/10">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  {/* Thumbnail Image */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-primary/20">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-07%20at%201.26.24%20PM-4kScDwsjiIXmZrkBPf9xR5koFDpO1e.jpeg"
                        alt="One India One World Cultural Fest"
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground text-center max-w-[100px]">
                      Celebrating cultural diversity
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">🥉</span>
                      <h3 className="text-2xl font-bold text-foreground">
                        One India One World
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Lovely Professional University • University-Level Cultural Fest
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Secured 3rd position at One India One World, a large-scale cultural fest celebrating diversity and global unity. Actively contributed to team coordination, stage performance, and cultural representation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Teamwork</p>
                          <p className="font-medium text-foreground">
                            Collaborative coordination
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Cultural Representation</p>
                          <p className="font-medium text-foreground">
                            Diversity &amp; inclusion
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary">
                          <Star className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Leadership</p>
                          <p className="font-medium text-foreground">
                            Team coordination
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary">
                          <Mic className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Stage Confidence</p>
                          <p className="font-medium text-foreground">
                            Performance excellence
                          </p>
                        </div>
                      </div>
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
