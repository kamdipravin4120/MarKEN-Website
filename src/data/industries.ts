import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    id: "blood-banks",
    slug: "blood-banks",
    name: "Blood Banks",
    tagline: "Uncompromised Safety for Every Living Drop",
    description: 
      "Precision-engineered storage and processing solutions for modern transfusion medicine. Our WHO PQS prequalified equipment ensures the highest safety standards for blood and blood components.",
    image: "/images/industry-blood-bank.jpg",
    icon: "Droplets",
    keyProducts: ["blood-bank-refrigerator", "platelet-incubator", "plasma-thawing-bath", "blood-collection-monitor"],
    benefits: [
      { title: "WHO PQS Certified", description: "Global standards for performance, quality, and safety." },
      { title: "FIFO Management", description: "Smart storage systems to ensure first-in, first-out compliance." },
      { title: "Redundant Safety", description: "Multi-level alarms and 8+ hour emergency hold times." }
    ],
    stats: [
      { label: "Installations", value: "5000+" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: "hospitals",
    slug: "hospitals",
    name: "Hospitals & Infrastructure",
    tagline: "The Backbone of Modern Patient Care",
    description: 
      "From ICU beds to modular operation theatres, we provide the infrastructure that enables world-class clinical outcomes. Built for durability, hygiene, and patient comfort.",
    image: "/images/industry-hospital.jpg",
    icon: "Building2",
    keyProducts: ["icu-beds", "modular-ot", "medical-gas-pipeline", "patient-monitors"],
    benefits: [
      { title: "Ergonomic Design", description: "Enhancing patient comfort and caregiver efficiency." },
      { title: "Modular Flexibility", description: "Scalable OT solutions that grow with your facility." },
      { title: "24/7 Service Support", description: "Largest field service network for zero downtime." }
    ],
    stats: [
      { label: "Beds Supplied", value: "50,000+" },
      { label: "Partner Hospitals", value: "2000+" }
    ]
  },
  {
    id: "laboratories",
    slug: "laboratories",
    name: "Laboratories & Research",
    tagline: "Precision for Every Discovery",
    description: 
      "High-precision controlled environments for diagnostic and research excellence. Supporting everything from basic pathology to advanced genomic research.",
    image: "/images/industry-laboratory.jpg",
    icon: "FlaskConical",
    keyProducts: ["ult-deep-freezer", "bio-safety-cabinet", "refrigerated-centrifuge", "laboratory-incubator"],
    benefits: [
      { title: "Temp Stability", description: "±0.5°C precision for consistent analytical results." },
      { title: "User Safety", description: "Advanced containment and filtration for hazardous materials." },
      { title: "Data Integrity", description: "IoT-enabled logging for GLP/GMP compliance." }
    ],
    stats: [
      { label: "Accuracy", value: "±0.1°C" },
      { label: "Life Expectancy", value: "15-20 yrs" }
    ]
  },
  {
    id: "government-healthcare",
    slug: "government-healthcare",
    name: "Government & National Programs",
    tagline: "Reaching the Last Mile of Healthcare",
    description: 
      "Scalable cold chain and infrastructure solutions designed for national immunization programs and public health missions. Robust equipment for challenging environments.",
    image: "/images/industry-government.jpg",
    icon: "Globe",
    keyProducts: ["vaccine-refrigerator", "ice-lined-refrigerator", "walk-in-freezer", "solar-direct-drive"],
    benefits: [
      { title: "Remote Ready", description: "Solar direct drive solutions for off-grid healthcare posts." },
      { title: "Last-Mile Cold Chain", description: "Ensuring vaccine potency in extreme ambient temperatures." },
      { title: "Large Scale Deployment", description: "Proven capability for national-level health missions." }
    ],
    stats: [
      { label: "States Covered", value: "All 28" },
      { label: "Mission Reach", value: "Rural/Urban" }
    ]
  },
  {
    id: "pharma-biotech",
    slug: "pharma-biotech",
    name: "Pharma & Biotech",
    tagline: "Critical Storage for Lifesaving Science",
    description: 
      "GMP-compliant storage solutions for pharmaceuticals, reagents, and biological samples. Validated performance for strict regulatory environments.",
    image: "/images/industry-pharma.jpg",
    icon: "Stethoscope",
    keyProducts: ["pharmacy-refrigerator", "ult-deep-freezer", "stability-chamber", "biological-safety-cabinet"],
    benefits: [
      { title: "Audit Ready", description: "Comprehensive IQ/OQ/PQ documentation and data logs." },
      { title: "Energy Efficient", description: "Reducing operational costs and carbon footprint." },
      { title: "Material Purity", description: "Anti-corrosive, medical-grade components throughout." }
    ],
    stats: [
      { label: "Regulatory Compliance", value: "GMP/GLP" },
      { label: "Energy Savings", value: "Up to 30%" }
    ]
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustries(): Industry[] {
  return industries;
}
