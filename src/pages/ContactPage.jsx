import React, { useMemo, useState } from 'react';
import { CONTAINER, SECTION } from '../components/shared/constants';
import { Icon } from '../components/shared/Icon';
import { GlobalHeroBackground } from '../components/shared/GlobalHeroBackground';

const CONTACT_PHONE = '+34 660 014 818';
const WHATSAPP_NUMBER = '34660014818';
const WHATSAPP_MESSAGE =
  'Hi The Cloud Group, I would like to discuss a project and understand the right next step.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const CALENDAR_URL =
  import.meta.env.VITE_CALENDAR_URL || '';

const OFFICES = [
  {
    city: 'Madrid',
    country: 'Spain',
    type: 'HQ',
    lat: 40.42,
    lon: -3.70,
    hours: 'Mon–Fri, 9:00–19:00 CET',
    address: 'Address available on request',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    type: 'Office',
    lat: 25.20,
    lon: 55.27,
    hours: 'Mon–Fri, 9:00–19:00 GST',
    address: 'Address available on request',
  },
  {
    city: 'Marbella',
    country: 'Spain',
    type: 'Office',
    lat: 36.51,
    lon: -4.89,
    hours: 'Mon–Fri, 9:00–19:00 CET',
    address: 'Address available on request',
  },
  {
    city: 'Chandigarh',
    country: 'India',
    type: 'Office',
    lat: 30.73,
    lon: 76.78,
    hours: 'Mon–Fri, 9:00–19:00 IST',
    address: 'Address available on request',
  },
  {
    city: 'Hong Kong',
    country: 'SAR',
    type: 'Office',
    lat: 22.32,
    lon: 114.17,
    hours: 'Mon–Fri, 9:00–19:00 HKT',
    address: 'Address available on request',
  },
  {
    city: 'Pereira',
    country: 'Colombia',
    type: 'Office',
    lat: 4.81,
    lon: -75.69,
    hours: 'Mon–Fri, 9:00–19:00 COT',
    address: 'Address available on request',
  },
  {
    city: 'Tlaxcala',
    country: 'Mexico',
    type: 'Office',
    lat: 19.31,
    lon: -98.24,
    hours: 'Mon–Fri, 9:00–19:00 CST',
    address: 'Address available on request',
  },
  {
    city: 'Havana',
    country: 'Cuba',
    type: 'Office',
    lat: 23.11,
    lon: -82.37,
    hours: 'Mon–Fri, 9:00–19:00 CST',
    address: 'Address available on request',
  },
  {
    city: 'Malabo',
    country: 'Equatorial Guinea',
    type: 'Office',
    lat: 3.75,
    lon: 8.78,
    hours: 'Mon–Fri, 9:00–19:00 WAT',
    address: 'Address available on request',
  },
];

