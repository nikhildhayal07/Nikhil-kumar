"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Download, Github, Linkedin, Mail, Terminal, Cloud, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const rotatingRoles = [
  "Cloud Computing Engineer",
]

function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingRoles.length)
        setIsVisible(true)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold transition-all duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2"
      }`}
    >
      {rotatingRoles[currentIndex]}
    </span>
  )
}

export function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Terminal className="absolute top-20 right-[20%] h-8 w-8 text-primary/10 animate-pulse" />
        <Cloud className="absolute top-40 right-[10%] h-12 w-12 text-primary/10 animate-pulse delay-500" />
        <Code2 className="absolute bottom-40 left-[10%] h-10 w-10 text-primary/10 animate-pulse delay-1000" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Centered Hero Content - Left Column */}
          <div className="flex flex-col items-start lg:items-start text-left lg:text-left space-y-8 mb-16 lg:mb-0">
            <div className="space-y-4 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm text-primary font-medium">Open to Opportunities</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                <span className="text-primary">Nikhil Kumar</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-2xl text-foreground font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                {'<'} <RotatingText /> {'>'}
              </p>
              <p className="text-lg text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-250">
                Building scalable cloud infrastructure that transforms ideas into impact.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                asChild
              >
                <a href="#about">
                  Learn More
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all hover:scale-105 bg-transparent"
                asChild
              >
                <a href="https://blobs.vusercontent.net/blob/Nikhil%20Kumar%20CV-RjQCLKpEIqUblIGFTaSDrsR9cIg4sE.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <a
                href="https://github.com/nikhildhayal07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhilkumar05/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:07nikhilkumar07@gmail.com"
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div className="hidden lg:flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-4 duration-1000 delay-300 h-full">
            <div className="relative w-72 h-[28rem] flex-shrink-0 opacity-85">
              {/* Minimal animated gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-cyan-500/5 to-blue-500/8 rounded-[50px] blur-3xl animate-pulse opacity-40" />
              
              {/* Glassmorphism frame - vertical egg-shaped oval */}
              <div className="relative w-full h-full rounded-[50px] overflow-hidden border border-primary/15 backdrop-blur-md bg-gradient-to-br from-card/20 to-background/10 shadow-sm p-3">
                <div className="w-full h-full rounded-[48px] overflow-hidden relative bg-gradient-to-b from-primary/5 to-transparent flex items-center justify-center pt-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cv%20photo-g36pEo4sGITKHqDO2HhXSgXtgQdj4E.png"
                    alt="Nikhil Kumar"
                    fill
                    className="object-contain brightness-95 contrast-95"
                    priority
                    sizes="(max-width: 1024px) 50vw, 288px"
                  />
                </div>
              </div>

              {/* Subtle floating animation */}
              <style jsx>{`
                @keyframes float {
                  0%, 100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-8px);
                  }
                }
                div {
                  animation: float 4s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">Scroll Down</span>
        <div className="animate-bounce">
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  )
}
