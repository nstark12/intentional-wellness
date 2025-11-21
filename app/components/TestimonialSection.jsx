// components/sections/TestimonialSection.jsx
import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="mt-20 lg:mt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
          Testimonials
        </p>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-[#2b211c]">
          What clients are saying.
        </h3>
        <p className="mt-3 text-sm text-[#5d4a3c]">
          Real stories from clients who have worked with Janelle on food,
          mindset, and everyday wellness.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-3xl rounded-3xl border border-[#e5d5c9] bg-[#fff9f4] p-6 md:p-8 shadow-sm">
          {/* Stars + meta */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-[#b07b5b]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-xs font-medium text-[#7a6250]">
                5.0
              </span>
            </div>
            <p className="text-[11px] text-[#9c8476]">7 days ago</p>
          </div>

          {/* Quote */}
          <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
            Janelle listens and then works with you to find a mutually
            acceptable plan that outlines your priorities and goals. I received
            a meal plan with options. No weighing everything, no counting points
            or macros. Just good healthy food with a focus on how it is going to
            fuel my body.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#5d4a3c]">
            When I received my food sensitivity testing I was given a plan with
            alternatives, which was huge. I feel full, energized, and I am
            seeing progress along with feeling better overall. I highly
            recommend her services.
          </p>

          {/* Optional name line (if/when you have it) */}
          {/* <p className="mt-4 text-xs font-medium text-[#7a6250]">
            — Client Name
          </p> */}
        </div>
      </div>
    </section>
  );
}
