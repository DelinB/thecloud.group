import React, { Fragment, useState } from 'react';
import {
  CONTAINER, Icon, GlobalHeroBackground,
  useReveal, useCountUp, useSectionTabMemory
} from '../components/shared';


/* ---------- SECTIONS 3+4: FILTER + ARTICLE GRID ---------- */
const CATEGORIES = [
  { name: 'Real Cases',            color: '#ef4444',        icon: 'filecheck' },
  { name: 'Technology Consulting', color: 'rgb(225,252,6)', icon: 'compass' },
  { name: 'Data & AI',             color: '#22c55e',        icon: 'spark' },
  { name: 'Software Engineering',  color: '#3b82f6',        icon: 'code' },
  { name: 'SaaS & Product',        color: '#a855f7',        icon: 'chart' },
  { name: 'Founder Notes',         color: '#f97316',        icon: 'pen' }
];
const CAT_BY_NAME = {};
CATEGORIES.forEach((c) => { CAT_BY_NAME[c.name] = c; });

/* TODO: titles, excerpts, authors and dates below are placeholders —
   replace with real content, and swap href="#" for real article URLs */
const ARTICLES = [
  { id: 'a1', category: 'Real Cases', title: 'We audited a SaaS that spent \u20AC400k on features nobody used',
    excerpt: 'Six months of discovery, 34 features shipped, 3 ever opened. Here\u2019s the post-mortem \u2014 and the four questions that would have caught it in week one.',
    author: 'David Ruiz', date: 'Sep 10, 2026', read: 6 },
  { id: 'a2', category: 'Technology Consulting', title: 'NIS2 is not a compliance project. It\u2019s an architecture project.',
    excerpt: 'Most companies treat NIS2 as paperwork. The ones that pass treat it as a reason to finally fix their architecture. The difference shows up in the audit.',
    author: 'Sofia Lang', date: 'Sep 2, 2026', read: 7 },
  { id: 'a3', category: 'Software Engineering', title: 'Your monolith isn\u2019t the problem. Your boundaries are.',
    excerpt: 'We\u2019ve watched teams spend years splitting a monolith and end up with a distributed monolith. The fix isn\u2019t microservices \u2014 it\u2019s drawing the right lines first.',
    author: 'David Ruiz', date: 'Aug 26, 2026', read: 9 },
  { id: 'a4', category: 'Technology Consulting', title: 'The POC trap: how 4 weeks beats 6 months',
    excerpt: 'Long discovery phases feel rigorous and produce decks. Short POCs feel risky and produce working software. We ran the numbers on 90+ projects.',
    author: 'Marc Vidal', date: 'Aug 18, 2026', read: 5 },
  { id: 'a5', category: 'Data & AI', title: 'Fine-tuning vs RAG: we ran both on the same data',
    excerpt: 'Same corpus, same evaluation set, two very different invoices. When each approach wins \u2014 with the benchmarks to back it.',
    author: 'Elena M\u00E1rquez', date: 'Aug 5, 2026', read: 12 },
  { id: 'a6', category: 'SaaS & Product', title: 'Churn isn\u2019t a metric. It\u2019s a product decision you already made.',
    excerpt: 'By the time churn shows up in your dashboard, the decision that caused it is six months old. How to find those decisions earlier.',
    author: 'Marc Vidal', date: 'Jul 28, 2026', read: 7 },
  { id: 'a7', category: 'Software Engineering', title: 'The Excel files that run your company are a liability',
    excerpt: 'Every company has them: the spreadsheet only one person understands, that the business quietly depends on. A practical guide to finding and retiring them.',
    author: 'Sofia Lang', date: 'Jul 15, 2026', read: 6 },
  { id: 'a8', category: 'Founder Notes', title: 'What 2,000 projects taught us about estimating software',
    excerpt: 'Every estimate is wrong. The good ones are wrong in a known direction, by a known amount. Our internal method, minus the survivorship bias.',
    author: 'Marc Vidal', date: 'Jul 3, 2026', read: 11 },
  { id: 'a9', category: 'Real Cases', title: 'SISCOVA: what digitizing a national petroleum company actually takes',
    excerpt: '\u20AC2.4M saved a year sounds like a slide-deck number. Here\u2019s the unglamorous engineering behind it: data migrations, change management, and 100% adoption.',
    author: 'Elena M\u00E1rquez', date: 'Jun 24, 2026', read: 10 },
  { id: 'a10', category: 'SaaS & Product', title: 'Pricing pages: the highest-ROI engineering nobody schedules',
    excerpt: 'A two-week pricing page rebuild outperformed a six-month feature roadmap. What we changed, what we measured, and what surprised us.',
    author: 'Sofia Lang', date: 'Jun 10, 2026', read: 5 },
  { id: 'a11', category: 'Founder Notes', title: 'Hiring your first engineer: what we\u2019d do differently',
    excerpt: 'Your first hire isn\u2019t a junior who codes what you say. It\u2019s a future technical decision-maker. The profile we look for now \u2014 and the one we wasted a year on.',
    author: 'Marc Vidal', date: 'May 28, 2026', read: 8 }
];

