// import React, { useEffect, useRef, useState } from 'react';
// import { CONTAINER, SECTION } from '../components/shared/constants';
// import { Icon } from '../components/shared/Icon';
// import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

// const SERVICES = [
//   { icon: 'code', title: 'Custom Software', sub: 'ERP/CRM, Mobile, SaaS', accent: '#8b5cf6' },
//   { icon: 'bot', title: 'AI Integration', sub: 'Agents, Chatbots, ML/NLP', accent: '#f59e0b' },
//   { icon: 'database', title: 'Architecture & Modernization', sub: 'Technical Debt, Cloud Migration', accent: '#06b6d4' },
//   { icon: 'bag', title: 'Web & eCommerce', sub: 'Corporate sites, Online stores', accent: '#22c55e' },
//   { icon: 'chart', title: 'Marketing & SEO', sub: 'Ranking, Campaigns, Automation', accent: '#ef4444' },
//   { icon: 'compass', title: 'Strategic Consulting', sub: 'Digital transformation, Process analysis', accent: '#ec4899' },
// ];

// const CASE_STUDIES = [
//   { number: '01', name: 'SISCOVA', meta: 'National Petroleum · Equatorial Guinea', result: '€2.4M saved/year', detail: '100% digitized' },
//   { number: '02', name: 'NaviCRM', meta: 'Maritime Logistics · Europe', result: '−60% management time', detail: '4-year partnership' },
//   { number: '03', name: 'Cultural Fit', meta: 'HR SaaS · Spain', result: '+340% conversion', detail: '50K users' },
// ];

// const TESTIMONIALS = [
//   { quote: 'They took time to understand how my company works before writing a single line of code.', name: 'Luis Cote', role: 'Director, Cote Cleaning Services' },
//   { quote: 'The difference was in the process: decisions were documented, ownership was clear, and delivery stayed focused.', name: 'María Ortega', role: 'Operations Director, SaaS Group' },
//   { quote: 'We finally had a technical partner who could translate business priorities into an executable product roadmap.', name: 'Daniel Ruiz', role: 'Founder, Logistics Platform' },
//   { quote: 'The team challenged assumptions early, which saved us from building the wrong thing expensively.', name: 'Elena Martín', role: 'Product Lead, B2B Services' },
// ];

// const OFFICES = [
//   { city: 'Madrid', type: 'HQ', specialty: 'Strategy & Engineering', lat: 40.42, lon: -3.70 },
//   { city: 'Marbella', type: 'Office', specialty: 'Client Success', lat: 36.51, lon: -4.89 },
//   { city: 'Dubai', type: 'Office', specialty: 'Enterprise Delivery', lat: 25.20, lon: 55.27 },
//   { city: 'Malabo', type: 'Office', specialty: 'Energy Systems', lat: 3.75, lon: 8.78 },
//   { city: 'Pereira', type: 'Office', specialty: 'Software Engineering', lat: 4.81, lon: -75.69 },
//   { city: 'Chandigarh', type: 'Office', specialty: 'Engineering', lat: 30.73, lon: 76.78 },
//   { city: 'Tlaxcala', type: 'Office', specialty: 'Product Engineering', lat: 19.31, lon: -98.24 },
//   { city: 'Havana', type: 'Office', specialty: 'Engineering', lat: 23.11, lon: -82.37 },
//   { city: 'Hong Kong', type: 'Office', specialty: 'Asia Operations', lat: 22.32, lon: 114.17 },
// ];

// function cn(...parts) {
//   return parts.filter(Boolean).join(' ');
// }

// function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;

//     if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
//       setVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
//     );

//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   const hidden = {
//     up: 'translate-y-8',
//     left: '-translate-x-8',
//     right: 'translate-x-8',
//     scale: 'scale-95',
//     blur: 'translate-y-5 blur-sm',
//   }[direction] || 'translate-y-8';

//   return (
//     <div
//       ref={ref}
//       className={cn(
//         'transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)]',
//         visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100 blur-0' : cn('opacity-0', hidden),
//         className
//       )}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// function Eyebrow({ children }) {
//   return (
//     <p className="mb-3 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
//       {children}
//     </p>
//   );
// }

// function SectionIntro({ eyebrow, title, copy, align = 'center' }) {
//   return (
//     <div className={cn(
//       'mb-10 md:mb-14',
//       align === 'left' ? 'max-w-2xl text-left' : 'mx-auto max-w-3xl text-center'
//     )}>
//       {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
//       <h2 className="text-balance text-[clamp(2.25rem,6vw,5.6rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[color:var(--fg)]">
//         {title}
//       </h2>
//       {copy && (
//         <p className="mx-auto mt-5 max-w-2xl text-[clamp(.95rem,1.2vw,1.08rem)] leading-[1.65] text-[color:var(--muted)]">
//           {copy}
//         </p>
//       )}
//     </div>
//   );
// }

// function ArrowLink({ children, href = '#', accent = false }) {
//   return (
//     <a
//       href={href}
//       className={cn(
//         'group inline-flex items-center gap-3 text-sm font-medium transition-transform duration-300 hover:translate-x-1',
//         accent
//           ? 'rounded-full bg-[color:var(--fg)] px-5 py-2.5 text-[color:var(--bg)]'
//           : 'text-[color:var(--fg)] underline decoration-[color:var(--border)] underline-offset-4 hover:decoration-current'
//       )}
//     >
//       {children}
//       <span className={cn(
//         'inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5',
//         accent
//           ? 'bg-[color:var(--accent)] text-[color:var(--accent-ink)]'
//           : 'bg-[color:var(--card)] text-[color:var(--fg)]'
//       )}>
//         <Icon name="arrow" className="w-3.5" />
//       </span>
//     </a>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  HERO H1 — per-line mask reveal + inline highlight + shimmer       */
// /* ------------------------------------------------------------------ */

// /**
//  * The H1 has two lines:
//  *   1. "We build custom software that"
//  *   2. "ships on time — or you don't pay."
//  *
//  * Line 2 keeps the existing inline highlight bar under "ships on time"
//  * AND applies the gradient shimmer to "or you don't pay." — the payoff.
//  *
//  * The mask reveal lives on `.hero-h1-line` / `.hero-h1-line__inner`.
//  * The highlight and gradient live on deeper nested spans so all three
//  * effects (reveal transform, highlight bar, shimmer) can coexist
//  * without fighting over `animation` or `transform`.
//  */
// const H1_BASE_DELAY = 140;
// const H1_LINE_STAGGER = 150;
// const H1_LINE_DURATION = 700;

// function HeroH1() {
//   return (
//     <h1
//       id="home-hero-title"
//       className="max-w-6xl text-[clamp(2.4rem,7vw,6.8rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[color:var(--fg)]"
//     >
//       <span
//         className="hero-h1-line"
//         style={{
//           '--wd': `${H1_BASE_DELAY}ms`,
//           '--dur': `${H1_LINE_DURATION}ms`,
//         }}
//       >
//         <span className="hero-h1-line__inner">
//           We build custom software that
//         </span>
//       </span>

//       <span
//         className="hero-h1-line"
//         style={{
//           '--wd': `${H1_BASE_DELAY + H1_LINE_STAGGER}ms`,
//           '--dur': `${H1_LINE_DURATION}ms`,
//         }}
//       >
//         <span className="hero-h1-line__inner">
//           <span className="relative inline-block">
//             <span className="relative z-10">ships on time</span>
//             <span
//               aria-hidden="true"
//               className="absolute inset-x-0 bottom-[0.06em] -z-0 h-[0.22em] rounded-full bg-[color:var(--accent)]/70"
//             />
//           </span>
//           {' \u2014 '}
//           <span className="inline-block bg-gradient-to-r from-[color:var(--fg)] via-[color:var(--accent)] to-[color:var(--fg)] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-[gradientShift_5s_ease_infinite]">
//             or you don&apos;t pay.
//           </span>
//         </span>
//       </span>
//     </h1>
//   );
// }

// function Hero() {
//   return (
//     <section id="home" className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-14" aria-labelledby="home-hero-title">
//       <GlobalHeroBackground />
//       <div className={cn(CONTAINER, 'relative z-10')}>
//         <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
//           <Reveal className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3" delay={80}>
//             <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3.5 py-2 text-xs sm:text-sm text-[color:var(--fg)] backdrop-blur">
//               <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
//               Custom software partner
//             </span>
//             <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg)]/70 px-3.5 py-2 text-xs sm:text-sm text-[color:var(--fg)] backdrop-blur">
//               <span className="tracking-[0.12em] text-[color:var(--accent)]">★★★★★</span>
//               4.9/5 Google Reviews
//             </span>
//           </Reveal>

