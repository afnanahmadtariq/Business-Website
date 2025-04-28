import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getPostsByCategory, getAllCategories } from "@/lib/blog-data"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  // Convert slug format back to category name
  const categoryName = params.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  return {
    title: `${categoryName} Articles | BusinessName Blog`,
    description: `Browse our latest articles about ${categoryName.toLowerCase()}.`,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Convert slug format back to category name
  const categoryName = params.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  const posts = getPostsByCategory(categoryName)
  const categories = getAllCategories()

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{categoryName}</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our latest articles about {categoryName.toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <Button variant="outline" className="bg-white hover:bg-primary-50" asChild>
                <Link href="/blog">All Posts</Link>
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === categoryName ? "default" : "outline"}
                  className={
                    category === categoryName ? "bg-primary hover:bg-primary-700" : "bg-white hover:bg-primary-50"
                  }
                  asChild
                >
                  <Link href={`/blog/category/${category.toLowerCase().replace(/ /g, "-")}`}>{category}</Link>
                </Button>
              ))}
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="flex flex-col overflow-hidden border-none bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 mix-blend-multiply"></div>
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="flex-1 bg-gradient-to-r from-primary-50 to-white">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
