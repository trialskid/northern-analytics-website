import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services - Power BI, Power Automate, Power Apps Consulting',
  description: 'Expert Microsoft Power Platform services: Process Automation, Custom Applications, Business Intelligence, SharePoint Solutions, and Excel Engineering.',
};

export default function Services() {
  const services = [
    {
      icon: '⚡',
      title: 'Process Automation',
      tagline: 'Power Automate workflows that cut cycle times by up to 80%',
      description: 'Eliminate manual, repetitive tasks with intelligent automation. Our Power Automate solutions connect your systems, streamline approvals, and ensure consistent execution across your organization.',
      benefits: [
        'Reduce manual data entry and file handling',
        'Automate approval workflows and notifications',
        'Connect disparate systems seamlessly',
        'Ensure compliance with automated audit trails',
        'Scale operations without adding headcount',
      ],
    },
    {
      icon: '📱',
      title: 'Custom Applications',
      tagline: 'Low-code Power Apps built in weeks, not months',
      description: 'Build custom business applications without extensive coding. Our Power Apps solutions deliver mobile-ready, intuitive interfaces that integrate with your existing data and workflows.',
      benefits: [
        'Deploy mobile-ready apps in weeks',
        'Integrate seamlessly with Microsoft 365',
        'Empower users with intuitive interfaces',
        'Iterate quickly based on user feedback',
        'Maintain security and governance standards',
      ],
    },
    {
      icon: '📊',
      title: 'Business Intelligence',
      tagline: 'Interactive dashboards and automated reporting with Power BI',
      description: 'Transform raw data into actionable insights. Our Power BI solutions deliver real-time dashboards, automated reports, and self-service analytics that empower data-driven decision making.',
      benefits: [
        'Visualize KPIs in real-time dashboards',
        'Automate report generation and distribution',
        'Enable self-service analytics for teams',
        'Uncover trends and patterns in your data',
        'Make faster, data-driven decisions',
      ],
    },
    {
      icon: '🔗',
      title: 'SharePoint Solutions',
      tagline: 'Modern intranets and document automation. Secure, integrated, end-to-end',
      description: 'Build collaborative workspaces that enhance productivity. Our SharePoint solutions provide document management, team collaboration, and intranet capabilities that scale with your organization.',
      benefits: [
        'Centralize document storage and management',
        'Enable secure external collaboration',
        'Automate document workflows and approvals',
        'Create branded intranet portals',
        'Integrate with Microsoft 365 ecosystem',
      ],
    },
    {
      icon: '📈',
      title: 'Spreadsheet Engineering & Templates',
      tagline: 'Robust Excel models that scale with your data and governance policies',
      description: 'Transform spreadsheets into reliable business tools. Our Excel engineering services create scalable, maintainable models with proper documentation, validation, and governance.',
      benefits: [
        'Build complex financial and operational models',
        'Implement data validation and error checking',
        'Create reusable templates and tools',
        'Document formulas and business logic',
        'Integrate Excel with Power Platform services',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Microsoft Power Platform Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              Comprehensive solutions that transform how you work, built on the
              Microsoft Power Platform ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-7xl mb-6">{service.icon}</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-accent-blue-600 font-semibold mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Started
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-navy-900 mb-6">
                      Key Benefits
                    </h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-accent-blue-500 mr-4 mt-1 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 text-lg leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 leading-relaxed text-blue-50">
            Let&apos;s discuss how our Power Platform expertise can deliver measurable
            results for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
