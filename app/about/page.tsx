import type { Metadata } from 'next';
import Link from 'next/link';

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
            Enterprise-grade Power Platform solutions for businesses of any size.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <p className="text-xl md:text-2xl text-apple-light/80 leading-relaxed mb-8 font-light">
            Northern Analytics was founded by Jamey Gulley, a business intelligence and automation expert with over 5 years of experience in Oil & Gas and enterprise environments.
          </p>
          <p className="text-xl md:text-2xl text-apple-light/80 leading-relaxed mb-8 font-light">
            Since entering the field, Jamey has helped organizations replace manual processes with data-driven workflows on the Microsoft Power Platform, delivering 100+ projects and saving clients more than 2,000 hours every month.
          </p>
          <p className="text-xl md:text-2xl text-apple-light/80 leading-relaxed font-light">
            In 2025, Jamey launched Northern Analytics to make enterprise-grade results available to businesses of any size and industry. Combining technical depth with a clear understanding of business processes, we build solutions that surface insights, cut cycle times, and scale without extra headcount.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black section-divider py-24 md:py-32">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '100+', label: 'Projects Completed' },
              { value: '2,000+', label: 'Hours Saved Monthly' },
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { title: 'Results-Driven', desc: 'We focus on measurable outcomes and ROI, not just deliverables.' },
              { title: 'Business-First', desc: 'Technology serves business goals, not the other way around.' },
              { title: 'Efficiency-Focused', desc: 'Every solution is designed to save time and eliminate waste.' },
              { title: 'Partnership Approach', desc: 'We work alongside you, ensuring knowledge transfer and long-term success.' },
            ].map((value, i) => (
              <div key={i} className="bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors">
                <div className="text-3xl md:text-4xl font-bold gradient-text-blue tracking-[-0.03em] mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-semibold text-apple-light mb-3 tracking-[-0.01em]">
                  {value.title}
                </h3>
                <p className="text-apple-gray text-base leading-relaxed">
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
                With extensive experience across the entire Microsoft Power Platform ecosystem, we deliver solutions that are technically sound, scalable, and aligned with Microsoft best practices.
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
                      <svg className="w-3 h-3 text-apple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
                Proudly serving businesses in Fort McMurray, Alberta, and across Canada with remote and on-site consulting services.
              </p>
              <p className="text-apple-gray/70 text-base leading-relaxed">
                We understand the unique challenges of businesses in Northern Alberta and bring solutions that work in real-world industrial and enterprise environments.
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
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
