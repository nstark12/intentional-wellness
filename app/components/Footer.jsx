import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[#e5d5c9] bg-[#fff9f4] text-xs text-[#7a6250]">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* Column 1 — Brand */}
        <div className="space-y-3">
          <Image
            src={"/logo.webp"}
            height={100}
            width={200}
            alt="Intentional wellness logo"
          />

          <p className="leading-relaxed max-w-sm">
            Nurse-led holistic care rooted in compassion, connection, and
            understanding the whole person.
          </p>

          <p className="italic">Wellness with intention, clarity, and heart.</p>
        </div>

        {/* Column 2 — Navigation */}
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b5937b]">
            Explore
          </p>

          <div className="flex flex-col gap-2">
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/about" className="hover:underline">
              About Janelle
            </Link>
            <Link
              href="https://us.fullscript.com/welcome/jlauersdorf"
              className="hover:underline"
              target="_blank"
            >
              Supplements
            </Link>
            <Link
              href="https://calendly.com/janelle-intentionalwellness"
              className="hover:underline"
              target="_blank"
            >
              Free Intro Call
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
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
                href="mailto:janelle@intentionalwellness.care"
                className="underline"
              >
                janelle@intentionalwellness.care
              </a>
            </p>

            <p>Location: Wisconsin</p>
            <p>Sessions: Virtual + In-Person</p>
            <p>Hours: By Appointment Only</p>
          </div>

          <p className="pt-2 text-[10px] leading-relaxed text-[#9c8476] max-w-xs">
            Services are wellness-focused and educational in nature. Not a
            replacement for primary medical care. Always consult your licensed
            healthcare provider for medical concerns.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e5d5c9] bg-[#f7ebe3]">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
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
