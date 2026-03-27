import type { Product } from "@/types";

export const modularOTProducts: Product[] = [
  // ─── 1. OT Tables ───────────────────────────────────────────────────────────
  {
    id: "mot-ot-table-01",
    slug: "ot-surgical-table",
    name: "Electro-Hydraulic OT Surgical Table",
    shortName: "MOT Series",
    category: "modular-ot",
    subcategory: "OT Tables",
    tagline: "Precision Positioning for Every Surgical Discipline",
    description:
      "MarKEN MOT Series electro-hydraulic surgical tables deliver effortless, stepless positioning for general surgery, orthopaedics, urology, and neurosurgery. Fully C-arm compatible with a carbon-fibre radiolucent tabletop, the table enables complete intra-operative imaging without patient repositioning. A sealed hydraulic drive with wireless hand-control pendant ensures silent, smooth operation even under maximum load.",
    heroImage: "/images/products/mot/mot-hero.jpg",
    images: [
      "/images/products/mot/mot-front.jpg",
      "/images/products/mot/mot-trendelenburg.jpg",
      "/images/products/mot/mot-lateral.jpg",
      "/images/products/mot/mot-c-arm.jpg",
      "/images/products/mot/mot-control-pendant.jpg",
    ],
    features: [
      {
        icon: "Settings",
        title: "Full Electro-Hydraulic Drive",
        description:
          "Sealed hydraulic circuit with electric pump delivers smooth, vibration-free movement in all axes. Emergency gravity-descent functions during power failure.",
      },
      {
        icon: "Monitor",
        title: "C-Arm Compatible Radiolucent Top",
        description:
          "Carbon-fibre composite tabletop provides 100% radiolucency. Table base engineered for unobstructed C-arm travel from head to toe.",
      },
      {
        icon: "Layers",
        title: "Multi-Section Articulating Top",
        description:
          "Four-section tabletop with independent back, seat, leg, and head control. Kidney-bridge and lateral-tilt accessories for specialised positions.",
      },
      {
        icon: "Shield",
        title: "High Load Capacity",
        description:
          "Rated for 250 kg safe working load across all table positions. Heavy-duty castors with electro-magnetic locking for safe transport.",
      },
      {
        icon: "Wrench",
        title: "Wireless Hand-Control Pendant",
        description:
          "IP67-rated wireless pendant supports all positioning functions. Rechargeable battery with 12-hour runtime and physical override buttons.",
      },
      {
        icon: "Lock",
        title: "Automatic Position Memory",
        description:
          "Stores up to 5 surgeon-defined positions for rapid table recall. Position lock prevents accidental movement mid-procedure.",
      },
    ],
    specifications: [
      { label: "Table Height Range", value: "620–1010 mm (motorised)" },
      { label: "Tabletop Length", value: "2050 mm" },
      { label: "Tabletop Width", value: "530 mm" },
      { label: "Safe Working Load", value: "250 kg" },
      { label: "Trendelenburg / Reverse", value: "±30°" },
      { label: "Lateral Tilt", value: "±20°" },
      { label: "Back Section", value: "+70° / −40°" },
      { label: "Leg Section", value: "+15° / −90°" },
      { label: "Head Section", value: "+30° / −45°" },
      { label: "Longitudinal Slide", value: "±200 mm" },
      { label: "Power Supply", value: "230 V AC ±10%, 50 Hz" },
      { label: "Standby Battery", value: "24 V DC, 7 Ah (emergency descent)" },
    ],
    variants: [
      {
        id: "mot-01",
        model: "MOT-01",
        capacity: "200 kg SWL",
        dimensions: "2050 × 530 × 900 mm (working height)",
        weight: "185 kg",
        specs: [
          { label: "Tabletop Material", value: "Carbon-fibre composite, radiolucent" },
          { label: "Drive System", value: "Electro-hydraulic, 2-column base" },
          { label: "Power Consumption", value: "350", unit: "W" },
          { label: "Sections", value: "4-section (back, seat, leg, head)" },
        ],
      },
      {
        id: "mot-02",
        model: "MOT-02",
        capacity: "250 kg SWL",
        dimensions: "2100 × 535 × 920 mm (working height)",
        weight: "215 kg",
        specs: [
          { label: "Tabletop Material", value: "Carbon-fibre composite, radiolucent" },
          { label: "Drive System", value: "Electro-hydraulic, single-column pedestal" },
          { label: "Power Consumption", value: "420", unit: "W" },
          { label: "Sections", value: "5-section with independent leg split" },
        ],
      },
      {
        id: "mot-03",
        model: "MOT-03 Ortho",
        capacity: "250 kg SWL",
        dimensions: "2150 × 540 × 930 mm (working height)",
        weight: "230 kg",
        specs: [
          { label: "Tabletop Material", value: "Carbon-fibre composite, full radiolucent" },
          { label: "Drive System", value: "Electro-hydraulic, single-column with traction attachment" },
          { label: "Power Consumption", value: "450", unit: "W" },
          { label: "Sections", value: "5-section + orthopaedic traction frame" },
        ],
      },
      {
        id: "mot-04",
        model: "MOT-04 Neuro",
        capacity: "200 kg SWL",
        dimensions: "2100 × 500 × 900 mm (working height)",
        weight: "210 kg",
        specs: [
          { label: "Tabletop Material", value: "Radiolucent carbon-fibre with Mayfield skull clamp interface" },
          { label: "Drive System", value: "Electro-hydraulic, twin-column" },
          { label: "Power Consumption", value: "420", unit: "W" },
          { label: "Sections", value: "4-section with zero-gravity head positioning" },
        ],
      },
    ],
    certifications: ["CE Marked (MDR 2017/745)", "ISO 13485", "IS/IEC 60601-1", "CDSCO Registered", "ISO 9001:2015"],
    downloads: [
      {
        title: "MOT Series Surgical Table Brochure",
        type: "brochure",
        url: "/downloads/mot-brochure.pdf",
        fileSize: "3.2 MB",
      },
      {
        title: "Technical Datasheet — MOT Series",
        type: "datasheet",
        url: "/downloads/mot-datasheet.pdf",
        fileSize: "1.4 MB",
      },
      {
        title: "Installation & Operation Manual",
        type: "manual",
        url: "/downloads/mot-manual.pdf",
        fileSize: "8.1 MB",
      },
      {
        title: "CE Declaration of Conformity",
        type: "certificate",
        url: "/downloads/mot-ce-cert.pdf",
        fileSize: "0.4 MB",
      },
    ],
    faqs: [
      {
        question: "Is the surgical table compatible with all C-arm systems?",
        answer:
          "Yes. The MOT Series features a fully radiolucent carbon-fibre tabletop and a base engineered for unobstructed C-arm travel from head to toe, compatible with all major C-arm brands including Siemens, Philips, and GE.",
      },
      {
        question: "What positions does the table support?",
        answer:
          "The MOT Series supports Trendelenburg, reverse Trendelenburg, lateral tilt, Fowler, lithotomy, beach-chair, prone, and lateral decubitus positions. Accessory sets are available for orthopaedic, urological, and neurosurgical requirements.",
      },
      {
        question: "What happens during a power failure?",
        answer:
          "An integrated 24 V DC battery backup ensures the table can be safely lowered to the minimum height via gravity-assisted emergency descent. Stored position memory is retained on standby power.",
      },
      {
        question: "Can accessories from other manufacturers be used?",
        answer:
          "The MOT Series uses standard MAQUET-compatible rail and side-rail attachment interfaces, allowing use of a wide range of international accessories. MarKEN also supplies a full range of proprietary accessories.",
      },
      {
        question: "What is the recommended preventive maintenance schedule?",
        answer:
          "MarKEN recommends a bi-annual preventive maintenance visit covering hydraulic fluid level inspection, seal integrity check, battery capacity test, and calibration of position sensors. AMC packages are available from our Nashik service centre network.",
      },
    ],
    relatedProducts: ["ot-surgical-light", "ot-infrastructure-system"],
    seoTitle: "Electro-Hydraulic Surgical OT Table | C-Arm Compatible | MarKEN MOT Series",
    seoDescription:
      "MarKEN MOT Series electro-hydraulic operating tables. 200–250 kg SWL, fully radiolucent C-arm compatible tabletop, Trendelenburg ±30°, wireless pendant. CE & ISO 13485 certified. Made in India.",
    seoKeywords: [
      "surgical table india",
      "electro hydraulic ot table",
      "c-arm compatible operating table",
      "modular ot table manufacturer",
      "operation theatre table price india",
      "MarKEN MOT series",
    ],
    has3DExperience: false,
  },

  // ─── 2. OT Lights ───────────────────────────────────────────────────────────
  {
    id: "mol-ot-light-01",
    slug: "ot-surgical-light",
    name: "LED Shadowless Surgical OT Light",
    shortName: "MOL Series",
    category: "modular-ot",
    subcategory: "OT Lights",
    tagline: "True Shadowless Illumination for the Surgical Field",
    description:
      "MarKEN MOL Series LED surgical lights deliver intense, shadow-free illumination with a colour rendering index (CRI) above 95, accurately reproducing tissue colour under the deepest incisions. Stepless adjustment of light intensity (20–100%) and colour temperature (3,500–5,000 K) allows surgeons to customise the field without compromise. The low-heat LED array and sealed, autoclavable handle system ensure long-term reliability in the demanding OT environment.",
    heroImage: "/images/products/mol/mol-hero.jpg",
    images: [
      "/images/products/mol/mol-ceiling-dual.jpg",
      "/images/products/mol/mol-single-head.jpg",
      "/images/products/mol/mol-control-panel.jpg",
      "/images/products/mol/mol-handle.jpg",
      "/images/products/mol/mol-field-view.jpg",
    ],
    features: [
      {
        icon: "Lightbulb",
        title: "High-CRI LED Array",
        description:
          "CRI ≥ 95 LED modules accurately render tissue colour, reducing diagnostic errors. LED lifespan exceeds 60,000 hours, eliminating bulb replacement.",
      },
      {
        icon: "Gauge",
        title: "Stepless Intensity & Colour Control",
        description:
          "Illuminance adjustable from 40,000 to 160,000 lux. Colour temperature variable between 3,500 K (warm) and 5,000 K (cool) for optimal tissue differentiation.",
      },
      {
        icon: "Wind",
        title: "True Shadowless Performance",
        description:
          "Multi-reflector optical design with 61+ individual LED chips eliminates shadows from surgical instruments and team members. Shadow dilution value ≥ 50%.",
      },
      {
        icon: "Activity",
        title: "Low Heat Emission",
        description:
          "Advanced thermal management keeps surface temperature below 40°C at 1 m field distance. Protects patient tissue during extended procedures.",
      },
      {
        icon: "Monitor",
        title: "Touchscreen Control Panel",
        description:
          "Wall-mounted touchscreen enables independent control of main and satellite heads. Focus, intensity, colour, and standby functions accessible at the scrub sink.",
      },
      {
        icon: "Wrench",
        title: "Autoclavable Sterile Handle",
        description:
          "Stainless steel handle inserts autoclavable at 134°C/3 bar for intra-operative repositioning without breaking sterile field.",
      },
    ],
    specifications: [
      { label: "Light Source", value: "High-power LED modules, CRI ≥ 95" },
      { label: "Illuminance (max)", value: "160,000 lux at 1 m" },
      { label: "Illuminance (min)", value: "40,000 lux at 1 m" },
      { label: "Colour Temperature", value: "3,500 K – 5,000 K (stepless)" },
      { label: "Field Diameter (d10)", value: "200 mm" },
      { label: "Depth of Illumination", value: "700–1,200 mm" },
      { label: "LED Lifespan", value: "> 60,000 hours" },
      { label: "Heat at 1 m", value: "< 25 mW/cm²" },
      { label: "Arm Reach", value: "1,200 mm horizontal, 800 mm vertical" },
      { label: "IP Rating", value: "IP54 (head), IP44 (suspension)" },
      { label: "Power Consumption", value: "Single head: 100 W; Dual head: 200 W" },
      { label: "Power Supply", value: "230 V AC ±10%, 50 Hz" },
    ],
    variants: [
      {
        id: "mol-01",
        model: "MOL-01 Single",
        capacity: "Single head, ceiling-mounted",
        dimensions: "Head diameter: 700 mm; Arm reach: 1,200 mm",
        weight: "18 kg (head + arm)",
        specs: [
          { label: "Illuminance", value: "Up to 120,000 lux at 1 m" },
          { label: "LED Chips", value: "36 high-power LEDs" },
          { label: "Power Consumption", value: "80", unit: "W" },
          { label: "Mounting", value: "Single ceiling suspension arm" },
        ],
      },
      {
        id: "mol-02",
        model: "MOL-02 Dual",
        capacity: "Dual head (main + satellite), ceiling-mounted",
        dimensions: "Main head: 780 mm dia; Satellite: 600 mm dia",
        weight: "34 kg (both heads + arms)",
        specs: [
          { label: "Illuminance (main)", value: "Up to 160,000 lux at 1 m" },
          { label: "Illuminance (satellite)", value: "Up to 80,000 lux at 1 m" },
          { label: "LED Chips", value: "61 (main) + 36 (satellite)" },
          { label: "Power Consumption", value: "200", unit: "W" },
        ],
      },
      {
        id: "mol-03",
        model: "MOL-03 Exam",
        capacity: "Single head, mobile floor stand",
        dimensions: "Head: 500 mm dia; Stand height: 1,600–1,900 mm adjustable",
        weight: "22 kg (head + stand)",
        specs: [
          { label: "Illuminance", value: "Up to 60,000 lux at 1 m" },
          { label: "LED Chips", value: "24 high-power LEDs" },
          { label: "Power Consumption", value: "50", unit: "W" },
          { label: "Mounting", value: "Mobile stand with locking castors" },
        ],
      },
    ],
    certifications: ["CE Marked (MDR 2017/745)", "IEC 60601-2-41", "ISO 13485", "CDSCO Registered", "IS 7240 compliant"],
    downloads: [
      {
        title: "MOL Series Surgical Light Brochure",
        type: "brochure",
        url: "/downloads/mol-brochure.pdf",
        fileSize: "2.8 MB",
      },
      {
        title: "Photometric Performance Datasheet",
        type: "datasheet",
        url: "/downloads/mol-photometric-datasheet.pdf",
        fileSize: "1.0 MB",
      },
      {
        title: "Installation & Operation Manual",
        type: "manual",
        url: "/downloads/mol-manual.pdf",
        fileSize: "6.5 MB",
      },
      {
        title: "CE & IEC 60601-2-41 Certificate",
        type: "certificate",
        url: "/downloads/mol-ce-cert.pdf",
        fileSize: "0.5 MB",
      },
    ],
    faqs: [
      {
        question: "What is CRI and why does it matter in surgery?",
        answer:
          "CRI (Colour Rendering Index) measures how accurately a light source reproduces colour compared to natural daylight (CRI 100). In surgery, a CRI ≥ 95 ensures accurate tissue colour rendering, enabling surgeons to distinguish between arteries, veins, nerves, and healthy vs. diseased tissue with confidence.",
      },
      {
        question: "How is the colour temperature adjustment used clinically?",
        answer:
          "Lower colour temperatures (~3,500 K, warm white) improve contrast in fatty tissue and enhance red-yellow differentiation. Higher temperatures (~5,000 K, cool white) improve detail visibility in deep cavities and blue-green tissue tones. Surgeons can adjust on-the-fly without leaving the sterile field.",
      },
      {
        question: "Can the sterile handle be autoclaved?",
        answer:
          "Yes. All MOL Series lights ship with two autoclavable stainless steel handle inserts rated for 134°C at 3 bar for 18 minutes (standard pre-vacuum cycle). Replacement handles are available from MarKEN's spare parts network.",
      },
      {
        question: "What is the light's behaviour during a power failure?",
        answer:
          "MOL Series lights feature an integrated UPS module providing 30 minutes of full-intensity operation during power interruption, ensuring surgical procedures can be completed safely or wound closure performed.",
      },
      {
        question: "What is the expected LED lifespan?",
        answer:
          "MarKEN MOL Series LED modules are rated at >60,000 hours to L70 (70% of initial luminous output). At 8 hours of daily OT use, this corresponds to over 20 years of service life without bulb replacement.",
      },
    ],
    relatedProducts: ["ot-surgical-table", "ot-infrastructure-system"],
    seoTitle: "LED Shadowless Surgical OT Light | CRI 95+ | MarKEN MOL Series",
    seoDescription:
      "MarKEN MOL Series LED shadowless OT lights. 40,000–160,000 lux, CRI ≥ 95, 3,500–5,000 K colour temperature, 60,000-hour LED life. Single & dual head ceiling configurations. CE & IEC 60601-2-41 certified.",
    seoKeywords: [
      "surgical ot light india",
      "LED shadowless light operation theatre",
      "surgical light manufacturer india",
      "OT light price india",
      "shadowless ceiling light surgery",
      "MarKEN MOL series",
    ],
    has3DExperience: false,
  },

  // ─── 3. OT Infrastructure ───────────────────────────────────────────────────
  {
    id: "moi-ot-infra-01",
    slug: "ot-infrastructure-system",
    name: "Modular OT Panel & Infrastructure System",
    shortName: "MOI Series",
    category: "modular-ot",
    subcategory: "OT Infrastructure",
    tagline: "Turnkey Modular OT — Built for Infection Control, Designed for Efficiency",
    description:
      "MarKEN MOI Series delivers a complete turnkey modular operation theatre — from antistatic, antimicrobial wall and ceiling panels to HEPA-filtered laminar airflow units and medical gas pendants. Every component is engineered to meet NABH, AERB, and international HTM 03-01 infection-control standards, providing a seamless, wash-down-friendly environment that minimises surgical site infection risk.",
    heroImage: "/images/products/moi/moi-hero.jpg",
    images: [
      "/images/products/moi/moi-ot-interior.jpg",
      "/images/products/moi/moi-laminar-airflow.jpg",
      "/images/products/moi/moi-gas-pendant.jpg",
      "/images/products/moi/moi-panel-detail.jpg",
      "/images/products/moi/moi-control-room.jpg",
    ],
    features: [
      {
        icon: "Wind",
        title: "HEPA Laminar Airflow System",
        description:
          "H14 HEPA filters (99.995% efficiency at 0.3 µm) with vertical unidirectional airflow at 0.25–0.45 m/s. Maintains ISO Class 5 (Class 100) within the surgical zone.",
      },
      {
        icon: "Shield",
        title: "Antimicrobial Panel System",
        description:
          "Seamless phenolic resin or stainless steel wall panels with antimicrobial coating. Flush-mounted, coved corners eliminate dust traps and withstand chemical disinfection.",
      },
      {
        icon: "Box",
        title: "Medical Gas & Electrical Pendants",
        description:
          "Ceiling-mounted motorised pendants supply O₂, N₂O, compressed air, vacuum, and AGSS with integrated electrical sockets, data, and nurse-call points. Single and double-arm configurations.",
      },
      {
        icon: "Gauge",
        title: "Pressure & Air Change Control",
        description:
          "Positive pressure cascade (OT → scrub → corridor) at +20 Pa differential. Minimum 20 air changes per hour (ACPH) for conventional OT and 400–500 ACPH for laminar flow zone.",
      },
      {
        icon: "Monitor",
        title: "Integrated BMS Interface",
        description:
          "Touchscreen OT control panel manages temperature (18–22°C), humidity (45–55% RH), lighting, airflow, and gas alarm status. RS-485 and BACnet integration for hospital BMS.",
      },
      {
        icon: "CheckCircle",
        title: "NABH & AERB Compliant Design",
        description:
          "OT designed and validated per NABH standards, AERB radiation room requirements, and ASHRAE 170-2017. Comprehensive validation protocol and IQ/OQ/PQ documentation supplied.",
      },
    ],
    specifications: [
      { label: "Panel System", value: "Phenolic resin or SS 304 flush panels, 50 mm thick" },
      { label: "Flooring", value: "Antistatic seamless epoxy or conductive vinyl" },
      { label: "Ceiling", value: "SS/GI lay-in with flush HEPA terminal units" },
      { label: "HEPA Filter Grade", value: "H14 (EN 1822) — 99.995% at MPPS" },
      { label: "Airflow Pattern", value: "Vertical unidirectional (laminar) + peripheral mixing" },
      { label: "Airflow Velocity (surgical zone)", value: "0.25–0.45 m/s" },
      { label: "Air Changes per Hour", value: "≥ 20 ACPH (conventional); 400–500 ACPH (laminar zone)" },
      { label: "OT Positive Pressure", value: "+20 Pa vs. adjacent corridor" },
      { label: "Temperature Control", value: "18–22°C ±1°C" },
      { label: "Humidity Control", value: "45–55% RH ±5%" },
      { label: "Lighting (OT General)", value: "500–1,000 lux (LED)" },
      { label: "Electrical", value: "Medical-grade IT power supply, 230 V, TN-S earthing" },
    ],
    variants: [
      {
        id: "moi-01",
        model: "MOI-01 Standard OT",
        capacity: "Single OT, 6 m × 6 m footprint",
        dimensions: "Room: 6,000 × 6,000 × 3,000 mm (H)",
        weight: "N/A (site-built system)",
        specs: [
          { label: "Panel Type", value: "Phenolic resin, antimicrobial, white" },
          { label: "Airflow System", value: "Conventional mixing, 20+ ACPH" },
          { label: "Pendants", value: "1 × anaesthesia pendant + 1 × surgical pendant" },
          { label: "Gas Points", value: "O₂ × 4, N₂O × 2, Air × 2, Vacuum × 4, AGSS × 2" },
        ],
      },
      {
        id: "moi-02",
        model: "MOI-02 Laminar Flow OT",
        capacity: "Single OT with full laminar airflow canopy, 7.2 m × 6 m",
        dimensions: "Room: 7,200 × 6,000 × 3,200 mm (H); LAF canopy: 3,200 × 1,800 mm",
        weight: "N/A (site-built system)",
        specs: [
          { label: "Panel Type", value: "SS 304 flush panels, antimicrobial coating" },
          { label: "Airflow System", value: "Vertical laminar + conventional perimeter, 400–500 ACPH in zone" },
          { label: "Pendants", value: "2 × motorised double-arm pendants" },
          { label: "Gas Points", value: "O₂ × 6, N₂O × 4, Air × 4, Vacuum × 6, AGSS × 4" },
        ],
      },
      {
        id: "moi-03",
        model: "MOI-03 OT Complex",
        capacity: "Multi-OT complex — 2 to 6 OT suites with central AHU",
        dimensions: "Custom per project layout",
        weight: "N/A (site-built system)",
        specs: [
          { label: "Panel Type", value: "Modular SS or phenolic, interchangeable" },
          { label: "Airflow System", value: "Central AHU with dedicated OT branches, BMS-controlled" },
          { label: "Pendants", value: "2–4 per OT, configurable" },
          { label: "Gas Points", value: "Per NABH/HTM 03-01 room schedule" },
        ],
      },
    ],
    certifications: [
      "NABH Compliant Design",
      "AERB Compliant (radiation room variant)",
      "ISO 14644-1 Class 5 Validated",
      "ASHRAE 170-2017 Compliant",
      "CE Marked Components",
      "ISO 9001:2015",
      "ISO 13485",
    ],
    downloads: [
      {
        title: "Modular OT Infrastructure Brochure",
        type: "brochure",
        url: "/downloads/moi-brochure.pdf",
        fileSize: "4.1 MB",
      },
      {
        title: "OT Infrastructure Technical Specifications",
        type: "datasheet",
        url: "/downloads/moi-technical-spec.pdf",
        fileSize: "2.3 MB",
      },
      {
        title: "OT Commissioning & Validation Manual",
        type: "manual",
        url: "/downloads/moi-validation-manual.pdf",
        fileSize: "9.4 MB",
      },
      {
        title: "NABH OT Standards Compliance Guide",
        type: "certificate",
        url: "/downloads/moi-nabh-guide.pdf",
        fileSize: "1.7 MB",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a conventional OT and a laminar flow OT?",
        answer:
          "A conventional OT uses turbulent mixing airflow with ≥ 20 ACPH to dilute contaminants. A laminar flow OT (ULPA/HEPA canopy) delivers unidirectional, high-velocity airflow (0.25–0.45 m/s) directly over the surgical site, maintaining ISO Class 5 particle counts for ultra-clean procedures such as joint replacements and cardiac surgery.",
      },
      {
        question: "How long does a modular OT installation take?",
        answer:
          "A single standard OT suite (MOI-01) can typically be installed and commissioned within 6–8 weeks from site readiness. A multi-OT complex (MOI-03) requires 12–20 weeks depending on scope. MarKEN provides detailed project timelines and a dedicated site supervisor throughout installation.",
      },
      {
        question: "Are the OT panels suitable for MRI or radiation-protected rooms?",
        answer:
          "Yes. MarKEN supplies RF-shielded panel variants for MRI suites and lead-lined panel systems for radiation-protected OTs. These are engineered in collaboration with the hospital's radiation physicist and comply with AERB and BARC guidelines.",
      },
      {
        question: "What validation documentation is provided?",
        answer:
          "MarKEN provides a full IQ (Installation Qualification), OQ (Operational Qualification), and PQ (Performance Qualification) documentation package including HEPA filter integrity test reports (DOP/PAO), pressure differential records, airflow velocity mapping, and particle count certification per ISO 14644-1.",
      },
      {
        question: "Can an existing OT be upgraded rather than replaced?",
        answer:
          "Yes. MarKEN offers modular retrofit solutions that can upgrade an existing conventional OT to current NABH and ASHRAE 170 standards without full demolition, typically reducing downtime to 3–4 weeks per OT suite.",
      },
    ],
    relatedProducts: ["ot-surgical-table", "ot-surgical-light", "medical-gas-pipeline-system"],
    seoTitle: "Modular OT Panel System | HEPA Laminar Airflow | Gas Pendants | MarKEN MOI Series",
    seoDescription:
      "MarKEN MOI Series turnkey modular operation theatre. Antimicrobial panels, H14 HEPA laminar airflow (ISO Class 5), medical gas pendants, NABH & ASHRAE 170 compliant. Manufactured in Nashik, India.",
    seoKeywords: [
      "modular operation theatre india",
      "modular OT manufacturer India",
      "OT laminar airflow system",
      "HEPA OT infrastructure",
      "NABH compliant OT",
      "medical gas pendant OT",
      "MarKEN MOI series",
    ],
    has3DExperience: false,
  },
];
