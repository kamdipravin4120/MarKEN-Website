import type { Product } from "@/types";

/**
 * JSON-LD structured data for product pages.
 * Content is entirely from our own hardcoded product data — no user input.
 * dangerouslySetInnerHTML is the standard Next.js pattern for JSON-LD injection.
 */
export default function ProductSchema({ product }: { product: Product }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `MarKEN ${product.name}`,
    description: product.seoDescription,
    brand: { "@type": "Brand", name: "MarKEN" },
    manufacturer: {
      "@type": "Organization",
      name: "MarKEN",
      url: "https://markenworld.com",
    },
    category: product.category.replace(/-/g, " "),
    image: `https://markenworld.com${product.heroImage}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@type": "Organization", name: "MarKEN" },
    },
    additionalProperty: product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // JSON.stringify on our own static data is safe — no user-controlled content
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {product.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
