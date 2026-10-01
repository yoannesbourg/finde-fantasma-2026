import type { Dictionary } from '@/lib/dictionary';
import { IMAGES } from '@/lib/site';

interface HeroProps {
  t: Dictionary;
}

// Cover is a CSS background (photo + navy gradient overlay in a single declaration).
export function Hero({ t }: HeroProps) {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(7,18,30,0.3), rgba(7,18,30,0) 50%, rgba(7,18,30,0.9)), url(${IMAGES.hero})`,
      }}
    >
      {/* React 19 hoists this into <head>: preloads the cover for LCP */}
      <link rel="preload" as="image" href={IMAGES.hero} />
      <div className="px-6 text-center [text-shadow:0_2px_16px_rgba(7,18,30,0.8)]">
        <h1 className="text-5xl text-gold sm:text-7xl lg:text-8xl">{t.hero.title}</h1>
      </div>
    </section>
  );
}
