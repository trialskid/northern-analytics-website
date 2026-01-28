import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Northern Analytics - terms and conditions for using our services.',
};

export default function Terms() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-gray-300 mt-2">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using the Northern Analytics website and services, you agree to be
              bound by these Terms of Service. If you disagree with any part of these terms, you
              may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Services</h2>
            <p className="text-gray-700 mb-6">
              Northern Analytics provides Microsoft Power Platform consulting services, including
              but not limited to Power BI, Power Automate, Power Apps, SharePoint, and Excel
              solutions. Specific service terms will be outlined in individual project agreements
              or statements of work.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              The content, design, and materials on this website are owned by Northern Analytics
              and are protected by copyright and other intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our express written
              permission.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Project Deliverables</h2>
            <p className="text-gray-700 mb-6">
              Ownership and licensing of project deliverables will be specified in individual
              project agreements. Unless otherwise stated, custom solutions developed for clients
              remain the property of the client upon full payment, while Northern Analytics
              retains rights to general methodologies, templates, and tools.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Confidentiality</h2>
            <p className="text-gray-700 mb-6">
              We maintain strict confidentiality regarding client information and project details.
              Non-disclosure agreements may be executed for specific projects as needed.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the fullest extent permitted by law, Northern Analytics shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages resulting from
              your use of our services or website. Our total liability for any claims shall not
              exceed the amount paid by you for the specific services in question.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Warranties</h2>
            <p className="text-gray-700 mb-6">
              We strive to provide high-quality services but make no warranties regarding specific
              outcomes or results. Services are provided &quot;as is&quot; unless otherwise specified in a
              project agreement.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Payment Terms</h2>
            <p className="text-gray-700 mb-6">
              Payment terms will be specified in individual project agreements or statements of
              work. Unless otherwise agreed, invoices are due within 30 days of issuance.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Termination</h2>
            <p className="text-gray-700 mb-6">
              Either party may terminate a project engagement according to the terms specified in
              the project agreement. We reserve the right to refuse service to anyone for any
              reason at any time.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the
              Province of Alberta, Canada, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any
              material changes by updating the &quot;Last updated&quot; date. Your continued use of our
              services after such changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700">
              Northern Analytics
              <br />
              Fort McMurray, AB, Canada
              <br />
              Email:{' '}
              <a
                href="mailto:jameygulley@northern-analytics.com"
                className="text-accent-blue-600 hover:text-accent-blue-700"
              >
                jameygulley@northern-analytics.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
