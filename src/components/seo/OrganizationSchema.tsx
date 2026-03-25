/**
 * JSON-LD structured data for Organization.
 * All content is hardcoded — no user input. dangerouslySetInnerHTML
 * is the standard Next.js pattern for injecting JSON-LD schema.
 */
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MarKEN",
    url: "https://markenworld.com",
    logo: "https://markenworld.com/logo.svg",
    foundingDate: "2000",
    description:
      "India's trusted manufacturer of medical cold chain equipment, blood bank solutions, and hospital infrastructure. 25+ years of healthcare innovation.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-91-3030-5959",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/marken/",
      "https://www.facebook.com/markenworld/",
      "https://www.youtube.com/@marken",
      "https://www.instagram.com/markenworld/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
