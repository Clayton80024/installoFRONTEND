"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Three states: top (transparent), mid-scroll (floating pill), deep-scroll (full bar)
  const atTop    = scrollY < 16;
  const floating = scrollY >= 16 && scrollY < 80;
  const docked   = scrollY >= 80;

  return (
    <>
      {/* ── Full-width wrapper always fixed ─────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 transition-all duration-300">
        <motion.header
          animate={{
            borderRadius: atTop ? "0px" : "16px",
            marginTop: atTop ? "0px" : "0px",
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-6xl mx-auto transition-all duration-300"
          style={{
            // Transparent on top, floating glass pill mid-scroll, full frosted bar when docked
            background: atTop
              ? "transparent"
              : "rgba(255,255,255,0.88)",
            backdropFilter: atTop ? "none" : "blur(20px) saturate(180%)",
            WebkitBackdropFilter: atTop ? "none" : "blur(20px) saturate(180%)",
            boxShadow: atTop
              ? "none"
              : floating
              ? "0 4px 32px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.6) inset"
              : "0 4px 24px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.6) inset",
            borderRadius: atTop ? "0" : "16px",
            border: atTop ? "none" : "1px solid rgba(229,231,235,0.7)",
          }}
        >
          <div className="px-5 h-14 flex items-center justify-between">

            {/* Wordmark */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <span
                className="text-xl font-extrabold tracking-[-0.04em] transition-colors duration-300"
                style={{ color: atTop ? "#ffffff" : "#2563EB" }}
              >
                installo
              </span>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-[99px] transition-all duration-300"
                style={{
                  background: atTop ? "rgba(255,255,255,0.15)" : "#EFF6FF",
                  color: atTop ? "rgba(255,255,255,0.9)" : "#2563EB",
                }}
              >
                Invoice & Pay
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-5">
              {[
                { label: "Product", href: "/#product" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Login",   href: "https://app.tryinstallo.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium transition-colors duration-300 hover:opacity-100"
                  style={{
                    color: atTop ? "rgba(255,255,255,0.75)" : "#374151",
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.color = atTop ? "#ffffff" : "#2563EB";
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.color = atTop ? "rgba(255,255,255,0.75)" : "#374151";
                  }}
                >
                  {item.label}
                </a>
              ))}

              {/* CTA button — white on hero, blue when scrolled */}
              {atTop ? (
                <Button variant="white" size="sm" className="text-[#2563EB] font-bold">
                  Get started free
                </Button>
              ) : (
                <Button variant="primary" size="sm" className="shadow-[0_2px_12px_rgba(37,99,235,.35)]">
                  Get started free
                </Button>
              )}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: atTop ? "white" : "#374151" }}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 rounded-2xl overflow-hidden md:hidden"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(229,231,235,0.8)",
              boxShadow: "0 8px 40px rgba(0,0,0,.12)",
            }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {[
                { label: "Product", href: "/#product" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Login",   href: "https://app.tryinstallo.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-[#374151] hover:text-[#2563EB] py-2.5 border-b border-[#F3F4F6] last:border-0 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="primary" size="md" className="mt-3 w-full">
                Get started free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
