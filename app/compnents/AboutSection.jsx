// components/sections/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="mt-16 lg:mt-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
            About
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            Meet Janelle Lauersdorf, BSN, RN.
          </h3>

          <p className="text-sm leading-relaxed text-[#5d4a3c]">
            Intentional Wellness was founded on a simple but powerful belief:
            <span className="font-medium">
              {" "}
              true health doesn’t happen by accident — it happens through
              intention.
            </span>
            Lasting change requires commitment, consistency, courage, and
            desire, and the transformation that follows is always worth it.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
            With a{" "}
            <span className="font-medium">
              25-year foundation in healthcare
            </span>
            , my practice is built on the understanding that every person has
            the ability to take control of their health and well-being — often
            just needing the right support, mindset, and guidance to get there.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
            I provide holistic, mind-body-spirit-centered care because
            everything in a person’s life is connected: mental health, physical
            health, emotional well-being, daily habits, stress, relationships,
            and the stories we tell ourselves. Healing and growth happen when
            all parts are addressed together.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
            I offer individualized wellness coaching to help people reach their
            goals — no matter where they’re starting from. Each client has
            unique needs, motivations, and challenges, so I build customized,
            comprehensive plans that honor their personal journey.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
            Whether someone is looking to improve mental wellness, build
            healthier habits, navigate life changes, strengthen their mindset,
            or reconnect with themselves, we work together to create a path
            forward that feels achievable and meaningful.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
            My approach emphasizes the power of intentional action — small,
            consistent steps that lead to big shifts. Through compassionate
            coaching, mindset work, and holistic strategies, clients learn to
            create balance, break through obstacles, and cultivate lasting
            wellness.
          </p>

          <p className="mt-6 text-sm italic text-[#7a6250]">
            Everything matters. Everything is connected. Every person deserves
            to feel their best — from the inside out.
          </p>

          <p className="mt-4 text-sm font-medium text-[#5d4a3c]">
            — Janelle Lauersdorf, BSN, RN
            <br />
            Founder, Intentional Wellness
          </p>
        </div>

        <div className="rounded-3xl border border-[#e5d5c9] bg-linear-to-br from-[#f7ebe3] via-[#f7d6d0] to-[#fdf6f0] p-6">
          <div className="flex h-56 items-center justify-center rounded-2xl border border-white/70 bg-white/30 backdrop-blur-sm">
            {/* Replace this with her actual image when you have it */}
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#7a6250]">
              Janelle&apos;s Portrait
            </span>
          </div>
          <p className="mt-4 text-xs text-[#7a6250]">
            This space is reserved for a warm, approachable headshot or
            lifestyle photo of Janelle that reflects her calm, caring presence.
          </p>
        </div>
      </div>
    </section>
  );
}
