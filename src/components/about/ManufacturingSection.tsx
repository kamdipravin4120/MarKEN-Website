"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Zap, Microscope } from "lucide-react";

const principles = [
  {
    title: "Clinical Precision",
    description: "Every unit is calibrated to global pharmacopoeia standards, ensuring ±0.5°C accuracy in every storage zone.",
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    title: "Uncompromising Safety",
    description: "Multi-layered redundancy across all critical systems — from redundant sensors to 8+ hour power-fail hold times.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Last-Mile Efficiency",
    description: "Engineering solutions that perform in the most extreme ambient conditions, up to +43°C with no thermal bleed.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Mission Excellence",
    description: "WHO PQS prequalified engineering that meets the rigorous demands of national health programs.",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export default function ManufacturingSection() {
  return (
    <section className="py-24 bg-surface-container/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold text-on-surface mb-8">
              Manufacturing the <span className="text-primary italic">Clinical Future</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-12 opacity-80">
              At MarKEN, we don&apos;t just build equipment; we engineer scientific instruments. 
              Our manufacturing facilities are centers of excellence, where craftsmanship 
              meets advanced robotics to deliver the world&apos;s most reliable healthcare infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {principles.map((p) => (
                <div key={p.title} className="group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-4">
                    {p.icon}
                  </div>
                  <h4 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed opacity-60">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass-morphism p-4 border border-white/10 shadow-2xl relative z-10">
               {/* High-quality manufacturing process visual would go here */}
               <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-primary-dim/20 to-surface-container animate-pulse flex items-center justify-center opacity-40">
                  <span className="text-primary font-bold text-xl uppercase tracking-tighter opacity-30">Precision Engineering Experience</span>
               </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/30 rounded-full blur-[80px] animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
