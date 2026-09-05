'use client';

import React, { useState } from 'react';
import { Reveal } from '@/components/Reveal';

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-28 px-[5%]">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        <Reveal>
          <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center justify-center gap-3.5">
            <span className="inline-block w-7 h-px bg-[var(--accent)]" />
            Contact
            <span className="inline-block w-7 h-px bg-[var(--accent)]" />
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-14 text-center">
            <span>Let&apos;s Talk</span>
          </h2>
        </Reveal>

        <div className="w-full">
          <Reveal delay={200}>
            <div className="mb-10 flex justify-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                Available 16/5
              </div>
            </div>

            <div className="bg-[var(--s2)] border border-[var(--border)] rounded-md p-8 md:p-12 hover:border-[var(--border-hi)] transition-colors w-full max-w-[800px] mx-auto shadow-xl">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)] flex items-center justify-center text-[var(--accent)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--text)]">Message Sent!</h3>
                  <p className="font-mono text-xs text-[var(--dim)] max-w-md">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--accent)] border border-[var(--accent)]/40 px-4 py-2 rounded-sm hover:bg-[var(--accent)]/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] text-center md:text-left"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="bg-[var(--bg)] border border-[var(--border)] rounded-sm px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors text-center md:text-left"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] text-center md:text-left"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="bg-[var(--bg)] border border-[var(--border)] rounded-sm px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors text-center md:text-left"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] text-center md:text-left"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Hello Arvind..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="bg-[var(--bg)] border border-[var(--border)] rounded-sm px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none text-center md:text-left"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-4 mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[var(--accent)] text-white font-mono text-[0.8rem] tracking-[0.1em] uppercase px-8 py-4 rounded-sm hover:opacity-90 transition-opacity w-full md:w-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
