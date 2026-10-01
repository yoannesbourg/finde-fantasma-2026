import type { Dictionary } from '@/lib/dictionary';

interface BioSectionProps {
  t: Dictionary;
}

export function BioSection({ t }: BioSectionProps) {
  return (
    <section id="bio" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl text-gold md:text-5xl">{t.bio.title}</h2>
      <div className="space-y-6 p-6 md:p-10">
        {t.bio.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed md:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
