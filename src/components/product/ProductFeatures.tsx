"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Shield,
  Wind,
  BellRing,
  Battery,
  Lock,
  Cpu,
  Zap,
  Activity
} from "lucide-react";
import type { Feature } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Thermometer,
  Shield,
  Wind,
  BellRing,
  Battery,
  Lock,
  Cpu,
  Zap,
  Activity
};

export default function ProductFeatures({ features }: { features: Feature[] }) {
  return (
    <section className="py-24 bg-[#060E20] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
            Engineering Excellence
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white font-manrope">
            Precision Reimagined
          </h2>
          <div className="mt-6 w-12 h-1 bg-blue-500/30 mx-auto rounded-full" />
          <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Every component is meticulously designed and tested to thrive in high-stakes clinical environments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.1,
                  ease: [0.2, 0.8, 0.2, 1]
                }}
                className="no-line-card p-8 group hover:bg-white/[0.03] transition-all duration-500"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                
                <h3 className="mt-8 text-xl font-bold text-white font-manrope group-hover:translate-x-1 transition-transform">
                  {feature.title}
                </h3>
                
                <p className="mt-4 text-white/40 leading-relaxed text-base group-hover:text-white/60 transition-colors">
                  {feature.description}
                </p>
                
                {/* Visual accent */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-500/50 to-transparent transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
