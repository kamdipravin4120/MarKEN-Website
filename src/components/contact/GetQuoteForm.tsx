"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { productCategories } from "@/data/products";

interface GetQuoteFormProps {
  prefilledCategory?: string;
  prefilledProduct?: string;
  source?: string;
}

export default function GetQuoteForm({
  prefilledCategory = "",
  prefilledProduct = "",
  source = "website",
}: GetQuoteFormProps) {
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate API call — replace with actual HubSpot/API integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Quote Request Received!</h3>
        <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Our sales team will get back to you within 24 hours with a customized proposal.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/919130305959"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-lg"
          >
            Chat on WhatsApp
          </a>
          <a
            href="/resources/brochures"
            className="px-5 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg"
          >
            Download Brochures
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Dr. John Doe"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="City Hospital"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="john@hospital.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          >
            <option value="">Select category</option>
            {productCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Product
          </label>
          <input
            type="text"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="e.g. Blood Bank Refrigerator"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Mumbai"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Additional Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-colors"
          placeholder="Tell us about your requirements, quantity needed, timeline..."
        />
      </div>

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-lg shadow-blue-600/25"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit Quote Request
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
        We typically respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}
