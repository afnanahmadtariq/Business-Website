import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-semibold text-white">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-primary-900 sm:text-4xl md:text-5xl">
              Our Mission & Values
            </h2>
            <p className="max-w-[600px] text-primary-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Founded in 2010, we've been helping businesses transform and grow for over a decade. Our mission is to
              provide innovative solutions that drive real results.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium text-primary-800">Excellence</h3>
                  <p className="text-sm text-primary-600">
                    We strive for excellence in everything we do, delivering the highest quality solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <div>
                  <h3 className="font-medium text-primary-800">Innovation</h3>
                  <p className="text-sm text-primary-600">
                    We embrace new technologies and approaches to solve complex business challenges.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <div>
                  <h3 className="font-medium text-primary-800">Integrity</h3>
                  <p className="text-sm text-primary-600">
                    We build relationships based on trust, transparency, and ethical business practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-primary hover:bg-primary-700">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary-50">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-lg"></div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg md:h-[450px] lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="About Us Image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
