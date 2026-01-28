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
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
        setErrorMessage('Something went wrong. Please try again or email us directly.');
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let&apos;s Talk About Your Project
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              Book a 30-minute consultation and receive a high-level ROI estimate
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-navy-900 mb-8">
                Send Us a Message
              </h2>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Thank you for your message!
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold">Error</p>
                  <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue-500 focus:border-accent-blue-500 transition-all text-base"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue-500 focus:border-accent-blue-500 transition-all text-base"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue-500 focus:border-accent-blue-500 transition-all text-base"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue-500 focus:border-accent-blue-500 transition-all text-base"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue-500 focus:border-accent-blue-500 transition-all text-base bg-white"
                    disabled={formStatus === 'submitting'}
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
                  <label
                    htmlFor="message"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue-500 focus:border-accent-blue-500 transition-all text-base resize-none"
                    disabled={formStatus === 'submitting'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg
                      className="h-7 w-7 text-accent-blue-500 mr-4 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <div className="font-bold text-navy-900 text-lg mb-1">Email</div>
                      <a
                        href="mailto:hello@northern-analytics.com"
                        className="text-accent-blue-600 hover:text-accent-blue-700 text-base"
                      >
                        hello@northern-analytics.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="h-7 w-7 text-accent-blue-500 mr-4 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <div className="font-bold text-navy-900 text-lg mb-1">Location</div>
                      <div className="text-gray-600 text-base">
                        Fort McMurray, AB, Canada
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 p-10 rounded-2xl text-white shadow-xl">
                <h3 className="text-3xl font-bold mb-6">What to Expect</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <svg
                      className="h-7 w-7 mr-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg leading-relaxed">Response within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-7 w-7 mr-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg leading-relaxed">Free 30-minute consultation</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-7 w-7 mr-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg leading-relaxed">High-level ROI estimate</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-7 w-7 mr-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg leading-relaxed">No obligation or pressure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
