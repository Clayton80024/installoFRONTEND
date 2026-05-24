"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import DashboardMockup from "@/components/mockups/DashboardMockup";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-8 md:pb-16 px-4 sm:px-6"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #1D4ED8 100%)",
      }}
    >
      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: cursor.x, top: cursor.y }}
      />

      {/* Blob backgrounds */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #60A5FA 0%, transparent 70%)" }}
      />

      {/* Text content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-[99px] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            Real-time invoicing for small businesses
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(40px,8vw,80px)] font-extrabold text-white leading-[1.05] tracking-tight mb-5"
        >
          Get paid.{" "}
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #93C5FD, #60A5FA)" }}>
            Stay in control.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(16px,2.5vw,20px)] text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Installo gives small businesses a live dashboard for every invoice, payment, and customer — so you always know exactly where your money is.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5"
        >
          <Button variant="white" size="lg" className="w-full sm:w-auto text-[#2563EB] font-bold shadow-[0_4px_20px_rgba(255,255,255,.2)]">
            Start free →
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            See how it works
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/40 text-sm"
        >
          No credit card required · Setup in 2 minutes · Cancel anytime
        </motion.p>
      </div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-3xl mt-8 md:mt-14 px-1 sm:px-2"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          style={{ filter: "drop-shadow(0 40px 80px rgba(37,99,235,0.45))" }}
        >
          <DashboardMockup />
        </motion.div>
      </motion.div>

      {/* Wave divider — clips cleanly into the white section below */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: "90px", display: "block" }}
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,60 C240,100 480,20 720,55 C960,90 1200,15 1440,55 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  );
}
