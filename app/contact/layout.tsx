import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Get in Touch',
  description: 'Book a 30-minute consultation and receive a high-level ROI estimate. Contact Northern Analytics for Power Platform consulting.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
