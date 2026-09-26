// import React, { useEffect, useState } from 'react';
// import { ScrollProgress, Atmosphere, CustomCursor } from './effects';
// import { GlobalNav } from './GlobalNav';
// import { SiteFooter } from './Footer';
// import Chatbot from '../chatbot/Chatbot';

// function useUrlKey() {
//   const getKey = () => `${window.location.pathname}${window.location.search}${window.location.hash}`;
//   const [key, setKey] = useState(getKey);

//   useEffect(() => {
//     const sync = () => setKey(getKey());
//     window.addEventListener('popstate', sync);
//     window.addEventListener('hashchange', sync);
//     return () => {
//       window.removeEventListener('popstate', sync);
//       window.removeEventListener('hashchange', sync);
//     };
//   }, []);

//   return key;
// }

// function RouteScrollManager() {
//   const urlKey = useUrlKey();

//   useEffect(() => {
//     const frame = requestAnimationFrame(() => {
//       const hash = window.location.hash;
//       if (hash) {
//         const id = decodeURIComponent(hash.slice(1));
//         const target = document.getElementById(id);
//         if (target) {
//           target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//           return;
//         }
//       }

//       window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
//     });

//     return () => cancelAnimationFrame(frame);
//   }, [urlKey]);

//   return null;
// }

// export function AppShell({ children }) {
//   return (
//     <div className="min-h-[100svh]" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
//       <RouteScrollManager />
//       <ScrollProgress />
//       <Atmosphere />
//       <CustomCursor />
//       <GlobalNav />
//       <main>{children}</main>
//       <Chatbot />
//       <SiteFooter />
//     </div>
//   );
// }
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLenis } from 'lenis/react';
// import { ScrollProgress, Atmosphere, CustomCursor } from './effects';
import { Atmosphere, CustomCursor } from './effects';

import { GlobalNav } from './GlobalNav';
import { SiteFooter } from './Footer';

import Chatbot from '../chatbot/Chatbot';
import { SmoothScroll } from '../scrool/smooth-scroll';
import { TelemetryHUD } from '../scrool/telemetry-hud';

/* ------------------------------------------------------------------ */
/*  URL key — triggers re-run of scroll management on route change     */
/* ------------------------------------------------------------------ */

function useUrlKey() {
  const getKey = () =>
    `${window.location.pathname}${window.location.search}${window.location.hash}`;

  const [key, setKey] = useState(() =>
    typeof window === 'undefined' ? '' : getKey()
  );

  useEffect(() => {
    const sync = () => setKey(getKey());
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  return key;
}

/* ------------------------------------------------------------------ */
/*  RouteScrollManager                                                 */
/*                                                                     */
/*  Runs on every navigation:                                          */
/*    • if there's a #hash, scroll to it (respecting the sticky header) */
/*    • otherwise jump to top — instantly, not smoothly                */
/*                                                                     */
/*  Uses Lenis when available so hash-jumps share the same easing as   */
/*  wheel scroll. Falls back to native scrollTo for the rare case      */
/*  where Lenis hasn't mounted yet (first paint, SSR hydration).       */
/* ------------------------------------------------------------------ */

const HEADER_OFFSET = 80; // px — matches your sticky header height

function RouteScrollManager() {
  const urlKey = useUrlKey();
  const lenis = useLenis();

  useEffect(() => {
    if (!urlKey) return;

    // Wait one frame so the new route has painted before we scroll.
    const frame = requestAnimationFrame(() => {
      const hash = window.location.hash;

      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        const target = document.getElementById(id);

        if (target) {
          if (lenis) {
            lenis.scrollTo(target, {
              offset: -HEADER_OFFSET,
              duration: 1.1,
            });
          } else {
            const top =
              target.getBoundingClientRect().top +
              window.scrollY -
              HEADER_OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
          }
          return;
        }
      }

      // No hash → reset to top. Instant, because animating from the
      // bottom of a long page up to the top feels broken.
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [urlKey, lenis]);

  return null;
}

/* ------------------------------------------------------------------ */
/*  Dev-only telemetry gate                                            */
/*                                                                     */
/*  Vite: import.meta.env.DEV                                          */
/*  Next: process.env.NODE_ENV === 'development'                       */
/*  Anything else: flip the const to true                              */
/* ------------------------------------------------------------------ */

const SHOW_TELEMETRY =
  typeof process !== 'undefined'
    ? process.env.NODE_ENV === 'development'
    : true;

/* ------------------------------------------------------------------ */
/*  AppShell                                                           */
/* ------------------------------------------------------------------ */

export function AppShell({ children }) {
  return (
    <SmoothScroll>
      <div
        className="min-h-[100svh]"
        style={{ background: 'var(--bg)', color: 'var(--fg)' }}
      >
        <RouteScrollManager />
        {/* <ScrollProgress /> */}
        <Atmosphere />
        <CustomCursor />
        <GlobalNav />

        <main>{children}</main>

        <Chatbot />
        <SiteFooter />

        {SHOW_TELEMETRY && <TelemetryHUD />}
      </div>
    </SmoothScroll>
  );
}