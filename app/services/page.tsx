import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/data';
import { getServiceIcon, ChevronRight, CheckIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Services - Power BI, Power Automate, Power Apps Consulting',
  description: 'Expert Microsoft Power Platform services: Process Automation, Custom Applications, Business Intelligence, SharePoint Solutions, and Excel Engineering.',
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            Our <span className="gradient-text">services.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light">
            Everything we build runs on the Microsoft Power Platform. Here&apos;s what that looks like in practice.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`${index % 2 === 0 ? 'bg-apple-black' : 'bg-black'} section-divider`}
        >
          <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
            <div className="py-24 md:py-32">
              <div className={`grid md:grid-cols-2 gap-16 md:gap-20 items-start`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-apple-blue mb-6">{getServiceIcon(service.icon, 'w-10 h-10')}</div>
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
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-apple-black section-divider py-28 md:py-40">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-[-0.03em] text-apple-light leading-[1.05] mb-6">
            Ready to <span className="gradient-text">transform</span> your business?
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Tell us what&apos;s not working. We&apos;ll figure out how to fix it.
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
