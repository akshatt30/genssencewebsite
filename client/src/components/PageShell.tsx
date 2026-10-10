import { useRef, type ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useScrollState } from '../hooks/useScrollState';
import { isStill } from '../lib/motion';
import Header from './Header';
import Footer from './Footer';

/** Root of every page: scroll reveal classes, header, footer and back-to-top. */
export default function PageShell({ children }: { children: (seen: ReturnType<typeof useReveal>['seen'], still: boolean) => ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const { armed, seen } = useReveal(rootRef);
  const scroll = useScrollState();
  const still = isStill();

  const rootCls = ['gx', armed && 'armed', still && 'still', ...Object.keys(seen).map((k) => 'seen-' + k)]
    .filter(Boolean)
    .join(' ');

  return (
    <div id="top" className={rootCls} ref={rootRef} style={{ width: '100%' }}>
      <Header scroll={scroll} />
      <main>{children(seen, still)}</main>
      <Footer />
      <a className={'totop ' + (scroll.prog > 0.08 ? '' : 'off')} href="#top" aria-label="Back to top">
        <span className="ms" aria-hidden="true">arrow_upward</span>
      </a>
    </div>
  );
}
