import { useRef } from 'react';
import { useReveal } from './hooks/useReveal';
import { useScrollState } from './hooks/useScrollState';
import { isStill } from './lib/motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Engines from './components/Engines';
import QuoteJourney from './components/QuoteJourney';
import Architecture from './components/Architecture';
import Sourcing from './components/Sourcing';
import ProductSuite from './components/ProductSuite';
import Outcomes from './components/Outcomes';
import Industries from './components/Industries';
import TrueCost from './components/TrueCost';
import DemoCta from './components/DemoCta';
import Footer from './components/Footer';

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { armed, seen } = useReveal(rootRef);
  const scroll = useScrollState();
  const still = isStill();

  const rootCls = [
    'gx',
    armed && 'armed',
    still && 'still',
    ...Object.keys(seen).map((k) => 'seen-' + k)
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div id="top" className={rootCls} ref={rootRef} style={{ width: '100%' }}>
      <Header scroll={scroll} />
      <Hero still={still} />
      <Engines />
      <QuoteJourney seen={!!seen.gap} still={still} />
      <Architecture seen={!!seen.platform} still={still} />
      <Sourcing seen={!!seen.sourcing} still={still} />
      <ProductSuite />
      <Outcomes />
      <Industries />
      <TrueCost seen={!!seen.truecost} still={still} />
      <DemoCta />
      <Footer />
      <a className={'totop ' + (scroll.prog > 0.08 ? '' : 'off')} href="#top" aria-label="Back to top">
        <span className="ms" aria-hidden="true">arrow_upward</span>
      </a>
    </div>
  );
}
