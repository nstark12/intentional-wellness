import Link from "next/link";
import { Utensils, HeartPulse, Moon, Calendar } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Abhaya_Libre } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // choose what you need
  display: "swap",
});

export default function ServicesSection() {
  return (
    <section id="services" className="mt-20 lg:mt-24 relative">
      {/* FULL-WIDTH BACKGROUND */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#f7ebe3]">
        {/* INNER CONTENT WRAPPER */}
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-10">
          {/* The rounded card inside */}
          <div className="rounded-3xl border border-[#f0ddcf] bg-[#fff4ec] px-5 py-8 md:px-8 md:py-10">
            {/* Header + intro */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
                  Services
                </p>

                <h3
                  className={`${abhaya.className} mt-1 text-3xl md:text-4xl font-semibold tracking-tight text-[#2b211c]`}
                >
                  Personalized support for your whole self.
                </h3>

                <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-[#5d4a3c]">
                  From nutrition and stress support to mindset and lifestyle
                  coaching, each plan is tailored to your goals, your season of
                  life, and the level of support you need.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[#d1b59a] bg-white px-4 py-2 text-xs md:text-sm font-medium text-[#2b211c] shadow-sm hover:bg-[#f7ebe3]"
              >
                View all services
              </Link>
            </div>

            {/* Highlighted service previews */}
            <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-2">
              <ServiceCard icon={HeartPulse} title="Holistic health consults">
                A full-picture look at your health story, lifestyle, and goals
                with nurse-led guidance and a focus on the root causes.
              </ServiceCard>

              <ServiceCard
                icon={Utensils}
                title="Lifestyle and nutrition coaching"
              >
                Support with food, habits, and daily rhythms so you can feel
                more energized, grounded, and confident in your choices.
              </ServiceCard>

              <ServiceCard icon={Calendar} title="Lab review and education">
                A clear, compassionate walkthrough of your labs and what they
                may mean for your overall wellness, plus next step
                recommendations.
              </ServiceCard>

              <ServiceCard
                icon={Moon}
                title="Stress, sleep, and burnout support"
              >
                Practical tools for nervous system regulation, deeper rest, and
                rebuilding capacity when you feel stretched thin.
              </ServiceCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
