"use client"

import { useState } from "react"
import { Award, ExternalLink, Calendar, Building, CheckCircle2, BadgeCheck, X } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"
import { Button } from "@/components/ui/button"
import { PlatformsStrip } from "@/components/platforms-strip"
import { CertificationStats } from "@/components/certification-stats"

const certifications = [
  {
    title: "AWS Academy Graduate – Cloud Architecting",
    issuer: "AWS Academy",
    date: "January 2026",
    credentialType: "Training Badge",
    hours: "60 Hours",
    description:
      "Completed the AWS Academy Graduate – Cloud Architecting program, gaining hands-on experience in designing scalable, secure, and highly available cloud architectures using AWS services, including compute, storage, networking, and security best practices.",
    verifyUrl: "https://www.credly.com/go/NgUCeZ1Z",
    featured: true,
    isPrimary: true,
  },
  {
    title: "Basics of DSA using C++",
    issuer: "Lovely Professional University",
    date: "Jun 2025 – Jul 2025",
    grade: "A",
    description:
      "Comprehensive course covering sorting, searching, recursion, dynamic programming, and greedy algorithms. Built strong foundation for technical interviews.",
    verifyUrl: "#",
    featured: false,
    certificate: {
      title: "Basics of DSA using C++",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSAwith%20CPP-R707MDyN16RC3a7PQPm5PcjjCVlJtP.jpg",
      certificateNo: "407273",
      registrationNo: "12307121",
      grade: "A",
    },
  },
  {
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    date: "Jul – Oct 2025",
    description:
      "12-week course covering IoT fundamentals, sensors, connectivity, and practical applications.",
    verifyUrl: "#",
    certificate: {
      title: "Introduction to Internet of Things",
      image: "https://blobs.vusercontent.net/blob/Introduction%20to%20Internet%20of%20Things-7eJONLhycqchpMdxjFie25PVKnQxpJ.pdf",
      rollNo: "NPTEL25CS147S958700110",
      score: "54/75",
    },
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
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

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

        {/* Certified by Leading Platforms Strip */}
        <PlatformsStrip />

        {/* Animated Statistics Cards */}
        <CertificationStats />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedCard key={cert.title} delay={index * 100}>
              <div
                className={`group relative p-6 rounded-2xl bg-card border transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 h-full overflow-hidden ${
                  cert.isPrimary
                    ? "md:col-span-2 lg:col-span-1 border-primary/60 ring-2 ring-primary/30 shadow-lg shadow-primary/20"
                    : cert.featured
                    ? "border-primary/50 ring-1 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {/* Animated accent line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-primary/80 to-primary/50 transition-all duration-400 ease-in-out group-hover:w-full" />
                {cert.isPrimary && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                    <CheckCircle2 className="h-3 w-3" />
                    Top Certification
                  </span>
                )}
                {cert.featured && !cert.isPrimary && (
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

                {cert.certificate && (
                  <Button
                    onClick={() => setSelectedCertificate(cert.certificate)}
                    variant="outline"
                    size="sm"
                    className="w-full mb-3 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    View Certificate
                  </Button>
                )}

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
                    {selectedCertificate.certificateNo && (
                      <>Certificate No: <span className="font-semibold text-foreground">{selectedCertificate.certificateNo}</span></>
                    )}
                    {selectedCertificate.registrationNo && (
                      <> | Registration No: <span className="font-semibold text-foreground">{selectedCertificate.registrationNo}</span></>
                    )}
                    {selectedCertificate.rollNo && (
                      <>Roll No: <span className="font-semibold text-foreground">{selectedCertificate.rollNo}</span></>
                    )}
                    {selectedCertificate.score && (
                      <> | Score: <span className="font-semibold text-primary">{selectedCertificate.score}</span></>
                    )}
                    {selectedCertificate.grade && (
                      <> | Grade: <span className="font-semibold text-primary">{selectedCertificate.grade}</span></>
                    )}
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
      </div>
    </section>
  )
}
