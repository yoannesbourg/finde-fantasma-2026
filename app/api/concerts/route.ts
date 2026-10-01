import { NextResponse } from 'next/server';
import { toConcert, type BandsintownEvent } from '@/lib/concerts';

// Proxy keeps the app_id server-side and lets Next cache the upstream response.
export async function GET() {
  const appId = process.env.BANDSINTOWN_APP_ID;
  // The public API looks artists up by name (the numeric id in the web URL is not accepted as id_<n>).
  const artist = process.env.BANDSINTOWN_ARTIST_NAME ?? 'Finde Fantasma';
  if (!appId) {
    console.error('[concerts] BANDSINTOWN_APP_ID is not set (restart the dev server after editing .env.local)');
    return NextResponse.json({ concerts: [] });
  }

  const url = `https://rest.bandsintown.com/artists/${encodeURIComponent(artist)}/events?app_id=${encodeURIComponent(appId)}&date=upcoming`;
  try {
    const res = await fetch(url, { next: { revalidate: process.env.NODE_ENV === 'production' ? 3600 : 0 } });
    if (res.status === 404) {
      console.warn(`[concerts] Bandsintown answered 404: ${(await res.text()).slice(0, 300)}`);
      return NextResponse.json({ concerts: [] });
    }
    if (!res.ok) {
      const body = await res.text();
      console.error(`[concerts] Bandsintown answered ${res.status}: ${body.slice(0, 300)}`);
      return NextResponse.json({ error: true }, { status: 502 });
    }
    const events: unknown = await res.json();
    // The API may answer with an object (e.g. warning) instead of a list when there are no events.
    if (!Array.isArray(events)) {
      console.warn('[concerts] unexpected Bandsintown payload:', JSON.stringify(events).slice(0, 500));
    }
    const list = Array.isArray(events) ? (events as BandsintownEvent[]) : [];
    console.log(`[concerts] Bandsintown returned ${list.length} upcoming event(s)`);
    return NextResponse.json({ concerts: list.map(toConcert) });
  } catch (err) {
    console.error('[concerts] request to Bandsintown failed:', err);
    return NextResponse.json({ error: true }, { status: 502 });
  }
}
