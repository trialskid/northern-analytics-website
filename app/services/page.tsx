import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services - Power BI, Power Automate, Power Apps Consulting',
  description: 'Expert Microsoft Power Platform services: Process Automation, Custom Applications, Business Intelligence, SharePoint Solutions, and Excel Engineering.',
};

export default function Services() {
  const services = [
    {
      title: 'Process Automation',
      tagline: 'Power Automate workflows that cut cycle times by up to 80%.',
      description: 'Eliminate manual, repetitive tasks with intelligent automation. Our Power Automate solutions connect your systems, streamline approvals, and ensure consistent execution across your organization.',
      benefits: [
        'Reduce manual data entry and file handling',
        'Automate approval workflows and notifications',
        'Connect disparate systems seamlessly',
        'Ensure compliance with automated audit trails',
        'Scale operations without adding headcount',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'Custom Applications',
      tagline: 'Low-code Power Apps built in weeks, not months.',
      description: 'Build custom business applications without extensive coding. Our Power Apps solutions deliver mobile-ready, intuitive interfaces that integrate with your existing data and workflows.',
      benefits: [
        'Deploy mobile-ready apps in weeks',
        'Integrate seamlessly with Microsoft 365',
        'Empower users with intuitive interfaces',
        'Iterate quickly based on user feedback',
        'Maintain security and governance standards',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      title: 'Business Intelligence',
      tagline: 'Interactive dashboards and automated reporting with Power BI.',
      description: 'Transform raw data into actionable insights. Our Power BI solutions deliver real-time dashboards, automated reports, and self-service analytics that empower data-driven decision making.',
      benefits: [
        'Visualize KPIs in real-time dashboards',
        'Automate report generation and distribution',
        'Enable self-service analytics for teams',
        'Uncover trends and patterns in your data',
        'Make faster, data-driven decisions',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: 'SharePoint Solutions',
      tagline: 'Modern intranets and document automation. Secure, integrated, end-to-end.',
      description: 'Build collaborative workspaces that enhance productivity. Our SharePoint solutions provide document management, team collaboration, and intranet capabilities that scale with your organization.',
      benefits: [
        'Centralize document storage and management',
        'Enable secure external collaboration',
        'Automate document workflows and approvals',
        'Create branded intranet portals',
        'Integrate with Microsoft 365 ecosystem',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
    },
    {
      title: 'Spreadsheet Engineering & Templates',
      tagline: 'Robust Excel models that scale with your data and governance policies.',
      description: 'Transform spreadsheets into reliable business tools. Our Excel engineering services create scalable, maintainable models with proper documentation, validation, and governance.',
      benefits: [
        'Build complex financial and operational models',
        'Implement data validation and error checking',
        'Create reusable templates and tools',
        'Document formulas and business logic',
        'Integrate Excel with Power Platform services',
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M10.875 12c-.621 0-1.125.504-1.125 1.125M12 12c.621 0 1.125.504 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-2.25 0c-.621 0-1.125.504-1.125 1.125m0-1.5v1.5" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            Our <span className="gradient-text">services.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive solutions that transform how you work, built on the Microsoft Power Platform ecosystem.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-apple-black section-divider">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`py-24 md:py-32 ${index < services.length - 1 ? 'section-divider' : ''}`}
            >
              <div className={`grid md:grid-cols-2 gap-16 md:gap-20 items-start ${index % 2 === 1 ? '' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-apple-blue mb-6">{service.icon}</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-apple-light tracking-[-0.02em] mb-4 leading-[1.1]">
                    {service.title}
                  </h2>
                  <p className="text-lg text-apple-blue font-medium mb-5">
                    {service.tagline}
                  </p>
                  <p className="text-apple-gray text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link href="/contact" className="pill-button pill-button-primary">
                    Get started
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className={`bg-[#161617] rounded-3xl p-10 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-xl font-semibold text-apple-light mb-6 tracking-[-0.01em]">
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 rounded-full bg-apple-blue/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-apple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-apple-light/70 text-base leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black section-divider py-28 md:py-40">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-[-0.03em] text-apple-light leading-[1.05] mb-6">
            Ready to <span className="gradient-text">transform</span> your business?
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Let&apos;s discuss how our Power Platform expertise can deliver measurable results for your organization.
          </p>
          <Link href="/contact" className="pill-button pill-button-primary">
            Schedule a consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
