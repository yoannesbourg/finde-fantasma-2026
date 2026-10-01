import type { Metadata, Viewport } from 'next';
import { Cinzel, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { getDictionary } from '@/lib/dictionary';
import './globals.css';

// Titles: local Serat, with Cinzel as fallback (see tailwind.config.js).
const serat = localFont({ src: './fonts/Serat-Ultra.ttf', variable: '--font-serat', display: 'swap' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });

const t = getDictionary();

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  openGraph: { title: t.meta.title, description: t.meta.description, type: 'website', locale: 'es_ES' },
};

export const viewport: Viewport = { themeColor: '#07121E' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serat.variable} ${cinzel.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