//           {/* H1 owns its own per-line reveal — no wrapper Reveal needed. */}
//           <HeroH1 />

//           <Reveal delay={620} className="mt-7 max-w-3xl">
//             <p className="text-[clamp(1rem,1.45vw,1.2rem)] leading-[1.65] text-[color:var(--muted)]">
//               15+ years. 2,000+ projects. 9 countries. Enterprise platforms, AI integration, and systems engineering for companies that outgrow spreadsheets.
//             </p>
//           </Reveal>

//           <Reveal delay={720} className="mt-8 flex flex-wrap items-center justify-center gap-3">
//             <a href="#contact" className="group inline-flex h-12 items-center gap-3 rounded-full bg-[color:var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[color:var(--bg)] transition-transform duration-300 hover:-translate-y-0.5">
//               Get Free Consultation
//               <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)] transition-transform duration-300 group-hover:rotate-[-8deg]">
//                 <Icon name="arrow" className="w-4" />
//               </span>
//             </a>
//             <a href="#work" className="inline-flex h-12 items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-5 text-sm font-medium text-[color:var(--fg)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5">
//               See Our Work
//               <Icon name="arrow" className="w-4" />
//             </a>
//           </Reveal>

//           <Reveal delay={820} className="mt-12">
//             <a href="#trust" className="group inline-flex flex-col items-center gap-2 text-xs text-[color:var(--muted)]">
//               <span>Scroll to explore</span>
//               <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)] transition-transform duration-300 group-hover:translate-y-1">
//                 <Icon name="arrow" className="w-4 rotate-90" />
//               </span>
//             </a>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TrustBar() {
//   const stats = [
//     ['2,000+', 'Projects Delivered'],
//     ['150+', 'Experts Worldwide'],
//     ['9', 'Countries with Offices'],
//     ['98%', 'Satisfaction Rate'],
//   ];

//   return (
//     <section id="trust" className="border-y border-[color:var(--border)] bg-[color:var(--card)]/80" aria-label="Company statistics">
//       <div className={CONTAINER}>
//         <div className="grid grid-cols-2 divide-x divide-y divide-[color:var(--border)] md:grid-cols-4 md:divide-y-0">
//           {stats.map(([value, label], index) => (
//             <Reveal key={label} delay={index * 70}>
//               <div className="flex min-h-28 flex-col justify-center px-4 py-7 text-center sm:px-6 md:min-h-32 md:py-8">
//                 <strong className="text-[clamp(1.8rem,3.5vw,3rem)] font-normal leading-none tracking-[-.04em] text-[color:var(--fg)]">{value}</strong>
//                 <span className="mt-2 text-xs uppercase tracking-[.12em] text-[color:var(--muted)]">{label}</span>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProblemSection() {
//   const issues = [
//     'Your business runs on Excel',
//     'Previous developers overpromised, underdelivered',
//     'Your software is slow, old, and fragile',
//     'Salesforce/SAP costs more than it\'s worth',
//   ];

//   return (
//     <section id="problem" className={SECTION}>
//       <div className={CONTAINER}>
//         <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-stretch">
//           <Reveal direction="left" className="flex flex-col justify-center">
//             <Eyebrow>The problem</Eyebrow>
//             <h2 className="max-w-xl text-[clamp(2.4rem,6vw,5.6rem)] font-normal leading-[.94] tracking-[-.05em] text-[color:var(--fg)]">
//               Sound familiar?
//             </h2>
//             <p className="mt-6 max-w-xl text-[clamp(1rem,1.2vw,1.08rem)] leading-[1.65] text-[color:var(--muted)]">
//               You don&apos;t need another vendor. You need a technology partner who understands the business behind the software.
//             </p>
//             <div className="mt-7">
//               <ArrowLink href="#difference">See how we&apos;re different</ArrowLink>
//             </div>
//           </Reveal>

