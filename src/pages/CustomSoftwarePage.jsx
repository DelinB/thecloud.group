// import React, { useState } from 'react';
// import { CONTAINER, SECTION, GRID_GAP } from '../components/shared/constants';
// import { Icon } from '../components/shared/Icon';
// import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

// const QUALIFICATION_PATHS = [
//   {
//     number: '01',
//     title: 'I need a NEW system built from scratch',
//     cta: 'Explore Custom Development',
//     href: '#solutions',
//     icon: 'code',
//   },
//   {
//     number: '02',
//     title: 'I have software that needs REBUILDING',
//     cta: 'Explore Modernization & Refactoring',
//     href: '#process',
//     icon: 'zap',
//   },
//   {
//     number: '03',
//     title: 'I need a specific tool (ERP/CRM/App)',
//     cta: 'Browse Solutions by Type',
//     href: '#solutions',
//     icon: 'database',
//   },
// ];

// const SOLUTIONS = [
//   {
//     icon: 'database',
//     eyebrow: 'ERP',
//     title: 'Built for YOUR workflow.',
//     copy: 'Replace rigid processes with software shaped around how your business actually operates.',
//     detail: 'No per-user fees',
//   },
//   {
//     icon: 'users',
//     eyebrow: 'CRM',
//     title: 'Sales pipeline built for your team.',
//     copy: 'Give sales, operations, and leadership one system without forcing your process into a generic SaaS box.',
//     detail: 'No SaaS fees',
//   },
//   {
//     icon: 'activity',
//     eyebrow: 'Mobile',
//     title: 'Apps your teams can use anywhere.',
//     copy: 'iOS, Android, React Native, or Flutter experiences built around the real workflow.',
//     detail: 'Web + mobile',
//   },
//   {
//     icon: 'chart',
//     eyebrow: 'Big Data',
//     title: 'Turn data into decisions.',
//     copy: 'Data pipelines, BI dashboards, machine learning, and analytics engineered around your objectives.',
//     detail: 'Pipelines + BI + ML',
//   },
// ];

// const SECTORS = [
//   'Energy',
//   'Finance',
//   'Logistics',
//   'HR',
//   'Media',
//   'Government',
//   'Pharma',
//   'Retail',
// ];

// const FAQS = [
//   {
//     q: 'How much does custom software cost?',
//     a: 'Cost depends on the workflow, integrations, users, and delivery scope. The diagnosis is designed to define the right build and give you a fixed-price direction before work starts.',
//   },
//   {
//     q: 'How long does development take?',
//     a: 'Timelines depend on scope and complexity. We structure delivery around architecture first, then short implementation sprints with regular demos so progress stays visible.',
//   },
//   {
//     q: 'Why not just use Salesforce/SAP?',
//     a: 'Generic platforms can be effective when their workflows match your business. Custom software is useful when the cost of changing your process, paying per user, or working around platform limitations becomes significant.',
//   },
//   {
//     q: 'What guarantees do you offer?',
//     a: 'The Storm Guarantee covers dissatisfaction with a refund commitment, while the Hurricane Warranty covers late delivery. Both are backed by written contract.',
//   },
//   {
//     q: 'Can I see progress during development?',
//     a: 'Yes. Ongoing two-week sprints and demos keep the work visible so you can review decisions, validate workflows, and steer the build before launch.',
//   },
//   {
//     q: 'What happens after launch?',
//     a: 'The relationship can continue with monitoring, maintenance, improvements, and further product development as your requirements evolve.',
//   },
//   {
//     q: 'What technologies do you use?',
//     a: 'The stack is selected around the product requirements rather than forcing one technology everywhere. Typical work can include modern web, mobile, cloud, API, data, and AI technologies.',
//   },
// ];

// const COMPARISON = [
//   ['Cost', '$ monthly', 'One-time investment'],
//   ['Fit', 'Adapt to tool', 'Tool adapts to you'],
//   ['Scale', 'Per-user fees', 'No limits'],
//   ['Ownership', 'Vendor owns', 'You own the code'],
//   ['Exit', 'Locked in', 'Free to leave'],
// ];

// const PROCESS_STEPS = [
//   ['Day 0', 'Free consult', 'Start without commitment.'],
//   ['Week 1–2', 'TCG-SAF™ architecture', 'Shape the system before the codebase compounds risk.'],
//   ['Ongoing', '2-week sprints + demo', 'Review progress, decisions, and workflows continuously.'],
//   ['Launch', 'Your code', 'Go live owning the product and the codebase.'],
// ];

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

// function Pill({ children, accent = false }) {
//   return (
//     <span
//       className={[
//         'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em]',
//         accent
//           ? 'border-transparent bg-[var(--accent)] text-[var(--accent-ink)]'
//           : 'border-[var(--border)] bg-[color:var(--card)] text-[var(--fg)]',
//       ].join(' ')}
//     >
//       {children}
//     </span>
//   );
// }

