import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Lightbulb, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-50"></div>
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent opacity-10 blur-3xl"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
              What We Offer
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-primary-900 sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-primary-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive range of services to help your business succeed in today's competitive market.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
          <Card className="flex flex-col border-none bg-white shadow-lg transition-all duration-200 hover:shadow-xl">
            <CardHeader className="flex-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mb-3">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-primary-800">Digital Marketing</CardTitle>
              <CardDescription className="text-primary-600">
                Boost your online presence with our comprehensive digital marketing strategies.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-primary hover:bg-primary-50 hover:text-primary-700"
                asChild
              >
                <Link href="/services/digital-marketing">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-none bg-white shadow-lg transition-all duration-200 hover:shadow-xl">
            <CardHeader className="flex-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-3">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-primary-800">Business Consulting</CardTitle>
              <CardDescription className="text-primary-600">
                Expert advice to optimize your business operations and drive growth.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-primary hover:bg-primary-50 hover:text-primary-700"
                asChild
              >
                <Link href="/services/business-consulting">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-none bg-white shadow-lg transition-all duration-200 hover:shadow-xl">
            <CardHeader className="flex-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent mb-3">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-primary-800">Data Analytics</CardTitle>
              <CardDescription className="text-primary-600">
                Transform your data into actionable insights for informed decision-making.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-primary hover:bg-primary-50 hover:text-primary-700"
                asChild
              >
                <Link href="/services/data-analytics">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col md:col-span-2 lg:col-span-3 border-none bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Custom Solutions</CardTitle>
              <CardDescription className="text-primary-100">
                Need something specific? We offer tailored solutions designed to address your unique business
                challenges.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-highlight" />
                <div>
                  <h3 className="font-medium">Personalized Strategy</h3>
                  <p className="text-sm text-primary-100">Tailored to your specific business goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-highlight" />
                <div>
                  <h3 className="font-medium">Dedicated Support</h3>
                  <p className="text-sm text-primary-100">Expert team available when you need us</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-highlight" />
                <div>
                  <h3 className="font-medium">Measurable Results</h3>
                  <p className="text-sm text-primary-100">Track progress with detailed analytics</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-white text-primary-800 hover:bg-primary-50">
                <Link href="/contact">Contact Us for Custom Solutions</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
