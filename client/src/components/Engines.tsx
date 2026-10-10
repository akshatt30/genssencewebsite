import { BASE, SAMPLE, SAMPLE_DRIVERS, SAMPLE_GAP, SAMPLE_GAP_PCT, money } from '../lib/content';

const TOTAL = SAMPLE.quote;
const pct = (v: number) => ((v / TOTAL) * 100).toFixed(2) + '%';

/** Information shows the invoice price; Intelligence x-rays it into fair cost drivers plus markup. */
function InvoiceXray() {
  return (
    <div className="xr rv d2" data-rv="engines" role="img" aria-label={`Invoice of ${money(TOTAL)} broken into a fair cost of ${money(BASE)} and ${money(SAMPLE_GAP)} of markup`}>
      <div className="xr-inv">
        <span className="xr-tag">Information</span>
        <h3 className="xr-cap">What was paid</h3>
        <div className="xr-doc">
          <div className="xr-doc-h"><span>Invoice</span><span className="num">Q-2291</span></div>
          <div className="xr-line w80" /><div className="xr-line w55" /><div className="xr-line w65" />
          <div className="xr-doc-p"><span>Unit price</span><b className="num">{money(TOTAL)}</b></div>
          <span className="xr-scan" aria-hidden="true" />
        </div>
      </div>

      <div className="xr-arrow" aria-hidden="true"><span className="ms">east</span><em>TrueCost</em></div>

      <div className="xr-out">
        <span className="xr-tag cy">Intelligence</span>
        <h3 className="xr-cap cy">What should have been paid</h3>
        <div className="xr-bar">
          {SAMPLE_DRIVERS.map((d, i) => (
            <span key={d.k} className="xr-seg" style={{ width: pct(d.v), background: d.c, transitionDelay: 0.5 + i * 0.12 + 's' }} />
          ))}
          <span className="xr-seg xr-mk" style={{ width: pct(SAMPLE_GAP) }} />
        </div>
        <ul className="xr-leg">
          {SAMPLE_DRIVERS.map((d) => (
            <li key={d.k}><i style={{ background: d.c }} />{d.k}<b className="num">{money(d.v)}</b></li>
          ))}
        </ul>
        <div className="xr-sum">
          <div><span>Fair cost</span><b className="num cy">{money(BASE)}</b></div>
          <div className="mk"><span>Markup</span><b className="num">{money(SAMPLE_GAP)}</b><em>{SAMPLE_GAP_PCT}</em></div>
        </div>
      </div>
    </div>
  );
}

export default function Engines() {
  return (
    <section className="sec" style={{ background: '#ffffff' }} id="engines" data-sec="engines" data-nav="engines">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow rv" data-rv="engines">Intelligence</div>
          <h2 className="h2 rv d1" data-rv="engines">Information shows the price. Intelligence shows what’s inside it.</h2>
        </div>
        <InvoiceXray />
      </div>
    </section>
  );
}
