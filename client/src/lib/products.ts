// Product Suite: one entry per product. Each product gets a page at /products/<slug>.
// Edit copy here; the page layout lives in src/pages/ProductPage.tsx.

export type GroupId = 'ops' | 'logistics' | 'sustainability' | 'cost';

export interface ProductGroup {
  id: GroupId;
  title: string;
  icon: string;
  sub?: string;
  /** Small label shown above each product name */
  kicker: string;
}

export const GROUPS: Record<GroupId, ProductGroup> = {
  ops: { id: 'ops', title: 'Procurement Operations', icon: 'event_note', sub: '— runs the day-to-day sourcing cycle on one connected system', kicker: 'Procurement Ops' },
  logistics: { id: 'logistics', title: 'Logistics Intelligence', icon: 'local_shipping', sub: '— cost discipline for freight and cross-border movement', kicker: 'Logistics' },
  sustainability: { id: 'sustainability', title: 'Sustainability', icon: 'eco', kicker: 'Sustainability' },
  cost: { id: 'cost', title: 'Cost Intelligence', icon: 'monitoring', kicker: 'Cost Intelligence' }
};

export interface Product {
  slug: string;
  name: string;
  /** Material Symbols icon for lists */
  icon: string;
  group: GroupId;
  /** Card copy in the Product Suite grid */
  summary: string;
  /** One-line promise shown under the name on the product page */
  tagline: string;
  /** Hero paragraph on the product page */
  intro: string;
  steps: { t: string; d: string }[];
  capabilities: { icon: string; t: string; d: string }[];
  article: { title: string; readTime: string; sections: { h: string; p: string[] }[] };
  related: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'vendor-management',
    icon: 'how_to_reg',
    name: 'Vendor Management',
    group: 'ops',
    summary: 'End-to-end onboarding: agreements, signatures and compliance verified against GST, PAN and government records, synced to ERP.',
    tagline: 'Onboard every supplier once, verified and ERP-ready.',
    intro: 'Vendor Management replaces email chains and spreadsheet trackers with one onboarding workflow. Agreements are signed digitally, statutory registrations are verified against government records, and the approved vendor master is written straight into your ERP.',
    steps: [
      { t: 'Invite', d: 'Sourcing sends a self-service onboarding link with the documents and declarations the category requires.' },
      { t: 'Sign', d: 'The supplier completes the vendor agreement and NDA with digital signatures; nothing is printed or scanned.' },
      { t: 'Verify', d: 'GST, PAN and bank details are checked against government and banking records; mismatches are flagged for review.' },
      { t: 'Approve', d: 'Finance and quality approve in sequence, with every decision and comment kept on the vendor record.' },
      { t: 'Sync', d: 'The approved vendor master is created in SAP or Oracle automatically, with no re-keying.' }
    ],
    capabilities: [
      { icon: 'draw', t: 'Digital agreements', d: 'Templated vendor agreements, NDAs and codes of conduct signed online.' },
      { icon: 'verified', t: 'Statutory verification', d: 'GST, PAN and bank checks against official records before a vendor goes live.' },
      { icon: 'rule', t: 'Approval workflows', d: 'Configurable approval chains by category, plant and spend level.' },
      { icon: 'sync', t: 'ERP vendor master sync', d: 'Approved vendors are created and kept in sync with your ERP.' },
      { icon: 'event_repeat', t: 'Renewal tracking', d: 'Expiring certificates and agreements are flagged before they lapse.' },
      { icon: 'history', t: 'Full audit trail', d: 'Every document, check and approval is time-stamped on the vendor record.' }
    ],
    article: {
      title: 'Why supplier onboarding is a sourcing problem, not an admin task',
      readTime: '4 min read',
      sections: [
        { h: 'The hidden cost of slow onboarding', p: ['When a new supplier takes weeks to set up, buyers fall back on the vendors already in the system, even when a better-priced or better-qualified option is waiting. Slow onboarding quietly narrows the supply base and weakens every negotiation that follows.', 'Most of that delay is manual: documents chased over email, registrations checked by hand, and vendor masters typed into the ERP by a different team.'] },
        { h: 'Verification before trust', p: ['Vendor Management checks statutory registrations and bank details against official records as part of the workflow, not as an afterthought. Exceptions are routed to the right reviewer instead of blocking the whole queue.'] },
        { h: 'One record from invitation to PO', p: ['Because the approved vendor is written straight into the ERP, the record sourcing negotiated with is the same record finance pays. Agreements, verifications and approvals stay attached to it for audit.'] }
      ]
    },
    related: ['rfq-management', 'supplier-allocation', 'esg']
  },
  {
    slug: 'rfq-management',
    icon: 'request_quote',
    name: 'RFQ Management',
    group: 'ops',
    summary: 'Plants raise requests directly to sourcing with vendor quotes attached — negotiate against last buying price, or push into a live auction.',
    tagline: 'From plant request to awarded quote in one flow.',
    intro: 'RFQ Management connects plant requests, supplier quotes and sourcing decisions. Every quote is compared like-for-like against the last buying price, and competitive categories can move into a live reverse auction in one click.',
    steps: [
      { t: 'Request', d: 'A plant raises a requirement with specs, quantities and need-by dates, routed to the right category buyer.' },
      { t: 'Invite', d: 'The buyer issues a standardized RFQ to qualified suppliers so every bid answers the same parameters.' },
      { t: 'Compare', d: 'Quotes are normalized side by side against the last buying price and should-cost where available.' },
      { t: 'Negotiate or auction', d: 'Negotiate line by line, or push the event into a timed live auction.' },
      { t: 'Award', d: 'The award and its rationale are recorded and handed to allocation and PO creation.' }
    ],
    capabilities: [
      { icon: 'inbox', t: 'Plant-to-sourcing requests', d: 'Structured intake so requests arrive complete and in one queue.' },
      { icon: 'description', t: 'Standardized RFQ packages', d: 'Identical specifications for every bidder, with no ambiguous line items.' },
      { icon: 'compare_arrows', t: 'Quote normalization', d: 'Side-by-side comparison against last buying price and benchmarks.' },
      { icon: 'gavel', t: 'Live reverse auctions', d: 'Timed auctions with real-time rank visibility for competitive categories.' },
      { icon: 'chat', t: 'Supplier clarifications', d: 'Questions and answers kept on the RFQ, visible to every bidder.' },
      { icon: 'fact_check', t: 'Award rationale', d: 'Every award records why the winning quote was chosen.' }
    ],
    article: {
      title: 'The last buying price is a starting point, not a benchmark',
      readTime: '5 min read',
      sections: [
        { h: 'Why RFQs drift', p: ['When requirements arrive by email and quotes come back in different formats, buyers spend their time reconciling documents instead of negotiating. Comparisons default to whatever is easiest: last year\'s price.'] },
        { h: 'Comparable quotes, by design', p: ['RFQ Management issues the same structured package to every supplier, so quotes come back line-for-line comparable. The last buying price is shown alongside, and where TrueCost is enabled, so is the should-cost.'] },
        { h: 'Knowing when to auction', p: ['Not every category suits an auction. For standardized, multi-sourced items, a live auction compresses negotiation into minutes. For engineered parts, a fact-based negotiation usually works better. The same RFQ supports both.'] }
      ]
    },
    related: ['truecost', 'supplier-allocation', 'vendor-management']
  },
  {
    slug: 'supplier-allocation',
    icon: 'pie_chart',
    name: 'Supplier Allocation',
    group: 'ops',
    summary: 'Splits order volume across qualified vendors based on cost — allocation driven by data, not habit or relationship.',
    tagline: 'Split every award on landed cost, quality and capacity.',
    intro: 'Supplier Allocation decides how much of each requirement goes to each qualified vendor. It weighs landed cost, quality performance, capacity and supply risk, and shows the reasoning behind every split.',
    steps: [
      { t: 'Qualify', d: 'Only vendors that passed onboarding and technical approval for the part are considered.' },
      { t: 'Weigh', d: 'Landed cost, quality scores, available capacity and single-source risk are scored for each vendor.' },
      { t: 'Optimize', d: 'An optimization model proposes the split that minimizes total cost within your risk rules.' },
      { t: 'Review', d: 'Buyers adjust the proposal where needed; every override is recorded with a reason.' },
      { t: 'Release', d: 'Allocated volumes flow into scheduling agreements and purchase orders.' }
    ],
    capabilities: [
      { icon: 'balance', t: 'Landed-cost comparison', d: 'Price, freight, duties and packaging compared on one basis.' },
      { icon: 'workspace_premium', t: 'Quality weighting', d: 'Rejection rates and audit scores factored into the split.' },
      { icon: 'factory', t: 'Capacity awareness', d: 'Allocations respect each vendor\'s declared capacity.' },
      { icon: 'shield', t: 'Risk rules', d: 'Minimum dual-sourcing and maximum share limits per category.' },
      { icon: 'tune', t: 'What-if scenarios', d: 'Compare alternative splits before committing volume.' },
      { icon: 'history_edu', t: 'Decision record', d: 'Every allocation and override is kept for audit.' }
    ],
    article: {
      title: 'Allocation is where sourcing savings are won or lost',
      readTime: '4 min read',
      sections: [
        { h: 'Habit is expensive', p: ['Volume often follows relationships: the incumbent keeps the larger share because that is how it has always been. Over a year, the difference between a habitual split and a cost-optimal one can be substantial.'] },
        { h: 'Cost, quality and risk together', p: ['Supplier Allocation scores each qualified vendor on landed cost, quality and capacity, then proposes a split within the risk rules you set, such as a minimum second source for critical parts.'] },
        { h: 'Transparent to buyers and suppliers', p: ['Because the reasoning is visible, buyers can explain a split to suppliers and to finance. Vendors that improve cost or quality can see how that would change their share.'] }
      ]
    },
    related: ['rfq-management', 'spend-management', 'truecost']
  },
  {
    slug: 'spend-management',
    icon: 'bar_chart',
    name: 'Spend Management',
    group: 'ops',
    summary: 'Full spend visibility by category and vendor, plus forward business forecasts shared with vendors so they can plan capacity ahead.',
    tagline: 'See where the money goes, and where it is going next.',
    intro: 'Spend Management unifies purchase data from every plant and ERP into one categorized view. It adds forward forecasts that can be shared with suppliers, so they plan capacity around your demand instead of reacting to it.',
    steps: [
      { t: 'Connect', d: 'Purchase orders and invoices are pulled from each ERP instance on a schedule.' },
      { t: 'Classify', d: 'Line items are mapped to one category taxonomy across plants and part numbering schemes.' },
      { t: 'Analyze', d: 'Spend is broken down by category, vendor, plant and period, with price variance highlighted.' },
      { t: 'Forecast', d: 'Forward demand is projected from production plans and historical consumption.' },
      { t: 'Share', d: 'Forecasts are shared with vendors so they can reserve capacity in advance.' }
    ],
    capabilities: [
      { icon: 'hub', t: 'Multi-ERP consolidation', d: 'One view across SAP, Oracle and plant-level systems.' },
      { icon: 'category', t: 'Category taxonomy', d: 'Consistent classification of parts across plants.' },
      { icon: 'query_stats', t: 'Price variance tracking', d: 'Spot where prices paid diverge across plants and periods.' },
      { icon: 'insights', t: 'Forward forecasts', d: 'Demand projections built from plans and consumption history.' },
      { icon: 'share', t: 'Vendor forecast sharing', d: 'Controlled sharing of forecasts with selected suppliers.' },
      { icon: 'dashboard', t: 'Leadership dashboards', d: 'Category and vendor views for CPO and finance reviews.' }
    ],
    article: {
      title: 'Spend visibility is the foundation every other saving sits on',
      readTime: '4 min read',
      sections: [
        { h: 'Fragmented data, fragmented decisions', p: ['When each plant runs its own ERP and numbering scheme, the same part can be bought at different prices from different vendors without anyone noticing. Category strategy is hard to set when total spend is unclear.'] },
        { h: 'One taxonomy across plants', p: ['Spend Management maps every purchase line to a single category taxonomy, so leadership sees true category totals and buyers see where prices diverge.'] },
        { h: 'Forecasts that suppliers can use', p: ['Sharing forward demand with key suppliers lets them plan capacity, which reduces expediting costs and gives buyers a stronger position when volumes are negotiated.'] }
      ]
    },
    related: ['supplier-allocation', 'cost-innovation', 'esg']
  },
  {
    slug: 'transport-management',
    icon: 'local_shipping',
    name: 'Transport Management',
    group: 'logistics',
    summary: 'Carrier selection, live rate benchmarking, real-time shipment tracking and proof of delivery.',
    tagline: 'Book, track and close every shipment in one place.',
    intro: 'Transport Management runs domestic freight end to end: choosing the carrier against benchmarked rates, tracking the shipment in real time, and closing it with digital proof of delivery.',
    steps: [
      { t: 'Plan', d: 'Shipments are created from dispatch plans with origin, destination, load and vehicle type.' },
      { t: 'Select carrier', d: 'Carrier quotes are compared against benchmarked lane rates before booking.' },
      { t: 'Track', d: 'Vehicles are tracked in real time with alerts for delays and route deviations.' },
      { t: 'Deliver', d: 'Proof of delivery is captured digitally at the destination.' },
      { t: 'Settle', d: 'Freight invoices are matched against the booked rate before payment.' }
    ],
    capabilities: [
      { icon: 'local_shipping', t: 'Carrier selection', d: 'Compare carriers on rate, reliability and lane coverage.' },
      { icon: 'price_check', t: 'Rate benchmarking', d: 'Booked rates checked against live lane benchmarks.' },
      { icon: 'my_location', t: 'Real-time tracking', d: 'Live vehicle position with ETA and delay alerts.' },
      { icon: 'task_alt', t: 'Digital proof of delivery', d: 'Signed delivery confirmation captured on arrival.' },
      { icon: 'receipt_long', t: 'Freight invoice matching', d: 'Invoices validated against the booked rate.' },
      { icon: 'analytics', t: 'Carrier scorecards', d: 'On-time and damage performance by carrier and lane.' }
    ],
    article: {
      title: 'Freight is a sourcing category too',
      readTime: '3 min read',
      sections: [
        { h: 'Booked by phone, paid by habit', p: ['Domestic freight is often booked through a few familiar carriers at rates nobody has checked recently. Because each shipment is small, the category rarely gets sourcing attention, even though the annual total is large.'] },
        { h: 'Benchmark before you book', p: ['Transport Management compares each carrier quote with a benchmarked lane rate at booking time, so the decision is made with numbers, not habit.'] },
        { h: 'Closing the loop', p: ['Tracking and digital proof of delivery give a clean record for every shipment, and invoice matching ensures the rate you booked is the rate you pay.'] }
      ]
    },
    related: ['should-cost-transport', 'exim', 'spend-management']
  },
  {
    slug: 'should-cost-transport',
    icon: 'route',
    name: 'Should-Cost Transport',
    group: 'logistics',
    summary: 'Flags freight cost inefficiencies using live data — negotiate logistics with hard numbers, not carrier quotes.',
    tagline: 'Know what a lane should cost before the carrier quotes.',
    intro: 'Should-Cost Transport builds a fair cost for each lane from its drivers: distance, fuel, vehicle type, tolls, driver cost and return-load probability. Carrier quotes are measured against it, line by line.',
    steps: [
      { t: 'Define the lane', d: 'Origin, destination, vehicle type and load profile are captured for the lane.' },
      { t: 'Model the drivers', d: 'Fuel, tolls, driver wages, vehicle cost and empty-return risk are priced from live data.' },
      { t: 'Build the should-cost', d: 'The drivers add up to a fair cost per trip and per kilometre.' },
      { t: 'Compare', d: 'Carrier quotes are measured against the should-cost and the gap is flagged.' },
      { t: 'Negotiate', d: 'Buyers share the breakdown with carriers to negotiate the gap.' }
    ],
    capabilities: [
      { icon: 'route', t: 'Lane cost models', d: 'Fair cost per lane built from physical cost drivers.' },
      { icon: 'local_gas_station', t: 'Live fuel indexing', d: 'Fuel component tracks current diesel prices.' },
      { icon: 'flag', t: 'Overcharge flags', d: 'Quotes above the should-cost corridor are highlighted.' },
      { icon: 'table_chart', t: 'Shareable breakdowns', d: 'Cost sheets carriers can verify line by line.' },
      { icon: 'currency_exchange', t: 'Fuel surcharge checks', d: 'Surcharge claims tested against index movement.' },
      { icon: 'trending_down', t: 'Savings tracking', d: 'Negotiated reductions recorded per lane.' }
    ],
    article: {
      title: 'Applying should-cost thinking to freight',
      readTime: '4 min read',
      sections: [
        { h: 'Why carrier quotes go unchallenged', p: ['Without a reference point, buyers can only compare one carrier quote with another. If every carrier on a lane is pricing high, the comparison looks fine.'] },
        { h: 'Building the fair cost of a trip', p: ['Should-Cost Transport applies the same principle as TrueCost to logistics: rebuild the cost from its drivers, then compare. Distance, fuel, tolls, vehicle and driver costs, and the chance of a return load each contribute to the fair price.'] },
        { h: 'Negotiating with a breakdown', p: ['A transparent breakdown changes the conversation with carriers from "can you do better?" to "this is the line where we differ".'] }
      ]
    },
    related: ['transport-management', 'truecost', 'exim']
  },
  {
    slug: 'exim',
    icon: 'directions_boat',
    name: 'EXIM',
    group: 'logistics',
    summary: 'Digitizes customs, compliance, shipment tracking, CHA coordination and shipping lines into one connected import-export workflow.',
    tagline: 'Every import and export, from booking to clearance, in one workflow.',
    intro: 'EXIM brings customs documentation, compliance checks, customs house agent (CHA) coordination and shipping-line tracking into one workflow, so every party works from the same shipment record.',
    steps: [
      { t: 'Book', d: 'The shipment is created with shipping line, container and bill-of-lading details.' },
      { t: 'Document', d: 'Commercial invoices, packing lists and certificates are prepared and checked for completeness.' },
      { t: 'Clear customs', d: 'The CHA files with customs and status updates flow back into the shipment record.' },
      { t: 'Track', d: 'Vessel and container milestones are tracked through to the port of discharge.' },
      { t: 'Deliver', d: 'Final-mile delivery and landed-cost capture close the shipment.' }
    ],
    capabilities: [
      { icon: 'folder_open', t: 'Document management', d: 'All trade documents attached to one shipment record.' },
      { icon: 'policy', t: 'Compliance checks', d: 'Missing or inconsistent documents flagged before filing.' },
      { icon: 'support_agent', t: 'CHA coordination', d: 'Customs agents update status directly in the workflow.' },
      { icon: 'directions_boat', t: 'Shipping-line tracking', d: 'Vessel and container milestones in one timeline.' },
      { icon: 'payments', t: 'Duty and landed cost', d: 'Duties and charges captured for true landed cost.' },
      { icon: 'notifications_active', t: 'Exception alerts', d: 'Delays and holds raised to the right owner.' }
    ],
    article: {
      title: 'Cross-border shipments need one source of truth',
      readTime: '3 min read',
      sections: [
        { h: 'Too many parties, too many inboxes', p: ['An import touches the supplier, the shipping line, the customs agent, the port and your plant. When each works from their own emails and spreadsheets, delays are discovered late and demurrage charges follow.'] },
        { h: 'One shipment record', p: ['EXIM gives every party the same record, with documents, customs status and container milestones in one timeline.'] },
        { h: 'Landed cost, not just price', p: ['Capturing duties, freight and port charges against each shipment gives sourcing the true landed cost of imported parts, which feeds back into allocation decisions.'] }
      ]
    },
    related: ['transport-management', 'should-cost-transport', 'supplier-allocation']
  },
  {
    slug: 'esg',
    icon: 'eco',
    name: 'ESG',
    group: 'sustainability',
    summary: 'Tracks carbon and compliance at the vendor and asset level, built into the sourcing workflow rather than a separate reporting exercise.',
    tagline: 'Carbon and compliance, inside every sourcing decision.',
    intro: 'ESG tracks the carbon intensity and compliance status of each vendor and asset inside the sourcing workflow, so sustainability is weighed alongside cost and quality when work is awarded.',
    steps: [
      { t: 'Collect', d: 'Vendors submit energy, emissions and compliance data through their onboarding profile.' },
      { t: 'Estimate', d: 'Where data is missing, emissions are estimated from spend and activity data.' },
      { t: 'Score', d: 'Each vendor receives a carbon intensity and compliance rating.' },
      { t: 'Decide', d: 'Ratings appear in RFQ comparison and allocation, next to cost and quality.' },
      { t: 'Report', d: 'Scope 3 purchased-goods data is compiled for sustainability reporting.' }
    ],
    capabilities: [
      { icon: 'co2', t: 'Vendor carbon intensity', d: 'Emissions per unit of spend or output by vendor.' },
      { icon: 'verified_user', t: 'Compliance tracking', d: 'Certifications and declarations with expiry alerts.' },
      { icon: 'calculate', t: 'Spend-based estimates', d: 'Coverage for vendors that have not reported yet.' },
      { icon: 'leaderboard', t: 'Sourcing integration', d: 'ESG scores shown in RFQs and allocation.' },
      { icon: 'summarize', t: 'Scope 3 reporting', d: 'Purchased-goods emissions compiled for disclosure.' },
      { icon: 'flag_circle', t: 'Improvement targets', d: 'Track vendor progress against agreed targets.' }
    ],
    article: {
      title: 'Sustainability belongs in the sourcing workflow',
      readTime: '4 min read',
      sections: [
        { h: 'Reporting after the fact', p: ['Many companies collect supplier sustainability data once a year for a report. By then, the sourcing decisions that drive Scope 3 emissions have already been made.'] },
        { h: 'Data where decisions happen', p: ['ESG puts each vendor\'s carbon intensity and compliance status next to price and quality in RFQ comparison and allocation, so it can influence the award.'] },
        { h: 'Starting with imperfect data', p: ['Not every supplier reports emissions. Spend-based estimates provide coverage from day one, and are replaced with reported data as vendors provide it.'] }
      ]
    },
    related: ['vendor-management', 'supplier-allocation', 'spend-management']
  },
  {
    slug: 'truecost',
    icon: 'price_check',
    name: 'TrueCost',
    group: 'cost',
    summary: 'The should-cost engine: deconstructs a part into material, machine cycle, labor, logistics and fair margin, so every quote has a defensible target.',
    tagline: 'What should this part actually cost?',
    intro: 'TrueCost isolates supplier quote markup by deconstructing manufacturing physics into transparent cost drivers, so you know the fair cost of a part, the corridor around it, and which lines of a quote sit outside it.',
    steps: [],
    capabilities: [
      { icon: 'precision_manufacturing', t: 'CAD & BOM deconstruction', d: 'Parts rebuilt from geometry and bill of materials into cost drivers.' },
      { icon: 'trending_up', t: 'Live market indices', d: 'Material, energy and freight priced on the day of the quote.' },
      { icon: 'straighten', t: '95% confidence corridor', d: 'A target range, not just a point estimate.' },
      { icon: 'table_view', t: 'Line-by-line breakdown', d: 'Material, machine, labor, logistics and margin, each shown separately.' },
      { icon: 'flag', t: 'Markup isolation', d: 'Quote lines outside the corridor are flagged for negotiation.' },
      { icon: 'history_edu', t: 'Audit-ready rationale', d: 'The basis of every target cost is stored with the award.' }
    ],
    article: {
      title: 'Should-cost: negotiating from physics instead of history',
      readTime: '6 min read',
      sections: [
        { h: 'The problem with price history', p: ['Comparing a quote with last year\'s price or with two rival quotes tells you whether it is consistent, not whether it is fair. If the historical price already carried excess margin, every comparison inherits it.'] },
        { h: 'Rebuilding the part', p: ['TrueCost starts from the part itself: its material and net weight, the machine operations and cycle times needed to make it, the labor around those operations, packaging and freight, and a fair operating margin. Each driver is priced from current market data.'] },
        { h: 'A corridor, not a single number', p: ['Some drivers can be measured precisely; others can only be bounded. TrueCost classifies each driver by confidence and reports a 95% corridor around the baseline, so buyers know how firm the target is.'] },
        { h: 'Negotiating line by line', p: ['The breakdown is designed to be shared. Instead of asking for a round-number discount, buyers can point to the specific lines where the quote departs from the model, and the supplier can respond with evidence.'] }
      ]
    },
    related: ['cost-innovation', 'rfq-management', 'should-cost-transport']
  },
  {
    slug: 'cost-innovation',
    icon: 'emoji_events',
    name: 'CostInnovation',
    group: 'cost',
    summary: 'Tracks every buyer\'s performance item by item, turning individual negotiation wins into team-wide accountability.',
    tagline: 'Every negotiation win, counted and shared.',
    intro: 'CostInnovation records the outcome of every negotiation at item level, so individual buyer wins become visible, comparable and repeatable across the team.',
    steps: [
      { t: 'Baseline', d: 'Each item\'s starting price is captured from the last PO or initial quote.' },
      { t: 'Negotiate', d: 'Buyers log negotiated outcomes against the baseline as they close.' },
      { t: 'Validate', d: 'Savings are validated against actual purchase prices in the ERP.' },
      { t: 'Attribute', d: 'Wins are attributed to the buyer and category that delivered them.' },
      { t: 'Review', d: 'Leaderboards and category reviews make performance visible to the team.' }
    ],
    capabilities: [
      { icon: 'list_alt', t: 'Item-level savings', d: 'Every negotiated item recorded against its baseline.' },
      { icon: 'fact_check', t: 'ERP-validated results', d: 'Savings confirmed against actual prices paid.' },
      { icon: 'person_check', t: 'Buyer attribution', d: 'Wins credited to the buyer who achieved them.' },
      { icon: 'leaderboard', t: 'Team leaderboards', d: 'Healthy visibility across buyers and categories.' },
      { icon: 'lightbulb', t: 'Playbook sharing', d: 'Successful negotiation approaches captured for reuse.' },
      { icon: 'monitoring', t: 'Category reviews', d: 'Savings trends by category for leadership reviews.' }
    ],
    article: {
      title: 'Making negotiation performance visible',
      readTime: '3 min read',
      sections: [
        { h: 'Savings that disappear', p: ['Negotiation wins are often reported as a single annual number. Which buyer achieved what, on which items, and how, is lost, and so is the chance to repeat it.'] },
        { h: 'Item by item', p: ['CostInnovation records each negotiated item against its baseline and validates it against what was actually paid, so reported savings match the ledger.'] },
        { h: 'Accountability without blame', p: ['When the whole team can see item-level results, good approaches spread. Leaderboards recognize the buyers who deliver, and category reviews show where support is needed.'] }
      ]
    },
    related: ['truecost', 'spend-management', 'rfq-management']
  }
];

export const productBySlug = (slug: string | undefined) => PRODUCTS.find((p) => p.slug === slug);
export const productPath = (slug: string) => `/products/${slug}`;
