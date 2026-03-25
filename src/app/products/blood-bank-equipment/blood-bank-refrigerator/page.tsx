import type { Metadata } from "next";
import { bloodBankRefrigerator } from "@/data/products";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductDownloads from "@/components/product/ProductDownloads";
import ProductSchema from "@/components/seo/ProductSchema";
import CTASection from "@/components/home/CTASection";

const product = bloodBankRefrigerator;

export const metadata: Metadata = {
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

export default function BloodBankRefrigeratorPage() {
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
