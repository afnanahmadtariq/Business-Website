"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-primary-600 to-primary-700 text-white backdrop-blur supports-[backdrop-filter]:bg-primary-600/90">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">BusinessName</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary-200">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary-200">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary-200">
            Services
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary-200">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary-200">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden bg-secondary hover:bg-secondary-600 md:flex">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-white text-white md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[240px] bg-gradient-to-b from-primary-700 to-primary-900 text-white sm:w-[300px]"
            >
              <div className="flex flex-col space-y-4 py-6">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-primary-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium transition-colors hover:text-primary-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-medium transition-colors hover:text-primary-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="text-sm font-medium transition-colors hover:text-primary-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium transition-colors hover:text-primary-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button asChild className="mt-4 bg-secondary hover:bg-secondary-600">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
