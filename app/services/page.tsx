import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Globe, Lightbulb, ShieldCheck, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services | BusinessName",
  description: "Explore our comprehensive range of business services designed to help your company grow and succeed.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing Campaigns",
      ],
      link: "/services/digital-marketing",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Business Consulting",
      description: "Expert advice to optimize your business operations and drive growth.",
      features: [
        "Strategic Planning",
        "Process Optimization",
        "Market Research",
        "Competitive Analysis",
        "Growth Strategy Development",
      ],
      link: "/services/business-consulting",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights for informed decision-making.",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Predictive Analytics",
        "Customer Behavior Analysis",
        "Performance Metrics & KPIs",
      ],
      link: "/services/data-analytics",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Custom Solutions",
      description: "Tailored solutions designed to address your unique business challenges.",
      features: [
        "Personalized Strategy Development",
        "Custom Software Solutions",
        "Integration Services",
        "Workflow Automation",
        "Dedicated Support & Maintenance",
      ],
      link: "/services/custom-solutions",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive range of services to help your business succeed in today's competitive
                  market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:gap-12 mt-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 items-center rounded-lg bg-white p-6 shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-700">
                      {service.icon}
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-primary-800">{service.title}</h2>
                      <p className="text-primary-600">{service.description}</p>
                    </div>
                    <ul className="grid gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-primary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary hover:bg-primary-700">
                      <Link href={service.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-lg"></div>
                      <div className="relative">
                        <Image
                          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          width={400}
                          height={400}
                          alt={service.title}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
