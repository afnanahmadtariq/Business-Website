import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { BlogSection } from "@/components/blog-section"
import { ContactCta } from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BlogSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
