import HeritageTimeline from "@/components/about/HeritageTimeline";
import ManufacturingSection from "@/components/about/ManufacturingSection";

import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MarKEN | Precision Healthcare Infrastructure",
  description: "Learn about MarKEN's 25-year heritage in medical cold chain manufacturing and our mission to reach every patient, everywhere.",
  keywords: ["medical manufacturing", "marKEN heritage", "precision healthcare", "national health missions"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-10">
      <section className="relative px-6 pt-32 pb-24 text-center bg-surface-base">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl lg:text-8xl font-display font-bold text-on-surface mb-8 tracking-tighter">
            Our Mission is <span className="text-primary italic">Clinical</span>
          </h1>
          <p className="text-xl lg:text-2xl text-on-surface-variant leading-relaxed opacity-80 max-w-2xl mx-auto">
            Bridging the gap between engineering perfection and clinical safety, 
            one degree at a time.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      <HeritageTimeline />
      <ManufacturingSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
