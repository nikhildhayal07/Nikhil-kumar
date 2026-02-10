"use client"

import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32 w-full">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-primary font-medium">Available for opportunities</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">Nikhil Kumar</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl font-semibold text-primary">
                Cloud Computing Engineer / CS Student
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                I design and build scalable cloud infrastructure solutions using AWS, Docker, and modern DevOps practices. Passionate about solving complex problems with elegant code and continuous learning.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
                asChild
              >
                <a href="https://blobs.vusercontent.net/blob/Nikhil%20Kumar%20CV-RjQCLKpEIqUblIGFTaSDrsR9cIg4sE.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  View Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                asChild
              >
                <a href="mailto:07nikhilkumar07@gmail.com">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-sm text-muted-foreground">Connect:</span>
              <a
                href="https://github.com/nikhildhayal07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhilkumar05/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:07nikhilkumar07@gmail.com"
                className="p-3 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Right column - Profile photo with animated glow */}
          <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Animated gradient glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-cyan-500/20 to-blue-500/40 rounded-full blur-3xl animate-pulse opacity-75" />
              
              {/* Secondary glow layer with rotation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-2xl opacity-50" style={{
                animation: 'rotate 6s linear infinite'
              }} />
              
              {/* Main image container with glassmorphism */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 backdrop-blur-xl bg-gradient-to-br from-card/40 to-background/40 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cv%20photo-g36pEo4sGITKHqDO2HhXSgXtgQdj4E.png"
                  alt="Nikhil Kumar"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
