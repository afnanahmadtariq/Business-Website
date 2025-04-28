import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-none bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
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
  )
}
