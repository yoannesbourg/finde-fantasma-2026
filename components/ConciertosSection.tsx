'use client';

import { useEffect, useState } from 'react';
import type { Concert } from '@/lib/concerts';
import type { Dictionary } from '@/lib/dictionary';

interface ConciertosSectionProps {
  t: Dictionary;
}

type State =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; concerts: Concert[] };

export function ConciertosSection({ t }: ConciertosSectionProps) {
  const [state, setState] = useState<State>({ status: 'loading' });

  useEffect(function fetchConcerts() {
    const controller = new AbortController();
    fetch('/api/concerts', { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { concerts: Concert[] }) => setState({ status: 'ready', concerts: data.concerts }))
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ status: 'error' });
      });
    return () => controller.abort();
  }, []);

  return (
    <section id="conciertos" className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h2 className="mb-12 text-4xl text-gold md:text-5xl">{t.concerts.title}</h2>

      {state.status === 'loading' ? (
        <ul className="space-y-6" aria-busy="true" aria-label={t.concerts.loading}>
          {[0, 1, 2].map((i) => (
            <li key={i} className="mx-auto h-24 animate-pulse rounded bg-night-petrol/40" />
          ))}
        </ul>
      ) : null}

      {state.status === 'error' ? <p className="text-white/70">{t.concerts.error}</p> : null}

      {state.status === 'ready' && state.concerts.length === 0 ? (
        <p className="text-white/70">{t.concerts.empty}</p>
      ) : null}

      {state.status === 'ready' && state.concerts.length > 0 ? (
        <ul className="space-y-6">
          {state.concerts.map((c) => (
            <li key={c.id} className="py-2">
              <p className="text-lg text-gold-light">{c.date}</p>
              <p className="mt-1">{c.venue}</p>
              <p className="text-sm text-white/70">{c.city}</p>
              <a
                href={c.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border border-gold bg-gold px-6 py-2 text-sm text-night-deep transition-colors hover:bg-transparent hover:text-gold"
              >
                {t.concerts.tickets}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
