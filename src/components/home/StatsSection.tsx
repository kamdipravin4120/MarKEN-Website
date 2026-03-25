"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Years of Innovation", description: "Trusted since 2000" },
  { value: 400, suffix: "+", label: "Products", description: "Comprehensive healthcare range" },
  { value: 20, suffix: "K+", label: "Customers Served", description: "Across India & beyond" },
  { value: 10, suffix: "+", label: "WHO PQS Products", description: "International standards" },
  { value: 500, suffix: "+", label: "Service Centers", description: "Pan-India support" },
  { value: 30, suffix: "+", label: "Franchise Partners", description: "Nationwide presence" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tabular-nums">
      {count.toLocaleString()}
      <span className="text-blue-600 dark:text-blue-400">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Trusted by India&apos;s Healthcare Leaders
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            From AIIMS to district hospitals, MarKEN equipment powers healthcare delivery at every scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{stat.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
