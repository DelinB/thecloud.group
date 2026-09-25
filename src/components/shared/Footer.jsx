import React from 'react';
import { CONTAINER, BRAND_NAME } from './constants';
import { BrandMark } from './GlobalNav';

export function SiteFooter() {
  const services = [
    { label: 'Custom Software', href: '#' },
    { label: 'Tech Consulting', href: '#' },
    { label: 'AI Integration', href: '/' },
    { label: 'Architecture & Modernization', href: '#' },
    { label: 'Web & eCommerce', href: '#' },
    { label: 'Marketing & SEO', href: '#' },
    { label: 'Strategic Consulting', href: '#' }
  ];

  return (
    <footer className="relative bg-black text-white z-[1] overflow-hidden">
      <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] aspect-square rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent) 20%, transparent 70%)' }} />
      <div className={CONTAINER + ' py-[clamp(2.75rem,6vw,4rem)] flex flex-col gap-[clamp(2.5rem,5vw,3rem)] relative'}>
        <div className="flex flex-col lg:flex-row justify-between gap-[clamp(2.5rem,5vw,3rem)]">
          <div className="flex flex-col gap-3 max-w-xs">
            <a href="/" className="flex items-center gap-2.5 text-[14px]">
              <BrandMark variant="footer" />
            </a>
            <p className="text-[clamp(.78rem,.9vw,.88rem)] leading-[1.5] text-gray-400">
              AI that pays for itself. 4-week POCs on your own data — with guardrails, monitoring, and the Honesty Guarantee in writing.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="uppercase text-gray-400 text-sm tracking-tight">Services</h2>
            <div className="flex flex-col gap-1.5 text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">
              {services.map((s) => (
                <a key={s.label} href={s.href} className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="uppercase text-gray-400 text-sm tracking-tight">Contact</h2>
            <div className="flex flex-col gap-1.5 text-[clamp(.92rem,1.05vw,1.05rem)] leading-[1.55]">
              <a href="tel:+34660014818" className="hover:text-white transition-colors">+34 660 014 818</a>
              <a href="mailto:hello@example.com" className="hover:text-white transition-colors">hello@example.com</a>
              <a href="https://wa.me/34660014818" className="hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="pt-[clamp(2rem,4vw,2.5rem)] border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[clamp(.78rem,.9vw,.88rem)] leading-[1.5] text-gray-400">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
