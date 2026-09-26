import React, { useEffect, useRef, useState, useCallback } from 'react';
import { CONTAINER, BRAND_NAME } from './constants';
import { Icon } from './Icon';
import { useTheme } from './theme';

const GLOBAL_NAV_LINKS = [
  // { label: 'Home', href: '/' },
  { label: 'Custom Software', href: '/custom-software' },
  { label: 'AI Integration', href: '/ai-integration' },
  { label: 'Tech Consulting', href: '/tech-consulting' },
  { label: 'Cybersecurity', href: '/cybersecurity' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

/* ------------------------------------------------------------------ */
/*  BOTTOM NAV — 5 primary tabs on mobile / tablet                     */
/* ------------------------------------------------------------------ */

const BOTTOM_LINKS = [
  { label: 'Software', href: '/custom-software', icon: 'code' },
  { label: 'AI', href: '/ai-integration', icon: 'spark' },
  { label: 'Tech', href: '/tech-consulting', icon: 'compass' },
  { label: 'Cyber', href: '/cybersecurity', icon: 'shield' },
  { label: 'Contact', href: '/contact', icon: 'chat' },
];

/* ------------------------------------------------------------------ */
/*  INLINE SVG ICONS                                                   */
/* ------------------------------------------------------------------ */

function DockIcon({ name, className = 'w-[20px] h-[20px]' }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };

  switch (name) {
    case 'code':
      return (
        <svg {...common}>
          <path d="m8 6-6 6 6 6" />
          <path d="m16 6 6 6-6 6" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...common}>
          <path d="M12 3 13.6 8.4 19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
        </svg>
      );
    case 'compass':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2Z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...common}>
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 22l2.1-6.3A8.4 8.4 0 1 1 21 11.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  BRAND MARK                                                         */
/* ------------------------------------------------------------------ */

export function BrandMark({ variant = 'default' }) {
  const isFooter = variant === 'footer';

  return (
    <img
      src="/favicon.svg"
      alt={BRAND_NAME || 'The Cloud Group'}
      className="brand-logo block w-auto shrink-0 select-none"
      style={{ height: isFooter ? 30 : 34 }}
      draggable={false}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  THEME TRANSITION — center-out circle reveal                        */
/*                                                                     */
/*  Uses the View Transitions API when available. Falls back to a      */
/*  plain class flip on unsupported browsers or reduced-motion.        */
/* ------------------------------------------------------------------ */

const THEME_VT_DURATION = 600; // ms

/**
 * Compute the collapsed → expanded clip-path pair.
 * The reveal always opens from the CENTER of the viewport.
 * Coordinates are in percentages of the snapshot reference box
 * (Chrome mis-renders px values under fractional display scales).
 */
function getThemeClipPaths(vw, vh) {
  const cx = vw / 2;
  const cy = vh / 2;

  // Max radius that must be covered to reach every corner from the center.
  const maxRadius = Math.hypot(vw / 2, vh / 2);

  const toX = (x) => `${(x / vw) * 100}%`;
  const toY = (y) => `${(y / vh) * 100}%`;
  const point = (x, y) => `${toX(x)} ${toY(y)}`;

  // circle() percentage radii resolve against hypot(w,h)/sqrt(2).
  const toRadius = (r) =>
    `${(r / (Math.hypot(vw, vh) / Math.SQRT2)) * 100}%`;

  return [
    `circle(0% at ${point(cx, cy)})`,
    `circle(${toRadius(maxRadius)} at ${point(cx, cy)})`,
  ];
}

function useThemedSwitch() {
  const { theme, switchTheme } = useTheme();
  const activeAnimRef = useRef(null);
  const transitioningRef = useRef(false);

  const flip = useCallback(
    (targetTheme) => {
      // Determine the next theme value.
      const next = targetTheme || (theme === 'dark' ? 'light' : 'dark');

      // Respect reduced-motion and unsupported browsers.
      const prefersReduce =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      const supportsVT =
        typeof document !== 'undefined' &&
        typeof document.startViewTransition === 'function';

      if (!supportsVT || prefersReduce || transitioningRef.current) {
        switchTheme(next);
        return;
      }

      const root = document.documentElement;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const clip = getThemeClipPaths(vw, vh);

      // Scope the view-transition CSS and set the duration + collapsed clip.
      root.dataset.themeVt = 'active';
      root.style.setProperty('--theme-vt-duration', `${THEME_VT_DURATION}ms`);
      root.style.setProperty('--theme-vt-clip-from', clip[0]);

      const cleanup = () => {
        transitioningRef.current = false;
        delete root.dataset.themeVt;
        root.style.removeProperty('--theme-vt-duration');
        root.style.removeProperty('--theme-vt-clip-from');
        if (activeAnimRef.current) {
          try {
            activeAnimRef.current.cancel();
          } catch (e) {
            /* noop */
          }
          activeAnimRef.current = null;
        }
      };

      transitioningRef.current = true;
      const transition = document.startViewTransition(() => {
        switchTheme(next);
      });

      if (transition?.finished?.finally) {
        transition.finished.finally(cleanup).catch(() => {});
      } else {
        cleanup();
      }

      if (transition?.ready?.then) {
        transition.ready
          .then(() => {
            activeAnimRef.current = root.animate(
              { clipPath: clip },
              {
                duration: THEME_VT_DURATION,
                easing: 'ease-in-out',
                fill: 'forwards',
                pseudoElement: '::view-transition-new(root)',
              }
            );
          })
          .catch(() => {});
      }
    },
    [theme, switchTheme]
  );

  return { theme, flip };
}

/* ------------------------------------------------------------------ */
/*  GLOBAL NAV                                                         */
/* ------------------------------------------------------------------ */

export function GlobalNav() {
  const { theme, flip } = useThemedSwitch();

  const [currentUrl, setCurrentUrl] = useState(
    () => `${window.location.pathname}${window.location.hash}`
  );

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Sync current URL */
  useEffect(() => {
    const sync = () => {
      setCurrentUrl(`${window.location.pathname}${window.location.hash}`);
    };

    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);

    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  /* Scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body when mobile menu opens */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Reserve space for bottom nav */
  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth < 1280;
      document.body.style.paddingBottom = isMobile ? '72px' : '';
    };

    update();
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
      document.body.style.paddingBottom = '';
    };
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [currentUrl]);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  /* Active nav item */
  const isActive = (href) => {
    const [pathWithSearch, hashPart = ''] = currentUrl.split('#');
    const pathname = pathWithSearch.split('?')[0] || '/';
    const hash = hashPart ? `#${hashPart}` : '';

    if (href === '/') return pathname === '/' && hash !== '#contact';
    if (href === '/#contact') return pathname === '/' && hash === '#contact';
    if (href.startsWith('/')) {
      return pathname === href || pathname.startsWith(`${href}/`);
    }
    return false;
  };

  return (
    <>
      {/* ================================
          TOP HEADER
      ================================= */}
      <header
        className={
          'fixed top-0 inset-x-0 z-[90] transition-all duration-300 ' +
          (scrolled
            ? 'backdrop-blur-md bg-black/5 border-b border-[color:var(--border)]'
            : '')
        }
      >
        <div
          className={
            CONTAINER +
            ' flex items-center justify-between gap-3 h-[64px] md:h-[76px]'
          }
        >
          {/* Brand */}
          <a
            href="/"
            className="flex items-center shrink-0 min-w-0"
            aria-label={BRAND_NAME || 'The Cloud Group'}
          >
            <BrandMark />
          </a>

          {/* Desktop nav */}
          <ul className="hidden xl:flex items-center gap-4 2xl:gap-6 text-[13px] md:text-[14px] min-w-0">
            {GLOBAL_NAV_LINKS.map((item) => (
              <li key={item.label} className="shrink-0">
                <a
                  href={item.href}
                  className={
                    'nav-link inline-flex items-center gap-1.5 whitespace-nowrap transition-opacity ' +
                    (isActive(item.href)
                      ? 'opacity-100'
                      : 'opacity-70 hover:opacity-100')
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme switcher (sm+) — animated circle reveal */}
            <div
              className="relative hidden sm:flex items-center h-9 sm:h-10 rounded-full p-1"
              style={{
                background: 'var(--fg)',
                color: 'var(--bg)',
              }}
            >
              <button
                onClick={() => flip('light')}
                aria-label="Light mode"
                aria-pressed={theme === 'light'}
                className="relative z-10 px-3 sm:px-4 h-full text-[12px] sm:text-[13px] rounded-full"
                style={{
                  color:
                    theme === 'light' ? 'var(--fg)' : 'rgba(0,0,0,.55)',
                }}
              >
                Light
              </button>

              <button
                onClick={() => flip('dark')}
                aria-label="Dark mode"
                aria-pressed={theme === 'dark'}
                className="relative z-10 px-3 sm:px-4 h-full text-[12px] sm:text-[13px] rounded-full"
                style={{
                  color:
                    theme === 'dark'
                      ? 'var(--fg)'
                      : 'rgba(255,255,255,.6)',
                }}
              >
                Dark
              </button>

              <span
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-300"
                style={{
                  background: 'var(--bg)',
                  left: theme === 'light' ? '4px' : 'calc(50% + 0px)',
                }}
              />
            </div>

            {/* AI assessment — lg+ only */}
            <a
              href="/#contact"
              className="hidden lg:inline-flex items-center gap-3 h-10 md:h-11 pl-4 md:pl-5 pr-1 rounded-full text-[13px] md:text-[14px] whitespace-nowrap"
              style={{
                background: 'var(--fg)',
                color: 'var(--bg)',
              }}
            >
              AI assessment
              <span
                className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--accent-ink)',
                }}
              >
                <Icon name="arrow" className="w-3.5" />
              </span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border shrink-0"
              style={{ borderColor: 'var(--border)' }}
            >
              <span
                className={
                  'block w-4 h-[1.5px] transition-transform ' +
                  (open ? 'translate-y-[6px] rotate-45' : '')
                }
                style={{ background: 'currentColor' }}
              />
              <span
                className={
                  'block w-4 h-[1.5px] transition-opacity ' +
                  (open ? 'opacity-0' : '')
                }
                style={{ background: 'currentColor' }}
              />
              <span
                className={
                  'block w-4 h-[1.5px] transition-transform ' +
                  (open ? '-translate-y-[6px] -rotate-45' : '')
                }
                style={{ background: 'currentColor' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ================================
          BOTTOM NAV — mobile / tablet
      ================================= */}
      <nav
        aria-label="Primary mobile navigation"
        className={
          'xl:hidden fixed inset-x-0 bottom-0 z-[85] border-t transition-opacity duration-300 ' +
          (open ? 'opacity-0 pointer-events-none' : 'opacity-100')
        }
        style={{
          background: 'var(--bg)',
          borderColor: 'var(--border)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <div className="grid grid-cols-5 h-[64px]">
          {BOTTOM_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <a
                key={item.label}
                href={item.href}
                className="relative flex flex-col items-center justify-center gap-1 transition-opacity active:opacity-60"
                style={{
                  color: active ? 'var(--accent)' : 'var(--fg)',
                  opacity: active ? 1 : 0.6,
                }}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-b"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
                <DockIcon name={item.icon} className="w-[20px] h-[20px]" />
                <span className="text-[10px] font-medium leading-none tracking-[.02em]">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* ================================
          FULL DRAWER — mobile / tablet
      ================================= */}
      <div
        id="mobile-nav"
        className={
          'fixed inset-0 z-[89] xl:hidden transition-opacity duration-300 ' +
          (open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none')
        }
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <nav
          className={
            'absolute top-[64px] md:top-[76px] inset-x-0 max-h-[calc(100svh-64px)] md:max-h-[calc(100svh-76px)] overflow-y-auto border-b p-6 pt-4 transition-transform duration-300 ' +
            (open ? 'translate-y-0' : '-translate-y-4')
          }
          style={{
            background: 'var(--bg)',
            borderColor: 'var(--border)',
          }}
        >
          {/* Theme switcher (below sm) — animated circle reveal */}
          <div className="flex sm:hidden mb-4">
            <div
              className="relative flex items-center h-10 rounded-full p-1 w-full"
              style={{
                background: 'var(--fg)',
                color: 'var(--bg)',
              }}
            >
              <button
                onClick={() => flip('light')}
                aria-label="Light mode"
                aria-pressed={theme === 'light'}
                className="relative z-10 flex-1 h-full text-[12px] rounded-full"
                style={{
                  color:
                    theme === 'light' ? 'var(--fg)' : 'rgba(0,0,0,.55)',
                }}
              >
                Light
              </button>
              <button
                onClick={() => flip('dark')}
                aria-label="Dark mode"
                aria-pressed={theme === 'dark'}
                className="relative z-10 flex-1 h-full text-[12px] rounded-full"
                style={{
                  color:
                    theme === 'dark'
                      ? 'var(--fg)'
                      : 'rgba(255,255,255,.6)',
                }}
              >
                Dark
              </button>
              <span
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-300"
                style={{
                  background: 'var(--bg)',
                  left: theme === 'light' ? '4px' : 'calc(50% + 0px)',
                }}
              />
            </div>
          </div>

          <ul className="flex flex-col gap-1">
            {GLOBAL_NAV_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    'block py-3 text-xl sm:text-2xl border-b transition-opacity ' +
                    (isActive(item.href) ? 'opacity-100' : 'opacity-70')
                  }
                  style={{ borderColor: 'var(--border)' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-between h-12 pl-5 pr-1 rounded-full"
            style={{
              background: 'var(--fg)',
              color: 'var(--bg)',
            }}
          >
            AI assessment
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--accent)',
                color: 'var(--accent-ink)',
              }}
            >
              <Icon name="arrow" className="w-4" />
            </span>
          </a>
        </nav>
      </div>

      {/* ================================
          VIEW TRANSITION CSS — required
          for the center-out circle reveal
      ================================= */}
      <style>{`
        /* Kill the default cross-fade — we cut with a clip-path instead. */
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }

        /* Wire the group duration to our JS animation. */
        html[data-theme-vt="active"]::view-transition-group(root) {
          animation-duration: var(--theme-vt-duration, 600ms);
        }

        /* Hold the new snapshot collapsed in CSS so Firefox never paints
           the new theme unclipped between snapshot and JS animation. */
        html[data-theme-vt="active"]::view-transition-new(root) {
          clip-path: var(--theme-vt-clip-from, circle(0% at 50% 50%));
        }
      `}</style>
    </>
  );
}