# Northern Analytics Website - Code Review

**Date:** 2026-01-29
**Reviewer:** RT (AI Assistant)
**Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript 5

---

## Summary

Overall this is a clean, well-structured Next.js App Router site. The code is consistent, uses server components by default (correctly), and the design system is cohesive. There are no critical security issues, but there are several improvements that would boost SEO, performance, accessibility, and maintainability.

**Scores:**
- Code Quality: 7/10
- SEO: 7/10
- Performance: 6/10
- Accessibility: 6/10
- Security: 8/10
- Best Practices: 7/10

---

## Critical Issues

### 1. Broken Schema.org Logo Reference
**Severity:** High | **File:** `components/Schema.tsx`

The `LocalBusiness` schema references `https://northern-analytics.com/logo.png` which returns a 404. Google Search Console will flag this as a structured data error.

**Fix:** Either create and upload a logo.png to the `/public` directory, or remove the `image` field until one exists.

### 2. No Public Assets / favicon / OG Image
**Severity:** High | **File:** `/public/` (empty)

The `/public` directory is empty. Missing:
- `favicon.ico` / `apple-touch-icon.png`
- Open Graph image (og-image.png) for social sharing
- Logo file referenced in Schema.tsx

**Fix:** Add at minimum a favicon and an OG image. Without these, the site looks unprofessional in browser tabs and when shared on LinkedIn/social media. This is especially important for a consulting business.

### 3. About Page Says "Founded in 2025" but We're in 2026
**Severity:** Medium | **File:** `app/about/page.tsx`

> "In 2025, he launched Northern Analytics."

This is technically correct (founded in 2025) but the journey timeline shows "2025 - Founded Northern Analytics" which may look stale. Consider updating to reflect current status.

---

## SEO Issues

### 4. No Canonical URLs
**Severity:** Medium | **Files:** All pages

Pages don't specify canonical URLs. While Next.js handles this decently by default, explicit canonicals prevent duplicate content issues (www vs non-www, trailing slashes).

**Fix:** Add `alternates.canonical` to each page's metadata, or add it globally in `layout.tsx`:
```tsx
alternates: {
  canonical: 'https://northern-analytics.com',
}
```

### 5. Missing OG Image in Metadata
**Severity:** Medium | **File:** `app/layout.tsx`

The OpenGraph config has no `images` array. LinkedIn and social media previews will show a generic link with no image.

**Fix:** Create an OG image (1200x630px) and add:
```tsx
openGraph: {
  images: [{ url: '/og-image.png', width: 1200, height: 630 }],
}
```

### 6. Blog Post OG Metadata Missing Image
**Severity:** Low | **File:** `app/blog/[slug]/page.tsx`

Blog post `generateMetadata` sets OG type to 'article' but no OG image.

### 7. LocalBusiness Schema Missing Phone Number
**Severity:** Low | **File:** `components/Schema.tsx`

The `LocalBusiness` schema has no `telephone` field. Google Business Profile expects this to match.

### 8. Empty `sameAs` Array in Schema
**Severity:** Low | **File:** `components/Schema.tsx`

`sameAs: []` should include LinkedIn company page URL and any other social profiles.

---

## Performance Issues

### 9. No Image Optimization
**Severity:** Medium

The site has zero images, which means zero Next.js `<Image>` component usage. While this keeps the site fast, adding:
- A professional headshot on the About page
- Service/process diagrams
- Client logos or case study visuals

...would significantly boost credibility. When you do add images, use `next/image` for automatic optimization.

### 10. Inline SVG Icons Repeated Everywhere
**Severity:** Medium | **Files:** All page files

The same SVG icons (arrow chevron, checkmark, lightning bolt, etc.) are copy-pasted across every page. This bloats the HTML output.

**Fix:** Extract common icons into a shared component:
```tsx
// components/Icons.tsx
export const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);
```

### 11. MDXContent Uses Client-Side Rendering
**Severity:** Medium | **File:** `components/MDXContent.tsx`

The MDXContent component is `'use client'` and does markdown-to-HTML conversion in a `useEffect`. This means:
- Content flashes (empty then populated)
- Not SEO-indexed on first paint
- Custom markdown parser is fragile

