import Badge from "@/components/ui/Badge";
import InitialsAvatar from "@/components/ui/InitialsAvatar";

const CUSTOMERS = [
  { name: "Marcus Thompson",  tag: "Auto Repair",  status: "active" as const,    outstanding: "$0",      last: "$240" },
  { name: "Rivera HVAC",      tag: "HVAC",          status: "overdue" as const,   outstanding: "$1,800",  last: "$1,800" },
  { name: "Chen Dental",      tag: "Dental",        status: "on-track" as const,  outstanding: "$620",    last: "$310" },
  { name: "Green Scapes LLC", tag: "Landscaping",   status: "new" as const,       outstanding: "$950",    last: "$950" },
];

export default function CustomerListMockup() {
  return (
    <div className="w-full bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,.08)] overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#E5E7EB] flex items-center justify-between">
        <p className="text-sm font-bold text-[#111827]">Customers</p>
        <div className="flex gap-1.5">
          {["All", "Overdue", "Active"].map((f, i) => (
            <span
              key={f}
              className={`px-2.5 py-1 rounded-[99px] text-xs font-semibold cursor-pointer ${
                i === 0
                  ? "bg-[#2563EB] text-white"
                  : "bg-[#F3F4F6] text-[#6B7280]"
              }`}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Rows — responsive: compact on small, full on md+ */}
      {CUSTOMERS.map((c, i) => (
        <div
          key={i}
          className={`px-4 py-3 flex items-center gap-3 ${
            i < CUSTOMERS.length - 1 ? "border-b border-[#F3F4F6]" : ""
          } hover:bg-[#FAFAFA] transition-colors cursor-pointer`}
        >
          {/* Avatar + name */}
          <InitialsAvatar name={c.name} size="sm" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#111827] truncate">{c.name}</p>
            <p className="text-[10px] text-[#9CA3AF]">{c.tag}</p>
          </div>

          {/* Status badge */}
          <Badge status={c.status} />

          {/* Outstanding — hidden on very small, shown md+ */}
          <div className="hidden sm:flex flex-col items-end">
            <span className={`text-xs font-bold font-mono ${c.outstanding === "$0" ? "text-[#16A34A]" : "text-[#111827]"}`}>
              {c.outstanding}
            </span>
            <span className="text-[9px] text-[#9CA3AF]">outstanding</span>
          </div>
        </div>
      ))}
    </div>
  );
}
