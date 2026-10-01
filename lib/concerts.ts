export interface Concert {
  id: string;
  date: string; // e.g. "15 Enero 27"
  venue: string;
  city: string;
  ticketUrl: string;
}

interface BandsintownEvent {
  id: string;
  datetime: string;
  url: string;
  venue: { name: string; city: string; country: string };
  offers?: { type: string; url: string }[];
}

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// "2027-01-15T20:00:00" -> "15 Enero 27" (string slicing avoids timezone shifts)
const formatDate = (iso: string) => {
  const [y, m, d] = iso.slice(0, 10).split('-');
  return `${Number(d)} ${MONTHS[Number(m) - 1]} ${y.slice(2)}`;
};

export const toConcert = (e: BandsintownEvent): Concert => ({
  id: e.id,
  date: formatDate(e.datetime),
  venue: e.venue.name,
  city: [e.venue.city, e.venue.country].filter(Boolean).join(', '),
  ticketUrl: e.offers?.find((o) => o.type === 'Tickets')?.url ?? e.url,
});

export type { BandsintownEvent };
