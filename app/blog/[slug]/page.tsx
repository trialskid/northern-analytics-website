import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from '@/components/Icons';
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/blog';
import MDXContent from '@/components/MDXContent';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: 'Jamey Gulley' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Jamey Gulley'],
      tags: post.tags,
    },
  };
}

// Map of slug to related blog slugs and service page links
const relatedContent: Record<string, { posts: string[]; services: string[] }> = {
  '5-processes-every-business-should-automate': {
    posts: ['how-i-saved-one-team-2000-hours-a-month-with-power-automate'],
    services: ['Process Automation'],
  },
  'how-i-saved-one-team-2000-hours-a-month-with-power-automate': {
    posts: ['5-processes-every-business-should-automate', 'why-your-excel-reports-are-costing-you-more-than-you-think'],
    services: ['Process Automation', 'Business Intelligence'],
  },
  'power-apps-vs-buying-software-when-to-build-your-own': {
    posts: ['5-processes-every-business-should-automate'],
    services: ['Custom Applications'],
  },
  'power-bi-dashboards-that-actually-get-used-lessons-from-the-oil-patch': {
    posts: ['why-your-excel-reports-are-costing-you-more-than-you-think'],
    services: ['Business Intelligence'],
  },
  'sharepoint-isnt-just-a-file-dump-heres-what-youre-missing': {
    posts: ['5-processes-every-business-should-automate'],
    services: ['SharePoint Solutions'],
  },
  'why-your-excel-reports-are-costing-you-more-than-you-think': {
    posts: ['power-bi-dashboards-that-actually-get-used-lessons-from-the-oil-patch', 'how-i-saved-one-team-2000-hours-a-month-with-power-automate'],
    services: ['Business Intelligence', 'Spreadsheet Engineering'],
  },
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = relatedContent[slug];
  const relatedPosts = related
    ? allPosts.filter((p) => related.posts.includes(p.slug))
    : [];

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-apple-blue text-sm mb-8 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
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

          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-apple-gray font-light leading-relaxed">
            {post.description}
          </p>

          <p className="text-apple-gray/70 text-sm mt-4">
            By Jamey Gulley
          </p>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
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
      </section>

      {/* Content */}
      <section className="bg-apple-black section-divider py-16 md:py-24">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <MDXContent content={post.content} />
        </div>
      </section>

      {/* Related Posts & Services */}
      {related && (relatedPosts.length > 0 || related.services.length > 0) && (
        <section className="bg-black section-divider py-16 md:py-24">
          <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-apple-light mb-6 tracking-[-0.01em]">
                  Related posts
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="block bg-[#161617] rounded-2xl p-6 hover:bg-[#1c1c1e] transition-colors"
                    >
                      <div className="text-apple-light font-medium mb-1">{rp.title}</div>
                      <div className="text-apple-gray text-sm">{rp.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {related.services.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-apple-light mb-6 tracking-[-0.01em]">
                  Related services
                </h3>
                <div className="flex flex-wrap gap-3">
                  {related.services.map((service) => (
                    <Link
                      key={service}
                      href="/services"
                      className="text-sm text-apple-blue bg-apple-blue/10 px-4 py-2 rounded-full hover:bg-apple-blue/20 transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-black section-divider py-20 md:py-28">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-apple-light tracking-[-0.02em] mb-4">
            Want this kind of result for your team?
          </h2>
          <p className="text-apple-gray text-lg mb-8">
            Tell me what&apos;s eating your team&apos;s time. I&apos;ll show you what&apos;s possible.
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
