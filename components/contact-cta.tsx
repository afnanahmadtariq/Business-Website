import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ContactCta() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 text-white">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-cta" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-cta)" />
        </svg>
      </div>
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent opacity-20 blur-3xl"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-primary-700">
              Let's Connect
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
            <p className="max-w-[900px] text-primary-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today to discuss how we can help your business grow and succeed.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary-600">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
