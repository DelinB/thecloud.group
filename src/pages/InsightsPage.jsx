// import React, { useMemo, useState } from 'react';
// import { CONTAINER, SECTION } from '../components/shared/constants';
// import { Icon } from '../components/shared/Icon';
// import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

// const CATEGORIES = [
//   'All',
//   'Real Cases',
//   'Technology Consulting',
//   'Data & AI',
//   'Software Engineering',
//   'SaaS & Product',
//   'Founder Notes',
// ];

// const FEATURED = {
//   category: 'Data & AI',
//   title: "The 88% uses AI. That doesn't mean the 88% is creating value.",
//   author: '[Author Name]',
//   readingTime: '8 min read',
//   date: 'September 23, 2026',
//   href: '#featured-article',
// };

// const ARTICLES = [
//   {
//     id: 1,
//     category: 'Real Cases',
//     title: '[Article title — Real Cases]',
//     excerpt: '[Add a two-line case-study excerpt here.]',
//     author: '[Author Name]',
//     date: 'September 2026',
//     readingTime: '6 min read',
//   },
//   {
//     id: 2,
//     category: 'Technology Consulting',
//     title: '[Article title — Technology Consulting]',
//     excerpt: '[Add a two-line consulting insight here.]',
//     author: '[Author Name]',
//     date: 'September 2026',
//     readingTime: '7 min read',
//   },
//   {
//     id: 3,
//     category: 'Data & AI',
//     title: '[Article title — Data & AI]',
//     excerpt: '[Add a two-line AI or data engineering insight here.]',
//     author: '[Author Name]',
//     date: 'September 2026',
//     readingTime: '5 min read',
//   },
//   {
//     id: 4,
//     category: 'Software Engineering',
//     title: '[Article title — Software Engineering]',
//     excerpt: '[Add a two-line software engineering lesson here.]',
//     author: '[Author Name]',
//     date: 'September 2026',
//     readingTime: '9 min read',
//   },
//   {
//     id: 5,
//     category: 'SaaS & Product',
//     title: '[Article title — SaaS & Product]',
//     excerpt: '[Add a two-line product or SaaS lesson here.]',
//     author: '[Author Name]',
//     date: 'September 2026',
//     readingTime: '6 min read',
//   },
//   {
//     id: 6,
//     category: 'Founder Notes',
//     title: '[Article title — Founder Notes]',
//     excerpt: '[Add a two-line founder lesson here.]',
//     author: '[Author Name]',
//     date: 'September 2026',
//     readingTime: '4 min read',
//   },
// ];

// function Reveal({ children, className = '', delay = 0 }) {
//   return (
//     <div
//       className={`transition-all duration-700 ease-out ${className}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// function SearchIcon({ className = 'w-5' }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//     >
//       <circle cx="11" cy="11" r="7" />
//       <path d="m20 20-4-4" />
//     </svg>
//   );
// }

// function SubscribeForm({ compact = false }) {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         if (!email.trim()) return;
//         setSubmitted(true);
//       }}
//       className={compact ? 'flex w-full flex-col gap-2 sm:flex-row' : 'flex w-full flex-col gap-2 sm:flex-row'}
//     >
//       <label className="sr-only" htmlFor={compact ? 'newsletter-email-mid' : 'newsletter-email-top'}>
//         Email address
//       </label>

//       <input
//         id={compact ? 'newsletter-email-mid' : 'newsletter-email-top'}
//         type="email"
//         value={email}
//         onChange={(event) => {
//           setEmail(event.target.value);
//           if (submitted) setSubmitted(false);
//         }}
//         required
//         placeholder="you@company.com"
//         className={[
//           'min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-5 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]',
//           compact ? 'h-11' : 'h-12',
//         ].join(' ')}
//       />

//       <button
//         type="submit"
//         className={[
//           'group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--fg)] font-medium text-[var(--bg)]',
//           compact ? 'h-11 px-4 text-xs' : 'h-12 px-5 text-sm',
//         ].join(' ')}
//       >
//         <span>{submitted ? 'Subscribed' : 'Subscribe'}</span>
//         {!submitted && (
//           <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//             <Icon name="arrow" className="w-3.5" />
//           </span>
//         )}
//       </button>

//       {submitted && (
//         <p className="sr-only" role="status">
//           Subscription request received.
//         </p>
//       )}
//     </form>
//   );
// }

