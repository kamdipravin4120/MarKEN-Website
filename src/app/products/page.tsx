import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, getProductsByCategory } from "@/data/product-registry";
import type { ProductCategory } from "@/types";

export const metadata: Metadata = {
  title: "Products | MarKEN Healthcare",
  description:
    "Explore MarKEN's comprehensive range of medical equipment — cold chain, blood bank, hospital furniture, modular OT, and medical gas pipeline systems.",
};

const CATEGORY_CONFIG: Record<
  ProductCategory,
  { icon: string; accent: string; border: string; badge: string; heading: string }
> = {
  "medical-cold-chain": {
    icon: "❄️",
    accent: "bg-blue-600",
    border: "border-l-blue-500",
    badge: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300",
    heading: "text-blue-700 dark:text-blue-400",
  },
  "blood-bank-equipment": {
    icon: "🩸",
    accent: "bg-red-600",
    border: "border-l-red-500",
    badge: "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300",
    heading: "text-red-700 dark:text-red-400",
  },
  "hospital-furniture": {
    icon: "🛏️",
    accent: "bg-emerald-600",
    border: "border-l-emerald-500",
    badge: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    heading: "text-emerald-700 dark:text-emerald-400",
  },
  "medical-equipment": {
    icon: "🔬",
    accent: "bg-violet-600",
    border: "border-l-violet-500",
    badge: "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300",
    heading: "text-violet-700 dark:text-violet-400",
  },
  "modular-ot": {
    icon: "🏥",
    accent: "bg-amber-600",
    border: "border-l-amber-500",
    badge: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300",
    heading: "text-amber-700 dark:text-amber-500",
  },
  "medical-gas-pipeline": {
    icon: "💨",
    accent: "bg-sky-600",
    border: "border-l-sky-500",
    badge: "bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300",
    heading: "text-sky-700 dark:text-sky-400",
  },
};

export default function ProductsPage() {
  const categories = getAllCategories();

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Page hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Our Products</h1>
          <p className="mt-3 text-lg text-slate-300 max-w-3xl">
            400+ precision-engineered healthcare products across 6 categories, trusted by 20,000+
            facilities.
          </p>
        </div>
      </div>

      {/* Category sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {categories.map((cat) => {
            const products = getProductsByCategory(cat.id);
            const cfg = CATEGORY_CONFIG[cat.id] ?? CATEGORY_CONFIG["medical-equipment"];

            return (
              <div key={cat.id}>
                {/* Category heading */}
                <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${cfg.accent} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}
                    >
                      {cfg.icon}
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${cfg.heading}`}>{cat.name}</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={cat.href}
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap mt-1"
                  >
                    View All →
                  </Link>
                </div>

                {/* Product cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {products.slice(0, 4).map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.category}/${product.slug}`}
                      className={`group block p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 ${cfg.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
                    >
                      <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 text-sm leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {product.tagline}
                      </p>
                      {product.certifications.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {product.certifications.slice(0, 2).map((cert) => (
                            <span
                              key={cert}
                              className={`text-xs ${cfg.badge} px-1.5 py-0.5 rounded-full font-medium`}
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>

                {products.length === 0 && (
                  <p className="text-sm text-slate-400 dark:text-slate-500">
                    Products coming soon.{" "}
                    <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Contact us
                    </Link>{" "}
                    for details.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
