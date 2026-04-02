"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Beaker } from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.2, 0.8, 0.2, 1] as const
      }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface -mt-28 lg:-mt-36">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4" />
        
        {/* Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high/50 backdrop-blur-md rounded-full mb-8 w-fit border border-outline-variant"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Pioneering Clinical Radiance</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-on-surface leading-[1.1] tracking-tight mb-8"
            >
              Visionary <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                Medical Precision
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10"
            >
              Engineered for absolute reliability. MarKEN defines the next era of healthcare infrastructure with intelligent cold chain and critical care solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/products"
                className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full hover:bg-white transition-all duration-300 luminous-glow flex items-center justify-center gap-3 group"
              >
                Discover Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/3d-experience/blood-bank-refrigerator"
                className="px-8 py-4 bg-surface-container-highest/50 backdrop-blur-md text-on-surface font-semibold rounded-full hover:bg-surface-bright transition-all duration-300 flex items-center justify-center gap-3 border border-outline-variant"
              >
                <Zap className="w-5 h-5 text-tertiary" />
                3D Experience
              </Link>
            </motion.div>

            {/* Verification Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-outline-variant"
            >
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-on-surface font-display tracking-tight">25+</span>
                <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Years of Trust</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-on-surface font-display tracking-tight">400+</span>
                <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Global Assets</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-tertiary" />
                  <span className="text-xs font-bold text-on-surface uppercase tracking-widest leading-none">WHO Prequalified</span>
                </div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Certified Excellence</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Column - The Luminous Lab Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] as const }}
            className="relative lg:block"
          >
            <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
              {/* Dynamic Glow Background */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 aspect-square max-w-lg bg-primary/20 rounded-full blur-[120px] opacity-60" />
              
              <div className="relative z-10 w-full h-full max-w-2xl transform lg:scale-110">
                <Hero3DCanvas />
                
                {/* Floating Micro-UI element */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-[20%] right-[10%] p-4 bg-surface/80 backdrop-blur-xl rounded-2xl border border-outline-variant shadow-2xl z-20 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Efficiency</span>
                    <span className="text-sm font-bold text-on-surface">Ultra-Low Power</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="absolute top-[30%] left-[5%] p-4 bg-surface/80 backdrop-blur-xl rounded-2xl border border-outline-variant shadow-2xl z-20 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Beaker className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Precision</span>
                    <span className="text-sm font-bold text-on-surface">Digital Control</span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative rings */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/10 rounded-full border-dashed scale-75 opacity-30"
              />
              <motion.div 
                animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border border-tertiary/10 rounded-[60px] border-dashed scale-90 opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
