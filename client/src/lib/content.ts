// Copy and data for the page. Edit here without touching components.

export interface ArchStage {
  n: string; t: string; s: string; num: string; sub: string; head: string; desc: string; lat: string; conf: string;
}

export const ARCH: ArchStage[] = [
  { n: '01', t: 'DATA', s: 'Multi-modal Ingestion', num: 'Stage 01 Focus', sub: 'Data Ingestion & Normalization', head: 'ERP + supplier contracts + raw material spot pricing + CAD/BOM inputs', desc: 'Automated bidirectional connectors ingest fragmented enterprise ERP transactional histories, unstructured supplier PDF quotes, live commodity scrap exchanges, and technical 3D CAD step files without manual re-keying.', lat: '< 140ms', conf: '99.82%' },
  { n: '02', t: 'INTELLIGENCE', s: 'Cost & Market Inference', num: 'Stage 02 Focus', sub: 'Parametric Inference Engine', head: 'Cost, Supplier, Market, and Operational inference engines', desc: 'Four multi-layered algorithmic inference cores deconstruct assemblies into machine tool operations, raw alloy tare weights, tool wear metrics, and global freight lane pricing.', lat: '< 320ms', conf: '98.90%' },
  { n: '03', t: 'DECISION', s: 'Defensible Baselines', num: 'Stage 03 Focus', sub: 'Decision Synthesis Core', head: 'Parametrically defensible target cost & recommended supplier award', desc: 'TrueCost models establish should-cost corridors down to individual manufacturing operations, enabling category directors to negotiate from mathematical proof rather than intuition.', lat: '< 210ms', conf: '99.45%' },
  { n: '04', t: 'ACTION', s: 'Sourcing360 Workflows', num: 'Stage 04 Focus', sub: 'Workflow Execution', head: 'Executed seamlessly inside Sourcing360 workflows', desc: 'Buyers initiate automated RFQ events, publish fact-based cost breakdown packages to bidders, and capture signed multi-year volume commitments in a single audit trail.', lat: '< 95ms', conf: '100.0%' },
  { n: '05', t: 'OUTCOME', s: 'Audited Financial Margin', num: 'Stage 05 Focus', sub: 'Balance-Sheet Impact', head: 'Direct bottom-line savings, 64% faster RFQ cycles, audited compliance', desc: 'Hard savings are validated directly against purchase variance accounts (PPV). Sourcing cycles drop from months to hours with zero unverified supplier surcharges.', lat: 'Continuous', conf: 'Audited' }
];

export interface WorkflowStep {
  label: string; pill: string; engine: string; head: string; copy: string; model: string; note: string;
}

export const STEPS: WorkflowStep[] = [
  { label: 'Supplier Risk Selection & Risk Screening', pill: 'Stage 1 Intelligence', engine: 'Dynamic Matchmaker', head: 'Supplier Risk Selection & Risk Screening', copy: 'Ranks prospective suppliers by matching machine tool envelope requirements, active machine shop capacity, and past quality PPAP conformance scores.', model: 'Supplier-Radar v2.8', note: 'Capacity and PPAP-weighted ranking' },
  { label: 'RFQ', pill: 'Stage 2 Intelligence', engine: 'Bid Package Optimization', head: 'Automated RFQ Formulation', copy: 'Synthesizes parametric specification packages so suppliers bid against identical clean parameters, eliminating ambiguous line items and hidden tooling contingencies.', model: 'RFQ-Standardize Engine', note: 'Identical bid parameters for every supplier' },
  { label: 'Compare', pill: 'Stage 3 Intelligence', engine: 'Deconstruction Grid', head: 'Quote Comparison & Normalization', copy: 'Deconstructs multiple supplier bids simultaneously into standardized raw metal, processing, overhead, and margin lines, highlighting out-of-spec markup items.', model: 'Quote-Normalize Matrix', note: 'Flags out-of-spec markup lines' },
  { label: 'Negotiate', pill: 'Stage 4 Intelligence', engine: 'Fact-Based Negotiation', head: 'Defensible Negotiation Defense', copy: 'Generates clear, fact-based should-cost breakdown sheets that buyers can share directly with suppliers to systematically negotiate out unjustifiable markups.', model: 'TrueCost Negotiation Core', note: 'Shareable should-cost breakdowns' },
  { label: 'Allocate', pill: 'Stage 5 Intelligence', engine: 'Multi-Plant Allocation', head: 'Volume Allocation & Split Awarding', copy: 'Runs linear optimization models to allocate award volumes across single or dual suppliers, factoring in freight corridors, tariff boundaries, and single-source risks.', model: 'Supply-Optimize Linear', note: 'Freight, tariff and risk-aware splits' },
  { label: 'Order', pill: 'Stage 6 Intelligence', engine: 'Contract & ERP Write-Back', head: 'PO Generation & ERP Synchronization', copy: 'Writes negotiated parameters directly back into SAP ECC/S4 or Oracle Cloud PO line items with full mathematical audit trails preserved for quarterly finance reviews.', model: 'ERP-Sync Gateway', note: 'Audit trail preserved on write-back' }
];

