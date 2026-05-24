"use client";

import { motion, type Variants } from "framer-motion";
import InitialsAvatar from "@/components/ui/InitialsAvatar";

const TESTIMONIALS = [
  {
    quote:
      "I used to text customers asking if they'd paid. Now I open Installo and I know exactly which jobs are unpaid. Saved me hours every week.",
    name: "Marcus T.",
    role: "Auto Repair Shop Owner · Detroit, MI",
  },
  {
    quote:
      "I started offering 3-month payment plans and I'm closing more jobs. People say yes when they don't have to pay $2,000 upfront. Game changer.",
    name: "Jake Rivera",
    role: "HVAC Contractor · Phoenix, AZ",
  },
  {
    quote:
      "We had invoices tracked in three different spreadsheets. Installo pulled everything into one place. We stopped losing track of what was owed to us.",
    name: "Linda Chen",
    role: "Dental Office Manager · Austin, TX",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#F59E0B">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-14"
        >
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3">Real businesses. Real results.</p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-[#111827] tracking-tight">
            Don&apos;t take our word for it.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="bg-white rounded-[20px] p-7 border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,.06)] flex flex-col"
            >
              <Stars />
              <p className="text-[15px] text-[#374151] leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <InitialsAvatar name={t.name} size="md" />
                <div>
                  <p className="text-sm font-bold text-[#111827]">{t.name}</p>
                  <p className="text-xs text-[#9CA3AF]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
