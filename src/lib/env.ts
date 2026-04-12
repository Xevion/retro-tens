/** Fallback-safe access to PUBLIC_SITE_URL. Dev defaults to :5173, builds to :4173 (preview port). */
const fallback = import.meta.env.DEV ? 'http://localhost:5173' : 'http://localhost:4173';
export const SITE_URL: string = import.meta.env.PUBLIC_SITE_URL ?? fallback;
