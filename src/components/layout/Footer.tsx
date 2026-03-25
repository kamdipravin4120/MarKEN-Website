import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Blood Bank Refrigerator", href: "/products/blood-bank-equipment/blood-bank-refrigerator" },
    { label: "ULT Deep Freezer", href: "/products/medical-cold-chain/ult-deep-freezer" },
    { label: "Ice Lined Refrigerator", href: "/products/medical-cold-chain/ice-lined-refrigerator" },
    { label: "Hospital Furniture", href: "/products/hospital-furniture" },
    { label: "Modular OT", href: "/products/modular-ot" },
    { label: "All Products", href: "/products" },
  ],
  company: [
    { label: "About Us", href: "/about/company" },
    { label: "Manufacturing", href: "/about/manufacturing" },
    { label: "Certifications", href: "/about/certifications" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/about/careers" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Get Quote", href: "/contact/get-quote" },
    { label: "Find a Dealer", href: "/contact/find-dealer" },
    { label: "Service Request", href: "/contact/service-request" },
    { label: "Resources", href: "/resources" },
    { label: "Downloads", href: "/resources/brochures" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Ready to upgrade your healthcare facility?
            </h3>
            <p className="text-blue-100 mt-1">
              Get a customized quote for your requirements within 24 hours.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact/get-quote"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Quote
            </Link>
            <a
              href="https://wa.me/919130305959?text=Hi%20MarKEN%2C%20I%27d%20like%20to%20enquire%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Mar<span className="text-blue-400">KEN</span>
                </span>
                <p className="text-[10px] text-slate-500 -mt-1 tracking-wide">HEALTHCARE SOLUTIONS</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-sm">
              India&apos;s trusted manufacturer of medical cold chain equipment, blood bank solutions, and hospital infrastructure. 25+ years of healthcare innovation.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+919130305959" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-500" /> +91 91 3030 5959
              </a>
              <a href="mailto:info@markenworld.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-500" /> info@markenworld.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <span>Factory: Nashik, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MarKEN. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