// function ArrowLink({ href = '#', children, accent = false }) {
//   return (
//     <a
//       href={href}
//       className={[
//         'group inline-flex items-center gap-3 rounded-full transition-transform duration-300 hover:-translate-y-0.5',
//         accent
//           ? 'bg-[var(--fg)] px-5 py-3 text-[var(--bg)]'
//           : 'text-[var(--fg)] underline decoration-[color:var(--border)] underline-offset-4',
//       ].join(' ')}
//     >
//       <span>{children}</span>
//       <span
//         className={[
//           'flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5',
//           accent
//             ? 'bg-[var(--accent)] text-[var(--accent-ink)]'
//             : 'bg-[color:var(--card)]',
//         ].join(' ')}
//       >
//         <Icon name="arrow" className="w-4" />
//       </span>
//     </a>
//   );
// }

// function GuaranteeBadge({ type, title, copy, icon }) {
//   return (
//     <div className="group flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[color:var(--card)] px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,.06)]">
//       <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-ink)]">
//         <Icon name={icon} className="w-5" />
//       </span>
//       <span className="min-w-0">
//         <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
//           {type}
//         </span>
//         <span className="mt-0.5 block text-sm font-medium">{title}</span>
//         <span className="mt-0.5 block text-xs leading-5 text-[var(--muted)]">{copy}</span>
//       </span>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  HERO H1 — per-line mask reveal + shimmer on the payoff line       */
// /* ------------------------------------------------------------------ */

// /**
//  * H1 lines are declared here so the timing constants stay in sync.
//  * - `gradient: true` enables the shimmer on that line only.
//  * - The outer `.hero-h1-line` masks the inner text (overflow hidden).
//  * - The inner `.hero-h1-line__inner` slides up from below.
//  * - The gradient (when enabled) lives on a THIRD nested span so the
//  *   reveal transform and the shimmer animation never conflict.
//  *
//  * NOTE: `text-balance` has been removed — it re-flows text at render
//  * time and can push glyphs outside the mask, causing clipping.
//  */
// const H1_LINES = [
//   { text: 'Stop fighting your software.', gradient: false },
//   { text: 'Build software that fights for you.', gradient: true },
// ];

// const H1_BASE_DELAY = 220;   // first line starts just after the eyebrow
// const H1_LINE_STAGGER = 160; // gap between line reveals
// const H1_LINE_DURATION = 700;

// // When the H1 has fully finished animating (used to time the rest of the hero).
// const H1_END =
//   H1_BASE_DELAY + (H1_LINES.length - 1) * H1_LINE_STAGGER + H1_LINE_DURATION;

// function HeroH1() {
//   return (
//     <h1
//       id="software-hero-title"
//       className="text-[clamp(2.35rem,6.8vw,6.4rem)] font-normal leading-[0.93] tracking-[-0.055em]"
//     >
//       {H1_LINES.map((line, i) => (
//         <span
//           key={line.text}
//           className="hero-h1-line"
//           style={{
//             '--wd': `${H1_BASE_DELAY + i * H1_LINE_STAGGER}ms`,
//             '--dur': `${H1_LINE_DURATION}ms`,
//           }}
//         >
//           <span className="hero-h1-line__inner">
//             {line.gradient ? (
//               <span className="inline-block bg-gradient-to-r from-[var(--fg)] via-[var(--accent)] to-[var(--fg)] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-[gradientShift_5s_ease_infinite]">
//                 {line.text}
//               </span>
//             ) : (
//               line.text
//             )}
//           </span>
//         </span>
//       ))}
//     </h1>
//   );
// }

// function Hero() {
//   return (
//     <section
//       className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-16"
//       aria-labelledby="software-hero-title"
//     >
//       <GlobalHeroBackground />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg)] via-[color:color-mix(in_srgb,var(--bg)_65%,transparent)] to-transparent"
//       />

//       <div className={`${CONTAINER} relative z-10`}>
//         <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
//           <Reveal delay={70}>
//             <div className="mb-5 flex flex-wrap justify-center gap-2">
//               <Pill accent>
//                 <Icon name="storm" className="w-3.5" />
//                 Storm Guarantee
//               </Pill>
//               <Pill>
//                 <Icon name="hurricane" className="w-3.5" />
//                 Hurricane Warranty
//               </Pill>
//             </div>
//           </Reveal>

//           {/* Eyebrow sits in its own Reveal so it does not gate the H1 timing. */}
//           <Reveal delay={140}>
//             <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
//               Custom Software
//             </p>
//           </Reveal>

//           {/* H1 owns its own per-line reveal — no wrapper Reveal needed. */}
//           <HeroH1 />

//           {/*
//             Downstream elements wait for the H1 to finish.
//             H1_END ≈ 1240ms. Paragraph starts at 1300ms, buttons at 1400ms,
//             guarantee badges at 1500ms.
//           */}
//           <Reveal delay={H1_END + 60} className="mt-6 max-w-2xl">
//             <p className="text-[clamp(.95rem,1.1vw,1.08rem)] leading-[1.65] text-[var(--muted)]">
//               Custom ERP, CRM, SaaS, and mobile apps. Designed around YOUR workflow — not a
//               template&apos;s limitations.
//             </p>
//           </Reveal>

