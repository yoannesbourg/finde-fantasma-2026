import type { Dictionary } from '@/lib/dictionary';
import { BANDSINTOWN_PAGE, IMAGES, SOCIALS } from '@/lib/site';
import { SocialIcon } from './SocialIcons';

interface SocialSectionProps {
  t: Dictionary;
}

export function SocialSection({ t }: SocialSectionProps) {
  return (
    <footer id="social">
      {/* Medium-size photo with feathered edges, so it blends into the page instead of sitting in a box */}
      <div
        role="img"
        aria-label={t.social.photoAlt}
        className="mx-auto aspect-[4/5] w-full max-w-md bg-cover bg-center sm:max-w-lg"
        style={{
          backgroundImage: `url(${IMAGES.band})`,
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 45%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 45%, transparent 100%)',
        }}
      />

      <div className="mx-auto max-w-3xl px-6 pb-12 pt-4 text-center">

      <h2 className="text-3xl text-gold">{t.social.title}</h2>
      <ul className="mt-8 flex flex-wrap justify-center gap-4">
        {SOCIALS.map((s) => (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-14 w-14 items-center justify-center text-white transition-colors hover:text-gold"
            >
              <SocialIcon id={s.id} />
            </a>
          </li>
        ))}
      </ul>

      <a
        href={BANDSINTOWN_PAGE}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block border border-gold px-6 py-3 text-sm text-gold transition-colors hover:bg-gold hover:text-night-deep"
      >
        {t.social.bandsintown}
      </a>

      <p className="mt-16 text-xs text-white/50">
        © {new Date().getFullYear()} {t.brand} · {t.social.footer}
      </p>
      </div>
    </footer>
  );
}
