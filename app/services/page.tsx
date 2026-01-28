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
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Microsoft Power Platform Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive solutions that transform how you work, built on the
              Microsoft Power Platform ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-lg text-accent-blue-600 font-semibold mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    Get Started
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-navy-900 mb-4">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-accent-blue-500 mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
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
      <section className="bg-accent-blue-500 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s discuss how our Power Platform expertise can deliver measurable
            results for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
