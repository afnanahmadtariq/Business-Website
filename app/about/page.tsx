import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | BusinessName",
  description: "Learn about our company, our mission, and the team behind our success.",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jane Smith",
      role: "CEO & Founder",
      bio: "With over 15 years of industry experience, Jane leads our company with vision and expertise.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John Davis",
      role: "Chief Technology Officer",
      bio: "John brings technical innovation and strategic thinking to our technology solutions.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      bio: "Sarah's creative approach has helped countless clients achieve their marketing goals.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Chen",
      role: "Data Analytics Lead",
      bio: "Michael transforms complex data into actionable insights that drive business growth.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About BusinessName</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2010, BusinessName has grown from a small startup to a leading provider of business
                  solutions. Our journey has been defined by innovation, excellence, and a commitment to our clients'
                  success.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Our Mission</h3>
                      <p className="text-sm text-muted-foreground">
                        To empower businesses with innovative solutions that drive growth and success in the digital
                        age.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Our Vision</h3>
                      <p className="text-sm text-muted-foreground">
                        To be the leading provider of business solutions, recognized for excellence, innovation, and
                        client satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Our Values</h3>
                      <p className="text-sm text-muted-foreground">
                        Excellence, Innovation, Integrity, Client-Focus, and Collaboration guide everything we do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg md:h-[450px] lg:h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={500}
                    height={500}
                    alt="Modern office workspace"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the talented individuals who make our company successful.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-60 w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 mix-blend-multiply"></div>
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardHeader className="bg-gradient-to-r from-primary-50 to-white">
                    <CardTitle className="text-primary-800">{member.name}</CardTitle>
                    <CardDescription className="text-primary-600">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary-700">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're committed to delivering exceptional service and results for our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
              <Card className="border-none bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-primary-800">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-600">
                    Our team of experienced professionals brings diverse expertise to every project.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-3">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-primary-800">Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-600">
                    We have a track record of delivering measurable results for businesses of all sizes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent mb-3">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-primary-800">Forward Thinking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-600">
                    We stay ahead of industry trends to provide innovative solutions for tomorrow's challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
