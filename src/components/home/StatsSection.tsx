"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Years of Innovation", description: "Trusted since 2000" },
  { value: 400, suffix: "+", label: "Global Products", description: "Comprehensive range" },
  { value: 20, suffix: "K+", label: "Healthcare Assets", description: "Installed nationwide" },
  { value: 10, suffix: "+", label: "WHO PQS Certified", description: "International standard" },
  { value: 500, suffix: "+", label: "Support Nodes", description: "24/7 Pan-India service" },
  { value: 30, suffix: "+", label: "Strategic Partners", description: "Nationwide presence" },
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
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-on-surface font-display tracking-tight tabular-nums">
      {count.toLocaleString()}
      <span className="text-primary ml-1">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-surface py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const }}
          className="bg-surface-container-low rounded-[40px] p-8 md:p-16 border border-outline-variant relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-y-12 gap-x-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 relative">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="absolute -inset-4 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 blur-xl" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">{stat.label}</h3>
                  <p className="text-[11px] text-on-surface-variant font-medium leading-tight px-4">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
