import { useEffect, useState } from 'react';
import { STEPS } from '../lib/content';
import { alt } from '../lib/motion';

export default function Sourcing({ seen, still }: { seen: boolean; still: boolean }) {
  const [step, setStep] = useState(0);
  const [stepAuto, setStepAuto] = useState(true);
  const [stepHold, setStepHold] = useState(false);
  const [stepTick, setStepTick] = useState(0);
  const [barTick, setBarTick] = useState(0);

  const running = stepAuto && !stepHold && !still && seen;

  // Auto-play every 2.5s with loop. Any step change (stepTick) restarts the timer.
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => {
      setStep((s) => (s + 1) % STEPS.length);
      setStepTick((n) => n + 1);
      setBarTick((n) => n + 1);
    }, 2500);
    return () => clearTimeout(t);
  }, [running, stepTick]);

  const goStep = (i: number) => {
    setStep((i + STEPS.length) % STEPS.length);
    setStepTick((n) => n + 1);
    setBarTick((n) => n + 1);
  };
  const holdOn = () => setStepHold(true);
  const holdOff = () => {
    if (!stepHold) return;
    setStepHold(false);
    setBarTick((n) => n + 1);
  };
  const toggleAuto = () => {
    setStepAuto((a) => !a);
    setBarTick((n) => n + 1);
  };

  const cur = STEPS[step];
  const anim = alt(stepTick);
  const playing = stepAuto && !still;
  const autoLabel = still ? 'Auto-play off (reduced motion)' : running ? 'Auto-playing' : stepAuto ? 'Paused while you explore' : 'Paused';

  return (
    <section className="sec s-surf" id="sourcing" data-sec="sourcing" data-nav="sourcing">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow rv" data-rv="sourcing">End-to-End Workflow · Sourcing360</div>
          <h2 className="h2 rv d1" data-rv="sourcing">Connected procurement. Intelligence at every decision.</h2>
          <p className="lead rv d2" data-rv="sourcing">Click any step to inspect the embedded intelligence model governing that stage of the sourcing lifecycle.</p>
        </div>
        <div className="flow rv d3" data-rv="sourcing" onMouseEnter={holdOn} onMouseLeave={holdOff} onFocus={holdOn} onBlur={holdOff}>
          <div className="track">
            <div className="track-r" />
            <div className="track-f" style={{ width: ((step / (STEPS.length - 1)) * 83.333).toFixed(3) + '%' }} />
            {STEPS.map((st, i) => (
              <button key={st.label} type="button" className={'snode ' + (i === step ? 'on' : i < step ? 'done' : '')} onClick={() => goStep(i)} aria-pressed={i === step}>
                <span className="sdot">{i + 1}</span><span className="slbl">{st.label}</span>
              </button>
            ))}
          </div>
          <div className="sbar" aria-hidden="true"><span className={'stage-bar-i ' + (running ? alt(barTick, 'runA', 'runB') : '')} /></div>
          <div className="sdet">
            <div className={anim}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}><span className="spill">{cur.pill}</span><span className="cap">{cur.engine}</span></div>
              <h4 className="s-h">{cur.head}</h4>
              <p className="s-p">{cur.copy}</p>
            </div>
            <div className="model">
              <span className="model-k">Active Model</span>
              <span className={'model-v ' + anim}>{cur.model}</span>
              <span className="model-s"><i />{cur.note}</span>
            </div>
          </div>
          <div className="ctrls">
            <div className="ctrl-g">
              <button type="button" className="ibtn" aria-label="Previous step" onClick={() => goStep(step - 1)}><span className="ms" aria-hidden="true">chevron_left</span></button>
              <button type="button" className="ibtn" aria-label="Next step" onClick={() => goStep(step + 1)}><span className="ms" aria-hidden="true">chevron_right</span></button>
            </div>
            <span className="cap num">STEP 0{step + 1} / 06</span>
            <button
              type="button"
              className={'tgl ' + (running ? 'on' : '')}
              onClick={toggleAuto}
              aria-label={playing ? 'Pause workflow auto-play' : 'Play workflow auto-play'}
              aria-pressed={playing}
              disabled={still}
            >
              <span className="ms" aria-hidden="true">{playing ? 'pause' : 'play_arrow'}</span>{autoLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
