// import React, { useEffect, useState } from 'react';
// import { CONTAINER, SECTION } from '../components/shared/constants';
// import { Icon } from '../components/shared/Icon';
// import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

// /* ------------------------------------------------------------------
//    Article content keyed by slug.
//    Add new entries here to publish new articles.
//    The slug MUST match what's used in InsightsPage's ARTICLES list.
// ------------------------------------------------------------------ */
// const ARTICLES_BY_SLUG = {
//   'the-88-percent-uses-ai': {
//     category: 'Data & AI',
//     title: "The 88% uses AI. That doesn't mean the 88% is creating value.",
//     author: 'Marcus Feld',
//     authorRole: 'Principal Engineer, Data & AI',
//     readingTime: '8 min read',
//     date: 'September 23, 2026',
//     intro:
//       'Adoption numbers are the easiest metric to move and the easiest to mistake for progress. Every quarter, another survey reports that a higher percentage of companies are "using AI." Almost none of them report what it actually changed.',
//     keyTakeaway:
//       'Adoption measures intent. Cycle time, error rate, and cost per unit of work measure whether anything actually changed.',
//     content: [
//       {
//         eyebrow: '01',
//         heading: 'The signal is not the outcome',
//         paragraphs: [
//           'A dashboard, a chatbot, a copilot inside an IDE — these all count as "using AI." Adoption surveys do not distinguish between a pilot that three people touched once and a system that runs a core business process. When the number goes up, it usually means another team signed up for another tool. It almost never means a process got faster, cheaper, or more reliable.',
//           'The companies reporting the largest value from AI are rarely the ones with the most AI tools. They are the ones that picked a specific bottleneck — a slow underwriting process, a manual QA step, a support queue that nobody wanted to staff — and used AI to remove it. The tool is incidental. The bottleneck was the point.',
//         ],
//       },
//       {
//         eyebrow: '02',
//         heading: 'Where value gets lost',
//         paragraphs: [
//           'Most AI initiatives die in the gap between demo and deployment. The demo works on clean examples. Production is messy: PDFs scanned at an angle, support tickets written in three languages, an ERP that exports dates in a format nobody documented. By the time the team hits that reality, the budget is spent and the executive sponsor has moved on to the next initiative.',
//           'The other failure mode is subtler. A team ships an AI feature that works, but nobody changed the process around it. The output still needs to be reviewed by the same person, in the same queue, at the same speed. Throughput does not move because the human step did not move. The AI became an extra step, not a replacement for one.',
//         ],
//       },
//       {
//         eyebrow: '03',
//         heading: 'What to measure instead',
//         paragraphs: [
//           'Stop counting adoption. Start counting cycle time, error rate, and cost per unit of work. If a process used to take four days and now takes three, that is value. If it used to require three approvals and now requires two, that is value. "We rolled out Copilot to 400 engineers" is not value — it is a license expense.',
//           'The uncomfortable measurement is the one that forces a comparison. Pick one workflow. Measure it before AI. Measure it after. If the number did not move, the tool did not create value — no matter how many people are using it.',
//         ],
//       },
//     ],
//   },

//   'rebuilding-14-year-old-erp': {
//     category: 'Real Cases',
//     title: "We rebuilt a 14-year-old ERP in 9 months. Here's what we'd do differently.",
//     author: 'Elena Ríos',
//     authorRole: 'Delivery Lead, Enterprise Systems',
//     readingTime: '6 min read',
//     date: 'September 2026',
//     intro:
//       'The client had been running their entire logistics operation on a system built in 2012 by a vendor that no longer existed. The database still worked. Nobody could change it. This is the story of the rebuild — and the three sequencing decisions we would reverse today.',
//     keyTakeaway:
//       'A rebuild is not a software project. It is a business continuity project that happens to involve software.',
//     content: [
//       {
//         eyebrow: '01',
//         heading: 'Why the old system could not simply be replaced',
//         paragraphs: [
//           'The system ran dispatch, billing, and driver settlement for roughly 400 vehicles per day. Every process in the company touched it. There was no documentation, no test environment, and no way to run a parallel trial without freezing operations for a week.',
//           'The instinct was to replace it whole. We spent two weeks mapping every workflow and every integration before writing a single line of new code. That mapping changed the plan. Half of what the old system did was redundant — a consequence of years of patches, not business requirements.',
//         ],
//       },
//       {
//         eyebrow: '02',
//         heading: 'What we would sequence differently',
//         paragraphs: [
//           'We rebuilt the system as a monolith first, then split it. That was a mistake. The monolith was faster to ship, but it re-created many of the coupling problems we were trying to remove. If we did it again, we would have started with clear service boundaries — even at the cost of a longer initial delivery.',
//           'We also delayed the billing migration to the end. Billing is the highest-risk workflow, and by the time we got there, the team was exhausted and the deadline was close. Next time, we would migrate the highest-risk workflow first, while the team still has energy and budget.',
//         ],
//       },
//       {
//         eyebrow: '03',
//         heading: 'What actually went right',
//         paragraphs: [
//           'Weekly demos with the operations team kept the project honest. Every Friday, the dispatchers saw what had changed and told us what was wrong. That feedback loop caught more bugs than any QA process we could have designed.',
//           'We also kept the old system running in read-only mode for four months after launch. It was not elegant, but it meant nobody ever lost access to a record they needed. Business continuity beat architectural purity every time.',
//         ],
//       },
//     ],
//   },

//   'architecture-review-saved-400k': {
//     category: 'Technology Consulting',
//     title: 'The architecture review that saved a client $400k',
//     author: 'Tomas Berg',
//     authorRole: 'Principal Consultant, Architecture',
//     readingTime: '7 min read',
//     date: 'September 2026',
//     intro:
//       'They had already signed the letter of intent. A three-year contract for a platform that would replace five internal systems. Two weeks of architecture review changed the decision — and the cost.',
//     keyTakeaway:
//       'The most expensive architecture decision is the one you make before you understand your own load profile.',
//     content: [
//       {
//         eyebrow: '01',
//         heading: 'The proposal looked reasonable',
//         paragraphs: [
//           'On paper, the platform did everything the client needed. It consolidated billing, CRM, and reporting into one vendor. The pricing model was per-user, which the CFO liked because it made forecasting easy. The implementation partner had strong references and a plausible timeline.',
//           'What the proposal did not address was the client’s actual load profile. Their reporting workload spiked 40x on the first business day of every month. Their user count was stable, but their compute and storage needs were not.',
//         ],
//       },
//       {
//         eyebrow: '02',
//         heading: 'What the review found',
//         paragraphs: [
//           'We modeled the monthly reporting spike against the vendor’s per-user pricing. On paper, the client would pay for 200 users. In practice, the reporting workload alone would push them into an overage tier that tripled the effective cost within eighteen months.',
//           'The bigger issue was data residency. The vendor’s default regions did not include the jurisdiction the client was required to operate in. A compliant deployment would have meant a custom contract and a multi-month delay that was not in the plan.',
//         ],
//       },
//       {
//         eyebrow: '03',
//         heading: 'The alternative that actually shipped',
//         paragraphs: [
//           'We recommended a hybrid: keep the existing CRM, replace the billing and reporting layers with a purpose-built system, and use the vendor only for the modules where their product genuinely fit. Implementation cost went up 15%. Three-year total cost went down 40%, roughly $400k.',
//           'The review took two weeks. The contract was signed in a different shape three weeks later. Not every review changes the decision — but every review should be able to justify the decision it produces.',
//         ],
//       },
//     ],
//   },

