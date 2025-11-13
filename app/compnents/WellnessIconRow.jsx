// components/common/WellnessIconRow.jsx
import { Utensils, HeartPulse, Moon, Leaf } from "lucide-react";

const items = [
  {
    icon: Utensils,
    label: "Nourishing choices",
  },
  {
    icon: HeartPulse,
    label: "Whole-body health",
  },
  {
    icon: Moon,
    label: "Rest & restoration",
  },
  {
    icon: Leaf,
    label: "Sustainable habits",
  },
];

export default function WellnessIconRow() {
  return (
    <div className="mt-10 rounded-3xl border border-[#e5d5c9] bg-white/70 px-4 py-4 md:px-6 md:py-5">
      <div className="grid grid-cols-2 gap-4 text-xs text-[#5d4a3c] sm:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5d5c9] bg-[#fff9f4]">
              <Icon className="h-4 w-4 text-black" />
            </div>
            <span className="leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
