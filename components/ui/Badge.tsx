"use client";

import { motion } from "framer-motion";

type Status = "paid" | "overdue" | "on-track" | "due-soon" | "draft" | "partial" | "active" | "new" | "completed" | "inactive";

interface BadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { label: string; style: string }> = {
  paid:      { label: "Paid ✓",     style: "bg-[#E6F7F1] text-[#16A34A]" },
  overdue:   { label: "Overdue",    style: "bg-[#FDECEA] text-[#C0392B]" },
  "on-track":{ label: "On track",   style: "bg-[#EFF6FF] text-[#2563EB]" },
  "due-soon":{ label: "Due soon",   style: "bg-[#FFF8E6] text-[#D97706]" },
  draft:     { label: "Draft",      style: "bg-gray-100 text-gray-500" },
  partial:   { label: "Partial",    style: "bg-purple-50 text-purple-600" },
  active:    { label: "Active",     style: "bg-[#EFF6FF] text-[#2563EB]" },
  new:       { label: "New",        style: "bg-[#FFF8E6] text-[#D97706]" },
  completed: { label: "Completed",  style: "bg-[#E6F7F1] text-[#16A34A]" },
  inactive:  { label: "Inactive",   style: "bg-gray-100 text-gray-500" },
};

export default function Badge({ status, className = "" }: BadgeProps) {
  const config = statusConfig[status] ?? statusConfig.draft;
  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center px-2.5 py-0.5 rounded-[99px] text-xs font-semibold whitespace-nowrap ${config.style} ${className}`}
    >
      {config.label}
    </motion.span>
  );
}
