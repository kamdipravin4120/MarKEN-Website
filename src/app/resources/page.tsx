import DownloadHub from "@/components/resources/DownloadHub";
import IndustryHero from "@/components/industry/IndustryHero";
import CTASection from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource Center | Technical Hub | MarKEN",
  description: "Access technical documentation, brochures, manuals, and certificates for MarKEN healthcare infrastructure and cold chain solutions.",
  keywords: ["technical downloads", "marKEN manuals", "medical equipment brochures", "WHO PQS certificates"],
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <IndustryHero 
        title="Knowledge Assets"
        tagline="Precision in Every Document"
        description="Our Resource Center provides the technical clarity required for clinical success. Access the latest brochures, operation manuals, and quality certifications."
      />
      
      <div className="bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        
        <DownloadHub />
      </div>

      <CTASection />
    </main>
  );
}
