// components/sections/HeroSection.jsx

import WellnessIconRow from "./WellnessIconRow";

export default function HeroSection() {
  return (
    <section className="mb-16">
      {/* FULL-BLEED IMAGE (breaks out of max-width container) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="relative h-[55vh] md:h-[65vh] lg:h-[70vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1950&q=80"
            alt="Cozy wellness office interior with soft chair and blanket"
            className="h-full w-full object-cover"
          />

          {/* soft dark overlay for readability */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            {/* Heading WITHOUT the pink underline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-lg tracking-tight">
              Welcome to a Space of True Wellness
            </h1>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-white/85 leading-relaxed drop-shadow-lg">
              Nurse-led support rooted in compassion, intention, and
              understanding the full picture of your health.
            </p>

            {/* CTA Button Block */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#schedule"
                className="rounded-full bg-[#f7d6d0] px-8 py-3 text-sm font-semibold tracking-wide text-[#2b211c] shadow-lg hover:bg-[#f4c5c0] transition-all"
              >
                Book a Session
              </a>

              <a
                href="#services"
                className="rounded-full bg-white/70 backdrop-blur px-8 py-3 text-sm font-medium text-[#2b211c] shadow hover:bg-white/90 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* UNDER-HERO CONTENT (uses the normal page width again) */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        {/* LEFT: original text column with pink underline */}
        <div className="space-y-6">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#b5937b]">
            Intentional Wellness, with a nurse&apos;s touch
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Feel supported, heard, and{" "}
            <span className="underline decoration-[#f7d6d0] decoration-[0.35em] underline-offset-[0.35em]">
              deeply cared for
            </span>
            .
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-[#5d4a3c]">
            Intentional Wellness offers one-on-one, nurse-guided support that
            looks at the full picture of your health — nutrition, stress, sleep,
            movement, and everything in between.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#schedule"
              className="rounded-full bg-[#f7d6d0] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#2b211c] shadow-sm hover:bg-[#f4c5c0]"
            >
              Book a Session
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-[#5d4a3c] underline-offset-4 hover:underline"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#7a6250]">
            <span className="rounded-full bg-[#f7ebe3] px-3 py-1">
              Nurse-led Care
            </span>
            <span className="rounded-full bg-[#f7ebe3] px-3 py-1">
              Custom Plans
            </span>
            <span className="rounded-full bg-[#f7ebe3] px-3 py-1">
              Evidence-Informed
            </span>
            <span className="rounded-full bg-[#f7ebe3] px-3 py-1">
              Root-Cause Focused
            </span>
          </div>
        </div>

        {/* RIGHT: soft info card */}
        <div className="rounded-3xl border border-[#e5d5c9] bg-[#fff9f4] px-6 py-8 shadow-sm">
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
              A calm place to land
            </p>
            <p className="text-sm leading-relaxed text-[#5d4a3c]">
              Whether you&apos;re overwhelmed, burnt out, or simply craving
              clarity, Intentional Wellness provides gentle, individualized
              support to help you feel grounded again.
            </p>
            <p className="text-sm italic text-[#7a6250]">
              “My goal is to make you feel seen, supported, and empowered in
              every step of your wellness journey.”
            </p>
            <div className="mt-6 border-t border-[#e5d5c9] pt-4 text-xs text-[#7a6250]">
              <p>Now welcoming new clients for virtual and local sessions.</p>
            </div>
          </div>
        </div>
        <WellnessIconRow />
      </div>
    </section>
  );
}
