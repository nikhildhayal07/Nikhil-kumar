"use client"

import { ExternalLink, Github, Zap, Shield, Database, ArrowRight, Code2, Layers, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/animated-card"

const projects = [
  {
    title: "Student Result Management System",
    description:
      "A secure console-based system to manage and calculate student grades efficiently. Features automated grade computation and performance analysis with 35% improved data processing speed.",
    tech: [
      { name: "C++", icon: Code2 },
      { name: "File Handling", icon: Folder },
      { name: "Console App", icon: Layers },
    ],
    highlights: [
      "Secure grade management",
      "File-based data storage",
      "Automated grade computation",
      "35% faster processing",
    ],
    icon: Database,
    period: "Jul 2025 – Aug 2025",
    github: "https://github.com/nikhildhayal07",
    featured: true,
  },
  {
    title: "Disaster Relief Resource Allocator",
    description:
      "An automated system for priority-based disaster resource management using advanced DSA concepts. Implements Queue, Stack, and Heap data structures for efficient resource distribution.",
    tech: [
      { name: "C++", icon: Code2 },
      { name: "DSA", icon: Layers },
      { name: "Algorithms", icon: Zap },
    ],
    highlights: [
      "Priority-based allocation",
      "Queue (FIFO) for requests",
      "Max-Heap for urgency",
      "Undo mechanism with Stack",
    ],
    icon: Shield,
    period: "Oct 2024 – Nov 2024",
    github: "https://github.com/nikhildhayal07",
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with a focus on efficiency, scalability, 
            and practical problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 150}>
              <div className={`group relative p-8 rounded-2xl bg-card border transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${
                project.featured ? "border-primary/50 ring-1 ring-primary/20" : "border-border hover:border-primary/50"
              }`}>
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <tech.icon className="h-3.5 w-3.5" />
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary transition-all bg-transparent"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline group/link"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
