const COLS = [
  { h: 'Platform', links: [['TrueCost Engine', '#products'], ['Sourcing360', '#sourcing'], ['Supplier Graph', '#engines'], ['Predictive Curves', '#engines'], ['Integrations & API', '#platform']] },
  { h: 'Solutions', links: [['BOM Cost Modeling', '#products'], ['Direct Spend Analytics', '#outcomes'], ['Tier-N Risk Mapping', '#engines'], ['RFQ Benchmarking', '#sourcing'], ['Contract Auditing', '#products']] },
  { h: 'Industries', links: [['Automotive & EV', '#industries'], ['Aerospace & Defense', '#industries'], ['Heavy Industrial', '#industries'], ['Semiconductors', '#industries'], ['Energy Systems', '#industries']] },
  { h: 'Company', links: [['About Us', '#footer'], ['Intelligence Briefs', '#products'], ['Leadership', '#footer'], ['Security Trust Center', '#products'], ['Contact', '#demo']] }
];

const LEGAL = ['Privacy Policy', 'Terms of Service', 'Security Documentation', 'System Status'];

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
              <ul>{c.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
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