**Fix:** Process markdown server-side. Since this is App Router, the blog post page is a server component. Do the conversion there and pass HTML as a prop, or use a proper MDX pipeline (you already have `@mdx-js/loader` and `@next/mdx` in dependencies but aren't using them).

### 12. No Loading/Error States
**Severity:** Low

No `loading.tsx` or `error.tsx` files for any route. Adding these improves perceived performance.

---

## Accessibility Issues

### 13. Missing Skip Navigation Link
**Severity:** Medium | **File:** `app/layout.tsx`

No "skip to content" link for keyboard users. Standard accessibility requirement.

**Fix:** Add before `<Header />`:
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-apple-blue focus:text-white focus:px-4 focus:py-2 focus:rounded">
  Skip to content
</a>
```
And add `id="main-content"` to `<main>`.

### 14. Mobile Menu Not Trapping Focus
**Severity:** Medium | **File:** `components/Header.tsx`

When the mobile menu opens, focus is not trapped within it. Users can tab to elements behind the menu overlay.

### 15. No aria-current on Active Nav Link
**Severity:** Low | **File:** `components/Header.tsx`

Navigation links don't indicate the current page. Add `aria-current="page"` to the active link.

### 16. Color Contrast - apple-gray on Black
**Severity:** Low | **File:** `app/globals.css`

`#86868b` on `#000000` gives a contrast ratio of ~3.9:1. This passes AA for large text but fails for body text (needs 4.5:1). The subtitle/description text across the site uses this combination.

**Fix:** Lighten the gray slightly to `#98989d` or similar for body text contexts.

---

## Code Quality Issues

### 17. Duplicated Service/Benefits Data
**Severity:** Medium | **Files:** `app/page.tsx`, `app/services/page.tsx`

The services list with icons, titles, and descriptions is defined in both `page.tsx` (homepage) and `services/page.tsx`. If you add or change a service, you need to update both places.

**Fix:** Extract service data to a shared file:
```tsx
// lib/data.ts
export const services = [...];
```

### 18. Duplicated Navigation Array
**Severity:** Low | **Files:** `components/Header.tsx`, `components/Footer.tsx`

Navigation links are defined separately in Header and Footer.

**Fix:** Single source of truth in `lib/data.ts` or `lib/navigation.ts`.

### 19. Unused Tailwind Config Colors
**Severity:** Low | **File:** `tailwind.config.ts`

The config defines `navy` and `accent-blue` color palettes that aren't used anywhere. The actual colors are in `globals.css` using CSS custom properties via `@theme`.

**Fix:** Remove unused colors from `tailwind.config.ts` or migrate all colors there for consistency.

### 20. Unused MDX Dependencies
**Severity:** Low | **File:** `package.json`

`@mdx-js/loader`, `@mdx-js/react`, `@next/mdx`, and `remark-gfm` are installed but the blog uses a custom markdown parser instead. Either use the MDX pipeline properly or remove these deps.

### 21. No Data Integration Page
**Severity:** Low | **File:** `app/services/page.tsx`

The homepage lists 6 services including "Data Integration & Migration" but the services page only details 5 (missing Data Integration). Inconsistency between pages.

---

## Security

### 22. Google Site Verification Token Exposed
**Severity:** Low | **File:** `app/layout.tsx`

This is normal and expected, just noting it. The `fC-3M5E-rhgdzFBLm0C4kOVvwPmm0khlB1tyo6npmcU` verification token is public by design.

### 23. No Content Security Policy Headers
**Severity:** Low | **File:** `next.config.ts`

No security headers configured. Consider adding in `next.config.ts`:
```tsx
const nextConfig: NextConfig = {
  headers: async () => [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
    ],
  }],
};
```

---

## Content Issues

### 24. Contact Page Has No Form
**Severity:** Medium | **File:** `app/contact/page.tsx`

The contact page only offers a mailto link. Most potential clients expect a contact form. A mailto link:
- Doesn't work if they don't have a mail client configured
- Feels less professional
- Loses leads from people who won't bother

**Fix:** Add a simple form using a service like Formspree, Netlify Forms, or a custom API route.

### 25. Stats May Need Disclaimers
**Severity:** Low | **Files:** `app/page.tsx`, `app/about/page.tsx`

"100+ Projects Completed", "2,000+ Hours Saved Monthly", ">98% Client Satisfaction" are bold claims. As a new business, ensure these reflect Jamey's total career experience, not just Northern Analytics as an entity. Consider adding "across our founder's career" or similar qualifier.

---

## Quick Wins (Do These First)

1. **Add favicon + OG image** to `/public` (biggest visual impact)
2. **Fix Schema.tsx** logo reference (remove or add actual file)
3. **Add LinkedIn URL** to Schema.tsx `sameAs`
4. **Extract shared icons** into components (cleanest code win)
5. **Add contact form** (biggest conversion impact)
6. **Fix MDXContent** to render server-side (biggest perf win for blog)

---

## Nice to Have (Later)

- Add `loading.tsx` skeletons for routes
- Implement proper MDX pipeline (remove custom parser)
- Add structured data for blog posts (Article schema)
- Add breadcrumbs for blog posts
- Consider adding a "Case Studies" section
- Add Google Analytics or keep Plausible (already set up)
- Set up proper error monitoring (Sentry or similar)
- Add animations with `framer-motion` for scroll reveals (currently has CSS animation class but it's not applied anywhere)