//   'data-pipeline-is-lying': {
//     category: 'Data & AI',
//     title: 'Your data pipeline is probably lying to you',
//     author: 'Priya Nair',
//     authorRole: 'Lead Data Engineer',
//     readingTime: '5 min read',
//     date: 'September 2026',
//     intro:
//       'Silent failures are the most dangerous kind of data bug. Nothing crashes. No alert fires. The dashboard still loads. And the number on it is wrong.',
//     keyTakeaway:
//       'A pipeline that runs without errors is not the same as a pipeline that is correct.',
//     content: [
//       {
//         eyebrow: '01',
//         heading: 'The three bugs that break dashboards silently',
//         paragraphs: [
//           'Timezone drift is the most common. A pipeline reads timestamps in UTC, the source system writes them in local time, and the aggregation window quietly shifts by a few hours. Monthly numbers still add up. Weekly numbers do not.',
//           'Null handling is the second. A `COALESCE(field, 0)` that was added to fix a display bug is now counting missing records as real zeros. Revenue dashboards look flat because empty rows are being summed instead of excluded.',
//         ],
//       },
//       {
//         eyebrow: '02',
//         heading: 'Why monitoring does not catch this',
//         paragraphs: [
//           'Most monitoring checks whether the job ran. It does not check whether the output is plausible. A pipeline that completes in 40 seconds and writes 12,000 rows passes every health check — even if yesterday it wrote 18,000.',
//           'Row count anomaly detection catches some of this. So does null-rate tracking on key columns. But neither helps if you never established a baseline in the first place. You cannot detect drift from a baseline you never recorded.',
//         ],
//       },
//       {
//         eyebrow: '03',
//         heading: 'What to add to every pipeline',
//         paragraphs: [
//           'Three checks, at minimum: a row count comparison against the previous run, a null-rate threshold on every column the downstream system depends on, and a reconciliation against the source system on at least one metric per pipeline. If the number in the warehouse does not match the number in the source, something is wrong.',
//           'None of this is glamorous. It is also the difference between a data team that people trust and a data team that gets replaced by a spreadsheet every quarter.',
//         ],
//       },
//     ],
//   },

//   'integration-tests-before-unit-tests': {
//     category: 'Software Engineering',
//     title: 'Why we still write integration tests before unit tests',
//     author: 'Daniel Okafor',
//     authorRole: 'Staff Engineer',
//     readingTime: '9 min read',
//     date: 'September 2026',
//     intro:
//       'Unit tests tell you that a function does what you think it does. Integration tests tell you that the system does what the user expects. Only one of those ships to production.',
//     keyTakeaway:
//       'Coverage is not a metric. Confidence to ship is.',
//     content: [
//       {
//         eyebrow: '01',
//         heading: 'The case for writing integration tests first',
//         paragraphs: [
//           'Most bugs that reach production live at the boundaries — between services, between the app and the database, between the app and a third-party API. Unit tests, by definition, do not test those boundaries. They test the pieces on either side of them, usually with mocks.',
//           'When we write integration tests first, we discover the real shape of the problem before we commit to an interface. That is a design benefit, not just a testing benefit. Half of our architecture decisions come out of writing the first integration test.',
//         ],
//       },
//       {
//         eyebrow: '02',
//         heading: 'Where unit tests still earn their place',
//         paragraphs: [
//           'Once a workflow is stable, unit tests become valuable for edge cases: the weird input, the off-by-one, the date that only occurs once a year. Those are cheap to write and fast to run. They are not a substitute for integration coverage, but they are a useful complement.',
//           'The mistake we see most often is teams writing 400 unit tests and 3 integration tests, then wondering why production keeps breaking. The ratio is inverted. The bugs are not in the functions — they are in the seams.',
//         ],
//       },
//       {
//         eyebrow: '03',
//         heading: 'What "enough testing" actually means',
//         paragraphs: [
//           'Enough testing means: if this feature is broken, we will know before the user tells us. It does not mean 80% line coverage or a specific number of assertions. It means a clear answer to the question, "how would we find out?"',
//           'For a payment flow, that answer usually involves a full integration test against a sandbox. For a CSS tweak, it involves opening the page. The right answer depends on the risk — not on a metric someone put on a slide.',
//         ],
//       },
//     ],
//   },

//   'per-user-pricing-trap': {
//     category: 'SaaS & Product',
//     title: 'The per-user pricing trap (and how to escape it)',
//     author: 'Sara Lindqvist',
//     authorRole: 'Product Strategy Lead',
//     readingTime: '6 min read',
//     date: 'September 2026',
//     intro:
//       'Per-user pricing made sense when software was rented by the seat. When your team grows and your workflows get more complex, the math stops working — and the vendor has no reason to help you notice.',
//     keyTakeaway:
//       'Per-user pricing is cheap when you are small and expensive when you succeed. That is the trap.',
//     content: [
//       {
//         eyebrow: '01',
//         heading: 'Why the model is popular',
//         paragraphs: [
//           'Per-user pricing is predictable. It scales linearly with headcount, which is easy to forecast and easy to explain to finance. It also aligns with the way most SaaS vendors think about their own cost structure — servers, seats, and support tickets all scale with users.',
//           'The problem is that it does not align with how value is created inside the customer’s business. A 500-person company does not get 5x the value of a 100-person company from the same CRM. They get maybe 2x — and they pay 5x.',
//         ],
//       },
//       {
//         eyebrow: '02',
//         heading: 'The break-even point nobody talks about',
//         paragraphs: [
//           'For most mid-market companies, the break-even between per-user SaaS and a custom-built equivalent arrives around 80–150 users — earlier if the workflow is complex, later if it is simple. Below that line, SaaS is clearly cheaper. Above it, the license cost often exceeds the amortized cost of building and maintaining the same functionality.',
//           'The break-even is not the only factor. SaaS includes hosting, support, updates, and a team you can call when something breaks. A custom build requires you to own all of that. The comparison is not "license vs license" — it is "license plus vendor dependency vs build cost plus engineering ownership."',
//         ],
//       },
//       {
//         eyebrow: '03',
//         heading: 'How to escape without a rewrite',
//         paragraphs: [
//           'You rarely need to replace the whole platform. Most companies replace one high-cost module at a time — reporting, workflow automation, or a specific integration layer — and keep the vendor for the parts that genuinely fit. This splits the license cost without splitting the contract.',
//           'The other move is negotiation. Per-user pricing is almost never as fixed as vendors imply. Volume commitments, annual pre-pay, and bundling multiple products into one contract all move the number. The worst outcome is not paying too much — it is assuming you have no leverage.',
//         ],
//       },
//     ],
//   },

