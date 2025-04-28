import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | BusinessName",
  description: "Our terms of service outline the rules and guidelines for using our website and services.",
}

export default function TermsOfServicePage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="mt-4 text-muted-foreground">Last Updated: April 29, 2023</p>
            </div>

            <div className="prose prose-primary max-w-none">
              <h2>Introduction</h2>
              <p>
                Welcome to BusinessName. These Terms of Service ("Terms") govern your use of our website and services
                (collectively, the "Services") operated by BusinessName ("we," "us," or "our").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part
                of the Terms, you may not access the Services.
              </p>

              <h2>Use of Services</h2>
              <h3>Account Registration</h3>
              <p>
                Some features of our Services may require you to register for an account. You agree to provide accurate,
                current, and complete information during the registration process and to update such information to keep
                it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Services and for any
                activities or actions under your password. We encourage you to use a strong password (a combination of
                upper and lower case letters, numbers, and symbols) with your account.
              </p>

              <h3>User Conduct</h3>
              <p>You agree not to use the Services to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>
                  Transmit any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar,
                  obscene, or otherwise objectionable
                </li>
                <li>
                  Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or
                  entity
                </li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                <li>Collect or store personal data about other users without their consent</li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
              </ul>

              <h2>Intellectual Property</h2>
              <h3>Our Content</h3>
              <p>
                The Services and their original content, features, and functionality are and will remain the exclusive
                property of BusinessName and its licensors. The Services are protected by copyright, trademark, and
                other laws of both the United States and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the
                prior written consent of BusinessName.
              </p>

              <h3>User Content</h3>
              <p>
                You may provide content to the Services, such as comments, feedback, or other materials ("User
                Content"). By providing User Content to the Services, you grant us a worldwide, non-exclusive,
                royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative
                works of, display, and perform the User Content in connection with the Services and our business
                operations.
              </p>
              <p>
                You represent and warrant that you own or have the necessary rights to grant the license above and that
                your User Content does not violate the privacy rights, publicity rights, copyright rights, or other
                rights of any person.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our Services may contain links to third-party websites or services that are not owned or controlled by
                BusinessName. We have no control over, and assume no responsibility for, the content, privacy policies,
                or practices of any third-party websites or services.
              </p>
              <p>
                You acknowledge and agree that BusinessName shall not be responsible or liable, directly or indirectly,
                for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on
                any such content, goods, or services available on or through any such websites or services.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall BusinessName, its directors, employees, partners, agents, suppliers, or affiliates be
                liable for any indirect, incidental, special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul>
                <li>Your access to or use of or inability to access or use the Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p>
                Whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or
                not we have been informed of the possibility of such damage, and even if a remedy set forth herein is
                found to have failed of its essential purpose.
              </p>

              <h2>Disclaimer</h2>
              <p>
                Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS
                AVAILABLE" basis. The Services are provided without warranties of any kind, whether express or implied,
                including, but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States and the
                State of [Your State], without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Services after any revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the
                Services.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@businessname.com">legal@businessname.com</a> or by mail at:
              </p>
              <address>
                BusinessName
                <br />
                Attn: Legal Department
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
