import { useEffect, useState } from 'react';
import { ARCH } from '../lib/content';
import { alt } from '../lib/motion';

export default function Architecture({ seen, still }: { seen: boolean; still: boolean }) {
  const [arch, setArch] = useState(0);
  const [archAuto, setArchAuto] = useState(true);
  const [archTick, setArchTick] = useState(0);

  // Auto-advance every 2.5s once the section is seen, until a stage is clicked.
  useEffect(() => {
    if (!seen || !archAuto || still) return;
    const t = setTimeout(() => {
      setArch((a) => (a + 1) % ARCH.length);
      setArchTick((n) => n + 1);
    }, 2500);
    return () => clearTimeout(t);
  }, [seen, archAuto, still, archTick]);

  const pick = (i: number) => {
    setArch(i);
    setArchAuto(false);
    setArchTick((n) => n + 1);
  };

  const cur = ARCH[arch];
  const anim = alt(archTick);

  return (
    <section className="sec dark" id="platform" data-sec="platform" data-nav="platform">
      <div className="dark-grid" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="split">
          <div className="rv" data-rv="platform">
            <div className="eyebrow">Architecture</div>
            <h2 className="h2">The Genessence Intelligence Layer</h2>
          </div>
          <p className="lead rv d1" data-rv="platform">The continuous 5-stage synthesis transforming raw industrial signals into balance-sheet margin expansion. Select a stage to inspect it.</p>
        </div>
        <div className="rv d2" data-rv="platform">
          <div className="rail-row" aria-hidden="true">
            <div className="rail" />
            <div className="rail-f" style={{ width: (arch / (ARCH.length - 1)) * 80 + '%' }} />
            <div className="ticks5">
              {ARCH.map((a, i) => <span key={a.n} className={i === arch ? 'on' : ''} />)}
            </div>
          </div>
          <div className="stages">
            {ARCH.map((a, i) => {
              const on = i === arch;
              const bar = on ? (archAuto && !still ? alt(archTick, 'runA', 'runB') : 'full') : '';
              return (
                <button key={a.n} type="button" className={'stage ' + (on ? 'on' : '')} onClick={() => pick(i)} aria-pressed={on}>
                  <span className="stage-top"><span className="stage-code">STAGE {a.n}</span><span className="stage-dot" /></span>
                  <span className="stage-t">{a.t}</span>
                  <span className="stage-s">{a.s}</span>
                  <span className="stage-bar"><span className={'stage-bar-i ' + bar} /></span>
                </button>
              );
            })}
          </div>
          <div className="detail">
            <div className={anim}>
              <div className="det-tag"><b>{cur.num}</b><i>•</i><span>{cur.sub}</span></div>
              <h3 className="det-h">{cur.head}</h3>
              <p className="det-p">{cur.desc}</p>
            </div>
            <div className="meters">
              <div className="meter"><span>Latency</span><span className={'meter-v ' + anim}>{cur.lat}</span></div>
              <div className="vsep" />
              <div className="meter"><span>Confidence Index</span><span className={'meter-v g ' + anim}>{cur.conf}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
