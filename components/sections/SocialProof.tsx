"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

/* ─── Floating card data ─────────────────────────────────────────────────────
   Positions pulled well away from the screen edges (8-12% inward) so cards
   feel clustered around the center rather than pinned to borders.
   Cards are also slightly larger to fill the space with less awkward gaps.
────────────────────────────────────────────────────────────────────────────── */
const CARDS = [
  {
    src: "/customers/Cleaning-team.jpg",
    name: "Compass Cleaning",   type: "Home Cleaning",
    badge: "Paid in full ✓",   badgeColor: "#16A34A", amount: "$1,200",
    pos: { left: "8%",  top: "7%"     }, w: 238, h: 158,
    floatY: 14, duration: 4.8, delay: 0,    rotate: -2,
  },
  {
    src: "/customers/electrical.jpg",
    name: "NY Power Electric",  type: "Electrical Contractor",
    badge: "3× plan active",   badgeColor: "#2563EB", amount: "$4,800",
    pos: { right: "8%", top: "5%"     }, w: 218, h: 145,
    floatY: 10, duration: 5.6, delay: 1.2,  rotate: 1.5,
  },
  {
    src: "/customers/hvac.jpg",
    name: "Marietta Comfort",   type: "HVAC Contractor",
    badge: "On track",          badgeColor: "#2563EB", amount: "$2,400",
    pos: { left: "5%",  top: "43%"    }, w: 228, h: 152,
    floatY: 12, duration: 4.0, delay: 2.0,  rotate: 1,
  },
  {
    src: "/customers/landscaping.jpg",
    name: "GreenScape Pro",     type: "Landscaping",
    badge: "Invoice sent ⚡",   badgeColor: "#1E3A8A", amount: "$890",
    pos: { right: "5%", top: "41%"    }, w: 218, h: 145,
    floatY: 9,  duration: 5.2, delay: 0.6,  rotate: -1.5,
  },
  {
    src: "/customers/painting.jpg",
    name: "Craftsman Painting", type: "Interior Painting",
    badge: "Collected $3,600", badgeColor: "#16A34A", amount: "$3,600",
    pos: { left: "10%", bottom: "6%"  }, w: 222, h: 148,
    floatY: 11, duration: 6.0, delay: 1.6,  rotate: 2,
  },
  {
    src: "/customers/plumbing.jpg",
    name: "FlowRight Plumbing", type: "Plumbing Services",
    badge: "Due soon",          badgeColor: "#D97706", amount: "$750",
    pos: { right: "7%", bottom: "5%"  }, w: 232, h: 155,
    floatY: 13, duration: 4.4, delay: 0.9,  rotate: -1,
  },
];

/* ─── Image pills — small photo thumb + label, bridging cards ↔ center ──────── */
const PILLS = [
  {
    src: "/customers/Cleaning-team.jpg",
    label: "Cleaning Co.",
    pos: { left: "31%",  top: "11%"    }, delay: 0.5,  duration: 5.0,
  },
  {
    src: "/customers/hvac.jpg",
    label: "HVAC",
    pos: { right: "29%", top: "14%"    }, delay: 1.8,  duration: 4.3,
  },
  {
    src: "/customers/painting.jpg",
    label: "Painting",
    pos: { left: "29%",  bottom: "13%" }, delay: 2.4,  duration: 5.8,
  },
  {
    src: "/customers/plumbing.jpg",
    label: "Plumbing",
    pos: { right: "27%", bottom: "12%" }, delay: 0.3,  duration: 4.7,
  },
  {
    src: "/customers/electrical.jpg",
    label: "Electric",
    pos: { left: "33%",  top: "52%"    }, delay: 1.1,  duration: 4.6,
  },
];

/* ─── Center stat lines ─────────────────────────────────────────────────────── */
const STATS_LINES = [
  { value: 1240, prefix: "",  suffix: "+",  unit: "invoices sent",              decimals: 0 },
  { value: 2.4,  prefix: "$", suffix: "M+", unit: "collected through Installo", decimals: 1 },
  { value: 340,  prefix: "",  suffix: "+",  unit: "businesses trust installo",  decimals: 0 },
];

