"use client"

import { Code2, Zap, Target, Lightbulb, BookOpen, Rocket, Users } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

const traits = [
  { label: "Clean Code", icon: Code2 },
  { label: "Fast Learner", icon: Zap },
  { label: "Goal-Oriented", icon: Target },
  { label: "Problem Solver", icon: Lightbulb },
]

const stats = [
  { value: "3+", label: "Years Learning" },
  { value: "4+", label: "Projects Built" },
  { value: "8+", label: "Technologies" },
  { value: "10+", label: "Certifications" },
]

const highlights = [
  { icon: Rocket, title: "Cloud Innovation", description: "Passionate about building scalable cloud solutions with AWS and modern DevOps practices" },
  { icon: BookOpen, title: "Continuous Learning", description: "Committed to staying current with latest technologies and best practices in cloud engineering" },
  { icon: Users, title: "Collaborative", description: "Enjoy working with teams to solve complex problems and deliver impactful solutions" },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide mb-4">Get to Know Me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Driven by curiosity,
            <br />
            <span className="text-primary">powered by code</span>
          </h2>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Profile Card */}
          <AnimatedCard delay={0}>
            <div className="relative">
              {/* Profile Card */}
              <div className="p-8 rounded-3xl bg-card border border-border relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                
                {/* Avatar/Initials */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-3xl font-bold text-primary-foreground flex-shrink-0">
                    NK
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Nikhil Kumar</h3>
                    <p className="text-muted-foreground text-sm mt-1">B.Tech CSE Student & Cloud Enthusiast</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a passionate Cloud Computing student with a hunger for building impactful digital solutions. My journey started with curiosity about how technology shapes our world, and it has evolved into a deep commitment to mastering cloud technologies, AWS, Docker, and software engineering.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in learning by doing. Every project I build is an opportunity to push my limits, solve real problems, and grow as a developer. My goal is to work with forward-thinking teams where I can contribute, learn, and create technology that matters.
                </p>

                {/* Traits */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {traits.map((trait) => (
                    <div
                      key={trait.label}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors"
                    >
                      <trait.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{trait.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <AnimatedCard key={stat.label} delay={index * 100 + 200}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group text-center">
                  <p className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform inline-block">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="border-t border-border pt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">What Drives Me</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <AnimatedCard key={highlight.title} delay={index * 100}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
