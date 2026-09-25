import React from 'react';
import { useEffect, useRef } from 'react';
import { useTheme } from './theme';

const GLASS_VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const GLASS_FRAG = `
precision mediump float;

uniform vec2  uResolution;
uniform float uTime;
uniform float uSpeed;
uniform float uTileDensity;
uniform float uRippleLayers;
uniform float uWarpStrength;
uniform float uBandSharpness;
uniform float uChromaticSpread;
uniform vec3  uColorA;
uniform vec3  uColorB;
uniform vec3  uBackgroundColor;
uniform float uOpacity;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  float h = dot(p, p + vec2(45.32, 45.32));
  p += vec2(h, h);
  return fract(p.x * p.y);
}

float rippleField(vec2 dir, float dist, float tileRand) {
  float sum = 0.0;
  float norm = 0.0;

  for (int i = 0; i < 8; i++) {
    float fi = float(i);
    float enabled = step(fi, uRippleLayers - 0.001);
    float freq = 2.5 + fi * 1.3;
    float phase = uTime * uSpeed * (0.55 + 0.12 * fi) + tileRand * 6.2831853;
    float angle = atan(dir.y, dir.x);
    float weight = enabled / (fi + 1.0);
    float wave = sin(dist * freq * 7.0 - phase) * cos(angle * 4.0 + phase * 0.5);
    sum += wave * weight;
    norm += weight;
  }

  return sum / max(norm, 0.0001);
}

vec3 tileColor(vec2 uv, float chromaShift) {
  vec2 center = vec2(0.5, 0.5);
  vec2 toCenter = uv - center;

  float aspect = uResolution.x / max(uResolution.y, 1.0);
  toCenter.x *= aspect;

  float dist = length(toCenter) + 0.0001;
  vec2 dir = toCenter / dist;

  vec2 grid = uv * vec2(aspect, 1.0) * uTileDensity;
  vec2 cellId = floor(grid);
  vec2 localUV = fract(grid) - vec2(0.5, 0.5);
  float tileRand = hash21(cellId);

  float warp =
    (1.0 / (dist * 6.0 + 1.0)) *
    uWarpStrength *
    sin(uTime * uSpeed * 0.7 + tileRand * 6.2831853);

  vec2 warpedDir = dir + localUV * warp * 0.6;

  float field = rippleField(
    normalize(warpedDir + vec2(0.0001, 0.0001)),
    dist + warp,
    tileRand
  );

  float band = pow(
    clamp((field + 1.0) * 0.5, 0.0, 1.0),
    max(uBandSharpness, 0.001)
  );

  float facet = 0.75 + 0.25 * hash21(cellId + vec2(7.0, 7.0));

  float shimmer =
    0.5 +
    0.5 * sin(uTime * uSpeed * 2.4 + tileRand * 12.0);

  float mixT = clamp(
    band * 0.72 + shimmer * 0.18 + chromaShift,
    0.0,
    1.0
  );

  vec3 glass = mix(uColorA, uColorB, mixT) * facet;
  vec3 result = mix(uBackgroundColor, glass, band);

  float edge = smoothstep(
    0.48,
    0.5,
    max(abs(localUV.x), abs(localUV.y))
  );

  result *= 1.0 - edge * 0.28;

  return result;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float cs = uChromaticSpread * 0.02;

  vec3 rC = tileColor(uv + vec2(cs, 0.0), 0.04);
  vec3 gC = tileColor(uv, 0.0);
  vec3 bC = tileColor(uv - vec2(cs, 0.0), -0.04);

  vec3 finalColor = vec3(rC.r, gC.g, bC.b);
  gl_FragColor = vec4(finalColor, uOpacity);
}
`;

function hexToRgbNorm(hex) {
  const value = String(hex || '').replace('#', '');
  const normalized = value.length === 3
    ? value.split('').map((ch) => ch + ch).join('')
    : value.padEnd(6, '0').slice(0, 6);

  const int = parseInt(normalized, 16);
  if (Number.isNaN(int)) return [0, 0, 0];

  return [
    ((int >> 16) & 255) / 255,
    ((int >> 8) & 255) / 255,
    (int & 255) / 255
  ];
}

const GLASS_PALETTES = {
  light: {
    bg: '#f6f6f6',
    a:  '#ffd88a',
    b:  '#e0a21b',
    canvasOpacity: 0.55,
    speed: 0.8, density: 7, ripples: 5, warp: 0.30, band: 3.2, chroma: 0.18
  },
  dark: {
    bg: '#0a0a0a',
    a:  '#5a4300',
    b:  '#f5bd35',
    canvasOpacity: 0.62,
    speed: 0.8, density: 7, ripples: 5, warp: 0.30, band: 3.2, chroma: 0.18
  }
};

