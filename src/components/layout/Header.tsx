"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navigation = [
  {
    label: "Products",
    href: "/products",
    children: [
      {
        group: "Medical Cold Chain",
        items: [
          { label: "Blood Bank Refrigerator", href: "/products/blood-bank-equipment/blood-bank-refrigerator" },
          { label: "ULT Deep Freezer (-86°C)", href: "/products/medical-cold-chain/ult-deep-freezer" },
          { label: "Ice Lined Refrigerator", href: "/products/medical-cold-chain/ice-lined-refrigerator" },
          { label: "Vaccine Refrigerator", href: "/products/medical-cold-chain/vaccine-refrigerator" },
          { label: "Walk-In Freezer", href: "/products/medical-cold-chain/walk-in-freezer" },
          { label: "View All Products →", href: "/products/medical-cold-chain" },
        ],
      },
      {
        group: "Blood Bank Equipment",
        items: [
          { label: "Refrigerated Centrifuge", href: "/products/blood-bank-equipment/refrigerated-centrifuge" },
          { label: "Platelet Incubator", href: "/products/blood-bank-equipment/platelet-incubator" },
          { label: "Plasma Thawing Bath", href: "/products/blood-bank-equipment/plasma-thawing-bath" },
          { label: "Bio Safety Cabinet", href: "/products/blood-bank-equipment/bio-safety-cabinet" },
        ],
      },
      {
        group: "Hospital Solutions",
        items: [
          { label: "ICU Beds", href: "/products/hospital-furniture/icu-beds" },
          { label: "Modular OT", href: "/products/modular-ot" },
          { label: "Medical Equipment", href: "/products/medical-equipment" },
          { label: "Medical Gas Pipeline", href: "/products/medical-gas-pipeline" },
        ],
      },
    ],
  },
  {
    label: "3D Experience",
    href: "/3d-experience",
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        group: "Sectors",
        items: [
          { label: "Blood Banks", href: "/industries/blood-banks" },
          { label: "Hospitals", href: "/industries/hospitals" },
          { label: "Laboratories", href: "/industries/laboratories" },
          { label: "Government Healthcare", href: "/industries/government-healthcare" },
        ],
      },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div 
          className={cn(
            "relative flex items-center justify-between h-16 lg:h-20 px-6 rounded-2xl transition-all duration-500 overflow-hidden",
            scrolled ? "glass-morphism luminous-glow shadow-2xl" : "bg-transparent"
          )}
        >
          {/* Subtle overlay for better legibility when scrolled */}
          {scrolled && <div className="absolute inset-0 bg-surface/20 -z-10" />}

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 bg-gradient-to-br from-primary-dim to-primary rounded-xl flex items-center justify-center text-on-primary font-display font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="text-2xl font-display font-bold text-on-surface tracking-tight">
                Mar<span className="text-primary">KEN</span>
              </span>
              <p className="text-[10px] text-on-surface-variant font-medium tracking-[0.2em] uppercase -mt-1 opacity-70">
                Healthcare Solutions
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold tracking-wide transition-all rounded-xl",
                    activeDropdown === item.label 
                      ? "text-primary bg-primary/10" 
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", activeDropdown === item.label && "rotate-180")} />
                  )}
                </Link>

                {/* Mega dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="glass-morphism rounded-3xl shadow-2xl border border-outline-variant p-8 min-w-[720px] luminous-glow">
                          <div className="grid grid-cols-3 gap-10">
                            {item.children.map((group) => (
                              <div key={group.group}>
                                <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] mb-5 opacity-70">
                                  {group.group}
                                </h4>
                                <ul className="space-y-3">
                                  {group.items.map((subItem) => (
                                    <li key={subItem.href}>
                                      <Link
                                        href={subItem.href}
                                        className="group/item flex items-center justify-between text-[14px] font-medium text-on-surface-variant hover:text-primary transition-all block"
                                      >
                                        <span>{subItem.label}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center lg:gap-4 gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <ThemeToggle />
              <button
                className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded-xl hover:bg-surface-container"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <Link
              href="/contact?type=quote"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-dim to-primary text-on-primary text-sm font-bold rounded-xl hover:scale-105 transition-all shadow-lg pulse-radiance group flex items-center gap-2"
            >
              <span>Get Quote</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40 group-hover:animate-ping" />
            </Link>

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-on-surface bg-surface-container rounded-xl"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-surface/98 backdrop-blur-2xl overflow-hidden pt-24"
          >
            <div className="px-8 space-y-8">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-3xl font-display font-bold text-on-surface hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-10 border-t border-outline-variant space-y-6">
                 <div className="flex items-center gap-4 text-on-surface-variant">
                    <Phone className="w-5 h-5" />
                    <span className="text-lg font-medium">+91 91 3030 5959</span>
                 </div>
                 <Link
                  href="/contact?type=quote"
                  className="block w-full py-5 bg-primary text-on-primary text-center text-xl font-bold rounded-2xl shadow-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
