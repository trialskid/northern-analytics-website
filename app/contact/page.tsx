import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact - Get in Touch',
  description: 'Book a 30-minute consultation and receive a high-level ROI estimate. Contact Northern Analytics for Power Platform consulting.',
};

export default function Contact() {
  const email = 'contact@northern-analytics.com';
  const subject = encodeURIComponent('Power Platform Consultation Request');
  const body = encodeURIComponent('Hi Jamey,\n\nI\'m interested in learning more about your Power Platform consulting services.\n\nName: \nCompany: \nPhone: \nService Interested In: \n\nMessage:\n\n');

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            Get in <span className="gradient-text">touch.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light">
            Book a 30-minute consultation and receive a high-level ROI estimate.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* CTA side */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-apple-light tracking-[-0.02em] mb-6">
                Let&apos;s start a conversation
              </h2>
              <p className="text-apple-gray text-lg leading-relaxed mb-10">
                Drop us an email. Tell us what&apos;s eating your team&apos;s time. We&apos;ll get back to you within 24 hours.
              </p>

              <a
                href={`mailto:${email}?subject=${subject}&body=${body}`}
                className="pill-button pill-button-primary"
              >
                Send us an email
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <div className="text-apple-light text-base font-medium mb-1">Email</div>
                    <a href={`mailto:${email}`} className="text-apple-blue hover:underline text-base">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <div className="text-apple-light text-base font-medium mb-1">Location</div>
                    <div className="text-apple-gray text-base">Fort McMurray, AB, Canada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-[#161617] rounded-3xl p-8 md:p-10 h-fit">
              <h3 className="text-xl md:text-2xl font-bold text-apple-light tracking-[-0.02em] mb-6">
                What to expect
              </h3>
              <ul className="space-y-4">
                {[
                  'Response within 24 hours',
                  'Free 30-minute consultation',
                  'High-level ROI estimate',
                  'No obligation or pressure',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-apple-blue/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-apple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-apple-light/70 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
