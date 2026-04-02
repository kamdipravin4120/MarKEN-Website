"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Droplets, Building2, FlaskConical, Globe, Stethoscope } from "lucide-react";
import type { Industry } from "@/types";

const icons = {
  Droplets: <Droplets className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  FlaskConical: <FlaskConical className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
};

interface IndustryGridProps {
  industries: Industry[];
}

export default function IndustryGrid({ industries }: IndustryGridProps) {
  return (
    <section className="py-24 bg-surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group relative block h-full p-8 glass-morphism rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon container */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary-dim group-hover:text-primary transition-colors duration-500 mb-8 shadow-xl">
                  {icons[industry.icon as keyof typeof icons]}
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8 line-clamp-3">
                    {industry.description}
                  </p>

                  <div className="flex items-center gap-3 text-sm font-bold text-primary group-hover:gap-5 transition-all">
                    <span>EXPLORE SECTOR</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                  <div className="w-12 h-12 border-t-2 border-r-2 border-primary rounded-tr-xl" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
