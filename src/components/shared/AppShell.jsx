import React, { useEffect, useState } from 'react';
import { ScrollProgress, Atmosphere, CustomCursor } from './effects';
import { GlobalNav } from './GlobalNav';
import { SiteFooter } from './Footer';

function useUrlKey() {
  const getKey = () => `${window.location.pathname}${window.location.search}${window.location.hash}`;
  const [key, setKey] = useState(getKey);

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

function RouteScrollManager() {
  const urlKey = useUrlKey();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const hash = window.location.hash;
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });

    return () => cancelAnimationFrame(frame);
  }, [urlKey]);

  return null;
}

export function AppShell({ children }) {
  return (
    <div className="min-h-[100svh]" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <RouteScrollManager />
      <ScrollProgress />
      <Atmosphere />
      <CustomCursor />
      <GlobalNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
