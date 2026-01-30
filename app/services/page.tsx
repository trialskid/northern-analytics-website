import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/data';
import { getServiceIcon, ChevronRight } from '@/components/Icons';
import CheckItem from '@/components/CheckItem';

export const metadata: Metadata = {
  title: 'Services - Power BI, Power Automate, Power Apps for Oil & Gas and Beyond',
  description: 'Process automation, custom apps, business intelligence, SharePoint, and data integration. Built for Oil and Gas operations. PL-300 certified Power BI consultant.',
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            What I <span className="gradient-text">build.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light">
            Everything I build runs on the Microsoft Power Platform. Here&apos;s what that looks like in practice.
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
                    Tell me what needs fixing
                    <ChevronRight />
                  </Link>
                </div>
                <div className={`bg-[#161617] rounded-3xl p-10 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-xl font-semibold text-apple-light mb-6 tracking-[-0.01em]">
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, bi) => (
                      <li key={bi}>
                        <CheckItem className="text-apple-light/70 text-base leading-relaxed">{benefit}</CheckItem>
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
            Stop reading about it.{' '}
            <span className="gradient-text">Start doing it.</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Tell me what&apos;s not working. I&apos;ll figure out how to fix it.
          </p>
          <Link href="/contact" className="pill-button pill-button-primary">
            Let&apos;s talk
            <ChevronRight />
          </Link>
        </div>
      </section>
    </>
  );
}
