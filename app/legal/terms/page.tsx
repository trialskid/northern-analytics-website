import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Northern Analytics - terms and conditions for using our services.',
};

export default function Terms() {
  return (
    <>
      <section className="bg-black text-white pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Terms of Service</h1>
          <p className="text-apple-gray mt-3">Last updated: January 2025</p>
        </div>
      </section>

      <section className="bg-apple-black section-divider py-16 md:py-24">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Agreement to Terms</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                By accessing or using the Northern Analytics website and services, you agree to be
                bound by these Terms of Service. If you disagree with any part of these terms, you
                may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Services</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                Northern Analytics provides Microsoft Power Platform consulting services, including
                but not limited to Power BI, Power Automate, Power Apps, SharePoint, and Excel
                solutions. Specific service terms will be outlined in individual project agreements
                or statements of work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Intellectual Property</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                The content, design, and materials on this website are owned by Northern Analytics
                and are protected by copyright and other intellectual property laws. You may not
                reproduce, distribute, or create derivative works without our express written
                permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Project Deliverables</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                Ownership and licensing of project deliverables will be specified in individual
                project agreements. Unless otherwise stated, custom solutions developed for clients
                remain the property of the client upon full payment, while Northern Analytics
                retains rights to general methodologies, templates, and tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Confidentiality</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                We maintain strict confidentiality regarding client information and project details.
                Non-disclosure agreements may be executed for specific projects as needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Limitation of Liability</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                To the fullest extent permitted by law, Northern Analytics shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages resulting from
                your use of our services or website. Our total liability for any claims shall not
                exceed the amount paid by you for the specific services in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Warranties</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                We strive to provide high-quality services but make no warranties regarding specific
                outcomes or results. Services are provided &quot;as is&quot; unless otherwise specified in a
                project agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Payment Terms</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                Payment terms will be specified in individual project agreements or statements of
                work. Unless otherwise agreed, invoices are due within 30 days of issuance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Termination</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                Either party may terminate a project engagement according to the terms specified in
                the project agreement. We reserve the right to refuse service to anyone for any
                reason at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Governing Law</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the
                Province of Alberta, Canada, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Changes to Terms</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any
                material changes by updating the &quot;Last updated&quot; date. Your continued use of our
                services after such changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-apple-light mb-4 tracking-[-0.02em]">Contact Information</h2>
              <p className="text-apple-light/70 text-lg leading-relaxed">
                If you have questions about these Terms of Service, please contact us at:
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
