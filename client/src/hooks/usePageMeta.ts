import { useEffect } from 'react';

const DEFAULT_TITLE = 'Genessence — Procurement Intelligence';
const DEFAULT_DESCRIPTION = typeof document !== 'undefined'
  ? document.querySelector('meta[name="description"]')?.getAttribute('content') ?? ''
  : '';

/** Sets the document title and meta description for the current page (defaults restore the home page's). */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Genessence` : DEFAULT_TITLE;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description || DEFAULT_DESCRIPTION);
  }, [title, description]);
}
