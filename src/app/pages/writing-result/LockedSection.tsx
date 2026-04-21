export function LockedSection({
  children,
  message,
  ctaLabel,
  ctaColor = '#012269',
}: {
  children: React.ReactNode;
  message: string;
  ctaLabel: string;
  ctaColor?: string;
}) {
  return (
    <div className="relative">
      <div className="pointer-events-none select-none" style={{ filter: 'blur(6px)', opacity: 0.5 }}>
        {children}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 rounded-[16px] z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-[#EEEEEE] p-6 mx-4 text-center max-w-sm">
          <p className="text-[15px] font-semibold text-[#1B2A4A] mb-3">{message}</p>
          <button
            style={{ backgroundColor: ctaColor }}
            className="text-white px-5 py-2 rounded-lg text-[14px] font-medium hover:opacity-90 transition-opacity"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
