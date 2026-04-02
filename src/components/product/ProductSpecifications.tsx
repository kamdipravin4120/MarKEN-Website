"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info } from "lucide-react";
import type { Product } from "@/types";

export default function ProductSpecifications({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.id);
  const variant = product.variants.find((v) => v.id === selectedVariant);

  return (
    <section className="py-24 bg-[#060E20] relative" id="specifications">
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
            Technical Matrix
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white font-manrope">
            Specifications & Models
          </h2>
          <div className="mt-6 w-12 h-1 bg-blue-500/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Variant selector */}
          <div className="lg:col-span-1">
             <div className="sticky top-32">
              <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Info className="w-3 h-3" />
                Select Configuration
              </h3>
              <div className="space-y-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                      selectedVariant === v.id
                        ? "bg-blue-600/10 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                        : "bg-white/[0.02] border border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="relative z-10 flex justify-between items-start">
                      <div>
                        <p className={`font-bold transition-colors duration-500 ${selectedVariant === v.id ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                          {v.model}
                        </p>
                        <p className={`text-xs mt-1 transition-colors duration-500 ${selectedVariant === v.id ? "text-blue-400" : "text-white/30"}`}>
                          {v.capacity}
                        </p>
                      </div>
                      {selectedVariant === v.id && (
                        <motion.div 
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1 }}
                          className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
                        >
                          <Check className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                    {/* Active Background Glow */}
                    {selectedVariant === v.id && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent" />
                    )}
                  </button>
                ))}
              </div>
             </div>
          </div>

          {/* Specifications display */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVariant}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="glass-morphism rounded-3xl overflow-hidden border-white/5"
              >
                {/* Variant Header */}
                <div className="p-8 bg-white/[0.03] border-b border-white/5">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white font-manrope">
                        {variant?.model} Technical Data
                      </h3>
                      <p className="text-white/40 text-sm mt-2 flex items-center gap-4">
                        <span>Dimensions: <span className="text-white/70 font-medium">{variant?.dimensions}</span></span>
                        <span className="w-px h-3 bg-white/10" />
                        <span>Weight: <span className="text-white/70 font-medium">{variant?.weight}</span></span>
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 text-xs font-bold uppercase tracking-widest">
                      {variant?.capacity}
                    </div>
                  </div>
                </div>

                {/* Specs Table */}
                <div className="grid md:grid-cols-2">
                  <div className="divide-y divide-white/5 border-r border-white/5">
                    {product.specifications.slice(0, Math.ceil(product.specifications.length / 2)).map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between px-8 py-5 hover:bg-white/[0.02] transition-colors">
                        <span className="text-sm text-white/40 font-medium">{spec.label}</span>
                        <span className="text-sm font-bold text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="divide-y divide-white/5">
                    {product.specifications.slice(Math.ceil(product.specifications.length / 2)).map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between px-8 py-5 hover:bg-white/[0.02] transition-colors">
                        <span className="text-sm text-white/40 font-medium">{spec.label}</span>
                        <span className="text-sm font-bold text-white">{spec.value}</span>
                      </div>
                    ))}
                    {/* Variant Specific Added Rows if any */}
                    {variant?.specs.map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between px-8 py-5 bg-blue-500/[0.03] hover:bg-blue-500/[0.06] transition-colors">
                        <span className="text-sm text-blue-400/60 font-medium">{spec.label}</span>
                        <span className="text-sm font-bold text-blue-400">
                          {spec.value} {spec.unit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Global Comparison Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-bold text-white font-manrope">Fleet Comparison</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">Model</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">Internal Vol</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">Storage Prep</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">Footprint</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">Efficiency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {product.variants.map((v) => {
                      const bags = v.specs.find((s) => s.label === "Blood Bag Storage");
                      const power = v.specs.find((s) => s.label === "Power Consumption");
                      return (
                        <tr
                          key={v.id}
                          className="group hover:bg-white/[0.03] transition-all duration-300"
                        >
                          <td className="px-6 py-5">
                            <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{v.model}</p>
                            <p className="text-[10px] text-white/20 uppercase tracking-tighter mt-0.5">{product.shortName}</p>
                          </td>
                          <td className="px-6 py-5 text-sm text-white/60 font-medium">{v.capacity}</td>
                          <td className="px-6 py-5">
                             <span className="text-sm text-white/60 font-bold">{bags?.value}</span>
                             <span className="text-[10px] text-white/20 ml-1 uppercase">{bags?.unit}</span>
                          </td>
                          <td className="px-6 py-5 text-sm text-white/40">{v.dimensions}</td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-green-400/80">{power?.value} <span className="text-[10px] font-medium uppercase">{power?.unit}</span></span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
