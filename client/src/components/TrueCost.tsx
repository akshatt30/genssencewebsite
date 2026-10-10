import { useEffect, useRef, useState, type ChangeEvent, type CSSProperties } from 'react';
import { BASE, HI, LO, MAXQ, SAMPLE, money } from '../lib/content';

const HOW = [
  { t: 'Live Market Data', d: 'Material, energy and freight are priced from live indices on the day of the quote.' },
  { t: 'Cost Deconstruction', d: 'The part is rebuilt from CAD and BOM into material, machine cycle, labor, logistics and fair margin.' },
  { t: 'Target Cost', d: 'The drivers add up to a should-cost baseline with a 95% confidence corridor around it.' },
  { t: 'Negotiation Defense', d: 'The gap to the quote becomes a line-by-line breakdown the buyer can put in front of the supplier.' }
];

const ROWS = [
  { n: 'Raw Materials (Alloy Steel 4140)', d: '4.82 kg tare @ $11.22/kg spot scrap adjusted', v: '$54.10', p: '50.0%', w: '50%', delay: '.5s', sw: 'c1' },
  { n: 'Machine Cycle & Tooling Amortization', d: '14.2 min spindle time @ $120/hr 5-axis rate', v: '$28.40', p: '26.2%', w: '26.2%', delay: '.6s', sw: 'c2' },
  { n: 'Direct Skilled Labor', d: 'Deburr, setup, QC CMM inspection (0.35 hrs)', v: '$14.20', p: '13.1%', w: '13.1%', delay: '.7s', sw: 'c3' },
  { n: 'Logistics, Packaging & Palletizing', d: 'Corrosion vapor wrap + ground freight corridor', v: '$6.10', p: '5.6%', w: '5.6%', delay: '.8s', sw: 'c4' },
  { n: 'Fair Supplier Operating Margin (5%)', d: 'Benchmarked regional tier-1 sustainable margin', v: '$5.40', p: '5.0%', w: '5%', delay: '.9s', sw: 'c5', green: true }
];

const TIERS = [
  { c: '#4fc486', k: 'Tier 1 · 95%+ Confidence', t: 'Qualifiable Drivers', d: 'Indexed metals, plastics and scrap recovery, net weight and volume from CAD, and standard machine spindle burn rates.' },
  { c: '#f0b445', k: 'Tier 2 · Parametric Corridors', t: 'Less-Qualifiable Drivers', d: 'Regional labor rates, tooling setup and changeover, freight and packaging, each held within empirical bands.' },
  { c: '#9fb0cc', k: 'Tier 3 · Isolated Variance', t: 'Non-Qualifiable Drivers', d: 'Supplier IP adders, rush surcharges and unallocated SG&A markups, isolated and flagged instead of modelled.' }
];