function ArticleCard({ a, i }) {
  const cat = CAT_BY_NAME[a.category];
  const initials = a.author.split(' ').map((w) => w[0]).slice(0, 2).join('');
  return (
    <article className="art-card card-in group relative overflow-hidden rounded-2xl p-6 flex flex-col gap-4"
      style={{ '--i': i, '--c': cat.color, background: 'var(--card)', border: '1px solid var(--border)' }}>

      <Icon name={cat.icon} className="uc-ghost w-24 h-24" />

      <div className="relative flex flex-col gap-3 flex-1">
        <span className="inline-flex items-center gap-2 t-chip uppercase tracking-wide self-start" style={{ color: 'var(--muted)' }}>
          <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
          {a.category}
        </span>
        <h3 className="t-h3 line-clamp-2" style={{ lineHeight: 1.25 }}>{a.title}</h3>
        <p className="t-small line-clamp-2" style={{ color: 'var(--muted)' }}>{a.excerpt}</p>
      </div>

      <div className="relative flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
        <span className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-medium shrink-0"
          style={{ background: 'var(--fg)', color: 'var(--bg)' }}>{initials}</span>
        <span className="flex flex-col min-w-0">
          <span className="t-small truncate">{a.author}</span>
          <span className="t-chip" style={{ color: 'var(--muted)' }}>{a.date} · {a.read} min</span>
        </span>
        <a href="#" onClick={(e) => e.preventDefault()} className="link-arrow ml-auto shrink-0" style={{ fontSize: '.85rem' }}>
          Read <Icon name="arrow" className="w-3.5" />
        </a>
      </div>
    </article>
  );
}

