// components/sections/ProcessSection.jsx
export default function ProcessSection() {
  return (
    <section id="process" className="mt-16 lg:mt-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
            How it works
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            Simple, supportive, and at your pace.
          </h3>

          <ol className="mt-6 space-y-4 text-sm text-[#5d4a3c]">
            <li>
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f7d6d0] text-xs font-semibold">
                1
              </span>
              <span className="font-medium">Connect.</span> Share a bit about
              yourself and what you&apos;re hoping to work on.
            </li>
            <li>
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f7d6d0] text-xs font-semibold">
                2
              </span>
              <span className="font-medium">Meet.</span> We&apos;ll have a calm,
              unhurried session where we map out your priorities and next steps.
            </li>
            <li>
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f7d6d0] text-xs font-semibold">
                3
              </span>
              <span className="font-medium">Support.</span> Based on your needs,
              we&apos;ll create an ongoing plan with check-ins, resources, and
              adjustments as you grow.
            </li>
          </ol>
        </div>

        <div
          id="schedule"
          className="rounded-3xl border border-[#e5d5c9] bg-white/80 p-6 shadow-sm"
        >
          <h4 className="text-sm font-semibold">
            Ready to book your first session?
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-[#5d4a3c]">
            Choose a time that works for you. Once your session is booked,
            you&apos;ll receive a confirmation email with next steps and a short
            questionnaire so we can make the most of our time together.
          </p>

          <a
            href="#"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#f7d6d0] px-4 py-2.5 text-xs font-semibold tracking-wide text-[#2b211c] hover:bg-[#f4c5c0]"
          >
            Open scheduling
          </a>

          <p className="mt-3 text-[11px] leading-relaxed text-[#7a6250]">
            Prefer to email instead? Reach out at{" "}
            <a
              href="mailto:hello@intentionalwellness.com"
              className="underline"
            >
              hello@intentionalwellness.com
            </a>{" "}
            and we&apos;ll find a time together.
          </p>
        </div>
      </div>
    </section>
  );
}
