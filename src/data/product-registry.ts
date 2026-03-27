import { medicalColdChainProducts } from "./products/medical-cold-chain";
import { bloodBankEquipmentProducts } from "./products/blood-bank-equipment";
import { hospitalFurnitureProducts } from "./products/hospital-furniture";
import { medicalEquipmentProducts } from "./products/medical-equipment";
import { modularOTProducts } from "./products/modular-ot";
import { medicalGasPipelineProducts } from "./products/medical-gas-pipeline";
import type { Product, ProductCategory } from "@/types";

const allProducts: Product[] = [
  ...medicalColdChainProducts,
  ...bloodBankEquipmentProducts,
  ...hospitalFurnitureProducts,
  ...medicalEquipmentProducts,
  ...modularOTProducts,
  ...medicalGasPipelineProducts,
];

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return allProducts.find((p) => p.category === category && p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
  href: string;
}

export function getAllCategories(): CategoryInfo[] {
  return [
    {
      id: "medical-cold-chain",
      name: "Medical Cold Chain",
      description: "WHO PQS approved cold chain solutions for vaccines, blood, and pharmaceuticals",
      image: "/images/category-cold-chain.jpg",
      href: "/products/medical-cold-chain",
    },
    {
      id: "blood-bank-equipment",
      name: "Blood Bank Equipment",
      description: "Complete blood bank solutions from collection to storage to processing",
      image: "/images/category-blood-bank.jpg",
      href: "/products/blood-bank-equipment",
    },
    {
      id: "hospital-furniture",
      name: "Hospital Furniture",
      description: "ICU beds, patient beds, trolleys, and hospital infrastructure",
      image: "/images/category-hospital-furniture.jpg",
      href: "/products/hospital-furniture",
    },
    {
      id: "medical-equipment",
      name: "Medical Equipment",
      description: "Diagnostic, therapeutic, and monitoring equipment for modern healthcare",
      image: "/images/category-medical-equipment.jpg",
      href: "/products/medical-equipment",
    },
    {
      id: "modular-ot",
      name: "Modular Operation Theatre",
      description: "Turnkey OT solutions including tables, lights, pendants, and infrastructure",
      image: "/images/category-modular-ot.jpg",
      href: "/products/modular-ot",
    },
    {
      id: "medical-gas-pipeline",
      name: "Medical Gas Pipeline System",
      description: "Centralized medical gas supply systems for hospitals",
      image: "/images/category-mgps.jpg",
      href: "/products/medical-gas-pipeline",
    },
  ];
}
