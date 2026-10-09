import { useEffect, useState } from 'react';

export interface ScrollState {
  /** Scroll progress through the page, 0..1 */
  prog: number;
  scrolled: boolean;
  /** `data-nav` of the section currently under the header */
  nav: string;
}

export function useScrollState(): ScrollState {
  const [state, setState] = useState<ScrollState>({ prog: 0, scrolled: false, nav: '' });

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = document.scrollingElement || document.documentElement;
      const top = el.scrollTop || 0;
      const max = el.scrollHeight - el.clientHeight;
      const prog = max > 0 ? Math.round((top / max) * 1000) / 1000 : 0;
      const scrolled = top > 8;
      let nav = '';
      document.querySelectorAll('[data-nav]').forEach((sec) => {
        if (sec.getBoundingClientRect().top < 160) nav = sec.getAttribute('data-nav') || '';
      });
      setState((s) => (s.prog === prog && s.scrolled === scrolled && s.nav === nav ? s : { prog, scrolled, nav }));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return state;
}
