import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCategories, getProductsByCategory } from "@/data/product-registry";
import Link from "next/link";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categories = getAllCategories();
  const cat = categories.find((c) => c.id === category);
  if (!cat) return {};
  return {
    title: `${cat.name} | MarKEN Healthcare`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categories = getAllCategories();
  const cat = categories.find((c) => c.id === category);
  if (!cat) notFound();

  const products = getProductsByCategory(category);

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 dark:text-slate-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">{cat.name}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{cat.name}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-12">{cat.description}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.category}/${product.slug}`}
              className="group block bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-30">🔬</span>
                </div>
                {product.has3DExperience && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    3D
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {product.shortName || product.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  {product.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.certifications.slice(0, 3).map((cert) => (
                    <span key={cert} className="text-xs bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 py-12">
            Products coming soon. Contact us for details.
          </p>
        )}
      </div>
    </section>
  );
}
