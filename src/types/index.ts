// ============================================
// MarKEN Website — Core Type Definitions
// ============================================

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  subcategory: string;
  tagline: string;
  description: string;
  heroImage: string;
  images: string[];
  features: Feature[];
  specifications: Specification[];
  variants: ProductVariant[];
  certifications: string[];
  downloads: Download[];
  faqs: FAQ[];
  relatedProducts: string[]; // product IDs
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  has3DExperience: boolean;
  hotspots?: Hotspot[];
}

export type ProductCategory =
  | "medical-cold-chain"
  | "blood-bank-equipment"
  | "hospital-furniture"
  | "medical-equipment"
  | "modular-ot"
  | "medical-gas-pipeline";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Specification {
  label: string;
  value: string;
  unit?: string;
}

export interface ProductVariant {
  id: string;
  model: string;
  capacity: string;
  dimensions: string;
  weight: string;
  specs: Specification[];
}

export interface Download {
  title: string;
  type: "brochure" | "manual" | "certificate" | "datasheet";
  url: string;
  fileSize: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Hotspot {
  id: string;
  position: [number, number, number];
  label: string;
  description: string;
  cameraPosition?: [number, number, number];
  cameraTarget?: [number, number, number];
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  city: string;
  category: ProductCategory | "";
  product: string;
  quantity: number;
  message: string;
  source: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  products: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
  seoTitle: string;
  seoDescription: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CompanyStats {
  years: number;
  products: number;
  whoPqs: number;
  customers: number;
  franchises: number;
  servicecenters: number;
}
