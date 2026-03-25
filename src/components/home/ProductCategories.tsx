"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";

export default function ProductCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Our Range
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            From cold chain infrastructure to hospital furniture — 400+ products engineered for Indian healthcare.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={category.href}
                className="group block bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-white/80 font-medium">
                      {category.productCount} products
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    View Products <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
