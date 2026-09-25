import { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------
   Controls when the launcher appears.
   - first-time visitor: 15s OR 50% scroll
   - return visitor: 8s
   - high-intent click ([data-chatbot-trigger]): immediate
   - exit intent (mouse leaves top of viewport): immediate
------------------------------------------------------------------ */

const STORAGE_KEY = 'tcg_chatbot_state';
const RETURN_WINDOW_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

function readState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* localStorage may be unavailable */
  }
}

export function markChatbotBooked() {
  const state = readState() || {};
  writeState({ ...state, booked: true });
}

export function useChatbotTriggers({ disabled = false } = {}) {
  const [visible, setVisible] = useState(false);
  const [exitIntentFired, setExitIntentFired] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (disabled) return;
    if (fired.current) return;

    const state = readState();
    if (state?.booked) return;

    const isReturning =
      state?.lastSeen && Date.now() - state.lastSeen < RETURN_WINDOW_MS;

    const reveal = () => {
      if (fired.current) return;
      fired.current = true;
      setVisible(true);
    };

    const delay = isReturning ? 8000 : 15000;
    const timer = setTimeout(reveal, delay);

    const onScroll = () => {
      const scrolled =
        window.scrollY /
        Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      if (scrolled >= 0.5) reveal();
    };

    const onMouseLeave = (e) => {
      // Only trigger when moving toward top of the viewport (closing tab / URL bar)
      if (e.clientY <= 0 && !exitIntentFired) {
        setExitIntentFired(true);
        reveal();
      }
    };

    const onHighIntent = (e) => {
      const el = e.target.closest('[data-chatbot-trigger]');
      if (el) reveal();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('click', onHighIntent);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('click', onHighIntent);
    };
  }, [disabled, exitIntentFired]);

  // Record last visit timestamp
  useEffect(() => {
    const state = readState() || {};
    writeState({ ...state, lastSeen: Date.now() });
  }, []);

  return { visible, exitIntentFired };
}