const PLANS = [
  { splits: 2, perPayment: "$1,200.00", interval: "every 30 days" },
  { splits: 3, perPayment: "$800.00", interval: "every 30 days", selected: true },
  { splits: 4, perPayment: "$600.00", interval: "every 15 days" },
  { splits: 6, perPayment: "$400.00", interval: "every 30 days" },
];

const INTERVALS = ["7 days", "15 days", "30 days"];

export default function PlanGridMockup() {
  return (
    <div className="w-full bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,.08)] overflow-hidden">
      {/* Header */}
      <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] px-5 py-3 flex items-center gap-3">
        <div className="flex gap-2 items-center opacity-40">
          <div className="w-6 h-6 rounded-full bg-[#E5E7EB] text-[#6B7280] text-xs font-bold flex items-center justify-center">1</div>
          <span className="text-xs font-semibold text-[#6B7280]">Invoice Details</span>
        </div>
        <div className="flex-1 h-px bg-[#E5E7EB]" />
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center">2</div>
          <span className="text-xs font-semibold text-[#111827]">Payment Plan</span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <p className="text-xs font-semibold text-[#374151] mb-1">Split the $2,400 invoice into:</p>
          <div className="grid grid-cols-2 gap-2">
            {PLANS.map((p) => (
              <div
                key={p.splits}
                className={`rounded-xl border-2 p-3 cursor-pointer transition-all ${
                  p.selected
                    ? "border-[#2563EB] bg-[#EFF6FF]"
                    : "border-[#E5E7EB] bg-white hover:border-[#93C5FD]"
                }`}
              >
                <p className={`text-xl font-bold ${p.selected ? "text-[#2563EB]" : "text-[#111827]"}`}>
                  {p.splits}×
                </p>
                <p className={`text-xs font-semibold ${p.selected ? "text-[#2563EB]" : "text-[#374151]"}`}>
                  {p.perPayment}
                </p>
                <p className="text-[10px] text-[#9CA3AF] mt-0.5">{p.interval}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interval picker */}
        <div>
          <p className="text-xs font-semibold text-[#374151] mb-1.5">Collect every</p>
          <div className="flex gap-2">
            {INTERVALS.map((iv, i) => (
              <div
                key={iv}
                className={`flex-1 text-center py-2 rounded-lg text-xs font-semibold border cursor-pointer transition-all ${
                  i === 2
                    ? "bg-[#2563EB] text-white border-[#2563EB]"
                    : "bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#93C5FD]"
                }`}
              >
                {iv}
              </div>
            ))}
          </div>
        </div>

        {/* Schedule preview */}
        <div className="bg-[#F9FAFB] rounded-xl p-3 border border-[#E5E7EB]">
          <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wide mb-2">Payment schedule</p>
          {["May 15 — $800.00", "Jun 15 — $800.00", "Jul 15 — $800.00"].map((row, i) => (
            <div key={i} className="flex items-center justify-between py-1 border-b border-[#F3F4F6] last:border-0">
              <span className="text-[11px] text-[#374151]">{row.split("—")[0]}</span>
              <span className="text-[11px] font-bold text-[#111827] font-mono">{row.split("—")[1]}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-[#2563EB] text-white text-xs font-semibold py-3 rounded-xl hover:bg-[#1D4ED8] transition-colors">
          Send Invoice →
        </button>
      </div>
    </div>
  );
}
