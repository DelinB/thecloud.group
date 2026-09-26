// import React, { useState } from 'react';
// import { CONTAINER, SECTION } from '../components/shared/constants';
// import { Icon } from '../components/shared/Icon';
// import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

// const SELECTOR_PATHS = [
//   {
//     accent: '#ef4444',
//     soft: 'rgba(239,68,68,.10)',
//     icon: 'x',
//     label: 'MY PROJECT IS STUCK',
//     copy: 'Started with freelancer/agency, PoC never reached production',
//     cta: 'Get Rescue Audit',
//   },
//   {
//     accent: '#f59e0b',
//     soft: 'rgba(245,158,11,.11)',
//     icon: 'clock',
//     label: 'I PAID FOR SLIDES, NOT SOFTWARE',
//     copy: 'Big Four firm delivered deck, no code',
//     cta: 'Get Second Opinion Audit',
//   },
//   {
//     accent: '#22c55e',
//     soft: 'rgba(34,197,94,.11)',
//     icon: 'compass',
//     label: 'I NEED AN INDEPENDENT VOICE',
//     copy: 'Internal team can’t decide between options',
//     cta: 'Get Technical Advisory',
//   },
// ];

// const SERVICES = [
//   ['Technical Software Audit', '10-day assessment', 'search'],
//   ['AI Audit', 'Model, data, ROI analysis', 'bot'],
//   ['Project Rescue', 'Stabilize, Decide, Execute', 'zap'],
//   ['Digital Strategy', 'Roadmap + TCO analysis', 'compass'],
//   ['Vendor Selection', 'RFP + evaluation + negotiation', 'users'],
//   ['External CTO', 'Fractional leadership', 'shield'],
// ];

// const INDUSTRIES = [
//   'Banking',
//   'Public Sector',
//   'Industry',
//   'Pharma',
//   'Entertainment',
//   'Government',
//   'Retail',
// ];

// const COMPARE = [
//   ['Timeline', '6+ months', '10 days'],
//   ['Deliverable', 'Slides only', 'Report + code'],
//   ['Staffing', 'Junior staff', 'Real seniors'],
//   ['Independence', 'Vendor bias', '0 partnerships'],
//   ['Execution', 'Outsourced execution', 'In-house execution'],
// ];

// const FAQS = [
//   {
//     q: 'How much does an audit cost?',
//     a: 'The audit is offered at a fixed price. The exact fee depends on the scope of the system, codebase, integrations, and decision you need to make.',
//   },
//   {
//     q: 'What’s included in the report?',
//     a: 'You receive a 17-dimension diagnosis, an 8–15 page written report, findings, risks, recommended actions, and a practical plan for what happens next.',
//   },
//   {
//     q: 'How are you different from Big Four?',
//     a: 'The stated model is a focused 10-day engagement with real senior involvement, a written report, code-level perspective, zero vendor partnerships, and in-house execution.',
//   },
//   {
//     q: 'What if you say my project can’t be saved?',
//     a: 'The purpose of the audit is to make the situation clear. If the evidence points away from rescue, the written diagnosis explains why and gives you a defensible next-step recommendation.',
//   },
//   {
//     q: 'Do you have vendor partnerships?',
//     a: 'The positioning is 0 vendor partnerships, so recommendations are intended to be independent of software-vendor incentives.',
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

// function Badge({ children, accent = false }) {
//   return (
//     <span
//       className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] ${
//         accent
//           ? 'border-transparent bg-[var(--accent)] text-[var(--accent-ink)]'
//           : 'border-[var(--border)] bg-[color:var(--card)/.72] text-[var(--fg)]'
//       }`}
//     >
//       {children}
//     </span>
//   );
// }

// function ArrowLink({ href = '#', children, dark = false }) {
//   return (
//     <a
//       href={href}
//       className={`group inline-flex items-center gap-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
//         dark ? 'text-[var(--bg)]' : 'text-[var(--fg)]'
//       }`}
//     >
//       <span className="underline decoration-[color:var(--border)] underline-offset-4">
//         {children}
//       </span>
//       <span
//         className={`flex h-8 w-8 items-center justify-center rounded-full ${
//           dark
//             ? 'bg-[var(--accent)] text-[var(--accent-ink)]'
//             : 'bg-[color:var(--card)]'
//         }`}
//       >
//         <Icon name="arrow" className="w-4 transition-transform group-hover:translate-x-0.5" />
//       </span>
//     </a>
//   );
// }

// function GuaranteeStrip() {
//   return (
//     <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
//       <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[color:var(--card)] px-4 py-3 text-left">
//         <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-ink)]">
//           <Icon name="storm" className="w-5" />
//         </span>
//         <div>
//           <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
//             Storm Guarantee
//           </p>
//           <p className="mt-1 text-sm font-medium">Don’t like the report? Refund.</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[color:var(--card)] px-4 py-3 text-left">
//         <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--fg)] text-[var(--bg)]">
//           <Icon name="hurricane" className="w-5" />
//         </span>
//         <div>
//           <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
//             Hurricane Warranty
//           </p>
//           <p className="mt-1 text-sm font-medium">Late delivery? Refund.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Hero() {
//   return (
//     <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-16">
//       <GlobalHeroBackground />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg)] via-[color:var(--bg)/.72] to-transparent"
//       />

//       <div className={`${CONTAINER} relative z-10`}>
//         <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
//           <Reveal>
//             <div className="mb-5 flex flex-wrap justify-center gap-2">
//               <Badge accent>
//                 <Icon name="shield" className="w-3.5" />
//                 Senior Boutique
//               </Badge>
//               <Badge>
//                 <Icon name="check" className="w-3.5" />
//                 100% Independent
//               </Badge>
//             </div>
//           </Reveal>

//           <Reveal delay={80}>
//             <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//               Tech Consulting
//             </p>
//             <h1 className="max-w-[13ch] text-balance text-[clamp(2.6rem,7vw,6.4rem)] font-normal leading-[.92] tracking-[-.055em]">
//               Your project is stuck. We’ll tell you why in{' '}
//               <span className="bg-gradient-to-r from-[var(--fg)] via-[var(--accent)] to-[var(--fg)] bg-clip-text text-transparent">
//                 10 days. In writing.
//               </span>
//             </h1>
//           </Reveal>

