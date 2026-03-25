"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/types";

export default function ProductSpecifications({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.id);
  const variant = product.variants.find((v) => v.id === selectedVariant);

  return (
    <section className="py-20 bg-slate-50" id="specifications">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Specifications
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Technical Details
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Variant selector */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Select Model
            </h3>
            <div className="space-y-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedVariant === v.id
                      ? "border-blue-600 bg-blue-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  <p className="font-bold text-slate-900">{v.model}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{v.capacity}</p>
                  {v.specs.map((s) => (
                    <p key={s.label} className="text-xs text-slate-400 mt-0.5">
                      {s.label}: {s.value} {s.unit}
                    </p>
                  ))}
                </button>
              ))}
            </div>
          </div>

          {/* Specifications table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="p-6 bg-slate-900 text-white">
                <h3 className="text-lg font-bold">
                  {variant?.model} — {variant?.capacity}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Dimensions: {variant?.dimensions} • Weight: {variant?.weight}
                </p>
              </div>
              <div className="divide-y divide-slate-100">
                {product.specifications.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-6 py-3.5 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <span className="text-sm text-slate-500">{spec.label}</span>
                    <span className="text-sm font-semibold text-slate-800">
                      {spec.value}
                    </span>
                  </div>
                ))}
                {/* Variant-specific specs */}
                {variant?.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-6 py-3.5 ${
                      (product.specifications.length + i) % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50/50"
                    }`}
                  >
                    <span className="text-sm text-slate-500">{spec.label}</span>
                    <span className="text-sm font-semibold text-blue-600">
                      {spec.value} {spec.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table (all variants) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6">Compare Models</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Model</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Capacity</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Blood Bags</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Dimensions</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Weight</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Power</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {product.variants.map((v, i) => {
                  const bags = v.specs.find((s) => s.label === "Blood Bag Storage");
                  const power = v.specs.find((s) => s.label === "Power Consumption");
                  return (
                    <tr
                      key={v.id}
                      className={`${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      } hover:bg-blue-50/50 transition-colors`}
                    >
                      <td className="px-4 py-3 text-sm font-bold text-slate-900">
                        {v.model}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-600">{v.capacity}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">
                        {bags?.value} {bags?.unit}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-600">{v.dimensions}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{v.weight}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">
                        {power?.value} {power?.unit}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
