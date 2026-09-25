import React, { createContext, useContext, useEffect, useState } from 'react';

const VT_DURATION_MS = 550;

export function applyThemeClass(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  try { localStorage.setItem('tcg-theme', isDark ? 'dark' : 'light'); } catch {}
}

export function runThemeTransition(isDark, originEl) {
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof document.startViewTransition !== 'function' || reduce) {
    applyThemeClass(isDark);
    return;
  }

  if (root.classList.contains('vt-active')) {
    applyThemeClass(isDark);
    return;
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let cx = vw / 2, cy = vh / 2;

  if (originEl?.getBoundingClientRect) {
    const r = originEl.getBoundingClientRect();
    if (r.width && r.height) {
      cx = r.left + r.width / 2;
      cy = r.top + r.height / 2;
    }
  }

  const maxR = Math.hypot(Math.max(cx, vw - cx), Math.max(cy, vh - cy));
  const rPct = (maxR / (Math.hypot(vw, vh) / Math.SQRT2)) * 100;
  const cxPct = (cx / vw) * 100;
  const cyPct = (cy / vh) * 100;
  const clipFrom = `circle(0% at ${cxPct}% ${cyPct}%)`;
  const clipTo = `circle(${rPct}% at ${cxPct}% ${cyPct}%)`;

  root.style.setProperty('--vt-duration', VT_DURATION_MS + 'ms');
  root.style.setProperty('--vt-clip-from', clipFrom);
  root.classList.add('vt-active');

  const apply = () => applyThemeClass(isDark);
  let cleanupDone = false;

  const cleanup = () => {
    if (cleanupDone) return;
    cleanupDone = true;
    root.classList.remove('vt-active');
    root.style.removeProperty('--vt-clip-from');
  };

  let transition;
  try {
    transition = document.startViewTransition(apply);
  } catch {
    cleanup();
    applyThemeClass(isDark);
    return;
  }

  if (transition.finished?.finally) transition.finished.finally(cleanup).catch(() => {});
  else setTimeout(cleanup, VT_DURATION_MS + 100);

  if (transition.ready?.then) {
    transition.ready.then(() => {
      try {
        root.animate(
          { clipPath: [clipFrom, clipTo] },
          {
            duration: VT_DURATION_MS,
            easing: 'ease-in-out',
            fill: 'forwards',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      } catch {}
    }).catch(() => {});
  }
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('tcg-theme') || 'light'; }
    catch { return 'light'; }
  });

  useEffect(() => {
    applyThemeClass(theme === 'dark');
  }, [theme]);

  const switchTheme = (next, originEl) => {
    if (next === theme) return;
    runThemeTransition(next === 'dark', originEl);
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error('useTheme must be used inside ThemeProvider');
  return value;
}
