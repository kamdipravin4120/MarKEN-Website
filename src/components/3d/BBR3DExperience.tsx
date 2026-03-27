"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { bloodBankRefrigerator } from "@/data/products";

const Product3DViewer = dynamic(() => import("@/components/3d/Product3DViewer"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[4/3] lg:aspect-[16/10] bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium">Loading 3D Experience...</p>
      </div>
    </div>
  ),
});

const product = bloodBankRefrigerator;

export default function BBR3DExperience() {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/3d-experience" className="hover:text-blue-600 transition-colors">3D Experience</Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-200 font-medium">{product.name}</span>
        </nav>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {product.name}
            <span className="text-blue-600"> — 3D Interactive View</span>
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-2xl">
            Explore every detail of the {product.name}. Click hotspots to learn about key components, or take a guided tour through all features.
          </p>
        </div>

        {/* 3D Viewer */}
        <Product3DViewer
          hotspots={product.hotspots || []}
          productName={product.name}
          modelUrl="/models/refrigerator.glb"
        />

        {/* Below-viewer content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Hotspot legend */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Interactive Hotspots</h3>
            <div className="space-y-3">
              {product.hotspots?.map((hotspot, i) => (
                <div key={hotspot.id} className="flex gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{hotspot.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                      {hotspot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA panel */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold">Interested in this product?</h3>
            <p className="mt-2 text-blue-100">
              Get a detailed quote with specifications tailored to your facility&apos;s requirements.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href="/contact/get-quote"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors w-full"
              >
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/products/blood-bank-equipment/${product.slug}`}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors w-full"
              >
                <ArrowLeft className="w-4 h-4" />
                View Full Product Page
              </Link>
            </div>

            {/* Key specs */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {product.specifications.slice(0, 4).map((spec) => (
                <div key={spec.label}>
                  <p className="text-xs text-blue-200">{spec.label}</p>
                  <p className="text-sm font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
