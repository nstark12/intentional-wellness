"use client";

import { useState } from "react";
import { Abhaya_Libre } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // choose what you need
  display: "swap",
});

export default function ContactPage() {
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 pt-10 pb-16 lg:pt-16">
      <section>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#b5937b]">
          Contact
        </p>
        <h1
          className={`${abhaya.className} mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-[#2b211c]`}
        >
          Get in touch with Janelle
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[#5d4a3c]">
          Have a question about working together, functional medicine, or
          scheduling a session? Send a message below and Janelle will get back
          to you as soon as she&apos;s able.
        </p>
      </section>

      <section className="mt-8 rounded-3xl border border-[#e5d5c9] bg-[#fff9f4] p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#2b211c]"
            >
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-xl border border-[#e5d5c9] bg-white px-3 py-2 text-sm text-[#2b211c] shadow-sm focus:border-[#b5937b] focus:outline-none focus:ring-1 focus:ring-[#b5937b]"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#2b211c]"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-[#e5d5c9] bg-white px-3 py-2 text-sm text-[#2b211c] shadow-sm focus:border-[#b5937b] focus:outline-none focus:ring-1 focus:ring-[#b5937b]"
            />
          </div>

          {/* Phone (optional) */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#2b211c]"
            >
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 w-full rounded-xl border border-[#e5d5c9] bg-white px-3 py-2 text-sm text-[#2b211c] shadow-sm focus:border-[#b5937b] focus:outline-none focus:ring-1 focus:ring-[#b5937b]"
            />
          </div>

          {/* How did you hear about us */}
          <div>
            <label
              htmlFor="referral"
              className="block text-sm font-medium text-[#2b211c]"
            >
              How did you hear about Intentional Wellness?
            </label>
            <select
              id="referral"
              name="referral"
              className="mt-1 w-full rounded-xl border border-[#e5d5c9] bg-white px-3 py-2 text-sm text-[#2b211c] shadow-sm focus:border-[#b5937b] focus:outline-none focus:ring-1 focus:ring-[#b5937b]"
              defaultValue=""
            >
              <option value="" disabled>
                Please select…
              </option>
              <option value="google">Google search</option>
              <option value="social">Social media</option>
              <option value="friend-family">Friend or family</option>
              <option value="provider">Healthcare provider referral</option>
              <option value="event">Event / workshop</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Subject / Type of support */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-[#2b211c]"
            >
              What are you reaching out about?
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Ex: New client inquiry, question about services, etc."
              className="mt-1 w-full rounded-xl border border-[#e5d5c9] bg-white px-3 py-2 text-sm text-[#2b211c] shadow-sm focus:border-[#b5937b] focus:outline-none focus:ring-1 focus:ring-[#b5937b]"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#2b211c]"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-xl border border-[#e5d5c9] bg-white px-3 py-2 text-sm text-[#2b211c] shadow-sm focus:border-[#b5937b] focus:outline-none focus:ring-1 focus:ring-[#b5937b]"
            />
          </div>

          {/* Optional: consent line */}
          <p className="text-[11px] leading-relaxed text-[#8a7565]">
            Please avoid sharing highly sensitive medical details in this form.
            Janelle will follow up directly to discuss your needs and next
            steps.
          </p>

          {/* Submit + status */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-[#f7d6d0] px-8 py-3 text-sm font-semibold tracking-wide text-[#2b211c] shadow-lg transition-all hover:bg-[#f4c5c0] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <p className="text-xs text-emerald-700">
                Thank you for reaching out — your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-600">
                Something went wrong while sending your message. Please try
                again or email{" "}
                <a
                  href="mailto:janelle@intentionalwellness.care"
                  className="underline"
                >
                  janelle@intentionalwellness.care
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
