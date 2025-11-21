// components/common/ServiceCard.jsx
export default function ServiceCard({ icon, title, children }) {
  const Icon = icon;

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[#e5d5c9] bg-white/70 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5d5c9] bg-[#fff9f4]">
          {Icon && <Icon className="h-5 w-5 text-black" />}
        </div>
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <p className="text-xs leading-relaxed text-[#5d4a3c]">{children}</p>
    </div>
  );
}
