import { useState } from 'react';
import { NAV } from '../lib/content';
import type { ScrollState } from '../hooks/useScrollState';
import Logomark from './Logomark';

export default function Header({ scroll }: { scroll: ScrollState }) {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);

  return (
    <header className={'hdr ' + (scroll.scrolled ? 'scrolled' : '')}>
      <div className="wrap hdr-in">
        <a className="brand" href="#top" aria-label="Genessence — back to top">
          <Logomark />
          <span className="brand-t">
            <span className="wm">GEN<span className="ess">ESS</span>ENCE</span>
            <span className="tagl">Procurement Intelligence</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.id} href={n.href} className={scroll.nav === n.id ? 'on' : ''}>{n.label}</a>
          ))}
        </nav>
        <div className="hdr-cta">
          <a className="btn btn-p btn-sm" href="#demo">Request a Demo</a>
          <button type="button" className="burger" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>
            <span className="ms" aria-hidden="true">{menu ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {menu && (
        <div className="mnav">
          {NAV.map((n) => (
            <a key={n.id} href={n.href} onClick={closeMenu}>
              {n.label}<span className="ms" aria-hidden="true">arrow_forward</span>
            </a>
          ))}
          <a className="btn btn-p" href="#demo" onClick={closeMenu}>Request a Demo</a>
        </div>
      )}
      <div className="prog" style={{ transform: `scaleX(${scroll.prog})` }} />
    </header>
  );
}
