import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, getProductsByCategory } from "@/data/product-registry";

export const metadata: Metadata = {
  title: "Products | MarKEN Healthcare",
  description:
    "Explore MarKEN's comprehensive range of medical equipment — cold chain, blood bank, hospital furniture, modular OT, and medical gas pipeline systems.",
};

export default function ProductsPage() {
  const categories = getAllCategories();

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Products</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-12">
          400+ precision-engineered healthcare products across 6 categories, trusted by 20,000+ facilities.
        </p>

        <div className="space-y-16">
          {categories.map((cat) => {
            const products = getProductsByCategory(cat.id);
            return (
              <div key={cat.id}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{cat.name}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cat.description}</p>
                  </div>
                  <Link
                    href={cat.href}
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
                  >
                    View All →
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {products.slice(0, 4).map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.category}/${product.slug}`}
                      className="group block p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all"
                    >
                      <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 text-sm">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{product.tagline}</p>
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
    </section>
  );
}
