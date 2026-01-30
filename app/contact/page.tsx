import ContactForm from '@/components/ContactForm';

export default function Contact() {
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
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-apple-light tracking-[-0.02em] mb-6">
                Let&apos;s start a conversation
              </h2>
              <p className="text-apple-gray text-lg leading-relaxed mb-10">
                Tell us what&apos;s eating your team&apos;s time. We&apos;ll get back to you within 24 hours.
              </p>

              <ContactForm />

              <div className="mt-10 flex items-start gap-4">
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
