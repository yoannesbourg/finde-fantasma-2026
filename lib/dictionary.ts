import es from '@/dictionaries/es.json';

// Single-locale for now; add more JSON files and switch here to extend.
export type Dictionary = typeof es;
export const getDictionary = (): Dictionary => es;
