import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | BusinessName",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container max-w-4xl px-4 py-12 md:px-6 md:py-24">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="mt-4 text-muted-foreground">Last Updated: April 29, 2023</p>
            </div>

            <div className="prose prose-primary max-w-none">
              <h2>Introduction</h2>
              <p>
                At BusinessName ("we," "our," or "us"), we respect your privacy and are committed to protecting your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access the site or use our services.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Fill out forms on our website</li>
                <li>Register for an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information or assistance</li>
                <li>Participate in contests, surveys, or promotions</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Company information</li>
                <li>Job title</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device and usage
                of our website. This information may include:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Usage data (pages visited, time spent on pages, etc.)</li>
                <li>Referral source</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send promotional communications, such as newsletters or information about new services</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. Cookies are files with a small amount of data that may include an anonymous unique
                identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use some portions of our website.
              </p>

              <h2>Third-Party Disclosure</h2>
              <p>We may share your information with third parties in the following situations:</p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent or at your direction</li>
                <li>In connection with a business transfer (e.g., merger or acquisition)</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please be aware that no method of transmission over the internet or electronic
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul>
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict or object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
                information from children under 16. If we learn we have collected or received personal information from
                a child under 16, we will delete that information.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@businessname.com">privacy@businessname.com</a> or by mail at:
              </p>
              <address>
                BusinessName
                <br />
                Attn: Privacy Officer
                <br />
                123 Business Street
                <br />
                City, State 12345
                <br />
                United States
              </address>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
