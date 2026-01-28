import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://northern-analytics.com'),
  title: {
    default: 'Northern Analytics | Power BI, Power Automate & Power Platform Consulting',
    template: '%s | Northern Analytics'
  },
  description: 'Microsoft Power Platform consulting in Fort McMurray, AB. Expert Power BI dashboards, Power Automate workflows, and custom Power Apps that save 2,000+ hours monthly.',
  keywords: ['Power BI consultant', 'Power Automate expert', 'Microsoft Power Platform', 'Fort McMurray', 'business intelligence', 'process automation', 'Power Apps', 'SharePoint solutions', 'Excel consulting'],
  authors: [{ name: 'Jamey Gulley' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://northern-analytics.com',
    siteName: 'Northern Analytics',
    title: 'Northern Analytics | Power BI, Power Automate & Power Platform Consulting',
    description: 'Microsoft Power Platform consulting in Fort McMurray, AB. Expert Power BI dashboards, Power Automate workflows, and custom Power Apps that save 2,000+ hours monthly.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Analytics | Power BI, Power Automate & Power Platform Consulting',
    description: 'Microsoft Power Platform consulting in Fort McMurray, AB. Expert Power BI dashboards, Power Automate workflows, and custom Power Apps that save 2,000+ hours monthly.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Schema />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

        {/* Plausible Analytics */}
        <Script
          defer
          data-domain="northern-analytics.com"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
