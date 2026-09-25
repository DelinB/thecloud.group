import React, { useState } from 'react';
import { CONTAINER, SECTION } from '../components/shared/constants';
import { Icon } from '../components/shared/Icon';
import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

const SELECTOR_PATHS = [
  {
    accent: '#ef4444',
    soft: 'rgba(239,68,68,.10)',
    icon: 'x',
    label: 'MY PROJECT IS STUCK',
    copy: 'Started with freelancer/agency, PoC never reached production',
    cta: 'Get Rescue Audit',
  },
  {
    accent: '#f59e0b',
    soft: 'rgba(245,158,11,.11)',
    icon: 'clock',
    label: 'I PAID FOR SLIDES, NOT SOFTWARE',
    copy: 'Big Four firm delivered deck, no code',
    cta: 'Get Second Opinion Audit',
  },
  {
    accent: '#22c55e',
    soft: 'rgba(34,197,94,.11)',
    icon: 'compass',
    label: 'I NEED AN INDEPENDENT VOICE',
    copy: 'Internal team can’t decide between options',
    cta: 'Get Technical Advisory',
  },
];

const SERVICES = [
  ['Technical Software Audit', '10-day assessment', 'search'],
  ['AI Audit', 'Model, data, ROI analysis', 'bot'],
  ['Project Rescue', 'Stabilize, Decide, Execute', 'zap'],
  ['Digital Strategy', 'Roadmap + TCO analysis', 'compass'],
  ['Vendor Selection', 'RFP + evaluation + negotiation', 'users'],
  ['External CTO', 'Fractional leadership', 'shield'],
];

const INDUSTRIES = [
  'Banking',
  'Public Sector',
  'Industry',
  'Pharma',
  'Entertainment',
  'Government',
  'Retail',
];

const COMPARE = [
  ['Timeline', '6+ months', '10 days'],
  ['Deliverable', 'Slides only', 'Report + code'],
  ['Staffing', 'Junior staff', 'Real seniors'],
  ['Independence', 'Vendor bias', '0 partnerships'],
  ['Execution', 'Outsourced execution', 'In-house execution'],
];

