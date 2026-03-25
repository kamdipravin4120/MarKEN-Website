"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Search } from "lucide-react";
import { cn } from "@/lib/utils";

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
          { label: "View All →", href: "/products/medical-cold-chain" },
        ],
      },
      {
        group: "Blood Bank Equipment",
        items: [
          { label: "Refrigerated Centrifuge", href: "/products/blood-bank-equipment/refrigerated-centrifuge" },
          { label: "Platelet Incubator", href: "/products/blood-bank-equipment/platelet-incubator" },
          { label: "Plasma Thawing Bath", href: "/products/blood-bank-equipment/plasma-thawing-bath" },
          { label: "Bio Safety Cabinet", href: "/products/blood-bank-equipment/bio-safety-cabinet" },
          { label: "View All →", href: "/products/blood-bank-equipment" },
        ],
      },
      {
        group: "Hospital Solutions",
        items: [
          { label: "ICU Beds", href: "/products/hospital-furniture/icu-beds" },
          { label: "Modular OT", href: "/products/modular-ot" },
          { label: "Medical Equipment", href: "/products/medical-equipment" },
          { label: "Medical Gas Pipeline", href: "/products/medical-gas-pipeline" },
          { label: "View All Products →", href: "/products" },
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
  { label: "About", href: "/about/company" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      {/* Top bar */}
      <div className="hidden lg:block bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span>25+ Years of Healthcare Innovation</span>
            <span className="text-slate-400">|</span>
            <span>WHO PQS • CE • USFDA • ISO 13485</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919130305959" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              <Phone className="w-3 h-3" />
              +91 91 3030 5959
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Mar<span className="text-blue-600">KEN</span>
              </span>
              <p className="text-[10px] text-slate-500 -mt-1 leading-none tracking-wide">
                HEALTHCARE SOLUTIONS
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
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
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors rounded-md",
                    activeDropdown === item.label && "text-blue-600"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Mega dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 min-w-[600px]">
                          <div className="grid grid-cols-3 gap-6">
                            {item.children.map((group) => (
                              <div key={group.group}>
                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                  {group.group}
                                </h4>
                                <ul className="space-y-1.5">
                                  {group.items.map((subItem) => (
                                    <li key={subItem.href}>
                                      <Link
                                        href={subItem.href}
                                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors block py-0.5"
                                      >
                                        {subItem.label}
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
          <div className="flex items-center gap-3">
            <button
              className="p-2 text-slate-500 hover:text-blue-600 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/contact/get-quote"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get Quote
            </Link>
            <button
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-base font-medium text-slate-700 py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact/get-quote"
                className="block w-full text-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
