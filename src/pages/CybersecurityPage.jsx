import React, { useState } from 'react';
import { CONTAINER, SECTION } from '../components/shared/constants';
import { Icon } from '../components/shared/Icon';
import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

const THREATS = [
  {
    accent: '#ef4444',
    soft: 'rgba(239,68,68,.10)',
    icon: 'clock',
    label: 'COMPLIANCE DEADLINE',
    copy: 'Need ENS/ISO 27001/GDPR/NIS2 compliance',
    cta: 'Get Compliance Audit',
  },
  {
    accent: '#f59e0b',
    soft: 'rgba(245,158,11,.11)',
    icon: 'search',
    label: 'UNKNOWN VULNERABILITIES',
    copy: 'Don’t know what you don’t know',
    cta: 'Get Vulnerability Assessment',
  },
  {
    accent: '#22c55e',
    soft: 'rgba(34,197,94,.11)',
    icon: 'bot',
    label: 'AI SECURITY RISKS',
    copy: 'Implemented AI, unsure about new risks',
    cta: 'Get AI Security Review',
  },
];

const SERVICES = [
  ['Security Audit', 'Full landscape assessment', 'search'],
  ['Pentesting', 'Simulated attacks', 'zap'],
  ['SOC 24/7 Monitoring', 'Continuous detection', 'activity'],
  ['Perimeter Security', 'Network + access', 'shield'],
  ['Compliance', 'ENS, ISO 27001, GDPR, NIS2', 'check'],
  ['AI Security', 'Secure AI agents and data', 'bot'],
];

const REACTIVE = [
  'Act after incident',
  'Antivirus + firewall only',
  '“It won’t happen to us”',
  'Hope-based security',
];

const PROACTIVE = [
  'Act before incident',
  'Audit + test + monitor',
  '“Assume breach”',
  'Evidence-based',
];

const SECURITY_STEPS = [
  ['Analyze', 'Week 1', 'Assessment'],
  ['Test', 'Week 2–3', 'Testing'],
  ['Fix', 'Week 4', 'Remediation plan'],
  ['Monitor', 'Ongoing', 'Monitoring & evolution'],
];

const INDUSTRIES = [
  'Energy',
  'Finance',
  'Logistics',
  'Government',
  'Pharma',
  'Media',
  'Retail',
];

const COMPLIANCE = [
  ['ENS', 'Spain'],
  ['ISO 27001', 'International standard'],
  ['GDPR', 'EU'],
  ['NIS2', 'EU'],
];