//           <Reveal delay={H1_END + 160} className="mt-8 flex flex-wrap justify-center gap-3">
//             <a
//               href="#diagnosis"
//               className="group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)] transition-transform duration-300 hover:-translate-y-0.5"
//             >
//               Get Free Diagnosis
//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                 <Icon
//                   name="arrow"
//                   className="w-4 transition-transform group-hover:translate-x-0.5"
//                 />
//               </span>
//             </a>

//             <a
//               href="#solutions"
//               className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--bg)_55%,transparent)] px-5 text-sm transition-colors hover:bg-[var(--card)]"
//             >
//               See ERP Examples
//               <Icon name="arrow" className="w-4" />
//             </a>
//           </Reveal>

//           <Reveal delay={H1_END + 260} className="mt-10 w-full max-w-3xl">
//             <div className={`${GRID_GAP} grid grid-cols-1 sm:grid-cols-2`}>
//               <GuaranteeBadge
//                 type="Storm Guarantee"
//                 title="Don&apos;t like it?"
//                 copy="100% refund. No questions asked."
//                 icon="storm"
//               />
//               <GuaranteeBadge
//                 type="Hurricane Warranty"
//                 title="Late delivery?"
//                 copy="100% refund. Deadlines are sacred."
//                 icon="hurricane"
//               />
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// function QualificationSection() {
//   return (
//     <section id="qualification" className={SECTION}>
//       <div className={CONTAINER}>
//         <div className="mx-auto max-w-5xl">
//           <Reveal>
//             <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
//               Quick qualification
//             </p>
//             <h2 className="text-center text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               Which sounds like you?
//             </h2>
//           </Reveal>

//           <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
//             {QUALIFICATION_PATHS.map((item, index) => (
//               <Reveal key={item.number} delay={index * 80}>
//                 <a
//                   href={item.href}
//                   className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--fg)_25%,transparent)] hover:shadow-[0_24px_80px_rgba(0,0,0,.08)]"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs font-medium text-[var(--muted)]">{item.number}</span>
//                     <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--fg)] text-[var(--bg)]">
//                       <Icon name={item.icon} className="w-5" />
//                     </span>
//                   </div>

//                   <h3 className="mt-10 max-w-[18ch] text-xl leading-[1.15] tracking-[-.025em]">
//                     {item.title}
//                   </h3>

//                   <span className="mt-auto pt-8 text-sm underline decoration-[color:var(--border)] underline-offset-4">
//                     {item.cta}
//                   </span>

//                   <span className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
//                 </a>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SolutionsSection() {
//   return (
//     <section id="solutions" className={SECTION}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
//               Solutions by type
//             </p>
//             <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               Custom Software Solutions
//             </h2>
//             <p className="mt-5 text-[clamp(.94rem,1vw,1.05rem)] leading-7 text-[var(--muted)]">
//               Outcome-led systems that fit your process instead of asking your process to fit the
//               software.
//             </p>
//           </div>
//         </Reveal>

//         <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
//           {SOLUTIONS.map((item, index) => (
//             <Reveal key={item.eyebrow} delay={index * 80}>
//               <article className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--fg)_24%,transparent)]">
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
//                     {item.eyebrow}
//                   </span>
//                   <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--accent-ink)]">
//                     <Icon name={item.icon} className="w-5" />
//                   </span>
//                 </div>

//                 <h3 className="mt-10 max-w-[18ch] text-[clamp(1.35rem,2.3vw,2rem)] leading-[1.08] tracking-[-.03em]">
//                   {item.title}
//                 </h3>
//                 <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">{item.copy}</p>

//                 <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium">
//                   <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
//                   {item.detail}
//                 </div>

//                 <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
//               </article>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function IndustrySection() {
//   return (
//     <section id="industries" className={SECTION}>
//       <div className={CONTAINER}>
//         <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
//           <Reveal>
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
//               Industry experience
//             </p>
//             <h2 className="max-w-[10ch] text-[clamp(2.1rem,5.5vw,4.8rem)] leading-[.96] tracking-[-.05em]">
//               Sectors We&apos;ve Transformed
//             </h2>
//           </Reveal>

//           <Reveal delay={100}>
//             <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-[var(--border)] sm:grid-cols-4">
//               {SECTORS.map((sector, index) => (
//                 <div
//                   key={sector}
//                   className="group flex min-h-[95px] items-end border-b border-r border-[var(--border)] p-5 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 sm:min-h-[120px] sm:[&:nth-child(4n)]:border-r-0 sm:[&:nth-last-child(-n+4)]:border-b-0"
//                 >
//                   <div>
//                     <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>
//                     <span className="text-base font-medium transition-transform duration-300 group-hover:translate-x-1">
//                       {sector}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Reveal>
//         </div>

