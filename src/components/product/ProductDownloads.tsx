"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import type { Download as DownloadType } from "@/types";

const typeColors: Record<string, string> = {
  brochure: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
  manual: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",
  certificate: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
  datasheet: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400",
};

export default function ProductDownloads({ downloads }: { downloads: DownloadType[] }) {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Downloads
          </span>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            Technical Documents
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {downloads.map((download, i) => (
            <motion.a
              key={download.title}
              href={download.url}
              download
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors">
                <FileText className="w-6 h-6 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-200 text-center line-clamp-2">
                {download.title}
              </p>
              <span
                className={`mt-2 text-xs font-medium px-2 py-0.5 rounded-full capitalize ${
                  typeColors[download.type]
                }`}
              >
                {download.type}
              </span>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{download.fileSize}</p>
              <div className="mt-3 flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <Download className="w-3 h-3" />
                Download
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
