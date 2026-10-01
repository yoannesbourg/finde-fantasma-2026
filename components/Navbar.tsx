'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/lib/dictionary';

interface NavbarProps {
  t: Dictionary;
}

export function Navbar({ t }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#conciertos', label: t.nav.concerts },
    { href: '#bio', label: t.nav.bio },
  ];

  useEffect(
    function lockScrollAndHandleEscape() {
      if (!open) return;
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    },
    [open],
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] bg-night-deep/70 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#hero"
            className="font-serat text-xl text-gold"
            onClick={() => setOpen(false)}
          >
            {t.brand}
          </a>

          {/* Desktop links */}
          <ul className="hidden gap-8 text-sm md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle: three bars morph into an X */}
          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? t.nav.close : t.nav.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-6 bg-gold transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-6 bg-gold transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-6 bg-gold transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen drawer: sibling of <header>, because backdrop-filter would make the header its containing block */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] flex h-dvh flex-col items-center justify-center gap-10 bg-gradient-to-b from-night-deep to-night-petrol transition-all duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-serat text-4xl text-gold hover:text-gold-light"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
