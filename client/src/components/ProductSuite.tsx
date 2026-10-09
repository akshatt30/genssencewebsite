import type { ReactNode } from 'react';

const SPEND_BARS = [
  { h: '55%', m: 'Apr' }, { h: '68%', m: 'May' }, { h: '62%', m: 'Jun' },
  { h: '80%', m: 'Jul' }, { h: '74%', m: 'Aug', fc: true }, { h: '88%', m: 'Sep', fc: true }
];

function Group({ icon, title, sub, d }: { icon: string; title: string; sub?: string; d: string }) {
  return (
    <div className={'grp rv ' + d} data-rv="suite">
      <span className="grp-i"><span className="ms" aria-hidden="true">{icon}</span></span>
      <h3 className="grp-t">{title}</h3>
      {sub && <span className="grp-s">{sub}</span>}
    </div>
  );
}

function Card({ d, k, title, text, wide, children }: { d: string; k: string; title: string; text: string; wide?: boolean; children: ReactNode }) {
  return (
    <div className={'cell rv ' + d} data-rv="suite">
      <article className="pc">
        <div className="mock"><div className={'ui' + (wide ? ' wide' : '')} aria-hidden="true">{children}</div></div>
        <div className="pc-b"><span className="k">{k}</span><h4 className="pc-t">{title}</h4><p className="pc-p">{text}</p></div>
      </article>
    </div>
  );
}

