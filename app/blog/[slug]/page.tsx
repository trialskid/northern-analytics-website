import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
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
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-apple-blue text-sm mb-8 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <time className="text-apple-blue text-xs font-medium uppercase tracking-widest">
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

      {/* CTA */}
      <section className="bg-black section-divider py-20 md:py-28">
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-apple-light tracking-[-0.02em] mb-4">
            Ready to automate?
          </h2>
          <p className="text-apple-gray text-lg mb-8">
            Let&apos;s discuss how these strategies can work for your business.
          </p>
          <Link href="/contact" className="pill-button pill-button-primary">
            Book a consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
