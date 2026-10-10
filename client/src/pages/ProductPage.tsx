import { useEffect, type CSSProperties } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { GROUPS, productBySlug, productPath, type Product } from '../lib/products';
import { usePageMeta } from '../hooks/usePageMeta';
import PageShell from '../components/PageShell';
import HashLink from '../components/HashLink';
import ProductMock from '../components/ProductMock';
import TrueCost from '../components/TrueCost';
import DemoCta from '../components/DemoCta';

function ProductHero({ p }: { p: Product }) {
  const g = GROUPS[p.group];
  return (
    <section className="sec pp-hero" data-sec="p-hero">
      <div className="grid-bg" />
      <div className="wrap">
        <nav className="crumbs rv" data-rv="p-hero" aria-label="Breadcrumb">
          <HashLink id="top">Home</HashLink><span aria-hidden="true">/</span>
          <HashLink id="suite">Product Suite</HashLink><span aria-hidden="true">/</span>
          <span>{g.title}</span>
        </nav>
        <div className="pp-g">
          <div>
            <span className="pp-k rv d1" data-rv="p-hero"><span className="ms" aria-hidden="true">{g.icon}</span>{g.kicker}</span>
            <h1 className="pp-h1 rv d1" data-rv="p-hero">{p.name}</h1>
            <p className="pp-tag rv d2" data-rv="p-hero">{p.tagline}</p>
            <p className="lead rv d2" data-rv="p-hero">{p.intro}</p>
            <div className="hero-cta rv d3" data-rv="p-hero">
              <a className="btn btn-p" href="#demo">Request a Demo<span className="ms" aria-hidden="true">arrow_forward</span></a>
              <a className="btn btn-g" href="#how">See how it works</a>
            </div>
            <div className="pp-jump rv d4" data-rv="p-hero">
              <a href="#capabilities">Capabilities</a><a href="#deep-dive">Deep dive</a><a href="#case-studies">Case studies</a>
            </div>
          </div>
          <div className="pp-viz rv d2" data-rv="p-hero">
            <ProductMock slug={p.slug} />
            <div className="illus">Illustrative example</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ p }: { p: Product }) {
  return (
    <section className="sec s-surf" id="how" data-sec="p-how">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow rv" data-rv="p-how">How it works</div>
          <h2 className="h2 rv d1" data-rv="p-how">{p.name}, step by step</h2>
        </div>
        <ol className="pp-steps" style={{ '--n': p.steps.length } as CSSProperties}>
          {p.steps.map((s, i) => (
            <li key={s.t} className={'pp-step rv d' + Math.min(8, i + 2)} data-rv="p-how" style={{ animationDelay: i * 1.2 + 's' } as CSSProperties}>
              <span className="pp-n num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="pp-st">{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Capabilities({ p }: { p: Product }) {
  return (
    <section className="sec" style={{ background: '#ffffff' }} id="capabilities" data-sec="p-cap">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow rv" data-rv="p-cap">Capabilities</div>
          <h2 className="h2 rv d1" data-rv="p-cap">What {p.name} does</h2>
        </div>
        <div className="capg">
          {p.capabilities.map((c, i) => (
            <div key={c.t} className={'cell rv d' + ((i % 3) + 2)} data-rv="p-cap">
              <article className="card capc">
                <span className="capc-i"><span className="ms" aria-hidden="true">{c.icon}</span></span>
                <h3 className="h3">{c.t}</h3>
                <p className="card-p">{c.d}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeepDive({ p }: { p: Product }) {
  const a = p.article;
  return (
    <section className="sec s-grey" id="deep-dive" data-sec="p-blog">
      <div className="wrap">
        <div className="blog">
          <aside className="blog-meta rv" data-rv="p-blog">
            <div className="eyebrow">Deep dive</div>
            <div className="blog-rt"><span className="ms" aria-hidden="true">schedule</span>{a.readTime}</div>
            <ol className="blog-toc">
              {a.sections.map((s, i) => <li key={s.h}><a href={'#dd-' + i}>{s.h}</a></li>)}
            </ol>
          </aside>
          <article className="blog-body rv d1" data-rv="p-blog">
            <h2 className="h2">{a.title}</h2>
            {a.sections.map((s, i) => (
              <section key={s.h} id={'dd-' + i}>
                <h3>{s.h}</h3>
                {s.p.map((t, j) => <p key={j}>{t}</p>)}
              </section>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}

function CaseStudies({ p }: { p: Product }) {
  return (
    <section className="sec" style={{ background: '#ffffff' }} id="case-studies" data-sec="p-cases">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow rv" data-rv="p-cases">Case studies</div>
          <h2 className="h2 rv d1" data-rv="p-cases">{p.name} in production</h2>
        </div>
        <div className="cases">
          {[0, 1].map((i) => (
            <div key={i} className={'cell rv d' + (i + 2)} data-rv="p-cases">
              <article className="case-ph">
                <span className="case-i"><span className="ms" aria-hidden="true">menu_book</span></span>
                <span className="k">Case study</span>
                <h3 className="h3">Coming soon</h3>
                <p className="card-p">We are preparing a customer story for {p.name}: the challenge, what changed, and the measured result.</p>
                <a className="j-link" href="#demo">Discuss your use case<span className="ms" aria-hidden="true">arrow_forward</span></a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Related({ p }: { p: Product }) {
  const items = p.related.map(productBySlug).filter((x): x is Product => !!x);
  return (
    <section className="sec s-surf" data-sec="p-rel">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 32 }}>
          <div className="eyebrow rv" data-rv="p-rel">Related products</div>
          <h2 className="h2 rv d1" data-rv="p-rel">Works well with</h2>
        </div>
        <div className="relg">
          {items.map((r, i) => (
            <div key={r.slug} className={'cell rv d' + (i + 2)} data-rv="p-rel">
              <Link className="rel" to={productPath(r.slug)}>
                <span className="k">{GROUPS[r.group].kicker}</span>
                <h3 className="h3">{r.name}</h3>
                <p className="card-p">{r.summary}</p>
                <span className="pc-more">Explore<span className="ms" aria-hidden="true">arrow_forward</span></span>
              </Link>
            </div>
          ))}
        </div>
        <HashLink id="suite" className="j-link">Back to the full Product Suite<span className="ms" aria-hidden="true">arrow_forward</span></HashLink>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const p = productBySlug(slug);
  usePageMeta(p?.name, p ? `${p.name}: ${p.tagline} ${p.summary}` : undefined);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  if (!p) return <Navigate to="/" replace />;

  return (
    <PageShell>
      {(seen, still) => (
        <>
          <ProductHero p={p} />
          {p.slug === 'truecost' ? <TrueCost seen={!!seen.truecost} still={still} id="how" /> : <HowItWorks p={p} />}
          <Capabilities p={p} />
          <DeepDive p={p} />
          <CaseStudies p={p} />
          <Related p={p} />
          <DemoCta />
        </>
      )}
    </PageShell>
  );
}
