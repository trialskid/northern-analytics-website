import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Northern Analytics - Consulting, Automation, Data' }],
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
        <meta name="google-site-verification" content="fC-3M5E-rhgdzFBLm0C4kOVvwPmm0khlB1tyo6npmcU" />
        <Schema />
      </head>
      <body className={`${inter.className} tracking-tight`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-apple-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">
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
