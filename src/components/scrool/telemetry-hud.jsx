import { useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';

const HISTORY = 100;

export function TelemetryHUD() {
  const fpsRef = useRef(null);
  const velRef = useRef(null);
  const progressRef = useRef(null);
  const canvasRef = useRef(null);
  const frameTimes = useRef(new Array(HISTORY).fill(16.7));

  useEffect(() => {
    let rafId = 0;
    let last = performance.now();
    let frames = 0;
    let lastPaint = 0;

    const loop = (now) => {
      const delta = now - last;
      last = now;
      frames++;

      const t = Math.min(delta, 80);
      const buf = frameTimes.current;
      buf.push(t);
      if (buf.length > HISTORY) buf.shift();

      if (now - lastPaint >= 250) {
        const elapsed = now - lastPaint;
        lastPaint = now;

        if (fpsRef.current) {
          fpsRef.current.textContent = String(
            Math.min(Math.round((frames * 1000) / elapsed), 999)
          );
        }
        frames = 0;
        drawSparkline(canvasRef.current, buf);
      }

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafId);
  }, []);

  useLenis(({ velocity, progress }) => {
    const v = Math.abs(velocity);
    if (velRef.current) velRef.current.textContent = v.toFixed(1);
    if (progressRef.current)
      progressRef.current.textContent = `${Math.round(progress * 100)}%`;
  });

  return (
    <div
      role="status"
      aria-label="Live performance telemetry"
      className="fixed bottom-3 left-3 z-[80] hidden select-none items-center gap-3 rounded-full border px-3 py-2 font-mono text-[10px] tracking-wider backdrop-blur-md sm:flex"
      style={{
        borderColor: 'var(--border)',
        background: 'color-mix(in srgb, var(--card) 80%, transparent)',
        color: 'var(--muted)',
      }}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
          style={{ background: 'var(--accent)' }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ background: 'var(--accent)' }}
        />
      </span>

      <span className="flex items-center gap-1">
        <span
          ref={fpsRef}
          className="min-w-[3ch] text-right font-semibold"
          style={{ color: 'var(--fg)' }}
        >
          –
        </span>
        FPS
      </span>

      <span
        className="h-3 w-px"
        style={{ background: 'var(--border)' }}
        aria-hidden="true"
      />

      <span className="flex items-center gap-1">
        VEL
        <span
          ref={velRef}
          className="min-w-[4ch] font-semibold"
          style={{ color: 'var(--accent)' }}
        >
          0.0
        </span>
      </span>

      <span
        className="h-3 w-px"
        style={{ background: 'var(--border)' }}
        aria-hidden="true"
      />

      <span className="flex items-center gap-1">
        SCRL
        <span
          ref={progressRef}
          className="min-w-[4ch] font-semibold"
          style={{ color: 'var(--fg)' }}
        >
          0%
        </span>
      </span>

      <canvas
        ref={canvasRef}
        width={96}
        height={18}
        aria-hidden="true"
        className="opacity-80"
      />
    </div>
  );
}

function drawSparkline(canvas, buffer) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(200, 200, 200, 0.18)';
  ctx.lineWidth = 1;
  const y60 = h - (16.7 / 40) * h;
  const y120 = h - (8.3 / 40) * h;
  [y60, y120].forEach((y) => {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  });

  ctx.strokeStyle = '#E5B32B';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  buffer.forEach((t, i) => {
    const x = (i / (buffer.length - 1)) * w;
    const y = h - Math.min(t / 40, 1) * h;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}