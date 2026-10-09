// Staggered delays for the 24 spend-visibility cells, from the design.
const CELL_DELAYS = ['0.00', '0.98', '1.96', '2.94', '0.56', '1.54', '2.52', '0.14', '1.12', '2.10', '3.08', '0.70', '1.68', '2.66', '0.28', '1.26', '2.24', '3.22', '0.84', '1.82', '2.80', '0.42', '1.40', '2.38'];

function Top({ icon, k }: { icon: string; k: string }) {
  return <div className="oc-top"><span className="oc-i"><span className="ms" aria-hidden="true">{icon}</span></span><span className="oc-k">{k}</span></div>;
}

export default function Outcomes() {
  return (
    <section className="sec dark oc-sec" id="outcomes" data-sec="outcomes" data-nav="outcomes">
      <div className="dark-grid" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="split">
          <div className="rv" data-rv="outcomes">
            <div className="eyebrow">Quantifiable Value</div>
            <h2 className="h2">Engineered for Executive Impact</h2>
          </div>
          <p className="lead rv d1" data-rv="outcomes">Grounded operational metrics designed for Chief Procurement Officers and manufacturing controllers.</p>
        </div>
        <div className="bento">
          <div className="cell b2 rv d2" data-rv="outcomes"><article className="oc wide">
            <div className="oc-txt">
              <Top icon="trending_down" k="01 · Cost" />
              <h3 className="oc-t">Lower Procurement Cost</h3>
              <p className="oc-p">Defensible should-cost baselines eliminate supplier markup asymmetry across direct BOM categories.</p>
            </div>
            <div className="ov" aria-hidden="true">
              <div className="ov-h"><span><i className="lg q" />Supplier price</span><span><i className="lg c" />Should-cost baseline</span></div>
              <svg viewBox="0 0 400 120" fill="none" preserveAspectRatio="none">
                <path d="M0 30 H400 M0 60 H400 M0 90 H400" stroke="rgba(213,219,225,.08)" strokeWidth="1" />
                <path className="oc-area" d="M0 34 C80 30 160 26 240 24 S360 20 400 18 L400 92 C340 90 300 84 240 76 S120 52 0 44 Z" fill="rgba(0,169,206,.14)" />
                <path className="dro" d="M0 34 C80 30 160 26 240 24 S360 20 400 18" stroke="#7f8ea8" strokeWidth="2" strokeDasharray="4 4" />
                <path className="dro dro-c" d="M0 44 C120 52 180 66 240 76 S340 90 400 92" stroke="#00A9CE" strokeWidth="2.5" />
                <circle className="beacon" cx="398" cy="92" r="4" fill="#00A9CE" />
                <circle cx="398" cy="92" r="4" fill="#5ad8ff" />
              </svg>
              <div className="ov-tag">Markup gap made visible</div>
            </div>
          </article></div>

          <div className="cell rv d3" data-rv="outcomes"><article className="oc">
            <Top icon="speed" k="02 · Speed" />
            <h3 className="oc-t">Faster RFQ Cycles</h3>
            <p className="oc-p">Automated CAD deconstruction cuts evaluation from 3 weeks of back-and-forth down to under 4 hours.</p>
            <div className="ov" aria-hidden="true">
              <div className="rfq"><span className="rfq-l">Manual evaluation</span><span className="rfq-t"><span className="rfq-b g" /></span><b className="num">3 wks</b></div>
              <div className="rfq"><span className="rfq-l">With Genessence</span><span className="rfq-t"><span className="rfq-b c" /></span><b className="num" style={{ color: '#5ad8ff' }}>&lt; 4 hrs</b></div>
            </div>
          </article></div>

          <div className="cell rv d2" data-rv="outcomes"><article className="oc">
            <Top icon="rule" k="03 · Suppliers" />
            <h3 className="oc-t">Better Supplier Decisions</h3>
            <p className="oc-p">Multi-dimensional qualification scoring evaluates capacity utilization and carbon footprint beyond quote price.</p>
            <div className="ov" aria-hidden="true">
              <div className="sr"><span>Vendor A</span><span className="sr-t"><span className="sr-b" style={{ width: '88%', transitionDelay: '.5s' }} /></span><em>Awarded</em></div>
              <div className="sr dim"><span>Vendor B</span><span className="sr-t"><span className="sr-b" style={{ width: '71%', transitionDelay: '.62s' }} /></span><em /></div>
              <div className="sr dim"><span>Vendor C</span><span className="sr-t"><span className="sr-b" style={{ width: '58%', transitionDelay: '.74s' }} /></span><em /></div>
              <div className="sr-k">Capacity · quality · carbon · price</div>
            </div>
          </article></div>

          <div className="cell rv d3" data-rv="outcomes"><article className="oc">
            <Top icon="visibility" k="04 · Visibility" />
            <h3 className="oc-t">Higher Spend Visibility</h3>
            <p className="oc-p">Unified category intelligence harmonizes part taxonomies across disparate North American and European plant ERPs.</p>
            <div className="ov" aria-hidden="true">
              <div className="cells">
                {CELL_DELAYS.map((d, i) => <span key={i} className="cl" style={{ animationDelay: d + 's' }} />)}
              </div>
              <div className="sr-k">Part taxonomies harmonized across plant ERPs</div>
            </div>
          </article></div>

          <div className="cell rv d4" data-rv="outcomes"><article className="oc">
            <Top icon="handshake" k="05 · Negotiation" />
            <h3 className="oc-t">Data-Driven Negotiation</h3>
            <p className="oc-p">Fact-based cost-driver sheets that suppliers respect, fostering sustainable and defensible partnerships.</p>
            <div className="ov" aria-hidden="true">
              <div className="ng"><span className="ng-b" /><span className="ng-m"><em>Should-cost</em></span></div>
              <div className="ng-l"><span>Quote, line by line</span><span className="num">→ target</span></div>
            </div>
          </article></div>

          <div className="cell b3 rv d3" data-rv="outcomes"><article className="oc wide">
            <div className="oc-txt">
              <Top icon="verified_user" k="06 · Compliance" />
              <h3 className="oc-t">Auditable Compliance</h3>
              <p className="oc-p">Tamper-proof procurement trails and mathematical rationale ready for board and external audit review.</p>
            </div>
            <div className="ov log" aria-hidden="true">
              <div className="lg-r lr1"><span className="num">09:14</span><span>Should-cost baseline attached to RFQ-2291</span><span className="ok-d"><span className="ms">check</span></span></div>
              <div className="lg-r lr2"><span className="num">11:02</span><span>Negotiation rationale signed by category lead</span><span className="ok-d"><span className="ms">check</span></span></div>
              <div className="lg-r lr3"><span className="num">15:40</span><span>Award approved · PO written back to ERP</span><span className="ok-d"><span className="ms">check</span></span></div>
              <div className="lg-r lr4"><span className="num">15:41</span><span>Audit trail sealed for finance review</span><span className="ok-d"><span className="ms">lock</span></span></div>
            </div>
          </article></div>
        </div>
      </div>
    </section>
  );
}
