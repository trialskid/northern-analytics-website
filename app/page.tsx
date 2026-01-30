import Link from 'next/link';
import { services } from '@/lib/data';
import { getServiceIcon, ChevronRight } from '@/components/Icons';

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
            We kill manual processes, build custom apps in weeks, and make your data actually useful with Power BI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="pill-button pill-button-primary">
              Book a consultation
              <ChevronRight />
            </Link>
            <Link href="/services" className="pill-button pill-button-secondary">
              Explore services
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black section-divider py-20 md:py-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {[
              { value: '100+', label: 'Projects Completed' },
              { value: '2,000+', label: 'Hours Saved Monthly' },
              { value: '>98%', label: 'Client Satisfaction' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-apple-light mb-2">
                  {stat.value}
                </div>
                <div className="text-apple-gray text-base font-medium">
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
              Power Platform solutions that grow with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors flex flex-col"
              >
                <div className="text-apple-blue mb-5">{getServiceIcon(service.icon)}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-apple-light mb-3 tracking-[-0.01em]">
                  {service.title}
                </h3>
                <p className="text-apple-gray text-base leading-relaxed flex-1">
                  {service.tagline}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/services" className="pill-button pill-button-secondary">
              Learn more about our services
              <ChevronRight />
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
                We know the tech inside and out, and we understand how your business actually runs. That combination is rare.
              </p>
              <div className="space-y-5">
                {[
                  'Reduce manual work by up to 80%',
                  'Scale processes without proportional staff increases',
                  'Make data-driven decisions with real-time analytics',
                  'Eliminate errors in repetitive tasks',
                  'Improve efficiency across departments',
                  'Work with certified Microsoft Power Platform specialists',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-apple-blue/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-apple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
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
                Tell us what&apos;s eating your team&apos;s time. We&apos;ll show you what automation could save you in a free 30-minute call.
              </p>
              <Link href="/contact" className="pill-button pill-button-primary">
                Schedule your consultation
                <ChevronRight />
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
              Four steps. No fluff. Working software at the end.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Discovery & Analysis', desc: 'Map processes, align KPIs.', time: '1-2 weeks' },
              { num: '02', title: 'Solution Design', desc: 'Design the right Power Platform solution for your needs.', time: '1 week' },
              { num: '03', title: 'Development & Testing', desc: 'Agile sprints, UAT, and performance benchmarking.', time: '2-8 weeks' },
              { num: '04', title: 'Deployment & Training', desc: 'Go-live support, hand-over, success metrics dashboard.', time: '1 week' },
            ].map((step, i) => (
              <div key={i} className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors flex flex-col">
                <div className="text-5xl md:text-6xl font-bold gradient-text-blue tracking-[-0.04em] mb-6">
                  {step.num}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-apple-light mb-2 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-apple-gray text-sm leading-relaxed mb-4 flex-1">
                  {step.desc}
                </p>
                <p className="text-apple-blue text-xs font-medium uppercase tracking-wider mt-auto">
                  {step.time}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/process" className="pill-button pill-button-secondary">
              Learn more about our process
              <ChevronRight />
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
            Tell us what&apos;s slowing your team down. We&apos;ll map out a plan in a free 30-minute call.
          </p>
          <Link href="/contact" className="pill-button pill-button-primary">
            Book your free consultation
            <ChevronRight />
          </Link>
        </div>
      </section>
    </>
  );
}
