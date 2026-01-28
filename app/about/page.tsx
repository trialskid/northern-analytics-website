import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Jamey Gulley & Northern Analytics',
  description: 'Founded by Jamey Gulley, a business intelligence and automation expert with 5+ years of experience. 100+ projects delivered, saving clients 2,000+ hours monthly.',
};

export default function About() {
  const milestones = [
    {
      year: '2020',
      title: 'Started in Power Platform',
      description: 'Began specializing in Microsoft Power Platform in Oil & Gas industry',
    },
    {
      year: '2020-2025',
      title: '100+ Projects Delivered',
      description: 'Helped organizations automate processes and build data-driven solutions',
    },
    {
      year: '2025',
      title: 'Founded Northern Analytics',
      description: 'Launched to bring enterprise-grade results to businesses of any size',
    },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes and ROI, not just deliverables',
    },
    {
      icon: '🔍',
      title: 'Business-First',
      description: 'Technology serves business goals, not the other way around',
    },
    {
      icon: '⚡',
      title: 'Efficiency-Focused',
      description: 'Every solution is designed to save time and eliminate waste',
    },
    {
      icon: '🤝',
      title: 'Partnership Approach',
      description: 'We work alongside you, ensuring knowledge transfer and long-term success',
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
              About Northern Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              Enterprise-grade Power Platform solutions for businesses of any size
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Northern Analytics was founded by Jamey Gulley, a business intelligence
              and automation expert with over 5 years of experience in Oil & Gas and
              enterprise environments. Since entering the field, Jamey has helped
              organizations replace manual processes with data-driven workflows on the
              Microsoft Power Platform, delivering 100+ projects and saving clients
              more than 2,000 hours every month.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              In 2025, Jamey launched Northern Analytics to make enterprise-grade
              results available to businesses of any size and industry. Combining
              technical depth with a clear understanding of business processes, we
              build solutions that surface insights, cut cycle times, and scale
              without extra headcount.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-blue-600 mb-3">100+</div>
              <div className="text-gray-700 font-medium text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-blue-600 mb-3">2,000+</div>
              <div className="text-gray-700 font-medium text-lg">Hours Saved Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-blue-600 mb-3">5+</div>
              <div className="text-gray-700 font-medium text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 text-center mb-16">
            Our Journey
          </h2>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pb-12 last:pb-0">
                {index < milestones.length - 1 && (
                  <div className="absolute left-9 top-20 h-full w-1 bg-accent-blue-300" />
                )}
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-18 h-18 bg-accent-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold z-10 shadow-lg p-5">
                    {milestone.year.split('-')[0].slice(2)}
                  </div>
                  <div className="flex-grow bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="text-sm text-accent-blue-600 font-bold mb-2 uppercase tracking-wide">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 text-center mb-16">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6 leading-tight">
                Deep Microsoft Power Platform Expertise
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                With extensive experience across the entire Microsoft Power Platform
                ecosystem, we deliver solutions that are technically sound, scalable,
                and aligned with Microsoft best practices.
              </p>
              <ul className="space-y-4">
                {[
                  'Power BI for business intelligence and analytics',
                  'Power Automate for workflow automation',
                  'Power Apps for custom business applications',
                  'SharePoint for collaboration and document management',
                  'Excel for advanced data modeling and templates',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
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
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 p-10 rounded-2xl text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-5">Based in Fort McMurray</h3>
              <p className="mb-6 text-lg leading-relaxed text-blue-50">
                Proudly serving businesses in Fort McMurray, Alberta, and across
                Canada with remote and on-site consulting services.
              </p>
              <p className="text-base opacity-90 leading-relaxed">
                We understand the unique challenges of businesses in Northern Alberta
                and bring solutions that work in real-world industrial and enterprise
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.4),transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Ready to transform your business processes with the Microsoft Power
            Platform?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-blue-500 hover:bg-accent-blue-400 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-blue-500/50"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
