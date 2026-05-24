"use client";

import { motion, type Variants } from "framer-motion";

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
    color: "#2563EB",
    bg: "#EFF6FF",
    title: "2-Minute Invoicing",
    body: "Create and send a professional invoice by email or SMS in under 2 minutes — from any device.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    color: "#16A34A",
    bg: "#F0FDF4",
    title: "Installment Plans",
    body: "Offer 2×, 3×, 4×, or 6× payment plans. Customers say yes more often. You get paid automatically.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    color: "#D97706",
    bg: "#FFFBEB",
    title: "Auto Reminders",
    body: "Overdue invoices trigger automatic follow-ups. Stop chasing customers — let Installo do it.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    color: "#7C3AED",
    bg: "#F5F3FF",
    title: "Live Dashboard",
    body: "See every invoice, balance, and payment status the moment you open the app. No spreadsheets.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: "#0891B2",
    bg: "#ECFEFF",
    title: "Customer Profiles",
    body: "Every customer has a full history — jobs, balances, plan status. Know who owes what, instantly.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    color: "#16A34A",
    bg: "#F0FDF4",
    title: "Flexible Collection",
    body: "Collect full payment or split it. ACH, card, or bank transfer — customers pay the way they prefer.",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProblemSolution() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3">
            Built for service businesses
          </p>
          <h2 className="text-[clamp(26px,4vw,44px)] font-extrabold text-[#111827] tracking-tight mb-4">
            Everything you need to get paid — on time.
          </h2>
          <p className="text-[17px] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            Installo replaces the spreadsheets, texts, and guessing with one clean tool
            built for cleaning, HVAC, contracting, and any service business.
          </p>
        </motion.div>

        {/* Feature card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={card}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4"
              style={{
                border: "1px solid #E5E7EB",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Icon badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: f.bg, color: f.color }}
              >
                {f.icon}
              </div>

              <div>
                <h3 className="text-[15px] font-bold text-[#111827] mb-1">{f.title}</h3>
                <p className="text-[14px] text-[#6B7280] leading-relaxed">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
