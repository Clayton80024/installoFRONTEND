import InitialsAvatar from "@/components/ui/InitialsAvatar";

const CUSTOMERS = [
  { name: "Marcus Thompson", tag: "Auto Repair" },
  { name: "Jake Rivera", tag: "HVAC" },
];

export default function InvoiceFormMockup() {
  return (
    <div className="w-full bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,.08)] overflow-hidden">
      {/* Step header */}
      <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</div>
          <span className="text-xs font-semibold text-[#111827]">Invoice Details</span>
        </div>
        <div className="flex-1 h-px bg-[#E5E7EB]" />
        <div className="flex gap-2 items-center opacity-40">
          <div className="w-6 h-6 rounded-full bg-[#E5E7EB] text-[#6B7280] text-xs font-bold flex items-center justify-center flex-shrink-0">2</div>
          <span className="text-xs font-semibold text-[#6B7280] hidden sm:inline">Payment Plan</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Customer select */}
        <div>
          <label className="text-xs font-semibold text-[#374151] mb-1.5 block">Customer</label>
          <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
            {CUSTOMERS.map((c, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer ${
                  i === 0
                    ? "bg-[#EFF6FF] border-l-2 border-[#2563EB]"
                    : "border-t border-[#F3F4F6]"
                }`}
              >
                <InitialsAvatar name={c.name} size="sm" />
                <div className="min-w-0">
                  <p className={`text-xs font-semibold truncate ${i === 0 ? "text-[#2563EB]" : "text-[#111827]"}`}>
                    {c.name}
                  </p>
                  <p className="text-[10px] text-[#9CA3AF]">{c.tag}</p>
                </div>
                {i === 0 && <span className="ml-auto text-[#2563EB] text-sm flex-shrink-0">✓</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Service + amount — stacks on mobile, side-by-side on sm+ */}
        <div>
          <label className="text-xs font-semibold text-[#374151] mb-1.5 block">Service</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-xs text-[#111827] font-medium">
              Full AC Replacement
            </div>
            <div className="sm:w-24 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-xs font-bold text-[#111827] font-mono sm:text-right">
              $2,400
            </div>
          </div>
        </div>

        {/* Due date + delivery */}
        <div className="flex gap-3">
          <div className="flex-1 min-w-0">
            <label className="text-xs font-semibold text-[#374151] mb-1.5 block">Due Date</label>
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-xs text-[#111827] truncate">
              May 15, 2025
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs font-semibold text-[#374151] mb-1.5 block">Delivery</label>
            <div className="flex gap-1.5">
              {["Email", "SMS"].map((d, i) => (
                <div
                  key={d}
                  className={`flex-1 text-center py-2 rounded-lg text-xs font-semibold border ${
                    i === 0
                      ? "bg-[#2563EB] text-white border-[#2563EB]"
                      : "bg-white text-[#6B7280] border-[#E5E7EB]"
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-1">
          <p className="text-xs text-[#6B7280]">Total: <span className="font-bold text-[#111827]">$2,400.00</span></p>
          <button className="bg-[#2563EB] text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-[#1D4ED8] transition-colors whitespace-nowrap">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
