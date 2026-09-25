/* ------------------------------------------------------------------
   Conversation trees, one per page.
   Engine walks: messages → buttons/input → next
   Actions: 'whatsapp' | 'book' | 'end' | 'navigate'
------------------------------------------------------------------ */

const WHATSAPP_NUMBER = '34660014818';

export const PAGE_KEYS = {
  '/': 'home',
  '/custom-software': 'customSoftware',
  '/tech-consulting': 'techConsulting',
  '/ai-integration': 'aiIntegration',
  '/cybersecurity': 'cybersecurity',
  '/insights': 'insights',
  '/contact': 'contact',
};

export function resolvePageKey(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean.startsWith('/insights')) return 'insights';
  return PAGE_KEYS[clean] || 'home';
}

const WHATSAPP = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/* ==================================================================
   HOME
================================================================== */
const home = {
  start: 'intro',
  nodes: {
    intro: {
      messages: [
        "Hi. I'm Cloud — The Cloud Group's AI assistant.",
        "I can help you figure out if we're a fit for your project, or connect you with a senior engineer right now.",
        'What brings you here today?',
      ],
      buttons: [
        { label: 'I need software built', next: 'software' },
        { label: 'I need AI/Automation', next: 'ai' },
        { label: 'My project is stuck', next: 'stuck' },
        { label: 'Just exploring', next: 'explore' },
      ],
    },

    software: {
      messages: [
        "Got it. Custom software is our core — ERP, CRM, mobile apps, SaaS platforms.",
        "Quick question: what's driving this right now?",
      ],
      buttons: [
        { label: 'Excel/spreadsheets no longer work', next: 'captureEmail' },
        { label: 'Current software is too limited', next: 'captureEmail' },
        { label: 'Starting something new', next: 'captureEmail' },
        { label: 'Type answer...', input: true, next: 'captureEmail' },
      ],
    },

    ai: {
      messages: [
        'Good. AI is where most companies are wasting money right now — and where a few are saving millions.',
        "I'll be honest: it depends on the process. Let me get a senior engineer to look at yours.",
      ],
      buttons: [
        { label: 'Book the free assessment', next: 'captureEmail' },
        { label: 'Show me AI case studies', action: 'navigate', href: '/ai-integration' },
      ],
    },

    stuck: {
      messages: [
        "That's more common than you'd think. We've rescued 90+ projects exactly like this.",
        'A 10-day audit tells you what to salvage, what to rewrite, and what to stop.',
        'Want me to set up a call with a senior engineer?',
      ],
      buttons: [
        { label: 'Yes, book a call', next: 'captureEmail' },
        { label: 'Tell me more about the audit', action: 'navigate', href: '/tech-consulting' },
      ],
    },

    explore: {
      messages: [
        'Fair enough. Take your time.',
        'If you want, I can send you one email with the three case studies most people find useful — no pitch, just the numbers.',
      ],
      buttons: [
        { label: 'Send me the case studies', next: 'captureEmail' },
        { label: "No thanks, I'm good", action: 'end' },
      ],
    },

    captureEmail: {
      messages: ["Perfect. What's the best email to reach you?"],
      input: { type: 'email', placeholder: 'you@company.com', field: 'email' },
      next: 'capturePhone',
    },

    capturePhone: {
      messages: ['And a phone number (for the call invite)?'],
      input: { type: 'tel', placeholder: '+34 600 000 000', field: 'phone' },
      next: 'confirm',
    },

    confirm: {
      messages: [
        'Done.',
        'A senior engineer will contact you within 4 hours to schedule your free consultation.',
        "You'll also get a confirmation email right now.",
        'In the meantime, want to see what we’ve built for companies like yours?',
      ],
      buttons: [
        { label: 'Show me case studies', action: 'navigate', href: '/insights' },
        { label: "No thanks, I'm good", action: 'end' },
      ],
    },
  },
};

