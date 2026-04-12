/** Fallback-safe access to PUBLIC_SITE_URL. Defaults to localhost when unset (e.g. CI typecheck). */
export const SITE_URL: string = import.meta.env.PUBLIC_SITE_URL ?? 'http://localhost:5173';
