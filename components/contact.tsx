"use client"

import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/animated-card"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "07nikhilkumar07@gmail.com",
    href: "mailto:07nikhilkumar07@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8290814508",
    href: "tel:+918290814508",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jhunjhunu, Rajasthan, India",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nikhildhayal07",
    username: "nikhildhayal07",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhilkumar05/",
    username: "nikhilkumar05",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I&apos;m always open to discussing new projects, opportunities, or just
            having a chat about technology.
          </p>
          
          {/* Contact Me Button */}
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mb-8"
            asChild
          >
            <a href="mailto:07nikhilkumar07@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact Information
            </h3>
            {contactInfo.map((item, index) => (
              <AnimatedCard key={item.label} delay={index * 100}>
                <a
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              </AnimatedCard>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Social Profiles
            </h3>
            {socialLinks.map((link, index) => (
              <AnimatedCard key={link.label} delay={index * 100 + 150}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        @{link.username}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </AnimatedCard>
            ))}

            <div className="pt-6">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="mailto:07nikhilkumar07@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
