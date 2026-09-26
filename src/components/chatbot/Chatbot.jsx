import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CONTAINER } from '../shared/constants';
import { Icon } from '../shared/Icon';
import { FLOWS, TRIGGERS, resolvePageKey, WHATSAPP } from './flows';
import { useChatbotTriggers, markChatbotBooked } from './useChatbotTriggers';

/* ------------------------------------------------------------------
   Cloud — The Cloud Group's AI assistant
------------------------------------------------------------------ */

const TYPING_DELAY = 550;

function TypingBubble() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-[var(--border)] bg-[color:var(--card)] px-4 py-3">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)]" />
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)]"
        style={{ animationDelay: '150ms' }}
      />
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)]"
        style={{ animationDelay: '300ms' }}
      />
    </div>
  );
}

function BotBubble({ text }) {
  return (
    <div className="max-w-[85%] self-start">
      <div className="rounded-2xl rounded-bl-md border border-[var(--border)] bg-[color:var(--card)] px-4 py-3 text-sm leading-6 text-[var(--fg)]">
        {text}
      </div>
    </div>
  );
}

function UserBubble({ text }) {
  return (
    <div className="max-w-[85%] self-end">
      <div className="rounded-2xl rounded-br-md bg-[var(--fg)] px-4 py-3 text-sm leading-6 text-[var(--bg)]">
        {text}
      </div>
    </div>
  );
}