//           <Reveal delay={160} className="mt-6 max-w-2xl">
//             <p className="text-[clamp(.95rem,1.1vw,1.08rem)] leading-[1.65] text-[var(--muted)]">
//               Audit → Written diagnosis → Action plan. Fixed price. No vendor bias. No slides.
//               Code from the same team that diagnoses.
//             </p>
//           </Reveal>

//           <Reveal delay={260} className="mt-8 flex flex-wrap justify-center gap-3">
//             <a
//               href="#audit"
//               className="group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)] transition-transform duration-300 hover:-translate-y-0.5"
//             >
//               Get Project Audit
//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                 <Icon name="arrow" className="w-4" />
//               </span>
//             </a>

//             <a
//               href="#approach"
//               className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[color:var(--bg)/.5] px-5 text-sm hover:bg-[var(--card)]"
//             >
//               See Our Approach
//               <Icon name="arrow" className="w-4" />
//             </a>
//           </Reveal>

//           <Reveal delay={360} className="mt-10">
//             <GuaranteeStrip />
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TrustSection() {
//   const stats = [
//     ['+90', 'rescued projects'],
//     ['10-day', 'audits'],
//     ['0', 'vendor partnerships'],
//   ];

//   return (
//     <section className={`${SECTION} border-y border-[var(--border)] bg-[color:var(--card)]`}>
//       <div className={CONTAINER}>
//         <div className="grid grid-cols-1 sm:grid-cols-3">
//           {stats.map(([value, label], index) => (
//             <Reveal key={label} delay={index * 70}>
//               <div
//                 className={`px-5 py-5 text-center sm:px-8 sm:py-3 ${
//                   index !== 0 ? 'border-t border-[var(--border)] sm:border-l sm:border-t-0' : ''
//                 }`}
//               >
//                 <strong className="block text-[clamp(2rem,4vw,3.4rem)] font-normal leading-none tracking-[-.045em]">
//                   {value}
//                 </strong>
//                 <span className="mt-2 block text-xs uppercase tracking-[.12em] text-[var(--muted)]">
//                   {label}
//                 </span>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProblemSelector() {
//   return (
//     <section id="situations" className={SECTION}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//               Problem selector
//             </p>
//             <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               Which situation is yours?
//             </h2>
//           </div>
//         </Reveal>

//         <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-3">
//           {SELECTOR_PATHS.map((item, index) => (
//             <Reveal key={item.label} delay={index * 90}>
//               <a
//                 href="#audit"
//                 className="group block h-full rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1"
//                 style={{ '--path': item.accent }}
//               >
//                 <div className="flex items-center justify-between">
//                   <span
//                     className="flex h-11 w-11 items-center justify-center rounded-2xl"
//                     style={{ color: item.accent, background: item.soft }}
//                   >
//                     <Icon name={item.icon} className="w-5" />
//                   </span>
//                   <span
//                     className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.12em]"
//                     style={{ color: item.accent, background: item.soft }}
//                   >
//                     0{index + 1}
//                   </span>
//                 </div>

//                 <h3 className="mt-10 text-[clamp(1.15rem,1.9vw,1.5rem)] leading-[1.12] tracking-[-.025em]">
//                   {item.label}
//                 </h3>

//                 <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{item.copy}</p>

//                 <div
//                   className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline decoration-[color:var(--border)] underline-offset-4"
//                   style={{ color: item.accent }}
//                 >
//                   {item.cta}
//                   <Icon name="arrow" className="w-4" />
//                 </div>
//               </a>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ServicesSection() {
//   return (
//     <section id="services" className={SECTION}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//               Services
//             </p>
//             <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               How we help
//             </h2>
//           </div>
//         </Reveal>

//         <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//           {SERVICES.map(([title, copy, icon], index) => (
//             <Reveal key={title} delay={index * 65}>
//               <a
//                 href="#audit"
//                 className="group block h-full rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--fg)/.22]"
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="text-[11px] font-semibold uppercase tracking-[.15em] text-[var(--muted)]">
//                     0{index + 1}
//                   </span>
//                   <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--fg)] text-[var(--bg)]">
//                     <Icon name={icon} className="w-5" />
//                   </span>
//                 </div>

//                 <h3 className="mt-10 text-xl leading-[1.1] tracking-[-.025em]">{title}</h3>
//                 <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p>

//                 <span className="mt-7 flex items-center gap-2 text-sm font-medium">
//                   Explore
//                   <Icon name="arrow" className="w-4 transition-transform group-hover:translate-x-1" />
//                 </span>
//               </a>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ComparisonSection() {
//   return (
//     <section id="approach" className={`${SECTION} bg-[color:var(--card)]`}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//               The differentiator
//             </p>
//             <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               Why we&apos;re different
//             </h2>
//           </div>
//         </Reveal>

//         <Reveal delay={100} className="mx-auto mt-10 max-w-5xl">
//           <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
//             <div className="grid grid-cols-2">
//               <div className="border-r border-[var(--border)] bg-[var(--bg)] px-5 py-5 sm:px-8">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[11px] font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
//                     Big Four
//                   </span>
//                   <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[9px] uppercase tracking-[.1em] text-[var(--muted)]">
//                     Typical model
//                   </span>
//                 </div>
//               </div>
//               <div className="bg-[var(--fg)] px-5 py-5 text-[var(--bg)] sm:px-8">
//                 <div className="flex items-center justify-between gap-3">
//                   <span className="text-[11px] font-semibold uppercase tracking-[.16em]">TCG</span>
//                   <span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.1em] text-[var(--accent-ink)]">
//                     Independent
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {COMPARE.map(([factor, them, us]) => (
//               <div key={factor} className="grid grid-cols-2 border-t border-[var(--border)]">
//                 <div className="border-r border-[var(--border)] px-5 py-5 sm:px-8">
//                   <span className="block text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
//                     {factor}
//                   </span>
//                   <p className="mt-1 text-sm font-medium sm:text-base">{them}</p>
//                 </div>
//                 <div className="bg-[var(--fg)] px-5 py-5 text-[var(--bg)] sm:px-8">
//                   <span className="block text-[10px] font-semibold uppercase tracking-[.12em] text-[color:var(--bg)/.55]">
//                     TCG
//                   </span>
//                   <p className="mt-1 text-sm font-medium sm:text-base">{us}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Reveal>

//         <Reveal delay={160} className="mt-8">
//           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//             <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                   <Icon name="storm" className="w-4" />
//                 </span>
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-[.1em]">Storm Guarantee</p>
//                   <p className="mt-1 text-sm text-[var(--muted)]">Don’t like the report = refund.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[var(--border)] bg-[var(--fg)] p-5 text-[var(--bg)]">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                   <Icon name="hurricane" className="w-4" />
//                 </span>
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-[.1em]">Hurricane Warranty</p>
//                   <p className="mt-1 text-sm text-[color:var(--bg)/.68]">Late delivery = refund.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function ProcessSection() {
//   const steps = [
//     ['Day 0', '1-hour free consult'],
//     ['Day 1–3', 'Immersion'],
//     ['Day 4–7', 'Analysis'],
//     ['Day 8–10', 'Report + plan'],
//   ];

//   return (
//     <section id="process" className={SECTION}>
//       <div className={CONTAINER}>
//         <Reveal>
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//               Process timeline
//             </p>
//             <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
//               From stuck to unstuck
//             </h2>
//           </div>
//         </Reveal>

//         <div className="relative mt-14">
//           <div className="absolute left-0 right-0 top-7 hidden h-px bg-[var(--border)] lg:block" />

//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4">
//             {steps.map(([time, title], index) => (
//               <Reveal key={time} delay={index * 80}>
//                 <div className="relative flex gap-4 lg:flex-col">
//                   <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-xs font-semibold">
//                     {String(index + 1).padStart(2, '0')}
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
//                       {time}
//                     </p>
//                     <h3 className="mt-2 text-xl leading-tight tracking-[-.02em]">{title}</h3>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>

//         <Reveal delay={160} className="mt-14">
//           <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-[color:var(--card)] px-6 py-8 text-center">
//             <p className="text-[clamp(1.3rem,2.5vw,2.1rem)] tracking-[-.03em]">
//               8–15 page PDF.
//               <span className="mx-2 text-[var(--muted)]">Defensible.</span>
//               <strong>Signed.</strong>
//             </p>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// function IndustriesSection() {
//   return (
//     <section id="industries" className={`${SECTION} bg-[color:var(--card)]`}>
//       <div className={CONTAINER}>
//         <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
//           <Reveal>
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//               Industries served
//             </p>
//             <h2 className="max-w-[10ch] text-[clamp(2.2rem,5.5vw,4.8rem)] leading-[.95] tracking-[-.05em]">
//               Where we&apos;ve worked
//             </h2>
//           </Reveal>

//           <Reveal delay={100}>
//             <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-[var(--border)] sm:grid-cols-4">
//               {INDUSTRIES.map((industry, index) => (
//                 <div
//                   key={industry}
//                   className="group flex min-h-[95px] items-end border-b border-r border-[var(--border)] p-5 sm:min-h-[120px]"
//                 >
//                   <div>
//                     <span className="mb-2 block text-[10px] font-medium uppercase tracking-[.14em] text-[var(--muted)]">
//                       0{index + 1}
//                     </span>
//                     <span className="text-base font-medium transition-transform duration-300 group-hover:translate-x-1">
//                       {industry}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Reveal>
//         </div>

//         <div className="mt-8 flex justify-center lg:justify-end">
//           <ArrowLink href="#audit">See industry case studies</ArrowLink>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FinalAuditSection() {
//   const [open, setOpen] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <section id="audit" className="relative overflow-hidden py-20 sm:py-28">
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_36%),linear-gradient(180deg,var(--card),var(--bg))]"
//       />

//       <div className={`${CONTAINER} relative`}>
//         <div className="mx-auto max-w-6xl">
//           <Reveal>
//             <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
//               <div>
//                 <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//                   Final CTA
//                 </p>
//                 <h2 className="max-w-[10ch] text-[clamp(2.3rem,5vw,4.8rem)] leading-[.95] tracking-[-.05em]">
//                   Get your project audit
//                 </h2>
//                 <p className="mt-5 max-w-lg text-sm leading-6 text-[var(--muted)]">
//                   One focused engagement to replace uncertainty with a written diagnosis and a defensible action plan.
//                 </p>

//                 <div className="mt-8 space-y-3">
//                   {[
//                     ['17-dimension diagnosis', 'Structured assessment'],
//                     ['8–15 page written report', 'Signed and defensible'],
//                     ['Fixed price, no surprises', 'Clear engagement terms'],
//                   ].map(([title, sub]) => (
//                     <div key={title} className="flex items-center gap-3">
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                         <Icon name="check" className="w-4" />
//                       </span>
//                       <div>
//                         <p className="text-sm font-medium">{title}</p>
//                         <p className="text-xs text-[var(--muted)]">{sub}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <form
//                   onSubmit={(event) => {
//                     event.preventDefault();
//                     setSubmitted(true);
//                   }}
//                   className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-5 sm:p-7"
//                 >
//                   <div className="mb-6">
//                     <p className="text-sm font-semibold">Book My Audit</p>
//                     <p className="mt-1 text-sm text-[var(--muted)]">
//                       Email + phone. That&apos;s it.
//                     </p>
//                   </div>

//                   <div className="space-y-4">
//                     <label className="block">
//                       <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
//                         Email
//                       </span>
//                       <input
//                         required
//                         type="email"
//                         name="email"
//                         placeholder="you@company.com"
//                         className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
//                       />
//                     </label>

//                     <label className="block">
//                       <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
//                         Phone
//                       </span>
//                       <input
//                         required
//                         type="tel"
//                         name="phone"
//                         placeholder="+34 600 000 000"
//                         className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
//                       />
//                     </label>

//                     <button
//                       type="submit"
//                       className="mt-2 flex h-12 w-full items-center justify-between rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)]"
//                     >
//                       <span>{submitted ? 'Audit request received' : 'Book My Audit'}</span>
//                       <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
//                         <Icon name={submitted ? 'check' : 'arrow'} className="w-4" />
//                       </span>
//                     </button>

//                     {submitted && (
//                       <p className="rounded-2xl border border-[var(--border)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
//                         Thanks — connect this form to your preferred CRM or API endpoint.
//                       </p>
//                     )}
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </Reveal>

//           <Reveal delay={120} className="mt-14">
//             <div className="mx-auto max-w-4xl">
//               <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
//                 Tech Consulting FAQ
//               </p>

//               <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
//                 {FAQS.map((item, index) => {
//                   const isOpen = open === index;

//                   return (
//                     <div key={item.q} className="border-b border-[var(--border)] last:border-b-0">
//                       <button
//                         type="button"
//                         aria-expanded={isOpen}
//                         onClick={() => setOpen(isOpen ? null : index)}
//                         className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
//                       >
//                         <span className="flex items-start gap-4">
//                           <span className="pt-0.5 text-xs font-medium text-[var(--muted)]">
//                             {String(index + 1).padStart(2, '0')}
//                           </span>
//                           <span className="text-base font-medium sm:text-lg">{item.q}</span>
//                         </span>

//                         <span
//                           className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-transform duration-300 ${
//                             isOpen ? 'rotate-45' : ''
//                           }`}
//                         >
//                           <Icon name="x" className="w-3.5 rotate-45" />
//                         </span>
//                       </button>

//                       <div
//                         className={`grid transition-[grid-template-rows,opacity] duration-300 ${
//                           isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-60'
//                         }`}
//                       >
//                         <div className="min-h-0 overflow-hidden">
//                           <p className="pb-6 pl-[3.15rem] pr-5 text-sm leading-6 text-[var(--muted)] sm:pl-[4.65rem] sm:pr-7">
//                             {item.a}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function TechConsultingPage() {
//   return (
//     <>
//       <Hero />
//       <TrustSection />
//       <ProblemSelector />
//       <ServicesSection />
//       <ComparisonSection />
//       <ProcessSection />
//       <IndustriesSection />
//       <FinalAuditSection />
//     </>
//   );
// }



import React, { useEffect, useState, useRef } from 'react';
import {
  CONTAINER, SECTION, CARD_PAD, GRID_GAP, Icon, GlobalHeroBackground,
  Magnetic, SplitLines, MarqueeHeader, useReveal, useSectionTabMemory, useCountUp
} from '../components/shared';

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

const USE_CASES = [
  { icon: 'bot', title: 'Agents & Bots', sub: 'Customer service, internal assistants.' },
  { icon: 'zap', title: 'Automation', sub: 'Email, documents, data, workflow.' },
  { icon: 'chart', title: 'Prediction & ML', sub: 'Demand forecasting, fraud detection.' },
  { icon: 'message', title: 'NLP & Language', sub: 'Sentiment, classification, extraction.' },
  { icon: 'database', title: 'Data Intelligence', sub: 'Smart dashboards on your own data.' },
  { icon: 'shield', title: 'AI Safety', sub: 'Secure AI agents and data.' }
];

const CONSULTANTS = ['Sell chatbots as \u201CAI\u201D', 'POC never reaches production', 'No engineering background', 'Disappear after delivery'];
const TCG_SIDE = ['Find ROI before code', 'POC in production', '10+ years engineering', 'Monitor + retrain'];

const POC_STEPS = [
  { n: '01', week: 'Week 1', title: 'Analyze', icon: 'chart', desc: 'We audit your data and map the ROI before any code is written.', bullets: ['Data audit', 'ROI map', 'Success metric'] },
  { n: '02', week: 'Week 2', title: 'Roadmap', icon: 'spark', desc: 'You get a fixed plan: architecture, model choices, cost, timeline.', bullets: ['Architecture', 'Model choices', 'Fixed price'] },
  { n: '03', week: 'Week 3', title: 'Build', icon: 'bot', desc: 'We wire the AI into your stack with guardrails and eval tests.', bullets: ['Integration', 'Guardrails', 'Eval tests'] },
  { n: '04', week: 'Week 4', title: 'Working AI', icon: 'zap', desc: 'Demo day. Real inputs, real outputs, on your infrastructure.', bullets: ['Live demo', 'Handover', 'Monitoring plan'] }
];

const INDUSTRIES = [
  { icon: 'dollar', label: 'Fintech', apps: 'Fraud detection, credit scoring' },
  { icon: 'truck', label: 'Logistics', apps: 'Route optimization, demand forecasting' },
  { icon: 'users', label: 'HR', apps: 'CV screening, matching, onboarding' },
  { icon: 'activity', label: 'Pharma', apps: 'Trial analysis, diagnosis support' },
  { icon: 'bag', label: 'Retail', apps: 'Recommendations, dynamic pricing' },
  { icon: 'zap', label: 'Energy', apps: 'Predictive maintenance' }
];

const FAQS = [
  { q: 'Do I need a lot of data?', a: 'Less than you think. Modern models work with modest datasets, and Week 1 starts by auditing what you already have \u2014 tickets, documents, CRM records, logs. If your data isn\u2019t ready, we\u2019ll tell you exactly what\u2019s missing and whether it\u2019s worth fixing before you spend anything on a POC.' },
  { q: 'Can I see results in 4 weeks?', a: 'Yes \u2014 that\u2019s the point of the format. By the end of Week 4 you\u2019ll have working AI running on your data, doing the actual task: answering real queries, processing real documents, making real predictions. Not a demo video. Your data, working.' },
  { q: 'What if AI makes mistakes or hallucinates?', a: 'It can \u2014 which is why we engineer for it. Every POC ships with guardrails: confidence thresholds, human-in-the-loop checkpoints, answers grounded in your own data with sources, and full audit logs. AI that can\u2019t be trusted with your customers never reaches them.' },
  { q: 'Will AI replace my employees?', a: 'Our projects mostly kill the work nobody wants \u2014 the copy-paste, the triage, the repetitive formatting. Every engagement includes a role-impact analysis, and where AI changes a job, we help redesign it around higher-value work. Companies that deploy AI with their people outperform those that deploy against them.' },
  { q: 'What technologies do you use?', a: 'Whatever the use case actually demands: OpenAI, Anthropic or open-source models, Python and modern ML tooling, integrated into your existing stack through clean APIs. We\u2019re vendor-neutral \u2014 zero partnerships, zero commissions \u2014 so the stack is chosen by your ROI, not our referral fees.' }
];

const LEARN_POINTS = [
  'Where AI makes sense for you',
  'Where it doesn\u2019t (honesty)',
  'What a POC would look like',
  'Fixed price, timeline'
];

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

function BigCount() {
  const [ref, val] = useCountUp(85, 1500);
  return (
    <div ref={ref} className="leading-none tabular-nums text-[clamp(4.25rem,15vw,11rem)] tracking-[-.05em]">
      {val}<span style={{ fontSize: '.42em' }}>%</span>
    </div>
  );
}

function Hero() {
  const [ready, setReady] = useState(false);
  const [par, setPar] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const on = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setPar(window.scrollY); raf = null; });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => { window.removeEventListener('scroll', on); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="hero"
      className={'relative w-full flex flex-col justify-center overflow-hidden ' +
        'pt-[clamp(6.5rem,14vh,10rem)] pb-[clamp(2.75rem,7vh,6rem)] ' +
        (ready ? 'hero-ready' : '')}
      style={{ minHeight: '100svh' }}>

      <GlobalHeroBackground />

      <div aria-hidden
        className="absolute z-0 top-0 right-0 w-[60vw] md:w-[42vw] aspect-square rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent) 20%, transparent 70%)', transform: `translate3d(0, ${par * 0.18}px, 0)` }} />

      <div className={CONTAINER + ' relative z-10 flex flex-col items-center gap-[clamp(1.75rem,3.5vw,2.5rem)] text-center'}>

        {/* Brand logo — inherits brand gold from --accent */}
        {/* <div className="text-[color:var(--accent)]"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? 'none' : 'translateY(14px)',
            transition: 'opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)'
          }}>
          <Logo />
        </div> */}

        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-center gap-2 text-[clamp(.75rem,.85vw,.86rem)]"
          style={{
            color: 'var(--muted)',
            opacity: ready ? 1 : 0,
            transform: ready ? 'none' : 'translateY(14px)',
            transition: 'opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)'
          }}>
          <a href="/" className="hover:opacity-70">Home</a>
          <span>/</span><span>Services</span><span>/</span>
          <span style={{ color: 'var(--fg)' }}>AI Integration</span>
        </nav>

        <div className="flex flex-wrap justify-center gap-2"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? 'none' : 'translateY(14px)',
            transition: 'opacity .8s cubic-bezier(.22,1,.36,1) .1s, transform .8s cubic-bezier(.22,1,.36,1) .1s'
          }}>
          <span className="chip text-[clamp(.75rem,.85vw,.86rem)] gap-2" style={{ border: '1px solid var(--border)' }}>
            <Icon name="spark" className="w-4" /> AI Consulting
          </span>
          <span className="chip text-[clamp(.75rem,.85vw,.86rem)] gap-2" style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
            <Icon name="clock" className="w-4" /> POC in 4 Weeks
          </span>
        </div>

        <h1 className="uppercase max-w-[20ch] text-[clamp(2.2rem,7.5vw,6.2rem)] leading-[.95] tracking-[-.045em] font-normal">
          <SplitLines
            lines={['AI that pays', 'for itself.', "In 4 weeks, you'll"]}
            startDelay={180}
          />

          <span className="split-line" style={{ '--wd': '590ms' }}>
            <span className="bg-gradient-to-r from-[var(--fg)] via-[var(--accent)] to-[var(--fg)] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-[gradientShift_5s_ease_infinite]">
              know exactly how.
            </span>
          </span>
        </h1>

        <p className="max-w-xl text-center text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]"
          style={{
            color: 'var(--muted)',
            opacity: ready ? 1 : 0,
            transform: ready ? 'none' : 'translateY(18px)',
            transition: 'opacity .9s cubic-bezier(.22,1,.36,1) .7s, transform .9s cubic-bezier(.22,1,.36,1) .7s'
          }}>
          We don&rsquo;t sell AI as magic. We integrate it where it reduces costs and generates measurable ROI &mdash; then prove it with a working proof of concept.
        </p>

        <div className="flex flex-wrap justify-center gap-3"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? 'none' : 'translateY(18px)',
            transition: 'opacity .9s cubic-bezier(.22,1,.36,1) .85s, transform .9s cubic-bezier(.22,1,.36,1) .85s'
          }}>
          <Magnetic href="#contact" className="btn-primary">
            Get Free AI Assessment
            <span className="btn-icon"><Icon name="arrow" className="w-4" /></span>
          </Magnetic>
          <a href="#usecases" className="btn-ghost">
            See AI Use Cases
            <Icon name="arrow" className="w-4 btn-arrow" />
          </a>
        </div>

        <a href="#reality" aria-label="Scroll down"
          className="relative mt-2 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-ink)',
            opacity: ready ? 1 : 0,
            transform: ready ? 'none' : 'translateY(20px)',
            transition: 'opacity .9s cubic-bezier(.22,1,.36,1) 1.05s, transform .9s cubic-bezier(.22,1,.36,1) 1.05s'
          }}>
          <span aria-hidden className="absolute inset-0 rounded-full"
            style={{ background: 'var(--accent)', animation: 'pulseRing 2.4s ease-out infinite' }} />
          <Icon name="arrow" className="relative w-4 rotate-90" />
        </a>
      </div>
    </section>
  );
}

