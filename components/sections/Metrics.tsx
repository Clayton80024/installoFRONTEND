"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const STATS = [
  { value: 2.4, prefix: "$", suffix: "M+", label: "collected through Installo", decimals: 1 },
  { value: 98, prefix: "", suffix: "%", label: "of invoices tracked to resolution", decimals: 0 },
  { value: 2, prefix: "", suffix: " min", label: "average invoice creation time", decimals: 0 },
  { value: 6, prefix: "", suffix: "×", label: "installment plan options", decimals: 0 },
];

export default function Metrics() {
  return (
    <section
      className="py-12 md:py-20 px-4 sm:px-6"
      style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-14"
        >
          <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3">By the numbers</p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-white tracking-tight">
            Real results for real businesses.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-[clamp(40px,5vw,56px)] font-extrabold text-white tracking-tight leading-none mb-2">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="text-sm text-blue-200 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
