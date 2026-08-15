// Centralized content — all copy lives here, easy to swap later.

export const site = {
  brand: {
    name: "",
    fullName: "Jindal Digital Infrastructure",
    mark: "◇",
    tagline: "Infrastructure for the intelligence era.",
    description:
      "JDI (Jindal Digital Infrastructure) builds the physical and computational foundation for AI — from enterprise data centers today to GPU clusters, AI compute platforms, and sovereign AI cloud tomorrow.",
  },
  nav: [
    { label: "Solutions", to: "/solutions" },
    { label: "Technology", to: "/technology" },
    { label: "AI Infrastructure", to: "/ai-infrastructure" },
    { label: "Industries", to: "/industries" },
    { label: "Sustainability", to: "/sustainability" },
    { label: "Insights", to: "/insights" },
    { label: "About", to: "/about" },
    { label: "Careers", to: "/careers" },
  ],
} as const;

export const evolution = [
  { year: "1960", phase: "Foundation", title: "S.R. Jindal Group", body: "Founded by Shri Shiv Ram Jindal." },
  {
    year: "1962",
    phase: "First Venture",
    title: "Jindal Industries Private Limited",
    body: "Manufacturer of high quality MS Black and Galvanized pipes/tubes.",
  },
  {
    year: "1973",
    phase: "Second Venture",
    title: "Ravindra Tubes",
    body: "Manufactures of ERW Galvanized and Black Steel pipes.",
  },
  {
    year: "1984",
    phase: "Acceleration",
    title: "United Decoratives Private Limited",
    body: "Manufacturing Synthetic Leather.",
  },
  {
    year: "1990",
    phase: "Growth",
    title: "Hisar Metal Industries Limited",
    body: "Manufactures of high-precision, ultra-thin cold rolled stainless steel strips and welded tubes.",
  },
  {
    year: "1992",
    phase: "New Venture",
    title: "Jindal Product Private Limited",
    body: "Pioneering the polyster button manufacturing technplogy from Italy, Jindal buttons is the first Indian button manufacturer to mark a global presence as a supplier of buttons and garment accessories.",
  },
  {
    year: "2019",
    phase: "Premium Luxury Furniture",
    title: "Racconti",
    body: " Indian craftmanship meets international design to create premium bespoke luxury furniture. Racoonti may be ayoung brand, but it inherits a legacy of precision, scale and excellence. Manufacturing is not new to us as we bring world class processes backed by decade of excellence.",
  },
  {
    year: "2026",
    phase: "AI Data Center",
    title: "Jindal Digital Infrastructure Pvivate Limited",
    body: "JDI (Jindal Digital Infrastructure) builds the physical and computational foundation for AI — from enterprise data centers today to GPU clusters, AI compute platforms, and sovereign AI cloud tomorrow.",
  },
] as const;

export const metrics = [
  { value: "30", suffix: "MW", label: "Planned capacity" },
  { value: "2", label: "Regions" },
  { value: "99.982", suffix: "%", label: "Design availability" },
  { value: "1.45", label: "Target PUE" },
  { value: "15", suffix: "kW", label: "Per rack, liquid-cooled" },
  { value: "N", suffix: "+1", label: "DG & Cooling Redundancy" },
] as const;

