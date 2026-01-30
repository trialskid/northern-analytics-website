import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About - Jamey Gulley & Northern Analytics',
  description: 'Founded by Jamey Gulley, a business intelligence and automation expert with 5+ years of experience. 100+ projects delivered, saving clients 2,000+ hours monthly.',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            About <span className="gradient-text">us.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light">
            Big-company results without the big-company price tag.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <p className="text-xl md:text-2xl text-apple-light/80 leading-relaxed mb-8 font-light">
            Northern Analytics was started by Jamey Gulley. He has spent over five years building BI and automation solutions in Oil &amp; Gas and enterprise settings.
          </p>
          <p className="text-xl md:text-2xl text-apple-light/80 leading-relaxed mb-8 font-light">
            Over that time, he shipped 100+ projects on the Microsoft Power Platform, replacing manual busywork with automated workflows. His clients save over 2,000 hours a month combined.
          </p>
          <p className="text-xl md:text-2xl text-apple-light/80 leading-relaxed font-light">
            In 2025, he launched Northern Analytics. The idea was simple: smaller businesses deserve the same quality of automation and analytics that big companies get. We build solutions that save time, surface the numbers that matter, and run without needing extra people to maintain.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black section-divider py-24 md:py-32">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: '100+', label: 'Projects Completed' },
              { value: '2,000+', label: 'Hours Saved Monthly' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] text-apple-light mb-2">
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

      {/* Journey */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light text-center mb-16 md:mb-24">
            Our journey.
          </h2>

          <div className="max-w-[680px] mx-auto space-y-0">
            {[
              { year: '2020', title: 'Started in Power Platform', desc: 'Began specializing in Microsoft Power Platform in Oil & Gas industry.' },
              { year: '2020-2025', title: '100+ Projects Delivered', desc: 'Helped organizations automate processes and build data-driven solutions.' },
              { year: '2025', title: 'Founded Northern Analytics', desc: 'Launched to bring enterprise-grade results to businesses of any size.' },
            ].map((milestone, i) => (
              <div key={i} className="relative pl-12 pb-16 last:pb-0">
                {/* Line */}
                {i < 2 && (
                  <div className="absolute left-[7px] top-8 bottom-0 w-px bg-white/[0.08]" />
                )}
                {/* Dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-apple-blue" />
                <div className="text-apple-blue text-xs font-medium uppercase tracking-widest mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-apple-light tracking-[-0.02em] mb-3">
                  {milestone.title}
                </h3>
                <p className="text-apple-gray text-lg leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-apple-light text-center mb-16 md:mb-24">
            What we believe.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Results-Driven', desc: "If it doesn't save you time or money, we haven't done our job." },
              { title: 'Business-First', desc: 'We start with your problem, not the technology. The tech is just how we solve it.' },
              { title: 'Efficient', desc: 'Every solution we build is designed to get rid of wasted time.' },
              { title: 'No Hand-Off', desc: 'We teach your team to run things without us. The goal is independence, not dependency.' },
            ].map((value, i) => (
              <div key={i} className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors flex flex-col">
                <div className="text-3xl md:text-4xl font-bold gradient-text-blue tracking-[-0.03em] mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-semibold text-apple-light mb-3 tracking-[-0.01em]">
                  {value.title}
                </h3>
                <p className="text-apple-gray text-base leading-relaxed flex-1">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-apple-light tracking-[-0.02em] mb-6 leading-[1.1]">
                Deep Microsoft Power Platform expertise.
              </h2>
              <p className="text-xl text-apple-gray mb-10 font-light leading-relaxed">
                We have worked with every part of the Microsoft Power Platform. The solutions we build are solid, follow Microsoft recommended patterns, and hold up when you need to change something.
              </p>
              <div className="space-y-4">
                {[
                  'Power BI for business intelligence and analytics',
                  'Power Automate for workflow automation',
                  'Power Apps for custom business applications',
                  'SharePoint for collaboration and document management',
                  'Excel for advanced data modeling and templates',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-apple-blue/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-apple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-apple-light/70 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#161617] rounded-3xl p-10 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-apple-light tracking-[-0.02em] mb-4">
                Based in Fort McMurray
              </h3>
              <p className="text-apple-gray text-lg leading-relaxed mb-6">
                We work with businesses in Fort McMurray, across Alberta, and anywhere in Canada. Remote or on-site, whatever works.
              </p>
              <p className="text-apple-gray/70 text-base leading-relaxed">
                We know Northern Alberta. We know the industries up here and the real-world conditions your solutions need to work in. That context matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black section-divider py-28 md:py-40">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-[-0.03em] text-apple-light leading-[1.05] mb-6">
            Let&apos;s work <span className="gradient-text">together.</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Ready to transform your business processes with the Microsoft Power Platform?
          </p>
          <Link href="/contact" className="pill-button pill-button-primary">
            Get in touch
            <ChevronRight />
          </Link>
        </div>
      </section>
    </>
  );
}
