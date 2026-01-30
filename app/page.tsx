import type { Metadata } from 'next';
import Link from 'next/link';
import { services, stats, processSteps, homeBenefits } from '@/lib/data';
import { getServiceIcon, ChevronRight } from '@/components/Icons';
import CheckItem from '@/components/CheckItem';

export const metadata: Metadata = {
  title: 'Northern Analytics | Power BI, Power Automate & Power Apps Consulting in Canada',
  description: 'I build Power BI dashboards, Power Automate workflows, and custom Power Apps for Oil and Gas companies and beyond. Based in Fort McMurray, serving clients across Canada. PL-300 certified.',
};

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
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light mb-4">
            I kill manual processes, build custom apps in weeks, and make your data actually useful with Power BI.
          </p>
          <p className="text-lg text-apple-blue font-medium mb-10">
            Built for Oil &amp; Gas. Ready for any industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="pill-button pill-button-primary">
              Tell me what&apos;s eating your team&apos;s time
              <ChevronRight />
            </Link>
            <Link href="/services" className="pill-button pill-button-secondary">
              See what I build
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black section-divider py-20 md:py-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {stats.map((stat, i) => (
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

      {/* Results */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light mb-5">
              Real <span className="gradient-text">results.</span>
            </h2>
            <p className="text-xl text-apple-gray max-w-xl mx-auto font-light">
              Hard numbers from real projects. No fluff, no vague promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-blue tracking-[-0.03em] mb-4">
                2,000 hrs
              </div>
              <h3 className="text-lg font-semibold text-apple-light mb-2">Saved monthly</h3>
              <p className="text-apple-gray text-base leading-relaxed">
                I helped a logistics team save 2,000 hours a month by automating their shipment processing and approval workflows.
              </p>
            </div>
            <div className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-blue tracking-[-0.03em] mb-4">
                $90K/mo
              </div>
              <h3 className="text-lg font-semibold text-apple-light mb-2">In labor savings</h3>
              <p className="text-apple-gray text-base leading-relaxed">
                That same project cost under $85,000 to build. It paid for itself in less than a month.
              </p>
            </div>
            <div className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-blue tracking-[-0.03em] mb-4">
                80%
              </div>
              <h3 className="text-lg font-semibold text-apple-light mb-2">Less manual work</h3>
              <p className="text-apple-gray text-base leading-relaxed">
                Most of my automation projects cut manual process time by 80% or more. That time goes back to your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light mb-5">
              What I build.
            </h2>
            <p className="text-xl text-apple-gray max-w-xl mx-auto font-light">
              Power Platform solutions for real problems.
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
              See all services
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light mb-6 leading-[1.05]">
                Why Northern{' '}
                <span className="gradient-text-blue">Analytics.</span>
              </h2>
              <p className="text-xl text-apple-gray mb-10 font-light leading-relaxed">
                I know the tech inside and out, and I understand how your business actually runs. I came from Oil and Gas operations, not a consulting firm. That combination matters.
              </p>
              <div className="space-y-5">
                {homeBenefits.map((benefit, i) => (
                  <CheckItem key={i}>{benefit}</CheckItem>
                ))}
              </div>
            </div>

            <div className="bg-[#161617] rounded-3xl p-10 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-light tracking-[-0.02em] mb-4">
                Got a process that&apos;s eating your time?
              </h3>
              <p className="text-apple-gray text-lg leading-relaxed mb-8">
                Tell me what&apos;s slowing your team down. I&apos;ll show you what automation could save you in a free 30-minute call.
              </p>
              <Link href="/contact" className="pill-button pill-button-primary">
                Let&apos;s talk about it
                <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light mb-5">
              How I deliver.
            </h2>
            <p className="text-xl text-apple-gray max-w-xl mx-auto font-light">
              Four steps. No fluff. Working software at the end.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
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
              See the full process
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Serving Canada */}
      <section className="bg-apple-black section-divider py-20 md:py-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-apple-light mb-6">
            Serving Canada.
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed">
            Based in Fort McMurray. Working with companies in Edmonton, Calgary, and across Canada. Remote or on-site, coast to coast.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black section-divider py-28 md:py-40">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-[-0.03em] text-apple-light leading-[1.05] mb-6">
            Stop losing time to{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">manual work.</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Tell me what&apos;s slowing your team down. I&apos;ll map out a plan in a free 30-minute call.
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
