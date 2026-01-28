import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Process - 4-Step Power Platform Implementation',
  description: 'A proven 4-step methodology for Power Platform implementations: Discovery, Design, Development, and Deployment. From analysis to go-live in weeks, not months.',
};

export default function Process() {
  const processSteps = [
    {
      number: '01',
      phase: 'Discovery & Analysis',
      duration: '1-2 weeks',
      description: 'Map processes, align KPIs',
      details: 'We start by understanding your current state and desired outcomes. Through stakeholder interviews and process mapping, we identify automation opportunities, pain points, and success metrics.',
      activities: [
        'Stakeholder interviews and requirements gathering',
        'Current state process mapping and documentation',
        'Pain point and opportunity identification',
        'KPI definition and success criteria alignment',
        'Technical environment assessment',
        'High-level ROI estimation',
      ],
      deliverables: [
        'Process maps and workflow diagrams',
        'Requirements document',
        'Project charter and success metrics',
        'High-level solution approach',
      ],
    },
    {
      number: '02',
      phase: 'Solution Design',
      duration: '1 week',
      description: 'Architect scalable, secure Power Platform solution',
      details: 'We design a solution that balances technical excellence with business value. Our architecture ensures scalability, security, and maintainability while leveraging Power Platform best practices.',
      activities: [
        'Solution architecture design',
        'Data model and integration planning',
        'Security and compliance review',
        'User experience and interface design',
        'Technical specification documentation',
        'Development sprint planning',
      ],
      deliverables: [
        'Solution architecture document',
        'Technical specifications',
        'UI/UX mockups and wireframes',
        'Development roadmap and sprint plan',
      ],
    },
    {
      number: '03',
      phase: 'Development & Testing',
      duration: '2-8 weeks',
      description: 'Agile sprints, UAT, and performance benchmarking',
      details: 'Using agile methodology, we build your solution in iterative sprints. Each sprint includes development, testing, and stakeholder review to ensure we stay aligned with your needs.',
      activities: [
        'Iterative development in 1-2 week sprints',
        'Continuous integration and testing',
        'User acceptance testing (UAT) sessions',
        'Performance optimization and benchmarking',
        'Security testing and validation',
        'Documentation and training material creation',
      ],
      deliverables: [
        'Fully functional Power Platform solution',
        'Test results and quality assurance documentation',
        'User documentation and guides',
        'Training materials and videos',
      ],
    },
    {
      number: '04',
      phase: 'Deployment & Training',
      duration: '1 week',
      description: 'Go-live support, hand-over, success metrics dashboard',
      details: 'We ensure a smooth transition to production with comprehensive training, go-live support, and knowledge transfer. Your team will be fully equipped to use and maintain the solution.',
      activities: [
        'Production environment deployment',
        'User and administrator training sessions',
        'Go-live support and monitoring',
        'Knowledge transfer and documentation handover',
        'Success metrics dashboard setup',
        'Post-deployment optimization planning',
      ],
      deliverables: [
        'Production-ready solution',
        'Trained end users and administrators',
        'Complete documentation package',
        'Success metrics dashboard',
        'Support and maintenance plan',
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
              Our Proven Process
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              A structured 4-step methodology that delivers Power Platform solutions
              on time, on budget, and aligned with your business goals
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent-blue-500 mb-3">
                  {step.number}
                </div>
                <div className="font-bold text-navy-900 text-lg mb-1">{step.phase}</div>
                <div className="text-sm text-gray-600 font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-accent-blue-500 to-accent-blue-600 text-white p-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold mb-2 uppercase tracking-wider">
                        STEP {step.number}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        {step.phase}
                      </h2>
                      <p className="text-xl leading-relaxed text-blue-50">{step.description}</p>
                    </div>
                    <div className="hidden md:block text-right">
                      <div className="text-6xl font-bold opacity-30">
                        {step.number}
                      </div>
                      <div className="text-base mt-3 font-semibold">{step.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <p className="text-gray-700 mb-10 text-xl leading-relaxed">{step.details}</p>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-6">
                        Key Activities
                      </h3>
                      <ul className="space-y-3">
                        {step.activities.map((activity, activityIndex) => (
                          <li
                            key={activityIndex}
                            className="flex items-start text-gray-700"
                          >
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
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                            <span className="text-base leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-6">
                        Deliverables
                      </h3>
                      <ul className="space-y-3">
                        {step.deliverables.map(
                          (deliverable, deliverableIndex) => (
                            <li
                              key={deliverableIndex}
                              className="flex items-start text-gray-700"
                            >
                              <svg
                                className="h-6 w-6 text-accent-blue-500 mr-3 mt-0.5 flex-shrink-0"
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
                              <span className="text-base leading-relaxed">{deliverable}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Process Works */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 text-center mb-16">
            Why This Process Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Goal-Oriented
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every step is aligned with your business objectives and success
                metrics
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-6xl mb-6">🔄</div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Iterative & Agile
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Regular checkpoints ensure we stay aligned and can adapt quickly
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                100+ successful projects delivered using this methodology
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Let&apos;s discuss your project and how our proven process can deliver
            results for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-blue-500 hover:bg-accent-blue-400 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-blue-500/50"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
