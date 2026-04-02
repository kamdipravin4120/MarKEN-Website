"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }}
          className="glass-morphism rounded-[48px] p-8 md:p-20 text-center border border-outline-variant overflow-hidden relative group"
        >
          {/* Subtle Animated Surface Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-on-surface mb-8 tracking-tight leading-[1.1]">
              Ready to Upgrade Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">Medical Infrastructure?</span>
            </h2>
            <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
              Connect with our specialist engineers today for a tailored consultation and comprehensive technical proposal.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact/get-quote"
                className="w-full sm:w-auto px-10 py-5 bg-primary text-on-primary font-bold rounded-full hover:bg-white transition-all duration-300 luminous-glow flex items-center justify-center gap-3 group/btn"
              >
                Request Technical Quote
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-4">
                <a
                  href="tel:+919130305959"
                  className="p-5 bg-surface-container-highest/50 backdrop-blur-md text-on-surface rounded-full hover:bg-surface-bright transition-all duration-300 border border-outline-variant group/link"
                  title="Call Specialist"
                >
                  <Phone className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                </a>
                <a
                  href="https://wa.me/919130305959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-surface-container-highest/50 backdrop-blur-md text-on-surface rounded-full hover:bg-surface-bright transition-all duration-300 border border-outline-variant group/link"
                  title="WhatsApp Consultation"
                >
                  <MessageCircle className="w-5 h-5 group-hover/link:scale-110 transition-transform text-primary" />
                </a>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 pt-10 border-t border-outline-variant">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">24H Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Global Standards</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
