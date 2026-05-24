"use client";

import { motion, type Variants } from "framer-motion";
import DashboardMockup from "@/components/mockups/DashboardMockup";
import InvoiceFormMockup from "@/components/mockups/InvoiceFormMockup";
import PlanGridMockup from "@/components/mockups/PlanGridMockup";

const STEPS = [
  {
    num: "01",
    eyebrow: "Create",
    title: "Build an invoice in 2 minutes.",
    body: "Add your customer, service, and amount. Send instantly via email or SMS — no account setup needed on their end.",
    highlight: "Works from your phone, on any job site.",
    mockup: <InvoiceFormMockup />,
  },
  {
    num: "02",
    eyebrow: "Collect",
    title: "Offer a plan. Close the job.",
    body: "Give customers the option to pay in 2×, 3×, 4×, or 6× installments. Installo auto-schedules every payment — you never chase.",
    highlight: "Businesses see 40% more closed jobs with payment plans.",
    mockup: <PlanGridMockup />,
  },
  {
    num: "03",
    eyebrow: "Track",
    title: "See every dollar in real time.",
    body: "Your dashboard shows every invoice, balance, and payment status the moment it changes. Overdue? You'll know before they do.",
    highlight: "98% of invoices tracked to full resolution.",
    mockup: <DashboardMockup />,
  },
];

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function HowItWorks() {
  return (
    <section id="product" className="py-16 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-[clamp(28px,4vw,46px)] font-extrabold text-[#111827] tracking-tight">
            Up and running in minutes.
          </h2>
          <p className="mt-4 text-[17px] text-[#6B7280] max-w-lg mx-auto leading-relaxed">
            No training. No complicated setup. Just open Installo and start getting paid.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-24 md:gap-32">
          {STEPS.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.num}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  isEven ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text side */}
                <motion.div
                  variants={isEven ? fadeRight : fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={isEven ? "md:order-2" : ""}
                >
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest">
                      {step.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-[clamp(22px,3vw,34px)] font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
                    {step.title}
                  </h3>

                  <p className="text-[16px] text-[#6B7280] leading-relaxed mb-6">
                    {step.body}
                  </p>

                  {/* Highlight pill */}
                  <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#BFDBFE] rounded-[99px] px-4 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#2563EB]">{step.highlight}</span>
                  </div>
                </motion.div>

                {/* Mockup side */}
                <motion.div
                  variants={isEven ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`relative ${isEven ? "md:order-1" : ""}`}
                >
                  {/* Soft glow behind mockup */}
                  <div
                    className="absolute -inset-6 rounded-3xl pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    {step.mockup}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