export const solutions = [
  {
    id: "colocation",
    name: "Colocation",
    tag: "Foundational",
    body: "Carrier-neutral space, power and cooling with concurrent-maintainable topology.",
    detail: "From single cabinet to private suite. Cross-connects to every major carrier and cloud on-ramp.",
  },
  {
    id: "hyperscale",
    name: "Hyperscale",
    tag: "At scale",
    body: "Build-to-suit campuses engineered around a single tenant's power, network and thermal profile.",
    detail: "10 MW to 200 MW deployments. Design, permit, build and operate — under one accountable partner.",
  },
  {
    id: "managed",
    name: "Managed Services",
    tag: "Operated",
    body: "Remote hands, smart hands, monitoring and lifecycle for infrastructure that never sleeps.",
    detail: "24/7 NOC, ITIL-aligned change control, and integrated observability across facility and IT layers.",
  },
  {
    id: "ai-infrastructure",
    name: "AI Infrastructure",
    tag: "Frontier",
    body: "Turnkey environments for training foundation models and running production inference.",
    detail: "Rack-and-stack GPU clusters, cooling loops, low-latency fabrics — delivered as an outcome.",
  },
  {
    id: "gpu-cloud",
    name: "GPU Cloud",
    tag: "On demand",
    body: "Bare-metal and containerized access to H-class accelerators — reserved or on-demand.",
    detail: "Kubernetes-native scheduling. Full tenant isolation. Priced per accelerator-hour, no egress fees.",
  },
  {
    id: "private-ai",
    name: "Private AI",
    tag: "Sovereign",
    body: "Air-gapped, in-country AI environments for regulated data and sensitive workloads.",
    detail: "Data residency, model residency, hardware attestation. Compliant with sector-specific mandates.",
  },
  {
    id: "edge",
    name: "Edge Infrastructure",
    tag: "Distributed",
    body: "Micro data centers positioned close to users, factories and networks — for real-time inference.",
    detail: "Prefabricated modules deployable in weeks. Central orchestration. Consistent operational model.",
  },
] as const;

export const technology = [
  {
    id: "power",
    name: "Power",
    body: "N+N redundant utility feeds, 2N UPS, on-site generation with sustainable fuels.",
    detail:
      "Medium-voltage substations, dynamic UPS, and hydrogen-ready gensets deliver five-nines availability without compromise.",
  },
  {
    id: "cooling",
    name: "Cooling",
    body: "Adiabatic, immersion, and direct-to-chip liquid loops rated for 100 kW densities.",
    detail:
      "Free-cooling economizers run 92% of the year. Rear-door heat exchangers and cold-plate loops handle the rest.",
  },
  {
    id: "network",
    name: "Network",
    body: "Carrier-dense meet-me rooms with 400G spines and sub-millisecond metro fabric.",
    detail:
      "Every facility peers with major IXs, hyperscalers, and subsea landings. Software-defined cross-connects in minutes.",
  },
  {
    id: "security",
    name: "Security",
    body: "Six-layer physical security, biometric access, and zero-trust operational networks.",
    detail: "SOC 2 Type II, ISO 27001, PCI-DSS, HIPAA. Continuous red-team validation and cryptographic audit trails.",
  },
  {
    id: "operations",
    name: "Operations",
    body: "ITIL-aligned operations with a single pane of glass across facility, IT, and network layers.",
    detail:
      "24/7/365 NOC with mean time to acknowledge under 90 seconds. Predictive maintenance driven by 40,000+ sensors per site.",
  },
  {
    id: "automation",
    name: "Automation",
    body: "Digital twin, closed-loop control, and infrastructure-as-code for the physical world.",
    detail: "Every rack, every valve, every breaker — modelled, telemetered, and remediated by policy.",
  },
  {
    id: "future",
    name: "Future Technologies",
    body: "Photonic interconnects, on-site SMR pilots, and quantum-ready cryogenic space.",
    detail: "R&D roadmap partnerships with silicon vendors, national labs, and hyperscale customers.",
  },
] as const;

export const aiStack = [
  {
    id: "gpu-clusters",
    name: "GPU Clusters",
    body: "Reference designs for 1K to 100K accelerator deployments — pre-validated, ready to train.",
  },
  {
    id: "ai-compute",
    name: "AI Compute",
    body: "Bare-metal and orchestrated compute across H100, H200, B200 and next-gen silicon.",
  },
  {
    id: "training",
    name: "Training Infrastructure",
    body: "Non-blocking fabrics, checkpoint-class storage, and thermal envelopes tuned for weeks-long runs.",
  },
  {
    id: "inference",
    name: "Inference Infrastructure",
    body: "Latency-optimized pods with autoscaling, model caching, and sub-10ms P99 targets.",
  },
  {
    id: "high-density",
    name: "High Density Racks",
    body: "Liquid-cooled racks from 40kW to 130kW — engineered for tomorrow's silicon roadmap.",
  },
  {
    id: "ai-storage",
    name: "AI Storage",
    body: "Parallel filesystems delivering terabytes-per-second to training clusters. Object tiers for datasets.",
  },
  {
    id: "networking",
    name: "High Speed Networking",
    body: "InfiniBand NDR and 800G Ethernet spines. RDMA fabrics that scale without hotspots.",
  },
  { id: "ai-factory", name: "AI Factory", body: "End-to-end turnkey AI production lines — power in, tokens out." },
  {
    id: "platform",
    name: "Future AI Platform",
    body: "Developer surface, model registry, and inference APIs on JDI-owned compute.",
  },
] as const;

