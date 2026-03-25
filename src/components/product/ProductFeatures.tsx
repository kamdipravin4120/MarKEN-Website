"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Shield,
  Wind,
  BellRing,
  Battery,
  Lock,
} from "lucide-react";
import type { Feature } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Thermometer,
  Shield,
  Wind,
  BellRing,
  Battery,
  Lock,
};

export default function ProductFeatures({ features }: { features: Feature[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Engineered for Reliability
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Every component is designed for continuous operation in demanding healthcare environments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
