'use client';

import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
        setErrorMessage('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setFormStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

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
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-apple-light tracking-[-0.02em] mb-8">
                Send us a message
              </h2>

              {formStatus === 'success' && (
                <div className="mb-8 p-5 bg-green-500/10 border border-green-500/20 rounded-2xl">
                  <p className="text-green-400 font-medium">Thank you for your message!</p>
                  <p className="text-green-400/70 text-sm mt-1">We&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-8 p-5 bg-red-500/10 border border-red-500/20 rounded-2xl">
                  <p className="text-red-400 font-medium">Error</p>
                  <p className="text-red-400/70 text-sm mt-1">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Name', type: 'text', required: true },
                  { id: 'email', label: 'Email', type: 'email', required: true },
                  { id: 'company', label: 'Company', type: 'text', required: false },
                  { id: 'phone', label: 'Phone', type: 'tel', required: false },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-apple-gray mb-2">
                      {field.label}{field.required ? ' *' : ''}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3 bg-[#161617] border border-white/[0.08] rounded-xl text-apple-light placeholder-apple-gray/50 focus:outline-none focus:border-apple-blue/50 focus:ring-1 focus:ring-apple-blue/50 transition-all text-base disabled:opacity-50"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-apple-gray mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 bg-[#161617] border border-white/[0.08] rounded-xl text-apple-light focus:outline-none focus:border-apple-blue/50 focus:ring-1 focus:ring-apple-blue/50 transition-all text-base disabled:opacity-50 appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="process-automation">Process Automation</option>
                    <option value="custom-apps">Custom Applications</option>
                    <option value="business-intelligence">Business Intelligence</option>
                    <option value="sharepoint">SharePoint Solutions</option>
                    <option value="excel">Spreadsheet Engineering</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-apple-gray mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 bg-[#161617] border border-white/[0.08] rounded-xl text-apple-light placeholder-apple-gray/50 focus:outline-none focus:border-apple-blue/50 focus:ring-1 focus:ring-apple-blue/50 transition-all text-base resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full pill-button pill-button-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-apple-light tracking-[-0.02em] mb-8">
                  Contact information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <div className="text-apple-light text-base font-medium mb-1">Email</div>
                      <a href="mailto:hello@northern-analytics.com" className="text-apple-blue hover:underline text-base">
                        hello@northern-analytics.com
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

              <div className="bg-[#161617] rounded-3xl p-8 md:p-10">
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
        </div>
      </section>
    </>
  );
}
