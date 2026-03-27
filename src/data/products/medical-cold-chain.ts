import type { Product } from "@/types";

export const medicalColdChainProducts: Product[] = [
  // ─────────────────────────────────────────────────────────────────
  // 1. Walk-in Freezer
  // ─────────────────────────────────────────────────────────────────
  {
    id: "wif-01",
    slug: "walk-in-freezer",
    name: "Walk-in Freezer",
    shortName: "WIF Series",
    category: "medical-cold-chain",
    subcategory: "Freezers",
    tagline: "Large-Scale Frozen Storage for Blood Banks & Pharmaceutical Facilities",
    description:
      "MarKEN Walk-in Freezers deliver reliable -20°C to -30°C storage for large-volume frozen pharmaceutical products, FFP inventory, and biological materials. Constructed with 120mm PUF insulated panels, industrial-grade refrigeration systems, and microprocessor-based controls, these modular cold rooms are designed to meet WHO GMP and blood bank regulatory requirements. Available in custom sizes from 5 m³ to 50 m³ with optional redundant compressor systems.",
    heroImage: "/images/walk-in-freezer-hero.jpg",
    images: [
      "/images/walk-in-freezer-exterior.jpg",
      "/images/walk-in-freezer-interior.jpg",
      "/images/walk-in-freezer-door.jpg",
      "/images/walk-in-freezer-control-panel.jpg",
    ],
    features: [
      {
        icon: "Snowflake",
        title: "Deep Freeze Performance",
        description:
          "Dual compressor cascade refrigeration system achieves and maintains -20°C to -30°C even at +43°C ambient. Independent refrigeration circuits provide operational redundancy.",
      },
      {
        icon: "Layers",
        title: "120mm PUF Insulated Panels",
        description:
          "CFC-free polyurethane foam core panels with cam-lock joining system. Floor, wall, and ceiling panels maintain thermal integrity under continuous access conditions.",
      },
      {
        icon: "Shield",
        title: "GMP Compliant Construction",
        description:
          "SS 304 food-grade interior lining with coved corners and seamless welds. Epoxy-coated insulated floor with anti-slip surface meets WHO GMP and blood bank standards.",
      },
      {
        icon: "BellRing",
        title: "Multi-Zone Alarm System",
        description:
          "Independent high/low temperature alarms, door-ajar alarm with adjustable delay, power failure alert, and remote alarm relay for integration with SCADA or BMS.",
      },
      {
        icon: "Thermometer",
        title: "Uniform Temperature Distribution",
        description:
          "Strategically positioned fan coil evaporator units ensure ±1°C uniformity throughout the storage volume, eliminating warm spots even at full load.",
      },
      {
        icon: "Lock",
        title: "Heavy-Duty Safety Door",
        description:
          "120mm insulated hinged door with interior safety release handle, heated door frame to prevent frost seal, and magnetic gasket for airtight closure.",
      },
    ],
    specifications: [
      { label: "Temperature Range", value: "-20°C to -30°C" },
      { label: "Temperature Uniformity", value: "±1°C" },
      { label: "Refrigeration System", value: "Dual Compressor Cascade" },
      { label: "Refrigerant", value: "R404A / R448A (Low GWP Option)" },
      { label: "Panel Insulation", value: "120mm CFC-Free PUF" },
      { label: "Interior Lining", value: "Stainless Steel 304 Grade" },
      { label: "Exterior Finish", value: "Pre-coated GI / Powder Coated MS" },
      { label: "Floor Load Capacity", value: "500 kg/m²" },
      { label: "Door Type", value: "120mm Insulated Hinged, Interior Safety Release" },
      { label: "Power Supply", value: "415V, 3-Phase, 50 Hz" },
      { label: "Ambient Operating Range", value: "+10°C to +43°C" },
      { label: "Certifications", value: "ISO 9001, CE, CDSCO" },
    ],
    variants: [
      {
        id: "mwf-01",
        model: "MWF-S10",
        capacity: "10 m³",
        dimensions: "2500 × 2500 × 2400 mm (L×W×H)",
        weight: "1200 kg",
        specs: [
          { label: "Compressor Power", value: "3.75", unit: "kW" },
          { label: "Power Consumption", value: "4.2", unit: "kW" },
        ],
      },
      {
        id: "mwf-02",
        model: "MWF-S20",
        capacity: "20 m³",
        dimensions: "3500 × 3000 × 2400 mm (L×W×H)",
        weight: "2100 kg",
        specs: [
          { label: "Compressor Power", value: "7.5", unit: "kW" },
          { label: "Power Consumption", value: "8.5", unit: "kW" },
        ],
      },
      {
        id: "mwf-03",
        model: "MWF-S35",
        capacity: "35 m³",
        dimensions: "5000 × 3500 × 2400 mm (L×W×H)",
        weight: "3400 kg",
        specs: [
          { label: "Compressor Power", value: "11", unit: "kW" },
          { label: "Power Consumption", value: "13", unit: "kW" },
        ],
      },
      {
        id: "mwf-04",
        model: "MWF-S50",
        capacity: "50 m³",
        dimensions: "6500 × 4000 × 2400 mm (L×W×H)",
        weight: "4800 kg",
        specs: [
          { label: "Compressor Power", value: "15", unit: "kW" },
          { label: "Power Consumption", value: "17.5", unit: "kW" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 9001", "ISO 13485", "CDSCO"],
    downloads: [
      {
        title: "Walk-in Freezer Product Brochure",
        type: "brochure",
        url: "/downloads/wif-brochure.pdf",
        fileSize: "3.1 MB",
      },
      {
        title: "Technical Datasheet — MWF Series",
        type: "datasheet",
        url: "/downloads/wif-datasheet.pdf",
        fileSize: "1.4 MB",
      },
      {
        title: "Installation & Commissioning Manual",
        type: "manual",
        url: "/downloads/wif-manual.pdf",
        fileSize: "7.2 MB",
      },
      {
        title: "CE Certificate — Walk-in Freezer",
        type: "certificate",
        url: "/downloads/wif-ce-certificate.pdf",
        fileSize: "0.4 MB",
      },
    ],
    faqs: [
      {
        question: "Can the Walk-in Freezer be installed in existing building space?",
        answer:
          "Yes. MarKEN Walk-in Freezers use a modular panel system that can be assembled within an existing room or as a standalone structure. Our site survey team assesses available space, floor load capacity, electrical supply, and ventilation before recommending the optimal configuration.",
      },
      {
        question: "What is the pulldown time to reach -20°C from ambient?",
        answer:
          "Depending on room size and initial ambient temperature, pulldown from +25°C to -20°C typically takes 4–8 hours for an empty room. Pre-cooling before loading product is recommended. Our commissioning team validates temperature performance before handover.",
      },
      {
        question: "Is a redundant compressor system available?",
        answer:
          "Yes. All MWF Series units are available with a built-in standby compressor that automatically cuts in on primary compressor failure. This is strongly recommended for pharmaceutical and blood bank applications where product loss is critical.",
      },
      {
        question: "What refrigerant is used and is it environmentally compliant?",
        answer:
          "Standard units use R404A. Low-GWP R448A is available as an environmentally preferred option with no performance compromise. MarKEN complies with all current F-gas and HFC phase-down regulations.",
      },
      {
        question: "Can the unit be connected to remote temperature monitoring?",
        answer:
          "Yes. All units include RS-485 and optional Modbus/BACnet output for integration with hospital BMS or MarKEN's Remote Temperature Monitoring System (MRTM) for 24/7 cloud-based alerts and data logging.",
      },
    ],
    relatedProducts: ["walk-in-cooler", "deep-freezer-40", "remote-temperature-monitoring"],
    seoTitle: "Walk-in Freezer | -20°C to -30°C | Blood Bank & Pharma | MarKEN",
    seoDescription:
      "MarKEN Walk-in Freezers for blood banks and pharmaceutical cold storage. -20°C to -30°C, 10–50 m³, dual compressor redundancy, GMP compliant. ISO 13485, CE certified. Made in India.",
    seoKeywords: [
      "walk-in freezer india",
      "pharmaceutical cold room freezer",
      "blood bank walk-in freezer",
      "medical cold room manufacturer",
      "GMP cold storage room",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. Walk-in Cooler
  // ─────────────────────────────────────────────────────────────────
  {
    id: "wic-01",
    slug: "walk-in-cooler",
    name: "Walk-in Cooler",
    shortName: "WIC Series",
    category: "medical-cold-chain",
    subcategory: "Refrigeration",
    tagline: "High-Capacity +2°C to +8°C Cold Room for Medical & Pharmaceutical Storage",
    description:
      "MarKEN Walk-in Coolers provide large-volume +2°C to +8°C controlled storage for vaccines, blood components, pharmaceutical products, and reagents. Modular PUF panel construction with stainless steel interiors allows custom sizing from 5 m³ to 100 m³. Designed for blood banks, vaccine stores, hospital pharmacies, and pharma distribution centres requiring continuous, reliable cold storage at scale.",
    heroImage: "/images/walk-in-cooler-hero.jpg",
    images: [
      "/images/walk-in-cooler-exterior.jpg",
      "/images/walk-in-cooler-interior.jpg",
      "/images/walk-in-cooler-shelving.jpg",
      "/images/walk-in-cooler-control.jpg",
    ],
    features: [
      {
        icon: "Thermometer",
        title: "+2°C to +8°C Precision Control",
        description:
          "Microprocessor PID controller with dual-channel temperature sensing maintains the critical +2°C to +8°C range required for vaccines and blood components, with ±0.5°C uniformity.",
      },
      {
        icon: "Layers",
        title: "100mm Modular PUF Panels",
        description:
          "CFC-free 100mm polyurethane foam insulated panels with galvanised cam-lock joinery. Available in GI or SS304 interior finish for pharmaceutical-grade hygiene.",
      },
      {
        icon: "Wind",
        title: "Fan-Assisted Air Distribution",
        description:
          "Ceiling-mounted fan coil unit ensures uniform air circulation throughout the room volume, preventing stratification and maintaining temperature uniformity even when racks are densely loaded.",
      },
      {
        icon: "Shield",
        title: "WHO & CDSCO Compliant",
        description:
          "Construction and performance meet WHO cold chain guidelines and CDSCO Schedule M requirements for pharmaceutical cold stores. Suitable for NABL-accredited laboratories and NABH hospitals.",
      },
      {
        icon: "BellRing",
        title: "Continuous Alarm Monitoring",
        description:
          "High/low temperature alarms with adjustable setpoints, door-open alarm, power failure alert with battery-backed alarm sounder, and remote alarm contact output for building integration.",
      },
      {
        icon: "Activity",
        title: "Data Logger Integration",
        description:
          "Integrated temperature data logger with 21 CFR Part 11 compliant audit trail. USB data export and optional wireless transmission for regulatory compliance documentation.",
      },
    ],
    specifications: [
      { label: "Temperature Range", value: "+2°C to +8°C" },
      { label: "Temperature Uniformity", value: "±0.5°C" },
      { label: "Refrigeration System", value: "Single / Dual Compressor (Size Dependent)" },
      { label: "Refrigerant", value: "R134a / R448A" },
      { label: "Panel Insulation", value: "100mm CFC-Free PUF" },
      { label: "Interior Lining", value: "Stainless Steel 304 Grade" },
      { label: "Exterior Finish", value: "Pre-coated GI / Powder Coated MS" },
      { label: "Floor Load Capacity", value: "750 kg/m²" },
      { label: "Door Type", value: "100mm Insulated Hinged with Heated Frame" },
      { label: "Power Supply", value: "415V, 3-Phase, 50 Hz (>15 m³) / 220V, 1-Phase (≤10 m³)" },
      { label: "Ambient Operating Range", value: "+10°C to +43°C" },
      { label: "Certifications", value: "ISO 9001, ISO 13485, CE, CDSCO" },
    ],
    variants: [
      {
        id: "mwc-01",
        model: "MWC-S10",
        capacity: "10 m³",
        dimensions: "2500 × 2500 × 2400 mm (L×W×H)",
        weight: "1050 kg",
        specs: [
          { label: "Compressor Power", value: "2.2", unit: "kW" },
          { label: "Power Consumption", value: "2.8", unit: "kW" },
        ],
      },
      {
        id: "mwc-02",
        model: "MWC-S25",
        capacity: "25 m³",
        dimensions: "4000 × 3500 × 2400 mm (L×W×H)",
        weight: "2200 kg",
        specs: [
          { label: "Compressor Power", value: "4.5", unit: "kW" },
          { label: "Power Consumption", value: "5.5", unit: "kW" },
        ],
      },
      {
        id: "mwc-03",
        model: "MWC-S50",
        capacity: "50 m³",
        dimensions: "6500 × 4000 × 2400 mm (L×W×H)",
        weight: "4000 kg",
        specs: [
          { label: "Compressor Power", value: "7.5", unit: "kW" },
          { label: "Power Consumption", value: "9.0", unit: "kW" },
        ],
      },
      {
        id: "mwc-04",
        model: "MWC-S100",
        capacity: "100 m³",
        dimensions: "10000 × 5000 × 2400 mm (L×W×H)",
        weight: "7500 kg",
        specs: [
          { label: "Compressor Power", value: "15", unit: "kW" },
          { label: "Power Consumption", value: "18", unit: "kW" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 9001", "ISO 13485", "CDSCO", "WHO Cold Chain"],
    downloads: [
      {
        title: "Walk-in Cooler Product Brochure",
        type: "brochure",
        url: "/downloads/wic-brochure.pdf",
        fileSize: "2.8 MB",
      },
      {
        title: "Technical Datasheet — MWC Series",
        type: "datasheet",
        url: "/downloads/wic-datasheet.pdf",
        fileSize: "1.2 MB",
      },
      {
        title: "Installation & Commissioning Manual",
        type: "manual",
        url: "/downloads/wic-manual.pdf",
        fileSize: "6.5 MB",
      },
      {
        title: "CE Certificate — Walk-in Cooler",
        type: "certificate",
        url: "/downloads/wic-ce-certificate.pdf",
        fileSize: "0.4 MB",
      },
    ],
    faqs: [
      {
        question: "What is the difference between the Walk-in Cooler and Walk-in Freezer?",
        answer:
          "The Walk-in Cooler maintains +2°C to +8°C and is used for vaccines, blood components, pharmaceutical products, and reagents. The Walk-in Freezer maintains -20°C to -30°C for FFP, frozen pharmaceuticals, and biological material requiring deep freeze storage. Both use the same modular panel construction but with different insulation thickness and refrigeration systems.",
      },
      {
        question: "Is the unit suitable for vaccine storage under NIP (National Immunisation Programme)?",
        answer:
          "Yes. MarKEN Walk-in Coolers meet WHO cold chain guidelines and can be configured to meet all requirements of India's Universal Immunisation Programme and state cold chain stores. Units can be provided with WHO PQS-compliant temperature monitoring and alarm systems.",
      },
      {
        question: "Can the cold room be expanded after installation?",
        answer:
          "Yes. The modular panel system allows future expansion by adding panels to increase room size. The refrigeration system is sized during initial design with provision for the planned final capacity, avoiding the need to replace the mechanical system on expansion.",
      },
      {
        question: "What is the temperature recovery time after door opening?",
        answer:
          "Recovery from a brief door opening (30 seconds) at full load typically takes 3–8 minutes depending on room size and ambient temperature. Strip curtains and anti-condensation door heaters minimise temperature impact during access.",
      },
    ],
    relatedProducts: ["walk-in-freezer", "laboratory-refrigerator", "remote-temperature-monitoring"],
    seoTitle: "Walk-in Cooler | +2°C to +8°C Cold Room | Pharma & Vaccine Storage | MarKEN",
    seoDescription:
      "MarKEN Walk-in Coolers: modular +2°C to +8°C cold rooms for vaccines, blood banks, and pharmaceutical storage. 10–100 m³, ISO 13485, CE, CDSCO. Custom sizes available.",
    seoKeywords: [
      "walk-in cooler india",
      "vaccine cold room manufacturer",
      "pharmaceutical cold storage room",
      "blood bank cold room",
      "medical cold chain room",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. ULT Deep Freezer (-86°C)
  // ─────────────────────────────────────────────────────────────────
  {
    id: "ult-01",
    slug: "ult-deep-freezer",
    name: "ULT Deep Freezer (-86°C)",
    shortName: "MULT Series",
    category: "medical-cold-chain",
    subcategory: "Freezers",
    tagline: "Ultra-Low Temperature Storage for Plasma, Biologicals & Research Samples",
    description:
      "The MarKEN MULT Series Ultra-Low Temperature Freezers achieve -40°C to -86°C using a two-stage cascade compressor system with environmentally responsible refrigerants. Designed for long-term storage of fresh frozen plasma, enzyme preparations, biological specimens, virus cultures, and mRNA-based therapeutics, these freezers deliver exceptional temperature uniformity and hold-over performance. Inner vacuum-insulated door and 200mm CFC-free PUF insulation maximise energy efficiency.",
    heroImage: "/images/ult-deep-freezer-hero.jpg",
    images: [
      "/images/ult-deep-freezer-front.jpg",
      "/images/ult-deep-freezer-open.jpg",
      "/images/ult-deep-freezer-shelves.jpg",
      "/images/ult-deep-freezer-panel.jpg",
      "/images/ult-deep-freezer-compressor.jpg",
    ],
    features: [
      {
        icon: "Snowflake",
        title: "Cascade Two-Stage Refrigeration",
        description:
          "High-stage and low-stage compressors in cascade configuration achieve -86°C reliably. Environmentally responsible CFC-free refrigerant pair selected for optimum efficiency at ultra-low temperatures.",
      },
      {
        icon: "Thermometer",
        title: "Microprocessor Temperature Control",
        description:
          "Dual-channel temperature controller with digital display shows chamber temperature in real time. Independent high-temperature alarm circuit with battery backup ensures alarm activation even on mains failure.",
      },
      {
        icon: "Layers",
        title: "200mm Super Insulation",
        description:
          "200mm CFC-free PUF insulation with vacuum-insulated inner door minimises heat ingress and energy consumption. Maintains -70°C for 60+ minutes after power loss (doors closed).",
      },
      {
        icon: "Shield",
        title: "Sample Protection Lock",
        description:
          "Four independent inner door sections with separate gaskets — opening one section does not expose the entire chamber, minimising temperature perturbation during sample access.",
      },
      {
        icon: "BellRing",
        title: "Multi-Level Safety Alarms",
        description:
          "Audible and visual alarms for high temperature, sensor failure, power failure, and door open. Battery-backed alarm sounder active for 72 hours during mains outage. Remote alarm relay output included.",
      },
      {
        icon: "Gauge",
        title: "Energy Efficient Operation",
        description:
          "Variable speed compressor and ECO mode reduce power consumption by up to 20% during stable operation. Auto-defrost cycle timed to minimise temperature excursion.",
      },
    ],
    specifications: [
      { label: "Temperature Range", value: "-40°C to -86°C" },
      { label: "Temperature Uniformity", value: "±2.5°C at -80°C" },
      { label: "Refrigeration System", value: "Two-Stage Cascade (CFC-Free)" },
      { label: "Refrigerant Pair", value: "R404A (High Stage) / R508B (Low Stage)" },
      { label: "Insulation", value: "200mm CFC-Free PUF, Vacuum Inner Door" },
      { label: "Interior Material", value: "Stainless Steel 304 Grade" },
      { label: "Exterior Material", value: "Powder Coated GI Steel" },
      { label: "Inner Doors", value: "4 Independently Gasketed Sections" },
      { label: "Shelf Configuration", value: "4 Wire Baskets / Adjustable Shelves" },
      { label: "Power Supply", value: "220V ± 10%, 50 Hz, Single Phase" },
      { label: "Ambient Operating Range", value: "+10°C to +32°C" },
      { label: "Alarm Backup Battery", value: "72-hour internal battery backup" },
    ],
    variants: [
      {
        id: "mult-01",
        model: "MULT-200",
        capacity: "200 Liters",
        dimensions: "700 × 750 × 1150 mm (W×D×H)",
        weight: "135 kg",
        specs: [
          { label: "Power Consumption", value: "580", unit: "W" },
          { label: "Pulldown Time to -80°C", value: "≤4.5", unit: "hours" },
        ],
      },
      {
        id: "mult-02",
        model: "MULT-350",
        capacity: "350 Liters",
        dimensions: "850 × 800 × 1300 mm (W×D×H)",
        weight: "185 kg",
        specs: [
          { label: "Power Consumption", value: "780", unit: "W" },
          { label: "Pulldown Time to -80°C", value: "≤6.0", unit: "hours" },
        ],
      },
      {
        id: "mult-03",
        model: "MULT-500",
        capacity: "500 Liters",
        dimensions: "950 × 860 × 1500 mm (W×D×H)",
        weight: "240 kg",
        specs: [
          { label: "Power Consumption", value: "1050", unit: "W" },
          { label: "Pulldown Time to -80°C", value: "≤7.5", unit: "hours" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO"],
    downloads: [
      {
        title: "ULT Deep Freezer Product Brochure",
        type: "brochure",
        url: "/downloads/ult-brochure.pdf",
        fileSize: "2.6 MB",
      },
      {
        title: "Technical Datasheet — MULT Series",
        type: "datasheet",
        url: "/downloads/ult-datasheet.pdf",
        fileSize: "1.3 MB",
      },
      {
        title: "Installation & Operation Manual",
        type: "manual",
        url: "/downloads/ult-manual.pdf",
        fileSize: "6.1 MB",
      },
      {
        title: "CE Certificate — MULT Series",
        type: "certificate",
        url: "/downloads/ult-ce-certificate.pdf",
        fileSize: "0.4 MB",
      },
    ],
    faqs: [
      {
        question: "What biological materials require -80°C storage?",
        answer:
          "Ultra-low temperature storage at -80°C is required for mRNA vaccines (e.g., Pfizer-BioNTech COVID-19), certain enzyme preparations, long-term archival of bacterial and viral cultures, clinical biobank specimens, cord blood, and some recombinant proteins. Fresh Frozen Plasma can be stored at -30°C or lower, but research-grade biologicals typically require -80°C for multi-year stability.",
      },
      {
        question: "How long will the freezer maintain -80°C during a power failure?",
        answer:
          "With doors closed and a full load, MarKEN MULT Series units maintain -70°C or below for 60–90 minutes after complete power loss. For critical applications, connection to a UPS or standby generator is strongly recommended. The battery-backed alarm will alert staff for up to 72 hours.",
      },
      {
        question: "What ambient temperature is required for proper operation?",
        answer:
          "MULT Series ULT freezers are rated for operation in ambient temperatures of +10°C to +32°C. Installation in an air-conditioned room (≤25°C) significantly improves efficiency, reduces compressor wear, and maximises the hold-over period during power failure. Avoid placement in direct sunlight or near heat sources.",
      },
      {
        question: "Can the freezer be connected to a central monitoring system?",
        answer:
          "Yes. All MULT Series units include an RS-485 port and 4–20 mA analogue output for integration with hospital SCADA, BMS, or MarKEN's MRTM Remote Temperature Monitoring platform. This provides 24/7 cloud-based temperature logging, alarm forwarding to mobile phones, and regulatory compliance reports.",
      },
      {
        question: "Is an annual maintenance contract available?",
        answer:
          "Yes. MarKEN offers Comprehensive Annual Maintenance Contracts (AMC) covering preventive maintenance, filter cleaning, refrigerant checks, seal inspection, and emergency callout response. AMC customers receive priority service response across our 500+ service centre network.",
      },
    ],
    relatedProducts: ["deep-freezer-40", "walk-in-freezer", "remote-temperature-monitoring"],
    seoTitle: "ULT Deep Freezer -86°C | Plasma & Biological Storage | MarKEN",
    seoDescription:
      "MarKEN MULT Series ULT Deep Freezers: -40°C to -86°C, 200–500L capacity, two-stage cascade refrigeration. For plasma, biologicals, mRNA vaccines. CE, ISO 13485. Made in India.",
    seoKeywords: [
      "ULT freezer india",
      "-86°C deep freezer",
      "ultra low temperature freezer",
      "plasma storage freezer",
      "biological sample freezer india",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 4. Deep Freezer -40°C
  // ─────────────────────────────────────────────────────────────────
  {
    id: "df40-01",
    slug: "deep-freezer-40",
    name: "Deep Freezer -40°C",
    shortName: "MDF-40 Series",
    category: "medical-cold-chain",
    subcategory: "Freezers",
    tagline: "Dedicated FFP Storage at -40°C — Blood Bank Grade Performance",
    description:
      "MarKEN MDF-40 Series Deep Freezers maintain -20°C to -40°C storage temperatures specifically optimised for Fresh Frozen Plasma (FFP), cryoprecipitate, and other blood fractions requiring deep-freeze storage. Featuring a single-stage high-efficiency compressor, heavy-duty PUF insulation, and a microprocessor controller with NABL-traceable temperature logging, these freezers are designed for continuous, unattended operation in blood banks, transfusion centres, and pharmaceutical manufacturing.",
    heroImage: "/images/deep-freezer-40-hero.jpg",
    images: [
      "/images/deep-freezer-40-front.jpg",
      "/images/deep-freezer-40-open.jpg",
      "/images/deep-freezer-40-baskets.jpg",
      "/images/deep-freezer-40-panel.jpg",
    ],
    features: [
      {
        icon: "Snowflake",
        title: "-40°C Reliable Performance",
        description:
          "High-efficiency single-stage compressor with optimised refrigerant charge maintains -40°C set-point at ambient temperatures up to +43°C — critical for Indian climate conditions.",
      },
      {
        icon: "Shield",
        title: "FFP Storage Compliance",
        description:
          "Meets CDSCO, blood bank licensing authority, and WHO blood cold chain requirements for FFP storage at ≤-30°C. Validated temperature mapping report included with each unit.",
      },
      {
        icon: "Thermometer",
        title: "Microprocessor PID Controller",
        description:
          "Dual-sensor temperature measurement with averaged display. Independent over-temperature cut-out circuit provides a second layer of protection against product loss.",
      },
      {
        icon: "Box",
        title: "Organised Basket Storage",
        description:
          "Removable wire baskets with colour-coded dividers allow organised storage of FFP bags by blood group, donation date, and unit number for FIFO compliance.",
      },
      {
        icon: "BellRing",
        title: "Audible & Visual Alarms",
        description:
          "Programmable high and low temperature alarms with adjustable delay. Door-open alarm with 30-second delay to allow routine access without triggering false alerts.",
      },
      {
        icon: "Activity",
        title: "Data Logging & Compliance",
        description:
          "Built-in temperature data logger records at 5-minute intervals. USB export for regulatory documentation. Optional printer port for hard-copy records.",
      },
    ],
    specifications: [
      { label: "Temperature Range", value: "-20°C to -40°C" },
      { label: "Set-Point Accuracy", value: "±1°C" },
      { label: "Temperature Uniformity", value: "±2°C" },
      { label: "Refrigeration System", value: "Single Stage High-Efficiency Compressor" },
      { label: "Refrigerant", value: "R404A (CFC-Free)" },
      { label: "Insulation", value: "150mm CFC-Free PUF" },
      { label: "Interior Material", value: "Stainless Steel 304 Grade" },
      { label: "Exterior Material", value: "Powder Coated MS" },
      { label: "Door Type", value: "Solid Insulated with Magnetic Gasket" },
      { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
      { label: "Ambient Operating Range", value: "+10°C to +43°C" },
      { label: "Certifications", value: "CE, ISO 13485, CDSCO" },
    ],
    variants: [
      {
        id: "mdf40-01",
        model: "MDF-40/150",
        capacity: "150 Liters",
        dimensions: "620 × 670 × 900 mm (W×D×H)",
        weight: "90 kg",
        specs: [
          { label: "FFP Bag Storage", value: "100", unit: "units (200 mL)" },
          { label: "Power Consumption", value: "430", unit: "W" },
        ],
      },
      {
        id: "mdf40-02",
        model: "MDF-40/300",
        capacity: "300 Liters",
        dimensions: "750 × 750 × 1050 mm (W×D×H)",
        weight: "140 kg",
        specs: [
          { label: "FFP Bag Storage", value: "200", unit: "units (200 mL)" },
          { label: "Power Consumption", value: "620", unit: "W" },
        ],
      },
      {
        id: "mdf40-03",
        model: "MDF-40/500",
        capacity: "500 Liters",
        dimensions: "850 × 800 × 1200 mm (W×D×H)",
        weight: "185 kg",
        specs: [
          { label: "FFP Bag Storage", value: "350", unit: "units (200 mL)" },
          { label: "Power Consumption", value: "850", unit: "W" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO", "WHO Blood Cold Chain"],
    downloads: [
      {
        title: "Deep Freezer -40°C Product Brochure",
        type: "brochure",
        url: "/downloads/df40-brochure.pdf",
        fileSize: "2.2 MB",
      },
      {
        title: "Technical Datasheet — MDF-40 Series",
        type: "datasheet",
        url: "/downloads/df40-datasheet.pdf",
        fileSize: "1.0 MB",
      },
      {
        title: "Installation & Operation Manual",
        type: "manual",
        url: "/downloads/df40-manual.pdf",
        fileSize: "5.4 MB",
      },
      {
        title: "Temperature Mapping Validation Report",
        type: "certificate",
        url: "/downloads/df40-validation.pdf",
        fileSize: "0.8 MB",
      },
    ],
    faqs: [
      {
        question: "What is the difference between -30°C and -40°C storage for FFP?",
        answer:
          "WHO and NABH guidelines specify that Fresh Frozen Plasma should be stored at -30°C or below for up to 24 months. Storage at -40°C provides a larger safety margin to account for temperature excursions during door opening in busy blood banks, ensuring product quality is not compromised even under routine access conditions.",
      },
      {
        question: "How many FFP bags can be stored in each model?",
        answer:
          "The MDF-40/150 accommodates approximately 100 × 200 mL FFP bags, the MDF-40/300 stores approximately 200 bags, and the MDF-40/500 stores approximately 350 bags. Actual capacity depends on bag size (150 mL, 200 mL, 250 mL) and packing arrangement. Wire basket dividers assist with organised storage.",
      },
      {
        question: "Is temperature mapping validation included?",
        answer:
          "Yes. A factory temperature mapping validation report is provided with each unit, demonstrating ±2°C uniformity across the chamber at the -40°C set-point. Site validation can be conducted by MarKEN's NABL-accredited team upon request.",
      },
      {
        question: "Can the freezer operate in areas with frequent power fluctuations?",
        answer:
          "All MDF-40 Series units are designed for 220V ± 10% operation. For areas with severe voltage fluctuations, MarKEN recommends the optional servo voltage stabiliser, which maintains compressor input voltage within safe limits and extends equipment life.",
      },
    ],
    relatedProducts: ["ult-deep-freezer", "deep-freezer-25", "remote-temperature-monitoring"],
    seoTitle: "Deep Freezer -40°C | FFP Storage | Blood Bank Grade | MarKEN",
    seoDescription:
      "MarKEN MDF-40 Series Deep Freezers: -20°C to -40°C, 150–500L capacity for Fresh Frozen Plasma and blood fractions. CE, ISO 13485, CDSCO. Ideal for blood banks across India.",
    seoKeywords: [
      "deep freezer -40°C india",
      "FFP storage freezer",
      "fresh frozen plasma freezer",
      "blood bank deep freezer",
      "medical freezer india",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 5. Deep Freezer -25°C
  // ─────────────────────────────────────────────────────────────────
  {
    id: "df25-01",
    slug: "deep-freezer-25",
    name: "Deep Freezer -25°C",
    shortName: "MDF-25 Series",
    category: "medical-cold-chain",
    subcategory: "Freezers",
    tagline: "Reliable General-Purpose Medical Frozen Storage at -25°C",
    description:
      "MarKEN MDF-25 Series Deep Freezers provide dependable -15°C to -25°C frozen storage for hospital pharmacies, laboratories, and diagnostic centres storing reagents, test kits, surgical materials, and general pharmaceutical frozen goods. Compact upright or chest configurations, a microprocessor controller with digital display, and energy-efficient R600a or R134a refrigerant make these units suitable for continuous operation with minimal running costs.",
    heroImage: "/images/deep-freezer-25-hero.jpg",
    images: [
      "/images/deep-freezer-25-front.jpg",
      "/images/deep-freezer-25-open.jpg",
      "/images/deep-freezer-25-interior.jpg",
      "/images/deep-freezer-25-control.jpg",
    ],
    features: [
      {
        icon: "Snowflake",
        title: "-25°C Stable Performance",
        description:
          "Optimised refrigerant charge and compressor sizing maintain -25°C consistently in ambient temperatures up to +43°C. Suitable for Indian climate conditions without derating.",
      },
      {
        icon: "Thermometer",
        title: "Digital Microprocessor Control",
        description:
          "Easy-set digital temperature controller with LED display shows actual and set temperatures. Password-protected settings prevent unauthorised changes in shared laboratory environments.",
      },
      {
        icon: "Package",
        title: "Flexible Storage Configuration",
        description:
          "Removable wire shelves and adjustable dividers allow storage of varied container sizes including reagent kits, vials, test kit boxes, and surgical material pouches.",
      },
      {
        icon: "BellRing",
        title: "Temperature Alarm System",
        description:
          "Programmable high and low temperature alarms with audible buzzer and visual LED indicator. Door-open reminder alarm with 60-second delay for routine access.",
      },
      {
        icon: "Gauge",
        title: "Energy Efficient Design",
        description:
          "Thick PUF insulation and CFC-free refrigerant optimise energy consumption. Automatic fan motor cut-off during door opening minimises frost build-up and reduces energy waste.",
      },
      {
        icon: "Lock",
        title: "Lockable Security Door",
        description:
          "Cylinder key lock on solid insulated door provides security for controlled pharmaceutical and reagent storage. Self-closing spring hinge ensures door is not accidentally left open.",
      },
    ],
    specifications: [
      { label: "Temperature Range", value: "-15°C to -25°C" },
      { label: "Set-Point Accuracy", value: "±1°C" },
      { label: "Temperature Uniformity", value: "±2°C" },
      { label: "Refrigeration System", value: "Single Stage Hermetic Compressor" },
      { label: "Refrigerant", value: "R134a (CFC-Free)" },
      { label: "Insulation", value: "100mm CFC-Free PUF" },
      { label: "Interior Material", value: "ABS Plastic / Stainless Steel 304 (Premium)" },
      { label: "Exterior Material", value: "Powder Coated MS" },
      { label: "Door Type", value: "Solid Insulated with Magnetic Gasket & Lock" },
      { label: "Shelves", value: "3–4 Wire Shelves (Adjustable)" },
      { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
      { label: "Ambient Operating Range", value: "+10°C to +43°C" },
    ],
    variants: [
      {
        id: "mdf25-01",
        model: "MDF-25/100",
        capacity: "100 Liters",
        dimensions: "540 × 580 × 860 mm (W×D×H)",
        weight: "52 kg",
        specs: [
          { label: "Power Consumption", value: "180", unit: "W" },
          { label: "Shelves", value: "3", unit: "nos" },
        ],
      },
      {
        id: "mdf25-02",
        model: "MDF-25/200",
        capacity: "200 Liters",
        dimensions: "620 × 620 × 1050 mm (W×D×H)",
        weight: "75 kg",
        specs: [
          { label: "Power Consumption", value: "260", unit: "W" },
          { label: "Shelves", value: "4", unit: "nos" },
        ],
      },
      {
        id: "mdf25-03",
        model: "MDF-25/300",
        capacity: "300 Liters",
        dimensions: "700 × 680 × 1250 mm (W×D×H)",
        weight: "105 kg",
        specs: [
          { label: "Power Consumption", value: "380", unit: "W" },
          { label: "Shelves", value: "4", unit: "nos" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 9001", "ISO 13485", "CDSCO"],
    downloads: [
      {
        title: "Deep Freezer -25°C Product Brochure",
        type: "brochure",
        url: "/downloads/df25-brochure.pdf",
        fileSize: "1.8 MB",
      },
      {
        title: "Technical Datasheet — MDF-25 Series",
        type: "datasheet",
        url: "/downloads/df25-datasheet.pdf",
        fileSize: "0.9 MB",
      },
      {
        title: "Installation & Operation Manual",
        type: "manual",
        url: "/downloads/df25-manual.pdf",
        fileSize: "4.2 MB",
      },
      {
        title: "CE Certificate — MDF-25 Series",
        type: "certificate",
        url: "/downloads/df25-ce-certificate.pdf",
        fileSize: "0.3 MB",
      },
    ],
    faqs: [
      {
        question: "What products are typically stored in a -25°C Deep Freezer?",
        answer:
          "Common applications include storage of diagnostic reagent kits, molecular biology reagents, enzyme preparations, certain vaccines (e.g., varicella, yellow fever), surgical sutures requiring frozen storage, pharmacopoeial reference standards, and hospital pharmacy frozen drugs. Unlike -40°C freezers, these are general-purpose units not intended for FFP long-term storage.",
      },
      {
        question: "Does the unit require manual defrosting?",
        answer:
          "The MDF-25 Series uses an automatic fan-assisted air cooling system with a timed defrost cycle. Defrost occurs automatically during low-demand periods and is designed to minimise temperature excursion. Manual defrost mode is available for thorough cleaning during servicing.",
      },
      {
        question: "What is the power consumption and running cost?",
        answer:
          "The MDF-25/200 (most popular model) consumes approximately 260W during active cooling, with an average running consumption of approximately 3–4 kWh per day depending on ambient temperature, door opening frequency, and load. This makes running costs very economical for a 200L capacity.",
      },
      {
        question: "Is the unit suitable for installation in a hospital pharmacy?",
        answer:
          "Yes. All MDF-25 Series units are CE-marked and CDSCO-compliant, making them suitable for use in NABH-accredited hospital pharmacies. The lockable door, password-protected settings, and temperature data logging support pharmaceutical storage SOPs and audit requirements.",
      },
    ],
    relatedProducts: ["deep-freezer-40", "laboratory-refrigerator", "remote-temperature-monitoring"],
    seoTitle: "Deep Freezer -25°C | General Medical Frozen Storage | MarKEN",
    seoDescription:
      "MarKEN MDF-25 Series Deep Freezers: -15°C to -25°C, 100–300L for hospital pharmacies, labs, reagent storage. CE, ISO 13485, CDSCO certified. Energy efficient. Made in India.",
    seoKeywords: [
      "deep freezer -25°C india",
      "medical freezer hospital pharmacy",
      "reagent storage freezer",
      "laboratory deep freezer",
      "pharmaceutical freezer india",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 6. Ice Lined Refrigerator (Horizontal)
  // ─────────────────────────────────────────────────────────────────
  {
    id: "ilrh-01",
    slug: "ice-lined-refrigerator-horizontal",
    name: "Ice Lined Refrigerator (Horizontal)",
    shortName: "MILRH Series",
    category: "medical-cold-chain",
    subcategory: "Refrigeration",
    tagline: "WHO PQS Prequalified Horizontal Vaccine Refrigerator for Field & District Stores",
    description:
      "MarKEN MILRH Series Horizontal Ice Lined Refrigerators are WHO PQS prequalified top-opening vaccine storage units designed for National Immunisation Programme (NIP) district and CHC-level cold chain stores. The ice-lined inner walls store 20–25 kg of eutectic freeze packs which maintain +2°C to +8°C for 20+ hours during complete power failure — a critical requirement for unreliable-grid environments across India. Available in 140L to 300L gross capacity.",
    heroImage: "/images/ilr-horizontal-hero.jpg",
    images: [
      "/images/ilr-horizontal-top.jpg",
      "/images/ilr-horizontal-open.jpg",
      "/images/ilr-horizontal-ice-lining.jpg",
      "/images/ilr-horizontal-basket.jpg",
      "/images/ilr-horizontal-label.jpg",
    ],
    features: [
      {
        icon: "Shield",
        title: "WHO PQS Prequalified",
        description:
          "Certified under WHO PQS (Performance, Quality and Safety) specification E003/RF02, meeting all requirements for vaccine storage in the Expanded Programme on Immunisation (EPI).",
      },
      {
        icon: "Snowflake",
        title: "20+ Hour Holdover Performance",
        description:
          "Ice-lined inner walls containing pre-frozen eutectic packs maintain +2°C to +8°C for more than 20 hours at +43°C ambient after complete power loss — critical for grid-unreliable areas.",
      },
      {
        icon: "Thermometer",
        title: "+2°C to +8°C Vaccine Storage",
        description:
          "Precision thermostat maintains the WHO-mandated +2°C to +8°C range. Cold air trap top-opening lid design minimises cold air loss during access, preserving holdover capacity.",
      },
      {
        icon: "BellRing",
        title: "Continuous Temperature Alarm",
        description:
          "Visual and audible alarm for temperature excursion above +8°C. Battery-backed electronic alarm remains active for 48 hours without mains power.",
      },
      {
        icon: "Box",
        title: "Top-Opening Cold Trap Design",
        description:
          "Top-opening lid uses gravity cold-air trap principle to retain cold air when opened. This design dramatically reduces temperature excursion per access compared to front-opening units.",
      },
      {
        icon: "Battery",
        title: "Power Failure Resilience",
        description:
          "Designed specifically for areas with 8–12 hours of daily power availability. Automatic freeze-pack recharging during available power periods maintains maximum holdover capacity.",
      },
    ],
    specifications: [
      { label: "Temperature Range", value: "+2°C to +8°C" },
      { label: "WHO PQS Reference", value: "E003/RF02" },
      { label: "Holdover at +43°C Ambient", value: "≥20 hours (fully charged)" },
      { label: "Cooling System", value: "Static Evaporator with Ice-Lined Walls" },
      { label: "Refrigerant", value: "R600a (CFC-Free, Low GWP)" },
      { label: "Insulation", value: "60mm CFC-Free PUF, Vacuum Lid" },
      { label: "Interior Material", value: "Food-Grade HDPE Liner" },
      { label: "Ice Pack Capacity", value: "20–25 kg eutectic freeze packs" },
      { label: "Opening Type", value: "Top-Opening with Lift-Off Lid" },
      { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
      { label: "Ambient Operating Range", value: "+10°C to +43°C" },
      { label: "Certifications", value: "WHO PQS E003/RF02, CE, CDSCO" },
    ],
    variants: [
      {
        id: "milrh-01",
        model: "MILRH-140",
        capacity: "140 Liters (gross) / 85 Liters (net vaccine)",
        dimensions: "860 × 620 × 870 mm (L×W×H)",
        weight: "62 kg",
        specs: [
          { label: "Power Consumption", value: "90", unit: "W" },
          { label: "Ice Pack Capacity", value: "20", unit: "kg" },
        ],
      },
      {
        id: "milrh-02",
        model: "MILRH-210",
        capacity: "210 Liters (gross) / 130 Liters (net vaccine)",
        dimensions: "1040 × 680 × 870 mm (L×W×H)",
        weight: "82 kg",
        specs: [
          { label: "Power Consumption", value: "120", unit: "W" },
          { label: "Ice Pack Capacity", value: "22", unit: "kg" },
        ],
      },
      {
        id: "milrh-03",
        model: "MILRH-300",
        capacity: "300 Liters (gross) / 185 Liters (net vaccine)",
        dimensions: "1250 × 700 × 870 mm (L×W×H)",
        weight: "105 kg",
        specs: [
          { label: "Power Consumption", value: "150", unit: "W" },
          { label: "Ice Pack Capacity", value: "25", unit: "kg" },
        ],
      },
    ],
    certifications: ["WHO PQS E003/RF02", "CE Marked", "ISO 9001", "CDSCO", "UNICEF Approved"],
    downloads: [
      {
        title: "ILR Horizontal Product Brochure",
        type: "brochure",
        url: "/downloads/ilrh-brochure.pdf",
        fileSize: "2.1 MB",
      },
      {
        title: "Technical Datasheet — MILRH Series",
        type: "datasheet",
        url: "/downloads/ilrh-datasheet.pdf",
        fileSize: "1.1 MB",
      },
      {
        title: "Operation & Maintenance Manual",
        type: "manual",
        url: "/downloads/ilrh-manual.pdf",
        fileSize: "4.8 MB",
      },
      {
        title: "WHO PQS Certificate — E003/RF02",
        type: "certificate",
        url: "/downloads/ilrh-who-pqs.pdf",
        fileSize: "0.5 MB",
      },
    ],
    faqs: [
      {
        question: "Why is the ILR horizontal design preferred for immunisation cold stores?",
        answer:
          "The horizontal top-opening design uses the physical principle of cold-air trapping: cold air, being denser than warm air, falls to the bottom of the cabinet and cannot escape when the lid is lifted. This makes top-opening ILRs significantly more energy-efficient and better at maintaining temperature during access and power failure compared to front-opening designs — a critical advantage in India's warm climate and grid-unreliable areas.",
      },
      {
        question: "How does the ice lining work?",
        answer:
          "The inner walls of the cabinet contain a network of channels filled with eutectic solution (freeze packs). During normal operation, the compressor freezes this solution, storing latent cold energy. During a power failure, this frozen mass slowly absorbs heat from the vaccine storage space, maintaining +2°C to +8°C for 20+ hours without any electricity.",
      },
      {
        question: "Is this product approved for use under India's Universal Immunisation Programme?",
        answer:
          "Yes. MarKEN MILRH Series ILRs carry WHO PQS prequalification (E003/RF02) and are listed on the UNICEF Supply Division approved equipment list. They are procurement-eligible under GAVI, UNICEF, and GoI NIP/UIP tenders.",
      },
      {
        question: "What is the recommended installation environment?",
        answer:
          "Install in a clean, ventilated room with at least 20cm clearance on all sides and 30cm clearance at the rear for condenser airflow. Avoid direct sunlight. The unit must be level (within 1° of horizontal) for proper compressor operation and effective cold-air trapping.",
      },
      {
        question: "Can this unit store freeze-dried (lyophilised) vaccines?",
        answer:
          "Yes, but caution is required. Freeze-dried vaccines (e.g., measles, BCG) are very sensitive to freezing when reconstituted and to cold shock even in their dry state. They should be stored in the upper portion of the basket away from the ice-lined walls. The +2°C to +8°C range is appropriate for all standard EPI vaccines.",
      },
    ],
    relatedProducts: ["ice-lined-refrigerator-vertical", "solar-direct-drive-refrigerator", "remote-temperature-monitoring"],
    seoTitle: "Ice Lined Refrigerator Horizontal | WHO PQS | Vaccine Storage | MarKEN",
    seoDescription:
      "MarKEN MILRH Series horizontal ILR: WHO PQS E003/RF02 prequalified, 140–300L, 20+ hour holdover at +43°C. For NIP vaccine stores. CE, UNICEF approved. Made in India, Nashik.",
    seoKeywords: [
      "ice lined refrigerator india",
      "WHO PQS vaccine refrigerator",
      "horizontal ILR",
      "vaccine cold chain equipment",
      "NIP cold chain refrigerator",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 7. Ice Lined Refrigerator (Vertical)
  // ─────────────────────────────────────────────────────────────────
  {
    id: "ilrv-01",
    slug: "ice-lined-refrigerator-vertical",
    name: "Ice Lined Refrigerator (Vertical)",
    shortName: "MILRV Series",
    category: "medical-cold-chain",
    subcategory: "Refrigeration",
    tagline: "WHO PQS Front-Opening Vertical ILR for Urban Health Centres & Hospitals",
    description:
      "MarKEN MILRV Series Vertical Ice Lined Refrigerators offer WHO PQS prequalified +2°C to +8°C vaccine storage with the convenience of front-opening access in a compact upright footprint. The ice-lined inner walls provide 10–15 hours of holdover at +43°C ambient. Ideal for urban PHCs, CHCs, district hospitals, and private vaccination centres where space is limited and front-access is operationally preferable.",
    heroImage: "/images/ilr-vertical-hero.jpg",
    images: [
      "/images/ilr-vertical-front.jpg",
      "/images/ilr-vertical-open.jpg",
      "/images/ilr-vertical-interior.jpg",
      "/images/ilr-vertical-control.jpg",
    ],
    features: [
      {
        icon: "Shield",
        title: "WHO PQS Prequalified",
        description:
          "Certified under WHO PQS specification E003/RF02 for front-opening refrigerators, meeting all EPI requirements for vaccine storage equipment used in national immunisation programmes.",
      },
      {
        icon: "Snowflake",
        title: "10–15 Hour Holdover",
        description:
          "Ice-lined side walls maintain +2°C to +8°C for 10–15 hours at +43°C ambient after power loss. Heated door glass prevents condensation while maintaining cold-air retention when closed.",
      },
      {
        icon: "Thermometer",
        title: "Precision +2°C to +8°C Control",
        description:
          "Microprocessor thermostat with digital temperature display. Forced-air circulation ensures uniform temperature across all vaccine trays, eliminating freeze risk zones near evaporator.",
      },
      {
        icon: "Wind",
        title: "Fan-Assisted Air Circulation",
        description:
          "Integrated fan coil unit distributes cold air evenly across all shelf levels, maintaining ±1°C uniformity throughout the storage volume — essential for preventing cold shock or warm-spot damage to vaccines.",
      },
      {
        icon: "BellRing",
        title: "Electronic Alarm System",
        description:
          "Visual and audible alarms for high temperature (>+8°C) and low temperature (<+2°C). Battery-backed alarm with 48-hour autonomy. External alarm relay for nurse station integration.",
      },
      {
        icon: "Activity",
        title: "Electronic Temperature Logger",
        description:
          "Optional integrated 30-day electronic logger with USB export provides an audit trail for regulatory compliance, NABH accreditation, and Government cold chain review visits.",
      },
    ],
    specifications: [
      { label: "Temperature Range", value: "+2°C to +8°C" },
      { label: "Temperature Uniformity", value: "±1°C" },
      { label: "WHO PQS Reference", value: "E003/RF02 (Front Opening)" },
      { label: "Holdover at +43°C Ambient", value: "≥10 hours" },
      { label: "Cooling System", value: "Forced Air with Ice-Lined Walls" },
      { label: "Refrigerant", value: "R134a (CFC-Free)" },
      { label: "Insulation", value: "80mm CFC-Free PUF" },
      { label: "Interior Material", value: "Stainless Steel 304 Grade" },
      { label: "Door Type", value: "Solid / Optional Glass (Double Heated Pane)" },
      { label: "Shelves", value: "4–5 Adjustable Wire / SS Perforated" },
      { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
      { label: "Ambient Operating Range", value: "+10°C to +43°C" },
    ],
    variants: [
      {
        id: "milrv-01",
        model: "MILRV-180",
        capacity: "180 Liters",
        dimensions: "600 × 620 × 1350 mm (W×D×H)",
        weight: "78 kg",
        specs: [
          { label: "Power Consumption", value: "160", unit: "W" },
          { label: "Vaccine Vial Capacity", value: "3600", unit: "doses (DPT 10-dose)" },
        ],
      },
      {
        id: "milrv-02",
        model: "MILRV-280",
        capacity: "280 Liters",
        dimensions: "650 × 680 × 1550 mm (W×D×H)",
        weight: "105 kg",
        specs: [
          { label: "Power Consumption", value: "210", unit: "W" },
          { label: "Vaccine Vial Capacity", value: "5600", unit: "doses (DPT 10-dose)" },
        ],
      },
      {
        id: "milrv-03",
        model: "MILRV-400",
        capacity: "400 Liters",
        dimensions: "720 × 720 × 1850 mm (W×D×H)",
        weight: "145 kg",
        specs: [
          { label: "Power Consumption", value: "280", unit: "W" },
          { label: "Vaccine Vial Capacity", value: "8000", unit: "doses (DPT 10-dose)" },
        ],
      },
    ],
    certifications: ["WHO PQS E003/RF02", "CE Marked", "ISO 9001", "CDSCO", "UNICEF Approved"],
    downloads: [
      {
        title: "ILR Vertical Product Brochure",
        type: "brochure",
        url: "/downloads/ilrv-brochure.pdf",
        fileSize: "2.0 MB",
      },
      {
        title: "Technical Datasheet — MILRV Series",
        type: "datasheet",
        url: "/downloads/ilrv-datasheet.pdf",
        fileSize: "1.0 MB",
      },
      {
        title: "Operation & Maintenance Manual",
        type: "manual",
        url: "/downloads/ilrv-manual.pdf",
        fileSize: "4.5 MB",
      },
      {
        title: "WHO PQS Certificate — E003/RF02",
        type: "certificate",
        url: "/downloads/ilrv-who-pqs.pdf",
        fileSize: "0.5 MB",
      },
    ],
    faqs: [
      {
        question: "When is the vertical ILR preferred over the horizontal model?",
        answer:
          "Vertical ILRs are preferred in urban health facilities where floor space is limited and front-access is more operationally convenient for staff who need to access vaccines frequently throughout the day. Horizontal models offer superior holdover performance (20+ hours vs 10–15 hours) and are better suited to facilities with extended power outages.",
      },
      {
        question: "How does the ice lining prevent vaccine freezing?",
        answer:
          "Unlike simple refrigerators, the ILR does not have the evaporator directly exposed to the storage space. The evaporator freezes the eutectic lining, which in turn gently cools the interior air. This indirect cooling prevents any part of the vaccine storage zone from falling below +2°C, protecting freeze-sensitive vaccines (OPV, DPT, Hep B, etc.) from cold shock damage.",
      },
      {
        question: "Is the unit suitable for the Intensified Mission Indradhanush programme?",
        answer:
          "Yes. MarKEN MILRV Series vertical ILRs meet all requirements of GoI's Universal Immunisation Programme and Intensified Mission Indradhanush for vaccine storage at the health facility level. The WHO PQS certification and UNICEF approval make them eligible for government procurement.",
      },
      {
        question: "Can glass door and solid door versions be ordered?",
        answer:
          "Yes. Both solid door and glass double-pane heated door versions are available. Glass door units facilitate visual stock monitoring without opening the door, helping to maintain temperature discipline. The heated glass prevents condensation that would obstruct visibility.",
      },
    ],
    relatedProducts: ["ice-lined-refrigerator-horizontal", "solar-direct-drive-refrigerator", "remote-temperature-monitoring"],
    seoTitle: "Ice Lined Refrigerator Vertical | WHO PQS | Vaccine Storage | MarKEN",
    seoDescription:
      "MarKEN MILRV Series vertical ILR: WHO PQS prequalified front-opening vaccine refrigerator, 180–400L, +2°C to +8°C, 10+ hour holdover. For PHCs, hospitals. CE, UNICEF approved.",
    seoKeywords: [
      "vertical ice lined refrigerator",
      "WHO PQS vaccine refrigerator india",
      "front opening ILR",
      "PHC vaccine refrigerator",
      "immunisation cold chain equipment",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 8. Laboratory Refrigerator
  // ─────────────────────────────────────────────────────────────────
  {
    id: "lr-01",
    slug: "laboratory-refrigerator",
    name: "Laboratory Refrigerator",
    shortName: "MLR Series",
    category: "medical-cold-chain",
    subcategory: "Refrigeration",
    tagline: "Precision +2°C to +8°C Refrigerator for Labs, Reagents & Clinical Samples",
    description:
      "MarKEN MLR Series Laboratory Refrigerators provide precision +2°C to +8°C controlled storage for clinical laboratories, hospital pharmacies, research institutions, and diagnostic centres. Available with solid or glass doors in 150L to 500L capacities, these units feature microprocessor PID temperature control, forced-air circulation, SS304 interiors, and optional 21 CFR Part 11 compliant data logging. Designed for uninterrupted operation in 24/7 laboratory environments.",
    heroImage: "/images/laboratory-refrigerator-hero.jpg",
    images: [
      "/images/laboratory-refrigerator-front.jpg",
      "/images/laboratory-refrigerator-glass-door.jpg",
      "/images/laboratory-refrigerator-interior.jpg",
      "/images/laboratory-refrigerator-control-panel.jpg",
      "/images/laboratory-refrigerator-shelves.jpg",
    ],
    features: [
      {
        icon: "Thermometer",
        title: "Precision PID Temperature Control",
        description:
          "Microprocessor PID controller maintains +2°C to +8°C with ±0.5°C accuracy. Dual-probe measurement with NABL-traceable calibration certificate supplied with each unit.",
      },
      {
        icon: "Wind",
        title: "Fan-Assisted Uniform Cooling",
        description:
          "Forced-air circulation system with rear plenum distribution provides ±0.5°C temperature uniformity across all shelf levels, ensuring consistent conditions for sensitive reagents and samples.",
      },
      {
        icon: "Activity",
        title: "GxP-Ready Data Logging",
        description:
          "Optional 21 CFR Part 11 / EU GMP Annex 11 compliant temperature data logger with continuous recording, audit trail, and electronic signature support for pharmaceutical laboratories.",
      },
      {
        icon: "Shield",
        title: "Compliant for Regulated Labs",
        description:
          "ISO 13485 and CE-marked construction with NABL calibration certificate meets requirements for NABH-accredited hospitals, NABL laboratories, and pharmaceutical GMP quality systems.",
      },
      {
        icon: "BellRing",
        title: "Comprehensive Alarm System",
        description:
          "High/low temperature alarms with adjustable setpoints and time delay. Door-open alarm, power failure alarm with battery backup, sensor fault alarm, and remote relay output for SCADA/BMS.",
      },
      {
        icon: "Lock",
        title: "Secure & Configurable Storage",
        description:
          "Key-lockable door with optional access control module. Adjustable SS304 perforated shelves accommodate varied container sizes. Optional drawer inserts for vial storage.",
      },
    ],
    specifications: [
      { label: "Temperature Range", value: "+2°C to +8°C" },
      { label: "Temperature Uniformity", value: "±0.5°C" },
      { label: "Controller Type", value: "Microprocessor PID with Dual Probe" },
      { label: "Refrigeration System", value: "Fan-Assisted Forced Air" },
      { label: "Refrigerant", value: "R134a (CFC-Free)" },
      { label: "Insulation", value: "80mm CFC-Free PUF" },
      { label: "Interior Material", value: "Stainless Steel 304 Grade" },
      { label: "Exterior Material", value: "Powder Coated MS" },
      { label: "Door Options", value: "Solid or Double-Pane Heated Glass" },
      { label: "Shelves", value: "SS Perforated, Adjustable (4–6 Levels)" },
      { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
      { label: "Ambient Operating Range", value: "+10°C to +40°C" },
    ],
    variants: [
      {
        id: "mlr-01",
        model: "MLR-150",
        capacity: "150 Liters",
        dimensions: "580 × 600 × 1300 mm (W×D×H)",
        weight: "65 kg",
        specs: [
          { label: "Power Consumption", value: "150", unit: "W" },
          { label: "Shelf Load", value: "30", unit: "kg/shelf" },
        ],
      },
      {
        id: "mlr-02",
        model: "MLR-280",
        capacity: "280 Liters",
        dimensions: "650 × 680 × 1550 mm (W×D×H)",
        weight: "95 kg",
        specs: [
          { label: "Power Consumption", value: "220", unit: "W" },
          { label: "Shelf Load", value: "40", unit: "kg/shelf" },
        ],
      },
      {
        id: "mlr-03",
        model: "MLR-400",
        capacity: "400 Liters",
        dimensions: "720 × 720 × 1800 mm (W×D×H)",
        weight: "130 kg",
        specs: [
          { label: "Power Consumption", value: "290", unit: "W" },
          { label: "Shelf Load", value: "50", unit: "kg/shelf" },
        ],
      },
      {
        id: "mlr-04",
        model: "MLR-500",
        capacity: "500 Liters",
        dimensions: "780 × 780 × 1900 mm (W×D×H)",
        weight: "155 kg",
        specs: [
          { label: "Power Consumption", value: "360", unit: "W" },
          { label: "Shelf Load", value: "50", unit: "kg/shelf" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO", "NABL Calibration"],
    downloads: [
      {
        title: "Laboratory Refrigerator Product Brochure",
        type: "brochure",
        url: "/downloads/lr-brochure.pdf",
        fileSize: "2.3 MB",
      },
      {
        title: "Technical Datasheet — MLR Series",
        type: "datasheet",
        url: "/downloads/lr-datasheet.pdf",
        fileSize: "1.1 MB",
      },
      {
        title: "Installation & Operation Manual",
        type: "manual",
        url: "/downloads/lr-manual.pdf",
        fileSize: "5.2 MB",
      },
      {
        title: "CE & ISO 13485 Certificate",
        type: "certificate",
        url: "/downloads/lr-certificates.pdf",
        fileSize: "0.6 MB",
      },
    ],
    faqs: [
      {
        question: "How is a laboratory refrigerator different from a domestic refrigerator?",
        answer:
          "Laboratory refrigerators are specifically engineered for continuous, unattended operation with precision temperature control (±0.5°C vs ±2–3°C in domestic units), forced-air circulation for uniformity, alarm systems, data logging for regulatory compliance, and construction materials (SS304 interior) suitable for chemical and biological environments. Domestic refrigerators are not suitable for storing pharmaceuticals, reagents, or clinical samples in regulated environments.",
      },
      {
        question: "Can the unit store blood samples and clinical specimens?",
        answer:
          "Yes. The MLR Series is suitable for short-term storage of blood samples, serum, plasma, urine, and other clinical specimens at +2°C to +8°C. For long-term archived sample storage or frozen samples, the MDF-25 or MDF-40 deep freezer series is more appropriate. Cross-contamination risks should be managed by dedicting separate units to clinical samples and reagents where possible.",
      },
      {
        question: "Is a NABL calibration certificate provided?",
        answer:
          "Yes. Each MLR Series unit is supplied with a NABL-traceable calibration certificate for the temperature sensors and controller, valid for 12 months. Subsequent annual calibration services are available from MarKEN's service network.",
      },
      {
        question: "Can the refrigerator be validated for pharmaceutical GMP use?",
        answer:
          "Yes. MarKEN can supply a factory-generated Installation Qualification (IQ) and Operational Qualification (OQ) documentation package for GMP laboratory use. Site Performance Qualification (PQ) temperature mapping can be conducted by our validation team. Optional 21 CFR Part 11 compliant data logging is available for FDA-regulated pharmaceutical environments.",
      },
    ],
    relatedProducts: ["ice-lined-refrigerator-vertical", "deep-freezer-25", "remote-temperature-monitoring"],
    seoTitle: "Laboratory Refrigerator | +2°C to +8°C | GMP Lab & Pharma | MarKEN",
    seoDescription:
      "MarKEN MLR Series laboratory refrigerators: 150–500L, +2°C to +8°C, SS304 interior, PID control, GxP data logging option. For NABL labs, hospitals, pharma GMP. CE, ISO 13485.",
    seoKeywords: [
      "laboratory refrigerator india",
      "medical refrigerator +2°C to +8°C",
      "pharma refrigerator GMP",
      "clinical sample storage refrigerator",
      "reagent storage refrigerator",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 9. Solar Direct Drive Refrigerator
  // ─────────────────────────────────────────────────────────────────
  {
    id: "sdd-01",
    slug: "solar-direct-drive-refrigerator",
    name: "Solar Direct Drive Refrigerator",
    shortName: "MSDD Series",
    category: "medical-cold-chain",
    subcategory: "Refrigeration",
    tagline: "Off-Grid WHO PQS Vaccine Storage — Powered Directly by Solar Panels",
    description:
      "MarKEN MSDD Series Solar Direct Drive Refrigerators operate without batteries, running directly from photovoltaic solar panels and intelligently managing charge storage through internal eutectic ice packs — the thermal battery concept. WHO PQS prequalified for vaccine storage at +2°C to +8°C, these units maintain temperature for 35+ hours on ice-pack holdover, making them the optimal cold chain solution for remote health sub-centres, tribal facilities, and off-grid communities across India and global health programmes.",
    heroImage: "/images/solar-direct-drive-hero.jpg",
    images: [
      "/images/solar-direct-drive-unit.jpg",
      "/images/solar-direct-drive-panels.jpg",
      "/images/solar-direct-drive-open.jpg",
      "/images/solar-direct-drive-installation.jpg",
    ],
    features: [
      {
        icon: "Sun",
        title: "Battery-Free Solar Operation",
        description:
          "DC brushless variable-speed compressor driven directly by solar PV panels through a Maximum Power Point Tracking (MPPT) controller — no lead-acid batteries to maintain, replace, or dispose of.",
      },
      {
        icon: "Snowflake",
        title: "35+ Hour Thermal Holdover",
        description:
          "Eutectic ice-lined walls store solar energy as frozen thermal mass. At +43°C ambient, the fully charged unit maintains +2°C to +8°C for 35+ hours without any power — ideal for cloudy periods and nights.",
      },
      {
        icon: "Shield",
        title: "WHO PQS Prequalified",
        description:
          "Certified under WHO PQS specification E003/RF06 for solar direct drive refrigerators. UNICEF-approved and eligible for GAVI, GoI health mission, and bilateral aid procurement.",
      },
      {
        icon: "Thermometer",
        title: "+2°C to +8°C Precision Control",
        description:
          "Electronic thermostat with dual temperature sensing ensures all vaccine types are stored safely within the WHO-mandated range. Audible and visual alarm for temperature excursion.",
      },
      {
        icon: "Zap",
        title: "MPPT Solar Controller",
        description:
          "Built-in Maximum Power Point Tracking controller optimises energy harvest from the solar panels across all lighting conditions, maximising daily charging performance even on partially cloudy days.",
      },
      {
        icon: "Globe",
        title: "Off-Grid Health Facilities",
        description:
          "Designed specifically for sub-centres, tribal health facilities, and remote outreach sessions with no reliable electricity. 2–4 solar panels (50–80W each) power the unit with zero running fuel cost.",
      },
    ],
    specifications: [
      { label: "Temperature Range", value: "+2°C to +8°C" },
      { label: "WHO PQS Reference", value: "E003/RF06" },
      { label: "Holdover at +43°C Ambient", value: "≥35 hours (fully charged)" },
      { label: "Solar Panel Input", value: "100–200 Wp (Supplied Separately)" },
      { label: "DC Operating Voltage", value: "12V / 24V DC" },
      { label: "Compressor Type", value: "DC Brushless Variable Speed" },
      { label: "Refrigerant", value: "R600a (Low GWP, CFC-Free)" },
      { label: "Insulation", value: "80mm CFC-Free PUF + Vacuum Lid" },
      { label: "Interior Material", value: "Food-Grade HDPE" },
      { label: "Opening Type", value: "Top-Opening (Cold Air Trap Design)" },
      { label: "AC Backup", value: "220V AC Automatic Switchover (Optional)" },
      { label: "Certifications", value: "WHO PQS E003/RF06, CE, CDSCO" },
    ],
    variants: [
      {
        id: "msdd-01",
        model: "MSDD-80",
        capacity: "80 Liters (gross) / 45 Liters (net vaccine)",
        dimensions: "700 × 560 × 820 mm (L×W×H)",
        weight: "40 kg",
        specs: [
          { label: "Solar Panel Requirement", value: "2 × 50W", unit: "panels" },
          { label: "Peak Power Draw", value: "40", unit: "W" },
        ],
      },
      {
        id: "msdd-02",
        model: "MSDD-150",
        capacity: "150 Liters (gross) / 90 Liters (net vaccine)",
        dimensions: "900 × 620 × 870 mm (L×W×H)",
        weight: "62 kg",
        specs: [
          { label: "Solar Panel Requirement", value: "2 × 80W", unit: "panels" },
          { label: "Peak Power Draw", value: "65", unit: "W" },
        ],
      },
      {
        id: "msdd-03",
        model: "MSDD-230",
        capacity: "230 Liters (gross) / 140 Liters (net vaccine)",
        dimensions: "1100 × 680 × 870 mm (L×W×H)",
        weight: "90 kg",
        specs: [
          { label: "Solar Panel Requirement", value: "3 × 80W", unit: "panels" },
          { label: "Peak Power Draw", value: "90", unit: "W" },
        ],
      },
    ],
    certifications: ["WHO PQS E003/RF06", "CE Marked", "ISO 9001", "CDSCO", "UNICEF Approved", "MNRE Approved"],
    downloads: [
      {
        title: "Solar Direct Drive Refrigerator Brochure",
        type: "brochure",
        url: "/downloads/sdd-brochure.pdf",
        fileSize: "2.5 MB",
      },
      {
        title: "Technical Datasheet — MSDD Series",
        type: "datasheet",
        url: "/downloads/sdd-datasheet.pdf",
        fileSize: "1.2 MB",
      },
      {
        title: "Installation & Operation Manual",
        type: "manual",
        url: "/downloads/sdd-manual.pdf",
        fileSize: "5.0 MB",
      },
      {
        title: "WHO PQS Certificate — E003/RF06",
        type: "certificate",
        url: "/downloads/sdd-who-pqs.pdf",
        fileSize: "0.5 MB",
      },
    ],
    faqs: [
      {
        question: "How does a solar direct drive refrigerator differ from a solar battery refrigerator?",
        answer:
          "A solar direct drive (SDD) unit runs the compressor directly from solar panels via an MPPT controller and stores energy as frozen thermal mass (eutectic ice packs) rather than in lead-acid batteries. This eliminates the need for expensive battery replacement (typically every 2–3 years), reduces maintenance requirements, and avoids battery disposal hazards — making SDD the preferred technology for remote areas where technical capacity and battery supply chains are limited.",
      },
      {
        question: "How many solar panels are required and what size are they?",
        answer:
          "The MSDD-150, the most commonly deployed model, requires 2 × 80W (160 Wp total) solar panels. Panels are not included in the standard supply but MarKEN can supply a complete integrated system including mounting frame, DC cabling, and panels. Panel orientation should face south (in India) at an inclination equal to site latitude for maximum annual yield.",
      },
      {
        question: "What happens on multiple consecutive cloudy days?",
        answer:
          "The MSDD units include an automatic AC grid/generator backup input. When available, grid power supplements solar on cloudy days. Even without any power, a fully charged unit will maintain safe vaccine temperature for 35+ hours at +43°C ambient. For sites with more than 3 consecutive cloudy days as a routine occurrence, MarKEN recommends the optional hybrid system with a small buffer battery.",
      },
      {
        question: "Is the unit eligible for MNRE or state government subsidy?",
        answer:
          "Yes. MarKEN MSDD units are approved under Ministry of New & Renewable Energy (MNRE) off-grid solar schemes and are eligible for applicable state and central government subsidies for health sector deployment. MarKEN's government sales team can assist with subsidy documentation and procurement through GeM (Government e-Marketplace).",
      },
    ],
    relatedProducts: ["ice-lined-refrigerator-horizontal", "ice-lined-refrigerator-vertical", "remote-temperature-monitoring"],
    seoTitle: "Solar Direct Drive Refrigerator | WHO PQS Off-Grid Vaccine Storage | MarKEN",
    seoDescription:
      "MarKEN MSDD Solar Direct Drive Refrigerators: WHO PQS E003/RF06, 80–230L, 35+ hour holdover, no batteries. Off-grid vaccine storage for remote health sub-centres. MNRE approved.",
    seoKeywords: [
      "solar vaccine refrigerator india",
      "solar direct drive refrigerator",
      "off-grid cold chain",
      "WHO PQS solar refrigerator",
      "remote health facility cold chain",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 10. Refrigerated Van
  // ─────────────────────────────────────────────────────────────────
  {
    id: "rv-01",
    slug: "refrigerated-van",
    name: "Refrigerated Van",
    shortName: "MRV Series",
    category: "medical-cold-chain",
    subcategory: "Transport",
    tagline: "Temperature-Controlled Medical Cold Chain Transport for Vaccines & Blood Products",
    description:
      "MarKEN MRV Series Refrigerated Vans provide validated +2°C to +8°C cold chain transport for vaccines, blood products, pharmaceutical shipments, and biological materials over long and short distances. Built on light commercial vehicle platforms with custom-designed insulated cargo bodies, vehicle-powered refrigeration units, and continuous electronic temperature monitoring, these vans ensure unbroken cold chain from central store to last-mile delivery. Compliant with WHO vaccine transport and CDSCO pharmaceutical cold chain requirements.",
    heroImage: "/images/refrigerated-van-hero.jpg",
    images: [
      "/images/refrigerated-van-exterior.jpg",
      "/images/refrigerated-van-cargo.jpg",
      "/images/refrigerated-van-unit.jpg",
      "/images/refrigerated-van-loading.jpg",
    ],
    features: [
      {
        icon: "Truck",
        title: "Vehicle-Powered Refrigeration",
        description:
          "Roof-mounted or front-wall refrigeration unit powered by vehicle engine (belt drive) and optional standby electric connection (230V) for loading/unloading dwell time at temperature.",
      },
      {
        icon: "Thermometer",
        title: "+2°C to +8°C Transit Maintenance",
        description:
          "Pre-cooled insulated cargo box with forced-air refrigeration unit maintains +2°C to +8°C during transit in ambient temperatures up to +45°C on Indian roads.",
      },
      {
        icon: "Layers",
        title: "75mm PUF Insulated Body",
        description:
          "75mm CFC-free PUF insulated sandwich panel body construction with food-grade GRP exterior and SS304 or FRP interior liner. Meets ASHRAE cargo body insulation standards.",
      },
      {
        icon: "Monitor",
        title: "GPS + Temperature Monitoring",
        description:
          "Integrated GPS tracking with real-time vehicle location and temperature data transmitted via GPRS to a cloud dashboard. Temperature breach alerts sent immediately to fleet manager by SMS/email.",
      },
      {
        icon: "Activity",
        title: "Continuous Data Logging",
        description:
          "Electronic temperature data logger records at 5-minute intervals with time-stamped records for every trip. Trip report auto-generated on delivery for consignment chain-of-custody documentation.",
      },
      {
        icon: "Shield",
        title: "Regulatory Compliant Transport",
        description:
          "Vehicle and cold chain documentation package designed to meet CDSCO GDP (Good Distribution Practice) and WHO Technical Report Series 961 requirements for pharmaceutical cold chain transport.",
      },
    ],
    specifications: [
      { label: "Temperature Range (cargo box)", value: "+2°C to +8°C" },
      { label: "Temperature Uniformity", value: "±1.5°C at full load" },
      { label: "Cargo Body Insulation", value: "75mm CFC-Free PUF Sandwich Panel" },
      { label: "Interior Liner", value: "Stainless Steel 304 / GRP" },
      { label: "Exterior Cladding", value: "GRP (Glass Reinforced Plastic)" },
      { label: "Refrigeration Unit", value: "Vehicle Engine-Driven + 230V Standby" },
      { label: "Refrigerant", value: "R404A / R452A" },
      { label: "Temperature Logger", value: "Electronic, 5-min intervals, USB + GPRS" },
      { label: "GPS Tracking", value: "Real-Time via GPRS to Cloud Dashboard" },
      { label: "Vehicle Platform", value: "Tata Ace / Maruti Eeco / Force Traveller / Custom" },
      { label: "Ambient Operating Range", value: "Up to +45°C" },
      { label: "Certifications", value: "AIS 023, CE, CDSCO GDP" },
    ],
    variants: [
      {
        id: "mrv-01",
        model: "MRV-Mini",
        capacity: "500 Litres cargo / 400 kg payload",
        dimensions: "1800 × 1400 × 1300 mm (cargo L×W×H)",
        weight: "400 kg (body + ref unit)",
        specs: [
          { label: "Base Vehicle", value: "Tata Ace / Mahindra Jeeto" },
          { label: "Refrigeration Power", value: "1.5", unit: "kW" },
        ],
      },
      {
        id: "mrv-02",
        model: "MRV-Mid",
        capacity: "1500 Litres cargo / 800 kg payload",
        dimensions: "3000 × 1600 × 1500 mm (cargo L×W×H)",
        weight: "900 kg (body + ref unit)",
        specs: [
          { label: "Base Vehicle", value: "Tata 407 / Ashok Leyland Bada Dost" },
          { label: "Refrigeration Power", value: "3.0", unit: "kW" },
        ],
      },
      {
        id: "mrv-03",
        model: "MRV-Large",
        capacity: "4000 Litres cargo / 2000 kg payload",
        dimensions: "5500 × 2100 × 1800 mm (cargo L×W×H)",
        weight: "2200 kg (body + ref unit)",
        specs: [
          { label: "Base Vehicle", value: "Tata 709 / Eicher Pro 1049" },
          { label: "Refrigeration Power", value: "5.5", unit: "kW" },
        ],
      },
    ],
    certifications: ["CDSCO GDP", "AIS 023", "CE Marked", "ISO 9001", "WHO TRS 961"],
    downloads: [
      {
        title: "Refrigerated Van Product Brochure",
        type: "brochure",
        url: "/downloads/rv-brochure.pdf",
        fileSize: "3.5 MB",
      },
      {
        title: "Technical Datasheet — MRV Series",
        type: "datasheet",
        url: "/downloads/rv-datasheet.pdf",
        fileSize: "1.6 MB",
      },
      {
        title: "Vehicle Qualification Manual",
        type: "manual",
        url: "/downloads/rv-qualification.pdf",
        fileSize: "8.0 MB",
      },
      {
        title: "GDP Compliance Certificate",
        type: "certificate",
        url: "/downloads/rv-gdp-certificate.pdf",
        fileSize: "0.6 MB",
      },
    ],
    faqs: [
      {
        question: "Can the refrigerated van body be fitted to our own vehicle chassis?",
        answer:
          "Yes. MarKEN manufactures refrigerated cargo body conversions for most common light commercial vehicles available in India including Tata Ace, Maruti Super Carry, Ashok Leyland Dost, Force Traveller, and larger truck platforms. Body-on-chassis supply is available where MarKEN manufactures only the insulated cargo body and refrigeration unit for fitment to a customer-supplied vehicle.",
      },
      {
        question: "What happens to the cold chain when the vehicle engine is switched off?",
        answer:
          "The vehicle refrigeration unit has a 230V standby electric connection. When the vehicle is parked at a facility, this connection maintains refrigeration from mains power without running the engine. Additionally, the well-insulated body holds temperature within range for 4–6 hours without any refrigeration, providing a safety buffer for loading and unloading operations.",
      },
      {
        question: "Is real-time temperature monitoring available?",
        answer:
          "Yes. All MRV Series vehicles include a GPRS-connected temperature logger that transmits temperature readings every 5 minutes to a cloud-based dashboard. Fleet managers and pharmaceutical QA teams can view real-time temperature and GPS location from any web browser or mobile app. Alerts are sent by SMS and email when temperature excursions occur.",
      },
      {
        question: "What are the CDSCO GDP requirements for pharmaceutical cold chain transport?",
        answer:
          "CDSCO GDP guidelines (Schedule M, Part I, Chapter VII) require that cold chain pharmaceutical products be transported in temperature-controlled vehicles maintaining the required storage temperature, with continuous temperature monitoring and records retained for at least 3 years. MarKEN MRV vehicles are supplied with a GDP qualification dossier covering IQ, OQ, and temperature mapping, and the on-board data logger generates trip records compliant with this retention requirement.",
      },
    ],
    relatedProducts: ["walk-in-cooler", "ice-lined-refrigerator-horizontal", "remote-temperature-monitoring"],
    seoTitle: "Refrigerated Van | Medical Cold Chain Transport | +2°C to +8°C | MarKEN",
    seoDescription:
      "MarKEN MRV Series Refrigerated Vans: +2°C to +8°C validated cold chain transport for vaccines, blood, and pharmaceuticals. GPS tracking, CDSCO GDP compliant, AIS 023 certified.",
    seoKeywords: [
      "refrigerated van india",
      "cold chain transport vehicle",
      "pharmaceutical cold chain van",
      "vaccine transport vehicle",
      "medical refrigerated transport",
    ],
    has3DExperience: false,
    hotspots: [],
  },

  // ─────────────────────────────────────────────────────────────────
  // 11. Remote Temperature Monitoring System
  // ─────────────────────────────────────────────────────────────────
  {
    id: "rtm-01",
    slug: "remote-temperature-monitoring",
    name: "Remote Temperature Monitoring System",
    shortName: "MRTM Series",
    category: "medical-cold-chain",
    subcategory: "Monitoring",
    tagline: "24/7 IoT-Based Cold Chain Monitoring — Alerts, Logging & Compliance Reports",
    description:
      "MarKEN MRTM Series Remote Temperature Monitoring Systems provide continuous 24/7 surveillance of cold storage equipment across hospitals, blood banks, pharmaceutical stores, and cold chain networks. Wireless IoT sensors connect to a cloud-based dashboard delivering real-time temperature graphs, threshold alerts via SMS and email, automated compliance reports, and 21 CFR Part 11 / WHO EMDOC-compatible audit trails. Single-site and multi-site enterprise deployments supported.",
    heroImage: "/images/remote-temperature-monitoring-hero.jpg",
    images: [
      "/images/rtm-dashboard.jpg",
      "/images/rtm-sensor.jpg",
      "/images/rtm-gateway.jpg",
      "/images/rtm-mobile-app.jpg",
    ],
    features: [
      {
        icon: "Wifi",
        title: "Wireless IoT Sensors",
        description:
          "Compact wireless temperature sensors (±0.1°C accuracy, NIST-traceable calibration) attach to any cold storage unit. Long-range 868 MHz / 2.4 GHz RF transmission reaches sensors up to 100m from the gateway through walls.",
      },
      {
        icon: "BellRing",
        title: "Instant Multi-Channel Alerts",
        description:
          "Temperature breach alerts delivered within 90 seconds via SMS, email, and push notification to configurable recipient groups. Escalation to secondary contacts if primary contact does not acknowledge within a set timeout.",
      },
      {
        icon: "Database",
        title: "Cloud Data Logging & Storage",
        description:
          "All temperature readings stored on redundant cloud servers with 5-year retention. Data accessible 24/7 via web browser or mobile app. Offline edge logging on gateway ensures no data loss during internet outages.",
      },
      {
        icon: "BarChart",
        title: "Automated Compliance Reports",
        description:
          "One-click generation of temperature excursion reports, daily mean/min/max summaries, NABH/WHO/CDSCO-format compliance certificates, and 21 CFR Part 11 audit trails for pharmaceutical GMP and regulatory inspections.",
      },
      {
        icon: "Monitor",
        title: "Centralised Multi-Site Dashboard",
        description:
          "Single web dashboard monitors all sensors across all sites in a hospital chain, blood bank network, or pharmaceutical distribution network. Role-based access control for site managers, QA, and administrators.",
      },
      {
        icon: "Settings",
        title: "Easy Retrofit Installation",
        description:
          "Wireless sensors require no rewiring and install in minutes on any existing cold storage equipment — MarKEN or third-party brand. RS-485 or analogue input modules available for wired integration with existing alarm panels.",
      },
    ],
    specifications: [
      { label: "Sensor Temperature Range", value: "-100°C to +60°C" },
      { label: "Sensor Accuracy", value: "±0.1°C (NIST Traceable)" },
      { label: "Measurement Interval", value: "Configurable: 1–30 minutes" },
      { label: "Wireless Protocol", value: "868 MHz LPWAN / 2.4 GHz Wi-Fi / RS-485 Wired" },
      { label: "Gateway Connectivity", value: "Ethernet / 4G LTE SIM / Wi-Fi" },
      { label: "Sensor Battery Life", value: "3–5 years (AA lithium)" },
      { label: "Alert Channels", value: "SMS, Email, Push Notification, Voice Call" },
      { label: "Alert Response Time", value: "≤90 seconds from breach detection" },
      { label: "Data Retention", value: "5 years cloud storage" },
      { label: "Report Standards", value: "21 CFR Part 11, EU GMP Annex 11, WHO EMDOC" },
      { label: "User Interface", value: "Web Dashboard + iOS / Android Mobile App" },
      { label: "Certifications", value: "CE, FCC, ISO 9001, CDSCO" },
    ],
    variants: [
      {
        id: "mrtm-01",
        model: "MRTM-Starter",
        capacity: "1 Gateway + 5 Sensors",
        dimensions: "Gateway: 150 × 100 × 40 mm",
        weight: "1.2 kg (gateway only)",
        specs: [
          { label: "Expandable to", value: "50", unit: "sensors per gateway" },
          { label: "Cloud Subscription", value: "Included 1 year", unit: "" },
        ],
      },
      {
        id: "mrtm-02",
        model: "MRTM-Pro",
        capacity: "1 Gateway + 20 Sensors",
        dimensions: "Gateway: 150 × 100 × 40 mm",
        weight: "3.5 kg (kit)",
        specs: [
          { label: "Expandable to", value: "100", unit: "sensors per gateway" },
          { label: "Cloud Subscription", value: "Included 1 year", unit: "" },
        ],
      },
      {
        id: "mrtm-03",
        model: "MRTM-Enterprise",
        capacity: "Multi-Gateway + Unlimited Sensors",
        dimensions: "Custom deployment",
        weight: "Custom",
        specs: [
          { label: "Gateways", value: "Unlimited multi-site", unit: "" },
          { label: "SLA Uptime", value: "99.9", unit: "%" },
        ],
      },
    ],
    certifications: ["CE Marked", "FCC", "ISO 9001", "CDSCO", "21 CFR Part 11 Compliant"],
    downloads: [
      {
        title: "MRTM System Brochure",
        type: "brochure",
        url: "/downloads/rtm-brochure.pdf",
        fileSize: "2.8 MB",
      },
      {
        title: "Technical Datasheet — MRTM Series",
        type: "datasheet",
        url: "/downloads/rtm-datasheet.pdf",
        fileSize: "1.5 MB",
      },
      {
        title: "Installation & Configuration Manual",
        type: "manual",
        url: "/downloads/rtm-manual.pdf",
        fileSize: "6.8 MB",
      },
      {
        title: "CE Certificate & Data Security Statement",
        type: "certificate",
        url: "/downloads/rtm-certificates.pdf",
        fileSize: "0.7 MB",
      },
    ],
    faqs: [
      {
        question: "Does the system work if the internet connection goes down?",
        answer:
          "Yes. The MRTM gateway stores all sensor data locally on 8GB of onboard flash memory when internet connectivity is unavailable. All data is synchronised to the cloud automatically when connectivity is restored, ensuring no data gaps in the compliance record. Local SMS alerts continue to function via the onboard 4G LTE SIM card even when internet-based services are unavailable.",
      },
      {
        question: "How quickly are alert notifications sent when temperature exceeds the limit?",
        answer:
          "The system detects a temperature breach within the configured measurement interval (minimum 1 minute) and sends SMS and email alerts within 90 seconds of breach detection. A configurable alarm delay (e.g., 10–15 minutes) can be set to avoid nuisance alerts from brief door openings, while still providing rapid alerts for genuine excursions.",
      },
      {
        question: "Is the system compliant with WHO EPI temperature monitoring requirements?",
        answer:
          "Yes. The MRTM system generates reports in WHO EMDOC (Electronic Monitoring & Data for Cold Chain) format and meets the requirements of WHO's Temperature Monitoring Guidelines for Cold Chain Equipment (WHO/IVB/11.02). It is also compatible with eVIN (Electronic Vaccine Intelligence Network) data reporting standards used in India's national immunisation programme.",
      },
      {
        question: "Can the MRTM be retrofitted to existing equipment from other manufacturers?",
        answer:
          "Yes. The wireless sensors are brand-agnostic and can be installed in any refrigerator, freezer, cold room, or insulated box regardless of manufacturer. Sensors are supplied with flexible mounting brackets and probe extensions suitable for refrigerators, deep freezers, walk-in rooms, and transport boxes. RS-485 or 4–20 mA integration modules are available for equipment with existing wired outputs.",
      },
      {
        question: "How many cold storage units can be monitored by one system?",
        answer:
          "The MRTM-Starter gateway supports up to 50 sensors; MRTM-Pro supports up to 100 sensors per gateway. Multiple gateways can be added for large hospital complexes or multi-site networks, all converging on a single cloud dashboard with unified reporting. The MRTM-Enterprise tier supports unlimited gateways and sensors with a dedicated account manager and 99.9% uptime SLA.",
      },
    ],
    relatedProducts: ["walk-in-cooler", "laboratory-refrigerator", "ice-lined-refrigerator-vertical"],
    seoTitle: "Remote Temperature Monitoring System | Cold Chain IoT | MarKEN",
    seoDescription:
      "MarKEN MRTM Series: IoT cold chain monitoring for hospitals, blood banks, and pharma. Wireless sensors, real-time SMS/email alerts, 21 CFR Part 11 reports. CE, CDSCO certified.",
    seoKeywords: [
      "remote temperature monitoring system india",
      "cold chain monitoring IoT",
      "pharma temperature logger",
      "vaccine cold chain monitoring",
      "21 CFR Part 11 temperature monitoring",
    ],
    has3DExperience: false,
    hotspots: [],
  },
];
