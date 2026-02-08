import { Navigation } from "@/components/navigation"
import { Home } from "@/components/home"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { HighlightBanner } from "@/components/highlight-banner"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