function GlassTilesBackground({ theme, className }) {
  const pal = GLASS_PALETTES[theme] || GLASS_PALETTES.light;
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const drawRef = useRef(null);
  const palRef = useRef(pal);

  useEffect(() => {
    palRef.current = pal;
    if (drawRef.current) drawRef.current();
  }, [pal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false }) ||
      canvas.getContext('experimental-webgl');
    if (!gl) return;

    const compile = (type, src) => {
      const shader = gl.createShader(type);
      if (!shader) {
        console.error('[glass-tiles] Could not create shader');
        return null;
      }

      gl.shaderSource(shader, src);
      gl.compileShader(shader);

      const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (!compiled) {
        const log = gl.getShaderInfoLog(shader);
        console.error('[glass-tiles] Shader compilation failed', {
          type: type === gl.VERTEX_SHADER ? 'VERTEX' : 'FRAGMENT',
          log: log || '(browser returned no compiler log)',
          source: src
        });
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, GLASS_VERT);
    const fs = compile(gl.FRAGMENT_SHADER, GLASS_FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('[glass-tiles] link:', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const U = {};
    ['uResolution','uTime','uSpeed','uTileDensity','uRippleLayers','uWarpStrength',
     'uBandSharpness','uChromaticSpread','uColorA','uColorB','uBackgroundColor','uOpacity']
      .forEach((n) => { U[n] = gl.getUniformLocation(prog, n); });

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const maxDpr = reduce ? 1 : 1.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    let elapsed = 12;

    const draw = () => {
      resize();
      const p = palRef.current;
      gl.uniform2f(U.uResolution, canvas.width, canvas.height);
      gl.uniform1f(U.uTime, elapsed);
      gl.uniform1f(U.uSpeed, p.speed);
      gl.uniform1f(U.uTileDensity, p.density);
      gl.uniform1f(U.uRippleLayers, p.ripples);
      gl.uniform1f(U.uWarpStrength, p.warp);
      gl.uniform1f(U.uBandSharpness, p.band);
      gl.uniform1f(U.uChromaticSpread, p.chroma);
      gl.uniform1f(U.uOpacity, 1.0);
      gl.uniform3fv(U.uColorA, hexToRgbNorm(p.a));
      gl.uniform3fv(U.uColorB, hexToRgbNorm(p.b));
      gl.uniform3fv(U.uBackgroundColor, hexToRgbNorm(p.bg));
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    drawRef.current = draw;

    let visible = true;
    let last = performance.now();

    const loop = (now) => {
      if (!visible) { rafRef.current = 0; return; }
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      elapsed += dt;
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    if (!reduce) rafRef.current = requestAnimationFrame(loop);
    else draw();

    let io = null;
    if ('IntersectionObserver' in window && !reduce) {
      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !rafRef.current) {
          last = performance.now();
          rafRef.current = requestAnimationFrame(loop);
        }
      }, { threshold: 0 });
      io.observe(canvas);
    }

    const onResize = () => { if (reduce) draw(); };
    window.addEventListener('resize', onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      drawRef.current = null;
      if (io) io.disconnect();
      window.removeEventListener('resize', onResize);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      // Do NOT call WEBGL_lose_context here. React 18 StrictMode intentionally
      // mounts effects twice in development; forcing the context to be lost during
      // cleanup makes the second mount receive a permanently lost WebGL context.
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={'glass-canvas ' + (className || '')}
      style={{ opacity: pal.canvasOpacity }}
    />
  );
}

export function GlobalHeroBackground({ className = '' }) {
  const { theme } = useTheme();

  return (
    <div aria-hidden className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
      <GlassTilesBackground theme={theme} />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, var(--bg) 0%, transparent 18%, transparent 58%, var(--bg) 100%)'
        }}
      />
      <div
        className="absolute -top-20 right-[-10vw] w-[55vw] md:w-[38vw] aspect-square rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, var(--accent) 20%, transparent 70%)' }}
      />
    </div>
  );
}

export function GlobalHeroGlow() {
  return (
    <>
      <div aria-hidden className="hero-shared-glow hero-shared-glow--top"
        style={{ background: 'radial-gradient(circle, var(--accent) 20%, transparent 70%)' }} />
      <div aria-hidden className="hero-shared-glow hero-shared-glow--bottom"
        style={{ background: 'radial-gradient(circle, var(--accent) 20%, transparent 70%)' }} />
    </>
  );
}
