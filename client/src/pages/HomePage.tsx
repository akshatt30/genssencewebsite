import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import PageShell from '../components/PageShell';
import Hero from '../components/Hero';
import Engines from '../components/Engines';
import QuoteJourney from '../components/QuoteJourney';
import Architecture from '../components/Architecture';
// Sourcing360 workflow is hidden for now (it mixes several products); kept for later use.
// import Sourcing from '../components/Sourcing';
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
          {/* Hidden for now — re-enable with the import above:
          <Sourcing seen={!!seen.sourcing} still={still} /> */}
          <ProductSuite seen={!!seen.suite} still={still} />
          <Outcomes seen={!!seen.outcomes} still={still} />
          <Industries />
          <DemoCta />
        </>
      )}
    </PageShell>
  );
}