// function Hero({ query, setQuery }) {
//   return (
//     <section className="relative overflow-hidden pt-32 pb-16">
//       <GlobalHeroBackground />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg)] via-[color:var(--bg)/.78] to-transparent"
//       />

//       <div className={`${CONTAINER} relative z-10`}>
//         <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
//           <Reveal>
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//               Insights
//             </p>

//             <h1 className="max-w-[12ch] text-[clamp(2.7rem,7vw,6.4rem)] font-normal leading-[.92] tracking-[-.055em]">
//               Insights from real engineering
//             </h1>

//             <p className="mt-6 max-w-2xl text-[clamp(.96rem,1.1vw,1.08rem)] leading-[1.65] text-[var(--muted)]">
//               No fluff. No buzzwords. Just what we&apos;ve learned building 2,000+ projects.
//             </p>
//           </Reveal>

//           <Reveal delay={120}>
//             <div className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-5 sm:p-6">
//               <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
//                 <SearchIcon className="w-4" />
//                 Search articles
//               </div>

//               <div className="relative">
//                 <SearchIcon className="pointer-events-none absolute left-4 top-1/2 w-4 -translate-y-1/2 text-[var(--muted)]" />
//                 <input
//                   id="insights-search"
//                   type="search"
//                   value={query}
//                   onChange={(event) => setQuery(event.target.value)}
//                   placeholder="Search articles..."
//                   className="h-12 w-full rounded-full border border-[var(--border)] bg-[var(--bg)] pl-11 pr-5 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
//                 />
//               </div>

//               <div className="mt-5 border-t border-[var(--border)] pt-5">
//                 <p className="text-xs font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
//                   Weekly newsletter
//                 </p>
//                 <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
//                   Real engineering lessons. One email per week.
//                 </p>
//                 <div className="mt-4">
//                   <SubscribeForm />
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FeaturedArticle() {
//   return (
//     <section id="featured-article" className={SECTION}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--fg)] text-[var(--bg)]">
//             <div className="grid gap-0 lg:grid-cols-[1.1fr_.9fr]">
//               <div className="relative min-h-[320px] overflow-hidden p-7 sm:p-10 lg:p-12">
//                 <div
//                   aria-hidden
//                   className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--accent)] opacity-25 blur-3xl"
//                 />
//                 <div className="relative">
//                   <span className="inline-flex rounded-full bg-[var(--accent)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--accent-ink)]">
//                     Featured Insight
//                   </span>

//                   <h2 className="mt-8 max-w-[13ch] text-[clamp(2rem,4.8vw,4.5rem)] leading-[.95] tracking-[-.05em]">
//                     {FEATURED.title}
//                   </h2>

//                   <a
//                     href={FEATURED.href}
//                     className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
//                   >
//                     <span className="underline underline-offset-4">Read Full Article</span>
//                     <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                       <Icon name="arrow" className="w-4 transition-transform group-hover:translate-x-1" />
//                     </span>
//                   </a>
//                 </div>
//               </div>

//               <div className="border-t border-[color:var(--bg)/.14] bg-[color:var(--bg)/.08] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
//                 <div className="flex h-full flex-col justify-between">
//                   <div>
//                     <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[color:var(--bg)/.5]">
//                       Article details
//                     </p>

//                     <div className="mt-6 space-y-5">
//                       <div>
//                         <p className="text-[10px] uppercase tracking-[.12em] text-[color:var(--bg)/.45]">
//                           Author
//                         </p>
//                         <p className="mt-1 text-sm font-medium">{FEATURED.author}</p>
//                       </div>

//                       <div>
//                         <p className="text-[10px] uppercase tracking-[.12em] text-[color:var(--bg)/.45]">
//                           Reading time
//                         </p>
//                         <p className="mt-1 text-sm font-medium">{FEATURED.readingTime}</p>
//                       </div>

//                       <div>
//                         <p className="text-[10px] uppercase tracking-[.12em] text-[color:var(--bg)/.45]">
//                           Published
//                         </p>
//                         <p className="mt-1 text-sm font-medium">{FEATURED.date}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-10 flex items-center gap-2 text-xs text-[color:var(--bg)/.55]">
//                     <Icon name="clock" className="w-4" />
//                     <span>{FEATURED.readingTime}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function ArticleCard({ article, index }) {
//   return (
//     <article className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--fg)/.24] sm:p-6">
//       <div className="flex items-center justify-between gap-4">
//         <span className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
//           {article.category}
//         </span>
//         <span className="text-[10px] text-[var(--muted)]">{String(index + 1).padStart(2, '0')}</span>
//       </div>

//       <h3 className="mt-6 line-clamp-2 min-h-[3.4rem] text-xl leading-[1.15] tracking-[-.025em]">
//         {article.title}
//       </h3>

//       <p className="mt-3 line-clamp-2 min-h-[3rem] text-sm leading-6 text-[var(--muted)]">
//         {article.excerpt}
//       </p>

//       <div className="mt-auto pt-8">
//         <div className="flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
//           <span>{article.author}</span>
//           <span>{article.readingTime}</span>
//         </div>

//         <div className="mt-3 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
//           <span className="text-[11px] text-[var(--muted)]">{article.date}</span>
//           <a
//             href={`#article-${article.id}`}
//             className="inline-flex items-center gap-1.5 text-xs font-semibold"
//           >
//             Read
//             <Icon name="arrow" className="w-3.5 transition-transform group-hover:translate-x-1" />
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }

