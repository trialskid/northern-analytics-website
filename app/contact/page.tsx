'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/mldlpgka', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, company, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setCompany('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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

              {status === 'success' ? (
                <div className="rounded-2xl border border-apple-blue/30 bg-apple-blue/10 px-6 py-10 text-center">
                  <svg className="w-10 h-10 text-apple-blue mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-apple-light mb-2">Thank you!</h3>
                  <p className="text-apple-gray text-base">We&apos;ve received your message and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-apple-gray text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#161617] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-apple-gray text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#161617] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-apple-gray text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-[#161617] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-apple-gray text-sm font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#161617] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or challenge..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong, please try again.</p>
                  )}

                  <button type="submit" disabled={status === 'submitting'} className="pill-button pill-button-primary disabled:opacity-50">
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </form>
              )}

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
