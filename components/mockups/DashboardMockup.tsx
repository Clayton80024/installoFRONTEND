"use client";

import { useEffect, useState } from "react";
import Badge from "@/components/ui/Badge";
import LiveDot from "@/components/ui/LiveDot";
import InitialsAvatar from "@/components/ui/InitialsAvatar";

const BAR_DATA = [38, 52, 45, 68, 75, 92];
const MONTHS = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

const INVOICES = [
  { name: "Marcus T.", service: "Oil Change", amount: "$240", status: "paid" as const },
  { name: "Rivera HVAC", service: "AC Install", amount: "$1,800", status: "overdue" as const },
  { name: "Chen Dental", service: "Cleaning", amount: "$310", status: "on-track" as const },
];

export default function DashboardMockup({ compact = false }: { compact?: boolean }) {
  const [shimmer, setShimmer] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShimmer(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full rounded-[20px] overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,.12)] border border-[#E5E7EB] bg-white">
      {/* Browser chrome */}
      <div className="bg-[#F3F4F6] border-b border-[#E5E7EB] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-[#9CA3AF] font-mono border border-[#E5E7EB] max-w-[200px] mx-auto">
          tryinstallo.com
        </div>
        <LiveDot />
      </div>

      {/* Dashboard content */}
      <div className="p-4 bg-[#F9FAFB]">
        {/* Metric cards */}
        <div className={`grid gap-2 mb-4 ${compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`}>
          {[
            { label: "Total Collected", value: "$12,480", sub: "this month", color: "#16A34A" },
            { label: "Pending", value: "$3,240", sub: "outstanding", color: "#D97706" },
            { label: "Active Plans", value: "8", sub: "invoices", color: "#2563EB" },
            { label: "Default Rate", value: "4.2%", sub: "last 30 days", color: "#C0392B" },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-white rounded-xl p-2.5 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,.04)] min-w-0"
            >
              {shimmer ? (
                <div className="animate-shimmer rounded h-8 w-full" />
              ) : (
                <>
                  <p className="text-[9px] text-[#6B7280] font-medium mb-0.5 truncate">{m.label}</p>
                  <p className="text-base font-bold truncate" style={{ color: m.color }}>{m.value}</p>
                  <p className="text-[8px] text-[#9CA3AF] truncate">{m.sub}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {!compact && (
          <>
            {/* Revenue chart */}
            <div className="bg-white rounded-xl p-3 border border-[#E5E7EB] mb-4">
              <p className="text-xs font-semibold text-[#111827] mb-3">Revenue — Last 6 months</p>
              <div className="flex items-end gap-2 h-14">
                {BAR_DATA.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-md transition-all duration-700"
                      style={{
                        height: `${(h / 100) * 56}px`,
                        backgroundColor: i === BAR_DATA.length - 1 ? "#2563EB" : "#BFDBFE",
                      }}
                    />
                    <span className="text-[8px] text-[#9CA3AF]">{MONTHS[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Invoice table */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
              <div className="px-3 py-2 border-b border-[#E5E7EB] flex items-center justify-between">
                <p className="text-xs font-semibold text-[#111827]">Active Invoices</p>
                <span className="text-[10px] text-[#2563EB] font-medium cursor-pointer">View all →</span>
              </div>
              {INVOICES.map((inv, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-3 py-2.5 ${i < INVOICES.length - 1 ? "border-b border-[#F3F4F6]" : ""}`}
                >
                  <InitialsAvatar name={inv.name} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#111827] truncate">{inv.name}</p>
                    <p className="text-[10px] text-[#6B7280]">{inv.service}</p>
                  </div>
                  <p className="text-xs font-bold text-[#111827] font-mono">{inv.amount}</p>
                  <Badge status={inv.status} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
