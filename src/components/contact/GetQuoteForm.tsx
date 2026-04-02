"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle, 
  Loader2, 
  ChevronRight, 
  ChevronLeft, 
  Box, 
  ClipboardList, 
  User,
  Activity,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { productCategories } from "@/data/products";

interface GetQuoteFormProps {
  prefilledCategory?: string;
  prefilledProduct?: string;
  source?: string;
}

const steps = [
  { id: 1, title: "Inquiry", icon: Box },
  { id: 2, title: "Project", icon: ClipboardList },
  { id: 3, title: "Contact", icon: User },
];

export default function GetQuoteForm({
  prefilledCategory = "",
  prefilledProduct = "",
  source = "website",
}: GetQuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    city: "",
    category: prefilledCategory,
    product: prefilledProduct,
    quantity: "1",
    message: "",
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      nextStep();
      return;
    }
    
    setFormState("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (formState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_70%)]" />
        <div className="relative z-10">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h3 className="text-3xl font-bold text-white font-manrope">Mission Received</h3>
          <p className="mt-4 text-white/40 max-w-sm mx-auto text-lg leading-relaxed">
            Our engineering team has been notified. Expect a technical proposal within 24 standard working hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919130305959"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-500 transition-all shadow-lg shadow-green-600/20"
            >
              Express Priority Chat
            </a>
            <button
               onClick={() => {
                 setFormState("idle");
                 setCurrentStep(1);
                 setFormData({
                    name: "", email: "", phone: "", organization: "", city: "",
                    category: "", product: "", quantity: "1", message: ""
                 });
               }}
               className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10"
            >
              New Inquiry
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative">
      {/* Progress Stepper */}
      <div className="flex items-center justify-between mb-12 px-2">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = currentStep >= step.id;
          const isCurrent = currentStep === step.id;
          return (
            <div key={step.id} className="flex items-center flex-1 last:flex-none">
              <div className="relative group">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                  isActive 
                    ? "bg-blue-600 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                    : "bg-white/5 border-white/10"
                }`}>
                  <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-white" : "text-white/20 group-hover:text-white/40"}`} />
                </div>
                <div className={`absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                  isCurrent ? "text-blue-400" : "text-white/20"
                }`}>
                  {step.title}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 mx-4 h-px bg-white/5 relative overflow-hidden">
                  <motion.div 
                    initial={false}
                    animate={{ width: currentStep > step.id ? "100%" : "0%" }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 min-h-[400px]">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <label className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-4 block">
                  1. Select Medical Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {productCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, category: cat.id }))}
                      className={`p-4 rounded-xl border transition-all duration-500 text-left group overflow-hidden relative ${
                        formData.category === cat.id
                          ? "bg-blue-600/20 border-blue-500/50"
                          : "bg-white/5 border-white/5 hover:border-white/10 active:scale-95"
                      }`}
                    >
                      <span className={`text-xs font-bold font-manrope transition-colors ${formData.category === cat.id ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                        {cat.name}
                      </span>
                      {formData.category === cat.id && (
                        <div className="absolute top-0 right-0 p-1">
                          <CheckCircle className="w-3 h-3 text-blue-400" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="product" className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2 block">
                  2. Specific Product Requirement
                </label>
                <div className="relative group">
                   <Activity className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-blue-400 transition-colors" />
                   <input
                    type="text"
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 focus:bg-blue-500/5 outline-none transition-all placeholder:text-white/10"
                    placeholder="e.g. BBR-165 - Blood Bank Refrigerator"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2 block">
                    Quantity Needed
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2 block">
                    City/Location
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 outline-none transition-all"
                    placeholder="e.g. Mumbai, India"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2 block">
                  Project Notes / Custom Specs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 outline-none resize-none transition-all"
                  placeholder="Describe your facility context or specific technical needs..."
                />
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2 block">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2 block">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2 block">
                    Professional Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between items-center bg-white/5 p-4 rounded-3xl border border-white/5">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1 || formState === "submitting"}
            className="flex items-center gap-2 px-6 py-3 text-white/40 hover:text-white disabled:opacity-0 transition-all font-bold"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          
          <button
            type="submit"
            disabled={formState === "submitting" || (currentStep === 1 && !formData.product)}
            className="group relative flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-blue-600/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            {formState === "submitting" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing
              </>
            ) : (
              <>
                {currentStep === 3 ? (
                  <>
                    Complete Request
                    <Sparkles className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </>
            )}
          </button>
        </div>
      </form>
      
      <p className="mt-8 text-center text-[10px] font-bold tracking-widest uppercase text-white/20">
        Trusted by 1,250+ clinical facilities worldwide
      </p>
    </div>
  );
}