/* ==================================================================
   CUSTOM SOFTWARE
================================================================== */
const customSoftware = {
  start: 'intro',
  nodes: {
    intro: {
      messages: ["You're on our Custom Software page.", "I'm guessing one of these is you:"],
      buttons: [
        { label: "I'm replacing spreadsheets/legacy software", next: 'replace' },
        { label: 'I need an ERP/CRM built', next: 'erp' },
        { label: 'Comparing you vs Salesforce/SAP', next: 'compare' },
        { label: 'I have questions about the process', next: 'process' },
      ],
    },

    compare: {
      messages: [
        "Smart comparison. Here's the honest breakdown:",
        'Salesforce/SAP: monthly per-user fees, forever. You adapt to their workflow. Scales = costs more. They own the code.',
        'Custom (us): one-time investment. Software adapts to your workflow. Scales without artificial limits. You own the code.',
      ],
      buttons: [
        { label: 'Show 5-year cost comparison', next: 'cost' },
        { label: 'What about maintenance?', next: 'maintenance' },
        { label: 'Book a call to discuss', next: 'captureEmail' },
      ],
    },

    cost: {
      messages: [
        '20 users, 5 years:',
        'Salesforce → Year 1 ~€24,000. Year 5 cumulative ~€120,000+. You own: nothing.',
        'Custom → Year 1 ~€40–60K (one-time). Year 5 cumulative ~€40–60K. You own: the entire system.',
        'Break-even: year 2–3. Savings by year 5: €60,000+.',
      ],
      buttons: [
        { label: 'Book a call to get exact numbers', next: 'captureEmail' },
        { label: 'What if I scale to 100 users?', next: 'scale' },
      ],
    },

    scale: {
      messages: [
        "That's where the gap widens.",
        'Salesforce at 100 users: ~€600,000 over 5 years. Custom: same €40–60K build, plus hosting.',
        'The more you grow, the better custom looks.',
      ],
      buttons: [
        { label: 'Book a call', next: 'captureEmail' },
        { label: 'Show me case studies', action: 'navigate', href: '/insights' },
      ],
    },

    maintenance: {
      messages: [
        'Maintenance on custom software typically runs 15–20% of build cost per year.',
        "That's still less than 5 years of SaaS fees at 20 users — and you keep the asset.",
      ],
      buttons: [
        { label: 'Book a call', next: 'captureEmail' },
        { label: 'Show me the cost comparison', next: 'cost' },
      ],
    },

    replace: {
      messages: [
        'Classic. Usually it means the process outgrew the tool.',
        'We design the new system around how you actually work — not a template.',
        'Want to walk through it with a senior engineer?',
      ],
      buttons: [
        { label: 'Yes, book a call', next: 'captureEmail' },
        { label: 'See process timeline', action: 'navigate', href: '/#process' },
      ],
    },

    erp: {
      messages: [
        'ERP and CRM are 60% of what we build.',
        'No per-user fees. No SaaS lock-in. You own the code.',
        'Want to talk specifics?',
      ],
      buttons: [
        { label: 'Book a call', next: 'captureEmail' },
        { label: 'Show me examples', action: 'navigate', href: '/#solutions' },
      ],
    },

    process: {
      messages: [
        'Day 0: free consult. Week 1–2: architecture (TCG-SAF™). Then 2-week sprints with demos. Launch: you own the code.',
        'Storm Guarantee throughout — if you don’t like it, 100% refund.',
      ],
      buttons: [
        { label: 'Book the free consult', next: 'captureEmail' },
        { label: 'See the full timeline', action: 'navigate', href: '/#process' },
      ],
    },

    captureEmail: {
      messages: ["Perfect. What's the best email to reach you?"],
      input: { type: 'email', placeholder: 'you@company.com', field: 'email' },
      next: 'capturePhone',
    },

    capturePhone: {
      messages: ['And a phone number for the call invite?'],
      input: { type: 'tel', placeholder: '+34 600 000 000', field: 'phone' },
      next: 'confirm',
    },

    confirm: {
      messages: [
        'All set.',
        'A senior engineer will reach out within 4 hours.',
        'Want to also connect on WhatsApp for a faster reply?',
      ],
      buttons: [
        {
          label: 'Yes, WhatsApp me',
          action: 'whatsapp',
          whatsappText:
            "Hi, I was on your Custom Software page and I'd like to talk about a project.",
        },
        { label: 'Email is fine', action: 'end' },
      ],
    },
  },
};