export default function ProductSuite() {
  return (
    <section className="sec" style={{ background: '#ffffff' }} id="suite" data-sec="suite" data-nav="suite">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 32 }}>
          <div className="eyebrow rv" data-rv="suite">Product Suite</div>
          <h2 className="h2 rv d1" data-rv="suite">Sourcing360 — the connected procurement platform</h2>
          <p className="lead rv d2" data-rv="suite">A modular platform that digitizes every stage of sourcing, brings intelligence into daily decisions, and gives the whole procurement team — not just leadership — the visibility and accountability to act faster and negotiate better.</p>
          <p className="cap rv d2" data-rv="suite" style={{ marginTop: 10, fontStyle: 'italic' }}>Product visuals are illustrative examples.</p>
        </div>

        <Group d="d2" icon="event_note" title="Procurement Operations" sub="— runs the day-to-day sourcing cycle on one connected system" />
        <div className="sg4">
          <Card d="d2" k="Procurement Ops" title="Vendor Management" text="End-to-end onboarding: agreements, signatures and compliance verified against GST, PAN and government records, synced to ERP.">
            <div className="ui-h"><span>Vendor onboarding · V-1042</span><span className="chip-s">In review</span></div>
            <div className="ui-row"><span>Agreement signed</span><span className="tick tk1"><span className="ms">check</span></span></div>
            <div className="ui-row"><span>GST verified</span><span className="tick tk2"><span className="ms">check</span></span></div>
            <div className="ui-row"><span>PAN verified</span><span className="tick tk3"><span className="ms">check</span></span></div>
            <div className="ui-row"><span>Synced to ERP</span><span className="tick tk4"><span className="ms">check</span></span></div>
            <div className="ui-bar"><span className="ob-fill" /></div>
          </Card>
          <Card d="d3" k="Procurement Ops" title="RFQ Management" text="Plants raise requests directly to sourcing with vendor quotes attached — negotiate against last buying price, or push into a live auction.">
            <div className="ui-h"><span>RFQ-2291 · 3 quotes</span><span className="chip-live"><i />Live auction</span></div>
            <div className="q"><span className="q-n">Vendor A</span><span className="q-tr"><span className="q-b qa" /></span><span className="q-v num">₹412</span></div>
            <div className="q best"><span className="q-n">Vendor B</span><span className="q-tr"><span className="q-b qb" /></span><span className="q-v num">₹398</span></div>
            <div className="q"><span className="q-n">Vendor C</span><span className="q-tr"><span className="q-b qc" /></span><span className="q-v num">₹405</span></div>
            <div className="lbp"><span>Last buying price</span><b className="num">₹390</b></div>
          </Card>
          <Card d="d2" k="Procurement Ops" title="Supplier Allocation" text="Splits order volume across qualified vendors based on cost — allocation driven by data, not habit or relationship.">
            <div className="ui-h"><span>Order volume · 12,000 units</span><span>3 qualified</span></div>
            <div className="alloc"><span className="al al1" /><span className="al al2" /><span className="al al3" /></div>
            <div className="leg">
              <span><i style={{ background: '#00677f' }} />Vendor A · 55%</span>
              <span><i style={{ background: '#00A9CE' }} />Vendor B · 30%</span>
              <span><i style={{ background: '#9fb0cc' }} />Vendor C · 15%</span>
            </div>
            <div className="ui-foot">Split on landed cost, quality and capacity</div>
          </Card>
          <Card d="d3" k="Procurement Ops" title="Spend Management" text="Full spend visibility by category and vendor, plus forward business forecasts shared with vendors so they can plan capacity ahead.">
            <div className="ui-h"><span>Spend · all categories</span><span className="leg2"><i />Actual <i className="d" />Forecast</span></div>
            <div className="bars">
              {SPEND_BARS.map((b, i) => (
                <span key={b.m} className="bc">
                  <span className={'bb ' + (b.fc ? 'fc' : '')} style={{ height: b.h, animationDelay: (i * 0.12).toFixed(2) + 's' }} />
                  <em>{b.m}</em>
                </span>
              ))}
            </div>
            <div className="ui-foot">Forecast shared with vendors for capacity planning</div>
          </Card>
        </div>

        <Group d="d2" icon="local_shipping" title="Logistics Intelligence" sub="— cost discipline for freight and cross-border movement" />
        <div className="sg3">
          <Card d="d2" k="Logistics" title="Transport Management" text="Carrier selection, live rate benchmarking, real-time shipment tracking and proof of delivery.">
            <div className="ui-h"><span>Shipment · Pune → Chennai</span><span className="chip-s ok">On time</span></div>
            <div className="route r3">
              <span className="rt-line" /><span className="rt-fill" />
              <span className="stop sp1" style={{ left: '0%' }} /><span className="stop sp2" style={{ left: '50%' }} /><span className="stop sp3" style={{ left: '100%' }} />
              <span className="mover"><span className="ms">local_shipping</span></span>
            </div>
            <div className="route-l"><span>Picked up</span><span>In transit</span><span>Proof of delivery</span></div>
            <div className="ui-row"><span>Benchmarked rate</span><b className="num">₹38 / km</b></div>
          </Card>
          <Card d="d3" k="Logistics" title="Should-Cost Transport" text="Flags freight cost inefficiencies using live data — negotiate logistics with hard numbers, not carrier quotes.">
            <div className="ui-h"><span>Lane · Pune → Chennai · 32 ft</span><span>FTL</span></div>
            <div className="sc"><span>Carrier quote</span><span className="sc-tr"><span className="sc-b sg" /></span><b className="num">₹48,500</b></div>
            <div className="sc"><span>Should-cost</span><span className="sc-tr"><span className="sc-b sb" /></span><b className="num" style={{ color: '#00677f' }}>₹41,200</b></div>
            <span className="flagc"><span className="ms">flag</span>17.7% above should-cost</span>
          </Card>
          <Card d="d4" wide k="Logistics" title="EXIM" text="Digitizes customs, compliance, shipment tracking, CHA coordination and shipping lines into one connected import-export workflow.">
            <div className="ui-h"><span>Import · BL MSKU 7781 · Nhava Sheva</span><span className="chip-s ok">Cleared</span></div>
            <div className="route r5">
              <span className="rt-line" /><span className="rt-fill" />
              {['0%', '25%', '50%', '75%', '100%'].map((left, i) => <span key={left} className={'stop ex' + (i + 1)} style={{ left }} />)}
              <span className="mover"><span className="ms">directions_boat</span></span>
            </div>
            <div className="route-l five"><span>Customs</span><span>Compliance</span><span>CHA</span><span>Shipping line</span><span>Delivered</span></div>
          </Card>
        </div>

        <div className="sg2 duo">
          <div>
            <Group d="d3" icon="eco" title="Sustainability" />
            <div className="sg1">
              <Card d="d3" k="Sustainability" title="ESG" text="Tracks carbon and compliance at the vendor and asset level, built into the sourcing workflow rather than a separate reporting exercise.">
                <div className="ui-h"><span>Vendor carbon intensity</span><span>Scope 3</span></div>
                <div className="sc"><span>Vendor A</span><span className="sc-tr"><span className="sc-b e1" /></span><span className="chip-s ok">Low</span></div>
                <div className="sc"><span>Vendor B</span><span className="sc-tr"><span className="sc-b e2" /></span><span className="chip-s warn">High</span></div>
                <div className="sc"><span>Vendor C</span><span className="sc-tr"><span className="sc-b e3" /></span><span className="chip-s ok">Low</span></div>
                <div className="ui-foot">Tracked inside the sourcing workflow</div>
              </Card>
            </div>
          </div>
          <div>
            <Group d="d4" icon="monitoring" title="Cost Intelligence" />
            <div className="sg1">
              <Card d="d4" k="Cost Intelligence" title="CostInnovation" text="Tracks every buyer's performance item by item, turning individual negotiation wins into team-wide accountability.">
                <div className="ui-h"><span>Negotiation wins · by buyer</span><span>Item-level</span></div>
                <div className="lb"><span className="av">RK</span><span className="sc-tr"><span className="sc-b l1" /></span><b className="num">42 items</b></div>
                <div className="lb"><span className="av">AS</span><span className="sc-tr"><span className="sc-b l2" /></span><b className="num">37 items</b></div>
                <div className="lb"><span className="av">MJ</span><span className="sc-tr"><span className="sc-b l3" /></span><b className="num">29 items</b></div>
                <div className="ui-foot">Individual wins, team-wide accountability</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