//         <div className="mt-8 flex justify-center lg:justify-end">
//           <ArrowLink href="#diagnosis">See industry case studies</ArrowLink>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProcessSection() {
//   return (
//     <section id="process" className={`${SECTION} bg-[color:var(--card)]`}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
//               Process timeline
//             </p>
//             <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               From first call to launch
//             </h2>
//           </div>
//         </Reveal>

//         <div className="relative mt-14">
//           <div className="absolute left-0 right-0 top-7 hidden h-px bg-[var(--border)] lg:block" />

//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4">
//             {PROCESS_STEPS.map(([time, title, copy], index) => (
//               <Reveal key={time} delay={index * 90} className="relative">
//                 <div className="flex gap-4 lg:flex-col lg:items-start">
//                   <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-xs font-semibold">
//                     {String(index + 1).padStart(2, '0')}
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
//                       {time}
//                     </p>
//                     <h3 className="mt-2 text-xl tracking-[-.02em]">{title}</h3>
//                     <p className="mt-2 max-w-[26ch] text-sm leading-6 text-[var(--muted)]">
//                       {copy}
//                     </p>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>

//         <div className="mt-12 flex items-center justify-center gap-2 text-center text-sm font-medium">
//           <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//             <Icon name="shield" className="w-3.5" />
//           </span>
//           Storm Guarantee applies throughout.
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQSection() {
//   const [open, setOpen] = useState(null);

//   return (
//     <section id="faq" className={SECTION}>
//       <div className={CONTAINER}>
//         <div className="mx-auto max-w-4xl">
//           <Reveal>
//             <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
//               FAQ
//             </p>
//             <h2 className="text-center text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               Questions? Answered.
//             </h2>
//           </Reveal>

//           <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)]">
//             {FAQS.map((item, index) => {
//               const isOpen = open === index;
//               return (
//                 <div key={item.q} className="border-b border-[var(--border)] last:border-b-0">
//                   <button
//                     type="button"
//                     className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
//                     onClick={() => setOpen(isOpen ? null : index)}
//                     aria-expanded={isOpen}
//                   >
//                     <span className="flex items-start gap-4">
//                       <span className="pt-0.5 text-xs font-medium text-[var(--muted)]">
//                         {String(index + 1).padStart(2, '0')}
//                       </span>
//                       <span className="text-base font-medium sm:text-lg">{item.q}</span>
//                     </span>
//                     <span
//                       className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-transform duration-300 ${
//                         isOpen ? 'rotate-45' : ''
//                       }`}
//                     >
//                       <Icon name="x" className="w-3.5 rotate-45" />
//                     </span>
//                   </button>

//                   <div
//                     className={`grid transition-[grid-template-rows,opacity] duration-300 ${
//                       isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'
//                     }`}
//                   >
//                     <div className="min-h-0 overflow-hidden">
//                       <p className="max-w-3xl px-5 pb-6 pl-[3.2rem] text-sm leading-6 text-[var(--muted)] sm:px-7 sm:pl-[4.7rem]">
//                         {item.a}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-7 flex justify-center">
//             <a
//               href="https://wa.me/34660014818"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 text-sm font-medium underline decoration-[color:var(--border)] underline-offset-4"
//             >
//               Still have questions? WhatsApp us
//               <Icon name="arrow" className="w-4" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ComparisonSection() {
//   return (
//     <section id="comparison" className={`${SECTION} pt-4`}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
//               Decision support
//             </p>
//             <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               Generic SaaS vs Custom Software
//             </h2>
//           </div>
//         </Reveal>

//         <Reveal delay={100} className="mx-auto mt-10 max-w-5xl">
//           <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
//             <div className="grid grid-cols-[1fr_1fr_1fr] bg-[color:var(--card)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
//               <div className="border-r border-[var(--border)] px-4 py-4 sm:px-6">Factor</div>
//               <div className="border-r border-[var(--border)] px-4 py-4 sm:px-6">Generic SaaS</div>
//               <div className="px-4 py-4 sm:px-6">Custom Software</div>
//             </div>

//             {COMPARISON.map(([factor, generic, custom], index) => (
//               <div
//                 key={factor}
//                 className="grid grid-cols-[1fr_1fr_1fr] border-t border-[var(--border)] text-sm"
//               >
//                 <div className="border-r border-[var(--border)] px-4 py-5 font-medium sm:px-6">
//                   {factor}
//                 </div>
//                 <div className="border-r border-[var(--border)] px-4 py-5 text-[var(--muted)] sm:px-6">
//                   {generic}
//                 </div>
//                 <div className="px-4 py-5 font-medium sm:px-6">
//                   {custom}
//                   {index === 3 && (
//                     <span className="ml-2 hidden rounded-full bg-[var(--accent)] px-2 py-0.5 text-[9px] uppercase tracking-[0.08em] text-[var(--accent-ink)] sm:inline-flex">
//                       You own it
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function DiagnosisSection() {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <section id="diagnosis" className="relative overflow-hidden py-20 sm:py-28">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_38%),linear-gradient(180deg,var(--card),var(--bg))]"
//       />