function RealityCheck() {
  return (
    <section id="reality" className={SECTION}>
      <div className={CONTAINER + ' flex flex-col items-center gap-[clamp(2.25rem,5vw,3rem)]'}>
        <h2 data-reveal="blur" className="uppercase text-center text-[clamp(2rem,6vw,5.5rem)] leading-none tracking-[-.05em] font-normal">
          The 85% problem
        </h2>

        <div data-reveal style={{ '--d': '80ms' }} className="flex flex-col items-center gap-3 text-center">
          <BigCount />
          <p className="max-w-md text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">of enterprise AI projects never reach production.</p>
        </div>

        <div data-reveal="scale" style={{ '--d': '160ms' }} className="w-full max-w-3xl">
          <div className="flex flex-col items-end mb-2.5">
            <span className="chip text-[clamp(.75rem,.85vw,.86rem)] gap-2 font-medium"
              style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-ink)' }} />
              We&rsquo;re the 15%
            </span>
            <span aria-hidden className="block w-px h-3.5 mr-5" style={{ background: 'var(--muted)' }} />
          </div>

          <div className="w-full h-12 md:h-14 rounded-full overflow-hidden flex" style={{ border: '1px solid var(--border)' }}>
            <div className="bar-seg" style={{ width: '85%', background: '#ef4444' }} />
            <div className="bar-seg s2" style={{ width: '15%', background: 'var(--accent)' }} />
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 mt-2.5 text-[clamp(.78rem,.9vw,.88rem)]"
            style={{ color: 'var(--muted)' }}>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#ef4444' }} />
              85% fail &mdash; never reach production
            </span>
            <span className="flex items-center gap-2 sm:text-right">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
              15% ship
            </span>
          </div>
        </div>

        <p data-reveal="blur" style={{ '--d': '120ms' }}
          className="uppercase text-center max-w-[24ch] text-[clamp(1.75rem,4.2vw,3.7rem)] font-normal">
          Not because AI fails &mdash; because{' '}
          <span className="hl-wipe">nobody engineered the integration.</span>
        </p>
      </div>
    </section>
  );
}

