import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Northern Analytics - how we collect, use, and protect your information.',
};

export default function Privacy() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Northern Analytics (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website northern-analytics.com.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business information</li>
              <li>Messages and inquiries submitted through our contact form</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Analytics</h2>
            <p className="text-gray-700 mb-6">
              We use Plausible Analytics, a privacy-friendly analytics tool that does not use
              cookies and does not collect personal data. Plausible is GDPR, CCPA, and PECR
              compliant. Learn more at{' '}
              <a
                href="https://plausible.io/privacy-focused-web-analytics"
                className="text-accent-blue-600 hover:text-accent-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                plausible.io
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations (e.g., Formspree for contact forms)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your
              personal information. However, no method of transmission over the internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-6">
              You have the right to access, correct, or delete your personal information. To
              exercise these rights, please contact us at hello@northern-analytics.com.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the &quot;Last
              updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Northern Analytics
              <br />
              Fort McMurray, AB, Canada
              <br />
              Email:{' '}
              <a
                href="mailto:hello@northern-analytics.com"
                className="text-accent-blue-600 hover:text-accent-blue-700"
              >
                hello@northern-analytics.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
