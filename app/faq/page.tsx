import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from '@/components/Icons';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'FAQ - Common Questions About Power BI, Power Automate & Consulting',
  description: 'Answers to common questions about Power BI, Power Automate, project timelines, remote work, training, and what it is like working with Northern Analytics.',
};

const faqs = [
  {
    question: 'What is Power BI?',
    answer: 'Power BI is Microsoft\'s business intelligence tool. It connects to your data (Excel, databases, cloud services, whatever you have) and turns it into interactive dashboards and reports. Instead of someone spending Friday afternoon building a report by hand, Power BI does it automatically and keeps it up to date. Your team opens a dashboard and sees the numbers they need, live.',
  },
  {
    question: 'What is Power Automate?',
    answer: 'Power Automate is Microsoft\'s workflow automation tool. It connects your systems and automates repetitive tasks. Things like routing approvals, moving data between systems, sending notifications, generating documents. If your team does the same steps over and over, Power Automate can probably handle it without anyone touching it.',
  },
  {
    question: 'How long do projects take?',
    answer: 'Most projects take between 4 and 12 weeks from kickoff to go-live. Simple automation flows or dashboards can ship in 2 to 4 weeks. Bigger projects with multiple integrations and custom apps take closer to 8 to 12 weeks. I will give you a realistic timeline upfront so there are no surprises.',
  },
  {
    question: 'Do you work remotely?',
    answer: 'Yes. I am based in Fort McMurray, Alberta and work with clients across Canada. Most of my work is done remotely. If you need on-site work (for discovery sessions or training, for example), I can do that too, especially for companies in Fort McMurray, Edmonton, and Calgary.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'I started in Oil and Gas, and that is still a big part of what I do. But the problems I solve (manual processes, messy data, reports built by hand) exist in every industry. I have worked with logistics, construction, professional services, and more. If your team wastes time on repetitive work, I can help.',
  },
  {
    question: 'What does the process look like?',
    answer: 'Four steps. First, I learn how your team works today and where the pain is (1 to 2 weeks). Then I design the solution (1 week). Then I build and test it with your feedback along the way (2 to 8 weeks). Finally, I deploy it, train your team, and make sure everything runs smooth (1 week). You are involved the whole time so the final product is exactly what you need.',
  },
  {
    question: 'Do you offer training?',
    answer: 'Yes. Every project includes training for your team. I do not just build something and disappear. I make sure your people know how to use it, maintain it, and get the most out of it. The goal is for your team to run things without me.',
  },
  {
    question: 'What happens after the project?',
    answer: 'After go-live, I stick around for a support period to make sure everything is working. If something needs tweaking, I handle it. After that, your team has full documentation, training materials, and the knowledge to keep things running. If you need ongoing support or want to build more, I am here.',
  },
  {
    question: 'Are you certified?',
    answer: 'Yes. I am PL-300 certified, which is Microsoft\'s Power BI Data Analyst certification. I have also been building on the Microsoft Power Platform for over 5 years with 100+ projects completed.',
  },
  {
    question: 'How much does it cost?',
    answer: 'It depends on the scope. A simple automation or dashboard might be a few thousand dollars. A larger project with multiple workflows, integrations, and custom apps could be more. I give you a clear estimate upfront after the discovery phase. No surprises, no hidden fees. And the ROI usually pays for the project within a few months.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            Frequently asked <span className="gradient-text">questions.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light">
            Straight answers to the things people usually ask me.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-10 border-b border-white/[0.08] first:pt-0 last:border-b-0"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-apple-light tracking-[-0.01em] mb-4">
                  {faq.question}
                </h2>
                <p className="text-apple-gray text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black section-divider py-28 md:py-40">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-[-0.03em] text-apple-light leading-[1.05] mb-6">
            Still have <span className="gradient-text">questions?</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Book a free 30-minute call and I&apos;ll answer anything you want to know.
          </p>
          <Link href="/contact" className="pill-button pill-button-primary">
            Let&apos;s talk
            <ChevronRight />
          </Link>
        </div>
      </section>
    </>
  );
}