function AICard({ item, index, active, onActivate }) {
  const handleClick = () => onActivate(item.title);
  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate(item.title);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKey}
      aria-pressed={active}
      className={'ai-card group ' + (active ? 'is-active' : '')}
    >
      <span className="ai-card__corner" aria-hidden />
      <span className="ai-card__wave" aria-hidden />
      <span className="ai-card__num" aria-hidden>0{index + 1}</span>

      <div className="ai-card__content">
        <span className="ai-card__icon">
          <Icon name={item.icon} className="w-5" />
        </span>
        <span className="flex flex-col gap-1.5">
          <h3 className="ai-card__title text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.15] tracking-[-.02em] font-normal">{item.title}</h3>
          <p className="ai-card__desc text-[clamp(.78rem,.9vw,.88rem)] leading-[1.5]">{item.sub}</p>
        </span>
      </div>

      <span className="ai-card__arrow" aria-hidden>
        <Icon name="arrow" style={{ width: 14, height: 14 }} />
      </span>
    </button>
  );
}

function UseCases() {
  const [activeCard, setActiveCard] = useState('AI Safety');

  return (
    <section id="usecases" className={SECTION}>
      <MarqueeHeader text="where does ai fit" />

      <div className={CONTAINER + ' mt-[clamp(1.5rem,4vw,3.5rem)] flex flex-col gap-[clamp(2.5rem,5.5vw,3.5rem)]'}>
        <h2 data-reveal="blur"
          className="uppercase text-center max-w-[20ch] mx-auto text-[clamp(2rem,6vw,5.5rem)] leading-none tracking-[-.05em] font-normal">
          Where does AI fit your business?
        </h2>

        <div
          role="group"
          aria-label="AI use case categories"
          className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ' + GRID_GAP + ' max-w-5xl mx-auto w-full'}
        >
          {USE_CASES.map((u, i) => (
            <div key={u.title} data-reveal="scale" style={{ '--d': (i * 90) + 'ms', display: 'flex' }}>
              <AICard
                item={u}
                index={i}
                active={activeCard === u.title}
                onActivate={setActiveCard}
              />
            </div>
          ))}
        </div>

        <p data-reveal className="text-center text-[clamp(.78rem,.9vw,.88rem)] leading-[1.5]" style={{ color: 'var(--muted)' }}>
          Tap a card to focus a use case &mdash; or{' '}
          <a href="#contact" className="underline" style={{ color: 'var(--fg)' }}>book a free assessment</a>{' '}
          and we&rsquo;ll map the right fit for you.
        </p>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="compare" className={SECTION}>
      <div className={CONTAINER + ' flex flex-col gap-[clamp(2.5rem,5.5vw,3.5rem)]'}>
        <h2 data-reveal="blur"
          className="uppercase text-center max-w-[22ch] mx-auto text-[clamp(2rem,6vw,5.5rem)] leading-none tracking-[-.05em] font-normal">
          Why AI projects fail &mdash; and why ours don&rsquo;t
        </h2>

        <div className={'grid grid-cols-1 md:grid-cols-2 ' + GRID_GAP + ' max-w-4xl mx-auto w-full'}>
          <div data-reveal="left" className={CARD_PAD + ' rounded-2xl flex flex-col gap-6'}
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="uppercase text-[clamp(1.15rem,1.8vw,1.5rem)] font-normal" style={{ color: 'var(--muted)' }}>AI Consultants</p>
            <ul className="flex flex-col gap-4">
              {CONSULTANTS.map((t) => (
                <li key={t} className="flex items-center gap-3.5">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
                    <Icon name="x" className="w-3.5" />
                  </span>
                  <p className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">{t}</p>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="right" style={{ '--d': '120ms', background: 'var(--fg)', color: 'var(--bg)' }}
            className={CARD_PAD + ' relative overflow-hidden rounded-2xl flex flex-col gap-6'}>
            <div aria-hidden className="absolute -bottom-20 -right-20 w-72 aspect-square rounded-full blur-3xl opacity-40"
              style={{ background: 'radial-gradient(circle, var(--accent) 30%, transparent 70%)' }} />
            <p className="uppercase relative text-[clamp(1.15rem,1.8vw,1.5rem)] font-normal">TCG</p>
            <ul className="flex flex-col gap-4 relative">
              {TCG_SIDE.map((t, i) => (
                <li key={t} className="flex items-center gap-3.5"
                  style={{ animation: 'fadeUp .6s cubic-bezier(.22,1,.36,1) both', animationDelay: (200 + i * 90) + 'ms' }}>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
                    <Icon name="check" className="w-4" />
                  </span>
                  <p className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">{t}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      setActiveIdx(POC_STEPS.length - 1);
      return;
    }
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const startY = vh * 0.85;
        const endY = vh * 0.15;
        const raw = (startY - rect.top) / (startY - endY);
        const p = Math.min(Math.max(raw, 0), 1);
        setProgress(p);
        setActiveIdx(Math.min(Math.floor(p * POC_STEPS.length), POC_STEPS.length - 1));
        raf = null;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="poc" ref={sectionRef} className={SECTION + ' overflow-hidden'}>
      <div className="process-grid" aria-hidden />

      <MarqueeHeader text="from idea to working ai" />

      <div className={CONTAINER + ' mt-[clamp(1.5rem,4vw,3.5rem)] flex flex-col gap-[clamp(3rem,6vw,4rem)] relative'}>
        <div className="flex flex-col items-center gap-5 text-center max-w-2xl mx-auto">
          <h2 data-reveal="blur" className="uppercase max-w-[22ch] text-[clamp(2rem,6vw,5.5rem)] leading-none tracking-[-.05em] font-normal">
            From idea to working AI in 4 weeks
          </h2>
          <p data-reveal style={{ '--d': '120ms', color: 'var(--muted)' }}
            className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">
            Same four weeks. A working AI running on your data — not a slide deck.
          </p>
        </div>

        <div data-reveal className="process-rail-wrap">
          <div className="process-rail">
            <div className="process-rail-fill" style={{ transform: `scaleX(${progress})` }} />
            <div className="process-rail-pulse" style={{ left: `${progress * 100}%` }}>
              <span className="process-rail-halo" />
              <span className="process-rail-dot" />
            </div>

            {POC_STEPS.map((s, i) => (
              <div
                key={s.n}
                className={
                  'process-node ' +
                  (i === activeIdx ? 'is-active ' : '') +
                  (i < activeIdx ? 'is-passed' : '')
                }
                style={{ left: `${(i / (POC_STEPS.length - 1)) * 100}%` }}
                aria-hidden
              >
                <span className="process-node-dot">
                  {i < activeIdx ? <Icon name="check" style={{ width: 12, height: 12 }} /> : s.n}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ' + GRID_GAP}>
          {POC_STEPS.map((s, i) => {
            const isActive = i === activeIdx;
            const isPassed = i < activeIdx;
            return (
              <div key={s.n} data-reveal="scale" style={{ '--d': (i * 120) + 'ms', display: 'flex' }}>
                <article className={'process-card ' + (isActive ? 'is-active ' : '') + (isPassed ? 'is-passed' : '')}>
                  <span className="process-card-ghost" aria-hidden>{s.n}</span>

                  <div className="process-card-content">
                    <div className="process-card-head">
                      <span className="process-card-icon">
                        <Icon name={s.icon} className="w-5" />
                      </span>
                      {isPassed && (
                        <span className="process-card-check" aria-hidden>
                          <Icon name="check" style={{ width: 12, height: 12 }} />
                        </span>
                      )}
                    </div>

                    <p className="process-card-week">{s.week}</p>
                    <h3 className="process-card-title text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.15] tracking-[-.02em] font-normal">{s.title}</h3>
                    <p className="process-card-desc text-[clamp(.78rem,.9vw,.88rem)] leading-[1.5]" style={{ color: 'var(--muted)' }}>
                      {s.desc}
                    </p>

                    <ul className="process-card-bullets">
                      {s.bullets.map((b) => (
                        <li key={b}>
                          <span className="process-card-bullet-dot" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div data-reveal className="process-output">
          <div className="process-output-left">
            <span className="process-output-icon">
              <Icon name="check" className="w-4" />
            </span>
            <p className="uppercase tracking-wide text-[clamp(1.15rem,1.8vw,1.5rem)] font-normal" style={{ color: 'var(--muted)' }}>
              Output: Working AI on{' '}
              <span style={{ color: 'var(--fg)' }}>YOUR data.</span>
            </p>
          </div>
          <p className="process-output-headline uppercase text-[clamp(1.75rem,4.2vw,3.7rem)] font-normal">
            Not a slide. Not a prototype.{' '}
            <span className="hl-wipe">Working AI.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className={SECTION}>
      <div className={CONTAINER + ' flex flex-col gap-[clamp(2.5rem,5.5vw,3.5rem)]'}>
        <div className="flex flex-col items-center gap-5 text-center max-w-2xl mx-auto">
          <h2 data-reveal="blur" className="uppercase text-[clamp(2rem,6vw,5.5rem)] leading-none tracking-[-.05em] font-normal">
            AI in your industry
          </h2>
          <p data-reveal style={{ '--d': '90ms', color: 'var(--muted)' }}
            className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">
            Same 4-week format, tuned to the rules and risks of your sector.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 max-w-3xl mx-auto w-full">
          {INDUSTRIES.map((s, i) => (
            <div key={s.label} data-reveal="right" style={{ '--d': (i * 80) + 'ms' }}
              className="svc-row rounded-2xl flex items-center gap-[clamp(1rem,2vw,1.5rem)] px-[clamp(1.25rem,2.5vw,1.5rem)] py-[clamp(.9rem,1.8vw,1.1rem)]">
              <span className="svc-ico w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <Icon name={s.icon} style={{ width: 18, height: 18 }} />
              </span>
              <span className="w-20 sm:w-28 md:w-44 shrink-0 text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.15] tracking-[-.02em]">{s.label}</span>
              <span className="svc-sub flex-1 min-w-0 text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">{s.apps}</span>
              <Icon name="arrow" className="w-4 shrink-0 opacity-40" />
            </div>
          ))}
        </div>

        <div data-reveal className="flex justify-center">
          <a href="index.html#work" className="link-arrow">
            See AI case studies with metrics <Icon name="arrow" className="w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Guarantees() {
  return (
    <section id="guarantees" className={SECTION}>
      <div className={CONTAINER + ' flex flex-col gap-[clamp(2.5rem,5vw,3rem)]'}>
        <h2 data-reveal="blur" className="uppercase text-center text-[clamp(2rem,6vw,5.5rem)] leading-none tracking-[-.05em] font-normal">
          Zero risk. In writing.
        </h2>

        <div className={'grid grid-cols-1 md:grid-cols-3 ' + GRID_GAP + ' max-w-5xl mx-auto w-full'}>
          <div data-reveal="scale"
            className={CARD_PAD + ' group rounded-2xl flex flex-col gap-5 transition-transform duration-500 hover:-translate-y-1.5'}
            style={{ background: 'var(--fg)', color: 'var(--bg)' }}>
            <span className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-12deg]"
              style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
              <Icon name="storm" className="w-6" />
            </span>
            <h3 className="uppercase text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.15] font-normal">Storm Guarantee</h3>
            <p className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">POC shows no value? <b>100% refund.</b></p>
          </div>

          <div data-reveal="scale"
            style={{ '--d': '100ms', background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 50%, var(--accent) 100%)', color: 'var(--accent-ink)' }}
            className={CARD_PAD + ' grad-anim group rounded-2xl flex flex-col gap-5 transition-transform duration-500 hover:-translate-y-1.5'}>
            <span className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[18deg]"
              style={{ background: 'var(--accent-ink)', color: 'var(--accent)' }}>
              <Icon name="hurricane" className="w-6" />
            </span>
            <h3 className="uppercase text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.15] font-normal">Hurricane Warranty</h3>
            <p className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">Late delivery? <b>100% refund.</b> Deadlines are sacred.</p>
          </div>

          <div data-reveal="scale" style={{ '--d': '200ms', background: 'var(--card)', border: '1.5px solid var(--accent)' }}
            className={CARD_PAD + ' group rounded-2xl flex flex-col gap-5 transition-transform duration-500 hover:-translate-y-1.5'}>
            <span className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
              style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
              <Icon name="heart" className="w-6" />
            </span>
            <h3 className="uppercase text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.15] font-normal">Honesty Guarantee</h3>
            <p className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">If AI doesn&rsquo;t make sense for your business, we&rsquo;ll tell you. <b>Free.</b></p>
          </div>
        </div>

        <p data-reveal className="text-center text-[clamp(.78rem,.9vw,.88rem)] leading-[1.5]" style={{ color: 'var(--muted)' }}>
          All three backed by written contract.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className={SECTION}>
      <div className={CONTAINER + ' flex flex-col gap-[clamp(2rem,5vw,3rem)]'}>
        <h2 data-reveal="blur" className="uppercase text-center text-[clamp(2rem,6vw,5.5rem)] leading-none tracking-[-.05em] font-normal">
          Questions? Answered.
        </h2>

        <div className="flex flex-col gap-[clamp(.75rem,1.5vw,1rem)] max-w-3xl mx-auto w-full">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} data-reveal
                style={{
                  '--d': (i * 60) + 'ms',
                  background: 'var(--card)',
                  border: '1px solid ' + (isOpen ? 'var(--accent)' : 'var(--border)'),
                  transition: 'border-color .35s ease'
                }}
                className="rounded-2xl overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-[clamp(1.25rem,2.5vw,1.5rem)]">
                  <p className="max-w-[52ch] text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">{f.q}</p>
                  <span className="relative w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                    style={{
                      background: isOpen ? 'var(--accent)' : 'var(--fg)',
                      color: isOpen ? 'var(--accent-ink)' : 'var(--bg)',
                      transform: isOpen ? 'rotate(135deg)' : 'rotate(0)'
                    }}>
                    <span className="absolute w-px h-2.5" style={{ background: 'currentColor' }} />
                    <span className="absolute w-2.5 h-px" style={{ background: 'currentColor' }} />
                  </span>
                </button>
                <div className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <div className="px-[clamp(1.25rem,2.5vw,1.5rem)] pb-[clamp(1.25rem,2.5vw,1.5rem)]">
                      <div className="border rounded-xl p-[clamp(1.25rem,2.5vw,1.5rem)] text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]"
                        style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className={SECTION}>
      <div className={CONTAINER}>
        <div data-reveal="scale"
          className="relative overflow-hidden rounded-3xl flex flex-col items-center text-center gap-[clamp(1.75rem,4vw,2.5rem)] px-[clamp(1.25rem,4vw,4rem)] py-[clamp(3rem,7vw,5rem)]"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <div aria-hidden className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[70vw] aspect-square rounded-full blur-3xl opacity-40"
            style={{ background: 'radial-gradient(circle, var(--accent) 20%, transparent 70%)' }} />

          <div className="flex flex-col items-center gap-3">
            <h2 className="uppercase text-[clamp(2rem,6vw,5.5rem)] leading-none tracking-[-.05em] font-normal">Start with a conversation</h2>
            <p className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]" style={{ color: 'var(--muted)' }}>2 hours. Free. No obligation.</p>
          </div>

          <div className="flex flex-col gap-3 max-w-md">
            <p className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]" style={{ color: 'var(--muted)' }}>
              In one conversation, you&rsquo;ll learn:
            </p>
            <ul className="flex flex-col gap-2.5 items-start">
              {LEARN_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-left text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
                    <Icon name="check" className="w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {sent ? (
            <div className="fade-in flex flex-col items-center gap-3">
              <span className="pop w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
                <Icon name="check" className="w-7" />
              </span>
              <p className="text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.15]">Request received.</p>
              <p className="text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]" style={{ color: 'var(--muted)' }}>
                We&rsquo;ll reach out within 24 hours to schedule your free AI assessment.
              </p>
            </div>
          ) : (
            <form className="w-full max-w-xl flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input required type="email" placeholder="Work email" aria-label="Work email" className="field flex-1 min-w-0" />
              <input required type="tel" placeholder="Phone number" aria-label="Phone number" className="field flex-1 min-w-0" />
              <Magnetic type="submit" className="btn-primary w-full sm:w-auto whitespace-nowrap">
                Book Free AI Assessment
                <span className="btn-icon"><Icon name="arrow" className="w-4" /></span>
              </Magnetic>
            </form>
          )}

          <p className="text-[clamp(.78rem,.9vw,.88rem)] leading-[1.5]" style={{ color: 'var(--muted)' }}>
            No obligation. No sales pitch. Answer within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AIIntegrationPage() {
  useSectionTabMemory([
    { id: 'hero', title: 'AI Integration' },
    { id: 'reality', title: 'The 85% Problem' },
    { id: 'usecases', title: 'Use Cases' },
    { id: 'compare', title: 'Why Us' },
    { id: 'poc', title: '4-Week POC' },
    { id: 'industries', title: 'Industries' },
    { id: 'guarantees', title: 'Guarantees' },
    { id: 'faq', title: 'FAQ' },
    { id: 'contact', title: 'AI Assessment' }
  ]);
  useReveal();

  return (
    <>
      <Hero />
      <RealityCheck />
      <UseCases />
      <Comparison />
      <Process />
      <Industries />
      <Guarantees />
      <FAQ />
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

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
      `}</style>
    </>
  );
}