//           <Reveal direction="scale" delay={110}>
//             <div className="h-full rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-[0_30px_90px_rgba(0,0,0,.08)] sm:p-8">
//               <ul className="space-y-4">
//                 {issues.map((item) => (
//                   <li key={item} className="flex items-start gap-3.5 text-[clamp(.95rem,1.15vw,1.05rem)] leading-[1.5] text-[color:var(--fg)]">
//                     <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)]">
//                       <Icon name="check" className="w-4" />
//                     </span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-8 border-t border-[color:var(--border)] pt-7 sm:mt-10 sm:pt-8">
//                 <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//                   <div>
//                     <div className="text-[clamp(3.8rem,10vw,7rem)] font-normal leading-none tracking-[-.06em] text-[color:var(--fg)]">68%</div>
//                     <p className="mt-2 text-sm leading-[1.55] text-[color:var(--muted)]">
//                       of software projects fail.
//                     </p>
//                   </div>
//                   <strong className="max-w-[11ch] text-xl font-normal leading-[1.05] tracking-[-.03em] text-[color:var(--fg)] sm:text-2xl">
//                     Not on our watch.
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ServiceCard({ item, index }) {
//   return (
//     <Reveal delay={index * 70}>
//       <a
//         href="#contact"
//         className="group relative flex min-h-60 flex-col overflow-hidden rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-[color:var(--c)] hover:shadow-[0_24px_60px_rgba(0,0,0,.08)] sm:p-7"
//         style={{ '--c': item.accent }}
//       >
//         <span className="pointer-events-none absolute right-[-15%] top-[-25%] h-40 w-40 rounded-full bg-[color:var(--c)]/15 blur-3xl transition-transform duration-700 group-hover:scale-150" />
//         <div className="relative flex items-center justify-between">
//           <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--fg)] text-[color:var(--bg)]">
//             <Icon name={item.icon} className="w-5" />
//           </span>
//           <span className="text-xs font-medium tracking-[.15em] text-[color:var(--muted)]">0{index + 1}</span>
//         </div>
//         <div className="relative mt-auto pt-10">
//           <h3 className="text-xl font-normal tracking-[-.025em] text-[color:var(--fg)] sm:text-2xl">{item.title}</h3>
//           <p className="mt-2 max-w-[26ch] text-sm leading-[1.55] text-[color:var(--muted)]">{item.sub}</p>
//         </div>
//         <span className="relative mt-6 flex h-10 w-10 items-center justify-center self-end rounded-full bg-[color:var(--bg)] text-[color:var(--fg)] transition-transform duration-300 group-hover:translate-x-1">
//           <Icon name="arrow" className="w-4" />
//         </span>
//       </a>
//     </Reveal>
//   );
// }

// function ServicesSection() {
//   return (
//     <section id="services" className={SECTION}>
//       <div className={CONTAINER}>
//         <SectionIntro
//           eyebrow="Capabilities"
//           title="What do you need?"
//           copy="Pick the problem. We bring the engineering, architecture, and delivery discipline around it."
//         />
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {SERVICES.map((item, index) => (
//             <ServiceCard key={item.title} item={item} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function DifferenceSection() {
//   const them = ['Code first, think later', 'No documentation', 'Nobody owns decisions', 'Late delivery + more money'];
//   const us = ['Architecture first', 'TCG-SAF™ framework', 'RACI governance', 'On-time or 100% refund'];

//   return (
//     <section id="difference" className={SECTION}>
//       <div className={CONTAINER}>
//         <SectionIntro eyebrow="The differentiator" title="Why 68% of software projects fail — and why ours don&apos;t." />

//         <div className="grid gap-4 lg:grid-cols-2">
//           <Reveal direction="left">
//             <div className="h-full rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8">
//               <div className="mb-7 flex items-center justify-between">
//                 <span className="text-xs tracking-[.18em] text-[color:var(--muted)]">01</span>
//                 <span className="text-xs font-medium uppercase tracking-[.18em] text-[color:var(--muted)]">Them</span>
//               </div>
//               <ul className="space-y-4">
//                 {them.map((item) => (
//                   <li key={item} className="flex items-center gap-3">
//                     <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)]">
//                       <Icon name="x" className="w-3.5" />
//                     </span>
//                     <span className="text-[clamp(.95rem,1.1vw,1.05rem)] leading-[1.5] text-[color:var(--fg)]">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </Reveal>

//           <Reveal direction="right" delay={100}>
//             <div className="relative h-full overflow-hidden rounded-[2rem] bg-[color:var(--fg)] p-6 text-[color:var(--bg)] sm:p-8">
//               <span className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[color:var(--accent)]/25 blur-3xl" />
//               <div className="relative mb-7 flex items-center justify-between">
//                 <span className="text-xs tracking-[.18em] opacity-60">02</span>
//                 <span className="text-xs font-medium uppercase tracking-[.18em] opacity-80">Us</span>
//               </div>
//               <ul className="relative space-y-4">
//                 {us.map((item) => (
//                   <li key={item} className="flex items-center gap-3">
//                     <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)]">
//                       <Icon name="check" className="w-3.5" />
//                     </span>
//                     <span className="text-[clamp(.95rem,1.1vw,1.05rem)] leading-[1.5]">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="relative mt-8 border-t border-white/15 pt-6 text-[clamp(2rem,4vw,3rem)] font-normal leading-none tracking-[-.04em]">
//                 TCG-SAF™
//               </div>
//             </div>
//           </Reveal>
//         </div>

//         <div className="mt-7 flex justify-center">
//           <ArrowLink href="#methodology">Explore our methodology</ArrowLink>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CaseStudyCard({ item, index }) {
//   return (
//     <Reveal delay={index * 90}>
//       <article className="group flex min-h-80 flex-col overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,.08)] sm:p-7">
//         <div className="flex items-center justify-between text-xs tracking-[.18em] text-[color:var(--muted)]">
//           <span>{item.number}</span>
//           <Icon name="arrow" className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </div>

//         <div className="mt-12">
//           <div className="text-[clamp(2.25rem,5vw,4.1rem)] font-normal leading-[.92] tracking-[-.05em] text-[color:var(--fg)]">{item.result}</div>
//           <div className="mt-3 text-sm font-medium uppercase tracking-[.14em] text-[color:var(--accent)]">{item.detail}</div>
//         </div>

//         <div className="mt-auto border-t border-[color:var(--border)] pt-6">
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h3 className="text-2xl font-normal tracking-[-.03em] text-[color:var(--fg)]">{item.name}</h3>
//               <p className="mt-1 text-sm text-[color:var(--muted)]">{item.meta}</p>
//             </div>
//             <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--fg)] underline underline-offset-4">
//               Read case study
//               <Icon name="arrow" className="w-4" />
//             </a>
//           </div>
//         </div>
//       </article>
//     </Reveal>
//   );
// }

// function CaseStudiesSection() {
//   return (
//     <section id="work" className={SECTION}>
//       <div className={CONTAINER}>
//         <SectionIntro eyebrow="Selected work" title="Results that speak for themselves" />
//         <div className="grid gap-4 lg:grid-cols-3">
//           {CASE_STUDIES.map((item, index) => (
//             <CaseStudyCard key={item.name} item={item} index={index} />
//           ))}
//         </div>
//         <div className="mt-8 flex justify-center">
//           <ArrowLink href="#contact" accent>View all projects</ArrowLink>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TestimonialsSection() {
//   const [active, setActive] = useState(0);
//   const current = TESTIMONIALS[active];

//   useEffect(() => {
//     const timer = window.setInterval(() => {
//       setActive((value) => (value + 1) % TESTIMONIALS.length);
//     }, 6500);

//     return () => window.clearInterval(timer);
//   }, []);

//   return (
//     <section id="testimonials" className={SECTION}>
//       <div className={CONTAINER}>
//         <SectionIntro eyebrow="Social proof" title="What clients remember" />

//         <Reveal direction="scale">
//           <div className="relative overflow-hidden rounded-[2.2rem] bg-[color:var(--fg)] p-7 text-[color:var(--bg)] sm:p-10 lg:p-14">
//             <div className="pointer-events-none absolute right-[-5%] top-[-25%] h-64 w-64 rounded-full bg-[color:var(--accent)]/25 blur-3xl" />
//             <span className="relative text-6xl leading-none text-[color:var(--accent)]">“</span>

//             <blockquote className="relative mt-2 max-w-4xl text-[clamp(1.8rem,4.2vw,4rem)] font-normal leading-[1.05] tracking-[-.035em]">
//               {current.quote}
//             </blockquote>

//             <div className="relative mt-10 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
//               <div className="flex flex-col">
//                 <strong className="text-base font-medium">{current.name}</strong>
//                 <span className="mt-1 text-sm opacity-60">{current.role}</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
//                   aria-label="Previous testimonial"
//                 >
//                   <Icon name="arrow" className="w-4 rotate-180" />
//                 </button>
//                 <span className="min-w-20 text-center text-xs tracking-[.16em] opacity-60">
//                   {String(active + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
//                 </span>
//                 <button
//                   type="button"
//                   onClick={() => setActive((active + 1) % TESTIMONIALS.length)}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
//                   aria-label="Next testimonial"
//                 >
//                   <Icon name="arrow" className="w-4" />
//                 </button>
//               </div>
//             </div>

//             <div className="relative mt-6 flex gap-2">
//               {TESTIMONIALS.map((item, index) => (
//                 <button
//                   key={item.name}
//                   type="button"
//                   className={cn(
//                     'h-1.5 rounded-full transition-all duration-300',
//                     active === index ? 'w-10 bg-[color:var(--accent)]' : 'w-2 bg-white/25'
//                   )}
//                   onClick={() => setActive(index)}
//                   aria-label={`Show testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function GuaranteesSection() {
//   const cards = [
//     { icon: 'storm', title: 'Storm Guarantee', text: 'Don\'t like it? 100% refund. No questions asked.' },
//     { icon: 'hurricane', title: 'Hurricane Warranty', text: 'Late delivery? 100% refund. Deadlines are sacred.' },
//   ];

//   return (
//     <section id="guarantees" className="border-y border-[color:var(--border)] bg-[color:var(--card)] py-[clamp(3.5rem,7vw,6rem)]">
//       <div className={CONTAINER}>
//         <div className="grid gap-4 md:grid-cols-2">
//           {cards.map((card, index) => (
//             <Reveal key={card.title} delay={index * 90}>
//               <div className="h-full rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--bg)] p-6 sm:p-8">
//                 <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-[color:var(--accent-ink)]">
//                   <Icon name={card.icon} className="w-6" />
//                 </span>
//                 <Eyebrow>Risk reversal</Eyebrow>
//                 <h3 className="mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-normal leading-none tracking-[-.04em] text-[color:var(--fg)]">{card.title}</h3>
//                 <p className="mt-5 max-w-xl text-base leading-[1.6] text-[color:var(--muted)]">{card.text}</p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//         <p className="mt-5 text-center text-xs text-[color:var(--muted)]">Both backed by written contract.</p>
//       </div>
//     </section>
//   );
// }

// function projectPoint(lat, lon) {
//   const x = ((lon + 180) / 360) * 100;
//   const y = ((90 - lat) / 180) * 100;
//   return { x, y };
// }

// function WorldMap({ selected, onSelect }) {
//   return (
//     <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-3 sm:p-5">
//       <svg
//         className="block h-auto w-full text-[color:var(--fg)]"
//         viewBox="0 0 1000 500"
//         role="img"
//         aria-label="Schematic world map showing nine TCG offices"
//       >
//         <defs>
//           <pattern id="mapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
//             <path d="M50 0H0V50" fill="none" stroke="currentColor" strokeOpacity=".1" />
//           </pattern>
//           <filter id="mapGlow">
//             <feGaussianBlur stdDeviation="4" result="blur" />
//             <feMerge>
//               <feMergeNode in="blur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         <rect width="1000" height="500" fill="url(#mapGrid)" opacity=".85" />
//         <path
//           d="M80 108l55-45 94 15 67 42 5 44-40 23-23 54-55-17-13-42-48-31zm184 167l22 13 11 44-28 47-25-11 6-46zm95-82l49-20 19 17-15 24-41 11zm151-66l82-38 78 7 57 34-20 34-55 4-16 36-51 8-25-31-50 4zm84 93l70-9 41 26-22 34-62 6-43-19zm181-71l54-14 55 23 5 39-42 27-53-13-32-28zm69 96l44 14 20 29-39 25-42-12zm53-102l50-14 43 29-10 30-51 13-41-29z"
//           fill="currentColor"
//           fillOpacity=".1"
//         />
//         <path
//           d="M536 321l38 27 26 57-20 48-27-17-13-60-30-29zm-350-6l30 34 12 43-31 26-23-34zm-92-31l31 10 24 33-17 30-38-14-20-25z"
//           fill="currentColor"
//           fillOpacity=".045"
//         />

//         {OFFICES.map((office) => {
//           const point = projectPoint(office.lat, office.lon);
//           const active = selected.city === office.city;

//           return (
//             <g
//               key={office.city}
//               onClick={() => onSelect(office)}
//               onKeyDown={(event) => {
//                 if (event.key === 'Enter' || event.key === ' ') onSelect(office);
//               }}
//               tabIndex="0"
//               role="button"
//               aria-label={`${office.city}, ${office.type}, ${office.specialty}`}
//               style={{ transform: `translate(${point.x * 10}px, ${point.y * 5}px)` }}
//               className="cursor-pointer"
//             >
//               <circle r={active ? 16 : 12} fill="var(--accent)" opacity=".16" />
//               <circle r={active ? 6 : 5} fill="var(--accent)" filter="url(#mapGlow)" />
//             </g>
//           );
//         })}
//       </svg>

//       <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
//         {OFFICES.map((office) => (
//           <button
//             key={office.city}
//             type="button"
//             onClick={() => onSelect(office)}
//             className={cn(
//               'rounded-full border px-3 py-1.5 text-xs backdrop-blur transition-colors',
//               selected.city === office.city
//                 ? 'border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--accent-ink)]'
//                 : 'border-[color:var(--border)] bg-[color:var(--bg)]/80 text-[color:var(--fg)]'
//             )}
//           >
//             {office.city}
//           </button>
//         ))}
//       </div>

//       <div className="absolute left-5 top-5 max-w-[15rem] rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/85 p-4 shadow-lg backdrop-blur">
//         <span className="block text-[10px] font-medium uppercase tracking-[.18em] text-[color:var(--accent)]">{selected.type}</span>
//         <strong className="mt-1 block text-lg font-normal tracking-[-.02em] text-[color:var(--fg)]">{selected.city}</strong>
//         <span className="mt-1 block text-sm leading-[1.4] text-[color:var(--muted)]">{selected.specialty}</span>
//       </div>
//     </div>
//   );
// }

// function PresenceSection() {
//   const [selected, setSelected] = useState(OFFICES[0]);

//   return (
//     <section id="presence" className={SECTION}>
//       <div className={CONTAINER}>
//         <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <Eyebrow>Global presence</Eyebrow>
//             <h2 className="text-[clamp(2.4rem,6vw,5.6rem)] font-normal leading-[.94] tracking-[-.05em] text-[color:var(--fg)]">
//               Local teams.<br />
//               <span className="text-[color:var(--accent)]">Global reach.</span>
//             </h2>
//           </div>
//           <div className="flex flex-wrap items-center gap-3">
//             <a href="tel:+34660014818" className="text-sm font-medium text-[color:var(--fg)] underline underline-offset-4">+34 660 014 818</a>
//             <a
//               href="https://wa.me/34660014818"
//               target="_blank"
//               rel="noreferrer"
//               className="rounded-full bg-[color:var(--fg)] px-5 py-2.5 text-sm font-medium text-[color:var(--bg)]"
//             >
//               WhatsApp us
//             </a>
//           </div>
//         </div>

//         <Reveal direction="scale">
//           <WorldMap selected={selected} onSelect={setSelected} />
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function MethodologySection() {
//   const points = [
//     ['Architecture first', 'Define the technical shape before the codebase compounds risk.'],
//     ['RACI governance', 'Make decisions, owners, and escalation paths explicit.'],
//     ['Proof before scale', 'Validate the workflow before turning it into a large programme.'],
//   ];

//   return (
//     <section id="methodology" className="bg-[color:var(--fg)] py-[clamp(4rem,8vw,7rem)] text-[color:var(--bg)]">
//       <div className={CONTAINER}>
//         <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
//           <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
//             <p className="mb-3 text-[11px] font-medium uppercase tracking-[.18em] opacity-60">TCG-SAF™ methodology</p>
//             <h2 className="max-w-xl text-[clamp(2.3rem,5.5vw,5rem)] font-normal leading-[.94] tracking-[-.05em]">
//               Engineering discipline without the corporate fog.
//             </h2>
//             <p className="mt-6 max-w-xl text-base leading-[1.65] opacity-65">
//               A concise delivery framework built around architecture, accountability, proof, and measurable outcomes.
//             </p>
//           </Reveal>

//           <div className="space-y-3">
//             {points.map(([title, text], index) => (
//               <Reveal key={title} delay={index * 80}>
//                 <div className="group flex gap-5 rounded-[1.5rem] border border-white/12 bg-white/5 p-5 transition-colors hover:bg-white/10 sm:gap-7 sm:p-7">
//                   <span className="pt-1 text-xs tracking-[.18em] opacity-50">0{index + 1}</span>
//                   <div>
//                     <h3 className="text-xl font-normal tracking-[-.02em] sm:text-2xl">{title}</h3>
//                     <p className="mt-2 max-w-xl text-sm leading-[1.6] opacity-60 sm:text-base">{text}</p>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FinalCTA() {
//   const [submitted, setSubmitted] = useState(false);

//   const onSubmit = (event) => {
//     event.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <section id="contact" className="py-[clamp(4rem,8vw,7rem)]">
//       <div className={CONTAINER}>
//         <div className="overflow-hidden rounded-[2.2rem] border border-[color:var(--border)] bg-[color:var(--card)]">
//           <div className="grid lg:grid-cols-[1.05fr_.95fr]">
//             <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
//               <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--accent)]/20 blur-3xl" />
//               <div className="relative">
//                 <Eyebrow>Start a conversation</Eyebrow>
//                 <h2 className="text-[clamp(2.5rem,6vw,5.6rem)] font-normal leading-[.92] tracking-[-.05em] text-[color:var(--fg)]">
//                   Ready when you are.
//                 </h2>
//                 <p className="mt-5 max-w-lg text-base leading-[1.65] text-[color:var(--muted)]">
//                   2 hours. No obligation. No sales pitch. Just answers.
//                 </p>
//               </div>
//             </div>

//             <form onSubmit={onSubmit} className="border-t border-[color:var(--border)] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
//               <div className="space-y-5">
//                 <label className="block">
//                   <span className="mb-2 block text-xs font-medium uppercase tracking-[.14em] text-[color:var(--muted)]">Email</span>
//                   <input
//                     className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3.5 text-sm text-[color:var(--fg)] outline-none transition-[border-color,box-shadow] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20"
//                     type="email"
//                     name="email"
//                     placeholder="you@company.com"
//                     required
//                   />
//                 </label>

//                 <label className="block">
//                   <span className="mb-2 block text-xs font-medium uppercase tracking-[.14em] text-[color:var(--muted)]">Phone</span>
//                   <input
//                     className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3.5 text-sm text-[color:var(--fg)] outline-none transition-[border-color,box-shadow] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20"
//                     type="tel"
//                     name="phone"
//                     placeholder="+34 600 000 000"
//                     required
//                   />
//                 </label>

//                 <button
//                   className="group mt-2 flex w-full items-center justify-between rounded-full bg-[color:var(--fg)] py-1.5 pl-5 pr-1.5 text-left text-sm font-medium text-[color:var(--bg)] transition-transform duration-300 hover:-translate-y-0.5"
//                   type="submit"
//                 >
//                   <span>{submitted ? 'Request received' : 'Book My Free Consultation'}</span>
//                   <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)]">
//                     <Icon name={submitted ? 'check' : 'arrow'} className="w-4" />
//                   </span>
//                 </button>

//                 {submitted && (
//                   <p className="rounded-2xl bg-[color:var(--accent)]/10 px-4 py-3 text-sm leading-[1.55] text-[color:var(--fg)]">
//                     Thanks — we&apos;ll use the details to coordinate the consultation.
//                   </p>
//                 )}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <TrustBar />
//       <ProblemSection />
//       <ServicesSection />
//       <DifferenceSection />
//       <CaseStudiesSection />
//       <TestimonialsSection />
//       <GuaranteesSection />
//       <PresenceSection />
//       <MethodologySection />
//       <FinalCTA />

//       <style>{`
//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50%      { background-position: 100% 50%; }
//         }

//         /* H1 per-line mask reveal */
//         .hero-h1-line {
//           display: block;
//           overflow: hidden;
//           padding-bottom: 0.32em; /* leaves room for descenders AND the highlight bar */
//           margin-bottom: -0.22em; /* compensates so visual line rhythm stays tight */
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
import React, { useEffect, useRef, useState } from 'react';
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

const SERVICES = [
  { icon: 'code', title: 'Custom Software', sub: 'ERP/CRM, Mobile, SaaS', accent: BRAND.gold },
  { icon: 'bot', title: 'AI Integration', sub: 'Agents, Chatbots, ML/NLP', accent: BRAND.goldBright },
  { icon: 'database', title: 'Architecture & Modernization', sub: 'Technical Debt, Cloud Migration', accent: BRAND.goldDeep },
  { icon: 'bag', title: 'Web & eCommerce', sub: 'Corporate sites, Online stores', accent: BRAND.goldSoft },
  { icon: 'chart', title: 'Marketing & SEO', sub: 'Ranking, Campaigns, Automation', accent: BRAND.goldDark },
  { icon: 'compass', title: 'Strategic Consulting', sub: 'Digital transformation, Process analysis', accent: BRAND.gold },
];

const CASE_STUDIES = [
  { number: '01', name: 'SISCOVA', meta: 'National Petroleum · Equatorial Guinea', result: '€2.4M saved/year', detail: '100% digitized' },
  { number: '02', name: 'NaviCRM', meta: 'Maritime Logistics · Europe', result: '−60% management time', detail: '4-year partnership' },
  { number: '03', name: 'Cultural Fit', meta: 'HR SaaS · Spain', result: '+340% conversion', detail: '50K users' },
];

const TESTIMONIALS = [
  { quote: 'They took time to understand how my company works before writing a single line of code.', name: 'Luis Cote', role: 'Director, Cote Cleaning Services' },
  { quote: 'The difference was in the process: decisions were documented, ownership was clear, and delivery stayed focused.', name: 'María Ortega', role: 'Operations Director, SaaS Group' },
  { quote: 'We finally had a technical partner who could translate business priorities into an executable product roadmap.', name: 'Daniel Ruiz', role: 'Founder, Logistics Platform' },
  { quote: 'The team challenged assumptions early, which saved us from building the wrong thing expensively.', name: 'Elena Martín', role: 'Product Lead, B2B Services' },
];

const OFFICES = [
  { city: 'Madrid', type: 'HQ', specialty: 'Strategy & Engineering', lat: 40.42, lon: -3.70 },
  { city: 'Marbella', type: 'Office', specialty: 'Client Success', lat: 36.51, lon: -4.89 },
  { city: 'Dubai', type: 'Office', specialty: 'Enterprise Delivery', lat: 25.20, lon: 55.27 },
  { city: 'Malabo', type: 'Office', specialty: 'Energy Systems', lat: 3.75, lon: 8.78 },
  { city: 'Pereira', type: 'Office', specialty: 'Software Engineering', lat: 4.81, lon: -75.69 },
  { city: 'Chandigarh', type: 'Office', specialty: 'Engineering', lat: 30.73, lon: 76.78 },
  { city: 'Tlaxcala', type: 'Office', specialty: 'Product Engineering', lat: 19.31, lon: -98.24 },
  { city: 'Havana', type: 'Office', specialty: 'Engineering', lat: 23.11, lon: -82.37 },
  { city: 'Hong Kong', type: 'Office', specialty: 'Asia Operations', lat: 22.32, lon: 114.17 },
];

function cn(...parts) {
  return parts.filter(Boolean).join(' ');
}

/* ------------------------------------------------------------------ */
/*  LOGO                                                               */
/* ------------------------------------------------------------------ */

function Logo({ className = '' }) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <svg viewBox="0 0 80 56" className="h-10 w-auto shrink-0" fill="currentColor" aria-hidden="true">
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

/* ------------------------------------------------------------------ */
/*  REVEAL                                                             */
/* ------------------------------------------------------------------ */

function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hidden = {
    up: 'translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
    scale: 'scale-95',
    blur: 'translate-y-5 blur-sm',
  }[direction] || 'translate-y-8';

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)]',
        visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100 blur-0' : cn('opacity-0', hidden),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="mb-3 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
      {children}
    </p>
  );
}

function SectionIntro({ eyebrow, title, copy, align = 'center' }) {
  return (
    <div className={cn('mb-10 md:mb-14', align === 'left' ? 'max-w-2xl text-left' : 'mx-auto max-w-3xl text-center')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-[clamp(2.25rem,6vw,5.6rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[color:var(--fg)]">
        {title}
      </h2>
      {copy && (
        <p className="mx-auto mt-5 max-w-2xl text-[clamp(.95rem,1.2vw,1.08rem)] leading-[1.65] text-[color:var(--muted)]">
          {copy}
        </p>
      )}
    </div>
  );
}

function ArrowLink({ children, href = '#', accent = false }) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center gap-3 text-sm font-medium transition-transform duration-300 hover:translate-x-1',
        accent
          ? 'rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-[color:var(--accent-ink)]'
          : 'text-[color:var(--fg)] underline decoration-[color:var(--border)] underline-offset-4 hover:decoration-current'
      )}
    >
      {children}
      <span
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5',
          accent ? 'bg-[color:var(--accent-ink)] text-[color:var(--accent)]' : 'bg-[color:var(--card)] text-[color:var(--fg)]'
        )}
      >
        <Icon name="arrow" className="w-3.5" />
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