/** Full TrueCost walkthrough. Rendered on /products/truecost as its "How it works" section. */
export default function TrueCost({ seen, still, id = 'how' }: { seen: boolean; still: boolean; id?: string }) {
  const [quote, setQuote] = useState(SAMPLE.quote);
  const [cu, setCu] = useState(still ? 1 : 0); // count-up progress 0..1
  const [bd, setBd] = useState(true);
  const raf = useRef(0);

  // Count the metrics up (ease-out cubic, 1.5s) when the section is first seen.
  useEffect(() => {
    if (still) { setCu(1); return; }
    if (!seen) return;
    let t0: number | null = null;
    const tick = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min(1, (t - t0) / 1500);
      setCu(1 - Math.pow(1 - p, 3));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [seen, still]);

  const onQuote = (e: ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    if (isNaN(v)) return;
    cancelAnimationFrame(raf.current);
    setQuote(v);
    setCu(1);
  };

  const k = cu;
  const q = quote;
  const d = q - BASE;
  let status: string, oppCls: string, statusCls: string;
  if (q > HI) { status = (d / q * 100).toFixed(1) + '% Negotiable Margin Variance'; oppCls = ''; statusCls = 'st-neg'; }
  else if (q >= LO) { status = 'Within the should-cost corridor'; oppCls = 'ok'; statusCls = 'st-ok'; }
  else { status = 'Below should-cost floor — validate supplier viability'; oppCls = 'warn'; statusCls = 'st-warn'; }
  const qW = Math.min(100, q / MAXQ * 100);
  const bW = BASE / MAXQ * 100;
  const qFmt = money(q);

  return (
    <section className="sec tc" id={id} data-sec="truecost">
      <div className="wrap">
        <div className="eyebrow rv" data-rv="truecost" style={{ color: '#5ad8ff', marginBottom: 14 }}>How it works</div>
        <div className="split">
          <div className="rv" data-rv="truecost">
            <span className="hero-badge">Hero Product · TrueCost</span>
            <h2 className="h2" style={{ marginTop: 14 }}>From a supplier quote to a defensible target</h2>
          </div>
          <p className="lead rv d1" data-rv="truecost" style={{ maxWidth: 460 }}>Four steps turn a quote into a should-cost baseline and a line-by-line negotiation brief. Try it on the sample part below: drag the simulator, open the breakdown, and see how confident each part of the number is.</p>
        </div>
        <div className="sub-h rv d2" data-rv="truecost">The four steps</div>
        <div className="steps4 rv d2" data-rv="truecost">
          {HOW.map((s, i) => (
            <div key={s.t} className="st4"><div className="st4-h"><b>{i + 1}</b>{s.t}</div><p>{s.d}</p></div>
          ))}
        </div>
        <div className="sub-h rv d3" data-rv="truecost">See it on a sample part</div>
        <div className="panel rv d3" data-rv="truecost">
          <div className="mets">
            <div>
              <div className="met-k"><span>Supplier Quote</span><em>Illustrative example</em></div>
              <div className="met-v">{money(q * k)} <small>/ unit</small></div>
              <div className="met-s">Supplier Submission (Lot 5,000)</div>
            </div>
            <div className="met-cy">
              <div className="met-k"><span>TrueCost Baseline</span><em>Illustrative example</em></div>
              <div className="met-v">{money(BASE * k)} <small>/ unit</small></div>
              <div className="met-s">Parametric Target Baseline</div>
            </div>
            <div>
              <div className="met-k"><span>Target Range</span><em>Illustrative example</em></div>
              <div className="met-v" style={{ fontSize: 26 }}>{money(LO * k)} – {money(HI * k)}</div>
              <div className="met-s">95% Confidence Corridor</div>
            </div>
            <div className={'opp ' + oppCls}>
              <div className="met-k"><span>Opportunity Delta</span><em>Illustrative example</em></div>
              <div className="met-v">{(d < 0 ? '−' : '') + money(Math.abs(d) * k)} <small>/ unit</small></div>
              <div className={'met-s ' + statusCls} style={{ fontWeight: 600 }}>{status}</div>
            </div>
          </div>

          <div className="sim">
            <div>
              <div className="sim-t">Quote simulator</div>
              <p className="sim-p">Drag to test a different supplier quote against the TrueCost baseline and its 95% corridor.</p>
              <div className="sim-in">
                <label className="sim-lbl" htmlFor="quote-range"><span>Supplier quote / unit</span><b>{qFmt}</b></label>
                <input id="quote-range" className="range" type="range" min="95" max="180" step="0.1" value={q} onChange={onQuote} />
              </div>
            </div>
            <div className="cmp">
              <div className="cmp-row">
                <span className="cmp-l">Supplier quote</span>
                <div className="cmp-tr">
                  <div className="cmp-f q" style={{ width: qW.toFixed(2) + '%' }} />
                  <div className="cmp-d" style={{ left: bW.toFixed(2) + '%', width: Math.max(0, qW - bW).toFixed(2) + '%' }} />
                </div>
                <span className="cmp-v">{qFmt}</span>
              </div>
              <div className="cmp-row">
                <span className="cmp-l">TrueCost baseline</span>
                <div className="cmp-tr"><div className="cmp-f b" style={{ width: '60.11%' }} /><div className="cmp-band" style={{ left: '58.22%', width: '4%' }} /></div>
                <span className="cmp-v" style={{ color: '#5ad8ff' }}>$108.20</span>
              </div>
              <div className="axis"><span /><div><span>$0</span><span>$45</span><span>$90</span><span>$135</span><span>$180</span></div><span /></div>
            </div>
          </div>

          <div className="bd-wrap">
            <div className="bd-head">
              <div>
                <h4 className="sim-t">Parametric Cost Deconstruction</h4>
                <p className="sim-p">Physical bill of process deconstruction for CNC Precision Turned Shaft (4140 Alloy Steel).</p>
              </div>
              <button type="button" className={'bd-btn ' + (bd ? '' : 'closed')} onClick={() => setBd(!bd)} aria-expanded={bd} aria-controls="tc-breakdown">
                <span>{bd ? 'Hide Breakdown' : 'See the Breakdown'}</span><span className="ms" aria-hidden="true">expand_less</span>
              </button>
            </div>
            <div className="comp" aria-hidden="true">
              <span className="c1" style={{ width: '50%' }} /><span className="c2" style={{ width: '26.2%' }} /><span className="c3" style={{ width: '13.1%' }} /><span className="c4" style={{ width: '5.6%' }} /><span className="c5" style={{ flexGrow: 1 }} />
            </div>
            <div className={'coll ' + (bd ? '' : 'shut')} id="tc-breakdown">
              <div>
                <div className="rows">
                  {ROWS.map((r) => (
                    <div key={r.n} className="row">
                      <span className="row-n"><span className={'sw ' + r.sw} />{r.n}</span>
                      <span className="row-d">{r.d}</span>
                      <span className="row-v" style={r.green ? { color: '#4fc486' } : undefined}>{r.v}</span>
                      <span className="row-p">{r.p} of target</span>
                      <span className="row-bar" style={{ width: r.w, transitionDelay: r.delay, ...(r.green ? { background: '#4fc486' } : {}) }} />
                    </div>
                  ))}
                </div>
                <div className="row-tot"><span style={{ fontWeight: 600, color: '#ffffff' }}>TrueCost target</span><span /><span className="row-v" style={{ color: '#5ad8ff' }}>$108.20</span><span className="row-p">100%</span></div>
              </div>
            </div>
            <div className="bd-foot"><em>Note: Every figure shown is an illustrative example computed using the TrueCost parametric engineering engine.</em><span>ISO/DIN 4140 Parametric Spec</span></div>
          </div>
        </div>
        <div className="built rv d3" data-rv="truecost">
          <div className="sim-t">How the number is built</div>
          <p className="sim-p" style={{ maxWidth: 640 }}>No black box. Every cost driver is classified by how confidently it can be derived, so you can see which parts of the number are measured, which are bounded, and which are flagged.</p>
          <div className="built-g">
            {TIERS.map((t) => (
              <div key={t.k} className="tierc" style={{ '--tc': t.c } as CSSProperties}>
                <div className="tierc-k">{t.k}</div><h4>{t.t}</h4><p>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