// function CategoryFilter({ category, setCategory }) {
//   return (
//     <section id="categories" className="pb-4 pt-4">
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
//               Browse by category
//             </p>

//             <div className="flex gap-2 overflow-x-auto pb-2">
//               {CATEGORIES.map((item) => {
//                 const active = category === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition-colors ${
//                       active
//                         ? 'border-transparent bg-[var(--fg)] text-[var(--bg)]'
//                         : 'border-[var(--border)] bg-[color:var(--card)] text-[var(--muted)] hover:text-[var(--fg)]'
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function ArticleGrid({ category, setCategory, query, setQuery }) {
//   const filteredArticles = useMemo(() => {
//     const normalized = query.trim().toLowerCase();

//     return ARTICLES.filter((article) => {
//       const categoryMatches = category === 'All' || article.category === category;
//       const queryMatches =
//         !normalized ||
//         [article.title, article.excerpt, article.author, article.category]
//           .join(' ')
//           .toLowerCase()
//           .includes(normalized);

//       return categoryMatches && queryMatches;
//     });
//   }, [category, query]);

//   return (
//     <section id="articles" className={SECTION}>
//       <div className={CONTAINER}>
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//           <Reveal>
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//               Article library
//             </p>
//             <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               Ideas worth reading.
//             </h2>
//           </Reveal>

//           <Reveal delay={80} className="w-full max-w-md">
//             <div className="relative">
//               <SearchIcon className="pointer-events-none absolute left-4 top-1/2 w-4 -translate-y-1/2 text-[var(--muted)]" />
//               <input
//                 type="search"
//                 value={query}
//                 onChange={(event) => setQuery(event.target.value)}
//                 placeholder="Search articles..."
//                 className="h-11 w-full rounded-full border border-[var(--border)] bg-[color:var(--card)] pl-11 pr-5 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
//               />
//             </div>
//           </Reveal>
//         </div>

//         <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
//           {filteredArticles.map((article, index) => (
//             <Reveal key={article.id} delay={Math.min(index, 5) * 55}>
//               <ArticleCard article={article} index={index} />
//             </Reveal>
//           ))}
//         </div>

//         {filteredArticles.length === 0 && (
//           <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[color:var(--card)] px-6 py-12 text-center">
//             <p className="text-lg font-medium">No articles match that search.</p>
//             <p className="mt-2 text-sm text-[var(--muted)]">
//               Try another keyword or category.
//             </p>
//             <button
//               type="button"
//               onClick={() => {
//                 setQuery('');
//                 setCategory('All');
//               }}
//               className="mt-5 rounded-full bg-[var(--fg)] px-5 py-2.5 text-xs font-medium text-[var(--bg)]"
//             >
//               Clear filters
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// function MidNewsletter() {
//   return (
//     <section className={`${SECTION} bg-[color:var(--card)]`}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-6 sm:p-10 lg:p-12">
//             <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-center">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
//                   Weekly newsletter
//                 </p>
//                 <h2 className="mt-3 max-w-[15ch] text-[clamp(2rem,4vw,3.8rem)] leading-[.98] tracking-[-.05em]">
//                   Get insights before your competitors do.
//                 </h2>
//                 <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
//                   One email per week. Real engineering lessons. Unsubscribe anytime.
//                 </p>
//               </div>

//               <div>
//                 <SubscribeForm compact />
//               </div>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function FinalCTA() {
//   return (
//     <section id="consultation" className="relative overflow-hidden py-20 sm:py-28">
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,color-mix(in_srgb,var(--accent)_17%,transparent),transparent_36%),linear-gradient(180deg,var(--card),var(--bg))]"
//       />

