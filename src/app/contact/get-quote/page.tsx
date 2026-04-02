"use client";

import { Phone, Mail, ShieldCheck, Award, Microscope, Globe } from "lucide-react";
import GetQuoteForm from "@/components/contact/GetQuoteForm";
import LuminousParticles from "@/components/ui/LuminousParticles";
import { motion } from "framer-motion";

export default function GetQuotePage() {
  return (
    <main className="min-h-screen bg-[#060E20] pt-28 pb-20 relative overflow-hidden">
      {/* Ambient backgrounds */}
      <LuminousParticles count={30} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
              Operational Interface
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white font-manrope">
              Laboratory Quote System
            </h1>
            <p className="mt-6 text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
              Configure your clinical hardware requirements and receive a precision-engineered technical proposal within 24 hours.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Form Area */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rounded-full" />
            
            <GetQuoteForm />
          </motion.div>

          {/* Collateral Info / Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Contact Card */}
            <div className="no-line-card p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white/60 mb-6 uppercase tracking-widest">
                Protocol Channels
              </h3>
              <div className="space-y-6">
                <a href="tel:+919130305959" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white font-bold transition-colors group-hover:text-blue-400">+91 91 3030 5959</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-tighter">Global Sales Inquiries</p>
                  </div>
                </a>
                
                <a href="mailto:info@markenworld.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white font-bold transition-colors group-hover:text-blue-400">info@markenworld.com</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-tighter">Engineering Support</p>
                  </div>
                </a>
              </div>

              {/* WhatsApp Callout */}
              <div className="mt-10 p-6 rounded-2xl bg-green-500/10 border border-green-500/20 group cursor-pointer hover:bg-green-500/20 transition-all">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                   </div>
                   <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Fast-track Response</span>
                </div>
                <p className="text-xs text-white/40 mb-4 leading-relaxed italic">
                  &quot;Initiate direct encrypted session with our technical team via WhatsApp for instant documentation sharing.&quot;
                </p>
                <a
                  href="https://wa.me/919130305959?text=Hi%20MarKEN%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20medical%20equipment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-green-400 transition-colors"
                >
                  Open WhatsApp Protocol <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Certifications / Trust Footprint */}
            <div className="p-4 grid grid-cols-2 gap-4">
               <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <ShieldCheck className="w-6 h-6 text-blue-400/60 mb-2" />
                  <span className="text-[8px] font-bold text-white/20 uppercase">WHO PQS Certified</span>
               </div>
               <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <Award className="w-6 h-6 text-blue-400/60 mb-2" />
                  <span className="text-[8px] font-bold text-white/20 uppercase">USFDA Compliant</span>
               </div>
               <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <Microscope className="w-6 h-6 text-blue-400/60 mb-2" />
                  <span className="text-[8px] font-bold text-white/20 uppercase">NABL Accredited</span>
               </div>
               <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <Globe className="w-6 h-6 text-blue-400/60 mb-2" />
                  <span className="text-[8px] font-bold text-white/20 uppercase">Export Ready</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