export default function SocialProof() {
  return (
    <section className="bg-white border-b border-[#F3F4F6] overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP  (md+) — Mobbin-style floating layout
      ════════════════════════════════════════════════════════════════════ */}
      <div className="relative hidden md:block" style={{ minHeight: "760px" }}>

        {/* Dot-grid background — fills empty space with subtle texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #D1D5DB 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            opacity: 0.35,
          }}
        />

        {/* Radial glow in center — more prominent than before */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 46% 52% at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 30%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 38% 44% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 100%)",
          }}
        />

        {/* Floating photo cards */}
        {CARDS.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: card.delay, ease: "easeOut" }}
            className="absolute"
            style={{ ...card.pos, zIndex: 1 }}
          >
            <motion.div
              animate={{ y: [0, -card.floatY, 0] }}
              transition={{ duration: card.duration, ease: "easeInOut", repeat: Infinity, delay: card.delay }}
              style={{ rotate: card.rotate }}
            >
              <div
                className="relative overflow-hidden group cursor-pointer"
                style={{
                  width: card.w,
                  height: card.h,
                  borderRadius: 22,
                  boxShadow: "0 12px 48px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.09)",
                }}
              >
                {/* Photo */}
                <Image
                  src={card.src}
                  alt={card.name}
                  fill
                  sizes={`${card.w}px`}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.12) 50%, transparent 100%)" }}
                />
                {/* Top: installo badge + amount */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md border border-white/15 rounded-[99px] pl-1 pr-2 py-0.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-[6px]">i</span>
                    </span>
                    <span className="text-white text-[9px] font-semibold">installo</span>
                  </div>
                  <span className="bg-black/30 backdrop-blur-md border border-white/15 rounded-[99px] px-1.5 py-0.5 text-white text-[10px] font-bold font-mono">
                    {card.amount}
                  </span>
                </div>
                {/* Status badge */}
                <div className="absolute bottom-8 left-2.5">
                  <span
                    className="inline-flex items-center px-2 py-0.5 rounded-[99px] text-[9px] font-bold text-white"
                    style={{ backgroundColor: card.badgeColor, boxShadow: `0 2px 8px ${card.badgeColor}55` }}
                  >
                    {card.badge}
                  </span>
                </div>
                {/* Business name */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2">
                  <p className="text-white font-bold text-[11px] leading-tight truncate">{card.name}</p>
                  <p className="text-white/55 text-[9px]">{card.type}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Floating image pills */}
        {PILLS.map((pill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: pill.delay + 0.5 },
              y: { duration: pill.duration, ease: "easeInOut", repeat: Infinity, delay: pill.delay },
            }}
            className="absolute z-10"
            style={pill.pos}
          >
            <div
              className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-[99px] whitespace-nowrap"
              style={{
                background: "rgba(255,255,255,0.96)",
                border: "1px solid rgba(0,0,0,0.09)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.11)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Circular photo thumb */}
              <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0"
                style={{ boxShadow: "0 0 0 2px rgba(255,255,255,0.9)" }}>
                <Image
                  src={pill.src}
                  alt={pill.label}
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-semibold text-[#374151]">{pill.label}</span>
            </div>
          </motion.div>
        ))}

        {/* Center text block */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest">
                Trusted by real businesses
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            </div>

            {/* Stats */}
            <div className="space-y-2">
              {STATS_LINES.map((s, i) => (
                <div key={i} className="flex items-baseline justify-center gap-3">
                  <span
                    className="font-extrabold tracking-tight text-[#111827] leading-none"
                    style={{ fontSize: "clamp(40px, 4.8vw, 62px)" }}
                  >
                    <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                  </span>
                  <span className="text-[#9CA3AF] text-base md:text-lg font-medium max-w-[160px] text-left leading-tight">
                    {s.unit}
                  </span>
                </div>
              ))}
            </div>

            {/* Sub-label */}
            <p className="mt-6 text-sm text-[#9CA3AF] font-medium">
              and growing every day
            </p>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE  (< md) — stacked stats + 2-col photo grid
      ════════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden py-12 px-5">
        {/* Stats */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
            <span className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-widest">Trusted by real businesses</span>
            <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
          </div>
          <div className="space-y-2">
            {STATS_LINES.map((s, i) => (
              <div key={i} className="flex items-baseline justify-center gap-2">
                <span className="text-3xl font-extrabold text-[#111827] tracking-tight">
                  <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </span>
                <span className="text-sm text-[#9CA3AF] font-medium">{s.unit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-col photo grid */}
        <div className="grid grid-cols-2 gap-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative overflow-hidden"
              style={{ borderRadius: 16, height: 130, boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
            >
              <Image src={card.src} alt={card.name} fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 px-2.5 py-2">
                <span
                  className="inline-flex px-1.5 py-0.5 rounded-[99px] text-[8px] font-bold text-white mb-0.5"
                  style={{ backgroundColor: card.badgeColor }}
                >
                  {card.badge}
                </span>
                <p className="text-white font-bold text-[10px] leading-tight truncate">{card.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