//       <div className={`${CONTAINER} relative`}>
//         <Reveal>
//           <div className="mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] border border-[var(--border)] bg-[color:var(--bg)/.86] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16">
//             <p className="text-xs font-semibold uppercase tracking-[.17em] text-[var(--muted)]">
//               Talk to the team
//             </p>
//             <h2 className="mt-3 max-w-[11ch] text-[clamp(2.2rem,5.3vw,4.8rem)] leading-[.95] tracking-[-.05em]">
//               Prefer talking to building?
//             </h2>
//             <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">
//               Take the next step with a focused conversation about what you&apos;re trying to solve.
//             </p>

//             <a
//               href="/contact"
//               className="group mt-7 inline-flex h-12 items-center gap-3 rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)]"
//             >
//               Book Free Consultation
//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                 <Icon name="arrow" className="w-4 transition-transform group-hover:translate-x-1" />
//               </span>
//             </a>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// export default function InsightsPage() {
//   const [category, setCategory] = useState('All');
//   const [query, setQuery] = useState('');

//   return (
//     <>
//       <Hero query={query} setQuery={setQuery} />
//       <FeaturedArticle />
//       <CategoryFilter category={category} setCategory={setCategory} />
//       <ArticleGrid
//         category={category}
//         setCategory={setCategory}
//         query={query}
//         setQuery={setQuery}
//       />
//       <MidNewsletter />
//       <FinalCTA />

//       <style>{`
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           * {
//             scroll-behavior: auto !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

import React, { useMemo, useState } from 'react';
import { CONTAINER, SECTION } from '../components/shared/constants';
import { Icon } from '../components/shared/Icon';
import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

const CATEGORIES = [
  'All',
  'Real Cases',
  'Technology Consulting',
  'Data & AI',
  'Software Engineering',
  'SaaS & Product',
  'Founder Notes',
];

const FEATURED = {
  category: 'Data & AI',
  title: "The 88% uses AI. That doesn't mean the 88% is creating value.",
  author: 'Marcus Feld',
  readingTime: '8 min read',
  date: 'September 23, 2026',
  slug: 'the-88-percent-uses-ai',
};

const ARTICLES = [
  {
    id: 1,
    slug: 'rebuilding-14-year-old-erp',
    category: 'Real Cases',
    title: "We rebuilt a 14-year-old ERP in 9 months. Here's what we'd do differently.",
    excerpt:
      'A mid-size logistics company ran their entire operation on a system nobody could modify. The rebuild worked — the sequencing was wrong.',
    author: 'Elena Ríos',
    date: 'September 2026',
    readingTime: '6 min read',
  },
  {
    id: 2,
    slug: 'architecture-review-saved-400k',
    category: 'Technology Consulting',
    title: 'The architecture review that saved a client $400k',
    excerpt:
      'They were about to sign a three-year contract for a platform they didn’t need. Two weeks of architecture review changed the decision.',
    author: 'Tomas Berg',
    date: 'September 2026',
    readingTime: '7 min read',
  },
  {
    id: 3,
    slug: 'data-pipeline-is-lying',
    category: 'Data & AI',
    title: 'Your data pipeline is probably lying to you',
    excerpt:
      'Silent failures, timezone drift, and null handling — the three data quality bugs that break dashboards without warning anyone.',
    author: 'Priya Nair',
    date: 'September 2026',
    readingTime: '5 min read',
  },
  {
    id: 4,
    slug: 'integration-tests-before-unit-tests',
    category: 'Software Engineering',
    title: 'Why we still write integration tests before unit tests',
    excerpt:
      'Unit tests give you confidence in functions. Integration tests give you confidence in the system. Only one of those ships to production.',
    author: 'Daniel Okafor',
    date: 'September 2026',
    readingTime: '9 min read',
  },
  {
    id: 5,
    slug: 'per-user-pricing-trap',
    category: 'SaaS & Product',
    title: 'The per-user pricing trap (and how to escape it)',
    excerpt:
      'SaaS made sense when software was rented. When your team grows, the math stops working. Here’s the break-even point.',
    author: 'Sara Lindqvist',
    date: 'September 2026',
    readingTime: '6 min read',
  },
  {
    id: 6,
    slug: 'hiring-is-not-a-strategy',
    category: 'Founder Notes',
    title: 'Hiring senior engineers is not a growth strategy',
    excerpt:
      'Every founder thinks the next hire fixes the bottleneck. Usually the bottleneck is a decision nobody wants to make.',
    author: 'Marcus Feld',
    date: 'September 2026',
    readingTime: '4 min read',
  },
];

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SearchIcon({ className = 'w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function SubscribeForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!email.trim()) return;
        setSubmitted(true);
      }}
      className="flex w-full flex-col gap-2 sm:flex-row"
    >
      <label
        className="sr-only"
        htmlFor={compact ? 'newsletter-email-mid' : 'newsletter-email-top'}
      >
        Email address
      </label>

      <input
        id={compact ? 'newsletter-email-mid' : 'newsletter-email-top'}
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (submitted) setSubmitted(false);
        }}
        required
        placeholder="you@company.com"
        className={[
          'min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-5 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]',
          compact ? 'h-11' : 'h-12',
        ].join(' ')}
      />

      <button
        type="submit"
        className={[
          'group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--fg)] font-medium text-[var(--bg)]',
          compact ? 'h-11 px-4 text-xs' : 'h-12 px-5 text-sm',
        ].join(' ')}
      >
        <span>{submitted ? 'Subscribed' : 'Subscribe'}</span>
        {!submitted && (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
            <Icon name="arrow" className="w-3.5" />
          </span>
        )}
      </button>

      {submitted && (
        <p className="sr-only" role="status">
          Subscription request received.
        </p>
      )}
    </form>
  );
}

