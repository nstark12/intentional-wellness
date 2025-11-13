// components/sections/ServicesSection.jsx
import { Utensils, HeartPulse, Moon, Calendar } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="mt-20 lg:mt-24">
      {/* Intro block in her voice */}
      <div>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
          Services
        </p>

        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#2b211c]">
          Personalized support designed around your life.
        </h3>

        <p className="mt-6 text-sm leading-relaxed text-[#5d4a3c]">
          Every person’s journey is unique — which is why I don&apos;t believe
          in one-size-fits-all wellness programs. I offer individualized
          coaching that meets clients exactly where they are, whether
          they&apos;re beginning their wellness journey or seeking deeper, more
          intentional change.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
          Together, we look at the whole picture: mindset, habits, emotions,
          stress patterns, physical health, and the goals that matter most to
          your life. From there, we build a customized plan that is supportive,
          realistic, and empowering — a roadmap created specifically for you.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
          Whether you&apos;re working to improve mental wellness, strengthen
          your mindset, create healthier habits, navigate transitions, or simply
          reconnect with yourself, these sessions provide clarity, grounding,
          and direction.
        </p>
      </div>

      {/* Service cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ServiceCard icon={HeartPulse} title="Holistic Health Consults">
          A full-picture conversation about your health, lifestyle, and goals,
          guided by a registered nurse with an eye for both science and
          softness.
        </ServiceCard>

        <ServiceCard icon={Utensils} title="Lifestyle & Nutrition Coaching">
          Understand how food, movement, and daily rhythms impact your energy,
          mood, and hormones — and co-create a plan that feels realistic and
          supportive, not rigid.
        </ServiceCard>

        <ServiceCard icon={Calendar} title="Lab Review & Education">
          Get a clear, compassionate walkthrough of your lab work, what it
          means, and how it connects to how you actually feel day to day — with
          next steps tailored to you.
        </ServiceCard>

        <ServiceCard icon={Moon} title="Stress, Sleep & Burnout Support">
          Gentle, practical support for nervous system regulation, better sleep,
          and rebuilding your capacity when you&apos;re running on empty.
        </ServiceCard>
      </div>
    </section>
  );
}
