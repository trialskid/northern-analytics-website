import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from '@/components/Icons';
import CheckItem from '@/components/CheckItem';
import { aboutStats, milestones, values, expertiseItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Jamey Gulley - PL-300 Certified Power BI Consultant',
  description: 'Jamey Gulley is a PL-300 certified Power BI Data Analyst and Microsoft Power Platform consultant based in Fort McMurray, Alberta. From Oil and Gas operations to founding Northern Analytics.',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            About <span className="gradient-text">me.</span>
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
            I spent years working at oil and gas facilities in Fort McMurray, Alberta. I saw the same thing everywhere: manual processes that ate up entire days, reports cobbled together by hand in Excel, people chasing approvals through email chains that went nowhere. Hours and hours wasted on stuff that should take minutes.
          </p>
          <p className="text-xl md:text-2xl text-apple-light/80 leading-relaxed mb-8 font-light">
            So I started fixing things. I built my first Power Automate flow to replace a process that took someone four hours every morning. It ran in about 90 seconds. That was the moment I got hooked. I kept finding more processes to automate, more reports to rebuild in Power BI, more problems to solve. And every time, the reaction was the same: "Why didn't we do this years ago?"
          </p>
          <p className="text-xl md:text-2xl text-apple-light/80 leading-relaxed mb-8 font-light">
            I got my PL-300 certification (Power BI Data Analyst) and kept going. Over 100 projects later, I have automated entire reporting systems, built custom apps for field crews, and helped teams get thousands of hours back every month. The work adds up fast when you stop doing things the hard way.
          </p>
          <p className="text-xl md:text-2xl text-apple-light/80 leading-relaxed font-light">
            I started Northern Analytics because smaller companies deserve the same quality of automation and analytics that the big operators get. I build solutions that save real time, surface the numbers that actually matter, and run without needing a team to maintain them. That is the whole point.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black section-divider py-24 md:py-32">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {aboutStats.map((stat, i) => (
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
            The journey.
          </h2>

          <div className="max-w-[680px] mx-auto space-y-0">
            {milestones.map((milestone, i) => (
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
            What I believe.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
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
                I know the Microsoft Power Platform inside out.
              </h2>
              <p className="text-xl text-apple-gray mb-10 font-light leading-relaxed">
                I have worked with every part of the Power Platform. The solutions I build are solid, follow Microsoft recommended patterns, and hold up when you need to change something down the road.
              </p>
              <div className="space-y-4">
                {expertiseItems.map((item, i) => (
                  <CheckItem key={i} className="text-apple-light/70 text-lg">{item}</CheckItem>
                ))}
              </div>
            </div>
            <div className="bg-[#161617] rounded-3xl p-10 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-apple-light tracking-[-0.02em] mb-4">
                Based in Fort McMurray
              </h3>
              <p className="text-apple-gray text-lg leading-relaxed mb-6">
                I work with businesses in Fort McMurray, Edmonton, Calgary, and across Alberta. Remote or on-site, whatever works.
              </p>
              <p className="text-apple-gray/70 text-base leading-relaxed">
                I know Northern Alberta. I know the industries up here and the real-world conditions your solutions need to work in. That context matters.
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
            Tell me what&apos;s eating your team&apos;s time. I&apos;ll figure out how to fix it.
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
