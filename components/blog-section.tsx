import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Strategies to Grow Your Business in 2023",
      excerpt:
        "Discover the top strategies that successful businesses are using to scale and thrive in today's market.",
      date: "June 12, 2023",
      category: "Business Growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "strategies-to-grow-business-2023",
    },
    {
      id: 2,
      title: "The Future of Digital Marketing: Trends to Watch",
      excerpt: "Stay ahead of the curve with these emerging digital marketing trends that are shaping the industry.",
      date: "May 28, 2023",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "future-of-digital-marketing-trends",
    },
    {
      id: 3,
      title: "How Data Analytics Can Transform Your Decision Making",
      excerpt: "Learn how leveraging data analytics can lead to more informed business decisions and better outcomes.",
      date: "April 15, 2023",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "data-analytics-transform-decision-making",
    },
  ]

  return (
    <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-50"></div>
      <div className="absolute top-24 right-24 h-64 w-64 rounded-full bg-highlight opacity-10 blur-3xl"></div>
      <div className="absolute bottom-24 left-24 h-64 w-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-highlight px-4 py-1 text-sm font-semibold text-highlight-foreground">
              Stay Updated
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-primary-900 sm:text-5xl">Latest Insights</h2>
            <p className="max-w-[900px] text-primary-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with our latest articles, industry insights, and company news.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col overflow-hidden border-none bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 w-full">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader className="flex-1">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-primary-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 text-primary-800">{post.title}</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 text-primary-600">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-primary hover:bg-primary-50 hover:text-primary-700"
                  asChild
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary-50">
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
