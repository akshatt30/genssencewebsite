export default function Engines() {
  return (
    <section className="sec" style={{ background: '#ffffff' }} id="engines" data-sec="engines" data-nav="engines">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow rv" data-rv="engines">Intelligence</div>
          <h2 className="h2 rv d1" data-rv="engines">Information tells you what was paid. Intelligence tells you what it should have been.</h2>
          <p className="lead rv d2" data-rv="engines">In manufacturing, that difference lives in the physics of a part: the alloy it is cut from, the minutes on the spindle, the lane it ships on, and the capacity of the supplier quoting it.</p>
          <p className="lead lead-b rv d3" data-rv="engines">Genessence reads it through four dedicated Inference Engines, each built for one side of the sourcing decision.</p>
        </div>
        <div className="eng">
          <div className="cell rv d2" data-rv="engines"><article className="card">
            <div>
              <div className="card-top"><span className="k">01 / Cost</span><span className="ms" aria-hidden="true">price_change</span></div>
              <h3 className="h3">Cost Intelligence</h3>
              <p className="card-p">Parametric should-cost curves based on scrap allowances, cycle time, and material tare.</p>
              <div className="mini">
                <div className="mini-h"><span>Unit Cost vs Volume</span><b className="t-teal">Δ 18.4%</b></div>
                <svg viewBox="0 0 200 60" fill="none">
                  <path d="M5 45 Q70 40 195 30" stroke="#74777f" strokeDasharray="2 2" strokeWidth="1.5" />
                  <path className="fade-in" d="M5 35 Q70 25 195 12 L195 22 Q70 35 5 45 Z" fill="#00677f" fillOpacity=".12" />
                  <path className="dr dr-e" d="M5 35 Q70 25 195 12" stroke="#00677f" strokeWidth="2" />
                  <circle className="beacon" cx="140" cy="18.5" r="3" fill="#00A9CE" />
                  <circle cx="140" cy="18.5" r="3" fill="#00677f" />
                </svg>
                <div className="illus">Illustrative example</div>
              </div>
            </div>
            <p className="card-f">Breaks CAD files down into CNC spindle minutes, heat treat cycles, and net alloy weights.</p>
          </article></div>
          <div className="cell rv d3" data-rv="engines"><article className="card">
            <div>
              <div className="card-top"><span className="k">02 / Supplier</span><span className="ms" aria-hidden="true">corporate_fare</span></div>
              <h3 className="h3">Supplier Intelligence</h3>
              <p className="card-p">Multi-dimensional fit score mapping capability, capacity, quality audits, and ESG risks.</p>
              <div className="mini">
                <div className="mini-h"><span>Capability Polygon</span><b className="t-ok">92/100 Fit</b></div>
                <svg viewBox="0 0 200 60" fill="none">
                  <polygon points="100,3 142,29 126,57 74,57 58,29" stroke="#c4c6cf" strokeDasharray="2 2" strokeWidth=".8" />
                  <polygon points="100,15 128,31 118,48 82,48 72,31" stroke="#c4c6cf" strokeWidth=".6" />
                  <path d="M100 30 L100 3 M100 30 L142 29 M100 30 L126 57 M100 30 L74 57 M100 30 L58 29" stroke="#e1e5ea" strokeWidth=".6" />
                  <polygon className="radar-p" points="100,6 136,27 118,53 83,47 64,29" fill="#00677f" fillOpacity=".2" stroke="#00677f" strokeWidth="1.5" />
                </svg>
                <div className="illus">Illustrative example</div>
              </div>
            </div>
            <p className="card-f">Detects capacity bottlenecks across Tier-2 sub-tier casting and plating suppliers.</p>
          </article></div>
          <div className="cell rv d4" data-rv="engines"><article className="card">
            <div>
              <div className="card-top"><span className="k">03 / Market</span><span className="ms" aria-hidden="true">stacked_line_chart</span></div>
              <h3 className="h3">Market Intelligence</h3>
              <p className="card-p">Live index feeds across LME, CME, energy corridors, and ocean freight container lanes.</p>
              <div className="mini">
                <div className="mini-h"><span>Al 6061 Spot vs Forward</span><b className="t-warn">+4.2% Vol</b></div>
                <svg viewBox="0 0 200 60" fill="none">
                  <path className="fade-in" d="M5 25 Q50 15 100 28 T195 15 L195 45 Q150 55 100 45 T5 40 Z" fill="#00677f" fillOpacity=".08" />
                  <path className="dr dr-e" d="M5 32 Q50 22 100 34 T195 25" stroke="#00677f" strokeWidth="1.75" />
                  <circle className="beacon" cx="195" cy="25" r="3" fill="#00A9CE" />
                  <circle cx="195" cy="25" r="3" fill="#0B2545" />
                </svg>
                <div className="illus">Illustrative example</div>
              </div>
            </div>
            <p className="card-f">Decouples raw commodity index shifts from unjustified supplier contract rate spikes.</p>
          </article></div>
          <div className="cell rv d5" data-rv="engines"><article className="card">
            <div>
              <div className="card-top"><span className="k">04 / Operations</span><span className="ms" aria-hidden="true">factory</span></div>
              <h3 className="h3">Operational Intelligence</h3>
              <p className="card-p">Lead-time variance matrices versus plant lot-sizing, tooling runs, and safety stocks.</p>
              <div className="mini">
                <div className="mini-h"><span>Batch vs Lead-time Delta</span><b className="t-ok">−14 Days</b></div>
                <div className="matrix"><div className="mx">Q1</div><div className="mx">Q2</div><div className="mx">Q3</div><div className="mx">Q4</div></div>
                <div className="illus" style={{ marginTop: 6 }}>Illustrative example</div>
              </div>
            </div>
            <p className="card-f">Synchronizes minimum order quantities against internal inventory carry-cost penalties.</p>
          </article></div>
        </div>
      </div>
    </section>
  );
}
