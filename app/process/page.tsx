import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Process - 4-Step Power Platform Implementation',
  description: 'A proven 4-step methodology for Power Platform implementations: Discovery, Design, Development, and Deployment. From analysis to go-live in weeks, not months.',
};

export default function Process() {
  const steps = [
    {
      number: '01',
      phase: 'Discovery & Analysis',
      duration: '1-2 weeks',
      description: 'Map processes, align KPIs.',
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
      description: 'Architect scalable, secure Power Platform solution.',
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
      description: 'Agile sprints, UAT, and performance benchmarking.',
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
      description: 'Go-live support, hand-over, success metrics dashboard.',
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
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            Our <span className="gradient-text">process.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light">
            A structured 4-step methodology that delivers Power Platform solutions on time, on budget, and aligned with your business goals.
          </p>
        </div>
      </section>

      {/* Overview strip */}
      <section className="bg-apple-black section-divider py-12 md:py-16">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-blue tracking-[-0.04em] mb-2">
                  {step.number}
                </div>
                <div className="text-apple-light text-sm md:text-base font-medium mb-1">{step.phase}</div>
                <div className="text-apple-gray text-xs font-medium uppercase tracking-wider">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="bg-black section-divider">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`py-24 md:py-32 ${index < steps.length - 1 ? 'section-divider' : ''}`}
            >
              {/* Step header */}
              <div className="mb-12 md:mb-16">
                <div className="text-apple-blue text-xs font-medium uppercase tracking-widest mb-3">
                  Step {step.number} / {step.duration}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-apple-light tracking-[-0.02em] mb-5 leading-[1.1]">
                  {step.phase}
                </h2>
                <p className="text-xl text-apple-gray font-light leading-relaxed max-w-2xl">
                  {step.details}
                </p>
              </div>

              {/* Activities + Deliverables */}
              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <div>
                  <h3 className="text-lg font-semibold text-apple-light mb-6 tracking-[-0.01em]">
                    Key Activities
                  </h3>
                  <ul className="space-y-4">
                    {step.activities.map((activity, ai) => (
                      <li key={ai} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-apple-gray mt-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-apple-light/70 text-base leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-apple-light mb-6 tracking-[-0.01em]">
                    Deliverables
                  </h3>
                  <ul className="space-y-4">
                    {step.deliverables.map((deliverable, di) => (
                      <li key={di} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 rounded-full bg-apple-blue/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-apple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-apple-light/70 text-base leading-relaxed">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light text-center mb-16 md:mb-24">
            Why it works.
          </h2>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: 'Goal-Oriented', desc: 'Every step is aligned with your business objectives and success metrics.' },
              { title: 'Iterative & Agile', desc: 'Regular checkpoints ensure we stay aligned and can adapt quickly.' },
              { title: 'Proven Results', desc: '100+ successful projects delivered using this methodology.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text-blue tracking-[-0.03em] mb-5">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-semibold text-apple-light mb-3 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-apple-gray text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black section-divider py-28 md:py-40">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-[-0.03em] text-apple-light leading-[1.05] mb-6">
            Ready to <span className="gradient-text">get started?</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Let&apos;s discuss your project and how our proven process can deliver results for your organization.
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
