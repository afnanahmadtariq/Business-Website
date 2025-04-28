import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">BusinessName</h3>
            <p className="text-sm text-primary-200">
              Providing innovative business solutions since 2010. We help companies grow and thrive in the digital age.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-primary-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-200 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-primary-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-primary-200 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-primary-200 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/digital-marketing" className="text-sm text-primary-200 hover:text-white">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/business-consulting" className="text-sm text-primary-200 hover:text-white">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-sm text-primary-200 hover:text-white">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/custom-solutions" className="text-sm text-primary-200 hover:text-white">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-primary-200">123 Business Street</p>
              <p className="text-sm text-primary-200">City, State 12345</p>
              <p className="text-sm text-primary-200">United States</p>
            </address>
            <p className="text-sm text-primary-200">
              <strong>Email:</strong>{" "}
              <Link href="mailto:info@businessname.com" className="hover:text-white">
                info@businessname.com
              </Link>
            </p>
            <p className="text-sm text-primary-200">
              <strong>Phone:</strong>{" "}
              <Link href="tel:+11234567890" className="hover:text-white">
                (123) 456-7890
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-600 pt-8 text-center text-sm text-primary-200">
          <p>© {new Date().getFullYear()} BusinessName. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