//       <div className={`${CONTAINER} relative`}>
//         <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--bg)_82%,transparent)] p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-[.95fr_1.05fr] lg:p-12">
//           <Reveal>
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
//               Your free diagnosis
//             </p>
//             <h2 className="max-w-[11ch] text-[clamp(2.3rem,5vw,4.7rem)] leading-[.95] tracking-[-.05em]">
//               Know what to build before you spend.
//             </h2>
//             <p className="mt-5 max-w-lg text-sm leading-6 text-[var(--muted)]">
//               Two details are enough to start the conversation. We&apos;ll use the call to define
//               the right direction.
//             </p>

//             <div className="mt-8 space-y-3">
//               {['What to build', 'How long it takes', 'Exact cost (fixed price)'].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                     <Icon name="check" className="w-4" />
//                   </span>
//                   <span className="text-sm font-medium">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </Reveal>

//           <Reveal delay={120}>
//             <form
//               onSubmit={(event) => {
//                 event.preventDefault();
//                 setSubmitted(true);
//               }}
//               className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-5 sm:p-7"
//             >
//               <div className="mb-6">
//                 <p className="text-sm font-semibold">Get My Diagnosis</p>
//                 <p className="mt-1 text-sm text-[var(--muted)]">
//                   No obligation. Just a clear next step.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <label className="block">
//                   <span className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
//                     Email
//                   </span>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="you@company.com"
//                     className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
//                   />
//                 </label>

//                 <label className="block">
//                   <span className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
//                     Phone
//                   </span>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     placeholder="+34 600 000 000"
//                     className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
//                   />
//                 </label>

//                 <button
//                   type="submit"
//                   className="group mt-2 inline-flex h-12 w-full items-center justify-between rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)]"
//                 >
//                   <span>{submitted ? 'Request received' : 'Get My Diagnosis'}</span>
//                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                     <Icon name={submitted ? 'check' : 'arrow'} className="w-4" />
//                   </span>
//                 </button>

//                 {submitted && (
//                   <p className="rounded-2xl border border-[var(--border)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
//                     Thanks — the form is ready for your backend or CRM endpoint.
//                   </p>
//                 )}
//               </div>
//             </form>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function CustomSoftwarePage() {
//   return (
//     <>
//       <Hero />
//       <QualificationSection />
//       <SolutionsSection />
//       <IndustrySection />
//       <ProcessSection />
//       <FAQSection />
//       <ComparisonSection />
//       <DiagnosisSection />

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
//           padding-bottom: 0.08em; /* prevents descender clipping (g, y, p) */
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



import React, { useState } from 'react';
import { CONTAINER, SECTION, GRID_GAP } from '../components/shared/constants';
import { Icon } from '../components/shared/Icon';
import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

/* ------------------------------------------------------------------ */
/*  BRAND — colors from the The Cloud Group logo                       */
/*  Golden yellow: #E5B32B  ·  Deep gold: #C99A1A  ·  Ink: #1c1608     */
/* ------------------------------------------------------------------ */

const BRAND = {
  gold: '#E5B32B',        // primary golden yellow (logo)
  goldDeep: '#C99A1A',    // darker gold for gradients
  goldBright: '#FFC93C',  // bright highlight
  goldSoft: '#F0C244',    // light gold
  goldDark: '#A67C0F',    // deep gold for contrast
  ink: '#1c1608',         // dark ink for text on gold
};

const QUALIFICATION_PATHS = [
  {
    number: '01',
    title: 'I need a NEW system built from scratch',
    cta: 'Explore Custom Development',
    href: '#solutions',
    icon: 'code',
  },
  {
    number: '02',
    title: 'I have software that needs REBUILDING',
    cta: 'Explore Modernization & Refactoring',
    href: '#process',
    icon: 'zap',
  },
  {
    number: '03',
    title: 'I need a specific tool (ERP/CRM/App)',
    cta: 'Browse Solutions by Type',
    href: '#solutions',
    icon: 'database',
  },
];

const SOLUTIONS = [
  {
    icon: 'database',
    eyebrow: 'ERP',
    title: 'Built for YOUR workflow.',
    copy: 'Replace rigid processes with software shaped around how your business actually operates.',
    detail: 'No per-user fees',
  },
  {
    icon: 'users',
    eyebrow: 'CRM',
    title: 'Sales pipeline built for your team.',
    copy: 'Give sales, operations, and leadership one system without forcing your process into a generic SaaS box.',
    detail: 'No SaaS fees',
  },
  {
    icon: 'activity',
    eyebrow: 'Mobile',
    title: 'Apps your teams can use anywhere.',
    copy: 'iOS, Android, React Native, or Flutter experiences built around the real workflow.',
    detail: 'Web + mobile',
  },
  {
    icon: 'chart',
    eyebrow: 'Big Data',
    title: 'Turn data into decisions.',
    copy: 'Data pipelines, BI dashboards, machine learning, and analytics engineered around your objectives.',
    detail: 'Pipelines + BI + ML',
  },
];

