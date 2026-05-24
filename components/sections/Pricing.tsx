"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const FREE_FEATURES = [
  "Up to 5 invoices / month",
  "1 user",
  "Basic dashboard",
  "Email delivery",
  "Customer management",
];

const PRO_FEATURES = [
  "Unlimited invoices",
  "Installment plans (2×–6×)",
  "Full customer management",
  "Real-time live dashboard",
  "Email + SMS delivery",
  "Email OTP auth (no passwords)",
  "Priority support",
];

const Check = ({ pro }: { pro?: boolean }) => (
  <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill={pro ? "#93C5FD" : "#16A34A"}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-20 px-4 sm:px-6 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-14"
        >
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-[#111827] tracking-tight mb-3">
            Simple, honest pricing.
          </h2>
          <p className="text-[17px] text-[#6B7280]">Start free. Upgrade when you&apos;re ready.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[20px] border-2 border-[#E5E7EB] p-8 flex flex-col"
          >
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest mb-2">Free</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-extrabold text-[#111827] tracking-tight">$0</span>
              <span className="text-[#9CA3AF] mb-2">/mo</span>
            </div>
            <p className="text-sm text-[#6B7280] mb-6">Try it out. No card needed.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#374151]">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="ghost" size="md" className="w-full border border-[#E5E7EB] hover:border-[#2563EB]">
              Get started free
            </Button>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[20px] p-8 flex flex-col relative overflow-hidden shadow-[0_8px_40px_rgba(37,99,235,.25)]"
            style={{ background: "linear-gradient(145deg, #2563EB, #1D4ED8)" }}
          >
            {/* Most popular badge */}
            <div className="absolute top-5 right-5">
              <span className="bg-white/15 text-white text-[10px] font-bold px-2.5 py-1 rounded-[99px] uppercase tracking-wide">
                Most popular
              </span>
            </div>

            <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2">Pro</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-extrabold text-white tracking-tight">$29</span>
              <span className="text-blue-300 mb-2">/mo</span>
            </div>
            <p className="text-sm text-blue-200 mb-6">Everything you need to run your books.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/90">
                  <Check pro />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="white" size="md" className="w-full font-bold text-[#2563EB]">
              Start Pro free →
            </Button>
            <p className="text-xs text-blue-300 text-center mt-3">14-day free trial · No card required</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