//   'hiring-is-not-a-strategy': {
//     category: 'Founder Notes',
//     title: 'Hiring senior engineers is not a growth strategy',
//     author: 'Marcus Feld',
//     authorRole: 'Founder',
//     readingTime: '4 min read',
//     date: 'September 2026',
//     intro:
//       'Every founder believes the next senior hire will unblock the team. Usually the bottleneck is not capacity — it is a decision nobody wants to make.',
//     keyTakeaway:
//       'Hiring adds capacity. It does not resolve ambiguity. If the problem is ambiguity, more people will not fix it.',
//     content: [
//       {
//         eyebrow: '01',
//         heading: 'The pattern',
//         paragraphs: [
//           'A team is behind. The founder concludes they need another senior engineer. The engineer joins, ramps up for six weeks, and the team is still behind — because the work that is blocked is blocked by a decision, not by a lack of hands.',
//           'This is the most expensive failure mode in early-stage companies. Not because the hire was wrong, but because the hire was solving the wrong problem. Adding capacity to an unclear direction just produces more work that has to be redone.',
//         ],
//       },
//       {
//         eyebrow: '02',
//         heading: 'What actually unblocks a team',
//         paragraphs: [
//           'Before hiring, ask: what is the one thing that, if resolved, would move the team faster than any new person? Usually it is a scope decision, a product trade-off, or a political problem between two leaders. None of those are engineering problems.',
//           'The other common cause is that the work is being done in the wrong order. Teams get stuck because they started with the hardest piece, or because they are waiting on an integration that could have been stubbed months ago. Sequencing problems look like capacity problems from the outside.',
//         ],
//       },
//       {
//         eyebrow: '03',
//         heading: 'When hiring is the right answer',
//         paragraphs: [
//           'Hiring is the right answer when the team has a clear direction, a stable roadmap, and a genuine shortfall of hands on well-defined work. That is a rarer state than most founders admit.',
//           'The test is simple. Write down what the new hire will do in their first 90 days. If you cannot describe it in two sentences without using the word "help," you are not ready to hire yet.',
//         ],
//       },
//     ],
//   },
// };

// function Reveal({ children, className = '', delay = 0 }) {
//   return (
//     <div
//       className={`motion-safe:animate-[pageFadeUp_.65s_ease-out_both] ${className}`}
//       style={{ animationDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// function ReadingProgress() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     let raf = 0;

//     const update = () => {
//       if (raf) return;

//       raf = requestAnimationFrame(() => {
//         const root = document.documentElement;
//         const max = root.scrollHeight - root.clientHeight;
//         setProgress(max > 0 ? root.scrollTop / max : 0);
//         raf = 0;
//       });
//     };

//     update();
//     window.addEventListener('scroll', update, { passive: true });
//     window.addEventListener('resize', update, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', update);
//       window.removeEventListener('resize', update);
//       if (raf) cancelAnimationFrame(raf);
//     };
//   }, []);

//   return (
//     <div
//       aria-hidden="true"
//       className="fixed left-0 right-0 top-0 z-[120] h-1 origin-left bg-[var(--accent)]"
//       style={{ transform: `scaleX(${progress})` }}
//     />
//   );
// }

// function MetaPill({ children }) {
//   return (
//     <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:var(--card)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
//       {children}
//     </span>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  ARTICLE H1 — dynamic title split into lines, per-line mask reveal */
// /* ------------------------------------------------------------------ */

// /**
//  * Title is arbitrary per article, so we split it into "semantic" lines:
//  *  1. If the title has multiple sentences, each sentence is a line.
//  *  2. Otherwise, split roughly in half at a word boundary.
//  * Each line is wrapped in `.hero-h1-line` (overflow hidden) →
//  * `.hero-h1-line__inner` (translateY reveal). The gradient shimmer
//  * lives on a third nested span so the reveal transform and the
//  * shimmer animation never fight over `animation`.
//  */
// function splitTitleIntoLines(title) {
//   if (!title) return [];
//   const matches = title.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g);
//   if (matches) {
//     const cleaned = matches.map((s) => s.trim()).filter(Boolean);
//     if (cleaned.length >= 2) return cleaned;
//   }
//   const words = title.trim().split(/\s+/);
//   if (words.length < 6) return [title];
//   const mid = Math.ceil(words.length / 2);
//   return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
// }

// const H1_BASE_DELAY = 180;
// const H1_LINE_STAGGER = 140;
// const H1_LINE_DURATION = 700;

// function HeroH1({ title }) {
//   const lines = splitTitleIntoLines(title);
//   const lastIndex = lines.length - 1;

//   return (
//     <h1 className="mt-7 text-[clamp(2rem,6.5vw,5.8rem)] font-normal leading-[.95] tracking-[-.055em]">
//       {lines.map((line, i) => (
//         <span
//           key={`${line}-${i}`}
//           className="hero-h1-line"
//           style={{
//             '--wd': `${H1_BASE_DELAY + i * H1_LINE_STAGGER}ms`,
//             '--dur': `${H1_LINE_DURATION}ms`,
//           }}
//         >
//           <span className="hero-h1-line__inner">
//             {i === lastIndex && lines.length > 1 ? (
//               <span className="inline-block bg-gradient-to-r from-[var(--fg)] via-[var(--accent)] to-[var(--fg)] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-[gradientShift_5s_ease_infinite]">
//                 {line}
//               </span>
//             ) : (
//               line
//             )}
//           </span>
//         </span>
//       ))}
//     </h1>
//   );
// }

// function ArticleHeader({ article }) {
//   const initial = article.author.charAt(0);

//   return (
//     <section className="relative overflow-hidden pt-32 pb-16 sm:pb-20">
//       <GlobalHeroBackground />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--bg)] via-[color:color-mix(in_srgb,var(--bg)_78%,transparent)] to-transparent"
//       />

//       <div className={`${CONTAINER} relative z-10`}>
//         <div className="mx-auto max-w-5xl">
//           <Reveal delay={80}>
//             <a
//               href="/insights"
//               className="group inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)]"
//             >
//               <Icon
//                 name="arrow"
//                 className="w-3.5 rotate-180 transition-transform group-hover:-translate-x-1"
//               />
//               Back to Insights
//             </a>

//             <div className="mt-10 flex flex-wrap gap-2">
//               <MetaPill>{article.category}</MetaPill>
//               <MetaPill>
//                 <Icon name="clock" className="w-3.5" />
//                 {article.readingTime}
//               </MetaPill>
//               <MetaPill>{article.date}</MetaPill>
//             </div>
//           </Reveal>

