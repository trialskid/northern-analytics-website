'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement)?.value;
    if (honeypot) return;
    if (pending) return;

    setPending(true);
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
    } finally {
      setPending(false);
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-apple-blue/30 bg-apple-blue/10 px-6 py-10 text-center">
        <svg className="w-10 h-10 text-apple-blue mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-apple-light mb-2">Thank you!</h3>
        <p className="text-apple-gray text-base">I got your message and will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field - hidden from real users */}
      <div className="absolute opacity-0 -z-10" aria-hidden="true">
        <label htmlFor="website">Do not fill this out</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

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
          placeholder="Tell me about your project or what's not working..."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Something went wrong, please try again.</p>
      )}

      <button type="submit" disabled={pending} className="pill-button pill-button-primary disabled:opacity-50">
        {status === 'submitting' ? 'Sending...' : 'Send message'}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </form>
  );
}
