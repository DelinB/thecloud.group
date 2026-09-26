// // seo.config.js
// // Central place for every page's SEO + Open Graph data.
// // Used by scripts/prerender-seo.js at build time.

// // Set SITE_URL when you deploy. Locally it falls back to localhost.
// export const SITE_URL =
//   process.env.SITE_URL || 'https://thecloud-group.vercel.app/';

// export const SITE_NAME = 'The Cloud Group';

// export const DEFAULT_IMAGE = 'og/home.jpg';

// export const PAGES = [
//   {
//     path: '/',
//     title: 'The Cloud Group | Custom Software That Ships On Time',
//     description:
//       "We build custom software that ships on time — or you don't pay. 15+ years, 2,000+ projects, 9 countries.",
//     image: 'og/favicon.svg',
//     type: 'website',
//   },
//   {
//     path: '/custom-software',
//     title: 'Custom Software Development | The Cloud Group',
//     description:
//       'ERP, CRM, mobile apps, and SaaS platforms built to spec. Architecture-first delivery.',
//     image: 'og/favicon.svg',
//     type: 'website',
//   },
//   {
//     path: '/ai-integration',
//     title: 'AI Integration Services | The Cloud Group',
//     description:
//       'AI agents, chatbots, and ML/NLP systems integrated into your business workflows.',
//     image: 'og/favicon.svg',
//     type: 'website',
//   },
//   {
//     path: '/tech-consulting',
//     title: 'Technology Consulting | The Cloud Group',
//     description:
//       'Strategic digital transformation, process analysis, and technical due diligence.',
//     image: 'og/favicon.svg',
//     type: 'website',
//   },
//   {
//     path: '/cybersecurity',
//     title: 'Cybersecurity Services | The Cloud Group',
//     description:
//       'Security audits, hardening, and compliance for growing companies.',
//     image: 'og/favicon.svg',
//     type: 'website',
//   },
//   {
//     path: '/insights',
//     title: 'Insights & Articles | The Cloud Group',
//     description:
//       'Engineering notes, architecture decisions, and delivery lessons from real projects.',
//     image: 'og/favicon.svg',
//     type: 'website',
//   },
//   {
//     path: '/contact',
//     title: 'Contact | The Cloud Group',
//     description:
//       'Book a free consultation. 2 hours, no obligation, no sales pitch. Just answers.',
//     image: 'og/favicon.svg',
//     type: 'website',
//   },
// ];



// seo.config.js
export const SITE_URL =
 process.env.SITE_URL || 'https://thecloud-group.vercel.app/';

export const SITE_NAME = 'The Cloud Group';

export const DEFAULT_IMAGE = 'og/favicon.svg';

export const PAGES = [
  {
    path: '/',
    title: 'The Cloud Group | Custom Software That Ships On Time',
    description:
      "We build custom software that ships on time — or you don't pay.",
    image: 'og/favicon.svg',
    type: 'website',
    // ↓ Real content Google can index
    h1: 'Custom software that ships on time — or you don’t pay',
    intro:
      'The Cloud Group is a custom software partner with 15+ years of delivery, 2,000+ projects, and teams across 9 countries. We build enterprise platforms, AI integrations, and systems engineering for companies that outgrow spreadsheets.',
    bullets: [
      'Architecture-first delivery — no code without a plan',
      'Written guarantees: on-time or 100% refund',
      'Local teams in Madrid, Dubai, Malabo, Pereira, and more',
      'TCG-SAF™ methodology for predictable delivery',
    ],
  },
  {
    path: '/custom-software',
    title: 'Custom Software Development | The Cloud Group',
    description:
      'ERP, CRM, mobile apps, and SaaS platforms built to spec.',
    image: 'og/favicon.svg',
    type: 'website',
    h1: 'Custom software development',
    intro:
      'We design and build ERP, CRM, mobile apps, and SaaS platforms around how your business actually runs — not around a template.',
    bullets: [
      'ERP and CRM systems tailored to your workflows',
      'Native and cross-platform mobile applications',
      'SaaS platforms with multi-tenant architecture',
      'Legacy modernization and cloud migration',
    ],
  },
  {
    path: '/ai-integration',
    title: 'AI Integration Services | The Cloud Group',
    description:
      'AI agents, chatbots, and ML/NLP systems integrated into your business workflows.',
    image: 'og/favicon.svg',
    type: 'website',
    h1: 'AI integration services',
    intro:
      'We integrate AI agents, chatbots, and machine learning models into the tools your team already uses — no rip-and-replace required.',
    bullets: [
      'Conversational AI and customer support agents',
      'Document processing and OCR pipelines',
      'Recommendation and ranking systems',
      'LLM integration with your internal data',
    ],
  },
  {
    path: '/tech-consulting',
    title: 'Technology Consulting | The Cloud Group',
    description:
      'Strategic digital transformation, process analysis, and technical due diligence.',
    image: 'og/favicon.svg',
    type: 'website',
    h1: 'Technology consulting',
    intro:
      'Strategic guidance for companies making their first major technology investment — or fixing the one they already made.',
    bullets: [
      'Digital transformation roadmaps',
      'Process analysis and workflow mapping',
      'Technical due diligence for M&A and investors',
      'Architecture reviews and modernization plans',
    ],
  },
  {
    path: '/cybersecurity',
    title: 'Cybersecurity Services | The Cloud Group',
    description:
      'Security audits, hardening, and compliance for growing companies.',
    image: 'og/favicon.svg',
    type: 'website',
    h1: 'Cybersecurity services',
    intro:
      'Practical security work for companies without a dedicated security team. Audits, hardening, and compliance without the enterprise price tag.',
    bullets: [
      'Security audits and penetration testing',
      'Application and infrastructure hardening',
      'ISO 27001 and SOC 2 readiness',
      'Incident response planning',
    ],
  },
  {
    path: '/insights',
    title: 'Insights & Articles | The Cloud Group',
    description:
      'Engineering notes, architecture decisions, and delivery lessons from real projects.',
    image: 'og/favicon.svg',
    type: 'website',
    h1: 'Insights and articles',
    intro:
      'Engineering notes, architecture decisions, and delivery lessons written by the team actually shipping the work.',
    bullets: [
      'Architecture patterns from real client projects',
      'Delivery process notes from TCG-SAF™ engagements',
      'Post-mortems and lessons learned',
      'Tooling and stack decisions explained',
    ],
  },
  {
    path: '/contact',
    title: 'Contact | The Cloud Group',
    description:
      'Book a free consultation. 2 hours, no obligation, no sales pitch.',
    image: 'og/favicon.svg',
    type: 'website',
    h1: 'Contact The Cloud Group',
    intro:
      'Book a free 2-hour consultation. No obligation, no sales pitch — just answers to whatever you’re trying to figure out.',
    bullets: [
      'Email and phone response within one business day',
      'WhatsApp for quick questions',
      'In-person meetings in Madrid, Marbella, and Dubai',
      'Free technical assessment for qualifying projects',
    ],
  },
];