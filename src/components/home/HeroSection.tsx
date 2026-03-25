"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Award, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-400/20 dark:text-blue-300 rounded-full text-sm mb-6"
            >
              <Shield className="w-4 h-4" />
              WHO PQS Prequalified • USFDA • CE • ISO 13485
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
            >
              Precision-Engineered
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                Healthcare Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed"
            >
              India&apos;s trusted manufacturer of medical cold chain, blood bank equipment, and hospital infrastructure. Serving 20,000+ healthcare facilities across the nation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 dark:shadow-blue-600/30"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/3d-experience/blood-bank-refrigerator"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10 transition-all"
              >
                3D Experience
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8 text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>25+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>400+ Products</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>10+ WHO PQS</span>
              </div>
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl blur-xl" />

              {/* Product showcase card */}
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none rounded-3xl p-8 h-full flex flex-col items-center justify-center">
                {/* Placeholder for product image/3D preview */}
                <div className="w-48 h-64 bg-gradient-to-b from-slate-300 to-slate-400 rounded-xl shadow-2xl relative">
                  {/* Simplified refrigerator illustration */}
                  <div className="absolute inset-2 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-slate-700 rounded-full" />
                    <div className="absolute top-6 inset-x-3 bottom-3 bg-white/60 rounded border border-blue-300/30">
                      {/* Shelf lines */}
                      <div className="absolute top-1/4 inset-x-1 h-px bg-slate-300" />
                      <div className="absolute top-2/4 inset-x-1 h-px bg-slate-300" />
                      <div className="absolute top-3/4 inset-x-1 h-px bg-slate-300" />
                    </div>
                  </div>
                  {/* Temperature display */}
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                    +4°C
                  </div>
                </div>

                <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 text-center">
                  Blood Bank Refrigerator
                  <br />
                  <span className="text-blue-500 dark:text-blue-400 font-medium">Explore in 3D →</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
