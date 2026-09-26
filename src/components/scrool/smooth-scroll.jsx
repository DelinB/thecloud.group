import { ReactLenis } from 'lenis/react';

export const LENIS_OPTIONS = {
  lerp: 0.1,
  wheelMultiplier: 1,
  touchMultiplier: 1.4,
  autoRaf: true,
  anchors: { lerp: 0.12 },
  syncTouch: false,
  overscroll: true,
  respectReducedMotion: true,
};

export function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}