const SECTORS = [
  'Energy',
  'Finance',
  'Logistics',
  'HR',
  'Media',
  'Government',
  'Pharma',
  'Retail',
];

const FAQS = [
  {
    q: 'How much does custom software cost?',
    a: 'Cost depends on the workflow, integrations, users, and delivery scope. The diagnosis is designed to define the right build and give you a fixed-price direction before work starts.',
  },
  {
    q: 'How long does development take?',
    a: 'Timelines depend on scope and complexity. We structure delivery around architecture first, then short implementation sprints with regular demos so progress stays visible.',
  },
  {
    q: 'Why not just use Salesforce/SAP?',
    a: 'Generic platforms can be effective when their workflows match your business. Custom software is useful when the cost of changing your process, paying per user, or working around platform limitations becomes significant.',
  },
  {
    q: 'What guarantees do you offer?',
    a: 'The Storm Guarantee covers dissatisfaction with a refund commitment, while the Hurricane Warranty covers late delivery. Both are backed by written contract.',
  },
  {
    q: 'Can I see progress during development?',
    a: 'Yes. Ongoing two-week sprints and demos keep the work visible so you can review decisions, validate workflows, and steer the build before launch.',
  },
  {
    q: 'What happens after launch?',
    a: 'The relationship can continue with monitoring, maintenance, improvements, and further product development as your requirements evolve.',
  },
  {
    q: 'What technologies do you use?',
    a: 'The stack is selected around the product requirements rather than forcing one technology everywhere. Typical work can include modern web, mobile, cloud, API, data, and AI technologies.',
  },
];

const COMPARISON = [
  ['Cost', '$ monthly', 'One-time investment'],
  ['Fit', 'Adapt to tool', 'Tool adapts to you'],
  ['Scale', 'Per-user fees', 'No limits'],
  ['Ownership', 'Vendor owns', 'You own the code'],
  ['Exit', 'Locked in', 'Free to leave'],
];

const PROCESS_STEPS = [
  ['Day 0', 'Free consult', 'Start without commitment.'],
  ['Week 1–2', 'TCG-SAF™ architecture', 'Shape the system before the codebase compounds risk.'],
  ['Ongoing', '2-week sprints + demo', 'Review progress, decisions, and workflows continuously.'],
  ['Launch', 'Your code', 'Go live owning the product and the codebase.'],
];

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

function Pill({ children, accent = false }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em]',
        accent
          ? 'border-transparent bg-[var(--accent)] text-[var(--accent-ink)]'
          : 'border-[var(--border)] bg-[color:var(--card)] text-[var(--fg)]',
      ].join(' ')}
    >
      {children}
    </span>
  );
}

function ArrowLink({ href = '#', children, accent = false }) {
  return (
    <a
      href={href}
      className={[
        'group inline-flex items-center gap-3 rounded-full transition-transform duration-300 hover:-translate-y-0.5',
        accent
          ? 'bg-[var(--accent)] px-5 py-3 text-[var(--accent-ink)]'
          : 'text-[var(--fg)] underline decoration-[color:var(--border)] underline-offset-4',
      ].join(' ')}
    >
      <span>{children}</span>
      <span
        className={[
          'flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5',
          accent
            ? 'bg-[var(--accent-ink)] text-[var(--accent)]'
            : 'bg-[color:var(--card)]',
        ].join(' ')}
      >
        <Icon name="arrow" className="w-4" />
      </span>
    </a>
  );
}

function GuaranteeBadge({ type, title, copy, icon }) {
  return (
    <div className="group flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[color:var(--card)] px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,.06)]">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-ink)]">
        <Icon name={icon} className="w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          {type}
        </span>
        <span className="mt-0.5 block text-sm font-medium">{title}</span>
        <span className="mt-0.5 block text-xs leading-5 text-[var(--muted)]">{copy}</span>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO H1 — per-line mask reveal + shimmer on the payoff line       */
/* ------------------------------------------------------------------ */

const H1_LINES = [
  { text: 'Stop fighting your software.', gradient: false },
  { text: 'Build software that fights for you.', gradient: true },
];

const H1_BASE_DELAY = 220;
const H1_LINE_STAGGER = 160;
const H1_LINE_DURATION = 700;

const H1_END =
  H1_BASE_DELAY + (H1_LINES.length - 1) * H1_LINE_STAGGER + H1_LINE_DURATION;

