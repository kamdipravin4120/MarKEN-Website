import { getAllIndustries } from "@/data/industries";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryGrid from "@/components/industry/IndustryGrid";
import CTASection from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Specific Healthcare Solutions | MarKEN",
  description: "Explore MarKEN's specialized healthcare infrastructure and cold chain solutions tailored for Blood Banks, Hospitals, Laboratories, and National Health Programs.",
  keywords: ["blood bank solutions", "hospital infrastructure", "lab cold chain", "vaccine storage", "national health programs"],
};

export default function IndustriesPage() {
  const industries = getAllIndustries();

  return (
    <main className="min-h-screen">
      <IndustryHero 
        title="Industrial Precision"
        tagline="Tailored for Your Excellence"
        description="We bridge the gap between advanced manufacturing and clinical needs. Discover how MarKEN provides mission-critical infrastructure for the most demanding healthcare environments."
      />
      
      <div className="bg-surface-base pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        
        <IndustryGrid industries={industries} />
      </div>

      <CTASection />
    </main>
  );
}
