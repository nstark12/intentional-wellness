// app/about/page.jsx
import Image from "next/image";
import { HeartPulse, Sparkles, Coffee, Leaf } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-8 pt-8 pb-16 lg:pt-16">
      {/* Hero – centered intro */}
      <section className="text-center max-w-2xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
          About Janelle
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#2b211c] sm:text-4xl">
          A nurse with a heart for whole person healing.
        </h1>

        <div className="mt-4 flex flex-wrap justify-center gap-3 text-[11px] text-[#5d4a3c]">
          <IconPill icon={HeartPulse} label="27 years in healthcare" />
          <IconPill icon={Sparkles} label="Functional medicine focus" />
          <IconPill icon={Leaf} label="Mind body spirit centered" />
        </div>

        <p className="mt-6 text-sm leading-relaxed text-[#5d4a3c]">
          With over 27 years of experience in health care, my passion has always
          been helping others heal, grow, and discover what is possible for
          their health. My background is diverse, which has given me a deep
          understanding of the many layers that contribute to a person&apos;s
          overall well-being.
        </p>
      </section>

      {/* Main story + image column */}
      <section className="mt-10 lg:mt-14 flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-start">
        {/* Story text */}
        <div className="lg:flex-3 space-y-4 text-sm leading-relaxed text-[#5d4a3c]">
          <p>
            No matter which role I was in over the years, the most rewarding
            part has always been seeing someone feel better, learn something
            new, or take a meaningful step forward in their wellness journey.
          </p>
          <p>
            For the past three years, I have been working in functional medicine
            alongside a nurse practitioner, and it has felt like the work I was
            always meant to do. Functional medicine opened the door for me to
            look at health through an individualized, root-cause, whole-person
            lens that aligns with my belief that healing is multifaceted and
            deeply personal.
          </p>
          <p className="pt-2 text-[#2b211c] font-semibold">
            Beyond the clinic.
          </p>
          <p>
            I have been married to my husband for 21 years, and together we are
            raising four wonderful daughters, ranging in age from 20 to 11. As
            my children continue to grow and gain independence, I have felt
            called to expand my ability to serve others in a more intentional
            and independent way. This work genuinely fills my cup and is
            something I know I will continue doing for many years to come.
          </p>
          <p>
            In my spare time, I love all things food, from meal prepping to
            cooking and trying new recipes. I love being outdoors in nature,
            whether it is a simple walk or exploring somewhere new. I treasure
            coffee dates with my girlfriends, and one of my greatest joys is
            watching my children play sports and cheering them on from the
            sidelines.
          </p>
        </div>

        {/* Image column – stacked, closer to text */}
        <div className="lg:flex-2 flex flex-col gap-6 max-w-sm mx-auto">
          {/* Janelle portrait */}
          <div className="relative aspect-3/4 w-full rounded-3xl overflow-hidden border border-[#dbc2ac] bg-[#fff9f4] shadow-md shadow-[#e6d2c2]">
            <Image
              src="/about/girls.webp"
              alt="Portrait of Janelle Lauersdorf and daughters"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="mt-16">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <InterestCard
            icon={Coffee}
            title="Coffee & connection"
            text="Slow moments with friends, real conversation, and time to exhale."
          />
          <InterestCard
            icon={Leaf}
            title="Nature & movement"
            text="Walks outside, fresh air, and simple movement that feels good."
          />
          <InterestCard
            icon={HeartPulse}
            title="Family & sports"
            text="Cheering on my daughters and being present for the moments that matter."
          />
          <InterestCard
            icon={Sparkles}
            title="Intentional living"
            text="Building routines, habits, and rhythms that support a grounded life."
          />
        </div>
      </section>

      {/* Closing */}
      <section className="mt-16 rounded-3xl border border-[#e5d5c9] bg-[#fff9f4] p-6 md:p-8">
        <h2 className="text-lg font-semibold text-[#2b211c]">
          I am here to walk alongside you.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#5d4a3c]">
          Through Intentional Wellness, I am honored to empower individuals to
          take back control of their well-being with guidance, compassion, and a
          holistic mindset. I believe deeply in the mind body spirit connection
          and I am committed to helping each person discover the strength and
          balance already within them.
        </p>
        <p className="mt-4 text-sm font-medium text-[#5d4a3c]">
          I am here to support you in creating meaningful, sustainable,
          intentional wellness that lasts.
        </p>
      </section>
    </div>
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

function InterestCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-[#e5d5c9] bg-white/70 p-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5d5c9] bg-[#fff9f4]">
          <Icon className="h-4 w-4 text-black" />
        </div>
        <h3 className="text-sm font-semibold text-[#2b211c]">{title}</h3>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-[#5d4a3c]">{text}</p>
    </div>
  );
}
