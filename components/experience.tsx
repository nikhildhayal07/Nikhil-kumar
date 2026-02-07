"use client"

import { useState } from "react"
import { Briefcase, Calendar, MapPin, ExternalLink, X, Award } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "Summer Training",
    company: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Jun 2025 - Jul 2025",
    type: "Training",
    description: "Completed intensive summer training program focused on Data Structures and Algorithms using C++. Achieved Grade A certification.",
    highlights: [
      "Mastered advanced DSA concepts",
      "Implemented complex algorithms",
      "Achieved Grade A certification",
      "Built console-based projects",
    ],
    certificate: {
      title: "Basics of DSA using C++",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSAwith%20CPP-oR4Cs5bemQWCgIu9ZojG80sqjV2YzE.jpg",
      certificateNo: "407273",
      grade: "A",
    },
    current: false,
  },
  {
    title: "HackVerse 2024 Participant",
    company: "National Level Hackathon",
    location: "India",
    period: "2024",
    type: "Hackathon",
    description: "Participated in HackVerse 2024, a national-level hackathon, developing innovative solutions and collaborating with peers.",
    highlights: [
      "Developed innovative solutions",
      "Collaborated with team members",
      "Gained hands-on experience",
      "Networked with industry experts",
    ],
    current: false,
  },
]

export function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Training
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on training, hackathons, and practical learning experiences.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
              </div>

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <AnimatedCard delay={index * 200}>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md mb-2">
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Certificate Button */}
                    {exp.certificate && (
                      <Button
                        onClick={() => setSelectedCertificate(exp.certificate)}
                        variant="outline"
                        size="sm"
                        className="w-full md:w-auto border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all"
                      >
                        <Award className="h-4 w-4 mr-2" />
                        View Certificate
                      </Button>
                    )}
                  </div>
                </AnimatedCard>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCertificate(null)}>
          <div className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Certificate Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">{selectedCertificate.title}</h3>
                <p className="text-muted-foreground">
                  Certificate No: <span className="font-semibold text-foreground">{selectedCertificate.certificateNo}</span> | Grade: <span className="font-semibold text-primary">{selectedCertificate.grade}</span>
                </p>
              </div>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full rounded-xl border border-border"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
