"use client"

import { Award, ExternalLink, Calendar, Building, CheckCircle2, BadgeCheck } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

const certifications = [
  {
    title: "Basics of DSA using C++",
    issuer: "Lovely Professional University",
    date: "Jun 2025 – Jul 2025",
    grade: "A",
    description:
      "Comprehensive course covering sorting, searching, recursion, dynamic programming, and greedy algorithms. Built strong foundation for technical interviews.",
    verifyUrl: "#",
    featured: true,
  },
  {
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    date: "Jul – Oct 2025",
    score: "54/75",
    description:
      "12-week course covering IoT fundamentals, sensors, connectivity, and practical applications.",
    verifyUrl: "#",
  },
  {
    title: "Software Engineering: Implementation and Testing",
    issuer: "Coursera - HKUST",
    date: "May 2024",
    description:
      "Learned software implementation best practices, testing methodologies, and quality assurance techniques.",
    verifyUrl: "https://coursera.org/verify/J6BFJ8D4MG4A",
  },
  {
    title: "Learn English: Beginning Grammar",
    issuer: "Coursera - UC Irvine",
    date: "May 2024",
    description:
      "3-course specialization covering word forms, verb tenses, and question formation in English.",
    verifyUrl: "https://coursera.org/verify/specialization/BENR6Z7EAGVT",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
    hours: "300 hours",
    description:
      "Comprehensive certification covering HTML, CSS, responsive design principles, and accessibility.",
    verifyUrl:
      "https://freecodecamp.org/certification/fcc114b9208-1619-4d39-bfbc-4cfdd9bb4c90/responsive-web-design",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BadgeCheck className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Credentials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & Training
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and
            professional development courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedCard key={cert.title} delay={index * 100}>
              <div
                className={`group relative p-6 rounded-2xl bg-card border transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 h-full overflow-hidden ${
                  cert.featured
                    ? "border-primary/50 ring-1 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {/* Animated accent line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-primary/80 to-primary/50 transition-all duration-400 ease-in-out group-hover:w-full" />
                {cert.featured && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                    <CheckCircle2 className="h-3 w-3" />
                    Top Certification
                  </span>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {(cert.grade || cert.score || cert.hours) && (
                  <div className="flex items-center gap-2 mb-4">
                    {cert.grade && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                        Grade: {cert.grade}
                      </span>
                    )}
                    {cert.score && (
                      <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded">
                        Score: {cert.score}
                      </span>
                    )}
                    {cert.hours && (
                      <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded">
                        {cert.hours}
                      </span>
                    )}
                  </div>
                )}

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {cert.verifyUrl && cert.verifyUrl !== "#" && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Verify Certificate
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
