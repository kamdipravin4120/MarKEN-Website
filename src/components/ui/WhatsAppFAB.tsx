"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";

export default function WhatsAppFAB() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <>
            <motion.a
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              href="tel:+919130305959"
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              href="https://wa.me/919130305959?text=Hi%20MarKEN%2C%20I%27d%20like%20to%20enquire%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-green-500 text-white text-sm font-medium rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all ${
          expanded
            ? "bg-slate-800 text-white"
            : "bg-green-500 text-white hover:bg-green-600"
        }`}
      >
        {expanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