const FAQS = [
  {
    q: 'How do I know if I have vulnerabilities?',
    a: 'A structured security assessment helps identify weaknesses across your application, infrastructure, access controls, and operational exposure before they become incidents.',
  },
  {
    q: 'Audit vs pentesting — what’s different?',
    a: 'An audit reviews the broader security landscape, controls, risks, and gaps. Pentesting simulates attacks against defined targets to validate how exploitable specific weaknesses are.',
  },
  {
    q: 'Do I need 24/7 SOC?',
    a: 'That depends on your risk profile, operating hours, incident requirements, and business impact. The assessment helps determine whether continuous monitoring is appropriate.',
  },
  {
    q: 'Can you help with compliance?',
    a: 'Yes. The stated focus includes ENS, ISO 27001, GDPR, and NIS2, with compliance gaps incorporated into the security assessment and remediation priorities.',
  },
  {
    q: 'How often should I test?',
    a: 'Testing frequency should reflect business risk, major system changes, new exposures, and compliance requirements. Ongoing monitoring complements periodic assessments and tests.',
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
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[.13em] ${
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
      <span className="underline decoration-[color:var(--border)] underline-offset-4">{children}</span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full ${
          dark ? 'bg-[var(--accent)] text-[var(--accent-ink)]' : 'bg-[color:var(--card)]'
        }`}
      >
        <Icon name="arrow" className="w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
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
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Reveal>
            <div className="mb-5 flex flex-wrap justify-center gap-2">
              <Badge accent>
                <Icon name="shield" className="w-3.5" />
                Cybersecurity
              </Badge>
              <Badge>
                <Icon name="bot" className="w-3.5" />
                AI-Enhanced Security
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Proactive protection
            </p>
            <h1 className="max-w-[14ch] text-balance text-[clamp(2.45rem,7vw,6.4rem)] font-normal leading-[.92] tracking-[-.055em]">
              An attacker is already looking for you. The question is:{' '}
              <span className="bg-gradient-to-r from-[var(--fg)] via-[var(--accent)] to-[var(--fg)] bg-clip-text text-transparent">
                Will they find a way in?
              </span>
            </h1>
          </Reveal>

          <Reveal delay={170} className="mt-6 max-w-2xl">
            <p className="text-[clamp(.95rem,1.1vw,1.08rem)] leading-[1.65] text-[var(--muted)]">
              We identify your vulnerabilities before they become tomorrow&apos;s breach. Proactive security. AI-powered. Tailored to your business.
            </p>
          </Reveal>

          <Reveal delay={270} className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#assessment"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Security Assessment
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                <Icon name="arrow" className="w-4" />
              </span>
            </a>

            <a
              href="mailto:security@thecloudgroup.example"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[color:var(--bg)/.5] px-5 text-sm hover:bg-[var(--card)]"
            >
              Talk to Expert
              <Icon name="arrow" className="w-4" />
            </a>
          </Reveal>

          <Reveal delay={370} className="mt-10 w-full max-w-4xl">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ['2,000+', 'secured projects'],
                ['24/7', 'SOC monitoring'],
                ['9', 'countries'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[var(--border)] bg-[color:var(--card)] px-4 py-4 text-center"
                >
                  <strong className="block text-2xl font-normal tracking-[-.04em]">{value}</strong>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[.13em] text-[var(--muted)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ThreatSelector() {
  return (
    <section id="threats" className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Threat selector
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              What keeps you up at night?
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {THREATS.map((item, index) => (
            <Reveal key={item.label} delay={index * 90}>
              <a
                href="#assessment"
                className="group block h-full rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ '--threat': item.accent }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ color: item.accent, background: item.soft }}
                  >
                    <Icon name={item.icon} className="w-5" />
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.12em]"
                    style={{ color: item.accent, background: item.soft }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-10 text-[clamp(1.12rem,1.9vw,1.5rem)] leading-[1.12] tracking-[-.025em]">
                  {item.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.copy}</p>

                <span
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline decoration-[color:var(--border)] underline-offset-4"
                  style={{ color: item.accent }}
                >
                  {item.cta}
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

function ServicesSection() {
  return (
    <section id="services" className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Security services
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              How we protect you
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([title, copy, icon], index) => (
            <Reveal key={title} delay={index * 65}>
              <a
                href="#assessment"
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
                  Learn more
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

function PhilosophySection() {
  return (
    <section id="philosophy" className={`${SECTION} bg-[color:var(--card)]`}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Security philosophy
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              Security philosophy
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[.15em] text-[var(--muted)]">
                  Reactive
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)]">
                  <Icon name="x" className="w-4" />
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {REACTIVE.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)]">
                      <Icon name="x" className="w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="relative overflow-hidden rounded-3xl bg-[var(--fg)] p-6 text-[var(--bg)] sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[var(--accent)] opacity-30 blur-3xl"
              />

              <div className="relative flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[.15em] text-[color:var(--bg)/.6]">
                  Proactive
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-ink)]">
                  <Icon name="shield" className="w-4" />
                </span>
              </div>

              <ul className="relative mt-8 space-y-4">
                {PROACTIVE.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                      <Icon name="check" className="w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Security process
            </p>
            <h2 className="text-[clamp(2rem,5.5vw,4.8rem)] leading-none tracking-[-.05em]">
              How we secure your business
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[var(--border)] lg:block" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4">
            {SECURITY_STEPS.map(([title, week, detail], index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="relative flex gap-4 lg:flex-col">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-xs font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
                      {week}
                    </p>
                    <h3 className="mt-2 text-xl tracking-[-.02em]">{title}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">{detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150} className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-center justify-center gap-3 rounded-3xl border border-[var(--border)] bg-[color:var(--card)] px-6 py-7 text-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
              <Icon name="activity" className="w-4" />
            </span>
            <p className="text-sm font-medium">
              Ongoing means monitoring &amp; evolution—not a one-time security project.
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
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Sector-specific protection
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.2rem,5.5vw,4.8rem)] leading-[.95] tracking-[-.05em]">
              Sector-specific protection
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)]">
              Security controls and priorities shaped around the environments where your business operates.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-[var(--border)] sm:grid-cols-4">
              {INDUSTRIES.map((industry, index) => (
                <div
                  key={industry}
                  className="group flex min-h-[100px] items-end border-b border-r border-[var(--border)] p-5 sm:min-h-[115px]"
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

        <Reveal delay={140} className="mt-10">
          <div className="rounded-3xl border border-[var(--border)] p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.15em] text-[var(--muted)]">
                  Compliance expertise
                </p>
                <h3 className="mt-2 text-xl tracking-[-.02em]">Security standards that matter in the EU market.</h3>
              </div>
              <ArrowLink href="#assessment">See security case studies</ArrowLink>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {COMPLIANCE.map(([name, region]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-[var(--border)] bg-[color:var(--card)] p-4"
                >
                  <strong className="block text-lg font-medium">{name}</strong>
                  <span className="mt-1 block text-xs text-[var(--muted)]">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AssessmentSection() {
  const [open, setOpen] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="assessment" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_36%),linear-gradient(180deg,var(--card),var(--bg))]"
      />

      <div className={`${CONTAINER} relative`}>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
                Security assessment
              </p>
              <h2 className="max-w-[11ch] text-[clamp(2.3rem,5vw,4.8rem)] leading-[.95] tracking-[-.05em]">
                Assess your security level
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-6 text-[var(--muted)]">
                Get a clear view of current exposure, priorities, compliance gaps, and the practical path to reduce risk.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Current vulnerabilities',
                  'Risk prioritization',
                  'Compliance gaps',
                  'Cost to fix (fixed price)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                      <Icon name="check" className="w-4" />
                    </span>
                    <span className="text-sm font-medium">{item}</span>
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
                  <p className="text-sm font-semibold">Get Security Assessment</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Email + phone. We’ll take it from there.
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
                    <span>{submitted ? 'Assessment request received' : 'Get Security Assessment'}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                      <Icon name={submitted ? 'check' : 'arrow'} className="w-4" />
                    </span>
                  </button>

                  {submitted && (
                    <p className="rounded-2xl border border-[var(--border)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
                      Thanks — connect this form to your CRM or security intake endpoint.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Reveal>

        <Reveal delay={130} className="mx-auto mt-14 max-w-4xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
            Security-Specific FAQ
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
        </Reveal>
      </div>
    </section>
  );
}

export default function CybersecurityPage() {
  return (
    <>
      <Hero />
      <ThreatSelector />
      <ServicesSection />
      <PhilosophySection />
      <ProcessSection />
      <IndustriesSection />
      <AssessmentSection />
    </>
  );
}
