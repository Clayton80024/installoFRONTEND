"use client";

import { motion } from "framer-motion";
import DashboardMockup from "@/components/mockups/DashboardMockup";
import InvoiceFormMockup from "@/components/mockups/InvoiceFormMockup";
import PlanGridMockup from "@/components/mockups/PlanGridMockup";
import CustomerListMockup from "@/components/mockups/CustomerListMockup";

interface BlockProps {
  eyebrow: string;
  headline: string;
  body: string;
  mockup: React.ReactNode;
  imageLeft?: boolean;
  bg?: string;
}

function FeatureBlock({ eyebrow, headline, body, mockup, imageLeft = false, bg = "bg-white" }: BlockProps) {
  return (
    <section className={`py-12 md:py-20 px-4 sm:px-6 ${bg}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: imageLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            {mockup}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: imageLeft ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-2">{eyebrow}</p>
            <h2 className="text-[clamp(22px,3.5vw,40px)] font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
              {headline}
            </h2>
            <p className="text-base md:text-[17px] text-[#4B5563] leading-relaxed">{body}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function FeatureBlocks() {
  return (
    <>
      <FeatureBlock
        eyebrow="Dashboard"
        headline="Your money, at a glance."
        body="See Total Collected, Pending balance, and Default rate the moment you open the app. The live revenue chart shows your last 6 months. No spreadsheet. No guessing."
        mockup={<DashboardMockup />}
        imageLeft
        bg="bg-white"
      />
      <FeatureBlock
        eyebrow="Invoice Creation"
        headline="Invoice in 2 steps. Collect on autopilot."
        body="Pick a customer, add the service, set the amount. Installo generates a professional invoice instantly. Choose email, SMS, or both for delivery. Done in under 2 minutes."
        mockup={<InvoiceFormMockup />}
        imageLeft={false}
        bg="bg-[#F9FAFB]"
      />
      <FeatureBlock
        eyebrow="Installment Plans"
        headline="Split the bill. Close the deal."
        body="Don't lose a job because the customer can't pay upfront. Offer a 3× or 6× plan and Installo schedules every collection automatically — with exact dates and amounts."
        mockup={<PlanGridMockup />}
        imageLeft
        bg="bg-white"
      />
      <FeatureBlock
        eyebrow="Customer Management"
        headline="Every customer. Every balance. One place."
        body="Track total invoiced, collected, and outstanding per customer. Filter by Active, Overdue, or Completed. See the full payment history for every account in one click."
        mockup={<CustomerListMockup />}
        imageLeft={false}
        bg="bg-[#F9FAFB]"
      />
    </>
  );
}
