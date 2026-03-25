"use client";

import { motion } from "framer-motion";
import { Shield, Award, MapPin, Building2 } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "25+ Years of Innovation",
    description:
      "Trusted since 2000, MarKEN has pioneered medical cold chain solutions in India with continuous R&D and manufacturing excellence.",
  },
  {
    icon: Award,
    title: "WHO PQS Prequalified",
    description:
      "Our products meet World Health Organization Performance, Quality & Safety standards — recognized internationally for healthcare equipment.",
  },
  {
    icon: MapPin,
    title: "Pan-India Service Network",
    description:
      "500+ service centers and 30+ franchise partners ensure responsive support across every state and union territory.",
  },
  {
    icon: Building2,
    title: "Complete Healthcare Solutions",
    description:
      "400+ products across 6 categories — from medical cold chain and blood bank equipment to hospital furniture and modular OTs.",
  },
];

export default function WhyMarKEN() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Why MarKEN
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Trusted by India&apos;s Leading Healthcare Institutions
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            From AIIMS to district hospitals, our equipment powers healthcare delivery at every scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 dark:bg-blue-500/10 rounded-xl flex items-center justify-center">
                <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