//           {/* H1 owns its own per-line reveal — no wrapper Reveal needed. */}
//           <HeroH1 title={article.title} />

//           <Reveal delay={560}>
//             <p className="mt-7 max-w-2xl text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.7] text-[var(--muted)]">
//               {article.intro}
//             </p>
//           </Reveal>

//           <Reveal delay={660}>
//             <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--fg)] text-sm font-medium text-[var(--bg)]">
//                   {initial}
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium">{article.author}</p>
//                   <p className="mt-0.5 text-xs text-[var(--muted)]">
//                     {article.authorRole}
//                   </p>
//                 </div>
//               </div>

//               <a
//                 href="#article"
//                 className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-4 py-2.5 text-xs font-medium text-[var(--bg)]"
//               >
//                 Start reading
//                 <Icon name="arrow" className="w-3.5" />
//               </a>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ArticleBody({ article, blocks }) {
//   const shareUrl =
//     typeof window !== 'undefined' ? window.location.href : '';

//   return (
//     <section id="article" className={SECTION}>
//       <div className={CONTAINER}>
//         <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[180px_minmax(0,1fr)_180px]">
//           <aside className="hidden lg:block">
//             <div className="sticky top-28">
//               <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--muted)]">
//                 In this article
//               </p>
//               <nav className="mt-4 space-y-2">
//                 {blocks.map((block) => (
//                   <a
//                     key={block.eyebrow}
//                     href={`#section-${block.eyebrow}`}
//                     className="block text-xs leading-5 text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
//                   >
//                     {block.heading}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           </aside>

//           <article className="min-w-0">
//             <Reveal>
//               <p className="max-w-[68ch] text-[clamp(1.08rem,1.4vw,1.25rem)] leading-[1.8] text-[var(--fg)]">
//                 {article.intro}
//               </p>
//             </Reveal>

//             <div className="mt-12 space-y-14">
//               {blocks.map((block, index) => (
//                 <Reveal key={block.eyebrow} delay={index * 60}>
//                   <section id={`section-${block.eyebrow}`}>
//                     <div className="mb-4 flex items-center gap-3">
//                       <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
//                         {block.eyebrow}
//                       </span>
//                       <span className="h-px flex-1 bg-[var(--border)]" />
//                     </div>

//                     <h2 className="max-w-[18ch] text-[clamp(1.7rem,3vw,2.8rem)] leading-[1.02] tracking-[-.04em]">
//                       {block.heading}
//                     </h2>

//                     <div className="mt-6 max-w-[68ch] space-y-5">
//                       {block.paragraphs.map((paragraph, paragraphIndex) => (
//                         <p
//                           key={paragraphIndex}
//                           className="text-[clamp(.98rem,1.08vw,1.08rem)] leading-[1.85] text-[var(--muted)]"
//                         >
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   </section>
//                 </Reveal>
//               ))}
//             </div>

//             <Reveal delay={180} className="mt-14">
//               <div className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6 sm:p-8">
//                 <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--muted)]">
//                   Key takeaway
//                 </p>
//                 <p className="mt-4 text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.2] tracking-[-.03em]">
//                   {article.keyTakeaway}
//                 </p>
//               </div>
//             </Reveal>
//           </article>

//           <aside className="hidden lg:block">
//             <div className="sticky top-28">
//               <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--muted)]">
//                 Share
//               </p>
//               <div className="mt-4 space-y-2">
//                 <button
//                   type="button"
//                   onClick={async () => {
//                     try {
//                       await navigator.clipboard.writeText(shareUrl);
//                     } catch {
//                       // Clipboard may be unavailable in insecure contexts.
//                     }
//                   }}
//                   className="flex w-full items-center justify-between rounded-full border border-[var(--border)] px-4 py-2.5 text-xs"
//                 >
//                   Copy link
//                   <Icon name="arrow" className="w-3.5" />
//                 </button>

//                 <a
//                   href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//                     shareUrl
//                   )}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-between rounded-full border border-[var(--border)] px-4 py-2.5 text-xs"
//                 >
//                   LinkedIn
//                   <Icon name="arrow" className="w-3.5" />
//                 </a>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }

// function NewsletterCTA() {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <section className={`${SECTION} bg-[color:var(--card)]`}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-6 sm:p-10 lg:p-12">
//             <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-center">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
//                   Weekly newsletter
//                 </p>
//                 <h2 className="mt-3 max-w-[13ch] text-[clamp(2rem,4vw,3.6rem)] leading-[.98] tracking-[-.05em]">
//                   Get insights before your competitors do.
//                 </h2>
//                 <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
//                   One email per week. Real engineering lessons. Unsubscribe anytime.
//                 </p>
//               </div>

//               <form
//                 onSubmit={(event) => {
//                   event.preventDefault();
//                   setSubmitted(true);
//                 }}
//                 className="flex flex-col gap-2 sm:flex-row"
//               >
//                 <label className="sr-only" htmlFor="article-newsletter-email">
//                   Email address
//                 </label>
//                 <input
//                   id="article-newsletter-email"
//                   type="email"
//                   required
//                   placeholder="you@company.com"
//                   className="h-12 min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
//                 />
//                 <button
//                   type="submit"
//                   className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--fg)] px-5 text-sm font-medium text-[var(--bg)]"
//                 >
//                   {submitted ? 'Subscribed' : 'Subscribe'}
//                   {!submitted && <Icon name="arrow" className="w-4" />}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function FinalCTA() {
//   return (
//     <section className="relative overflow-hidden py-20 sm:py-28">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_36%)]"
//       />

//       <div className={`${CONTAINER} relative`}>
//         <Reveal>
//           <div className="mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] border border-[var(--border)] bg-[color:var(--card)] px-6 py-12 text-center sm:px-10 sm:py-16">
//             <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
//               Next step
//             </p>
//             <h2 className="mt-3 max-w-[12ch] text-[clamp(2.2rem,5vw,4.6rem)] leading-[.95] tracking-[-.05em]">
//               Prefer talking to building?
//             </h2>
//             <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">
//               Turn the question in this article into a conversation about your own product, data,
//               or engineering challenge.
//             </p>

//             <a
//               href="/contact"
//               className="group mt-7 inline-flex h-12 items-center gap-3 rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)]"
//             >
//               Book Free Consultation
//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                 <Icon
//                   name="arrow"
//                   className="w-4 transition-transform group-hover:translate-x-1"
//                 />
//               </span>
//             </a>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function NotFound() {
//   return (
//     <section className="mx-auto max-w-2xl px-6 py-40 text-center">
//       <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
//         Not found
//       </p>
//       <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-.04em]">
//         That article doesn&apos;t exist.
//       </h1>
//       <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
//         The link may be broken, or the article may have been moved.
//       </p>

