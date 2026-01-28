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
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Microsoft Power Platform
              <br />
              <span className="text-accent-blue-500">Consulting That Delivers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform manual processes into automated workflows. Build custom applications in weeks.
              Turn data into insights with Power BI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all border border-white/20"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end Power Platform solutions that scale with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Why Choose Northern Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine deep technical expertise with business process understanding
                to deliver measurable results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-accent-blue-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Let&apos;s quantify your automation opportunity. Book a 30-minute consultation
                and receive a high-level ROI estimate.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-accent-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Schedule Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold text-accent-blue-500/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <p className="text-sm text-accent-blue-600 font-semibold">
                    {step.duration}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-blue-500/30" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/process"
              className="inline-block bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-900 text-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Business Processes Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s quantify your automation opportunity. Book a 30-minute consultation
            and receive a high-level ROI estimate.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-blue-500 hover:bg-accent-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
