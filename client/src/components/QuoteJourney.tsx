import { useEffect, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { BASE, SAMPLE, SUITE, money } from '../lib/content';

const TODAY_STEPS = [
  { short: 'Inbox', icon: 'mail' },
  { short: 'Spreadsheet', icon: 'table_chart' },
  { short: 'Trust', icon: 'help' },
  { short: 'Haggle', icon: 'forum' },
  { short: 'Surprise', icon: 'warning' }
];

/** One row of the scorecard: label, value, and an optional bar (0–100). */
function Metric({ k, v, bar, note, text }: { k: string; v: string; bar?: number; note?: string; text?: boolean }) {
  return (
    <div className="sc-m">
      <span className="sc-k">{k}</span>
      <b className={'sc-v ' + (text ? 'txt' : 'num')}>{v}</b>
      {bar !== undefined && <span className="sc-tr2"><span className="sc-f" style={{ width: bar + '%' }} /></span>}
      {note && <span className="sc-n">{note}</span>}
    </div>
  );
}

export default function QuoteJourney({ seen, still }: { seen: boolean; still: boolean }) {
  const [jStep, setJStep] = useState(0);

  // Lights the Genessence steps 1→5, holding longer on the last one.
  useEffect(() => {
    if (!seen || still) return;
    const t = setTimeout(() => setJStep((s) => (s >= 4 ? 0 : s + 1)), jStep >= 4 ? 3200 : 1400);
    return () => clearTimeout(t);
  }, [seen, still, jStep]);

  const cur = SUITE[0];
  const jc = still ? cur.steps.length - 1 : jStep;
  const done = still || jStep >= 4;

  return (
    <section className="sec s-grey" data-sec="gap" data-nav="journey" id="journey">
      <div className="wrap">
        <div className="sec-head center" style={{ maxWidth: 720 }}>
          <div className="eyebrow rv" data-rv="gap">The Quote Journey</div>
          <h2 className="h2 rv d1" data-rv="gap">One {money(SAMPLE.quote)} quote. Two outcomes.</h2>
        </div>

        <div className="vs">
          <div className="vs-mid rv d5" data-rv="gap"><span className="ms" aria-hidden="true">east</span></div>

          <div className="cell rv d3" data-rv="gap">
            <article className="scd">
              <div className="scd-h"><span className="col-t"><span className="dot" />Without Genessence</span></div>
              <Metric k="Price paid" v={money(SAMPLE.quote)} bar={100} />
              <Metric k="Time to decide" v="3 weeks" bar={100} />
              <Metric k="Variance found" v="After the PO" note="60–90 days later" text />
              <ol className="scd-steps">
                {TODAY_STEPS.map((st) => (
                  <li key={st.short}><span className="ms" aria-hidden="true">{st.icon}</span>{st.short}</li>
                ))}
              </ol>
              <div className="scd-out"><span className="ms" aria-hidden="true">flag</span>Accepted on trust</div>
            </article>
          </div>

          <div className="cell rv d4" data-rv="gap">
            <article className="scd on">
              <div className="scd-h"><span className="col-t"><span className="dot" />With Genessence</span><span className="scd-chip">{cur.name}</span></div>
              <Metric k="Target price" v={money(BASE)} bar={(BASE / SAMPLE.quote) * 100} />
              <Metric k="Time to decide" v="< 4 hours" bar={3} />
              <Metric k="Variance found" v="Before the PO" note="Line by line" text />
              <ol className="scd-steps" style={{ '--jf': (jc / (cur.steps.length - 1)) * 80 + '%' } as CSSProperties}>
                {cur.steps.map((st, i) => (
                  <li key={st.n} className={i < jc ? 'past' : i === jc ? 'cur' : ''} title={st.t}>
                    <span className="ms" aria-hidden="true">{st.icon}</span>{st.short}
                  </li>
                ))}
              </ol>
              <div className={'scd-out ' + (done ? 'done' : '')}><span className="ms" aria-hidden="true">verified</span>Defensible, and on file</div>
              <Link className="j-link" to={cur.href}>{cur.cta}<span className="ms" aria-hidden="true">arrow_forward</span></Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
