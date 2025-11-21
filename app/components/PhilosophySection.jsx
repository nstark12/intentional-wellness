import { Brain, HeartPulse, Sparkles, Leaf } from "lucide-react";
import { Abhaya_Libre } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // choose what you need
  display: "swap",
});

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="mt-20 lg:mt-28">
      {/* FULL-WIDTH WRAPPER (not absolute) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#f7ebe3]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            {/* Left column: philosophy text */}
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
                Philosophy
              </p>

              <h3
                className={`${abhaya.className} mt-2 text-3xl font-semibold tracking-tight text-[#2b211c]`}
              >
                Health doesn&apos;t happen by accident — it happens through
                intention.
              </h3>

              {/* Icon strip under heading */}
              <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-[#5d4a3c]">
                <IconPill icon={Brain} label="Mind" />
                <IconPill icon={HeartPulse} label="Body" />
                <IconPill icon={Sparkles} label="Spirit" />
                <IconPill icon={Leaf} label="Life" />
              </div>

              <p className="mt-6 text-sm leading-relaxed text-[#5d4a3c]">
                At Intentional Wellness, everything begins with a simple but
                powerful belief:{" "}
                <span className="font-medium">
                  lasting change comes from intentional action.
                </span>{" "}
                True wellness requires commitment, consistency, courage, and
                desire, and while the journey is not always easy, the
                transformation that follows is deeply meaningful.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
                With a 25 year foundation in healthcare, my practice is built on
                the understanding that each person has the ability to take
                control of their health and well-being. Often, all someone needs
                is the right support, perspective, and guidance to begin.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
                I approach wellness from a mind body spirit perspective,
                honoring the truth that everything in a person&apos;s life is
                connected — mental health, physical health, emotions, stress,
                habits, relationships, and how we speak to ourselves.{" "}
                <span className="font-medium">
                  Healing happens when all parts are supported together.
                </span>
              </p>
            </div>

            {/* Right column: visual quote card with icon */}
            <aside className="rounded-3xl border border-[#e5d5c9] bg-[#fff9f4] p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#b5937b]">
                <Sparkles className="h-4 w-4 text-black" />
                <span>In Her Words</span>
              </div>

              <p className="mt-4 text-sm italic leading-relaxed text-[#7a6250]">
                “My goal is to create a safe, supportive space where clients
                feel seen, understood, and empowered — one intentional step at a
                time.”
              </p>

              <p className="mt-4 text-[11px] leading-relaxed text-[#5d4a3c]">
                At Intentional Wellness, everything matters, everything is
                connected, and every person deserves to feel their best — from
                the inside out.
              </p>

              <p className="mt-5 text-xs font-medium text-[#5d4a3c]">
                — Janelle Lauersdorf, BSN, RN
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconPill({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#e5d5c9] bg-[#fff9f4] px-3 py-1">
      <Icon className="h-3.5 w-3.5 text-black" />
      <span>{label}</span>
    </div>
  );
}