const FAQS = [
  {
    q: 'How much does an audit cost?',
    a: 'The audit is offered at a fixed price. The exact fee depends on the scope of the system, codebase, integrations, and decision you need to make.',
  },
  {
    q: 'What’s included in the report?',
    a: 'You receive a 17-dimension diagnosis, an 8–15 page written report, findings, risks, recommended actions, and a practical plan for what happens next.',
  },
  {
    q: 'How are you different from Big Four?',
    a: 'The stated model is a focused 10-day engagement with real senior involvement, a written report, code-level perspective, zero vendor partnerships, and in-house execution.',
  },
  {
    q: 'What if you say my project can’t be saved?',
    a: 'The purpose of the audit is to make the situation clear. If the evidence points away from rescue, the written diagnosis explains why and gives you a defensible next-step recommendation.',
  },
  {
    q: 'Do you have vendor partnerships?',
    a: 'The positioning is 0 vendor partnerships, so recommendations are intended to be independent of software-vendor incentives.',
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

function Badge({ children, accent = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] ${
        accent
          ? 'border-transparent bg-[var(--accent)] text-[var(--accent-ink)]'
          : 'border-[var(--border)] bg-[color:var(--card)/.72] text-[var(--fg)]'
      }`}
    >
      {children}
    </span>
  );
}

function ArrowLink({ href = '#', children, dark = false }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
        dark ? 'text-[var(--bg)]' : 'text-[var(--fg)]'
      }`}
    >
      <span className="underline decoration-[color:var(--border)] underline-offset-4">
        {children}
      </span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full ${
          dark
            ? 'bg-[var(--accent)] text-[var(--accent-ink)]'
            : 'bg-[color:var(--card)]'
        }`}
      >
        <Icon name="arrow" className="w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

function GuaranteeStrip() {
  return (
    <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[color:var(--card)] px-4 py-3 text-left">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-ink)]">
          <Icon name="storm" className="w-5" />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
            Storm Guarantee
          </p>
          <p className="mt-1 text-sm font-medium">Don’t like the report? Refund.</p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[color:var(--card)] px-4 py-3 text-left">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--fg)] text-[var(--bg)]">
          <Icon name="hurricane" className="w-5" />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
            Hurricane Warranty
          </p>
          <p className="mt-1 text-sm font-medium">Late delivery? Refund.</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-16">
      <GlobalHeroBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg)] via-[color:var(--bg)/.72] to-transparent"
      />

      <div className={`${CONTAINER} relative z-10`}>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Reveal>
            <div className="mb-5 flex flex-wrap justify-center gap-2">
              <Badge accent>
                <Icon name="shield" className="w-3.5" />
                Senior Boutique
              </Badge>
              <Badge>
                <Icon name="check" className="w-3.5" />
                100% Independent
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Tech Consulting
            </p>
            <h1 className="max-w-[13ch] text-balance text-[clamp(2.6rem,7vw,6.4rem)] font-normal leading-[.92] tracking-[-.055em]">
              Your project is stuck. We’ll tell you why in{' '}
              <span className="bg-gradient-to-r from-[var(--fg)] via-[var(--accent)] to-[var(--fg)] bg-clip-text text-transparent">
                10 days. In writing.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160} className="mt-6 max-w-2xl">
            <p className="text-[clamp(.95rem,1.1vw,1.08rem)] leading-[1.65] text-[var(--muted)]">
              Audit → Written diagnosis → Action plan. Fixed price. No vendor bias. No slides.
              Code from the same team that diagnoses.
            </p>
          </Reveal>

          <Reveal delay={260} className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#audit"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Project Audit
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                <Icon name="arrow" className="w-4" />
              </span>
            </a>

            <a
              href="#approach"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[color:var(--bg)/.5] px-5 text-sm hover:bg-[var(--card)]"
            >
              See Our Approach
              <Icon name="arrow" className="w-4" />
            </a>
          </Reveal>

          <Reveal delay={360} className="mt-10">
            <GuaranteeStrip />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const stats = [
    ['+90', 'rescued projects'],
    ['10-day', 'audits'],
    ['0', 'vendor partnerships'],
  ];

  return (
    <section className={`${SECTION} border-y border-[var(--border)] bg-[color:var(--card)]`}>
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map(([value, label], index) => (
            <Reveal key={label} delay={index * 70}>
              <div
                className={`px-5 py-5 text-center sm:px-8 sm:py-3 ${
                  index !== 0 ? 'border-t border-[var(--border)] sm:border-l sm:border-t-0' : ''
                }`}
              >
                <strong className="block text-[clamp(2rem,4vw,3.4rem)] font-normal leading-none tracking-[-.045em]">
                  {value}
                </strong>
                <span className="mt-2 block text-xs uppercase tracking-[.12em] text-[var(--muted)]">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSelector() {
  return (
    <section id="situations" className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Problem selector
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              Which situation is yours?
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {SELECTOR_PATHS.map((item, index) => (
            <Reveal key={item.label} delay={index * 90}>
              <a
                href="#audit"
                className="group block h-full rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ '--path': item.accent }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ color: item.accent, background: item.soft }}
                  >
                    <Icon name={item.icon} className="w-5" />
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.12em]"
                    style={{ color: item.accent, background: item.soft }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-10 text-[clamp(1.15rem,1.9vw,1.5rem)] leading-[1.12] tracking-[-.025em]">
                  {item.label}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{item.copy}</p>

                <div
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline decoration-[color:var(--border)] underline-offset-4"
                  style={{ color: item.accent }}
                >
                  {item.cta}
                  <Icon name="arrow" className="w-4" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Services
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              How we help
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([title, copy, icon], index) => (
            <Reveal key={title} delay={index * 65}>
              <a
                href="#audit"
                className="group block h-full rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--fg)/.22]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[.15em] text-[var(--muted)]">
                    0{index + 1}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--fg)] text-[var(--bg)]">
                    <Icon name={icon} className="w-5" />
                  </span>
                </div>

                <h3 className="mt-10 text-xl leading-[1.1] tracking-[-.025em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p>

                <span className="mt-7 flex items-center gap-2 text-sm font-medium">
                  Explore
                  <Icon name="arrow" className="w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section id="approach" className={`${SECTION} bg-[color:var(--card)]`}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              The differentiator
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              Why we&apos;re different
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
            <div className="grid grid-cols-2">
              <div className="border-r border-[var(--border)] bg-[var(--bg)] px-5 py-5 sm:px-8">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[.16em] text-[var(--muted)]">
                    Big Four
                  </span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[9px] uppercase tracking-[.1em] text-[var(--muted)]">
                    Typical model
                  </span>
                </div>
              </div>
              <div className="bg-[var(--fg)] px-5 py-5 text-[var(--bg)] sm:px-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[.16em]">TCG</span>
                  <span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.1em] text-[var(--accent-ink)]">
                    Independent
                  </span>
                </div>
              </div>
            </div>

            {COMPARE.map(([factor, them, us]) => (
              <div key={factor} className="grid grid-cols-2 border-t border-[var(--border)]">
                <div className="border-r border-[var(--border)] px-5 py-5 sm:px-8">
                  <span className="block text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
                    {factor}
                  </span>
                  <p className="mt-1 text-sm font-medium sm:text-base">{them}</p>
                </div>
                <div className="bg-[var(--fg)] px-5 py-5 text-[var(--bg)] sm:px-8">
                  <span className="block text-[10px] font-semibold uppercase tracking-[.12em] text-[color:var(--bg)/.55]">
                    TCG
                  </span>
                  <p className="mt-1 text-sm font-medium sm:text-base">{us}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                  <Icon name="storm" className="w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.1em]">Storm Guarantee</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">Don’t like the report = refund.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--fg)] p-5 text-[var(--bg)]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                  <Icon name="hurricane" className="w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.1em]">Hurricane Warranty</p>
                  <p className="mt-1 text-sm text-[color:var(--bg)/.68]">Late delivery = refund.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    ['Day 0', '1-hour free consult'],
    ['Day 1–3', 'Immersion'],
    ['Day 4–7', 'Analysis'],
    ['Day 8–10', 'Report + plan'],
  ];

  return (
    <section id="process" className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Process timeline
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              From stuck to unstuck
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[var(--border)] lg:block" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4">
            {steps.map(([time, title], index) => (
              <Reveal key={time} delay={index * 80}>
                <div className="relative flex gap-4 lg:flex-col">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-xs font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
                      {time}
                    </p>
                    <h3 className="mt-2 text-xl leading-tight tracking-[-.02em]">{title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={160} className="mt-14">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-[color:var(--card)] px-6 py-8 text-center">
            <p className="text-[clamp(1.3rem,2.5vw,2.1rem)] tracking-[-.03em]">
              8–15 page PDF.
              <span className="mx-2 text-[var(--muted)]">Defensible.</span>
              <strong>Signed.</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className={`${SECTION} bg-[color:var(--card)]`}>
      <div className={CONTAINER}>
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Industries served
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.2rem,5.5vw,4.8rem)] leading-[.95] tracking-[-.05em]">
              Where we&apos;ve worked
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-[var(--border)] sm:grid-cols-4">
              {INDUSTRIES.map((industry, index) => (
                <div
                  key={industry}
                  className="group flex min-h-[95px] items-end border-b border-r border-[var(--border)] p-5 sm:min-h-[120px]"
                >
                  <div>
                    <span className="mb-2 block text-[10px] font-medium uppercase tracking-[.14em] text-[var(--muted)]">
                      0{index + 1}
                    </span>
                    <span className="text-base font-medium transition-transform duration-300 group-hover:translate-x-1">
                      {industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-8 flex justify-center lg:justify-end">
          <ArrowLink href="#audit">See industry case studies</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function FinalAuditSection() {
  const [open, setOpen] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="audit" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_36%),linear-gradient(180deg,var(--card),var(--bg))]"
      />

      <div className={`${CONTAINER} relative`}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
                  Final CTA
                </p>
                <h2 className="max-w-[10ch] text-[clamp(2.3rem,5vw,4.8rem)] leading-[.95] tracking-[-.05em]">
                  Get your project audit
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-6 text-[var(--muted)]">
                  One focused engagement to replace uncertainty with a written diagnosis and a defensible action plan.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    ['17-dimension diagnosis', 'Structured assessment'],
                    ['8–15 page written report', 'Signed and defensible'],
                    ['Fixed price, no surprises', 'Clear engagement terms'],
                  ].map(([title, sub]) => (
                    <div key={title} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                        <Icon name="check" className="w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-xs text-[var(--muted)]">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                  className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-5 sm:p-7"
                >
                  <div className="mb-6">
                    <p className="text-sm font-semibold">Book My Audit</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Email + phone. That&apos;s it.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <label className="block">
                      <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
                        Email
                      </span>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
                        Phone
                      </span>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+34 600 000 000"
                        className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                      />
                    </label>

                    <button
                      type="submit"
                      className="mt-2 flex h-12 w-full items-center justify-between rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)]"
                    >
                      <span>{submitted ? 'Audit request received' : 'Book My Audit'}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                        <Icon name={submitted ? 'check' : 'arrow'} className="w-4" />
                      </span>
                    </button>

                    {submitted && (
                      <p className="rounded-2xl border border-[var(--border)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
                        Thanks — connect this form to your preferred CRM or API endpoint.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
                Tech Consulting FAQ
              </p>

              <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
                {FAQS.map((item, index) => {
                  const isOpen = open === index;

                  return (
                    <div key={item.q} className="border-b border-[var(--border)] last:border-b-0">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                      >
                        <span className="flex items-start gap-4">
                          <span className="pt-0.5 text-xs font-medium text-[var(--muted)]">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="text-base font-medium sm:text-lg">{item.q}</span>
                        </span>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                        >
                          <Icon name="x" className="w-3.5 rotate-45" />
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-60'
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <p className="pb-6 pl-[3.15rem] pr-5 text-sm leading-6 text-[var(--muted)] sm:pl-[4.65rem] sm:pr-7">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function TechConsultingPage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ProblemSelector />
      <ServicesSection />
      <ComparisonSection />
      <ProcessSection />
      <IndustriesSection />
      <FinalAuditSection />
    </>
  );
}
