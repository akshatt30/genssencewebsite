export default function Logomark() {
  return (
    <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="4" fill="#0B2545" />
      <g className="mk-r">
        <path d="M16 6v6M16 20v6M6 16h6M20 16h6" stroke="#5ad8ff" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <rect x="12.5" y="12.5" width="7" height="7" rx="1" transform="rotate(45 16 16)" fill="#00A9CE" />
    </svg>
  );
}
