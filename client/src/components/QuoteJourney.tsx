import { useEffect, useState } from 'react';
import { SUITE } from '../lib/content';

const STATUS_QUO = [
  { t: 'Quote lands in an inbox', d: 'A PDF arrives by email and is re-keyed by hand into a buyer\'s spreadsheet.' },
  { t: 'Compared with last year', d: 'Checked against the previous PO price and two rival quotes, never against what the part should cost.' },
  { t: 'Surcharges taken on trust', d: 'Raw material and energy inflation claims are accepted without deconstruction.' },
  { t: 'Negotiated by instinct', d: 'A round-number discount is requested, and the supplier concedes a fraction of it.' },
  { t: 'Variance found too late', d: 'The gap surfaces 60–90 days after the PO, during ERP reconciliation.' }
];

export default function QuoteJourney({ seen, still }: { seen: boolean; still: boolean }) {
  const [gap, setGap] = useState<'what' | 'next'>('next');
  const [suite, setSuite] = useState(0);
  const [jStep, setJStep] = useState(0);

  // Steps the "With Genessence" column through 1→5, holding longer on the outcome.
  useEffect(() => {
    if (!seen || still) return;
    const t = setTimeout(() => setJStep((s) => (s >= 4 ? 0 : s + 1)), jStep >= 4 ? 3200 : 1600);
    return () => clearTimeout(t);
  }, [seen, still, jStep]);

  const cur = SUITE[suite] || SUITE[0];
  const jc = still ? cur.steps.length - 1 : jStep;

  return (
    <section className="sec s-grey" data-sec="gap" data-nav="journey" id="journey">
      <div className="wrap">
        <div className="sec-head center" style={{ maxWidth: 720 }}>
          <div className="eyebrow rv" data-rv="gap">The Quote Journey</div>
          <h2 className="h2 rv d1" data-rv="gap">One quote. Two very different journeys.</h2>
          <p className="lead rv d2" data-rv="gap">Follow a single supplier quote from inbox to award: the way it is handled today, and the way it moves through Genessence.</p>
        </div>
        <div className="vs">
          <div className="vs-mid rv d5" data-rv="gap"><span className="ms" aria-hidden="true">east</span></div>
          <div className="cell rv d3" data-rv="gap">
            <div className={'col ' + (gap === 'what' ? 'focus' : 'dim')} onMouseEnter={() => setGap('what')} onMouseLeave={() => setGap('next')}>
              <div className="col-h"><span className="col-t"><span className="dot" />Without Genessence</span><span className="col-k">Status Quo</span></div>
              <p className="col-p">The traditional route: inboxes, spreadsheets and last year&#39;s price.</p>
              <ol className="jl">
                {STATUS_QUO.map((s, i) => (
                  <li key={i} className="js"><span className="jn">{i + 1}</span><div><div className="li-t">{s.t}</div><div className="li-d">{s.d}</div></div></li>
                ))}
              </ol>
              <div className="j-out"><span className="ms" aria-hidden="true">flag</span><span>A price accepted on trust, and a variance discovered after the PO.</span></div>
            </div>
          </div>
          <div className="cell rv d4" data-rv="gap">
            <div className={'col next ' + (gap === 'next' ? 'focus' : 'dim')}>
              <div className="col-h"><span className="col-t"><span className="dot" />With Genessence</span><span className="col-k">Genessence Active</span></div>
              <div className="suite">
                <span className="suite-k">Suite example</span>
                {SUITE.map((p, i) => (
                  <button key={p.id} type="button" className={'stab ' + (i === suite ? 'on' : '')} onClick={() => setSuite(i)} aria-pressed={i === suite}>{p.name}</button>
                ))}
              </div>
              <p className="col-p">{cur.intro}</p>
              <ol className="jl">
                {cur.steps.map((x, i) => (
                  <li key={x.n} className={'js ' + (i < jc ? 'lit past' : i === jc ? 'lit cur' : 'wait')}>
                    <span className="jn">{x.n}</span><div><div className="li-t">{x.t}</div><div className="li-d">{x.d}</div></div>
                  </li>
                ))}
              </ol>
              <div className={'j-out ' + (still || jStep >= 4 ? 'done' : '')}><span className="ms" aria-hidden="true">verified</span><span>{cur.out}</span></div>
              <a className="j-link" href={cur.href}>{cur.cta}<span className="ms" aria-hidden="true">arrow_forward</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
