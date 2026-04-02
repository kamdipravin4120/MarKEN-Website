"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Globe, Info, CreditCard, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

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

const socialLinks = [
  { icon: Globe, href: "#" },
  { icon: Info, href: "#" },
  { icon: CreditCard, href: "#" },
  { icon: MessageSquare, href: "#" },
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-surface relative overflow-hidden">
      {/* Visual Decor - Luminous Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      {/* CTA Section - Glass Card */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-morphism luminous-glow rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-on-surface mb-4 leading-tight">
                Advancing Healthcare <br /> Through <span className="text-primary font-display">Luminous Innovation</span>
              </h3>
              <p className="text-on-surface-variant text-lg">
                Precision-engineered medical equipment for world-class patient outcomes. 
                Experience clinical radiance in every detail.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact/get-quote"
                className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full hover:bg-white transition-all duration-300 luminous-glow flex items-center justify-center gap-2 group"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919130305959"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-surface-container-highest text-on-surface font-semibold rounded-full hover:bg-surface-bright transition-all duration-300 flex items-center justify-center gap-2"
              >
                Quick Inquiry
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Brand Identity */}
          <div className="lg:col-span-4 flex flex-col">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-dim to-secondary-container rounded-xl flex items-center justify-center luminous-glow">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-on-surface tracking-tighter">
                  Mar<span className="text-primary">KEN</span>
                </span>
                <p className="text-[10px] text-primary/60 tracking-[0.2em] font-bold uppercase -mt-1">Healthcare Solutions</p>
              </div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-on-surface-variant text-base leading-relaxed mb-8 max-w-sm">
              Global leaders in medical cold chain and critical care infrastructure. 
              Pioneering clinical precision since 1998.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-bright transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4 text-sm text-on-surface-variant">
              <a href="tel:+919130305959" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +91 91 3030 5959
              </a>
              <a href="mailto:info@markenworld.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                info@markenworld.com
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Manufacturing Hub: Nashik, <br />Maharashtra, India</span>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <motion.h4 variants={itemVariants} className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Equipment</motion.h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <Link href={link.href} className="text-on-surface-variant hover:text-on-surface transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <motion.h4 variants={itemVariants} className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Intelligence</motion.h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <Link href={link.href} className="text-on-surface-variant hover:text-on-surface transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <motion.h4 variants={itemVariants} className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Service</motion.h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <Link href={link.href} className="text-on-surface-variant hover:text-on-surface transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Meta */}
          <div className="lg:col-span-2">
            <motion.h4 variants={itemVariants} className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Legacy</motion.h4>
            <motion.div variants={itemVariants} className="bg-surface-container rounded-2xl p-4">
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Trusted by 5,000+ medical institutions globally. ISO 9001:2015 Certified Manufacturing facility.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Legal Bar - No Line */}
      <div className="bg-surface-container-low/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-on-surface-variant/60">
          <p>© {new Date().getFullYear()} MarKEN Healthcare. All architectural rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/compliance" className="hover:text-primary transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
