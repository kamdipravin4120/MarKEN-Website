"use client";

import { motion } from "framer-motion";
import { Award, Factory, Globe, ShieldCheck } from "lucide-react";

const milestones = [
  {
    year: "1998",
    title: "The Genesis",
    description: "MarKEN founded with a vision to provide precision cold chain equipment in India.",
    icon: <Factory className="w-6 h-6" />,
  },
  {
    year: "2010",
    title: "Global Standards",
    description: "ISO 13485 and ISO 9001 certifications achieved, setting the stage for international growth.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    year: "2018",
    title: "WHO PQS Prequalification",
    description: "Strategic achievement of WHO PQS certification for blood and vaccine storage.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: "2023",
    title: "20,000+ Customers",
    description: "Reaching a significant milestone of serving over 20,000 healthcare institutions globally.",
    icon: <Globe className="w-6 h-6" />,
  },
];

export default function HeritageTimeline() {
  return (
    <section className="py-24 bg-surface-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-on-surface mb-6">
            A Quarter Century of <span className="text-primary italic font-medium">Precision</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto opacity-70">
            From a regional visionary to a global healthcare infrastructure partner, 
            our journey has been defined by uncompromising clinical safety.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex-1 w-full"
                >
                  <div className={`p-8 glass-morphism rounded-3xl border border-white/5 relative ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="text-2xl font-display font-bold text-primary mb-2">
                       {m.year}
                    </div>
                    <h3 className="text-xl font-bold text-on-surface mb-4">
                      {m.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed opacity-70">
                      {m.description}
                    </p>
                  </div>
                </motion.div>

                {/* Icon center point */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary-dim border border-white/10 shadow-2xl">
                   {m.icon}
                   {/* Point on the line */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse -z-10" />
                </div>

                {/* Empty space for layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
