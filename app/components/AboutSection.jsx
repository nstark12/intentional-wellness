import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mt-16 lg:mt-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* LEFT — TEXT */}
        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
            About
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#2b211c]">
            Meet Janelle Lauersdorf, BSN, RN
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#5d4a3c]">
            With more than 25 years in healthcare, Janelle blends traditional
            nursing experience with a holistic, functional approach to wellness.
            Her work is grounded in the belief that true health begins with
            intention and that healing happens when the mind, body, and spirit
            are supported together.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
            She partners with clients to create personalized plans that support
            meaningful, sustainable change — no matter where someone is
            beginning on their wellness journey.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center mt-6 text-sm font-medium text-[#2b211c] underline underline-offset-4 hover:text-[#7a6250]"
          >
            Learn more about Janelle
          </Link>
        </div>

        {/* RIGHT — PORTRAIT NEXT TO TEXT */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-2xl overflow-hidden shadow-md border border-[#e5d5c9] bg-white">
            <Image
              src="/about/janelle.webp"
              alt="Portrait of Janelle Lauersdorf"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