//       <a
//         href="/insights"
//         className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]"
//       >
//         <Icon name="arrow" className="w-4 rotate-180" />
//         Back to Insights
//       </a>
//     </section>
//   );
// }

// export default function ArticleDetailPage({ slug }) {
//   const article = ARTICLES_BY_SLUG[slug];

//   if (!article) {
//     return <NotFound />;
//   }

//   return (
//     <>
//       <ReadingProgress />
//       <ArticleHeader article={article} />
//       <ArticleBody article={article} blocks={article.content} />
//       <NewsletterCTA />
//       <FinalCTA />

//       <style>{`
//         @keyframes pageFadeUp {
//           from { opacity: 0; transform: translateY(18px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50%      { background-position: 100% 50%; }
//         }

//         /* H1 per-line mask reveal */
//         .hero-h1-line {
//           display: block;
//           overflow: hidden;
//           padding-bottom: 0.08em; /* keeps g/y/p descenders from being clipped */
//         }

//         .hero-h1-line__inner {
//           display: block;
//         }

//         @media (prefers-reduced-motion: no-preference) {
//           .hero-h1-line__inner {
//             animation: heroLineRise var(--dur, 700ms) cubic-bezier(.22, 1, .36, 1) var(--wd, 0ms) both;
//           }
//         }

//         @keyframes heroLineRise {
//           from { transform: translateY(110%); opacity: 0; }
//           to   { transform: translateY(0);    opacity: 1; }
//         }
//       `}</style>
//     </>
//   );
// }


import React, { useEffect, useState } from 'react';
import { CONTAINER, SECTION } from '../components/shared/constants';
import { Icon } from '../components/shared/Icon';
import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

/* ------------------------------------------------------------------ */
/*  BRAND — colors from the The Cloud Group logo                       */
/*  Golden yellow: #E5B32B  ·  Deep gold: #C99A1A  ·  Ink: #1c1608     */
/* ------------------------------------------------------------------ */

const BRAND = {
  gold: '#E5B32B',
  goldDeep: '#C99A1A',
  goldBright: '#FFC93C',
  goldSoft: '#F0C244',
  goldDark: '#A67C0F',
  ink: '#1c1608',
};

