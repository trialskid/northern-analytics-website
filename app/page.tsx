import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-apple-gray text-lg md:text-xl font-medium mb-4 tracking-wide">
            Microsoft Power Platform Consulting
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-[80px] lg:text-[96px] font-bold leading-[1.05] tracking-[-0.03em] mb-8">
            Automate.{' '}
            <span className="gradient-text">Analyze.</span>{' '}
            Accelerate.
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light mb-10">
            We transform manual processes into automated workflows, build custom applications in weeks, and turn data into insights with Power BI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="pill-button pill-button-primary">
              Book a consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/services" className="pill-button pill-button-secondary">
              Explore services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black section-divider py-20 md:py-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '100+', label: 'Projects Completed' },
              { value: '2,000+', label: 'Hours Saved Monthly' },
              { value: '>98%', label: 'Client Satisfaction' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] text-apple-light mb-2">
                  {stat.value}
                </div>
                <div className="text-apple-gray text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light mb-5">
              What we build.
            </h2>
            <p className="text-xl text-apple-gray max-w-xl mx-auto font-light">
              End-to-end Power Platform solutions that scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              {
                title: 'Process Automation',
                desc: 'Power Automate workflows that cut cycle times by up to 80%.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: 'Custom Applications',
                desc: 'Low-code Power Apps built in weeks, not months.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                ),
              },
              {
                title: 'Business Intelligence',
                desc: 'Interactive dashboards and automated reporting with Power BI.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
              {
                title: 'SharePoint Solutions',
                desc: 'Modern intranets and document automation. Secure, integrated, end-to-end.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                ),
              },
              {
                title: 'Spreadsheet Engineering',
                desc: 'Robust Excel models that scale with your data and governance policies.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M10.875 12c-.621 0-1.125.504-1.125 1.125M12 12c.621 0 1.125.504 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-2.25 0c-.621 0-1.125.504-1.125 1.125m0-1.5v1.5" />
                  </svg>
                ),
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors"
              >
                <div className="text-apple-blue mb-5">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-apple-light mb-3 tracking-[-0.01em]">
                  {service.title}
                </h3>
                <p className="text-apple-gray text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/services" className="pill-button pill-button-secondary">
              Learn more about our services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light mb-6 leading-[1.05]">
                Why Northern{' '}
                <span className="gradient-text-blue">Analytics.</span>
              </h2>
              <p className="text-xl text-apple-gray mb-10 font-light leading-relaxed">
                We combine deep technical expertise with business process understanding to deliver measurable results.
              </p>
              <div className="space-y-6">
                {[
                  'Reduce manual work by up to 80%',
                  'Scale processes without proportional staff increases',
                  'Make data-driven decisions with real-time analytics',
                  'Eliminate errors in repetitive tasks',
                  'Improve efficiency across departments',
                  'Leverage certified Microsoft Power Platform expertise',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-apple-blue/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-apple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-apple-light/80 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#161617] rounded-3xl p-10 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-light tracking-[-0.02em] mb-4">
                Ready to get started?
              </h3>
              <p className="text-apple-gray text-lg leading-relaxed mb-8">
                Let&apos;s quantify your automation opportunity. Book a 30-minute consultation and receive a high-level ROI estimate.
              </p>
              <Link href="/contact" className="pill-button pill-button-primary">
                Schedule your consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light mb-5">
              How we deliver.
            </h2>
            <p className="text-xl text-apple-gray max-w-xl mx-auto font-light">
              A proven 4-step methodology that delivers results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { num: '01', title: 'Discovery & Analysis', desc: 'Map processes, align KPIs.', time: '1-2 weeks' },
              { num: '02', title: 'Solution Design', desc: 'Architect scalable, secure Power Platform solution.', time: '1 week' },
              { num: '03', title: 'Development & Testing', desc: 'Agile sprints, UAT, and performance benchmarking.', time: '2-8 weeks' },
              { num: '04', title: 'Deployment & Training', desc: 'Go-live support, hand-over, success metrics dashboard.', time: '1 week' },
            ].map((step, i) => (
              <div key={i} className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors">
                <div className="text-5xl md:text-6xl font-bold gradient-text-blue tracking-[-0.04em] mb-6">
                  {step.num}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-apple-light mb-2 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-apple-gray text-sm leading-relaxed mb-4">
                  {step.desc}
                </p>
                <p className="text-apple-blue text-xs font-medium uppercase tracking-wider">
                  {step.time}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/process" className="pill-button pill-button-secondary">
              Learn more about our process
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black section-divider py-28 md:py-40">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-[-0.03em] text-apple-light leading-[1.05] mb-6">
            Transform your business{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">processes today.</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Let&apos;s quantify your automation opportunity. Book a 30-minute consultation and receive a high-level ROI estimate.
          </p>
          <Link href="/contact" className="pill-button pill-button-primary">
            Book your free consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
