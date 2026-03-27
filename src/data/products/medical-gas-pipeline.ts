import type { Product } from "@/types";

export const medicalGasPipelineProducts: Product[] = [
  // ─── 1. Medical Gas Pipeline System ─────────────────────────────────────────
  {
    id: "mmgps-mgps-01",
    slug: "medical-gas-pipeline-system",
    name: "Centralized Medical Gas Pipeline System",
    shortName: "MMGPS Series",
    category: "medical-gas-pipeline",
    subcategory: "Medical Gas Pipeline",
    tagline: "Safe, Reliable Medical Gas Delivery — From Source to Bedside",
    description:
      "MarKEN MMGPS Series is a complete centralized medical gas pipeline system (MGPS) supplying oxygen (O₂), nitrous oxide (N₂O), medical compressed air, surgical vacuum, carbon dioxide (CO₂), and AGSS (anaesthetic gas scavenging) across wards, ICUs, OTs, and emergency departments. Designed and installed to HTM 02-01, IS 3847, NABH, and CPCB standards, the system integrates manifold source equipment, copper piping networks, area valve service units (AVSUs), and alarm monitoring panels for end-to-end gas management.",
    heroImage: "/images/products/mmgps/mmgps-hero.jpg",
    images: [
      "/images/products/mmgps/mmgps-manifold-room.jpg",
      "/images/products/mmgps/mmgps-pipeline-network.jpg",
      "/images/products/mmgps/mmgps-bedhead-panel.jpg",
      "/images/products/mmgps/mmgps-avsu.jpg",
      "/images/products/mmgps/mmgps-alarm-panel.jpg",
    ],
    features: [
      {
        icon: "Activity",
        title: "Multi-Gas Supply — O₂, N₂O, Air, Vacuum, CO₂",
        description:
          "Single integrated system delivers O₂, N₂O, medical compressed air (MCA), surgical vacuum, AGSS, and CO₂ from centralized source plants to all clinical areas via dedicated colour-coded, labelled copper pipelines.",
      },
      {
        icon: "Shield",
        title: "Automatic Manifold Changeover",
        description:
          "Fully automatic duty/standby cylinder manifold ensures uninterrupted gas supply 24/7. Alarm activates when duty bank is depleted and standby bank takes over without manual intervention.",
      },
      {
        icon: "Gauge",
        title: "Area Valve Service Units (AVSUs)",
        description:
          "Zone isolation valves with lockable enclosures at each clinical area allow safe isolation for maintenance without shutting down the entire hospital network. Labelled per BS EN ISO 7396-1.",
      },
      {
        icon: "Monitor",
        title: "Digital Alarm Monitoring Panels",
        description:
          "Master, area, and local alarm panels continuously monitor supply pressure for every gas in every zone. Fault and low-pressure alarms visible at nurses' stations, medical gas plant rooms, and hospital BMS.",
      },
      {
        icon: "Timer",
        title: "NIST / DISS Outlet Stations",
        description:
          "Non-Interchangeable Screw Thread (NIST) or Diameter Index Safety System (DISS) gas outlets at bedhead panels and pendant units prevent cross-connection errors between gas types.",
      },
      {
        icon: "Wrench",
        title: "Medical-Grade Copper Piping",
        description:
          "EN 13348 / IS 3847 Grade R220 seamless copper tubes, internally cleaned and capped, brazed with silver-alloy filler. Each zone pressure-tested at 1.5× working pressure before commissioning.",
      },
    ],
    specifications: [
      { label: "Gases Supplied", value: "O₂, N₂O, Medical Compressed Air, Vacuum, CO₂, AGSS" },
      { label: "Design Standard", value: "HTM 02-01 / BS EN ISO 7396-1 / IS 3847" },
      { label: "Pipe Material", value: "EN 13348 seamless copper, R220 / IS 3847 Grade" },
      { label: "Pipe Sizes", value: "15 mm to 54 mm OD (per flow demand)" },
      { label: "O₂ Supply Pressure", value: "4.1 ± 0.1 bar g (at terminal unit)" },
      { label: "N₂O Supply Pressure", value: "4.1 ± 0.1 bar g" },
      { label: "Medical Air Supply Pressure", value: "4.1 ± 0.1 bar g (MCA); 7.0 bar g (HPA)" },
      { label: "Vacuum Level", value: "≤ −400 mbar g (surgical), ≤ −600 mbar g (dental)" },
      { label: "CO₂ Supply Pressure", value: "4.1 ± 0.1 bar g" },
      { label: "Pressure Testing", value: "1.5× working pressure for 24 hours, no pressure loss" },
      { label: "Alarm System", value: "Master + Area + Local panels; RS-485 / BACnet BMS interface" },
      { label: "Certifications", value: "NABH, CPCB, CE Components, IS 3847, HTM 02-01 compliant" },
    ],
    variants: [
      {
        id: "mmgps-01",
        model: "MMGPS-01 Small Hospital",
        capacity: "Up to 50 beds; O₂ peak flow ~100 L/min",
        dimensions: "Manifold room: ~3 m × 3 m (plant room only); piping per site layout",
        weight: "N/A (site-installed system)",
        specs: [
          { label: "O₂ Source", value: "Dual-bank auto-manifold, 10×50 L cylinder banks" },
          { label: "Vacuum Source", value: "Duplex vacuum pump set, 100 m³/h capacity" },
          { label: "Medical Air Source", value: "Duplex medical air compressor, 50 L/min peak" },
          { label: "Outlets per Ward", value: "O₂ × 2, Vacuum × 2, Air × 1 per bed (typical)" },
          { label: "Monitoring", value: "Area alarm panels, 1 per floor" },
        ],
      },
      {
        id: "mmgps-02",
        model: "MMGPS-02 Medium Hospital",
        capacity: "50–200 beds; O₂ peak flow ~300 L/min",
        dimensions: "Manifold/plant room: ~5 m × 4 m; VIE option available",
        weight: "N/A (site-installed system)",
        specs: [
          { label: "O₂ Source", value: "VIE (Vacuum Insulated Evaporator) primary + cylinder backup manifold" },
          { label: "Vacuum Source", value: "Triplex vacuum pump set, 300 m³/h capacity" },
          { label: "Medical Air Source", value: "Duplex medical air compressor + dryer, 200 L/min peak" },
          { label: "Outlets per ICU Bed", value: "O₂ × 3, N₂O × 1, Air × 2, Vacuum × 3, AGSS × 1" },
          { label: "Monitoring", value: "Master + area alarm panels + BMS integration" },
        ],
      },
      {
        id: "mmgps-03",
        model: "MMGPS-03 Large Hospital / OT Complex",
        capacity: "200+ beds; O₂ peak flow >600 L/min; full OT gas pendant integration",
        dimensions: "Dedicated medical gas plant room per design; VIE + LOX backup",
        weight: "N/A (site-installed system)",
        specs: [
          { label: "O₂ Source", value: "VIE primary + LOX cylinder backup + emergency manifold" },
          { label: "Vacuum Source", value: "Quadruplex vacuum plant, >600 m³/h capacity" },
          { label: "Medical Air Source", value: "Triplex oil-free compressors + activated carbon dryer train, 600 L/min" },
          { label: "OT Outlets", value: "Per room schedule; integrated into ceiling pendants" },
          { label: "Monitoring", value: "Full SCADA-level BMS; remote alarming; 24/7 monitoring protocol" },
        ],
      },
      {
        id: "mmgps-04",
        model: "MMGPS-04 Retrofit / Expansion",
        capacity: "Extension of existing MGPS; any bed count",
        dimensions: "Per existing hospital layout",
        weight: "N/A (site-installed system)",
        specs: [
          { label: "Scope", value: "New zone piping, AVSU, outlets, and alarm extension" },
          { label: "Compatibility", value: "Integrates with existing HTM 02-01 / NFPA 99 systems" },
          { label: "Live-network work", value: "Safe isolation and hot-tap procedures; zero supply interruption" },
          { label: "Documentation", value: "As-built drawings, O&M manual, pressure test certificates" },
        ],
      },
    ],
    certifications: [
      "NABH Compliant Design & Installation",
      "HTM 02-01 Compliant",
      "BS EN ISO 7396-1 Compliant",
      "IS 3847 Compliant",
      "CPCB Guidelines Compliant",
      "CE Marked (terminal units & alarm panels)",
      "ISO 13485",
      "ISO 9001:2015",
    ],
    downloads: [
      {
        title: "Medical Gas Pipeline System Brochure",
        type: "brochure",
        url: "/downloads/mmgps-brochure.pdf",
        fileSize: "3.8 MB",
      },
      {
        title: "MGPS Technical Design Guide",
        type: "datasheet",
        url: "/downloads/mmgps-technical-guide.pdf",
        fileSize: "2.6 MB",
      },
      {
        title: "MGPS Installation, Commissioning & Maintenance Manual",
        type: "manual",
        url: "/downloads/mmgps-manual.pdf",
        fileSize: "11.2 MB",
      },
      {
        title: "NABH & HTM 02-01 Compliance Certificate",
        type: "certificate",
        url: "/downloads/mmgps-nabh-cert.pdf",
        fileSize: "0.6 MB",
      },
    ],
    faqs: [
      {
        question: "Which gases are covered under a complete MGPS installation?",
        answer:
          "A full MarKEN MMGPS installation covers medical oxygen (O₂), nitrous oxide (N₂O), medical compressed air (MCA at 4 bar and/or 7 bar HPA), surgical/dental vacuum, carbon dioxide (CO₂) for laparoscopy, and anaesthetic gas scavenging (AGSS). Nitrogen (N₂) for surgical tools is available as an option.",
      },
      {
        question: "What is the difference between a VIE and a cylinder manifold as an O₂ source?",
        answer:
          "A Vacuum Insulated Evaporator (VIE) stores liquid oxygen and is cost-effective for hospitals consuming >200 L/min peak O₂ — typically 50+ beds. A cylinder manifold uses high-pressure cylinders and suits smaller facilities. MarKEN designs the source to match projected peak demand, bed count, and local bulk oxygen availability, and always installs a cylinder backup regardless of primary source.",
      },
      {
        question: "How is safety against cross-connection of gases ensured?",
        answer:
          "MarKEN uses Non-Interchangeable Screw Thread (NIST) or Diameter Index Safety System (DISS) outlet probes — each gas has a unique connector geometry that physically prevents wrong gas connection at the terminal unit. Pipelines are colour-coded and labelled at every fitting per HTM 02-01 and IS 3847.",
      },
      {
        question: "What alarm and monitoring provisions are included?",
        answer:
          "The system includes a Master Alarm Panel (MAP) in the hospital control room, Area Alarm Panels (AAPs) at nurses' stations and each clinical zone, and Local Alarm Panels at the plant rooms. All panels monitor supply and pipeline pressure for each gas and annunciate low pressure, high pressure, and plant changeover events. RS-485 and optional BACnet connectivity enable integration with the hospital building management system.",
      },
      {
        question: "How is the pipeline tested and commissioned before handover?",
        answer:
          "MarKEN follows the HTM 02-01 Part B verification and validation protocol: system pressure-test at 1.5× working pressure for 24 hours, cross-connection test, flow and pressure verification at all terminal units, gas identity test (O₂ purity analysis), and alarm function testing. All test records, as-built drawings, and operating certificates are provided at handover.",
      },
    ],
    relatedProducts: ["ot-infrastructure-system", "ot-surgical-table", "ot-surgical-light"],
    seoTitle: "Medical Gas Pipeline System (MGPS) | O₂ N₂O Air Vacuum | MarKEN MMGPS",
    seoDescription:
      "MarKEN MMGPS centralized medical gas pipeline system for hospitals. O₂, N₂O, medical air, vacuum, CO₂, AGSS supply. HTM 02-01, IS 3847, NABH compliant. VIE & manifold source, NIST outlets, alarm panels. Nashik, India.",
    seoKeywords: [
      "medical gas pipeline system india",
      "MGPS installation hospital",
      "oxygen pipeline hospital",
      "medical gas manifold india",
      "HTM 02-01 MGPS",
      "NABH medical gas pipeline",
      "MarKEN MMGPS series",
      "central oxygen supply hospital india",
    ],
    has3DExperience: false,
  },
];
