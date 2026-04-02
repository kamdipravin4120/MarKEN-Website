"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { FAQ } from "@/types";

function FAQItem({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`no-line-card overflow-hidden transition-all duration-500 ${isOpen ? "bg-white/[0.04] ring-1 ring-white/10" : "hover:bg-white/[0.02]"}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-blue-500 text-white" : "bg-white/5 text-white/20 group-hover:text-white/40"}`}>
            <HelpCircle className="w-4 h-4" />
          </div>
          <span className={`text-sm font-bold font-manrope transition-colors duration-500 ${isOpen ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
            {faq.question}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-white/10 rotate-180" : "bg-transparent"}`}>
          <ChevronDown
            className={`w-4 h-4 transition-colors ${
              isOpen ? "text-blue-400" : "text-white/20"
            }`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
                opacity: { duration: 0.25, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] },
                opacity: { duration: 0.2 }
              }
            }}
          >
            <div className="px-6 pb-6 pl-14 pr-12 text-sm text-white/40 leading-relaxed">
              <div className="pt-2 border-t border-white/5">
                {faq.answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#060E20] relative">
      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-blue-500/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
            Information Hub
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white font-manrope">
            Common Inquiries
          </h2>
          <div className="mt-6 w-12 h-1 bg-blue-500/30 mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Support link */}
        <div className="mt-16 text-center">
          <p className="text-white/20 text-xs text-center flex flex-col items-center gap-2">
            Still have technical questions? 
            <button className="text-white/60 hover:text-blue-400 font-bold transition-all underline underline-offset-4">
              Consult our engineering team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
