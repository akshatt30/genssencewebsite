import { useEffect, useState, type RefObject } from 'react';
import { SECTIONS, type SectionKey } from '../lib/content';
import { isStill } from '../lib/motion';

export type Seen = Partial<Record<SectionKey, boolean>>;

const ALL_SEEN: Seen = Object.fromEntries(SECTIONS.map((k) => [k, true]));

/**
 * Scroll reveal. Observes every `[data-sec]` inside `rootRef` and marks a
 * section as seen the first time it enters the viewport. `armed` is only set
 * once JavaScript runs, so content is never hidden without it.
 */
export function useReveal(rootRef: RefObject<HTMLElement>) {
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState<Seen>({});

  useEffect(() => {
    const els = Array.from(rootRef.current?.querySelectorAll<HTMLElement>('[data-sec]') ?? []);
    if (isStill() || typeof IntersectionObserver === 'undefined' || !els.length) {
      setSeen(ALL_SEEN);
      return;
    }
    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        const add: Seen = {};
        let any = false;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          add[e.target.getAttribute('data-sec') as SectionKey] = true;
          any = true;
          io.unobserve(e.target);
        }
        if (any) setSeen((s) => ({ ...s, ...add }));
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef]);

  return { armed, seen };
}