function QuickReplies({ buttons, onSelect, disabled }) {
  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {buttons.map((b) => (
        <button
          key={b.label}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(b)}
          className="rounded-full border border-[var(--border)] bg-[color:var(--card)] px-3.5 py-2 text-xs font-medium text-[var(--fg)] transition-colors hover:border-[color:color-mix(in_srgb,var(--fg)_25%,transparent)] disabled:opacity-50"
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}

function TextInput({ input, onSubmit, disabled }) {
  const [value, setValue] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <form
      className="flex gap-2 pt-1"
      onSubmit={(e) => {
        e.preventDefault();
        if (!value.trim()) return;
        onSubmit(value.trim());
        setValue('');
      }}
    >
      <input
        ref={ref}
        type={input.type || 'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={input.placeholder || 'Type…'}
        disabled={disabled}
        className="h-10 min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--fg)] text-[var(--bg)] disabled:opacity-40"
        aria-label="Send"
      >
        <Icon name="arrow" className="w-4" />
      </button>
    </form>
  );
}

export default function Chatbot() {
  const pageKey = useMemo(
    () => resolvePageKey(window.location.pathname),
    []
  );
  const flow = FLOWS[pageKey] || FLOWS.home;

  const { visible } = useChatbotTriggers();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [nodeId, setNodeId] = useState(flow.start);
  const [typing, setTyping] = useState(false);
  const [pendingButtons, setPendingButtons] = useState(null);
  const [pendingInput, setPendingInput] = useState(null);
  const [lead, setLead] = useState({});
  const [exitIntent, setExitIntent] = useState(false);

  const scrollRef = useRef(null);
  const timeouts = useRef([]);

  /* Auto-scroll to bottom on new content */
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, pendingButtons, pendingInput]);

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  const pushMessages = useCallback((node, done) => {
    setTyping(true);
    const msgs = Array.isArray(node.messages) ? node.messages : [node.messages];

    msgs.forEach((text, i) => {
      const t = setTimeout(() => {
        setMessages((prev) => [...prev, { role: 'bot', text }]);
        if (i === msgs.length - 1) {
          setTyping(false);
          done?.();
        }
      }, TYPING_DELAY * (i + 1));
      timeouts.current.push(t);
    });
  }, []);

  const enterNode = useCallback(
    (id, opts = {}) => {
      clearTimers();
      const node = flow.nodes[id];
      if (!node) return;

      setNodeId(id);
      setPendingButtons(null);
      setPendingInput(null);

      pushMessages(node, () => {
        if (node.input) {
          setPendingInput(node.input);
        } else if (node.buttons?.length) {
          setPendingButtons(node.buttons);
        }
      });

      if (opts.exitIntentOverride) {
        setExitIntent(true);
      }
    },
    [flow, pushMessages]
  );

  /* Kick off the flow when the window opens */
  useEffect(() => {
    if (!open) return;
    if (messages.length > 0) return;
    enterNode(flow.start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /* Handle exit-intent trigger — show special message */
  useEffect(() => {
    if (!visible || open || exitIntent) return;
    if (document.documentElement.dataset.chatbotExitFired) return;
    const onLeave = (e) => {
      if (e.clientY > 0) return;
      document.documentElement.dataset.chatbotExitFired = '1';
      setExitIntent(true);
      setOpen(true);
      clearTimers();
      setMessages([]);
      setPendingButtons(null);
      setPendingInput(null);

      const node = TRIGGERS.exitIntent;
      pushMessages(node, () => setPendingButtons(node.buttons));
    };
    document.addEventListener('mouseleave', onLeave);
    return () => document.removeEventListener('mouseleave', onLeave);
  }, [visible, open, exitIntent, pushMessages]);

  const handleButton = (button) => {
    setPendingButtons(null);
    setMessages((prev) => [...prev, { role: 'user', text: button.label }]);

    if (button.action === 'whatsapp') {
      const text = button.whatsappText || 'Hi, I have a question.';
      window.open(WHATSAPP(text), '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        pushMessages(
          { messages: ["Opening WhatsApp — talk soon."] },
          () => setPendingInput(null)
        );
      }, 300);
      return;
    }

    if (button.action === 'navigate' && button.href) {
      window.location.href = button.href;
      return;
    }

    if (button.action === 'end') {
      setTimeout(() => {
        pushMessages(
          { messages: ['Sounds good. I’ll be here if you need anything.'] },
          () => setPendingButtons(null)
        );
      }, 200);
      return;
    }

    if (button.next) {
      enterNode(button.next);
    }
  };

  const handleInput = (value) => {
    const field = pendingInput?.field;
    setMessages((prev) => [...prev, { role: 'user', text: value }]);
    setPendingInput(null);

    if (field) {
      setLead((prev) => ({ ...prev, [field]: value }));
    }

    const currentNode = flow.nodes[nodeId];
    const next = currentNode?.next || currentNode?.input?.next;
    if (next) {
      enterNode(next);
    }
  };

  /* When the user reaches "confirm" nodes, mark booked */
  useEffect(() => {
    if (nodeId === 'confirm') {
      markChatbotBooked();
      // eslint-disable-next-line no-console
      console.info('[Chatbot lead captured]', lead);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeId]);

  if (!visible && !open) return null;

  return (
    <>
      {/* ============== WINDOW ============== */}
      {open && (
        <div
          className="chatbot-window fixed right-4 z-[200] flex w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[color:var(--bg)] shadow-[0_30px_80px_rgba(0,0,0,.25)] sm:right-6"
        >
          {/* Header */}
          <header className="flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[color:var(--card)] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
                  <Icon name="storm" className="w-4" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--card)] bg-green-500" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-medium">Cloud</p>
                <p className="text-[10px] uppercase tracking-[.1em] text-[var(--muted)]">
                  TCG Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href={WHATSAPP('Hi, I have a question about your services.')}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-[11px] font-medium text-[var(--muted)] hover:text-[var(--fg)]"
              >
                Human
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--muted)] hover:text-[var(--fg)]"
              >
                <Icon name="x" className="w-4" />
              </button>
            </div>
          </header>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m, i) =>
              m.role === 'bot' ? (
                <BotBubble key={i} text={m.text} />
              ) : (
                <UserBubble key={i} text={m.text} />
              )
            )}

            {typing && (
              <div className="self-start">
                <TypingBubble />
              </div>
            )}

            {pendingButtons && (
              <QuickReplies
                buttons={pendingButtons}
                onSelect={handleButton}
                disabled={typing}
              />
            )}

            {pendingInput && (
              <TextInput
                input={pendingInput}
                onSubmit={handleInput}
                disabled={typing}
              />
            )}
          </div>

          {/* Footer */}
          <footer className="border-t border-[var(--border)] bg-[color:var(--card)] px-4 py-2.5">
            <div className="flex items-center justify-between gap-3 text-[10px] text-[var(--muted)]">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="shield" className="w-3" />
                Powered by TCG AI
              </span>
              <a
                href={WHATSAPP('Hi, I have a question.')}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:text-[var(--fg)]"
              >
                Talk to a real engineer
              </a>
            </div>
          </footer>
        </div>
      )}

      {/* ============== LAUNCHER ============== */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="chatbot-launcher group fixed right-4 z-[200] flex items-center gap-3 rounded-full bg-[var(--fg)] py-2 pl-4 pr-2 text-sm font-medium text-[var(--bg)] shadow-[0_20px_50px_rgba(0,0,0,.28)] transition-transform duration-300 hover:-translate-y-0.5 sm:right-6"
          aria-label="Open chat"
        >
          <span className="hidden sm:inline">Chat with Cloud</span>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
            <Icon name="storm" className="w-4" />
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-30" />
          </span>
        </button>
      )}

      <style>{`
        /* ------------------------------------------------------------------
           Position above the mobile bottom nav.
           Bottom nav is 64px tall + safe area inset. Add 12px gap.
        ------------------------------------------------------------------ */
        .chatbot-launcher {
          bottom: calc(64px + env(safe-area-inset-bottom, 0px) + 12px);
        }

        .chatbot-window {
          bottom: calc(64px + env(safe-area-inset-bottom, 0px) + 12px);
          max-height: min(
            640px,
            calc(
              100dvh - 64px - env(safe-area-inset-bottom, 0px) - 88px
            )
          );
        }

        /* On xl+ the bottom nav is hidden — anchor to normal corner */
        @media (min-width: 1280px) {
          .chatbot-launcher {
            bottom: 1.5rem;
          }
          .chatbot-window {
            bottom: 1.5rem;
            max-height: min(640px, calc(100vh - 8rem));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ping { animation: none !important; }
        }
      `}</style>
    </>
  );
}