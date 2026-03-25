"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Download, Box } from "lucide-react";
import type { Product } from "@/types";

export default function ProductHero({ product }: { product: Product }) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <span>/</span>
          <Link
            href={`/products/${product.category}`}
            className="hover:text-blue-600 transition-colors capitalize"
          >
            {product.category.replace(/-/g, " ")}
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-medium">{product.shortName}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden relative">
              {/* Placeholder for product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-64 bg-gradient-to-b from-slate-300 to-slate-400 rounded-xl shadow-xl" />
              </div>
              {/* Certification badge */}
              <div className="absolute top-4 left-4 flex gap-2">
                {product.certifications.slice(0, 3).map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-md shadow-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            {/* Thumbnail strip */}
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  className="w-16 h-16 bg-slate-100 rounded-lg border-2 border-transparent hover:border-blue-500 transition-colors shrink-0"
                />
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">
                {product.certifications.join(" • ")}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-blue-600 font-medium">{product.tagline}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>

            {/* Key specs preview */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {product.specifications.slice(0, 4).map((spec) => (
                <div key={spec.label} className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-400 font-medium">{spec.label}</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact/get-quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              {product.has3DExperience && (
                <Link
                  href={`/3d-experience/${product.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <Box className="w-4 h-4" />
                  View in 3D
                </Link>
              )}
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                <Download className="w-4 h-4" />
                Brochure
              </button>
            </div>

            {/* Quick contact */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Need help choosing?</span> Call{" "}
                <a href="tel:+919130305959" className="underline font-semibold">
                  +91 91 3030 5959
                </a>{" "}
                or{" "}
                <a
                  href="https://wa.me/919130305959"
                  className="underline font-semibold text-green-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp us
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
