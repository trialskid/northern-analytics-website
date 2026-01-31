import ContactForm from '@/components/ContactForm';
import CheckItem from '@/components/CheckItem';
import { contactExpectations } from '@/lib/data';

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
            Book a 30-minute consultation and get a high-level ROI estimate. No strings attached.
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
                Tell me what&apos;s eating your team&apos;s time
              </h2>
              <p className="text-apple-gray text-lg leading-relaxed mb-10">
                Describe what&apos;s not working and I&apos;ll get back to you within 24 hours.
              </p>

              <ContactForm />

              <div className="mt-10 flex items-start gap-4">
                <svg className="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
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
            <div className="bg-card rounded-3xl p-8 md:p-10 h-fit">
              <h3 className="text-xl md:text-2xl font-bold text-apple-light tracking-[-0.02em] mb-6">
                What to expect
              </h3>
              <ul className="space-y-4">
                {contactExpectations.map((item, i) => (
                  <li key={i}>
                    <CheckItem className="text-apple-light/70 text-base">{item}</CheckItem>
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
