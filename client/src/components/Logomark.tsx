// Genessence "G" logomark, cropped to its artwork.
// `tone="light"` is for light backgrounds (dark bars); `tone="dark"` for dark backgrounds (white bars).
export default function Logomark({ tone = 'light', className = 'mark' }: { tone?: 'light' | 'dark'; className?: string }) {
  const ink = tone === 'dark' ? '#ffffff' : '#0A0A0A';
  return (
    <svg className={className} viewBox="7 7 48 44" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="9" height="44" fill={ink} />
      <rect x="21" y="7" width="28" height="9" fill={ink} />
      <rect x="31" y="25" width="24" height="8" fill="#01D0FF" />
      <rect x="21" y="42" width="14" height="9" fill={ink} />
      <rect x="42" y="37" width="9" height="14" fill={ink} />
    </svg>
  );
}
