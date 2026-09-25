import React, { useEffect, useRef, useState } from 'react';
import { CONTAINER, BRAND_NAME, LOGO_SRC } from './constants';
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

export function BrandMark({ variant = 'default' }) {
  const isFooter = variant === 'footer';

  if (LOGO_SRC) {
    return (
      <img
        src={LOGO_SRC}
        alt={BRAND_NAME}
        className="brand-logo"
        style={{ height: isFooter ? 30 : 26 }}
      />
    );
  }

  return (
    <>
      <span
        className="rounded-lg flex items-center justify-center font-bold text-[13px] shrink-0"
        style={{
          width: 28,
          height: 28,
          background: 'var(--accent)',
          color: 'var(--accent-ink)',
        }}
      >
        T
      </span>

      <span className="leading-none" style={{ letterSpacing: '-.02em' }}>
        TCG
      </span>
    </>
  );
}

export function GlobalNav() {
  const { theme, switchTheme } = useTheme();

  const [currentUrl, setCurrentUrl] = useState(
    () => `${window.location.pathname}${window.location.hash}`
  );

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lightBtnRef = useRef(null);
  const darkBtnRef = useRef(null);

  /* --------------------------------
     Sync current URL
  -------------------------------- */
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

  /* --------------------------------
     Scroll state
  -------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* --------------------------------
     Lock body when mobile menu opens
  -------------------------------- */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* --------------------------------
     Close mobile menu on route change
  -------------------------------- */
  useEffect(() => {
    setOpen(false);
  }, [currentUrl]);

  /* --------------------------------
     Close mobile menu on resize to desktop
  -------------------------------- */
  useEffect(() => {
    if (!open) return;

    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  /* --------------------------------
     Active navigation item
  -------------------------------- */
  const isActive = (href) => {
    const [pathWithSearch, hashPart = ''] = currentUrl.split('#');
    const pathname = pathWithSearch.split('?')[0] || '/';
    const hash = hashPart ? `#${hashPart}` : '';

    // Home
    if (href === '/') {
      return pathname === '/' && hash !== '#contact';
    }

    // Contact (hash on home)
    if (href === '/#contact') {
      return pathname === '/' && hash === '#contact';
    }

    // Prefix matching for all other page routes
    if (href.startsWith('/')) {
      return pathname === href || pathname.startsWith(`${href}/`);
    }

    return false;
  };

  return (
    <>
      {/* ================================
          HEADER
      ================================= */}
      <header
        className={
          'fixed top-0 inset-x-0 z-[90] transition-all duration-500 ' +
          (scrolled
            ? 'backdrop-blur-md bg-black/5 border-b border-[color:var(--border)]'
            : '')
        }
      >
        <div
          className={
            CONTAINER +
            ' flex items-center justify-between gap-3 h-[60px] md:h-[72px]'
          }
        >
          {/* ================================
              BRAND
          ================================= */}
          <div className="flex items-center gap-3 md:gap-5 min-w-0 shrink-0">
            <a
              href="/"
              className="flex items-center gap-2.5 text-[13px] md:text-[14px] shrink-0"
            >
              <BrandMark />
            </a>

            <span
              className="hidden md:inline text-[clamp(.72rem,.8vw,.86rem)] px-3 py-1 rounded-full whitespace-nowrap"
              style={{
                background: 'var(--accent)',
                color: 'var(--accent-ink)',
              }}
            >
              The Cloud Group
            </span>
          </div>

          {/* ================================
              DESKTOP NAV
              (xl and up — enough room for 7 links + controls)
          ================================= */}
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

          {/* ================================
              RIGHT SIDE
          ================================= */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme switcher */}
            <div
              className="relative hidden sm:flex items-center h-9 sm:h-10 rounded-full p-1"
              style={{
                background: 'var(--fg)',
                color: 'var(--bg)',
              }}
            >
              <button
                ref={lightBtnRef}
                onClick={(e) => switchTheme('light', e.currentTarget)}
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
                ref={darkBtnRef}
                onClick={(e) => switchTheme('dark', e.currentTarget)}
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
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                style={{
                  background: 'var(--bg)',
                  left: theme === 'light' ? '4px' : 'calc(50% + 0px)',
                }}
              />
            </div>

            {/* AI Assessment — desktop / tablet only */}
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

            {/* Mobile / tablet menu toggle */}
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
          MOBILE / TABLET MENU
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
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Panel — scrollable if content overflows */}
        <nav
          className={
            'absolute top-[60px] md:top-[72px] inset-x-0 max-h-[calc(100svh-60px)] md:max-h-[calc(100svh-72px)] overflow-y-auto border-b p-6 pt-4 transition-transform duration-500 ' +
            (open ? 'translate-y-0' : '-translate-y-4')
          }
          style={{
            background: 'var(--bg)',
            borderColor: 'var(--border)',
          }}
        >
          {/* Theme switcher inside mobile menu (below sm) */}
          <div className="flex sm:hidden mb-4">
            <div
              className="relative flex items-center h-10 rounded-full p-1 w-full"
              style={{
                background: 'var(--fg)',
                color: 'var(--bg)',
              }}
            >
              <button
                onClick={(e) => switchTheme('light', e.currentTarget)}
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
                onClick={(e) => switchTheme('dark', e.currentTarget)}
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
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
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

          {/* Mobile AI assessment */}
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
    </>
  );
}