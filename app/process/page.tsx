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
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven Process
            </h1>
            <p className="text-xl text-gray-300">
              A structured 4-step methodology that delivers Power Platform solutions
              on time, on budget, and aligned with your business goals
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent-blue-500 mb-2">
                  {step.number}
                </div>
                <div className="font-semibold text-navy-900">{step.phase}</div>
                <div className="text-sm text-gray-600">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-accent-blue-500 to-accent-blue-600 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold mb-1">
                        STEP {step.number}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {step.phase}
                      </h2>
                      <p className="text-lg mt-2">{step.description}</p>
                    </div>
                    <div className="hidden md:block text-right">
                      <div className="text-5xl font-bold opacity-50">
                        {step.number}
                      </div>
                      <div className="text-sm mt-2">{step.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-8 text-lg">{step.details}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-4">
                        Key Activities
                      </h3>
                      <ul className="space-y-2">
                        {step.activities.map((activity, activityIndex) => (
                          <li
                            key={activityIndex}
                            className="flex items-start text-gray-700"
                          >
                            <svg
                              className="h-5 w-5 text-accent-blue-500 mr-2 mt-0.5 flex-shrink-0"
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
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-4">
                        Deliverables
                      </h3>
                      <ul className="space-y-2">
                        {step.deliverables.map(
                          (deliverable, deliverableIndex) => (
                            <li
                              key={deliverableIndex}
                              className="flex items-start text-gray-700"
                            >
                              <svg
                                className="h-5 w-5 text-accent-blue-500 mr-2 mt-0.5 flex-shrink-0"
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
                              {deliverable}
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
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Why This Process Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                Goal-Oriented
              </h3>
              <p className="text-gray-600">
                Every step is aligned with your business objectives and success
                metrics
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                Iterative & Agile
              </h3>
              <p className="text-gray-600">
                Regular checkpoints ensure we stay aligned and can adapt quickly
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600">
                100+ successful projects delivered using this methodology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss your project and how our proven process can deliver
            results for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
