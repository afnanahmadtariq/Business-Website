import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | BusinessName Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug, 3)

  // Function to convert markdown-like content to HTML
  const formatContent = (content: string) => {
    // This is a simple implementation - for a real site, use a proper markdown parser
    const formattedContent = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
      .replace(/<\/li>\n<li/g, "</li><li")
      .replace(/^\n<li/gm, "<ul><li")
      .replace(/<\/li>\n\n/gm, "</li></ul>\n\n")
      .replace(/<\/li>$/gm, "</li></ul>")
      .replace(
        /^> (.*$)/gm,
        '<blockquote class="pl-4 border-l-4 border-primary-300 italic my-4 text-gray-600">$1</blockquote>',
      )
      .replace(/\n\n/g, "<br /><br />")

    return formattedContent
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="container max-w-4xl px-4 py-12 md:px-6 md:py-24">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>

          <div className="relative h-[300px] md:h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 mix-blend-multiply"></div>
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 text-sm text-primary-600">
              <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1">
                <Tag className="mr-1 h-4 w-4" />
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>

            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.title}</div>
              </div>
            </div>
          </div>

          <div
            className="prose prose-primary max-w-none mt-8"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="bg-primary-50/50 py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">Related Articles</h2>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="flex flex-col overflow-hidden border-none bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-48 w-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 mix-blend-multiply"></div>
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="flex-1 bg-gradient-to-r from-primary-50 to-white">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-primary-500">
                          <span>{relatedPost.date}</span>
                          <span>•</span>
                          <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">
                            {relatedPost.category}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2 text-primary-800">{relatedPost.title}</CardTitle>
                      </div>
                      <CardDescription className="line-clamp-3 text-primary-600">{relatedPost.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 text-primary hover:bg-primary-50 hover:text-primary-700"
                        asChild
                      >
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Read more <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