function Articles({ query, setQuery, category, setCategory }) {
  const q = query.trim().toLowerCase();
  const filtered = ARTICLES.filter((a) => {
    const matchesQ = !q || [a.title, a.excerpt, a.author, a.category].join(' ').toLowerCase().includes(q);
    const matchesC = category === 'All' || a.category === category;
    return matchesQ && matchesC;
  });

  const pill = (name) => {
    const active = category === name;
    const count = name === 'All' ? ARTICLES.length : ARTICLES.filter((a) => a.category === name).length;
    return (
      <button key={name} type="button" onClick={() => setCategory(name)} aria-pressed={active}
        className={'shrink-0 h-9 px-4 rounded-full t-chip whitespace-nowrap transition-opacity ' + (active ? '' : 'hover:opacity-70')}
        style={active ? { background: 'var(--fg)', color: 'var(--bg)' } : { color: 'var(--fg)' }}>
        {name}
        <span className="hidden sm:inline opacity-60 ml-1.5">{count}</span>
      </button>
    );
  };

  return (
    <section id="articles" className="relative w-full z-[1] pt-2 pb-14 md:pb-20">
      <div className="sticky top-[70px] md:top-[84px] z-40 py-3">
        <div className="container-x">
          <div className="no-scrollbar overflow-x-auto rounded-full flex items-center gap-1 p-1.5 shadow-sm"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            {pill('All')}
            {CATEGORIES.map((c) => pill(c.name))}
            <span className="ml-auto shrink-0 t-chip pr-3 hidden md:flex" style={{ color: 'var(--muted)' }}>
              {filtered.length} article{filtered.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>
      </div>

      <div className="container-x mt-8">
        {/* key on category only: switching replays the stagger; typing updates in place */}
        <div key={category} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((a, i) => <ArticleCard key={a.id} a={a} i={i} />)}

          {filtered.length === 0 && (
            <div className="card-in col-span-full flex flex-col items-center gap-4 py-20 text-center" style={{ '--i': 0 }}>
              <Icon name="search" className="w-10 h-10" style={{ color: 'var(--muted)' }} />
              <p className="t-h3">Nothing matches{q ? ' \u201C' + query.trim() + '\u201D' : ''}.</p>
              <p className="t-small" style={{ color: 'var(--muted)' }}>Try different keywords, or reset the filters.</p>
              <button type="button" onClick={() => { setQuery(''); setCategory('All'); }} className="btn-ghost">
                Clear search &amp; filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE DIVIDER ---------- */
function Band() {
  const items = ['no fluff', 'no buzzwords', 'real cases', 'from the trenches'];
  const loop = items.concat(items, items, items);
  return (
    <div className="marquee-mask w-full py-8 md:py-12 z-[1] relative" data-reveal>
      <div className="marquee-track slow">
        {loop.map((t, i) => (
          <Fragment key={i}>
            <span className="t-h2 uppercase whitespace-nowrap" style={{ opacity: .9 }}>{t}</span>
            <span className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/* ---------- SECTION 5: MID-PAGE NEWSLETTER ---------- */
function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section id="subscribe" className="relative w-full z-[1] py-14 md:py-20">
      <div className="container-x">
        <div data-reveal className="relative overflow-hidden rounded-3xl px-6 py-14 md:px-16 md:py-20 flex flex-col items-center text-center gap-7"
          style={{ background: 'linear-gradient(135deg, rgb(225,252,6) 0%, rgb(196,222,3) 100%)', color: '#000' }}>
          <Icon name="mail" className="absolute -top-8 -right-8 w-48 h-48" style={{ opacity: .12 }} />

          <h2 className="t-h2-sm uppercase max-w-[22ch]">Get insights before your competitors do.</h2>
          <p className="t-body max-w-md" style={{ color: 'rgba(0,0,0,.72)' }}>
            One email per week. Real engineering lessons. Unsubscribe anytime.
          </p>

          {sent ? (
            <div className="fade-in flex items-center gap-3">
              <span className="pop w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#000', color: 'rgb(225,252,6)' }}>
                <Icon name="check" className="w-5" />
              </span>
              <p className="t-h3">You&rsquo;re on the list.</p>
            </div>
          ) : (
            <form className="w-full max-w-xl flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input required type="email" placeholder="Your email" aria-label="Email for newsletter"
                className="flex-1 h-[52px] rounded-xl px-4 w-full"
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,.15)', color: '#000' }} />
              <button type="submit"
                className="h-[52px] px-8 rounded-full text-[.92rem] whitespace-nowrap transition-transform hover:-translate-y-px"
                style={{ background: '#000', color: '#fff' }}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="contact" className="relative w-full z-[1] py-14 md:py-20">
      <div className="container-x">
        <div data-reveal className="relative overflow-hidden rounded-3xl px-6 py-16 md:py-24 flex flex-col items-center text-center gap-7"
          style={{ background: 'var(--fg)', color: 'var(--bg)' }}>
          <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] aspect-square rounded-full blur-3xl opacity-30"
            style={{ background: 'radial-gradient(circle, rgb(225,252,6) 25%, transparent 70%)' }} />

          <h2 className="t-h2 uppercase max-w-[16ch]">Prefer talking to building?</h2>
          <p className="t-body max-w-md" style={{ opacity: .72 }}>
            2 hours. Free. No obligation. Just answers about whatever you&rsquo;ve been researching.
          </p>
          <a href="/#contact" className="btn-accent">
            Book Free Consultation
            <span className="btn-icon"><Icon name="arrow" className="w-4" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 2: FEATURED ARTICLE ---------- */
const CAT_DANDAI = { color: '#22c55e', icon: 'spark' };

function Featured() {
  const [ref, val] = useCountUp(88, 1400);

  return (
    <section id="featured" className="relative w-full z-[1] py-14 md:py-20">
      <div className="container-x">
        <div data-reveal className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ border: '1px solid var(--border)' }}>

          <div className="relative min-h-[280px] lg:min-h-[520px] p-8 md:p-12 flex flex-col justify-between overflow-hidden"
            style={{ background: 'linear-gradient(150deg, #0a0a0a 0%, #0a0a0a 45%, rgb(225,252,6) 135%)', color: '#fff' }}>
            <Icon name="spark" className="absolute -bottom-10 -right-10 w-56 h-56" style={{ opacity: .08 }} />

            <span className="chip t-chip self-start" style={{ background: 'var(--accent)', color: '#000' }}>Featured Insight</span>

            <div ref={ref} className="flex flex-col gap-3">
              <div className="t-stat tabular-nums leading-none" style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)' }}>
                {val}<span style={{ fontSize: '.4em' }}>%</span>
              </div>
              <p className="t-body" style={{ color: 'rgba(255,255,255,.75)' }}>of companies use AI.</p>
            </div>

            <p className="t-small uppercase tracking-wide" style={{ color: 'rgba(255,255,255,.55)' }}>
              Data &amp; AI · From our audit data
            </p>
          </div>

          <div className="p-8 md:p-12 flex flex-col gap-6 justify-between" style={{ background: 'var(--card)' }}>
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center gap-2 t-chip uppercase tracking-wide self-start" style={{ color: 'var(--muted)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: CAT_DANDAI.color }} />
                Data &amp; AI
              </span>
              <h2 className="t-h2-sm" style={{ lineHeight: 1.12 }}>
                The 88% uses AI. That doesn&rsquo;t mean the 88% is creating value.
              </h2>
              <p className="t-body line-clamp-4" style={{ color: 'var(--muted)' }}>
                Adoption was the easy part. Value is an engineering problem &mdash; and most dashboards are
                measuring activity, not outcomes. What separates the AI projects that pay back from the
                ones that just cost.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-medium"
                    style={{ background: 'var(--fg)', color: 'var(--bg)' }}>EM</span>
                  <span className="flex flex-col">
                    <span className="t-small">Elena M&aacute;rquez</span>
                    <span className="t-chip" style={{ color: 'var(--muted)' }}>Head of Data &amp; AI</span>
                  </span>
                </div>
                <p className="t-chip flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                  <Icon name="clock" className="w-3.5" /> 8 min read · September 23, 2026
                </p>
              </div>

              {/* TODO: point at the real article URL */}
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-primary self-start">
                Read Full Article
                <span className="btn-icon"><Icon name="arrow" className="w-4" /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 1: HERO ---------- */
function Hero({ query, setQuery }) {
  const [subscribed, setSubscribed] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    const el = document.getElementById('articles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden" style={{ minHeight: '100svh' }}>
      <GlobalHeroBackground />

      <div className="container-x flex flex-col items-center gap-7 md:gap-9 text-center">
        <nav aria-label="Breadcrumb" data-reveal className="t-chip flex items-center gap-2" style={{ color: 'var(--muted)' }}>
          <a href="/" className="hover:opacity-70">Home</a>
          <span>/</span>
          <span style={{ color: 'var(--fg)' }}>Insights</span>
        </nav>

        <h1 data-reveal style={{ '--d': '80ms' }} className="t-hero uppercase max-w-[16ch]">
          Insights from <span className="hl-wipe">real engineering</span>
        </h1>

        <p data-reveal style={{ '--d': '160ms', color: 'var(--muted)' }} className="t-body max-w-lg">
          No fluff. No buzzwords. Just what we&rsquo;ve learned building 2,000+ projects.
        </p>

        <form data-reveal style={{ '--d': '240ms' }} role="search" onSubmit={submitSearch}
          className="relative w-full max-w-2xl">
          <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: 18, height: 18, color: 'var(--muted)' }} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className={'field pad-l' + (query ? ' pad-r' : '')}
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center hover:opacity-70"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <Icon name="x" className="w-3" />
            </button>
          )}
        </form>

        {subscribed ? (
          <div data-reveal style={{ '--d': '320ms' }} className="fade-in flex items-center gap-3 chip t-chip">
            <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'var(--accent)', color: '#000' }}>
              <Icon name="check" className="w-3.5" />
            </span>
            You&rsquo;re in. Next issue lands Thursday.
          </div>
        ) : (
          <form data-reveal style={{ '--d': '320ms' }}
            onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
            className="w-full max-w-2xl flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Icon name="mail" className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ width: 18, height: 18, color: 'var(--muted)' }} />
              <input required type="email" placeholder="Your email" aria-label="Email for newsletter" className="field pad-l" />
            </div>
            <button type="submit" className="btn-sub">Subscribe</button>
          </form>
        )}

        <p data-reveal style={{ '--d': '380ms', color: 'var(--muted)' }} className="t-chip">
          One email per week · Unsubscribe anytime
        </p>

        <a data-reveal style={{ '--d': '460ms', background: 'var(--accent)' }} href="#featured" aria-label="Scroll down"
          className="bob mt-1 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-black">
          <Icon name="arrow" className="w-4 rotate-90" />
        </a>
      </div>
    </section>
  );
}

export default function InsightsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useSectionTabMemory([
    { id: 'hero', title: 'Insights' },
    { id: 'featured', title: 'Featured Article' },
    { id: 'articles', title: 'All Articles' },
    { id: 'subscribe', title: 'Newsletter' },
    { id: 'contact', title: 'Talk to Us' }
  ]);
  useReveal();

  return (
    <>
      <Hero query={query} setQuery={setQuery} />
      <Featured />
      <Articles
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
      />
      <Band />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
