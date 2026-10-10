import type { ReactNode } from 'react';
import { BASE, SAMPLE, SAMPLE_GAP_PCT, money } from '../lib/content';

const SPEND_BARS = [
  { h: '55%', m: 'Apr' }, { h: '68%', m: 'May' }, { h: '62%', m: 'Jun' },
  { h: '80%', m: 'Jul' }, { h: '74%', m: 'Aug', fc: true }, { h: '88%', m: 'Sep', fc: true }
];

const TC_PARTS = [
  { w: '50%', c: '#00677f' }, { w: '26.2%', c: '#00A9CE' }, { w: '13.1%', c: '#5ad8ff' }, { w: '5.6%', c: '#9fb0cc' }, { w: '5%', c: '#4fc486' }
];

// Looping mini-UI for each product, shared by the Product Suite cards and the product pages.
const MOCKS: Record<string, { wide?: boolean; ui: ReactNode }> = {
  'vendor-management': {
    ui: (
      <>
        <div className="ui-h"><span>Vendor onboarding · V-1042</span><span className="chip-s">In review</span></div>
        <div className="ui-row"><span>Agreement signed</span><span className="tick tk1"><span className="ms">check</span></span></div>
        <div className="ui-row"><span>GST verified</span><span className="tick tk2"><span className="ms">check</span></span></div>
        <div className="ui-row"><span>PAN verified</span><span className="tick tk3"><span className="ms">check</span></span></div>
        <div className="ui-row"><span>Synced to ERP</span><span className="tick tk4"><span className="ms">check</span></span></div>
        <div className="ui-bar"><span className="ob-fill" /></div>
      </>
    )
  },
  'rfq-management': {
    ui: (
      <>
        <div className="ui-h"><span>RFQ-2291 · 3 quotes</span><span className="chip-live"><i />Live auction</span></div>
        <div className="q"><span className="q-n">Vendor A</span><span className="q-tr"><span className="q-b qa" /></span><span className="q-v num">₹412</span></div>
        <div className="q best"><span className="q-n">Vendor B</span><span className="q-tr"><span className="q-b qb" /></span><span className="q-v num">₹398</span></div>
        <div className="q"><span className="q-n">Vendor C</span><span className="q-tr"><span className="q-b qc" /></span><span className="q-v num">₹405</span></div>
        <div className="lbp"><span>Last buying price</span><b className="num">₹390</b></div>
      </>
    )
  },
  'supplier-allocation': {
    ui: (
      <>
        <div className="ui-h"><span>Order volume · 12,000 units</span><span>3 qualified</span></div>
        <div className="alloc"><span className="al al1" /><span className="al al2" /><span className="al al3" /></div>
        <div className="leg">
          <span><i style={{ background: '#00677f' }} />Vendor A · 55%</span>
          <span><i style={{ background: '#00A9CE' }} />Vendor B · 30%</span>
          <span><i style={{ background: '#9fb0cc' }} />Vendor C · 15%</span>
        </div>
        <div className="ui-foot">Split on landed cost, quality and capacity</div>
      </>
    )
  },
  'spend-management': {
    ui: (
      <>
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
      </>
    )
  },
  'transport-management': {
    ui: (
      <>
        <div className="ui-h"><span>Shipment · Pune → Chennai</span><span className="chip-s ok">On time</span></div>
        <div className="route r3">
          <span className="rt-line" /><span className="rt-fill" />
          <span className="stop sp1" style={{ left: '0%' }} /><span className="stop sp2" style={{ left: '50%' }} /><span className="stop sp3" style={{ left: '100%' }} />
          <span className="mover"><span className="ms">local_shipping</span></span>
        </div>
        <div className="route-l"><span>Picked up</span><span>In transit</span><span>Proof of delivery</span></div>
        <div className="ui-row"><span>Benchmarked rate</span><b className="num">₹38 / km</b></div>
      </>
    )
  },
  'should-cost-transport': {
    ui: (
      <>
        <div className="ui-h"><span>Lane · Pune → Chennai · 32 ft</span><span>FTL</span></div>
        <div className="sc"><span>Carrier quote</span><span className="sc-tr"><span className="sc-b sg" /></span><b className="num">₹48,500</b></div>
        <div className="sc"><span>Should-cost</span><span className="sc-tr"><span className="sc-b sb" /></span><b className="num" style={{ color: '#00677f' }}>₹41,200</b></div>
        <span className="flagc"><span className="ms">flag</span>17.7% above should-cost</span>
      </>
    )
  },
  exim: {
    wide: true,
    ui: (
      <>
        <div className="ui-h"><span>Import · BL MSKU 7781 · Nhava Sheva</span><span className="chip-s ok">Cleared</span></div>
        <div className="route r5">
          <span className="rt-line" /><span className="rt-fill" />
          {['0%', '25%', '50%', '75%', '100%'].map((left, i) => <span key={left} className={'stop ex' + (i + 1)} style={{ left }} />)}
          <span className="mover"><span className="ms">directions_boat</span></span>
        </div>
        <div className="route-l five"><span>Customs</span><span>Compliance</span><span>CHA</span><span>Shipping line</span><span>Delivered</span></div>
      </>
    )
  },
  esg: {
    ui: (
      <>
        <div className="ui-h"><span>Vendor carbon intensity</span><span>Scope 3</span></div>
        <div className="sc"><span>Vendor A</span><span className="sc-tr"><span className="sc-b e1" /></span><span className="chip-s ok">Low</span></div>
        <div className="sc"><span>Vendor B</span><span className="sc-tr"><span className="sc-b e2" /></span><span className="chip-s warn">High</span></div>
        <div className="sc"><span>Vendor C</span><span className="sc-tr"><span className="sc-b e3" /></span><span className="chip-s ok">Low</span></div>
        <div className="ui-foot">Tracked inside the sourcing workflow</div>
      </>
    )
  },
  truecost: {
    ui: (
      <>
        <div className="ui-h"><span>4140 shaft · Lot {SAMPLE.lot}</span><span className="chip-s warn">{SAMPLE_GAP_PCT} over</span></div>
        <div className="sc"><span>Quote</span><span className="sc-tr"><span className="sc-b sg" /></span><b className="num">{money(SAMPLE.quote)}</b></div>
        <div className="sc"><span>Should-cost</span><span className="sc-tr"><span className="sc-b tcb" /></span><b className="num" style={{ color: '#00677f' }}>{money(BASE)}</b></div>
        <div className="tcm">{TC_PARTS.map((p, i) => <span key={i} style={{ width: p.w, background: p.c, animationDelay: (i * 0.15).toFixed(2) + 's' }} />)}</div>
        <div className="ui-foot">Material · machine · labor · logistics · margin</div>
      </>
    )
  },
  'cost-innovation': {
    ui: (
      <>
        <div className="ui-h"><span>Negotiation wins · by buyer</span><span>Item-level</span></div>
        <div className="lb"><span className="av">RK</span><span className="sc-tr"><span className="sc-b l1" /></span><b className="num">42 items</b></div>
        <div className="lb"><span className="av">AS</span><span className="sc-tr"><span className="sc-b l2" /></span><b className="num">37 items</b></div>
        <div className="lb"><span className="av">MJ</span><span className="sc-tr"><span className="sc-b l3" /></span><b className="num">29 items</b></div>
        <div className="ui-foot">Individual wins, team-wide accountability</div>
      </>
    )
  }
};

export default function ProductMock({ slug }: { slug: string }) {
  const m = MOCKS[slug];
  if (!m) return null;
  return (
    <div className="mock">
      <div className={'ui' + (m.wide ? ' wide' : '')} aria-hidden="true">{m.ui}</div>
    </div>
  );
}