/* ==================================================================
   TECH CONSULTING
================================================================== */
const techConsulting = {
  start: 'intro',
  nodes: {
    intro: {
      messages: [
        "You're looking at our Tech Consulting page.",
        'This is for when your project is stuck, you need an independent audit, or you’re evaluating vendors.',
        "What's your situation?",
      ],
      buttons: [
        { label: 'My project is stuck/broken', next: 'stuck' },
        { label: 'I need a technical audit', next: 'audit' },
        { label: "I'm choosing between vendors", next: 'vendors' },
        { label: "My AI project isn't working", next: 'aiStuck' },
      ],
    },

    stuck: {
      messages: [
        'Unfortunately common. Good news: we’ve rescued 90+ projects exactly like this.',
        'Our 10-day audit tells you what can be salvaged, what needs rewriting, what should be stopped, and what it’ll cost to fix.',
        'All in writing. Defensible to your board.',
      ],
      buttons: [
        { label: 'How much is the audit?', next: 'auditPrice' },
        { label: "What if you say it can't be saved?", next: 'cantSave' },
        { label: 'Book the audit', next: 'captureEmail' },
      ],
    },

    cantSave: {
      messages: [
        'Then we tell you that. In writing.',
        "We don't charge extra for bad news — the price is fixed regardless of outcome.",
        "If the project truly can't be saved, we'll recommend how to redirect, or point you to someone better suited.",
        "We'd rather have an informed non-client than a disappointed client.",
      ],
      buttons: [
        { label: 'Book the 10-day audit', next: 'captureEmail' },
        { label: 'How much is it?', next: 'auditPrice' },
      ],
    },

    auditPrice: {
      messages: [
        'Technical audits start at €4K for a focused scope, €9K for a full-system review.',
        'Fixed price. Delivered in writing. No surprises.',
      ],
      buttons: [
        { label: 'Book the audit', next: 'captureEmail' },
        { label: 'Talk to a consultant first', next: 'captureEmail' },
      ],
    },

    audit: {
      messages: [
        'Good instinct. Most companies wait too long.',
        '10 days. Fixed price. Written report you can take to your board.',
      ],
      buttons: [
        { label: 'How much is it?', next: 'auditPrice' },
        { label: 'Book it', next: 'captureEmail' },
      ],
    },

    vendors: {
      messages: [
        "We don't do this often, but when we do, it saves clients six figures.",
        "We review the proposals, model the real cost over 3–5 years, and tell you which vendor actually fits.",
        'Independent. No kickbacks. No vendor relationships.',
      ],
      buttons: [
        { label: 'Book a vendor review', next: 'captureEmail' },
        { label: 'See an example', action: 'navigate', href: '/insights/architecture-review-saved-400k' },
      ],
    },

    aiStuck: {
      messages: [
        "Common. Most AI projects fail at the integration layer, not the model.",
        'We audit the whole pipeline: data quality, model choice, evaluation, deployment.',
        'Want to talk it through?',
      ],
      buttons: [
        { label: 'Book a call', next: 'captureEmail' },
        { label: 'See AI case studies', action: 'navigate', href: '/ai-integration' },
      ],
    },

    captureEmail: {
      messages: ["What's the best email to reach you?"],
      input: { type: 'email', placeholder: 'you@company.com', field: 'email' },
      next: 'capturePhone',
    },

    capturePhone: {
      messages: ['And a phone number?'],
      input: { type: 'tel', placeholder: '+34 600 000 000', field: 'phone' },
      next: 'confirm',
    },

    confirm: {
      messages: [
        'Got it.',
        'A senior engineer will reach out within 4 hours to schedule the call.',
        'Anything else I can help with right now?',
      ],
      buttons: [
        {
          label: 'WhatsApp me instead',
          action: 'whatsapp',
          whatsappText:
            "Hi, I was on your Tech Consulting page and my project needs help.",
        },
        { label: "No, that's all", action: 'end' },
      ],
    },
  },
};

