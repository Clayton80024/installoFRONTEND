export default function LiveDot() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-live-pulse absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
      </span>
      <span className="text-[10px] font-semibold tracking-widest text-[#16A34A] uppercase">
        Live
      </span>
    </div>
  );
}
