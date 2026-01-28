'use client';

import { useEffect, useState } from 'react';

// Simple markdown-to-HTML renderer for blog posts
// Handles: headings, paragraphs, bold, italic, links, lists, code blocks, inline code, blockquotes, horizontal rules
function markdownToHtml(md: string): string {
  let html = md;

  // Code blocks (``` ... ```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, _lang, code) => {
    return `<pre class="bg-[#161617] rounded-2xl p-6 overflow-x-auto my-6"><code class="text-sm text-apple-light/80">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-[#161617] text-apple-blue px-1.5 py-0.5 rounded text-sm">$1</code>');

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold text-apple-light mt-12 mb-4 tracking-[-0.02em]">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-3xl md:text-4xl font-bold text-apple-light mt-16 mb-6 tracking-[-0.02em]">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-4xl md:text-5xl font-bold text-apple-light mt-16 mb-6 tracking-[-0.03em]">$1</h1>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-2 border-apple-blue pl-6 my-6 text-apple-gray italic">$1</blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="border-white/[0.08] my-12" />');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong class="text-apple-light"><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="text-apple-light">$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-apple-blue hover:underline">$1</a>');

  // Unordered lists
  html = html.replace(/^(\s*)[-*] (.+)$/gm, '$1<li class="flex items-start gap-3 mb-2"><span class="text-apple-blue mt-2 flex-shrink-0">•</span><span>$2</span></li>');

  // Ordered lists
  html = html.replace(/^(\d+)\. (.+)$/gm, '<li class="flex items-start gap-3 mb-2"><span class="text-apple-blue font-medium flex-shrink-0">$1.</span><span>$2</span></li>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="my-6 space-y-1">$1</ul>');

  // Paragraphs - wrap remaining lines that aren't already HTML
  const lines = html.split('\n');
  const processed = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return line;
    return `<p class="text-apple-light/70 text-lg leading-relaxed mb-6">${trimmed}</p>`;
  });

  return processed.join('\n');
}

export default function MDXContent({ content }: { content: string }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    setHtml(markdownToHtml(content));
  }, [content]);

  return (
    <article
      className="prose-custom max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