/* ==================================================================
   AI INTEGRATION
================================================================== */
const aiIntegration = {
  start: 'intro',
  nodes: {
    intro: {
      messages: [
        "I'm an example of the AI agents we build.",
        "(Clever, right? You're literally talking to one.)",
        'Want to see what AI could do for YOUR business?',
      ],
      buttons: [
        { label: 'Show me where AI fits my business', next: 'fit' },
        { label: 'How much does AI integration cost?', next: 'cost' },
        { label: "What's this 4-week POC?", next: 'poc' },
        { label: "I'm just learning/exploring", next: 'explore' },
      ],
    },

    poc: {
      messages: [
        'POC = Proof of Concept.',
        'Week 1: we analyze your processes, find where AI generates ROI (and where it doesn’t).',
        'Week 2: we design the roadmap with quick wins first.',
        'Week 3: we build it using YOUR data.',
        'Week 4: you see a working AI demo. Real, not slides.',
        "If the POC doesn't show value, you don't pay. That's the Storm Guarantee applied to AI.",
      ],
      buttons: [
        { label: 'What results have you gotten?', next: 'results' },
        { label: 'Book the free 2-hour assessment', next: 'captureEmail' },
      ],
    },

    results: {
      messages: [
        'A few examples:',
        'Cultural Fit (HR SaaS): +340% conversion, 50K users on platform.',
        'NaviCRM (Logistics): -60% management time, 4-year ongoing partnership.',
        'SISCOVA (Petroleum): €2.4M annual savings, 100% operational digitization.',
      ],
      buttons: [
        { label: 'Show me more case studies', action: 'navigate', href: '/insights' },
        { label: 'Book the free assessment', next: 'captureEmail' },
      ],
    },

    cost: {
      messages: [
        "Depends on scope. Here's the honest range:",
        'AI POC: €10–20K. Full integration: €30–80K+. Ongoing: depends on volume.',
        'The 30-min assessment tells you the exact number.',
      ],
      buttons: [
        { label: 'Book the free assessment', next: 'captureEmail' },
        { label: 'Why no public pricing?', next: 'whyPricing' },
      ],
    },

    whyPricing: {
      messages: [
        'Because every AI project depends on your data, your processes, and your integration points.',
        'A number without that context is a lie.',
      ],
      buttons: [{ label: 'Book the free assessment', next: 'captureEmail' }],
    },

    fit: {
      messages: [
        "Three areas where AI usually pays back fastest:",
        '1. Document-heavy workflows (contracts, claims, forms).',
        '2. Customer-facing support at scale.',
        '3. Data pipelines that currently require manual review.',
        'If any of those sound like you, the free assessment will tell you if it’s worth it.',
      ],
      buttons: [
        { label: 'Book the free assessment', next: 'captureEmail' },
        { label: 'How much does it cost?', next: 'cost' },
      ],
    },

    explore: {
      messages: [
        'No pressure. AI is a big topic.',
        'I can send you one email with the three things every company should know before starting an AI project.',
      ],
      buttons: [
        { label: 'Send it', next: 'captureEmail' },
        { label: "No thanks", action: 'end' },
      ],
    },

    captureEmail: {
      messages: ["What's the best email to reach you?"],
      input: { type: 'email', placeholder: 'you@company.com', field: 'email' },
      next: 'capturePhone',
    },

    capturePhone: {
      messages: ['And a phone number for the assessment invite?'],
      input: { type: 'tel', placeholder: '+34 600 000 000', field: 'phone' },
      next: 'confirm',
    },

    confirm: {
      messages: [
        'Done.',
        'A senior engineer will reach out within 4 hours to schedule the assessment.',
        "You'll get a confirmation email now.",
      ],
      buttons: [
        {
          label: 'WhatsApp me faster',
          action: 'whatsapp',
          whatsappText:
            "Hi, I was on your AI Integration page and I'd like the free assessment.",
        },
        { label: "I'm good for now", action: 'end' },
      ],
    },
  },
};

