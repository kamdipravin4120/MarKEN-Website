"use client";

import { motion } from "framer-motion";
import { Shield, Award, MapPin, Building2, CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "25+ Years of Trust",
    description:
      "Since 2000, MarKEN has pioneered medical cold chain solutions in India with manufacturing excellence.",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "WHO PQS Certified",
    description:
      "Our products meet global standards, recognized internationally for precision and safety.",
    color: "text-secondary"
  },
  {
    icon: MapPin,
    title: "Pan-India Reach",
    description:
      "500+ service nodes and 30+ partners ensure responsive support across every territory.",
    color: "text-tertiary"
  },
  {
    icon: Building2,
    title: "A-to-Z Capacity",
    description:
      "400+ products across 6 critical categories — from cold chain to modular OTs.",
    color: "text-primary"
  },
];

export default function WhyMarKEN() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
              The MarKEN Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-[1.2] mb-8">
              Reliability Engineered <br />
              <span className="text-on-surface-variant font-medium">for Critical Care</span>
            </h2>
            
            <div className="space-y-6">
              {[
                "Advanced thermal engineering protocols",
                "Real-time IoT monitoring integration",
                "Redundant cooling systems architecture",
                "Eco-friendly, energy-efficient refrigeration"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-on-surface-variant font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="no-line-card p-6 flex flex-col items-start gap-4"
              >
                <div className={`p-3 rounded-xl bg-surface-container-highest ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-on-surface leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
