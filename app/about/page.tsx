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
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Northern Analytics
            </h1>
            <p className="text-xl text-gray-300">
              Enterprise-grade Power Platform solutions for businesses of any size
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Northern Analytics was founded by Jamey Gulley, a business intelligence
              and automation expert with over 5 years of experience in Oil & Gas and
              enterprise environments. Since entering the field, Jamey has helped
              organizations replace manual processes with data-driven workflows on the
              Microsoft Power Platform, delivering 100+ projects and saving clients
              more than 2,000 hours every month.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In 2025, Jamey launched Northern Analytics to make enterprise-grade
              results available to businesses of any size and industry. Combining
              technical depth with a clear understanding of business processes, we
              build solutions that surface insights, cut cycle times, and scale
              without extra headcount.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-blue-600 mb-2">2,000+</div>
              <div className="text-gray-600">Hours Saved Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Our Journey
          </h2>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pb-8">
                {index < milestones.length - 1 && (
                  <div className="absolute left-8 top-8 h-full w-0.5 bg-accent-blue-500/30" />
                )}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year.split('-')[0].slice(2)}
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md flex-grow">
                    <div className="text-sm text-accent-blue-600 font-semibold mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Deep Microsoft Power Platform Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With extensive experience across the entire Microsoft Power Platform
                ecosystem, we deliver solutions that are technically sound, scalable,
                and aligned with Microsoft best practices.
              </p>
              <ul className="space-y-3">
                {[
                  'Power BI for business intelligence and analytics',
                  'Power Automate for workflow automation',
                  'Power Apps for custom business applications',
                  'SharePoint for collaboration and document management',
                  'Excel for advanced data modeling and templates',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
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
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Based in Fort McMurray</h3>
              <p className="mb-6">
                Proudly serving businesses in Fort McMurray, Alberta, and across
                Canada with remote and on-site consulting services.
              </p>
              <p className="text-sm opacity-90">
                We understand the unique challenges of businesses in Northern Alberta
                and bring solutions that work in real-world industrial and enterprise
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your business processes with the Microsoft Power
            Platform?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