/* ------------------------------------------------------------------
   Article content keyed by slug.
   Add new entries here to publish new articles.
   The slug MUST match what's used in InsightsPage's ARTICLES list.
------------------------------------------------------------------ */
const ARTICLES_BY_SLUG = {
  'the-88-percent-uses-ai': {
    category: 'Data & AI',
    title: "The 88% uses AI. That doesn't mean the 88% is creating value.",
    author: 'Marcus Feld',
    authorRole: 'Principal Engineer, Data & AI',
    readingTime: '8 min read',
    date: 'September 23, 2026',
    intro:
      'Adoption numbers are the easiest metric to move and the easiest to mistake for progress. Every quarter, another survey reports that a higher percentage of companies are "using AI." Almost none of them report what it actually changed.',
    keyTakeaway:
      'Adoption measures intent. Cycle time, error rate, and cost per unit of work measure whether anything actually changed.',
    content: [
      {
        eyebrow: '01',
        heading: 'The signal is not the outcome',
        paragraphs: [
          'A dashboard, a chatbot, a copilot inside an IDE — these all count as "using AI." Adoption surveys do not distinguish between a pilot that three people touched once and a system that runs a core business process. When the number goes up, it usually means another team signed up for another tool. It almost never means a process got faster, cheaper, or more reliable.',
          'The companies reporting the largest value from AI are rarely the ones with the most AI tools. They are the ones that picked a specific bottleneck — a slow underwriting process, a manual QA step, a support queue that nobody wanted to staff — and used AI to remove it. The tool is incidental. The bottleneck was the point.',
        ],
      },
      {
        eyebrow: '02',
        heading: 'Where value gets lost',
        paragraphs: [
          'Most AI initiatives die in the gap between demo and deployment. The demo works on clean examples. Production is messy: PDFs scanned at an angle, support tickets written in three languages, an ERP that exports dates in a format nobody documented. By the time the team hits that reality, the budget is spent and the executive sponsor has moved on to the next initiative.',
          'The other failure mode is subtler. A team ships an AI feature that works, but nobody changed the process around it. The output still needs to be reviewed by the same person, in the same queue, at the same speed. Throughput does not move because the human step did not move. The AI became an extra step, not a replacement for one.',
        ],
      },
      {
        eyebrow: '03',
        heading: 'What to measure instead',
        paragraphs: [
          'Stop counting adoption. Start counting cycle time, error rate, and cost per unit of work. If a process used to take four days and now takes three, that is value. If it used to require three approvals and now requires two, that is value. "We rolled out Copilot to 400 engineers" is not value — it is a license expense.',
          'The uncomfortable measurement is the one that forces a comparison. Pick one workflow. Measure it before AI. Measure it after. If the number did not move, the tool did not create value — no matter how many people are using it.',
        ],
      },
    ],
  },

  'rebuilding-14-year-old-erp': {
    category: 'Real Cases',
    title: "We rebuilt a 14-year-old ERP in 9 months. Here's what we'd do differently.",
    author: 'Elena Ríos',
    authorRole: 'Delivery Lead, Enterprise Systems',
    readingTime: '6 min read',
    date: 'September 2026',
    intro:
      'The client had been running their entire logistics operation on a system built in 2012 by a vendor that no longer existed. The database still worked. Nobody could change it. This is the story of the rebuild — and the three sequencing decisions we would reverse today.',
    keyTakeaway:
      'A rebuild is not a software project. It is a business continuity project that happens to involve software.',
    content: [
      {
        eyebrow: '01',
        heading: 'Why the old system could not simply be replaced',
        paragraphs: [
          'The system ran dispatch, billing, and driver settlement for roughly 400 vehicles per day. Every process in the company touched it. There was no documentation, no test environment, and no way to run a parallel trial without freezing operations for a week.',
          'The instinct was to replace it whole. We spent two weeks mapping every workflow and every integration before writing a single line of new code. That mapping changed the plan. Half of what the old system did was redundant — a consequence of years of patches, not business requirements.',
        ],
      },
      {
        eyebrow: '02',
        heading: 'What we would sequence differently',
        paragraphs: [
          'We rebuilt the system as a monolith first, then split it. That was a mistake. The monolith was faster to ship, but it re-created many of the coupling problems we were trying to remove. If we did it again, we would have started with clear service boundaries — even at the cost of a longer initial delivery.',
          'We also delayed the billing migration to the end. Billing is the highest-risk workflow, and by the time we got there, the team was exhausted and the deadline was close. Next time, we would migrate the highest-risk workflow first, while the team still has energy and budget.',
        ],
      },
      {
        eyebrow: '03',
        heading: 'What actually went right',
        paragraphs: [
          'Weekly demos with the operations team kept the project honest. Every Friday, the dispatchers saw what had changed and told us what was wrong. That feedback loop caught more bugs than any QA process we could have designed.',
          'We also kept the old system running in read-only mode for four months after launch. It was not elegant, but it meant nobody ever lost access to a record they needed. Business continuity beat architectural purity every time.',
        ],
      },
    ],
  },

  'architecture-review-saved-400k': {
    category: 'Technology Consulting',
    title: 'The architecture review that saved a client $400k',
    author: 'Tomas Berg',
    authorRole: 'Principal Consultant, Architecture',
    readingTime: '7 min read',
    date: 'September 2026',
    intro:
      'They had already signed the letter of intent. A three-year contract for a platform that would replace five internal systems. Two weeks of architecture review changed the decision — and the cost.',
    keyTakeaway:
      'The most expensive architecture decision is the one you make before you understand your own load profile.',
    content: [
      {
        eyebrow: '01',
        heading: 'The proposal looked reasonable',
        paragraphs: [
          'On paper, the platform did everything the client needed. It consolidated billing, CRM, and reporting into one vendor. The pricing model was per-user, which the CFO liked because it made forecasting easy. The implementation partner had strong references and a plausible timeline.',
          'What the proposal did not address was the client’s actual load profile. Their reporting workload spiked 40x on the first business day of every month. Their user count was stable, but their compute and storage needs were not.',
        ],
      },
      {
        eyebrow: '02',
        heading: 'What the review found',
        paragraphs: [
          'We modeled the monthly reporting spike against the vendor’s per-user pricing. On paper, the client would pay for 200 users. In practice, the reporting workload alone would push them into an overage tier that tripled the effective cost within eighteen months.',
          'The bigger issue was data residency. The vendor’s default regions did not include the jurisdiction the client was required to operate in. A compliant deployment would have meant a custom contract and a multi-month delay that was not in the plan.',
        ],
      },
      {
        eyebrow: '03',
        heading: 'The alternative that actually shipped',
        paragraphs: [
          'We recommended a hybrid: keep the existing CRM, replace the billing and reporting layers with a purpose-built system, and use the vendor only for the modules where their product genuinely fit. Implementation cost went up 15%. Three-year total cost went down 40%, roughly $400k.',
          'The review took two weeks. The contract was signed in a different shape three weeks later. Not every review changes the decision — but every review should be able to justify the decision it produces.',
        ],
      },
    ],
  },

  'data-pipeline-is-lying': {
    category: 'Data & AI',
    title: 'Your data pipeline is probably lying to you',
    author: 'Priya Nair',
    authorRole: 'Lead Data Engineer',
    readingTime: '5 min read',
    date: 'September 2026',
    intro:
      'Silent failures are the most dangerous kind of data bug. Nothing crashes. No alert fires. The dashboard still loads. And the number on it is wrong.',
    keyTakeaway:
      'A pipeline that runs without errors is not the same as a pipeline that is correct.',
    content: [
      {
        eyebrow: '01',
        heading: 'The three bugs that break dashboards silently',
        paragraphs: [
          'Timezone drift is the most common. A pipeline reads timestamps in UTC, the source system writes them in local time, and the aggregation window quietly shifts by a few hours. Monthly numbers still add up. Weekly numbers do not.',
          'Null handling is the second. A `COALESCE(field, 0)` that was added to fix a display bug is now counting missing records as real zeros. Revenue dashboards look flat because empty rows are being summed instead of excluded.',
        ],
      },
      {
        eyebrow: '02',
        heading: 'Why monitoring does not catch this',
        paragraphs: [
          'Most monitoring checks whether the job ran. It does not check whether the output is plausible. A pipeline that completes in 40 seconds and writes 12,000 rows passes every health check — even if yesterday it wrote 18,000.',
          'Row count anomaly detection catches some of this. So does null-rate tracking on key columns. But neither helps if you never established a baseline in the first place. You cannot detect drift from a baseline you never recorded.',
        ],
      },
      {
        eyebrow: '03',
        heading: 'What to add to every pipeline',
        paragraphs: [
          'Three checks, at minimum: a row count comparison against the previous run, a null-rate threshold on every column the downstream system depends on, and a reconciliation against the source system on at least one metric per pipeline. If the number in the warehouse does not match the number in the source, something is wrong.',
          'None of this is glamorous. It is also the difference between a data team that people trust and a data team that gets replaced by a spreadsheet every quarter.',
        ],
      },
    ],
  },

  'integration-tests-before-unit-tests': {
    category: 'Software Engineering',
    title: 'Why we still write integration tests before unit tests',
    author: 'Daniel Okafor',
    authorRole: 'Staff Engineer',
    readingTime: '9 min read',
    date: 'September 2026',
    intro:
      'Unit tests tell you that a function does what you think it does. Integration tests tell you that the system does what the user expects. Only one of those ships to production.',
    keyTakeaway:
      'Coverage is not a metric. Confidence to ship is.',
    content: [
      {
        eyebrow: '01',
        heading: 'The case for writing integration tests first',
        paragraphs: [
          'Most bugs that reach production live at the boundaries — between services, between the app and the database, between the app and a third-party API. Unit tests, by definition, do not test those boundaries. They test the pieces on either side of them, usually with mocks.',
          'When we write integration tests first, we discover the real shape of the problem before we commit to an interface. That is a design benefit, not just a testing benefit. Half of our architecture decisions come out of writing the first integration test.',
        ],
      },
      {
        eyebrow: '02',
        heading: 'Where unit tests still earn their place',
        paragraphs: [
          'Once a workflow is stable, unit tests become valuable for edge cases: the weird input, the off-by-one, the date that only occurs once a year. Those are cheap to write and fast to run. They are not a substitute for integration coverage, but they are a useful complement.',
          'The mistake we see most often is teams writing 400 unit tests and 3 integration tests, then wondering why production keeps breaking. The ratio is inverted. The bugs are not in the functions — they are in the seams.',
        ],
      },
      {
        eyebrow: '03',
        heading: 'What "enough testing" actually means',
        paragraphs: [
          'Enough testing means: if this feature is broken, we will know before the user tells us. It does not mean 80% line coverage or a specific number of assertions. It means a clear answer to the question, "how would we find out?"',
          'For a payment flow, that answer usually involves a full integration test against a sandbox. For a CSS tweak, it involves opening the page. The right answer depends on the risk — not on a metric someone put on a slide.',
        ],
      },
    ],
  },

  'per-user-pricing-trap': {
    category: 'SaaS & Product',
    title: 'The per-user pricing trap (and how to escape it)',
    author: 'Sara Lindqvist',
    authorRole: 'Product Strategy Lead',
    readingTime: '6 min read',
    date: 'September 2026',
    intro:
      'Per-user pricing made sense when software was rented by the seat. When your team grows and your workflows get more complex, the math stops working — and the vendor has no reason to help you notice.',
    keyTakeaway:
      'Per-user pricing is cheap when you are small and expensive when you succeed. That is the trap.',
    content: [
      {
        eyebrow: '01',
        heading: 'Why the model is popular',
        paragraphs: [
          'Per-user pricing is predictable. It scales linearly with headcount, which is easy to forecast and easy to explain to finance. It also aligns with the way most SaaS vendors think about their own cost structure — servers, seats, and support tickets all scale with users.',
          'The problem is that it does not align with how value is created inside the customer’s business. A 500-person company does not get 5x the value of a 100-person company from the same CRM. They get maybe 2x — and they pay 5x.',
        ],
      },
      {
        eyebrow: '02',
        heading: 'The break-even point nobody talks about',
        paragraphs: [
          'For most mid-market companies, the break-even between per-user SaaS and a custom-built equivalent arrives around 80–150 users — earlier if the workflow is complex, later if it is simple. Below that line, SaaS is clearly cheaper. Above it, the license cost often exceeds the amortized cost of building and maintaining the same functionality.',
          'The break-even is not the only factor. SaaS includes hosting, support, updates, and a team you can call when something breaks. A custom build requires you to own all of that. The comparison is not "license vs license" — it is "license plus vendor dependency vs build cost plus engineering ownership."',
        ],
      },
      {
        eyebrow: '03',
        heading: 'How to escape without a rewrite',
        paragraphs: [
          'You rarely need to replace the whole platform. Most companies replace one high-cost module at a time — reporting, workflow automation, or a specific integration layer — and keep the vendor for the parts that genuinely fit. This splits the license cost without splitting the contract.',
          'The other move is negotiation. Per-user pricing is almost never as fixed as vendors imply. Volume commitments, annual pre-pay, and bundling multiple products into one contract all move the number. The worst outcome is not paying too much — it is assuming you have no leverage.',
        ],
      },
    ],
  },

  'hiring-is-not-a-strategy': {
    category: 'Founder Notes',
    title: 'Hiring senior engineers is not a growth strategy',
    author: 'Marcus Feld',
    authorRole: 'Founder',
    readingTime: '4 min read',
    date: 'September 2026',
    intro:
      'Every founder believes the next senior hire will unblock the team. Usually the bottleneck is not capacity — it is a decision nobody wants to make.',
    keyTakeaway:
      'Hiring adds capacity. It does not resolve ambiguity. If the problem is ambiguity, more people will not fix it.',
    content: [
      {
        eyebrow: '01',
        heading: 'The pattern',
        paragraphs: [
          'A team is behind. The founder concludes they need another senior engineer. The engineer joins, ramps up for six weeks, and the team is still behind — because the work that is blocked is blocked by a decision, not by a lack of hands.',
          'This is the most expensive failure mode in early-stage companies. Not because the hire was wrong, but because the hire was solving the wrong problem. Adding capacity to an unclear direction just produces more work that has to be redone.',
        ],
      },
      {
        eyebrow: '02',
        heading: 'What actually unblocks a team',
        paragraphs: [
          'Before hiring, ask: what is the one thing that, if resolved, would move the team faster than any new person? Usually it is a scope decision, a product trade-off, or a political problem between two leaders. None of those are engineering problems.',
          'The other common cause is that the work is being done in the wrong order. Teams get stuck because they started with the hardest piece, or because they are waiting on an integration that could have been stubbed months ago. Sequencing problems look like capacity problems from the outside.',
        ],
      },
      {
        eyebrow: '03',
        heading: 'When hiring is the right answer',
        paragraphs: [
          'Hiring is the right answer when the team has a clear direction, a stable roadmap, and a genuine shortfall of hands on well-defined work. That is a rarer state than most founders admit.',
          'The test is simple. Write down what the new hire will do in their first 90 days. If you cannot describe it in two sentences without using the word "help," you are not ready to hire yet.',
        ],
      },
    ],
  },
};

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`motion-safe:animate-[pageFadeUp_.65s_ease-out_both] ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LOGO — inline SVG approximation of The Cloud Group mark            */
/* ------------------------------------------------------------------ */

function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 80 56"
        className="h-10 w-auto shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22 50c-9 0-16-7-16-15 0-6 4-12 10-14C17 12 24 6 33 6c6 0 11 3 14 7 2-1 5-1 8-1 8 0 14 6 14 14v2c6 2 10 7 10 13 0 9-7 16-16 16H22z" />
        <path
          d="M38 22c-4 0-7 3-7 6 0 4 4 8 12 14 8-6 12-10 12-14 0-3-3-6-7-6-3 0-5 2-5 2s-2-2-5-2z"
          fill="var(--bg)"
        />
      </svg>
      <span className="flex flex-col leading-none tracking-[0.02em]">
        <span className="text-[11px] font-bold tracking-[0.32em]">THE CLOUD</span>
        <span className="mt-1 text-[20px] font-bold tracking-[0.04em]">GROUP</span>
      </span>
    </span>
  );
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      if (raf) return;

      raf = requestAnimationFrame(() => {
        const root = document.documentElement;
        const max = root.scrollHeight - root.clientHeight;
        setProgress(max > 0 ? root.scrollTop / max : 0);
        raf = 0;
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[120] h-1 origin-left bg-[var(--accent)]"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}

function MetaPill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:var(--card)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  ARTICLE H1 — dynamic title split into lines, per-line mask reveal */
/* ------------------------------------------------------------------ */

function splitTitleIntoLines(title) {
  if (!title) return [];
  const matches = title.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g);
  if (matches) {
    const cleaned = matches.map((s) => s.trim()).filter(Boolean);
    if (cleaned.length >= 2) return cleaned;
  }
  const words = title.trim().split(/\s+/);
  if (words.length < 6) return [title];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

const H1_BASE_DELAY = 180;
const H1_LINE_STAGGER = 140;
const H1_LINE_DURATION = 700;

function HeroH1({ title }) {
  const lines = splitTitleIntoLines(title);
  const lastIndex = lines.length - 1;

  return (
    <h1 className="mt-7 text-[clamp(2rem,6.5vw,5.8rem)] font-normal leading-[.95] tracking-[-.055em]">
      {lines.map((line, i) => (
        <span
          key={`${line}-${i}`}
          className="hero-h1-line"
          style={{
            '--wd': `${H1_BASE_DELAY + i * H1_LINE_STAGGER}ms`,
            '--dur': `${H1_LINE_DURATION}ms`,
          }}
        >
          <span className="hero-h1-line__inner">
            {i === lastIndex && lines.length > 1 ? (
              <span className="inline-block bg-gradient-to-r from-[var(--fg)] via-[var(--accent)] to-[var(--fg)] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-[gradientShift_5s_ease_infinite]">
                {line}
              </span>
            ) : (
              line
            )}
          </span>
        </span>
      ))}
    </h1>
  );
}

function ArticleHeader({ article }) {
  const initial = article.author.charAt(0);

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pb-20">
      <GlobalHeroBackground />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--bg)] via-[color:color-mix(in_srgb,var(--bg)_78%,transparent)] to-transparent"
      />

      <div className={`${CONTAINER} relative z-10`}>
        <div className="mx-auto max-w-5xl">
          {/* Brand logo — inherits brand gold from --accent */}
          <Reveal delay={40} className="mb-8 text-[color:var(--accent)]">
            <Logo />
          </Reveal>

          <Reveal delay={80}>
            <a
              href="/insights"
              className="group inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)]"
            >
              <Icon
                name="arrow"
                className="w-3.5 rotate-180 transition-transform group-hover:-translate-x-1"
              />
              Back to Insights
            </a>

            <div className="mt-10 flex flex-wrap gap-2">
              <MetaPill>{article.category}</MetaPill>
              <MetaPill>
                <Icon name="clock" className="w-3.5" />
                {article.readingTime}
              </MetaPill>
              <MetaPill>{article.date}</MetaPill>
            </div>
          </Reveal>

          <HeroH1 title={article.title} />

          <Reveal delay={560}>
            <p className="mt-7 max-w-2xl text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.7] text-[var(--muted)]">
              {article.intro}
            </p>
          </Reveal>

          <Reveal delay={660}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-medium text-[var(--accent-ink)]">
                  {initial}
                </div>
                <div>
                  <p className="text-sm font-medium">{article.author}</p>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">
                    {article.authorRole}
                  </p>
                </div>
              </div>

              <a
                href="#article"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-4 py-2.5 text-xs font-medium text-[var(--bg)]"
              >
                Start reading
                <Icon name="arrow" className="w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ArticleBody({ article, blocks }) {
  const shareUrl =
    typeof window !== 'undefined' ? window.location.href : '';

  return (
    <section id="article" className={SECTION}>
      <div className={CONTAINER}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[180px_minmax(0,1fr)_180px]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
                In this article
              </p>
              <nav className="mt-4 space-y-2">
                {blocks.map((block) => (
                  <a
                    key={block.eyebrow}
                    href={`#section-${block.eyebrow}`}
                    className="block text-xs leading-5 text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
                  >
                    {block.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0">
            <Reveal>
              <p className="max-w-[68ch] text-[clamp(1.08rem,1.4vw,1.25rem)] leading-[1.8] text-[var(--fg)]">
                {article.intro}
              </p>
            </Reveal>

            <div className="mt-12 space-y-14">
              {blocks.map((block, index) => (
                <Reveal key={block.eyebrow} delay={index * 60}>
                  <section id={`section-${block.eyebrow}`}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
                        {block.eyebrow}
                      </span>
                      <span className="h-px flex-1 bg-[var(--border)]" />
                    </div>

                    <h2 className="max-w-[18ch] text-[clamp(1.7rem,3vw,2.8rem)] leading-[1.02] tracking-[-.04em]">
                      {block.heading}
                    </h2>

                    <div className="mt-6 max-w-[68ch] space-y-5">
                      {block.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-[clamp(.98rem,1.08vw,1.08rem)] leading-[1.85] text-[var(--muted)]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>

            <Reveal delay={180} className="mt-14">
              <div
                className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6 sm:p-8"
                style={{ borderColor: 'color-mix(in srgb, var(--accent) 55%, transparent)' }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
                  Key takeaway
                </p>
                <p className="mt-4 text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.2] tracking-[-.03em]">
                  {article.keyTakeaway}
                </p>
              </div>
            </Reveal>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
                Share
              </p>
              <div className="mt-4 space-y-2">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(shareUrl);
                    } catch {
                      // Clipboard may be unavailable in insecure contexts.
                    }
                  }}
                  className="flex w-full items-center justify-between rounded-full border border-[var(--border)] px-4 py-2.5 text-xs"
                >
                  Copy link
                  <Icon name="arrow" className="w-3.5" />
                </button>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-full border border-[var(--border)] px-4 py-2.5 text-xs"
                >
                  LinkedIn
                  <Icon name="arrow" className="w-3.5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function NewsletterCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className={`${SECTION} bg-[color:var(--card)]`}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-6 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--accent)]">
                  Weekly newsletter
                </p>
                <h2 className="mt-3 max-w-[13ch] text-[clamp(2rem,4vw,3.6rem)] leading-[.98] tracking-[-.05em]">
                  Get insights before your competitors do.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
                  One email per week. Real engineering lessons. Unsubscribe anytime.
                </p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-2 sm:flex-row"
              >
                <label className="sr-only" htmlFor="article-newsletter-email">
                  Email address
                </label>
                <input
                  id="article-newsletter-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-12 min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium"
                  style={{
                    background: 'var(--accent)',
                    color: 'var(--accent-ink)',
                  }}
                >
                  {submitted ? 'Subscribed' : 'Subscribe'}
                  {!submitted && <Icon name="arrow" className="w-4" />}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,color-mix(in_srgb,var(--accent)_20%,transparent),transparent_36%)]"
      />

      <div className={`${CONTAINER} relative`}>
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] border border-[var(--border)] bg-[color:var(--card)] px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
              Next step
            </p>
            <h2 className="mt-3 max-w-[12ch] text-[clamp(2.2rem,5vw,4.6rem)] leading-[.95] tracking-[-.05em]">
              Prefer talking to building?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">
              Turn the question in this article into a conversation about your own product, data,
              or engineering challenge.
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