export const industries = [
  {
    name: "Financial Services",
    body: "Low-latency environments and sovereign data residency for banks, exchanges, and fintechs.",
  },
  { name: "Healthcare & Life Sciences", body: "HIPAA-aligned platforms for genomics, imaging, and clinical AI." },
  { name: "Government & Public Sector", body: "Air-gapped, in-country compute for critical national infrastructure." },
  { name: "Media & Entertainment", body: "Render farms, VFX pipelines, and generative content workloads." },
  {
    name: "AI Labs & Model Builders",
    body: "Frontier training capacity with reserved allocations and priority interconnects.",
  },
  {
    name: "Manufacturing & Robotics",
    body: "Edge and hybrid environments for real-time control and industrial intelligence.",
  },
] as const;

export const insights = [
  {
    kind: "Field notes",
    date: "Mar 2026",
    title: "Why liquid cooling is no longer optional",
    excerpt:
      "The thermal envelope of frontier silicon has crossed a threshold. A look at what changed, and what comes next.",
  },
  {
    kind: "Research",
    date: "Feb 2026",
    title: "The economics of an AI factory",
    excerpt: "Cost curves, capacity planning, and the reference architectures that keep them honest.",
  },
  {
    kind: "Perspective",
    date: "Jan 2026",
    title: "Sovereign compute in a multipolar world",
    excerpt: "Why national AI strategies increasingly begin with a data-center diagram.",
  },
  {
    kind: "Engineering",
    date: "Dec 2025",
    title: "Designing for 130kW per rack",
    excerpt: "Cold plates, coolant distribution units, and the small decisions that unlock density.",
  },
] as const;

export const roles = [
  { team: "Engineering", title: "Principal Data Center Architect", location: "Mumbai · Hybrid" },
  { team: "AI Infrastructure", title: "GPU Cluster Systems Engineer", location: "Bengaluru · On-site" },
  { team: "Operations", title: "Critical Facilities Manager", location: "Hyderabad · On-site" },
  { team: "Platform", title: "Staff Software Engineer, Control Plane", location: "Remote · India" },
  { team: "Networking", title: "Senior Network Engineer, Fabric", location: "Chennai · On-site" },
  { team: "Sustainability", title: "Head of Energy Strategy", location: "Mumbai · Hybrid" },
] as const;

export const principles = [
  {
    title: "Engineering over marketing",
    body: "We ship the diagram, not the pitch. Every claim is traceable to a design, a sensor, or a signed SLA.",
  },
  {
    title: "Density is a discipline",
    body: "Higher density means better economics, lower carbon, and shorter fibre runs. We design for it from day one.",
  },
  {
    title: "Sovereign by design",
    body: "Data, models, and control planes stay where our customers need them — with cryptographic proof.",
  },
  {
    title: "Operate what we build",
    body: "Design, build, operate — one team, one accountability line, one pager rotation.",
  },
] as const;

// Placeholder leadership team — swap names, bios and photos when finalized.
export const leadership = [
  {
    name: "Neeraj Jindal",
    role: "Chairman",
    focus: "Group strategy, capital allocation, and long-term vision for the infrastructure platform.",
    initials: "NJ",
  },
  {
    name: "Alok Verma",
    role: "President & CEO",
    focus: "Company direction, customer partnerships, and the path from data centers to AI cloud.",
    initials: "AV",
  },
  {
    name: "Shivam Jindal",
    role: "Director",
    focus: "Delivery, critical facilities operations, and service reliability across every region.",
    initials: "SJ",
  },
  {
    name: "Abhishek Verma",
    role: "Director",
    focus: "Project finance, capital structure, and the economics of megawatt-scale build-outs.",
    initials: "ABV",
  },
  {
    name: "Anuj Jain",
    role: "Director, Business Development",
    focus: "Business Development, customer partnership, operations, sacle and growth.",
    initials: "AJ",
  },
] as const;
