export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="text-xl font-extrabold tracking-[-0.04em] text-[#2563EB]">installo</p>
            <p className="text-xs text-[#9CA3AF] mt-0.5">Invoice & Pay</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {["Product", "Pricing", "Login", "Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#6B7280] hover:text-[#2563EB] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Trust badges */}
          <div className="flex items-center gap-3">
            {/* Moov */}
            <div className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#6B7280]">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[11px] font-semibold text-[#374151]">Moov</span>
            </div>
            {/* Plaid */}
            <div className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#6B7280]">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.6"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.6"/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.3"/>
              </svg>
              <span className="text-[11px] font-semibold text-[#374151]">Plaid</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#F3F4F6] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#9CA3AF]">© 2025 installo. All rights reserved.</p>
          <p className="text-xs text-[#D1D5DB]">Built for the businesses that keep the world running.</p>
        </div>
      </div>
    </footer>
  );
}
