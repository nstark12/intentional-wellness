// components/layout/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-[#e5d5c9] bg-[#fff9f4] text-xs text-[#7a6250]">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Column 1 — Brand */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#2b211c]">
            Intentional Wellness
          </p>
          <p className="leading-relaxed max-w-sm">
            Nurse-led, individualized wellness rooted in compassion, evidence,
            and truly understanding the whole person.
          </p>
          <p className="italic">Care that feels as unique as you are.</p>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b5937b]">
            Explore
          </p>
          <div className="flex flex-col gap-2">
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#about" className="hover:underline">
              About Janelle
            </a>
            <a href="#process" className="hover:underline">
              How It Works
            </a>
            <a href="#schedule" className="hover:underline">
              Book a Session
            </a>
          </div>
        </div>

        {/* Column 3 — Contact */}
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b5937b]">
            Contact
          </p>

          <div className="space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:hello@intentionalwellness.com"
                className="underline"
              >
                hello@intentionalwellness.com
              </a>
            </p>

            <p>Location: [City, State]</p>
            <p>Sessions: Virtual & In-Person</p>
            <p>Hours: By Appointment Only</p>
          </div>

          <p className="pt-2 text-[10px] leading-relaxed text-[#9c8476] max-w-xs">
            Services provided in partnership with Balance Health and Wellness.
            Not a replacement for primary medical care; always consult your
            licensed provider.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e5d5c9] bg-[#f7ebe3]">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p>© {year} Intentional Wellness. All rights reserved.</p>
          <p>
            Website created by{" "}
            <a
              href="https://www.webyte.studio"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              WeByte Studio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
