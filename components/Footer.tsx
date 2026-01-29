import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
  ];

  return (
    <footer className="bg-apple-black section-divider">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
        {/* Links */}
        <div className="py-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-apple-gray border-b border-white/[0.08]">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
          <span className="text-white/[0.08]">|</span>
          <a href="mailto:contact@northern-analytics.com" className="hover:text-white transition-colors">
            contact@northern-analytics.com
          </a>
        </div>

        {/* Bottom */}
        <div className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-apple-gray/80">
          <p>Copyright &copy; {currentYear} Northern Analytics. All rights reserved.</p>
          <div className="flex gap-x-5">
            {legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-apple-gray transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
