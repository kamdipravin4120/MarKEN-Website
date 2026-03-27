import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCategories, getProductsByCategory } from "@/data/product-registry";
import Link from "next/link";
import { getCategoryStyle } from "@/lib/category-styles";

interface Props {
  params: Promise<{ category: string }>;
}

const HERO_GRADIENT: Record<string, string> = {
  "medical-cold-chain": "from-slate-900 via-blue-900 to-slate-800",
  "blood-bank-equipment": "from-slate-900 via-red-900 to-slate-800",
  "hospital-furniture": "from-slate-900 via-emerald-900 to-slate-800",
  "medical-equipment": "from-slate-900 via-violet-900 to-slate-800",
  "modular-ot": "from-slate-900 via-amber-900 to-slate-800",
  "medical-gas-pipeline": "from-slate-900 via-sky-900 to-slate-800",
};

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
  const heroGradient = HERO_GRADIENT[category] ?? "from-slate-900 via-blue-900 to-slate-800";
  const { icon: CategoryIcon } = getCategoryStyle(category);

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Dark gradient page hero */}
      <div className={`bg-gradient-to-br ${heroGradient} text-white py-16 lg:py-20`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-200">{cat.name}</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
              <CategoryIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{cat.name}</h1>
              <p className="mt-1 text-lg text-slate-300 max-w-3xl">{cat.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const { icon: ProductIcon, gradient } = getCategoryStyle(product.category);
            return (
              <Link
                key={product.id}
                href={`/products/${product.category}/${product.slug}`}
                className="group block bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center`}
                >
                  <ProductIcon className="w-20 h-20 text-white/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {product.has3DExperience && (
                    <span className="absolute top-3 right-3 bg-white text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-lg ring-2 ring-white/50">
                      ✦ 3D
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {product.shortName || product.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                    {product.tagline}
                  </p>
                  {product.certifications.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.certifications.slice(0, 3).map((cert) => (
                        <span
                          key={cert}
                          className="text-xs bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium border border-blue-100 dark:border-blue-500/20"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {products.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 py-12">
            Products coming soon.{" "}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              Contact us
            </Link>{" "}
            for details.
          </p>
        )}
      </div>
    </div>
  );
}
