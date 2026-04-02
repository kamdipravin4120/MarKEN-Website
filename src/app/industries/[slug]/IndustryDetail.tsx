"use client";

import { motion } from "framer-motion";
import IndustryHero from "@/components/industry/IndustryHero";
import LuminousParticles from "@/components/ui/LuminousParticles";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Industry, Product } from "@/types";

interface IndustryDetailProps {
  industry: Industry;
  products: Product[];
}

export default function IndustryDetail({ industry, products }: IndustryDetailProps) {
  return (
    <main className="min-h-screen bg-surface-base pt-32">
      <IndustryHero 
        title={industry.name} 
        tagline={industry.tagline} 
        description={industry.description} 
      />

      {/* Stats section */}
      <section className="py-12 bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industry.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass-morphism rounded-2xl text-center"
              >
                <div className="text-3xl font-display font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest opacity-60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-on-surface mb-6">
                Why Industry Leaders Choose <span className="text-primary">MarKEN</span>
              </h2>
              <p className="text-lg text-on-surface-variant mb-12 opacity-80">
                Tailored performance, validated safety, and a clinical-first approach to infrastructure.
              </p>

              <div className="space-y-6">
                {industry.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 glass-morphism-light rounded-2xl group border border-white/5 active:bg-white/5 transition-all"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed opacity-70">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[2rem] overflow-hidden glass-morphism p-[1px] border border-outline-variant shadow-2xl group flex items-center justify-center">
                <div className="absolute inset-0 bg-surface-container-high/40 rounded-[2rem] overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-60" />
                  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-40" />
                  <LuminousParticles count={15} color="var(--color-primary)" size={[1, 3]} speed={0.5} />
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative z-10 w-[70%] h-[70%] bg-surface-container-highest rounded-2xl border border-outline-variant shadow-inner p-8 flex flex-col justify-end gap-4 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="w-12 h-1 bg-primary/40 rounded-full mb-auto" />
                  <div className="space-y-4">
                    <div className="h-4 w-[90%] bg-on-surface/5 rounded-full" />
                    <div className="h-4 w-[60%] bg-on-surface/5 rounded-full" />
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="w-8 h-8 rounded-full border border-primary/20" />
                    <div className="w-16 h-4 bg-tertiary/10 rounded-full" />
                  </div>
                </motion.div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-[60px] animate-pulse -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Recommended products */}
      <section className="py-24 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-display font-bold text-on-surface mb-4">
                Recommended Solutions
              </h2>
              <p className="text-on-surface-variant opacity-70">
                Curated equipment for your specific operational needs.
              </p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary hover:gap-4 transition-all">
              VIEW ALL PRODUCTS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 glass-morphism rounded-3xl border border-white/5 hover:border-primary/30 transition-all overflow-hidden"
              >
                <div className="aspect-video rounded-2xl bg-surface-container-high mb-6 overflow-hidden relative group-hover:scale-[1.02] transition-all duration-700 p-8 flex items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5" />
                   {/* Minimalist Abstract Product Shape */}
                   <div className="w-24 h-32 bg-surface-container-highest rounded-xl border border-outline-variant shadow-lg relative group-hover:shadow-[0_0_30px_-5px_rgba(167,165,255,0.3)] transition-all">
                      <div className="absolute top-4 inset-x-4 h-px bg-white/5" />
                      <div className="absolute bottom-4 right-4 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      </div>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 opacity-60">
                  {product.tagline}
                </p>
                <Link 
                  href={`/products/${product.category}/${product.slug}`}
                  className="flex items-center gap-2 text-sm font-bold text-primary group/link"
                >
                  VIEW SPECS <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
