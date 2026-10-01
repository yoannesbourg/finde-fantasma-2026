import { getDictionary } from '@/lib/dictionary';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ConciertosSection } from '@/components/ConciertosSection';
import { BioSection } from '@/components/BioSection';
import { SocialSection } from '@/components/SocialSection';

export default function Home() {
  const t = getDictionary();
  return (
    <>
      <Navbar t={t} />
      <main className="bg-gradient-to-b from-night-deep to-night-petrol">
        <Hero t={t} />
        <ConciertosSection t={t} />
        <BioSection t={t} />
      </main>
      <SocialSection t={t} />
    </>
  );
}
