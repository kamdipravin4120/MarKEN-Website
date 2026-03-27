import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProducts, getProductBySlug } from "@/data/product-registry";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductDownloads from "@/components/product/ProductDownloads";
import ProductSchema from "@/components/seo/ProductSchema";
import CTASection from "@/components/home/CTASection";

interface Props {
  params: Promise<{ category: string; product: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({
    category: p.category,
    product: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, product: slug } = await params;
  const product = getProductBySlug(category, slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: product.seoKeywords,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      type: "website",
      images: [{ url: product.heroImage }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, product: slug } = await params;
  const product = getProductBySlug(category, slug);
  if (!product) notFound();

  return (
    <>
      <ProductSchema product={product} />
      <ProductHero product={product} />
      <ProductFeatures features={product.features} />
      <ProductSpecifications product={product} />
      <ProductDownloads downloads={product.downloads} />
      <ProductFAQ faqs={product.faqs} />
      <CTASection />
    </>
  );
}
