import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white border-t border-navy-700">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Northern Analytics</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Microsoft Power Platform consulting in Fort McMurray, AB, Canada
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-accent-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-300 hover:text-accent-blue-400 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li>Fort McMurray, AB, Canada</li>
              <li>
                <a href="mailto:hello@northern-analytics.com" className="hover:text-accent-blue-400 transition-colors">
                  hello@northern-analytics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Northern Analytics. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Link href="/legal/privacy" className="hover:text-accent-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="hover:text-accent-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
