"use client";

import React, { useEffect, useRef, useState } from "react";
import { Abhaya_Libre } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const startedAt = useRef(Date.now());
  const honeyRef = useRef(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function handleSubmit(e) {
    // Honeypot check
    const honeyFilled =
      honeyRef.current && honeyRef.current.value.trim().length > 0;

    // Human-time check (at least 3s on page)
    const tooFast = Date.now() - startedAt.current < 3000;

    if (honeyFilled || tooFast) {
      e.preventDefault();
      alert("Your message could not be sent. Please try again.");
      return;
    }

    // Let the browser submit to FormSubmit.co
    setSubmitted(true);
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
        {submitted ? (
          <p className="text-sm text-emerald-700">
            Thank you for reaching out — your message is on its way. If you
            don&apos;t hear back within a few days, you can also email{" "}
            <a
              href="mailto:janelle@intentionalwellness.care"
              className="underline"
            >
              janelle@intentionalwellness.care
            </a>
            .
          </p>
        ) : (
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            action="https://formsubmit.co/janelle@intentionalwellness.care"
            method="POST"
          >
            {/* FormSubmit options */}
            <input
              type="hidden"
              name="_subject"
              value="New website contact from Intentional Wellness"
            />
            {/* Optional redirect after submit:
            <input
              type="hidden"
              name="_next"
              value="https://intentionalwellness.care/thank-you"
            />
            */}

            {/* Honeypot: visually hidden but visible to bots */}
            <div className="sr-only" aria-hidden="true">
              <label>
                Do not fill this out
                <input
                  ref={honeyRef}
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

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
              Please avoid sharing highly sensitive medical details in this
              form. Janelle will follow up directly to discuss your needs and
              next steps.
            </p>

            {/* Submit */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#f7d6d0] px-8 py-3 text-sm font-semibold tracking-wide text-[#2b211c] shadow-lg transition-all hover:bg-[#f4c5c0]"
              >
                Send message
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
