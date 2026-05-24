"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #1D4ED8 100%)" }}
    >
      {/* Blob */}
      <div
        className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #93C5FD 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(30px,5vw,56px)] font-extrabold text-white leading-tight tracking-tight mb-5"
        >
          Stop chasing payments.<br />Start collecting them.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[18px] text-white/70 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Join hundreds of small businesses that use Installo to stay in control of their cash flow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant="white"
            size="lg"
            className="text-[#2563EB] font-bold text-lg px-10 shadow-[0_4px_20px_rgba(255,255,255,.2)]"
          >
            Get started free →
          </Button>
          <p className="text-white/40 text-sm mt-4">No credit card required · Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  );
}
