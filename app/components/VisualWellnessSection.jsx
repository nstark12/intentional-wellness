import { Abhaya_Libre } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // choose what you need
  display: "swap",
});

export default function VisualWellnessSection() {
  return (
    <section className="mt-20 lg:mt-24">
      <div>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
          In Practice
        </p>
        <h3
          className={`${abhaya.className} mt-2 text-3xl font-semibold tracking-tight text-[#2b211c]`}
        >
          Little moments of intentional wellness.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c] max-w-xl">
          Wellness doesn&apos;t just happen in big breakthroughs — it&apos;s
          built in the quiet, everyday decisions: what we eat, how we rest, how
          we care for our minds and bodies.
        </p>
      </div>

      {/* LARGE VISUAL GRID */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {/* Tile 1: Nourish */}
        <div className="group overflow-hidden rounded-3xl border border-[#e5d5c9] bg-[#fff9f4]">
          <div className="relative h-60 md:h-72 lg:h-80">
            <img
              src="/food-hero.webp"
              alt="Balanced meal in a cozy setting"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#b5937b]">
              Nourish
            </p>
            <p className="mt-1 text-sm text-[#5d4a3c]">
              Simple, grounding meals that support energy and mood.
            </p>
          </div>
        </div>

        {/* Tile 2: Reflect */}
        <div className="group overflow-hidden rounded-3xl border border-[#e5d5c9] bg-[#fff9f4]">
          <div className="relative h-60 md:h-72 lg:h-80">
            <img
              src="/reflect.webp"
              alt="Cozy journaling reflection moment"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#b5937b]">
              Reflect
            </p>
            <p className="mt-1 text-sm text-[#5d4a3c]">
              Quiet moments to reconnect with yourself.
            </p>
          </div>
        </div>

        {/* Tile 3: Restore */}
        <div className="group overflow-hidden rounded-3xl border border-[#e5d5c9] bg-[#fff9f4]">
          <div className="relative h-60 md:h-72 lg:h-80">
            <img
              src="/restore.webp"
              alt="Restorative nature time"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#b5937b]">
              Restore
            </p>
            <p className="mt-1 text-sm text-[#5d4a3c]">
              Moments in nature that calm the nervous system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