/* ==================================================================
   CYBERSECURITY
================================================================== */
const cybersecurity = {
  start: 'intro',
  nodes: {
    intro: {
      messages: [
        'Security page — this is serious stuff.',
        'I can help you figure out what you actually need, or connect you to a security specialist.',
        "What's your concern?",
      ],
      buttons: [
        { label: "I don't know what vulnerabilities I have", next: 'unknown' },
        { label: 'Compliance deadline (GDPR/ISO/NIS2)', next: 'compliance' },
        { label: "We implemented AI and I'm worried", next: 'ai' },
        { label: 'General security checkup', next: 'checkup' },
      ],
    },

    compliance: {
      messages: [
        'Compliance deadlines are stressful. We help with:',
        'ENS (Spain). ISO 27001 (International). GDPR (EU). NIS2 (EU).',
        'We analyze your current state, identify gaps, and create a prioritized remediation plan.',
        'Which regulation is your concern?',
      ],
      buttons: [
        { label: 'GDPR', next: 'complianceNext' },
        { label: 'ISO 27001', next: 'complianceNext' },
        { label: 'NIS2', next: 'complianceNext' },
        { label: 'ENS', next: 'complianceNext' },
        { label: 'Multiple deadlines', next: 'complianceNext' },
      ],
    },

    complianceNext: {
      messages: [
        'Understood.',
        'The first step is a compliance gap assessment. It tells you exactly where you stand and what needs to be done by when.',
        'Want to schedule a call with a security specialist who can tell you what’s involved?',
      ],
      buttons: [
        { label: 'Yes, book a security call', next: 'captureEmail' },
        { label: 'How long does an assessment take?', next: 'timeline' },
        { label: "What if we're already non-compliant?", next: 'nonCompliant' },
      ],
    },

    timeline: {
      messages: [
        'Typically 2–4 weeks depending on scope.',
        'You get a written report with a prioritized plan you can hand to your board or auditor.',
      ],
      buttons: [
        { label: 'Book a security call', next: 'captureEmail' },
        { label: "What if we're non-compliant?", next: 'nonCompliant' },
      ],
    },

    nonCompliant: {
      messages: [
        "You're not alone. Most companies we see are partially non-compliant.",
        "The point of the assessment isn't to shame you — it's to give you a defensible plan.",
      ],
      buttons: [{ label: 'Book a security call', next: 'captureEmail' }],
    },

    unknown: {
      messages: [
        "That's exactly what a vulnerability assessment is for.",
        'We scan, test, and tell you what actually matters — not a 200-page report nobody reads.',
      ],
      buttons: [
        { label: 'Book a security call', next: 'captureEmail' },
        { label: 'How much does it cost?', next: 'cost' },
      ],
    },

    ai: {
      messages: [
        'Good instinct. AI systems introduce new attack surfaces — prompt injection, data leakage, model poisoning.',
        'We audit AI deployments specifically for these risks.',
      ],
      buttons: [
        { label: 'Book a security call', next: 'captureEmail' },
        { label: 'Learn more', action: 'navigate', href: '/ai-integration' },
      ],
    },

    checkup: {
      messages: [
        'Smart. Most breaches come from basics — misconfigured access, unpatched systems, weak monitoring.',
        'A checkup covers all of it in one pass.',
      ],
      buttons: [
        { label: 'Book a security call', next: 'captureEmail' },
        { label: 'How much does it cost?', next: 'cost' },
      ],
    },

    cost: {
      messages: [
        'Security assessments start at €5K for a focused scope, €12K+ for full audits.',
        'Fixed price. Written report. Prioritized plan.',
      ],
      buttons: [{ label: 'Book a security call', next: 'captureEmail' }],
    },

    captureEmail: {
      messages: ["What's the best email to reach you?"],
      input: { type: 'email', placeholder: 'you@company.com', field: 'email' },
      next: 'capturePhone',
    },

    capturePhone: {
      messages: ['And a phone number for the security specialist?'],
      input: { type: 'tel', placeholder: '+34 600 000 000', field: 'phone' },
      next: 'confirm',
    },

    confirm: {
      messages: [
        'Done.',
        'A security specialist will reach out within 4 hours.',
        'Anything else before you go?',
      ],
      buttons: [
        {
          label: 'WhatsApp me',
          action: 'whatsapp',
          whatsappText:
            "Hi, I was on your Cybersecurity page and I'd like a security consultation.",
        },
        { label: "That's all", action: 'end' },
      ],
    },
  },
};

