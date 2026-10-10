import { useEffect, useState } from 'react';
import { SAMPLE_GAP, SAMPLE } from '../lib/content';

const GAP_PCT = Math.round((SAMPLE_GAP / SAMPLE.quote) * 100);

/** Six outcomes, each a big figure and a short caption. `count` figures count up when seen. */
const STATS: { icon: string; big: string; count?: number; suffix?: string; cap: string; note?: boolean }[] = [
  { icon: 'trending_down', big: GAP_PCT + '%', count: GAP_PCT, suffix: '%', cap: 'markup exposed on a quote', note: true },
  { icon: 'bolt', big: '< 4 hrs', cap: 'RFQ evaluation, not 3 weeks' },
  { icon: 'event_available', big: 'Before', cap: 'the PO, not 60–90 days after' },
  { icon: 'visibility', big: '1 view', cap: 'of spend across every plant ERP' },
  { icon: 'balance', big: 'Line by line', cap: 'negotiation, backed by should-cost' },
  { icon: 'verified_user', big: 'Audit-ready', cap: 'rationale on every award' }
];

export default function Outcomes({ seen, still }: { seen: boolean; still: boolean }) {
  const [k, setK] = useState(still ? 1 : 0);

  // Count up once when the section is first seen (ease-out, 1.2s).
  useEffect(() => {
    if (still) { setK(1); return; }
    if (!seen) return;
    let raf = 0;
    let t0: number | null = null;
    const tick = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min(1, (t - t0) / 1200);
      setK(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, still]);

  return (
    <section className="sec dark oc-sec" id="outcomes" data-sec="outcomes" data-nav="outcomes">
      <div className="dark-grid" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head" style={{ marginBottom: 48 }}>
          <div className="eyebrow rv" data-rv="outcomes">Executive impact</div>
          <h2 className="h2 rv d1" data-rv="outcomes">What changes for CXOs</h2>
        </div>
        <div className="bign">
          {STATS.map((s, i) => (
            <div key={s.cap} className={'bign-c rv d' + (i + 2)} data-rv="outcomes">
              <span className="ms" aria-hidden="true">{s.icon}</span>
              <b className="bign-v">{s.count !== undefined ? Math.round(s.count * k) + (s.suffix ?? '') : s.big}{s.note && <sup>*</sup>}</b>
              <span className="bign-k">{s.cap}</span>
            </div>
          ))}
        </div>
        <p className="bign-f rv d8" data-rv="outcomes">* From the illustrative TrueCost example ({SAMPLE.partInline}).</p>
      </div>
    </section>
  );
}
