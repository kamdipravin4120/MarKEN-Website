"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { getCategoryStyle } from "@/lib/category-styles";

export default function ProductCategories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const }
    },
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Gradient Softener */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
              Innovation Spectrum
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight tracking-tight">
              Comprehensive Healthcare <br />
              <span className="text-on-surface-variant font-medium">Infrastructure Solutions</span>
            </h2>
          </div>
          <p className="text-lg text-on-surface-variant max-w-sm leading-relaxed">
            From cold chain excellence to specialized clinical furniture — 400+ products engineered for the next era of medicine.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {productCategories.map((category) => {
            const { icon: CategoryIcon, gradient } = getCategoryStyle(category.id);
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
              >
                <Link
                  href={category.href}
                  className="group block no-line-card p-1 relative overflow-hidden h-full"
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                    {/* Visual Background Component */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <CategoryIcon className="w-20 h-20 text-on-surface/20 group-hover:scale-110 transition-transform duration-700" />
                        {/* Soft Glow Behind Icon */}
                        <div className={`absolute inset-0 blur-3xl opacity-40 bg-gradient-to-br ${gradient}`} />
                      </div>
                    </div>
                    
                    {/* Floating Product Count Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-lg glass-morphism text-[10px] font-bold text-on-surface uppercase tracking-widest border border-white/5">
                        {category.productCount} UNITS
                      </span>
                    </div>
                  </div>

                  <div className="px-5 pb-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                      <div className="p-2 rounded-lg bg-surface-container-highest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2 pr-4">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Subtle Hover Reveal Border */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/10 rounded-2xl transition-colors duration-500" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
