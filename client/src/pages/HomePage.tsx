import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import PageShell from '../components/PageShell';
import Hero from '../components/Hero';
import Engines from '../components/Engines';
import QuoteJourney from '../components/QuoteJourney';
import Architecture from '../components/Architecture';
import Sourcing from '../components/Sourcing';
import ProductSuite from '../components/ProductSuite';
import Outcomes from '../components/Outcomes';
import Industries from '../components/Industries';
import DemoCta from '../components/DemoCta';

export default function HomePage() {
  const { hash } = useLocation();
  usePageMeta();

  // Arriving from another page via "/#section": jump to that section once rendered.
  // Runs on mount only; in-page anchors on the home page scroll natively.
  useEffect(() => {
    if (!hash) { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); return; }
    const raf = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' as ScrollBehavior }));
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageShell>
      {(seen, still) => (
        <>
          <Hero still={still} />
          <Engines />
          <QuoteJourney seen={!!seen.gap} still={still} />
          <Architecture seen={!!seen.platform} still={still} />
          <Sourcing seen={!!seen.sourcing} still={still} />
          <ProductSuite />
          <Outcomes />
          <Industries />
          <DemoCta />
        </>
      )}
    </PageShell>
  );
}
