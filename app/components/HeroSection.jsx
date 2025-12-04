// components/sections/HeroSection.jsx

import WellnessIconRow from "./WellnessIconRow";
import { Abhaya_Libre } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // choose what you need
  display: "swap",
});

export default function HeroSection() {
  return (
    <section className="mb-16">
      {/* FULL-BLEED IMAGE (breaks out of max-width container) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="relative h-[55vh] md:h-[65vh] lg:h-[70vh] overflow-hidden">
          {/* Background image */}
          <img
            src="/hero.webp"
            alt="Cozy wellness office interior with soft chair and blanket"
            className="h-full w-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50 lg:bg-black/30"></div>

          {/* TEXT CONTENT */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
            {/* Overline pill */}
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/85">
              Nurse-led holistic care
            </div>

            {/* Main heading */}

            <div className="mt-4 max-w-4xl text-2xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-xl">
              <h1 className={abhaya.className}>
                Welcome to a space of true wellness
              </h1>
            </div>

            {/* Primary subheading */}
            <p className="mt-4 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed text-white/90 drop-shadow-md">
              Compassionate, intention-led support that looks at the full
              picture of your health, not just one symptom or moment in time.
            </p>

            {/* Free intro call line */}
            <p className="mt-3 max-w-lg text-xs md:text-sm lg:text-base leading-relaxed text-white/85">
              Begin with a free 15 minute intro call to explore your goals and
              see if this support feels right for you.
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/janelle-intentionalwellness"
                className="rounded-full bg-[#f7d6d0] px-8 py-3 text-sm font-semibold tracking-wide text-[#2b211c] shadow-lg transition-all hover:bg-[#f4c5c0]"
                target="_blank"
              >
                Free Intro Call
              </a>

              <a
                href="/services"
                className="rounded-full bg-white/75 px-8 py-3 text-sm font-medium text-[#2b211c] shadow backdrop-blur-sm transition-all hover:bg-white"
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

          <h2
            className={`${abhaya.className} text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl`}
          >
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
              href="https://calendly.com/janelle-intentionalwellness"
              className="rounded-full bg-[#f7d6d0] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#2b211c] shadow-sm hover:bg-[#f4c5c0]"
              target="_blank"
            >
              Free Intro Call
            </a>
            <a
              href="/services"
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
            <p className="mt-5 text-xs font-medium text-[#5d4a3c]">
              — Janelle Lauersdorf BSN, RN
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
