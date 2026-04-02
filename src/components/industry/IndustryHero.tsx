"use client";

import { motion } from "framer-motion";
import LuminousParticles from "@/components/ui/LuminousParticles";
import { Sparkles } from "lucide-react";

interface IndustryHeroProps {
  title: string;
  tagline: string;
  description: string;
}

export default function IndustryHero({ title, tagline, description }: IndustryHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-surface-base">
      <LuminousParticles count={30} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
              Sector Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-display font-bold text-on-surface mb-8 tracking-tight"
          >
            {title}
            <span className="block text-primary/80 text-3xl lg:text-4xl mt-4 font-medium italic">
              — {tagline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-on-surface-variant leading-relaxed mb-10 opacity-80"
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Decorative radiance */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
