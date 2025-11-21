// app/services/page.jsx
import {
  Utensils,
  HeartPulse,
  Brain,
  Leaf,
  TestTube,
  Activity,
  ClipboardList,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div>
      {/* Services Hero */}
      <section className="relative w-full h-[35vh] md:h-[40vh] lg:h-[50vh] 2xl:h-[60vh]">
        <img
          src="/services-hero3.webp"
          alt="Healthy intentional cooking scene"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-[#2b211c]/60" />

        {/* Centered content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#f7e7df]">
            Your Wellness, Personalized
          </p>

          <h1 className="mt-2 text-white text-3xl md:text-4xl font-semibold tracking-tight">
            Services
          </h1>

          <p className="mt-3 max-w-2xl text-sm md:text-base text-[#f5e9e3] leading-relaxed">
            Support designed for your goals, your lifestyle, and your unique
            path to intentional wellness.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-2.5 text-sm font-semibold text-[#2b211c] shadow-md backdrop-blur-sm transition hover:bg-white"
          >
            Book a Free 15 Minute Intro Call
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-12 pt-4 pb-16 lg:pt-16">
        {/* Intro */}
        <section>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
            Services
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#2b211c] sm:text-4xl">
            Services offered at Intentional Wellness.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c] max-w-2xl">
            At Intentional Wellness, every client is unique and every plan is
            individualized. Your plan is created based on your goals, where you
            are starting from, your timeline, and the level of support you need.
            Together, we design a path that feels realistic, empowering, and
            sustainable, because your wellness journey should fit you.
          </p>
        </section>

        {/* Service grid */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <ServiceCard
            icon={Utensils}
            title="Comprehensive nutrition and functional wellness support"
          >
            <p>
              In January 2026, I will complete my board certification in
              Functional Nutrition. My approach centers around meaningful change
              through food, mindset, and intentional habits. I offer fully
              customized nutrition plans tailored to your goals, preferences,
              and lifestyle.
            </p>
            <p className="mt-2 text-xs">
              For local clients, support can include trying new foods together,
              cooking sessions, meal prep help, and in-home visits for kitchen
              organization or nutrition coaching. For distance clients, these
              services can be offered virtually through Zoom.
            </p>
          </ServiceCard>

          <ServiceCard
            icon={HeartPulse}
            title="Weight management and lifestyle coaching"
          >
            <p>
              If your goal is weight management, we will create a sustainable,
              nourishing plan that supports both your physical and emotional
              well-being. No two bodies are the same and no two plans should be
              either.
            </p>
            <p className="mt-2 text-xs">
              I also offer life coaching for anyone feeling stuck, overwhelmed,
              unorganized, or disconnected from their joy. If you feel like you
              have lost your sparkle, we work on clarity, structure, and
              reconnecting with what lights you up.
            </p>
          </ServiceCard>

          <ServiceCard icon={Brain} title="Meditation and mindfulness guidance">
            <p>
              I provide meditation guidance and support for individuals
              navigating life&apos;s challenges, transitions, or emotional
              stressors. Whether you are adjusting to a new stage of life,
              processing change, or seeking grounding and clarity, meditation
              can be a powerful tool.
            </p>
            <p className="mt-2 text-xs">
              Together we work on mindfulness practices, breathwork, guided
              meditation, stress reduction techniques, emotional grounding, and
              coping strategies for life transitions.
            </p>
          </ServiceCard>

          <ServiceCard
            icon={ClipboardList}
            title="Lab review and supplement guidance"
          >
            <p>
              While I do not diagnose, I can review your lab results and help
              you understand what they may indicate about your overall wellness.
              From there, I can recommend targeted supplementation and lifestyle
              adjustments that support your individual needs and address
              potential gaps.
            </p>
          </ServiceCard>

          <ServiceCard
            icon={TestTube}
            title="Food sensitivity and gut barrier testing"
          >
            <p>
              I offer testing for food sensitivities and gut barrier health,
              including evaluation for dysbiosis, leaky gut, and overgrowth of
              harmful bacteria. These insights can uncover root causes of
              inflammation, digestive symptoms, fatigue, skin issues, and more.
            </p>
            <p className="mt-2 text-xs">
              Once we have results, I guide you through a plan to reduce food
              triggers, support gut healing, balance the microbiome, and calm
              underlying inflammation using nutrition, supplementation, and
              lifestyle approaches.
            </p>
          </ServiceCard>

          <ServiceCard icon={Activity} title="Fitness and movement plans">
            <p>
              Movement is essential for overall wellness. I create
              individualized workout routines, movement plans, or fitness
              templates tailored to your goals, physical ability, and schedule.
            </p>
            <p className="mt-2 text-xs">
              Together we build a routine that feels enjoyable, realistic, and
              sustainable so movement becomes a supportive part of your life,
              not a burden.
            </p>
          </ServiceCard>

          <ServiceCard
            icon={Leaf}
            title="Organization and life structure templates"
          >
            <p>
              For clients seeking more order, routine, or flow in daily life, I
              design customized templates and systems such as daily or weekly
              structure, habit-building templates, meal planning systems,
              checklists, and goal-planning tools.
            </p>
            <p className="mt-2 text-xs">
              These supports help reduce stress, improve clarity, and create a
              sense of control and balance in your day to day life.
            </p>
          </ServiceCard>
        </section>
      </div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, children }) {
  return (
    <div className="flex flex-col rounded-3xl border border-[#e5d5c9] bg-[#fff9f4] p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5d5c9] bg-white">
          <Icon className="h-4 w-4 text-black" />
        </div>
        <h2 className="text-sm font-semibold text-[#2b211c]">{title}</h2>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-[#5d4a3c]">
        {children}
      </div>
    </div>
  );
}