function HeroH1() {
  return (
    <h1
      id="software-hero-title"
      className="text-[clamp(2.35rem,6.8vw,6.4rem)] font-normal leading-[0.93] tracking-[-0.055em]"
    >
      {H1_LINES.map((line, i) => (
        <span
          key={line.text}
          className="hero-h1-line"
          style={{
            '--wd': `${H1_BASE_DELAY + i * H1_LINE_STAGGER}ms`,
            '--dur': `${H1_LINE_DURATION}ms`,
          }}
        >
          <span className="hero-h1-line__inner">
            {line.gradient ? (
              <span className="inline-block bg-gradient-to-r from-[var(--fg)] via-[var(--accent)] to-[var(--fg)] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-[gradientShift_5s_ease_infinite]">
                {line.text}
              </span>
            ) : (
              line.text
            )}
          </span>
        </span>
      ))}
    </h1>
  );
}

function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-16"
      aria-labelledby="software-hero-title"
    >
      <GlobalHeroBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg)] via-[color:color-mix(in_srgb,var(--bg)_65%,transparent)] to-transparent"
      />

      <div className={`${CONTAINER} relative z-10`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Brand logo — inherits brand gold from --accent */}
          {/* <Reveal delay={40} className="mb-8 text-[color:var(--accent)]">
            <Logo />
          </Reveal> */}

          <Reveal delay={90}>
            <div className="mb-5 flex flex-wrap justify-center gap-2">
              <Pill accent>
                <Icon name="storm" className="w-3.5" />
                Storm Guarantee
              </Pill>
              <Pill>
                <Icon name="hurricane" className="w-3.5" />
                Hurricane Warranty
              </Pill>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Custom Software
            </p>
          </Reveal>

          <HeroH1 />

          <Reveal delay={H1_END + 60} className="mt-6 max-w-2xl">
            <p className="text-[clamp(.95rem,1.1vw,1.08rem)] leading-[1.65] text-[var(--muted)]">
              Custom ERP, CRM, SaaS, and mobile apps. Designed around YOUR workflow — not a
              template&apos;s limitations.
            </p>
          </Reveal>

          <Reveal delay={H1_END + 160} className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#diagnosis"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Free Diagnosis
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                <Icon
                  name="arrow"
                  className="w-4 transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </a>

            <a
              href="#solutions"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--bg)_55%,transparent)] px-5 text-sm transition-colors hover:bg-[var(--card)]"
            >
              See ERP Examples
              <Icon name="arrow" className="w-4" />
            </a>
          </Reveal>

          <Reveal delay={H1_END + 260} className="mt-10 w-full max-w-3xl">
            <div className={`${GRID_GAP} grid grid-cols-1 sm:grid-cols-2`}>
              <GuaranteeBadge
                type="Storm Guarantee"
                title="Don&apos;t like it?"
                copy="100% refund. No questions asked."
                icon="storm"
              />
              <GuaranteeBadge
                type="Hurricane Warranty"
                title="Late delivery?"
                copy="100% refund. Deadlines are sacred."
                icon="hurricane"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QualificationSection() {
  return (
    <section id="qualification" className={SECTION}>
      <div className={CONTAINER}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Quick qualification
            </p>
            <h2 className="text-center text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              Which sounds like you?
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
            {QUALIFICATION_PATHS.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <a
                  href={item.href}
                  className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--accent)_45%,transparent)] hover:shadow-[0_24px_80px_rgba(0,0,0,.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[var(--muted)]">{item.number}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--accent-ink)]">
                      <Icon name={item.icon} className="w-5" />
                    </span>
                  </div>

                  <h3 className="mt-10 max-w-[18ch] text-xl leading-[1.15] tracking-[-.025em]">
                    {item.title}
                  </h3>

                  <span className="mt-auto pt-8 text-sm underline decoration-[color:var(--border)] underline-offset-4">
                    {item.cta}
                  </span>

                  <span className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Solutions by type
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              Custom Software Solutions
            </h2>
            <p className="mt-5 text-[clamp(.94rem,1vw,1.05rem)] leading-7 text-[var(--muted)]">
              Outcome-led systems that fit your process instead of asking your process to fit the
              software.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {SOLUTIONS.map((item, index) => (
            <Reveal key={item.eyebrow} delay={index * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--accent)_45%,transparent)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                    {item.eyebrow}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--accent-ink)]">
                    <Icon name={item.icon} className="w-5" />
                  </span>
                </div>

                <h3 className="mt-10 max-w-[18ch] text-[clamp(1.35rem,2.3vw,2rem)] leading-[1.08] tracking-[-.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">{item.copy}</p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {item.detail}
                </div>

                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustrySection() {
  return (
    <section id="industries" className={SECTION}>
      <div className={CONTAINER}>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Industry experience
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.1rem,5.5vw,4.8rem)] leading-[.96] tracking-[-.05em]">
              Sectors We&apos;ve Transformed
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-[var(--border)] sm:grid-cols-4">
              {SECTORS.map((sector, index) => (
                <div
                  key={sector}
                  className="group flex min-h-[95px] items-end border-b border-r border-[var(--border)] p-5 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 sm:min-h-[120px] sm:[&:nth-child(4n)]:border-r-0 sm:[&:nth-last-child(-n+4)]:border-b-0"
                >
                  <div>
                    <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base font-medium transition-transform duration-300 group-hover:translate-x-1">
                      {sector}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-8 flex justify-center lg:justify-end">
          <ArrowLink href="#diagnosis">See industry case studies</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className={`${SECTION} bg-[color:var(--card)]`}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Process timeline
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              From first call to launch
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[var(--border)] lg:block" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4">
            {PROCESS_STEPS.map(([time, title, copy], index) => (
              <Reveal key={time} delay={index * 90} className="relative">
                <div className="flex gap-4 lg:flex-col lg:items-start">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] text-xs font-semibold text-[var(--accent-ink)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      {time}
                    </p>
                    <h3 className="mt-2 text-xl tracking-[-.02em]">{title}</h3>
                    <p className="mt-2 max-w-[26ch] text-sm leading-6 text-[var(--muted)]">
                      {copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-center text-sm font-medium">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
            <Icon name="shield" className="w-3.5" />
          </span>
          Storm Guarantee applies throughout.
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className={SECTION}>
      <div className={CONTAINER}>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              FAQ
            </p>
            <h2 className="text-center text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              Questions? Answered.
            </h2>
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)]">
            {FAQS.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q} className="border-b border-[var(--border)] last:border-b-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-4">
                      <span className="pt-0.5 text-xs font-medium text-[var(--accent)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base font-medium sm:text-lg">{item.q}</span>
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-45 border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]'
                          : 'border-[var(--border)]'
                      }`}
                    >
                      <Icon name="x" className="w-3.5 rotate-45" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-3xl px-5 pb-6 pl-[3.2rem] text-sm leading-6 text-[var(--muted)] sm:px-7 sm:pl-[4.7rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex justify-center">
            <a
              href="https://wa.me/34660014818"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium underline decoration-[color:var(--border)] underline-offset-4"
            >
              Still have questions? WhatsApp us
              <Icon name="arrow" className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section id="comparison" className={`${SECTION} pt-4`}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Decision support
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              Generic SaaS vs Custom Software
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-[color:var(--card)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              <div className="border-r border-[var(--border)] px-4 py-4 sm:px-6">Factor</div>
              <div className="border-r border-[var(--border)] px-4 py-4 sm:px-6">Generic SaaS</div>
              <div className="bg-[var(--accent)] px-4 py-4 text-[var(--accent-ink)] sm:px-6">
                Custom Software
              </div>
            </div>

            {COMPARISON.map(([factor, generic, custom], index) => (
              <div
                key={factor}
                className="grid grid-cols-[1fr_1fr_1fr] border-t border-[var(--border)] text-sm"
              >
                <div className="border-r border-[var(--border)] px-4 py-5 font-medium sm:px-6">
                  {factor}
                </div>
                <div className="border-r border-[var(--border)] px-4 py-5 text-[var(--muted)] sm:px-6">
                  {generic}
                </div>
                <div className="bg-[color:color-mix(in_srgb,var(--accent)_12%,transparent)] px-4 py-5 font-medium text-[var(--fg)] sm:px-6">
                  {custom}
                  {index === 3 && (
                    <span className="ml-2 hidden rounded-full bg-[var(--accent)] px-2 py-0.5 text-[9px] uppercase tracking-[0.08em] text-[var(--accent-ink)] sm:inline-flex">
                      You own it
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DiagnosisSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="diagnosis" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,color-mix(in_srgb,var(--accent)_20%,transparent),transparent_38%),linear-gradient(180deg,var(--card),var(--bg))]"
      />

      <div className={`${CONTAINER} relative`}>
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--bg)_82%,transparent)] p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-[.95fr_1.05fr] lg:p-12">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Your free diagnosis
            </p>
            <h2 className="max-w-[11ch] text-[clamp(2.3rem,5vw,4.7rem)] leading-[.95] tracking-[-.05em]">
              Know what to build before you spend.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-[var(--muted)]">
              Two details are enough to start the conversation. We&apos;ll use the call to define
              the right direction.
            </p>

            <div className="mt-8 space-y-3">
              {['What to build', 'How long it takes', 'Exact cost (fixed price)'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                    <Icon name="check" className="w-4" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-5 sm:p-7"
            >
              <div className="mb-6">
                <p className="text-sm font-semibold">Get My Diagnosis</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  No obligation. Just a clear next step.
                </p>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+34 600 000 000"
                    className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-2 inline-flex h-12 w-full items-center justify-between rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)]"
                >
                  <span>{submitted ? 'Request received' : 'Get My Diagnosis'}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                    <Icon name={submitted ? 'check' : 'arrow'} className="w-4" />
                  </span>
                </button>

                {submitted && (
                  <p className="rounded-2xl border border-[var(--border)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
                    Thanks — the form is ready for your backend or CRM endpoint.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function CustomSoftwarePage() {
  return (
    <>
      <Hero />
      <QualificationSection />
      <SolutionsSection />
      <IndustrySection />
      <ProcessSection />
      <FAQSection />
      <ComparisonSection />
      <DiagnosisSection />

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