/* ==================================================================
   INSIGHTS
================================================================== */
const insights = {
  start: 'intro',
  nodes: {
    intro: {
      messages: [
        'Reading our insights?',
        "I can answer questions about anything we've published, or help you apply these concepts to your business.",
      ],
      buttons: [
        { label: 'I have a question about an article', next: 'question' },
        { label: 'How do I implement this in my company?', next: 'implement' },
        { label: 'Just browsing, thanks', action: 'end' },
      ],
    },

    implement: {
      messages: [
        "That's exactly what our free consultation is designed for.",
        '2 hours with a senior engineer: we analyze your situation, tell you what applies and what doesn’t, give you a roadmap with costs.',
        'No obligation. No sales pitch.',
      ],
      buttons: [
        { label: 'Book the free consultation', next: 'captureEmail' },
        { label: 'Can you answer a question first?', next: 'question' },
      ],
    },

    question: {
      messages: [
        "Sure — type your question and I'll do my best. If I can't answer it, I'll connect you to someone who can.",
      ],
      input: { type: 'text', placeholder: 'Ask anything…', field: 'question' },
      next: 'questionFollowup',
    },

    questionFollowup: {
      messages: [
        "Thanks. If I can't answer that precisely, the fastest path is a 30-min call with a senior engineer.",
        'Want me to set that up?',
      ],
      buttons: [
        { label: 'Yes, book it', next: 'captureEmail' },
        { label: 'WhatsApp instead', action: 'whatsapp', whatsappText: "Hi, I have a question about one of your articles." },
      ],
    },

    captureEmail: {
      messages: ["What's the best email to reach you?"],
      input: { type: 'email', placeholder: 'you@company.com', field: 'email' },
      next: 'capturePhone',
    },

    capturePhone: {
      messages: ['And a phone number?'],
      input: { type: 'tel', placeholder: '+34 600 000 000', field: 'phone' },
      next: 'confirm',
    },

    confirm: {
      messages: [
        'Got it.',
        'A senior engineer will reach out within 4 hours.',
        'Anything else?',
      ],
      buttons: [
        { label: 'WhatsApp me', action: 'whatsapp', whatsappText: "Hi, I was reading your insights and I'd like to talk." },
        { label: "I'm good", action: 'end' },
      ],
    },
  },
};

/* ==================================================================
   CONTACT
================================================================== */
const contact = {
  start: 'intro',
  nodes: {
    intro: {
      messages: [
        'Hi! I can help you fill out the form, or connect you right now.',
        "What's faster for you?",
      ],
      buttons: [
        { label: 'Connect via WhatsApp now', action: 'whatsapp', whatsappText: "Hi, I'd like to talk to someone about a project." },
        { label: 'Help me fill the form', next: 'askName' },
        { label: "I'll use the form myself", action: 'end' },
      ],
    },

    askName: {
      messages: ["Easy. What's your name?"],
      input: { type: 'text', placeholder: 'Your name', field: 'name' },
      next: 'askEmail',
    },

    askEmail: {
      messages: ["Thanks. What's your email?"],
      input: { type: 'email', placeholder: 'you@company.com', field: 'email' },
      next: 'askTopic',
    },

    askTopic: {
      messages: ['Perfect. What do you need help with?'],
      buttons: [
        { label: 'Custom Software', next: 'askTiming' },
        { label: 'AI Integration', next: 'askTiming' },
        { label: 'Tech Consulting', next: 'askTiming' },
        { label: 'Cybersecurity', next: 'askTiming' },
        { label: 'Not sure yet', next: 'askTiming' },
      ],
    },

    askTiming: {
      messages: ['Got it. One more thing — when would you like to be contacted?'],
      buttons: [
        { label: 'ASAP (within 4 hours)', next: 'done' },
        { label: 'Today', next: 'done' },
        { label: 'Tomorrow', next: 'done' },
        { label: 'This week', next: 'done' },
      ],
    },

    done: {
      messages: [
        "All set! I've filled the form for you.",
        'A senior engineer will reach out shortly.',
        'Want me to also connect you via WhatsApp for a faster response?',
      ],
      buttons: [
        { label: 'Yes, WhatsApp me', action: 'whatsapp', whatsappText: "Hi, I just filled out the contact form." },
        { label: 'No, email is fine', action: 'end' },
      ],
    },
  },
};

/* ==================================================================
   TRIGGERS (exit intent, FAQ, pricing)
================================================================== */
export const TRIGGERS = {
  exitIntent: {
    messages: [
      'Before you go —',
      'Would a free 30-min consultation with a senior engineer be useful? No pitch, no obligation.',
    ],
    buttons: [
      { label: 'Yes, book it', next: 'captureEmail' },
      { label: 'No, just exploring', action: 'end' },
      { label: 'Send me info instead', next: 'captureEmail' },
    ],
  },
};

export const FLOWS = {
  home,
  customSoftware,
  techConsulting,
  aiIntegration,
  cybersecurity,
  insights,
  contact,
};

export { WHATSAPP };