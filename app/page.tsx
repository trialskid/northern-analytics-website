import Link from 'next/link';

export default function Home() {
  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Hours Saved Monthly', value: '2,000+' },
    { label: 'Client Satisfaction', value: '>98%' },
    { label: 'Years Experience', value: '5+' },
  ];

  const services = [
    {
      title: 'Process Automation',
      description: 'Power Automate workflows that cut cycle times by up to 80%',
      icon: '⚡',
    },
    {
      title: 'Custom Applications',
      description: 'Low-code Power Apps built in weeks, not months',
      icon: '📱',
    },
    {
      title: 'Business Intelligence',
      description: 'Interactive dashboards and automated reporting with Power BI',
      icon: '📊',
    },
    {
      title: 'SharePoint Solutions',
      description: 'Modern intranets and document automation. Secure, integrated, end-to-end',
      icon: '🔗',
    },
    {
      title: 'Spreadsheet Engineering & Templates',
      description: 'Robust Excel models that scale with your data and governance policies',
      icon: '📈',
    },
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Scale processes without proportional staff increases',
    'Make data-driven decisions with real-time analytics',
    'Eliminate errors in repetitive tasks',
    'Improve efficiency across departments',
    'Leverage certified Microsoft Power Platform expertise',
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'Map processes, align KPIs',
      duration: '1-2 weeks',
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Architect scalable, secure Power Platform solution',
      duration: '1 week',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Agile sprints, UAT, and performance benchmarking',
      duration: '2-8 weeks',
    },
    {
      number: '04',
      title: 'Deployment & Training',
      description: 'Go-live support, hand-over, success metrics dashboard',
      duration: '1 week',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-24 md:py-40 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Microsoft Power Platform
              <br />
              <span className="text-accent-blue-400">Consulting That Delivers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Transform manual processes into automated workflows. Build custom applications in weeks.
              Turn data into insights with Power BI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-accent-blue-500 hover:bg-accent-blue-400 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-blue-500/50"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent-blue-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              End-to-end Power Platform solutions that scale with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-block bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                Why Choose Northern Analytics
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We combine deep technical expertise with business process understanding
                to deliver measurable results.
              </p>
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-accent-blue-500 mr-4 mt-1 flex-shrink-0"
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
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 p-10 rounded-2xl text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-5">Ready to Get Started?</h3>
              <p className="mb-8 text-lg leading-relaxed text-blue-50">
                Let&apos;s quantify your automation opportunity. Book a 30-minute consultation
                and receive a high-level ROI estimate.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-accent-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Schedule Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A proven 4-step methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-6xl font-bold text-accent-blue-500/20 mb-5 leading-none">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-accent-blue-600 font-semibold">
                    {step.duration}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-blue-300" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/process"
              className="inline-block bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-24 overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.4),transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your Business Processes Today
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let&apos;s quantify your automation opportunity. Book a 30-minute consultation
            and receive a high-level ROI estimate.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-blue-500 hover:bg-accent-blue-400 text-white px-12 py-5 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-blue-500/50"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
