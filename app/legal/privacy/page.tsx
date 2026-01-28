import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Northern Analytics - how we collect, use, and protect your information.',
};

export default function Privacy() {
  return (
    <>
      <section className="bg-black text-white pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Privacy Policy</h1>
          <p className="text-apple-gray mt-3">Last updated: January 2025</p>
        </div>
      </section>

      <section className="bg-apple-black section-divider py-16 md:py-24">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Introduction</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                Northern Analytics (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website northern-analytics.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Information We Collect</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-apple-light/70 text-lg space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and business information</li>
                <li>Messages and inquiries submitted through our contact form</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">How We Use Your Information</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-apple-light/70 text-lg space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Analytics</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                We use Plausible Analytics, a privacy-friendly analytics tool that does not use
                cookies and does not collect personal data. Plausible is GDPR, CCPA, and PECR
                compliant. Learn more at{' '}
                <a
                  href="https://plausible.io/privacy-focused-web-analytics"
                  className="text-apple-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  plausible.io
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Information Sharing</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-apple-light/70 text-lg space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Data Security</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                We implement appropriate technical and organizational measures to protect your
                personal information. No method of transmission over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Your Rights</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                You have the right to access, correct, or delete your personal information. To
                exercise these rights, please contact us at{' '}
                <a href="mailto:contact@northern-analytics.com" className="text-apple-blue hover:underline">
                  contact@northern-analytics.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Changes to This Policy</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the &quot;Last
                updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Contact Us</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-apple-light/70 text-lg mt-3">
                Northern Analytics
                <br />
                Fort McMurray, AB, Canada
                <br />
                <a href="mailto:contact@northern-analytics.com" className="text-apple-blue hover:underline">
                  contact@northern-analytics.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
