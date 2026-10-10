import { Link } from 'react-router-dom';
import { GROUPS, PRODUCTS, productPath, type GroupId } from '../lib/products';
import ProductMock from './ProductMock';

function Group({ id, d }: { id: GroupId; d: string }) {
  const g = GROUPS[id];
  return (
    <div className={'grp rv ' + d} data-rv="suite">
      <span className="grp-i"><span className="ms" aria-hidden="true">{g.icon}</span></span>
      <h3 className="grp-t">{g.title}</h3>
      {g.sub && <span className="grp-s">{g.sub}</span>}
    </div>
  );
}

function Cards({ group, delays }: { group: GroupId; delays: string[] }) {
  return (
    <>
      {PRODUCTS.filter((p) => p.group === group).map((p, i) => (
        <div key={p.slug} className={'cell rv ' + delays[i % delays.length]} data-rv="suite">
          <Link className="pc pc-link" to={productPath(p.slug)} aria-label={`${p.name}: explore product`}>
            <ProductMock slug={p.slug} />
            <div className="pc-b">
              <span className="k">{GROUPS[p.group].kicker}</span>
              <h4 className="pc-t">{p.name}</h4>
              <p className="pc-p">{p.summary}</p>
              <span className="pc-more">Explore<span className="ms" aria-hidden="true">arrow_forward</span></span>
            </div>
          </Link>
        </div>
      ))}
    </>
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
          <p className="cap rv d2" data-rv="suite" style={{ marginTop: 10, fontStyle: 'italic' }}>Product visuals are illustrative examples. Select a product to explore it.</p>
        </div>

        <Group id="ops" d="d2" />
        <div className="sg4"><Cards group="ops" delays={['d2', 'd3']} /></div>

        <Group id="logistics" d="d2" />
        <div className="sg3"><Cards group="logistics" delays={['d2', 'd3', 'd4']} /></div>

        <div className="duo3">
          <div>
            <Group id="sustainability" d="d3" />
            <div className="sg1"><Cards group="sustainability" delays={['d3']} /></div>
          </div>
          <div>
            <Group id="cost" d="d4" />
            <div className="sg2 in"><Cards group="cost" delays={['d4', 'd5']} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
