import type { Product, CompanyStats } from "@/types";

export const companyStats: CompanyStats = {
  years: 25,
  products: 400,
  whoPqs: 10,
  customers: 20000,
  franchises: 30,
  servicecenters: 500,
};

export const bloodBankRefrigerator: Product = {
  id: "bbr-01",
  slug: "blood-bank-refrigerator",
  name: "Blood Bank Refrigerator",
  shortName: "BBR Series",
  category: "blood-bank-equipment",
  subcategory: "Refrigeration",
  tagline: "WHO PQS Prequalified Blood Storage — Precision Temperature Control",
  description:
    "MarKEN Blood Bank Refrigerators maintain a strict +2°C to +6°C temperature range, ensuring safe storage of whole blood, packed red cells, and blood components. Built with forced air cooling, microprocessor-based temperature control, and redundant safety systems for uncompromised blood safety.",
  heroImage: "/images/bbr-hero.jpg",
  images: [
    "/images/bbr-front.jpg",
    "/images/bbr-open.jpg",
    "/images/bbr-interior.jpg",
    "/images/bbr-control-panel.jpg",
    "/images/bbr-basket.jpg",
  ],
  features: [
    {
      icon: "Thermometer",
      title: "Precision Temperature Control",
      description:
        "Microprocessor-based PID controller maintains +2°C to +6°C with ±0.5°C accuracy. Digital display with high/low alarm settings.",
    },
    {
      icon: "Shield",
      title: "WHO PQS Prequalified",
      description:
        "Meets World Health Organization Performance, Quality, and Safety (PQS) standards for blood and vaccine storage equipment.",
    },
    {
      icon: "Wind",
      title: "Forced Air Cooling",
      description:
        "Uniform cold air circulation ensures consistent temperature across all storage zones. No hot spots or cold pockets.",
    },
    {
      icon: "BellRing",
      title: "Multi-Level Alarm System",
      description:
        "Audio-visual alarms for temperature excursion, door open, power failure, and sensor fault. Remote alarm relay output.",
    },
    {
      icon: "Battery",
      title: "Power Failure Protection",
      description:
        "Holds temperature for 8+ hours during power outage. Optional battery backup and voltage stabilizer integration.",
    },
    {
      icon: "Lock",
      title: "Secure Access Control",
      description:
        "Key-operated lock with self-closing door. Optional access logging and password-protected settings.",
    },
  ],
  specifications: [
    { label: "Temperature Range", value: "+2°C to +6°C" },
    { label: "Cooling System", value: "Forced Air (Fan Assisted)" },
    { label: "Refrigerant", value: "R134a (CFC-Free)" },
    { label: "Controller", value: "Microprocessor PID with Digital Display" },
    { label: "Interior Material", value: "Stainless Steel 304 Grade" },
    { label: "Exterior Material", value: "Pre-coated GI / Powder Coated MS" },
    { label: "Insulation", value: "PUF (CFC-Free), 80mm thick" },
    { label: "Door", value: "Solid / Glass (Double Pane Heated)" },
    { label: "Shelves", value: "Wire Baskets / SS Perforated Shelves" },
    { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
    { label: "Ambient Operating", value: "+10°C to +43°C" },
    { label: "Certifications", value: "WHO PQS, CE, USFDA, ISO 13485" },
  ],
  variants: [
    {
      id: "mbr-01",
      model: "MBR-01",
      capacity: "178 Liters",
      dimensions: "600 × 600 × 1350 mm",
      weight: "75 kg",
      specs: [
        { label: "Blood Bag Storage", value: "56", unit: "bags" },
        { label: "Power Consumption", value: "250", unit: "W" },
      ],
    },
    {
      id: "mbr-02",
      model: "MBR-02",
      capacity: "225 Liters",
      dimensions: "600 × 650 × 1450 mm",
      weight: "85 kg",
      specs: [
        { label: "Blood Bag Storage", value: "90", unit: "bags" },
        { label: "Power Consumption", value: "280", unit: "W" },
      ],
    },
    {
      id: "mbr-03",
      model: "MBR-03",
      capacity: "285 Liters",
      dimensions: "650 × 700 × 1500 mm",
      weight: "95 kg",
      specs: [
        { label: "Blood Bag Storage", value: "180", unit: "bags" },
        { label: "Power Consumption", value: "310", unit: "W" },
      ],
    },
    {
      id: "mbr-04",
      model: "MBR-04",
      capacity: "370 Liters",
      dimensions: "700 × 750 × 1600 mm",
      weight: "110 kg",
      specs: [
        { label: "Blood Bag Storage", value: "220", unit: "bags" },
        { label: "Power Consumption", value: "350", unit: "W" },
      ],
    },
    {
      id: "mbr-05",
      model: "MBR-05",
      capacity: "490 Liters",
      dimensions: "750 × 800 × 1800 mm",
      weight: "130 kg",
      specs: [
        { label: "Blood Bag Storage", value: "300", unit: "bags" },
        { label: "Power Consumption", value: "400", unit: "W" },
      ],
    },
    {
      id: "mbr-06",
      model: "MBR-06",
      capacity: "641 Liters",
      dimensions: "900 × 850 × 1900 mm",
      weight: "155 kg",
      specs: [
        { label: "Blood Bag Storage", value: "375", unit: "bags" },
        { label: "Power Consumption", value: "450", unit: "W" },
      ],
    },
  ],
  certifications: ["WHO PQS", "CE Marked", "USFDA Listed", "ISO 13485", "ISO 9001", "CDSCO"],
  downloads: [
    {
      title: "Blood Bank Refrigerator Brochure",
      type: "brochure",
      url: "/downloads/bbr-brochure.pdf",
      fileSize: "2.4 MB",
    },
    {
      title: "Technical Datasheet — MBR Series",
      type: "datasheet",
      url: "/downloads/bbr-datasheet.pdf",
      fileSize: "1.1 MB",
    },
    {
      title: "Installation & Operation Manual",
      type: "manual",
      url: "/downloads/bbr-manual.pdf",
      fileSize: "5.8 MB",
    },
    {
      title: "WHO PQS Certificate",
      type: "certificate",
      url: "/downloads/bbr-who-pqs.pdf",
      fileSize: "0.3 MB",
    },
  ],
  faqs: [
    {
      question: "What is the ideal temperature for blood storage?",
      answer:
        "As per WHO and AABB guidelines, whole blood and packed red cells must be stored at +2°C to +6°C. Platelets are stored at +20°C to +24°C with continuous agitation, and fresh frozen plasma at -25°C or below.",
    },
    {
      question: "How long can the unit maintain temperature during power failure?",
      answer:
        "Our Blood Bank Refrigerators maintain safe temperature for 8+ hours during complete power outage with doors closed. Optional battery backup systems can extend this significantly.",
    },
    {
      question: "Is the unit WHO PQS prequalified?",
      answer:
        "Yes. MarKEN Blood Bank Refrigerators carry WHO PQS (Performance, Quality and Safety) prequalification, meaning they meet international standards for blood and vaccine storage equipment used in immunization programs.",
    },
    {
      question: "What alarm systems are included?",
      answer:
        "The unit includes alarms for high temperature, low temperature, door open (adjustable delay), power failure, sensor fault, and compressor overload. Both audible and visual alarms with remote relay output for centralized monitoring.",
    },
    {
      question: "Can the refrigerator be connected to a centralized monitoring system?",
      answer:
        "Yes. MarKEN BBR units feature RS-485 communication and optional IoT connectivity for remote temperature monitoring, alarm forwarding, and data logging integration with hospital management systems.",
    },
  ],
  relatedProducts: ["platelet-incubator", "plasma-thawing-bath", "blood-collection-monitor"],
  seoTitle: "Blood Bank Refrigerator | +2°C to +6°C | WHO PQS | MarKEN",
  seoDescription:
    "WHO PQS prequalified Blood Bank Refrigerator by MarKEN. 178L to 641L capacity, +2°C to +6°C precision control, 56 to 375 blood bag storage. CE, USFDA, ISO 13485 certified.",
  seoKeywords: [
    "blood bank refrigerator",
    "blood bank refrigerator price india",
    "WHO PQS blood refrigerator",
    "blood storage refrigerator",
    "blood bank equipment",
  ],
  has3DExperience: true,
  hotspots: [
    {
      id: "control-panel",
      position: [0.8, 1.2, 0.55],
      label: "Digital Control Panel",
      description:
        "Microprocessor PID controller with LED display showing real-time temperature, alarm status, and compressor state. Password-protected settings prevent unauthorized changes.",
      cameraPosition: [1.5, 1.3, 1.5],
      cameraTarget: [0.8, 1.2, 0.5],
    },
    {
      id: "interior-chamber",
      position: [0, 0.6, 0.55],
      label: "SS 304 Interior Chamber",
      description:
        "Full stainless steel 304 grade interior with rounded corners for easy cleaning and sterilization. Anti-bacterial coating prevents microbial growth.",
      cameraPosition: [0, 0.6, 2],
      cameraTarget: [0, 0.6, 0],
    },
    {
      id: "basket-system",
      position: [0, 0.8, 0.3],
      label: "Wire Basket Storage",
      description:
        "Removable wire baskets with dividers allow organized storage of blood bags by type, date, and group. Pull-out design ensures FIFO (First In, First Out) compliance.",
      cameraPosition: [1.2, 0.8, 1.2],
      cameraTarget: [0, 0.8, 0.3],
    },
    {
      id: "compressor",
      position: [0, -0.4, -0.5],
      label: "Hermetic Compressor",
      description:
        "High-efficiency hermetic compressor with R134a CFC-free refrigerant. Designed for continuous operation in ambient temperatures up to +43°C.",
      cameraPosition: [1.5, -0.2, -1.5],
      cameraTarget: [0, -0.4, -0.5],
    },
    {
      id: "door-seal",
      position: [-0.5, 0.5, 0.6],
      label: "Magnetic Door Gasket",
      description:
        "Triple-layer magnetic door gasket ensures airtight seal. Heated door frame prevents condensation and frost build-up on glass door models.",
      cameraPosition: [-1.5, 0.5, 1.5],
      cameraTarget: [-0.5, 0.5, 0.6],
    },
    {
      id: "alarm-system",
      position: [0.8, 1.4, 0.55],
      label: "Multi-Level Alarm System",
      description:
        "Audio-visual alarm tower with distinct indicators for temperature excursion (red), door open (yellow), and power failure (blue). Remote relay output for building management integration.",
      cameraPosition: [1.8, 1.6, 1],
      cameraTarget: [0.8, 1.4, 0.5],
    },
    {
      id: "insulation",
      position: [0.55, 0.5, 0],
      label: "80mm PUF Insulation",
      description:
        "80mm thick CFC-free polyurethane foam insulation provides superior thermal barrier. Maintains temperature for 8+ hours during power failure with door closed.",
      cameraPosition: [2, 0.5, 0],
      cameraTarget: [0.55, 0.5, 0],
    },
  ],
};

export const productCategories = [
  {
    id: "medical-cold-chain",
    name: "Medical Cold Chain",
    description: "WHO PQS approved cold chain solutions for vaccines, blood, and pharmaceuticals",
    image: "/images/category-cold-chain.jpg",
    productCount: 14,
    href: "/products/medical-cold-chain",
  },
  {
    id: "blood-bank-equipment",
    name: "Blood Bank Equipment",
    description: "Complete blood bank solutions from collection to storage to processing",
    image: "/images/category-blood-bank.jpg",
    productCount: 21,
    href: "/products/blood-bank-equipment",
  },
  {
    id: "hospital-furniture",
    name: "Hospital Furniture",
    description: "ICU beds, patient beds, trolleys, and hospital infrastructure",
    image: "/images/category-hospital-furniture.jpg",
    productCount: 28,
    href: "/products/hospital-furniture",
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    description: "Diagnostic, therapeutic, and monitoring equipment for modern healthcare",
    image: "/images/category-medical-equipment.jpg",
    productCount: 23,
    href: "/products/medical-equipment",
  },
  {
    id: "modular-ot",
    name: "Modular Operation Theatre",
    description: "Turnkey OT solutions including tables, lights, pendants, and infrastructure",
    image: "/images/category-modular-ot.jpg",
    productCount: 10,
    href: "/products/modular-ot",
  },
  {
    id: "medical-gas-pipeline",
    name: "Medical Gas Pipeline System",
    description: "Centralized medical gas supply systems for hospitals",
    image: "/images/category-mgps.jpg",
    productCount: 5,
    href: "/products/medical-gas-pipeline",
  },
];
