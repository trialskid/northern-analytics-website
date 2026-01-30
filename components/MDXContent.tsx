import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);

  return String(result);
}

export default async function MDXContent({ content }: { content: string }) {
  const html = await markdownToHtml(content);

  return (
    <article
      className="prose-custom max-w-none
        [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:font-bold [&_h1]:text-apple-light [&_h1]:mt-16 [&_h1]:mb-6 [&_h1]:tracking-[-0.03em]
        [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:text-apple-light [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:tracking-[-0.02em]
        [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-apple-light [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:tracking-[-0.02em]
        [&_p]:text-apple-light/70 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6
        [&_a]:text-apple-blue [&_a]:hover:underline
        [&_strong]:text-apple-light
        [&_blockquote]:border-l-2 [&_blockquote]:border-apple-blue [&_blockquote]:pl-6 [&_blockquote]:my-6 [&_blockquote]:text-apple-gray [&_blockquote]:italic
        [&_ul]:my-6 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-apple-blue
        [&_ol]:my-6 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:marker:text-apple-blue
        [&_li]:text-apple-light/70 [&_li]:text-lg [&_li]:leading-relaxed
        [&_pre]:bg-[#161617] [&_pre]:rounded-2xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:my-6
        [&_pre_code]:text-sm [&_pre_code]:text-apple-light/80
        [&_code]:bg-[#161617] [&_code]:text-apple-blue [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
        [&_pre_code]:bg-transparent [&_pre_code]:p-0
        [&_hr]:border-white/[0.08] [&_hr]:my-12"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
