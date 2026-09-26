import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/tcg.css';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function dismissBootSplash() {
  const splash = document.getElementById('boot-splash');
  if (!splash || splash.dataset.done === 'true') return;

  splash.dataset.done = 'true';
  // Remove from DOM after the fade completes so it can't trap clicks.
  setTimeout(() => splash.remove(), 400);
}

// Double rAF: first frame schedules paint, second frame runs after paint.
requestAnimationFrame(() => {
  requestAnimationFrame(dismissBootSplash);
});

// Safety net — if fonts/images stall the app past 3s, force-hide the splash.
setTimeout(dismissBootSplash, 3000);