export interface SuiteProduct {
  id: string; name: string; href: string; cta: string; intro: string; out: string;
  steps: { n: number; t: string; d: string; short: string; icon: string }[];
}

// TrueCost sample part (CNC precision turned shaft), USD per unit.
export const BASE = 108.2;
export const LO = 104.8;
export const HI = 112;
export const MAXQ = 180;

export const money = (v: number) => '$' + v.toFixed(2);

/**
 * The one quote the page follows: shown as "paid vs should-have-been" in
 * Intelligence, walked through in the Quote Journey, and loaded into the
 * TrueCost simulator in Products.
 */
export const SAMPLE = {
  part: 'CNC Precision Turned Shaft',
  partInline: 'CNC precision turned shaft',
  material: '4140 Alloy Steel',
  lot: '5,000',
  quote: 142.5
};
export const SAMPLE_GAP = SAMPLE.quote - BASE;
/** TrueCost drivers for the sample part; they sum to BASE. */
export const SAMPLE_DRIVERS = [
  { k: 'Material', v: 54.1, c: '#00677f' },
  { k: 'Machine', v: 28.4, c: '#00A9CE' },
  { k: 'Labor', v: 14.2, c: '#5ad8ff' },
  { k: 'Logistics', v: 6.1, c: '#9fb0cc' },
  { k: 'Margin', v: 5.4, c: '#4fc486' }
];
export const SAMPLE_GAP_PCT = ((SAMPLE_GAP / SAMPLE.quote) * 100).toFixed(1) + '%';

export const SUITE: SuiteProduct[] = [
  {
    id: 'truecost', name: 'TrueCost', href: '/products/truecost', cta: 'Explore TrueCost',
    intro: `The same ${money(SAMPLE.quote)} quote, run through TrueCost, the should-cost engine of the Genessence suite.`,
    out: `Negotiated against a ${money(BASE)} should-cost: a price you can defend, with the audit trail already written.`,
    steps: [
      { n: 1, t: 'Quote is ingested', short: 'Ingest', icon: 'upload_file', d: 'The quote is read and linked to the part\'s CAD and BOM. Nothing is re-keyed.' },
      { n: 2, t: 'Live market data', short: 'Price', icon: 'trending_up', d: 'Material, energy and freight are priced from live indices on the day of the quote.' },
      { n: 3, t: 'Cost deconstruction', short: 'Deconstruct', icon: 'account_tree', d: 'TrueCost rebuilds the part into material, machine cycle, labor, logistics and fair margin.' },
      { n: 4, t: 'Target cost', short: 'Target', icon: 'my_location', d: `A ${money(BASE)} should-cost and its ${money(LO)}–${money(HI)} corridor put the quote ${SAMPLE_GAP_PCT} above target.` },
      { n: 5, t: 'Negotiation defense', short: 'Negotiate', icon: 'handshake', d: 'The gap is negotiated line by line with a breakdown the supplier can verify, and the rationale stays on file.' }
    ]
  }
];

export const NAV = [
  { id: 'engines', label: 'Intelligence', href: '#engines' },
  { id: 'journey', label: 'Quote Journey', href: '#journey' },
  { id: 'platform', label: 'Architecture', href: '#platform' },
  // { id: 'sourcing', label: 'Sourcing360', href: '#sourcing' }, // section hidden for now
  { id: 'suite', label: 'Product Suite', href: '#suite' },
  { id: 'industries', label: 'Industries', href: '#industries' }
];

export const NODES = [
  { label: 'ERP (SAP / Oracle)', icon: 'database', left: '21.5%', top: '18.8%', bob: 'bob' },
  { label: 'Suppliers (Quotes & SLAs)', icon: 'request_quote', left: '78.5%', top: '18.8%', bob: 'bob2' },
  { label: 'Live Market Indices', icon: 'trending_up', left: '21.5%', top: '81.2%', bob: 'bob2' },
  { label: 'CAD & BOM Specs', icon: 'precision_manufacturing', left: '78.5%', top: '81.2%', bob: 'bob' }
];

/** Values of every `data-sec` attribute on the page. */
export const SECTIONS = ['hero', 'gap', 'platform', 'engines', 'sourcing', 'truecost', 'outcomes', 'industries', 'suite', 'demo', 'p-hero', 'p-how', 'p-cap', 'p-blog', 'p-cases', 'p-rel'] as const;
export type SectionKey = (typeof SECTIONS)[number];