const H1_BASE_DELAY = 140;
const H1_LINE_STAGGER = 150;
const H1_LINE_DURATION = 700;

function HeroH1() {
  return (
    <h1
      id="home-hero-title"
      className="max-w-6xl text-[clamp(2.4rem,7vw,6.8rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[color:var(--fg)]"
    >
      <span className="hero-h1-line" style={{ '--wd': `${H1_BASE_DELAY}ms`, '--dur': `${H1_LINE_DURATION}ms` }}>
        <span className="hero-h1-line__inner">We build custom software that</span>
      </span>

      <span
        className="hero-h1-line"
        style={{ '--wd': `${H1_BASE_DELAY + H1_LINE_STAGGER}ms`, '--dur': `${H1_LINE_DURATION}ms` }}
      >
        <span className="hero-h1-line__inner">
          <span className="relative inline-block">
            <span className="relative z-10">ships on time</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-[0.06em] -z-0 h-[0.22em] rounded-full bg-[color:var(--accent)]/70"
            />
          </span>
          {' \u2014 '}
          <span className="inline-block bg-gradient-to-r from-[color:var(--fg)] via-[color:var(--accent)] to-[color:var(--fg)] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-[gradientShift_5s_ease_infinite]">
            or you don&apos;t pay.
          </span>
        </span>
      </span>
    </h1>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-14"
      aria-labelledby="home-hero-title"
    >
      <GlobalHeroBackground />
      <div className={cn(CONTAINER, 'relative z-10')}>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Reveal className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3" delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3.5 py-2 text-xs sm:text-sm text-[color:var(--fg)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              Custom software partner
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg)]/70 px-3.5 py-2 text-xs sm:text-sm text-[color:var(--fg)] backdrop-blur">
              <span className="tracking-[0.12em] text-[color:var(--accent)]">★★★★★</span>
              4.9/5 Google Reviews
            </span>
          </Reveal>

          <HeroH1 />

          <Reveal delay={620} className="mt-7 max-w-3xl">
            <p className="text-[clamp(1rem,1.45vw,1.2rem)] leading-[1.65] text-[color:var(--muted)]">
              15+ years. 2,000+ projects. 9 countries. Enterprise platforms, AI integration, and systems engineering for companies that outgrow spreadsheets.
            </p>
          </Reveal>

          <Reveal delay={720} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-[color:var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[color:var(--bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Free Consultation
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)] transition-transform duration-300 group-hover:rotate-[-8deg]">
                <Icon name="arrow" className="w-4" />
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-5 text-sm font-medium text-[color:var(--fg)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
            >
              See Our Work
              <Icon name="arrow" className="w-4" />
            </a>
          </Reveal>

          <Reveal delay={820} className="mt-12">
            <a href="#trust" className="group inline-flex flex-col items-center gap-2 text-xs text-[color:var(--muted)]">
              <span>Scroll to explore</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)] transition-transform duration-300 group-hover:translate-y-1">
                <Icon name="arrow" className="w-4 rotate-90" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRUST BAR                                                          */
