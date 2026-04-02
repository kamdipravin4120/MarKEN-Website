"use client";

import { motion } from "framer-motion";
import { FileText, Download, FileCode, Beaker, ShieldCheck } from "lucide-react";
import type { Download as DownloadType } from "@/types";

const typeIcons: Record<string, any> = {
  brochure: FileText,
  manual: Beaker,
  certificate: ShieldCheck,
  datasheet: FileCode,
};

export default function ProductDownloads({ downloads }: { downloads: DownloadType[] }) {
  return (
    <section className="py-24 bg-[#060E20] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
            Technical Repository
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white font-manrope">
            Documentation & Downloads
          </h2>
          <div className="mt-6 w-12 h-1 bg-blue-500/30 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((download, i) => {
            const Icon = typeIcons[download.type] || FileText;
            return (
              <motion.a
                key={download.title}
                href={download.url}
                download
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  ease: [0.2, 0.8, 0.2, 1] 
                }}
                className="group glass-morphism p-6 rounded-3xl border border-white/5 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                  <Icon className="w-7 h-7 text-white/40 group-hover:text-blue-400 transition-colors duration-500" />
                </div>
                
                <div className="mt-6">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2">
                    {download.type}
                  </p>
                  <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors duration-500">
                    {download.title}
                  </h3>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] text-white/20 font-mono tracking-tighter">
                    {download.fileSize.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <Download className="w-3.5 h-3.5" />
                    Get File
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-3xl border border-dashed border-white/10 text-center"
        >
          <p className="text-white/40 text-sm">
            Looking for something else? Access our full 
            <a href="/support" className="mx-2 text-white font-bold hover:text-blue-400 transition-colors border-b border-white/20 hover:border-blue-400">knowledge center</a> 
            or request specific documentation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
