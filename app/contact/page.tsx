import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | BusinessName",
  description: "Get in touch with our team to discuss how we can help your business grow.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to get started? Reach out to our team today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
              <Card className="border-none bg-white shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription className="text-primary-100">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          className="border-primary-200 focus-visible:ring-primary-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          className="border-primary-200 focus-visible:ring-primary-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-primary-200 focus-visible:ring-primary-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-primary-200 focus-visible:ring-primary-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Enter the subject of your message"
                        className="border-primary-200 focus-visible:ring-primary-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        className="min-h-[150px] resize-y border-primary-200 focus-visible:ring-primary-500"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6 bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary-800">Contact Information</h2>
                  <p className="text-primary-600">You can also reach us using the contact information below.</p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium text-primary-800">Address</h3>
                      <p className="text-sm text-primary-600">123 Business Street</p>
                      <p className="text-sm text-primary-600">City, State 12345</p>
                      <p className="text-sm text-primary-600">United States</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <div>
                      <h3 className="font-medium text-primary-800">Email</h3>
                      <p className="text-sm">
                        <Link href="mailto:info@businessname.com" className="text-primary-600 hover:text-primary-800">
                          info@businessname.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-medium text-primary-800">Phone</h3>
                      <p className="text-sm">
                        <Link href="tel:+11234567890" className="text-primary-600 hover:text-primary-800">
                          (123) 456-7890
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-primary-800">Business Hours</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium text-primary-800">Monday - Friday</p>
                        <p className="text-primary-600">9:00 AM - 5:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium text-primary-800">Saturday</p>
                        <p className="text-primary-600">10:00 AM - 2:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium text-primary-800">Sunday</p>
                        <p className="text-primary-600">Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
