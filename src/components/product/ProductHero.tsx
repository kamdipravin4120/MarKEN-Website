"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Download, Box, ChevronRight } from "lucide-react";
import type { Product } from "@/types";
import { getCategoryStyle } from "@/lib/category-styles";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1] as const,
    },
  },
};

export default function ProductHero({ product }: { product: Product }) {
  const { icon: CategoryIcon, gradient } = getCategoryStyle(product.category);
  
  return (
    <section className="relative pt-32 pb-20 bg-[#060E20] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase mb-12"
        >
          <Link href="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <Link href="/products" className="text-white/40 hover:text-white transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <Link
            href={`/products/${product.category}`}
            className="text-white/40 hover:text-white transition-colors"
          >
            {product.category.replace(/-/g, " ")}
          </Link>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-blue-400">{product.shortName}</span>
        </motion.nav>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Image gallery */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className={`aspect-square glass-morphism rounded-3xl overflow-hidden relative flex items-center justify-center p-12 group`}>
              {/* Category Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-700`} />
              
              {/* Animated Inner Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

              {/* Central Visual Element */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <CategoryIcon className="w-48 h-48 text-white/10" />
              </motion.div>
              
              {/* Certification badges */}
              <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
                {product.certifications.slice(0, 3).map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/80 rounded-lg"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {/* 3D badge */}
              {product.has3DExperience && (
                <div className="absolute top-6 right-6 px-4 py-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase rounded-full group-hover:bg-blue-500/20 transition-all duration-300 cursor-help">
                  ✦ Interative 3D
                </div>
              )}

              {/* Floating Product Tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-morphism p-4 rounded-xl border-white/5">
                   <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-1">Precision Instrument</p>
                   <p className="text-white font-medium text-sm line-clamp-1">{product.shortName || product.name}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-4">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  className={`w-20 h-20 rounded-2xl border transition-all duration-500 flex items-center justify-center group ${
                    i === 0 
                      ? "bg-blue-500/10 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <CategoryIcon className={`w-8 h-8 transition-colors ${i === 0 ? "text-blue-400" : "text-white/20 group-hover:text-white/40"}`} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div variants={itemVariants} className="pt-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                <Shield className="w-3.5 h-3.5 text-green-400" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-green-400">
                  Fully Certified
                </span>
              </div>
              <span className="text-white/20 text-xs">•</span>
              <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">
                Stock ID: {product.slug.split("-")[0].toUpperCase()}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 font-manrope">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-medium mb-8 leading-tight">
              {product.tagline}
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
              {product.description}
            </p>

            {/* Key specs preview */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {product.specifications.slice(0, 4).map((spec) => (
                <div key={spec.label} className="no-line-card p-5 group hover:bg-white/5 transition-colors">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 group-hover:text-blue-400/60 transition-colors mb-1">
                    {spec.label}
                  </p>
                  <p className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform inline-block">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact/get-quote"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Get Technical Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {product.has3DExperience && (
                <Link
                  href={`/3d-experience/${product.slug}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5 transition-all duration-300"
                >
                  <Box className="w-5 h-5 text-blue-400" />
                  3D Visualization
                </Link>
              )}
              
              <button className="p-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all group">
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Support info */}
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-6">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-[#060E20] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white/40">
                     DR
                   </div>
                 ))}
               </div>
               <p className="text-white/40 text-sm">
                 <span className="text-white font-medium">1,250+</span> clinics trust our {product.shortName || "equipment"}. 
                 <Link href="/contact" className="ml-2 text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">Speak to an advisor</Link>
               </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
