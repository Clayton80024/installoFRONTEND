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

          {/* Trust */}
          <p className="text-xs text-[#9CA3AF] text-right leading-relaxed">
            Secured by Supabase Auth<br />
            Payments via FedNow &amp; ACH
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#F3F4F6] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#9CA3AF]">© 2025 installo. All rights reserved.</p>
          <p className="text-xs text-[#D1D5DB]">Built for the businesses that keep the world running.</p>
        </div>
      </div>
    </footer>
  );
}