function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-40 text-center">
      <div className="mb-8 flex justify-center text-[color:var(--accent)]">
        <Logo />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
        Not found
      </p>
      <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-.04em]">
        That article doesn&apos;t exist.
      </h1>
      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
        The link may be broken, or the article may have been moved.
      </p>

      <a
        href="/insights"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]"
      >
        <Icon name="arrow" className="w-4 rotate-180" />
        Back to Insights
      </a>
    </section>
  );
}

export default function ArticleDetailPage({ slug }) {
  const article = ARTICLES_BY_SLUG[slug];

  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <ReadingProgress />
      <ArticleHeader article={article} />
      <ArticleBody article={article} blocks={article.content} />
      <NewsletterCTA />
      <FinalCTA />

      <style>{`
        /* -----------------------------------------------------------
           BRAND THEME — colors from The Cloud Group logo
           ----------------------------------------------------------- */
        :root {
          --accent: #E5B32B;         /* golden yellow (logo) */
          --accent-2: #C99A1A;       /* deeper gold for gradients */
          --accent-ink: #1c1608;     /* dark ink for text on gold */
        }

        @keyframes pageFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        /* H1 per-line mask reveal */
        .hero-h1-line {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
        }

        .hero-h1-line__inner {
          display: block;
        }

        @media (prefers-reduced-motion: no-preference) {
          .hero-h1-line__inner {
            animation: heroLineRise var(--dur, 700ms) cubic-bezier(.22, 1, .36, 1) var(--wd, 0ms) both;
          }
        }

        @keyframes heroLineRise {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
}