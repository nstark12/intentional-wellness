// components/sections/FullscriptStrip.jsx
export default function FullscriptStrip() {
  return (
    <section className="mt-16 rounded-3xl border border-[#e5d5c9] bg-[#fff9f4] px-6 py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
            Supplements
          </p>
          <h3 className="mt-1 text-lg font-semibold text-[#2b211c]">
            Professional grade supplements, curated for you.
          </h3>
          <p className="mt-2 text-sm text-[#5d4a3c] max-w-xl">
            Janelle uses Fullscript to provide high quality, practitioner-grade
            supplements that support your individualized wellness plan.
          </p>
        </div>

        <a
          href="https://us.fullscript.com/welcome/jlauersdorf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[#d1b59a] bg-white px-6 py-2.5 text-sm font-semibold text-[#2b211c] shadow-sm hover:bg-[#f7ebe3]"
        >
          Visit Supplement Portal
        </a>
      </div>
    </section>
  );
}
