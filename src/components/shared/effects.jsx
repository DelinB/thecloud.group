import React, { useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { Icon } from './Icon';



export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useSectionTabMemory(sections = []) {
  useEffect(() => {
    const tracked = sections
      .map((s) => ({ ...s, el: document.getElementById(s.id) }))
      .filter((s) => s.el);

    const io = new IntersectionObserver((entries) => {
      const best = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!best) return;
      const sec = tracked.find((s) => s.el === best.target);
      if (sec) document.title = `${sec.title} — TCG`;
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] });

    tracked.forEach((s) => io.observe(s.el));
    return () => io.disconnect();
  }, []);
}

export function useCountUp(target, duration = 1500) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(target); return;
    }
    let raf;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / duration, 1);
          setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      });
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [target, duration]);
  return [ref, val];
}

function BigCount() {
  const [ref, val] = useCountUp(85, 1500);
  return (
    <div ref={ref} className="leading-none tabular-nums text-[clamp(4.25rem,15vw,11rem)] tracking-[-.05em]">
      {val}<span style={{ fontSize: '.42em' }}>%</span>
    </div>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf;
    const on = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setP(max > 0 ? h.scrollTop / max : 0);
        raf = null;
      });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on, { passive: true });
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return <div aria-hidden className="scroll-progress" style={{ transform: 'scaleX(' + p + ')' }} />;
}

export function Atmosphere() {
  return (
    <React.Fragment>
      <div className="noise-overlay" aria-hidden />
      <div className="vignette" aria-hidden />
    </React.Fragment>
  );
}

export function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const fine   = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    const sync = () => {
      const on = fine.matches && !reduce.matches;
      setEnabled(on);
      document.documentElement.classList.toggle('custom-cursor-on', on);
    };
    sync();

    const add = (m, fn) => (m.addEventListener ? m.addEventListener('change', fn) : m.addListener(fn));
    const del = (m, fn) => (m.removeEventListener ? m.removeEventListener('change', fn) : m.removeListener(fn));
    add(fine, sync);
    add(reduce, sync);

    return () => {
      del(fine, sync);
      del(reduce, sync);
      document.documentElement.classList.remove('custom-cursor-on');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf = 0;
    let started = false;

    const show = () => {
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
    };
    const hide = () => {
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    };
    const place = (el, x, y) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!started) {
        started = true;
        rx = mx; ry = my;
        place(ring, rx, ry);
        show();
      }
      place(dot, mx, my);
    };

    const onOver = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest('input, textarea, select, [contenteditable="true"]')) {
        hide(); return;
      }
      show();
      const interactive = t.closest(
        'a, button, [role="button"], .chip, .ai-card, .svc-row, .process-card, label, summary'
      );
      dot.classList.toggle('hovered', !!interactive);
      ring.classList.toggle('hovered', !!interactive);
    };

    const onLeaveDoc = () => hide();
    const onEnterDoc = () => { if (started) show(); };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      place(ring, rx, ry);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeaveDoc);
    document.addEventListener('mouseenter', onEnterDoc);
    window.addEventListener('blur', hide);
    window.addEventListener('focus', onEnterDoc);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeaveDoc);
      document.removeEventListener('mouseenter', onEnterDoc);
      window.removeEventListener('blur', hide);
      window.removeEventListener('focus', onEnterDoc);
    };
  }, [enabled]);

  if (!enabled) return null;

  return createPortal(
    <React.Fragment>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </React.Fragment>,
    document.body
  );
}

export function Magnetic({ children, className, href, strength = 0.2, style, ...rest }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };
  const Cmp = href ? 'a' : 'button';
  return (
    <Cmp ref={ref} href={href} className={className} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: 'transform .4s cubic-bezier(.22,1,.36,1)', ...style }} {...rest}>
      {children}
    </Cmp>
  );
}

export function SplitLines({ lines, startDelay = 100 }) {
  return (
    <React.Fragment>
      {lines.map((line, i) => (
        <span key={i} className="split-line" style={{ '--wd': (startDelay + i * 130) + 'ms' }}>
          <span>{line}</span>
        </span>
      ))}
    </React.Fragment>
  );
}

export function MarqueeHeader({ text }) {
  return (
    <div className="marquee-mask w-full py-[clamp(.75rem,2vw,1.5rem)]" data-reveal>
      <div className="marquee-track slow">
        {[0, 1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <h2 className="uppercase whitespace-nowrap text-[clamp(3rem,12vw,11rem)] leading-[.9] tracking-[-.06em]"
              style={{ color: 'var(--fg)', opacity: .92 }}>{text}</h2>
            <span className="w-4 h-4 md:w-7 md:h-7 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}