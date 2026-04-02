import { industries, getIndustryBySlug } from "@/data/industries";
import { getAllProducts } from "@/data/product-registry";
import IndustryDetail from "./IndustryDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) return { title: "Sector Page | MarKEN" };

  return {
    title: `${industry.name} | Specialized Healthcare Solutions | MarKEN`,
    description: industry.description,
    keywords: [industry.name, "healthcare infrastructure", "cold chain systems", "precision storage"],
  };
}

export default async function IndustrySectorPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // Fetch only the relevant products for this sector
  const allProducts = getAllProducts();
  const relevantProducts = allProducts.filter((p) => 
    industry.keyProducts.includes(p.slug) || 
    industry.keyProducts.includes(p.category)
  );

  return <IndustryDetail industry={industry} products={relevantProducts} />;
}