/* ------------------------------------------------------------------ */

function TrustBar() {
  const stats = [
    ['2,000+', 'Projects Delivered'],
    ['150+', 'Experts Worldwide'],
    ['9', 'Countries with Offices'],
    ['98%', 'Satisfaction Rate'],
  ];

  return (
    <section id="trust" className="border-y border-[color:var(--border)] bg-[color:var(--card)]/80" aria-label="Company statistics">
      <div className={CONTAINER}>
        <div className="grid grid-cols-2 divide-x divide-y divide-[color:var(--border)] md:grid-cols-4 md:divide-y-0">
          {stats.map(([value, label], index) => (
            <Reveal key={label} delay={index * 70}>
              <div className="flex min-h-28 flex-col justify-center px-4 py-7 text-center sm:px-6 md:min-h-32 md:py-8">
                <strong className="text-[clamp(1.8rem,3.5vw,3rem)] font-normal leading-none tracking-[-.04em] text-[color:var(--accent)]">
                  {value}
                </strong>
                <span className="mt-2 text-xs uppercase tracking-[.12em] text-[color:var(--muted)]">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROBLEM                                                            */
/* ------------------------------------------------------------------ */

function ProblemSection() {
  const issues = [
    'Your business runs on Excel',
    'Previous developers overpromised, underdelivered',
    'Your software is slow, old, and fragile',
    "Salesforce/SAP costs more than it's worth",
  ];

  return (
    <section id="problem" className={SECTION}>
      <div className={CONTAINER}>
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-stretch">
          <Reveal direction="left" className="flex flex-col justify-center">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="max-w-xl text-[clamp(2.4rem,6vw,5.6rem)] font-normal leading-[.94] tracking-[-.05em] text-[color:var(--fg)]">
              Sound familiar?
            </h2>
            <p className="mt-6 max-w-xl text-[clamp(1rem,1.2vw,1.08rem)] leading-[1.65] text-[color:var(--muted)]">
              You don&apos;t need another vendor. You need a technology partner who understands the business behind the software.
            </p>
            <div className="mt-7">
              <ArrowLink href="#difference">See how we&apos;re different</ArrowLink>
            </div>
          </Reveal>

          <Reveal direction="scale" delay={110}>
            <div className="h-full rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8">
              <ul className="space-y-4">
                {issues.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 text-[clamp(.95rem,1.15vw,1.05rem)] leading-[1.5] text-[color:var(--fg)]"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)]">
                      <Icon name="check" className="w-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[color:var(--border)] pt-7 sm:mt-10 sm:pt-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-[clamp(3.8rem,10vw,7rem)] font-normal leading-none tracking-[-.06em] text-[color:var(--fg)]">
                      68%
                    </div>
                    <p className="mt-2 text-sm leading-[1.55] text-[color:var(--muted)]">of software projects fail.</p>
                  </div>
                  <strong className="max-w-[11ch] text-xl font-normal leading-[1.05] tracking-[-.03em] text-[color:var(--fg)] sm:text-2xl">
                    Not on our watch.
                  </strong>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICES                                                           */
/* ------------------------------------------------------------------ */

function ServiceCard({ item, index }) {
  return (
    <Reveal delay={index * 70}>
      <a
        href="#contact"
        className="group relative flex min-h-60 flex-col overflow-hidden rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[color:var(--c)] sm:p-7"
        style={{ '--c': item.accent }}
      >
        <span className="pointer-events-none absolute right-[-15%] top-[-25%] h-40 w-40 rounded-full bg-[color:var(--c)]/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
        <div className="relative flex items-center justify-between">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-[color:var(--accent-ink)]"
            style={{ background: item.accent }}
          >
            <Icon name={item.icon} className="w-5" />
          </span>
          <span className="text-xs font-medium tracking-[.15em] text-[color:var(--muted)]">0{index + 1}</span>
        </div>
        <div className="relative mt-auto pt-10">
          <h3 className="text-xl font-normal tracking-[-.025em] text-[color:var(--fg)] sm:text-2xl">{item.title}</h3>
          <p className="mt-2 max-w-[26ch] text-sm leading-[1.55] text-[color:var(--muted)]">{item.sub}</p>
        </div>
        <span className="relative mt-6 flex h-10 w-10 items-center justify-center self-end rounded-full bg-[color:var(--bg)] text-[color:var(--fg)] transition-transform duration-300 group-hover:translate-x-1">
          <Icon name="arrow" className="w-4" />
        </span>
      </a>
    </Reveal>
  );
}

function ServicesSection() {
  return (
    <section id="services" className={SECTION}>
      <div className={CONTAINER}>
        <SectionIntro
          eyebrow="Capabilities"
          title="What do you need?"
          copy="Pick the problem. We bring the engineering, architecture, and delivery discipline around it."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item, index) => (
            <ServiceCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  DIFFERENCE                                                         */
/* ------------------------------------------------------------------ */

function DifferenceSection() {
  const them = ['Code first, think later', 'No documentation', 'Nobody owns decisions', 'Late delivery + more money'];
  const us = ['Architecture first', 'TCG-SAF™ framework', 'RACI governance', 'On-time or 100% refund'];

  return (
    <section id="difference" className={SECTION}>
      <div className={CONTAINER}>
        <SectionIntro eyebrow="The differentiator" title="Why 68% of software projects fail — and why ours don&apos;t." />

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8">
              <div className="mb-7 flex items-center justify-between">
                <span className="text-xs tracking-[.18em] text-[color:var(--muted)]">01</span>
                <span className="text-xs font-medium uppercase tracking-[.18em] text-[color:var(--muted)]">Them</span>
              </div>
              <ul className="space-y-4">
                {them.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)]">
                      <Icon name="x" className="w-3.5" />
                    </span>
                    <span className="text-[clamp(.95rem,1.1vw,1.05rem)] leading-[1.5] text-[color:var(--fg)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-[color:var(--fg)] p-6 text-[color:var(--bg)] sm:p-8">
              <span className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[color:var(--accent)]/30 blur-3xl" />
              <div className="relative mb-7 flex items-center justify-between">
                <span className="text-xs tracking-[.18em] opacity-60">02</span>
                <span className="text-xs font-medium uppercase tracking-[.18em] opacity-80">Us</span>
              </div>
              <ul className="relative space-y-4">
                {us.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)]">
                      <Icon name="check" className="w-3.5" />
                    </span>
                    <span className="text-[clamp(.95rem,1.1vw,1.05rem)] leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 border-t border-white/15 pt-6 text-[clamp(2rem,4vw,3rem)] font-normal leading-none tracking-[-.04em]">
                TCG-SAF™
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-7 flex justify-center">
          <ArrowLink href="#methodology">Explore our methodology</ArrowLink>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SCROLL STACK — engagement process, cards pile up as you scroll     */
/*  NOTE: cards are shadow-free — only a border defines them.          */
/* ------------------------------------------------------------------ */

const PROCESS_STEPS = [
  {
    number: '01',
    tag: 'Discover',
    title: 'We learn how the business actually runs',
    copy: 'Before anyone writes code, we map the workflows, the spreadsheets, and the workarounds people invented to survive them. You get a written understanding of the problem — not a slide deck.',
    points: ['Stakeholder interviews', 'Process and data mapping', 'Success metrics agreed in writing'],
    meta: '1–2 weeks',
    metaLabel: 'Typical duration',
  },
  {
    number: '02',
    tag: 'Architect',
    title: 'The technical shape gets decided first',
    copy: 'Data model, integrations, deployment, security, and the seams where things will change. Getting this right is what stops a project from becoming expensive six months later.',
    points: ['System and data architecture', 'Integration and API contracts', 'Risk register and rollback plan'],
    meta: '2–3 weeks',
    metaLabel: 'Typical duration',
  },
  {
    number: '03',
    tag: 'Build',
    title: 'Short cycles, visible progress',
    copy: 'Work ships in reviewable increments with a demo at the end of each one. You always know what is done, what is next, and what is blocked — without chasing anyone for a status update.',
    points: ['Two-week delivery cycles', 'Demo at the end of every cycle', 'Named owner for every decision'],
    meta: '6–16 weeks',
    metaLabel: 'Typical duration',
  },
  {
    number: '04',
    tag: 'Harden',
    title: 'Tested, documented, ready for real users',
    copy: 'Automated tests, load testing, security review, and migration planning. Handover includes documentation your own team can actually use — not a folder nobody ever opens.',
    points: ['Automated test coverage', 'Load and security review', 'Runbooks and team training'],
    meta: '2–4 weeks',
    metaLabel: 'Typical duration',
  },
  {
    number: '05',
    tag: 'Operate',
    title: 'We stay after launch',
    copy: 'Monitoring, incident response, and a roadmap that keeps evolving with the business. Most of our clients are still with us years after the first release.',
    points: ['Monitoring and SLAs', 'Continuous improvement', 'Quarterly roadmap reviews'],
    meta: 'Ongoing',
    metaLabel: 'Engagement',
  },
];

const STACK_TOP_BASE = 88;    // px — where first card sticks
const STACK_OFFSET_STEP = 18; // px — visible sliver of each covered card

function ProcessStackSection() {
  return (
    <section
      id="process"
      className={SECTION}
      style={{ overflow: 'visible' }}
    >
      <div className={CONTAINER} style={{ overflow: 'visible' }}>
        {/* Header */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <Eyebrow>The process</Eyebrow>
            <h2 className="max-w-2xl text-[clamp(2.25rem,5.5vw,5.2rem)] font-normal leading-[.95] tracking-[-.045em] text-[color:var(--fg)]">
              How an engagement actually runs
            </h2>
          </div>
          <p className="max-w-md text-[clamp(.95rem,1.2vw,1.08rem)] leading-[1.65] text-[color:var(--muted)] lg:pb-2">
            Five phases. Named owners. A written definition of done for each one — so nobody is
            guessing what happens next.
          </p>
        </div>

        {/* Stack */}
        <div style={{ position: 'relative', overflow: 'visible' }}>
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              style={{
                position: 'sticky',
                top: `${STACK_TOP_BASE + index * STACK_OFFSET_STEP}px`,
                zIndex: index + 1,
                paddingBottom: '1.25rem',
                overflow: 'visible',
              }}
            >
              {/* Shadow removed — flat card with a thin border only */}
              <article className="relative flex min-h-[22rem] flex-col overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] lg:h-[clamp(25rem,54vh,32rem)]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-[color:var(--accent)]/20 blur-3xl"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/70 to-transparent"
                />

                <div className="relative flex flex-1 flex-col p-6 sm:p-8 lg:p-11">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-sm font-medium text-[color:var(--accent-ink)]">
                        {step.number}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[.2em] text-[color:var(--muted)]">
                        {step.tag}
                      </span>
                    </div>

                    <span className="hidden shrink-0 rounded-full border border-[color:var(--border)] px-3.5 py-1.5 text-xs text-[color:var(--muted)] sm:inline-block">
                      {step.metaLabel}: {step.meta}
                    </span>
                  </div>

                  <h3 className="mt-7 max-w-3xl text-[clamp(1.5rem,3.2vw,2.75rem)] font-normal leading-[1.06] tracking-[-.04em] text-[color:var(--fg)]">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-[clamp(.95rem,1.15vw,1.05rem)] leading-[1.65] text-[color:var(--muted)]">
                    {step.copy}
                  </p>

                  <ul className="mt-auto grid gap-2.5 pt-8 sm:grid-cols-3">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm leading-[1.4] text-[color:var(--fg)]">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/20 text-[color:var(--accent)]">
                          <Icon name="check" className="w-3" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CASE STUDIES                                                       */
/* ------------------------------------------------------------------ */

function CaseStudyCard({ item, index }) {
  return (
    <Reveal delay={index * 90}>
      <article className="group flex min-h-80 flex-col overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-7">
        <div className="flex items-center justify-between text-xs tracking-[.18em] text-[color:var(--muted)]">
          <span>{item.number}</span>
          <Icon name="arrow" className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        <div className="mt-12">
          <div className="text-[clamp(2.25rem,5vw,4.1rem)] font-normal leading-[.92] tracking-[-.05em] text-[color:var(--fg)]">
            {item.result}
          </div>
          <div className="mt-3 text-sm font-medium uppercase tracking-[.14em] text-[color:var(--accent)]">
            {item.detail}
          </div>
        </div>

        <div className="mt-auto border-t border-[color:var(--border)] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-normal tracking-[-.03em] text-[color:var(--fg)]">{item.name}</h3>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{item.meta}</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--fg)] underline underline-offset-4">
              Read case study
              <Icon name="arrow" className="w-4" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CaseStudiesSection() {
  return (
    <section id="work" className={SECTION}>
      <div className={CONTAINER}>
        <SectionIntro eyebrow="Selected work" title="Results that speak for themselves" />
        <div className="grid gap-4 lg:grid-cols-3">
          {CASE_STUDIES.map((item, index) => (
            <CaseStudyCard key={item.name} item={item} index={index} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ArrowLink href="#contact" accent>
            View all projects
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                       */
/* ------------------------------------------------------------------ */

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % TESTIMONIALS.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className={SECTION}>
      <div className={CONTAINER}>
        <SectionIntro eyebrow="Social proof" title="What clients remember" />

        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-[color:var(--fg)] p-7 text-[color:var(--bg)] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute right-[-5%] top-[-25%] h-64 w-64 rounded-full bg-[color:var(--accent)]/30 blur-3xl" />
            <span className="relative text-6xl leading-none text-[color:var(--accent)]">“</span>

            <blockquote className="relative mt-2 max-w-4xl text-[clamp(1.8rem,4.2vw,4rem)] font-normal leading-[1.05] tracking-[-.035em]">
              {current.quote}
            </blockquote>

            <div className="relative mt-10 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col">
                <strong className="text-base font-medium">{current.name}</strong>
                <span className="mt-1 text-sm opacity-60">{current.role}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                  aria-label="Previous testimonial"
                >
                  <Icon name="arrow" className="w-4 rotate-180" />
                </button>
                <span className="min-w-20 text-center text-xs tracking-[.16em] opacity-60">
                  {String(active + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={() => setActive((active + 1) % TESTIMONIALS.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                  aria-label="Next testimonial"
                >
                  <Icon name="arrow" className="w-4" />
                </button>
              </div>
            </div>

            <div className="relative mt-6 flex gap-2">
              {TESTIMONIALS.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    active === index ? 'w-10 bg-[color:var(--accent)]' : 'w-2 bg-white/25'
                  )}
                  onClick={() => setActive(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GUARANTEES                                                         */
/* ------------------------------------------------------------------ */

function GuaranteesSection() {
  const cards = [
    { icon: 'storm', title: 'Storm Guarantee', text: "Don't like it? 100% refund. No questions asked." },
    { icon: 'hurricane', title: 'Hurricane Warranty', text: 'Late delivery? 100% refund. Deadlines are sacred.' },
  ];

  return (
    <section id="guarantees" className="border-y border-[color:var(--border)] bg-[color:var(--card)] py-[clamp(3.5rem,7vw,6rem)]">
      <div className={CONTAINER}>
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <div className="h-full rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--bg)] p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-[color:var(--accent-ink)]">
                  <Icon name={card.icon} className="w-6" />
                </span>
                <Eyebrow>Risk reversal</Eyebrow>
                <h3 className="mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-normal leading-none tracking-[-.04em] text-[color:var(--fg)]">
                  {card.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-[1.6] text-[color:var(--muted)]">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-[color:var(--muted)]">Both backed by written contract.</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WORLD MAP                                                          */
/* ------------------------------------------------------------------ */

function projectPoint(lat, lon) {
  const x = ((lon + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

function WorldMap({ selected, onSelect }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-3 sm:p-5">
      <svg
        className="block h-auto w-full text-[color:var(--fg)]"
        viewBox="0 0 1000 500"
        role="img"
        aria-label="Schematic world map showing nine TCG offices"
      >
        <defs>
          <pattern id="mapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M50 0H0V50" fill="none" stroke="currentColor" strokeOpacity=".1" />
          </pattern>
          <filter id="mapGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1000" height="500" fill="url(#mapGrid)" opacity=".85" />
        <path
          d="M80 108l55-45 94 15 67 42 5 44-40 23-23 54-55-17-13-42-48-31zm184 167l22 13 11 44-28 47-25-11 6-46zm95-82l49-20 19 17-15 24-41 11zm151-66l82-38 78 7 57 34-20 34-55 4-16 36-51 8-25-31-50 4zm84 93l70-9 41 26-22 34-62 6-43-19zm181-71l54-14 55 23 5 39-42 27-53-13-32-28zm69 96l44 14 20 29-39 25-42-12zm53-102l50-14 43 29-10 30-51 13-41-29z"
          fill="currentColor"
          fillOpacity=".1"
        />
        <path
          d="M536 321l38 27 26 57-20 48-27-17-13-60-30-29zm-350-6l30 34 12 43-31 26-23-34zm-92-31l31 10 24 33-17 30-38-14-20-25z"
          fill="currentColor"
          fillOpacity=".045"
        />

        {OFFICES.map((office) => {
          const point = projectPoint(office.lat, office.lon);
          const active = selected.city === office.city;

          return (
            <g
              key={office.city}
              onClick={() => onSelect(office)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onSelect(office);
              }}
              tabIndex="0"
              role="button"
              aria-label={`${office.city}, ${office.type}, ${office.specialty}`}
              style={{ transform: `translate(${point.x * 10}px, ${point.y * 5}px)` }}
              className="cursor-pointer"
            >
              <circle r={active ? 16 : 12} fill="var(--accent)" opacity=".18" />
              <circle r={active ? 6 : 5} fill="var(--accent)" filter="url(#mapGlow)" />
            </g>
          );
        })}
      </svg>

      <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
        {OFFICES.map((office) => (
          <button
            key={office.city}
            type="button"
            onClick={() => onSelect(office)}
            className={cn(
              'rounded-full border px-3 py-1.5 text-xs backdrop-blur transition-colors',
              selected.city === office.city
                ? 'border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--accent-ink)]'
                : 'border-[color:var(--border)] bg-[color:var(--bg)]/80 text-[color:var(--fg)]'
            )}
          >
            {office.city}
          </button>
        ))}
      </div>

      <div className="absolute left-5 top-5 max-w-[15rem] rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/85 p-4 backdrop-blur">
        <span className="block text-[10px] font-medium uppercase tracking-[.18em] text-[color:var(--accent)]">
          {selected.type}
        </span>
        <strong className="mt-1 block text-lg font-normal tracking-[-.02em] text-[color:var(--fg)]">
          {selected.city}
        </strong>
        <span className="mt-1 block text-sm leading-[1.4] text-[color:var(--muted)]">{selected.specialty}</span>
      </div>
    </div>
  );
}

function PresenceSection() {
  const [selected, setSelected] = useState(OFFICES[0]);

  return (
    <section id="presence" className={SECTION}>
      <div className={CONTAINER}>
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Global presence</Eyebrow>
            <h2 className="text-[clamp(2.4rem,6vw,5.6rem)] font-normal leading-[.94] tracking-[-.05em] text-[color:var(--fg)]">
              Local teams.
              <br />
              <span className="text-[color:var(--accent)]">Global reach.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="tel:+34660014818" className="text-sm font-medium text-[color:var(--fg)] underline underline-offset-4">
              +34 660 014 818
            </a>
            <a
              href="https://wa.me/34660014818"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[color:var(--fg)] px-5 py-2.5 text-sm font-medium text-[color:var(--bg)]"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <Reveal direction="scale">
          <WorldMap selected={selected} onSelect={setSelected} />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  METHODOLOGY                                                        */
/* ------------------------------------------------------------------ */

function MethodologySection() {
  const points = [
    ['Architecture first', 'Define the technical shape before the codebase compounds risk.'],
    ['RACI governance', 'Make decisions, owners, and escalation paths explicit.'],
    ['Proof before scale', 'Validate the workflow before turning it into a large programme.'],
  ];

  return (
    <section id="methodology" className="bg-[color:var(--fg)] py-[clamp(4rem,8vw,7rem)] text-[color:var(--bg)]">
      <div className={CONTAINER}>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[.18em] text-[color:var(--accent)]">
              TCG-SAF™ methodology
            </p>
            <h2 className="max-w-xl text-[clamp(2.3rem,5.5vw,5rem)] font-normal leading-[.94] tracking-[-.05em]">
              Engineering discipline without the corporate fog.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-[1.65] opacity-65">
              A concise delivery framework built around architecture, accountability, proof, and measurable outcomes.
            </p>
          </Reveal>

          <div className="space-y-3">
            {points.map(([title, text], index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="group flex gap-5 rounded-[1.5rem] border border-white/12 bg-white/5 p-5 transition-colors hover:bg-white/10 sm:gap-7 sm:p-7">
                  <span className="pt-1 text-xs tracking-[.18em] text-[color:var(--accent)]">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-normal tracking-[-.02em] sm:text-2xl">{title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-[1.6] opacity-60 sm:text-base">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FINAL CTA                                                          */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-[clamp(4rem,8vw,7rem)]">
      <div className={CONTAINER}>
        <div className="overflow-hidden rounded-[2.2rem] border border-[color:var(--border)] bg-[color:var(--card)]">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
              <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--accent)]/25 blur-3xl" />
              <div className="relative">
                <Eyebrow>Start a conversation</Eyebrow>
                <h2 className="text-[clamp(2.5rem,6vw,5.6rem)] font-normal leading-[.92] tracking-[-.05em] text-[color:var(--fg)]">
                  Ready when you are.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-[1.65] text-[color:var(--muted)]">
                  2 hours. No obligation. No sales pitch. Just answers.
                </p>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="border-t border-[color:var(--border)] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14"
            >
              <div className="space-y-5">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[.14em] text-[color:var(--muted)]">
                    Email
                  </span>
                  <input
                    className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3.5 text-sm text-[color:var(--fg)] outline-none transition-[border-color,box-shadow] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[.14em] text-[color:var(--muted)]">
                    Phone
                  </span>
                  <input
                    className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3.5 text-sm text-[color:var(--fg)] outline-none transition-[border-color,box-shadow] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20"
                    type="tel"
                    name="phone"
                    placeholder="+34 600 000 000"
                    required
                  />
                </label>

                <button
                  className="group mt-2 flex w-full items-center justify-between rounded-full bg-[color:var(--fg)] py-1.5 pl-5 pr-1.5 text-left text-sm font-medium text-[color:var(--bg)] transition-transform duration-300 hover:-translate-y-0.5"
                  type="submit"
                >
                  <span>{submitted ? 'Request received' : 'Book My Free Consultation'}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-ink)]">
                    <Icon name={submitted ? 'check' : 'arrow'} className="w-4" />
                  </span>
                </button>

                {submitted && (
                  <p className="rounded-2xl bg-[color:var(--accent)]/10 px-4 py-3 text-sm leading-[1.55] text-[color:var(--fg)]">
                    Thanks — we&apos;ll use the details to coordinate the consultation.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HOME PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <div style={{ overflowX: 'clip' }}>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ServicesSection />
      <DifferenceSection />
      <ProcessStackSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <GuaranteesSection />
      <PresenceSection />
      <MethodologySection />
      <FinalCTA />

      <style>{`
        /* -----------------------------------------------------------
           BRAND THEME — colors from The Cloud Group logo
           ----------------------------------------------------------- */
        :root {
          --accent: #E5B32B;
          --accent-2: #C99A1A;
          --accent-ink: #1c1608;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        /* H1 per-line mask reveal */
        .hero-h1-line {
          display: block;
          overflow: hidden;
          padding-bottom: 0.32em;
          margin-bottom: -0.22em;
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

        /* -----------------------------------------------------------
           SCROLL STACK — safety nets
           ----------------------------------------------------------- */

        /* Ensure nothing inside the process section clips the sticky cards.
           Common culprits: a parent with overflow:hidden for rounded corners,
           or a global wrapper with overflow-x:hidden. We override locally. */
        #process,
        #process > *,
        #process div {
          overflow: visible;
        }

        /* Remove any box-shadow on scroll-stack cards */
        #process article {
          box-shadow: none !important;
        }

        /* Prevent ancestor scroll containers from breaking sticky */
        html, body {
          overflow-x: clip;
        }
      `}</style>
    </div>
  );
}