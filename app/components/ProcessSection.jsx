import Link from "next/link";
import { Abhaya_Libre } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // choose what you need
  display: "swap",
});

export default function ProcessSection() {
  return (
    <section id="process" className="mt-16 lg:mt-24 relative">
      {/* FULL-WIDTH BACKGROUND */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#f7ebe3]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            {/* Left column */}
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
                How it works
              </p>

              <h3
                className={`${abhaya.className} mt-2 text-3xl font-semibold tracking-tight text-[#2b211c]`}
              >
                Simple, supportive, and at your pace.
              </h3>

              <ol className="mt-6 space-y-4 text-sm text-[#5d4a3c]">
                <li>
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f7d6d0] text-xs font-semibold">
                    1
                  </span>
                  <span className="font-medium">Connect.</span> Share a bit
                  about yourself and your goals.
                </li>

                <li>
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f7d6d0] text-xs font-semibold">
                    2
                  </span>
                  <span className="font-medium">Meet.</span> We’ll have a calm,
                  unhurried session where we map out priorities and next steps.
                </li>

                <li>
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f7d6d0] text-xs font-semibold">
                    3
                  </span>
                  <span className="font-medium">Support.</span> Together we’ll
                  build an ongoing plan with check-ins, resources, and
                  adjustments as you grow.
                </li>
              </ol>

              <Link
                href="/contact"
                className="mt-6 inline-flex text-sm font-medium text-[#2b211c] underline underline-offset-4 hover:text-[#7a6250]"
              >
                Visit the contact page
              </Link>
            </div>

            {/* Right column: scheduling card */}
            <div
              id="schedule"
              className="rounded-3xl border border-[#e5d5c9] bg-white/80 p-6 shadow-sm"
            >
              <h4 className="text-sm font-semibold text-[#2b211c]">
                Ready to book your first session?
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-[#5d4a3c]">
                Choose a time that works for you. After booking, you’ll receive
                a confirmation email with next steps and a short questionnaire
                so we can make the most of your session.
              </p>

              <a
                href="#"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#f7d6d0] px-4 py-2.5 text-xs font-semibold tracking-wide text-[#2b211c] hover:bg-[#f4c5c0]"
              >
                Open scheduling
              </a>

              <p className="mt-3 text-[11px] leading-relaxed text-[#7a6250]">
                Prefer email? Reach out anytime at{" "}
                <a
                  href="mailto:janelle@intentionalwellness.care"
                  className="underline"
                >
                  janelle@intentionalwellness.care
                </a>{" "}
                and we’ll find a time together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