const SERVICES = [
  'Custom Software',
  'Tech Consulting',
  'AI Integration',
  'Cybersecurity',
  'Other',
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

function ContactCard({ icon, label, title, copy, href, action, primary = false }) {
  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className={[
        'group relative flex min-h-[210px] flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1',
        primary
          ? 'border-transparent bg-[var(--fg)] text-[var(--bg)]'
          : 'border-[var(--border)] bg-[color:var(--card)]',
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <span
          className={[
            'flex h-12 w-12 items-center justify-center rounded-2xl',
            primary
              ? 'bg-[var(--accent)] text-[var(--accent-ink)]'
              : 'bg-[var(--fg)] text-[var(--bg)]',
          ].join(' ')}
        >
          <Icon name={icon} className="w-5" />
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[.14em] ${
            primary ? 'text-[color:var(--bg)/.55]' : 'text-[var(--muted)]'
          }`}
        >
          {label}
        </span>
      </div>

      <h3 className="mt-9 text-2xl tracking-[-.03em]">{title}</h3>

      <p
        className={`mt-2 max-w-sm text-sm leading-6 ${
          primary ? 'text-[color:var(--bg)/.68]' : 'text-[var(--muted)]'
        }`}
      >
        {copy}
      </p>

      <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-medium">
        {action}
        <Icon name="arrow" className="w-4 transition-transform group-hover:translate-x-1" />
      </span>

      {primary && (
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-[var(--accent)] opacity-25 blur-3xl"
        />
      )}
    </Tag>
  );
}

function QuickContact() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <GlobalHeroBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg)] via-[color:var(--bg)/.75] to-transparent"
      />

      <div className={`${CONTAINER} relative z-10`}>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Contact
            </p>
            <h1 className="text-[clamp(2.6rem,7vw,6.2rem)] font-normal leading-[.92] tracking-[-.055em]">
              Let&apos;s talk.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[clamp(.96rem,1.1vw,1.08rem)] leading-[1.65] text-[var(--muted)]">
              Choose your preferred channel.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-3 lg:grid-cols-3">
          <Reveal delay={70}>
            <ContactCard
              primary
              icon="message"
              label="Fastest response"
              title="WhatsApp"
              copy="Chat directly with our team and start with a simple question."
              href={WHATSAPP_URL}
              action="Chat Now"
            />
          </Reveal>

          <Reveal delay={140}>
            <ContactCard
              icon="mail"
              label="Detailed inquiry"
              title="Email"
              copy="Send the context, requirements, or documents that matter."
              href="#message"
              action="Send Email"
            />
          </Reveal>

          <Reveal delay={210}>
            <ContactCard
              icon="clock"
              label="30 min video call"
              title="Meeting"
              copy="Book time directly with a senior engineer. No obligation."
              href="#scheduler"
              action="Book Time"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Scheduler() {
  return (
    <section id="scheduler" className={`${SECTION} bg-[color:var(--card)]`}>
      <div className={CONTAINER}>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Meeting scheduler
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.2rem,5vw,4.6rem)] leading-[.95] tracking-[-.05em]">
              Pick a time that works.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)]">
              Available Monday–Friday, 9:00–19:00 CET. Your timezone should be detected automatically by the calendar provider.
            </p>

            <div className="mt-8 space-y-3">
              {[
                ['30 minutes', 'Focused video call'],
                ['Senior engineer', 'Not a sales pitch'],
                ['No obligation', 'Leave with a clear next step'],
              ].map(([title, copy]) => (
                <div key={title} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                    <Icon name="check" className="w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="text-xs text-[var(--muted)]">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="min-h-[500px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg)]">
              {CALENDAR_URL ? (
                <iframe
                  title="Book a meeting"
                  src={CALENDAR_URL}
                  className="h-[560px] w-full border-0"
                  loading="lazy"
                  allow="camera; microphone"
                />
              ) : (
                <div className="flex min-h-[500px] flex-col items-center justify-center px-6 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--accent-ink)]">
                    <Icon name="clock" className="w-6" />
                  </span>
                  <h3 className="mt-5 text-xl tracking-[-.02em]">Calendar embed ready</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
                    Set <code className="rounded bg-[color:var(--card)] px-1.5 py-0.5">VITE_CALENDAR_URL</code> to your Calendly or Cal.com embed URL.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-3 text-sm text-[var(--bg)]"
                  >
                    Prefer WhatsApp?
                    <Icon name="arrow" className="w-4" />
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DetailedContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="message" className={SECTION}>
      <div className={CONTAINER}>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Email inquiry
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.2rem,5vw,4.6rem)] leading-[.95] tracking-[-.05em]">
              Or send us details
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)]">
              Tell us enough to route your inquiry to the right team. The rest can happen in the conversation.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-5 sm:p-7"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
                    Name *
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
                    Email *
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
                    Company
                  </span>
                  <input
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
                    Phone
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
                  What do you need?
                </span>
                <select
                  name="service"
                  defaultValue=""
                  className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none focus:border-[var(--accent)]"
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[.1em] text-[var(--muted)]">
                  Project details
                </span>
                <textarea
                  name="details"
                  rows={5}
                  placeholder="What are you trying to build, fix, secure, or decide?"
                  className="w-full resize-y rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm leading-6 outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />
              </label>

              <button
                type="submit"
                className="mt-5 flex h-12 w-full items-center justify-between rounded-full bg-[var(--fg)] pl-5 pr-1.5 text-sm font-medium text-[var(--bg)]"
              >
                <span>{submitted ? 'Message received' : 'Send Message'}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                  <Icon name={submitted ? 'check' : 'arrow'} className="w-4" />
                </span>
              </button>

              {submitted && (
                <p className="mt-3 rounded-2xl border border-[var(--border)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
                  Thanks — connect this form to your API or CRM endpoint for production submissions.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function projectPoint(lat, lon) {
  const x = ((lon + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

function WorldMap({ selected, onSelect }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[color:var(--card)]">
      <svg
        viewBox="0 0 1000 500"
        className="h-auto min-h-[320px] w-full"
        role="img"
        aria-label="Interactive schematic world map showing nine TCG office locations"
      >
        <defs>
          <pattern id="contactMapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M50 0H0V50" fill="none" stroke="currentColor" strokeOpacity=".10" />
          </pattern>
          <filter id="contactMapGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1000" height="500" fill="url(#contactMapGrid)" />

        <path
          d="M80 108l55-45 94 15 67 42 5 44-40 23-23 54-55-17-13-42-48-31zm184 167l22 13 11 44-28 47-25-11 6-46zm95-82l49-20 19 17-15 24-41 11zm151-66l82-38 78 7 57 34-20 34-55 4-16 36-51 8-25-31-50 4zm84 93l70-9 41 26-22 34-62 6-43-19zm181-71l54-14 55 23 5 39-42 27-53-13-32-28zm69 96l44 14 20 29-39 25-42-12zm53-102l50-14 43 29-10 30-51 13-41-29z"
          className="fill-[color:var(--fg)/.08] stroke-[color:var(--fg)/.08]"
          strokeWidth="1"
        />

        <path
          d="M536 321l38 27 26 57-20 48-27-17-13-60-30-29zm-350-6l30 34 12 43-31 26-23-34zm-92-31l31 10 24 33-17 30-38-14-20-25z"
          className="fill-[color:var(--fg)/.045]"
        />

        {OFFICES.map((office) => {
          const point = projectPoint(office.lat, office.lon);
          const active = selected.city === office.city;
          return (
            <g
              key={office.city}
              transform={`translate(${point.x * 10}, ${point.y * 5})`}
              role="button"
              tabIndex="0"
              aria-label={`${office.city}, ${office.country}`}
              onClick={() => onSelect(office)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onSelect(office);
              }}
              className="cursor-pointer outline-none"
            >
              <circle
                r={active ? 17 : 12}
                className="fill-[var(--accent)] opacity-20 motion-safe:animate-pulse"
              />
              <circle
                r={active ? 7 : 5}
                className="fill-[var(--accent)]"
                filter="url(#contactMapGlow)"
              />
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute left-4 top-4 max-w-[220px] rounded-2xl border border-[var(--border)] bg-[color:var(--bg)/.9] px-4 py-3 backdrop-blur-md">
        <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--muted)]">
          Selected office
        </p>
        <p className="mt-1 text-base font-medium">{selected.city}</p>
        <p className="text-xs text-[var(--muted)]">{selected.country}</p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-[var(--border)] bg-[color:var(--bg)/.92] p-4 backdrop-blur-md">
        <div className="grid gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-ink)]">
            <Icon name="activity" className="w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold">{selected.city} · {selected.type}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {selected.hours} · {selected.address}
            </p>
          </div>
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 text-xs font-medium underline underline-offset-4"
          >
            {CONTACT_PHONE}
            <Icon name="arrow" className="w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function OfficesSection() {
  const [selected, setSelected] = useState(OFFICES[0]);

  return (
    <section id="offices" className={`${SECTION} bg-[color:var(--card)]`}>
      <div className={CONTAINER}>
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Global offices
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.2rem,5.5vw,4.8rem)] leading-[.95] tracking-[-.05em]">
              Visit us. Or we&apos;ll visit you.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {OFFICES.map((office) => (
                <button
                  key={office.city}
                  type="button"
                  onClick={() => setSelected(office)}
                  className={`rounded-full border px-4 py-2.5 text-left text-xs transition-colors ${
                    selected.city === office.city
                      ? 'border-transparent bg-[var(--accent)] font-medium text-[var(--accent-ink)]'
                      : 'border-[var(--border)] bg-[var(--bg)]'
                  }`}
                >
                  {office.city}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-8">
          <WorldMap selected={selected} onSelect={setSelected} />
        </Reveal>
      </div>
    </section>
  );
}

function ResponseExpectations() {
  const channels = [
    ['WhatsApp', 'Response in minutes', 'message'],
    ['Email', 'Response in under 4 hours', 'mail'],
    ['Meeting', 'Immediate confirmation', 'clock'],
  ];

  return (
    <section id="response" className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-[var(--muted)]">
              Response expectations
            </p>
            <h2 className="text-[clamp(2.1rem,5.2vw,4.6rem)] leading-none tracking-[-.05em]">
              What happens after you contact us?
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-3">
          {channels.map(([title, copy, icon], index) => (
            <Reveal key={title} delay={index * 80}>
              <div className="rounded-3xl border border-[var(--border)] bg-[color:var(--card)] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--fg)] text-[var(--bg)]">
                  <Icon name={icon} className="w-5" />
                </span>
                <h3 className="mt-7 text-xl tracking-[-.025em]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 rounded-3xl border border-[var(--border)] px-6 py-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
                Phone
              </p>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="mt-1 block text-lg font-medium">
                {CONTACT_PHONE}
              </a>
              <p className="mt-1 text-xs text-[var(--muted)]">Mon–Fri, 9:00–19:00 CET</p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--fg)] px-5 py-3 text-sm text-[var(--bg)]"
            >
              WhatsApp us
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                <Icon name="arrow" className="w-4" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <QuickContact />
      <Scheduler />
      <DetailedContactForm />
      <OfficesSection />
      <ResponseExpectations />

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-pulse { animation: none !important; }
        }
      `}</style>
    </>
  );
}