function Hero({ query, setQuery }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <GlobalHeroBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg)] via-[color:color-mix(in_srgb,var(--bg)_78%,transparent)] to-transparent"
      />

      <div className={`${CONTAINER} relative z-10`}>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Insights
            </p>

            <h1 className="max-w-[12ch] text-[clamp(2.7rem,7vw,6.4rem)] font-normal leading-[.92] tracking-[-.055em]">
              Insights from real engineering
            </h1>

            <p className="mt-6 max-w-2xl text-[clamp(.96rem,1.1vw,1.08rem)] leading-[1.65] text-[var(--muted)]">
              No fluff. No buzzwords. Just what we&apos;ve learned building 2,000+ projects.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
                <SearchIcon className="w-4" />
                Search articles
              </div>

              <div className="relative">
                <SearchIcon className="pointer-events-none absolute left-4 top-1/2 w-4 -translate-y-1/2 text-[var(--muted)]" />
                <input
                  id="insights-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search articles..."
                  className="h-12 w-full rounded-full border border-[var(--border)] bg-[var(--bg)] pl-11 pr-5 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />
              </div>

              <div className="mt-5 border-t border-[var(--border)] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
                  Weekly newsletter
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Real engineering lessons. One email per week.
                </p>
                <div className="mt-4">
                  <SubscribeForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedArticle() {
  return (
    <section id="featured-article" className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--fg)] text-[var(--bg)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_.9fr]">
              <div className="relative min-h-[320px] overflow-hidden p-7 sm:p-10 lg:p-12">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--accent)] opacity-25 blur-3xl"
                />
                <div className="relative">
                  <span className="inline-flex rounded-full bg-[var(--accent)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--accent-ink)]">
                    Featured Insight
                  </span>

                  <h2 className="mt-8 max-w-[13ch] text-[clamp(2rem,4.8vw,4.5rem)] leading-[.95] tracking-[-.05em]">
                    {FEATURED.title}
                  </h2>

                  <a
                    href={`/insights/${FEATURED.slug}`}
                    className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
                  >
                    <span className="underline underline-offset-4">Read Full Article</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                      <Icon
                        name="arrow"
                        className="w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </a>
                </div>
              </div>

              <div className="border-t border-[color:color-mix(in_srgb,var(--bg)_14%,transparent)] bg-[color:color-mix(in_srgb,var(--bg)_8%,transparent)] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[color:color-mix(in_srgb,var(--bg)_50%,transparent)]">
                      Article details
                    </p>

                    <div className="mt-6 space-y-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[.12em] text-[color:color-mix(in_srgb,var(--bg)_45%,transparent)]">
                          Author
                        </p>
                        <p className="mt-1 text-sm font-medium">{FEATURED.author}</p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[.12em] text-[color:color-mix(in_srgb,var(--bg)_45%,transparent)]">
                          Reading time
                        </p>
                        <p className="mt-1 text-sm font-medium">{FEATURED.readingTime}</p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[.12em] text-[color:color-mix(in_srgb,var(--bg)_45%,transparent)]">
                          Published
                        </p>
                        <p className="mt-1 text-sm font-medium">{FEATURED.date}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex items-center gap-2 text-xs text-[color:color-mix(in_srgb,var(--bg)_55%,transparent)]">
                    <Icon name="clock" className="w-4" />
                    <span>{FEATURED.readingTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArticleCard({ article, index }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--fg)_24%,transparent)] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
          {article.category}
        </span>
        <span className="text-[10px] text-[var(--muted)]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-6 line-clamp-2 min-h-[3.4rem] text-xl leading-[1.15] tracking-[-.025em]">
        {article.title}
      </h3>

      <p className="mt-3 line-clamp-2 min-h-[3rem] text-sm leading-6 text-[var(--muted)]">
        {article.excerpt}
      </p>

      <div className="mt-auto pt-8">
        <div className="flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <span>{article.author}</span>
          <span>{article.readingTime}</span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
          <span className="text-[11px] text-[var(--muted)]">{article.date}</span>
          <a
            href={`/insights/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold"
          >
            Read
            <Icon
              name="arrow"
              className="w-3.5 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

function CategoryFilter({ category, setCategory }) {
  return (
    <section id="categories" className="pb-4 pt-4">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
              Browse by category
            </p>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {CATEGORIES.map((item) => {
                const active = category === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition-colors ${
                      active
                        ? 'border-transparent bg-[var(--fg)] text-[var(--bg)]'
                        : 'border-[var(--border)] bg-[color:var(--card)] text-[var(--muted)] hover:text-[var(--fg)]'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArticleGrid({ category, setCategory, query, setQuery }) {
  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return ARTICLES.filter((article) => {
      const categoryMatches = category === 'All' || article.category === category;
      const queryMatches =
        !normalized ||
        [article.title, article.excerpt, article.author, article.category]
          .join(' ')
          .toLowerCase()
          .includes(normalized);

      return categoryMatches && queryMatches;
    });
  }, [category, query]);

  return (
    <section id="articles" className={SECTION}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Article library
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              Ideas worth reading.
            </h2>
          </Reveal>

          <Reveal delay={80} className="w-full max-w-md">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 w-4 -translate-y-1/2 text-[var(--muted)]" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles..."
                className="h-11 w-full rounded-full border border-[var(--border)] bg-[color:var(--card)] pl-11 pr-5 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <Reveal key={article.id} delay={Math.min(index, 5) * 55}>
              <ArticleCard article={article} index={index} />
            </Reveal>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[color:var(--card)] px-6 py-12 text-center">
            <p className="text-lg font-medium">No articles match that search.</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Try another keyword or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setCategory('All');
              }}
              className="mt-5 rounded-full bg-[var(--fg)] px-5 py-2.5 text-xs font-medium text-[var(--bg)]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function MidNewsletter() {
  return (
    <section className={`${SECTION} bg-[color:var(--card)]`}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-6 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
                  Weekly newsletter
                </p>
                <h2 className="mt-3 max-w-[15ch] text-[clamp(2rem,4vw,3.8rem)] leading-[.98] tracking-[-.05em]">
                  Get insights before your competitors do.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
                  One email per week. Real engineering lessons. Unsubscribe anytime.
                </p>
              </div>

              <div>
                <SubscribeForm compact />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="consultation" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,color-mix(in_srgb,var(--accent)_17%,transparent),transparent_36%),linear-gradient(180deg,var(--card),var(--bg))]"
      />

      <div className={`${CONTAINER} relative`}>
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--bg)_86%,transparent)] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[.17em] text-[var(--muted)]">
              Talk to the team
            </p>
            <h2 className="mt-3 max-w-[11ch] text-[clamp(2.2rem,5.3vw,4.8rem)] leading-[.95] tracking-[-.05em]">
              Prefer talking to building?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">
              Take the next step with a focused conversation about what you&apos;re trying to solve.
            </p>

            <a
              href="/contact"
              className="group mt-7 inline-flex h-12 items-center gap-3 rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)]"
            >
              Book Free Consultation
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                <Icon
                  name="arrow"
                  className="w-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function InsightsPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  return (
    <>
      <Hero query={query} setQuery={setQuery} />
      <FeaturedArticle />
      <CategoryFilter category={category} setCategory={setCategory} />
      <ArticleGrid
        category={category}
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
      />
      <MidNewsletter />
      <FinalCTA />

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  );
}