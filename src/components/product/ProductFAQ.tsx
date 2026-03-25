"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/types";

function FAQItem({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {faq.answer}
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
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
