import { Link } from 'react-router-dom';
import HashLink from './HashLink';

// Targets starting with "/" are product pages; the rest are home-page section ids.
const COLS = [
  { h: 'Platform', links: [['TrueCost Engine', '/products/truecost'], ['Sourcing360', 'suite'], ['Supplier Graph', 'engines'], ['Predictive Curves', 'engines'], ['Integrations & API', 'platform']] },
  { h: 'Solutions', links: [['BOM Cost Modeling', '/products/truecost'], ['Direct Spend Analytics', '/products/spend-management'], ['Tier-N Risk Mapping', 'engines'], ['RFQ Benchmarking', '/products/rfq-management'], ['Contract Auditing', '/products/truecost']] },
  { h: 'Industries', links: [['Automotive & EV', 'industries'], ['Aerospace & Defense', 'industries'], ['Heavy Industrial', 'industries'], ['Semiconductors', 'industries'], ['Energy Systems', 'industries']] },
  { h: 'Company', links: [['About Us', 'footer'], ['Intelligence Briefs', '/products/truecost'], ['Leadership', 'footer'], ['Security Trust Center', 'industries'], ['Contact', 'demo']] }
];

const LEGAL = ['Privacy Policy', 'Terms of Service', 'Security Documentation', 'System Status'];

function FooterLink({ label, to }: { label: string; to: string }) {
  if (to.startsWith('/')) return <Link to={to}>{label}</Link>;
  // The footer and the demo form exist on every page, so they stay in-page.
  if (to === 'footer' || to === 'demo') return <a href={'#' + to}>{label}</a>;
  return <HashLink id={to}>{label}</HashLink>;
}

export default function Footer() {
  return (
    <footer className="foot" id="footer">
      <div className="wrap">
        <div className="foot-g">
          <div>
            <span className="wm" style={{ color: '#0B2545' }}>GEN<span className="ess">ESS</span>ENCE</span>
            <p>The Intelligence Layer for Manufacturing Procurement. Turn fragmented procurement data into sourcing decisions you can defend.</p>
            <div className="sec-ok"><i />Defense-Grade Data Integrity · ISO-27001 Certified</div>
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <h4>{c.h}</h4>
              <ul>{c.links.map(([label, to]) => <li key={label}><FooterLink label={label} to={to} /></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="foot-b">
          <span>© 2026 Genessence Technologies Inc. All rights reserved. Industrial Procurement Intelligence Platform.</span>
          <nav aria-label="Legal">{LEGAL.map((l) => <a key={l} href="#footer">{l}</a>)}</nav>
        </div>
      </div>
    </footer>
  );
}
