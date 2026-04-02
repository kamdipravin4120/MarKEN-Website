"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Filter, Search, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["all", "brochure", "manual", "certificate", "datasheet"];

const mockDownloads = [
  { id: 1, title: "Blood Bank Refrigerator — BBR-01 Brochure", type: "brochure", size: "2.4 MB", date: "Mar 2024" },
  { id: 2, title: "ULT Deep Freezer Technical Manual", type: "manual", size: "5.8 MB", date: "Jan 2024" },
  { id: 3, title: "WHO PQS Quality Certificate", type: "certificate", size: "0.3 MB", date: "Dec 2023" },
  { id: 4, title: "Ice Lined Refrigerator — Datasheet", type: "datasheet", size: "1.1 MB", date: "Feb 2024" },
  { id: 5, title: "Hospital Beds Collection 2024", type: "brochure", size: "12.2 MB", date: "Mar 2024" },
  { id: 6, title: "Modular OT Maintenance Guide", type: "manual", size: "4.2 MB", date: "Nov 2023" },
];

export default function DownloadHub() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = mockDownloads.filter(d => 
    (activeCategory === "all" || d.type === activeCategory) &&
    d.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-10">
            <div>
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest mb-6 opacity-60">
                Filter by Category
              </h3>
              <div className="flex flex-wrap lg:flex-col gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-6 py-3 rounded-2xl text-sm font-bold capitalize transition-all text-left",
                      activeCategory === cat 
                        ? "bg-primary text-on-primary shadow-xl shadow-primary/20 scale-105" 
                        : "glass-morphism text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 glass-morphism rounded-3xl border border-white/5 space-y-4">
              <h4 className="font-bold text-on-surface">Need a hard copy?</h4>
              <p className="text-sm text-on-surface-variant opacity-60">
                Contact our customer support if you require printed manuals for your facility.
              </p>
              <button className="text-sm font-bold text-primary group flex items-center gap-2">
                REQUEST SUPPORT <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </aside>

          {/* Main List */}
          <div className="flex-1 space-y-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-on-surface-variant/40">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search technical documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-8 py-5 glass-morphism rounded-3xl border border-white/5 text-on-surface focus:outline-none focus:border-primary/50 transition-all placeholder:text-on-surface-variant/30"
              />
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((doc, i) => (
                  <motion.div
                    key={doc.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 glass-morphism rounded-3xl border border-white/5 hover:border-primary/30 transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <FileText className="w-7 h-7" />
                      </div>
                      
                      <div className="flex-1 text-center sm:text-left">
                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                          {doc.type}
                        </div>
                        <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                          {doc.title}
                        </h4>
                        <div className="flex items-center justify-center sm:justify-start gap-4 mt-2 text-xs text-on-surface-variant opacity-60">
                           <span>{doc.size}</span>
                           <span className="w-1 h-1 rounded-full bg-white/20" />
                           <span>Update: {doc.date}</span>
                        </div>
                      </div>

                      <button className="px-8 py-3 bg-white/5 hover:bg-primary hover:text-on-primary text-on-surface text-sm font-bold rounded-2xl transition-all flex items-center gap-2">
                        DOWNLOAD <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filtered.length === 0 && (
                <div className="text-center py-20 opacity-40">
                   <p className="text-xl font-display">No matching documents found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
