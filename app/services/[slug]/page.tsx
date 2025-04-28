"use client"

import { useEffect, useRef, useState } from "react"
import { notFound, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getServiceBySlug, getAllServices } from "@/lib/services-data"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)
  const allServices = getAllServices()
  const router = useRouter()

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const featuresRef = useRef<HTMLDivElement>(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })

  const processRef = useRef<HTMLDivElement>(null)
  const processInView = useInView(processRef, { once: true, amount: 0.2 })

  const benefitsRef = useRef<HTMLDivElement>(null)
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })

  const testimonialsRef = useRef<HTMLDivElement>(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })

  const faqRef = useRef<HTMLDivElement>(null)
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 })

  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!service && mounted) {
    notFound()
  }

  if (!service) {
    return null
  }

  // Function to get icon color based on service
  const getServiceColor = (slug: string) => {
    switch (slug) {
      case "digital-marketing":
        return "from-blue-600 to-blue-800"
      case "business-consulting":
        return "from-secondary-600 to-secondary-800"
      case "data-analytics":
        return "from-accent-600 to-accent-800"
      case "custom-solutions":
        return "from-highlight-600 to-highlight-800"
      default:
        return "from-primary-600 to-primary-800"
    }
  }

  // Function to get accent color based on service
  const getAccentColor = (slug: string) => {
    switch (slug) {
      case "digital-marketing":
        return "bg-blue-500"
      case "business-consulting":
        return "bg-secondary"
      case "data-analytics":
        return "bg-accent"
      case "custom-solutions":
        return "bg-highlight"
      default:
        return "bg-primary"
    }
  }

  // Function to get button color based on service
  const getButtonColor = (slug: string) => {
    switch (slug) {
      case "digital-marketing":
        return "bg-blue-500 hover:bg-blue-600"
      case "business-consulting":
        return "bg-secondary hover:bg-secondary-600"
      case "data-analytics":
        return "bg-accent hover:bg-accent-600"
      case "custom-solutions":
        return "bg-highlight hover:bg-highlight-600 text-highlight-foreground"
      default:
        return "bg-primary hover:bg-primary-600"
    }
  }

  // Function to get icon component based on service
  const ServiceIcon = () => {
    switch (service.icon) {
      case "Globe":
        return (
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${getServiceColor(service.slug)} shadow-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
        )
      case "Lightbulb":
        return (
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${getServiceColor(service.slug)} shadow-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1="9" y1="18" x2="15" y2="18"></line>
              <line x1="10" y1="22" x2="14" y2="22"></line>
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
            </svg>
          </div>
        )
      case "BarChart3":
        return (
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${getServiceColor(service.slug)} shadow-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
          </div>
        )
      case "ShieldCheck":
        return (
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${getServiceColor(service.slug)} shadow-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
        )
      default:
        return (
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${getServiceColor(service.slug)} shadow-lg`}
          >
            <ArrowRight className="h-8 w-8 text-white" />
          </div>
        )
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white md:py-28"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
            <div
              className={`absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br ${getServiceColor(service.slug)} opacity-40`}
            ></div>
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white opacity-10 blur-3xl"></div>
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="mb-8">
              <Link
                href="/services"
                className="group inline-flex items-center text-white/80 transition-colors hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to all services</span>
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <ServiceIcon />
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{service.title}</h1>
                <p className="max-w-[600px] text-xl text-white/80">{service.shortDescription}</p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className={`${getButtonColor(service.slug)} rounded-full text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl`}
                  >
                    <Link href="/contact">
                      Get Started
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-white/30 bg-white/10 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white"
                  >
                    <a href="#features">Learn More</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  <div
                    className={`absolute -inset-4 rounded-3xl bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-70 blur-xl`}
                  ></div>
                  <div className="relative overflow-hidden rounded-3xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      width={600}
                      height={400}
                      alt={service.title}
                      className="h-auto w-full rounded-3xl object-cover shadow-2xl"
                      priority
                    />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/40 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
              <path
                fill="currentColor"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </motion.section>

        {/* Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl space-y-6 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Overview</h2>
              <div className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {service.description.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div
            className={`absolute -left-32 -top-32 h-64 w-64 rounded-full ${getAccentColor(service.slug)} opacity-10 blur-3xl`}
          ></div>
          <div
            className={`absolute -bottom-32 -right-32 h-64 w-64 rounded-full ${getAccentColor(service.slug)} opacity-10 blur-3xl`}
          ></div>

          <div className="container relative px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Offer</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive {service.title.toLowerCase()} services include:
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-12">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group h-full border-none bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardHeader>
                      <div
                        className={`mb-3 h-1 w-12 rounded-full ${getAccentColor(service.slug)} transition-all duration-300 group-hover:w-16`}
                      ></div>
                      <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Process</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here's how we approach {service.title.toLowerCase()} projects:
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl mt-16">
              <div className="relative">
                <div
                  className={`absolute left-1/2 h-full w-1 -translate-x-1/2 ${getAccentColor(service.slug)} opacity-20`}
                ></div>
                <div className="space-y-16">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div
                        className={`absolute left-1/2 -mt-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white ${getAccentColor(service.slug)} text-white shadow-lg`}
                      >
                        <span className="text-xs font-bold">{step.step}</span>
                      </div>
                      <div
                        className={`flex flex-col ${index % 2 === 0 ? "items-end pr-8 text-right md:items-end md:pr-16" : "items-start pl-8 text-left md:items-start md:pl-16"}`}
                      >
                        <div className="group w-full max-w-md rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:max-w-sm">
                          <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                          <div
                            className={`my-2 h-1 w-12 rounded-full ${getAccentColor(service.slug)} transition-all duration-300 group-hover:w-16`}
                          ></div>
                          <p className="mt-2 text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          ref={benefitsRef}
          className={`relative overflow-hidden bg-gradient-to-br ${getServiceColor(service.slug)} py-16 text-white md:py-24`}
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>

          <div className="container relative px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits</h2>
              <p className="text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here's how our {service.title.toLowerCase()} services can benefit your business:
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-white/90">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Success Stories</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our clients say about our {service.title.toLowerCase()} services:
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
              {service.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group h-full border-none bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-8">
                      <div
                        className={`mb-4 text-5xl font-serif text-${service.slug === "digital-marketing" ? "blue" : service.slug === "business-consulting" ? "secondary" : service.slug === "data-analytics" ? "accent" : service.slug === "custom-solutions" ? "highlight" : "primary"}-500`}
                      >
                        "
                      </div>
                      <p className="mb-6 text-lg italic text-gray-700">{testimonial.quote}</p>
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div
            className={`absolute -left-32 -top-32 h-64 w-64 rounded-full ${getAccentColor(service.slug)} opacity-10 blur-3xl`}
          ></div>
          <div
            className={`absolute -bottom-32 -right-32 h-64 w-64 rounded-full ${getAccentColor(service.slug)} opacity-10 blur-3xl`}
          ></div>

          <div className="container relative px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our {service.title.toLowerCase()} services:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-3xl mt-12"
            >
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Other Services Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore Other Services</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our full range of business solutions
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
              {allServices
                .filter((s) => s.slug !== service.slug)
                .map((otherService, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/services/${otherService.slug}`}
                      className="group block h-full overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={otherService.image || "/placeholder.svg"}
                          alt={otherService.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-50"></div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800">{otherService.title}</h3>
                        <div
                          className={`my-2 h-1 w-8 rounded-full ${otherService.slug === "digital-marketing" ? "bg-blue-500" : otherService.slug === "business-consulting" ? "bg-secondary" : otherService.slug === "data-analytics" ? "bg-accent" : "bg-highlight"} transition-all duration-300 group-hover:w-12`}
                        ></div>
                        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{otherService.shortDescription}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-center text-white shadow-xl md:p-12"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br ${getServiceColor(service.slug)} opacity-60`}
                ></div>
                <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-white opacity-10 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white opacity-10 blur-3xl"></div>
              </div>

              <div className="relative">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{service.ctaText}</h2>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white text-base font-medium text-gray-900 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl"
                  >
                    <Link href="/contact">
                      Contact Us
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-white/30 bg-white/10 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white"
                  >
                    <Link href="/services">Explore Other Services</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
