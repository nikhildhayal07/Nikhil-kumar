"use client"

import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Kapurthala, Punjab",
    period: "Aug 2023 – Present",
    current: true,
  },
  {
    degree: "Intermediate",
    field: "PCM (Physics, Chemistry, Mathematics)",
    institution: "The Tagore Public Sec. School",
    location: "Jhunjhunu, Rajasthan",
    period: "Mar 2022 – May 2023",
  },
  {
    degree: "Matriculation",
    field: "Secondary Education",
    institution: "The South Public School",
    location: "Jhunjhunu, Rajasthan",
    period: "Mar 2020 – May 2021",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide mb-4">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and engineering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.institution}
                  className="relative flex items-start gap-6 md:gap-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background md:left-1/2" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <AnimatedCard delay={index * 200}>
                      <div
                        className={`p-6 rounded-2xl bg-card border transition-all duration-300 hover:-translate-y-1 ${
                          edu.current
                            ? "border-primary/50 ring-1 ring-primary/20"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {edu.current && (
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                            Currently Pursuing
                          </span>
                        )}

                        <div
                          className={`flex items-center gap-2 mb-2 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                        </div>

                        <p className="text-primary font-medium mb-2">{edu.field}</p>
                        <p className="text-foreground mb-3">{edu.institution}</p>

                        <div
                          className={`flex flex-col gap-1 text-sm text-muted-foreground ${
                            index % 2 === 0 ? "md:items-end" : ""
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </AnimatedCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
