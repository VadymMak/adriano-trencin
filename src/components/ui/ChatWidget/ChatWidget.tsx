// ============================================================
// src/components/ui/ChatWidget/ChatWidget.tsx
// Floating AI chat assistant for Adriano Restaurant
// Pattern: smartctx-dev / src/components/ui/ChatWidget/ChatWidget.tsx
// Requires: NEXT_PUBLIC_ENABLE_AI_CHAT=true in .env.local
// ============================================================

'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Controlled by env var — early return AFTER all hooks
  if (!process.env.NEXT_PUBLIC_ENABLE_AI_CHAT) return null;

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: 'user', content: text };
    const updated = [...messages, userMessage];

    setMessages(updated);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated, honeypot: '' }),
      });

      if (res.status === 429) {
        setError('Príliš veľa správ. Počkajte chvíľu.');
        return;
      }
      if (!res.ok) throw new Error('Request failed');

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setError('Niečo sa pokazilo. Skúste znova.');
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.panel} role="dialog" aria-label="Chat asistent Adriano">
          <div className={styles.header}>
            <div className={styles.headerInfo}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.headerTitle}>Adriano Assistant</span>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Zatvoriť chat"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M14 4L4 14M4 4l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className={styles.messages} aria-live="polite">
            {messages.length === 0 && (
              <p className={styles.emptyState}>
                Dobrý deň! Opýtajte sa ma na menu, otváracie hodiny alebo rezervácie.
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className={`${styles.message} ${styles.assistantMessage} ${styles.typingIndicator}`}>
                <span /><span /><span />
              </div>
            )}
            {error && <p className={styles.errorMessage}>{error}</p>}
            <div ref={bottomRef} />
          </div>

          <div className={styles.inputRow}>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Napíšte správu..."
              className={styles.input}
              aria-label="Správa pre chat asistenta"
              disabled={loading}
              maxLength={500}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className={styles.sendBtn}
              aria-label="Odoslať správu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M15.5 9L2.5 2.5l3.25 6.5-3.25 6.5L15.5 9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        className={styles.bubble}
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Zatvoriť chat' : 'Otvoriť chat asistenta'}
        aria-expanded={open}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M17 5L5 17M5 5l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M3 6h16M3 11h16M3 16h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
