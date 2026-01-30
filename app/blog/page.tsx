import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from '@/components/Icons';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog - Power Platform Insights & Automation Tips',
  description: 'Expert insights on Microsoft Power Platform, business automation, Power BI analytics, and digital transformation strategies.',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            The <span className="gradient-text">blog.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light">
            Insights on automation, analytics, and the Microsoft Power Platform.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-apple-black section-divider py-24 md:py-36">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-apple-gray text-xl">Posts coming soon.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-[#161617] rounded-2xl p-8 md:p-10 hover:bg-[#1c1c1e] transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <time dateTime={post.date} className="text-apple-blue text-xs font-medium uppercase tracking-widest">
                          {new Date(post.date).toLocaleDateString('en-CA', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <span className="text-apple-gray/50 text-xs">·</span>
                        <span className="text-apple-gray text-xs">{post.readingTime}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-apple-light tracking-[-0.02em] mb-3 group-hover:text-apple-blue transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-apple-gray text-base leading-relaxed mb-4">
                        {post.description}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-apple-blue/70 bg-apple-blue/10 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="hidden md:flex items-center text-apple-gray group-hover:text-apple-blue transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black section-divider py-28 md:py-40">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-[-0.03em] text-apple-light leading-[1.05] mb-6">
            Ready to <span className="gradient-text">automate?</span>
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Stop reading about it and start doing it. Book a free 30-minute consultation.
          </p>
          <Link href="/contact" className="pill-button pill-button-primary">
            Get started
            <ChevronRight />
          </Link>
        </div>
      </section>
    </>
  );
}
