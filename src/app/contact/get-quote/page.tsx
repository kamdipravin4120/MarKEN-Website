import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GetQuoteForm from "@/components/contact/GetQuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote — Medical Equipment",
  description:
    "Request a customized quote for MarKEN medical equipment. Blood bank refrigerators, cold chain solutions, hospital furniture. Response within 24 hours.",
};

export default function GetQuotePage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Get a Quote</h1>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Tell us about your requirements and our team will get back to you within 24 hours with a customized proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
            <GetQuoteForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm">
                <a href="tel:+919130305959" className="flex items-start gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">+91 91 3030 5959</p>
                    <p className="text-xs text-slate-400">Sales enquiries</p>
                  </div>
                </a>
                <a href="mailto:info@markenworld.com" className="flex items-start gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">info@markenworld.com</p>
                    <p className="text-xs text-slate-400">General enquiries</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Factory: Nashik, Maharashtra</p>
                    <p className="text-xs text-slate-400">Sales Office: Noida, UP</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-600">
                  <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Mon – Sat, 9 AM – 6 PM IST</p>
                    <p className="text-xs text-slate-400">24hr response guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Prefer WhatsApp?</h3>
              <p className="text-sm text-green-100 mb-4">
                Chat with our sales team instantly.
              </p>
              <a
                href="https://wa.me/919130305959?text=Hi%20MarKEN%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20medical%20equipment"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2.5 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900 mb-3">Why Choose MarKEN?</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  25+ years of manufacturing expertise
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  WHO PQS, CE, USFDA certified
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  500+ service centers pan-India
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  AIIMS, ICMR, and government trusted
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
