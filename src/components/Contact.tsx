"use client";

import { site } from "@/lib/content";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" data-nav-theme="light" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Let’s Create
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-espresso md:text-5xl">
              Tell us about
              <br />
              <span className="italic text-rose">your celebration</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-warm-gray">
              Share a few details and we’ll follow up with availability, next
              steps, and a complimentary design consult for qualifying events.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-lg text-espresso hover:text-gold"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Phone
                </p>
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className="mt-1 block text-lg text-espresso hover:text-gold"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Service Area
                </p>
                <p className="mt-1 text-lg text-espresso">{site.serviceArea}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Hours
                </p>
                <p className="mt-1 text-lg text-espresso">{site.hours}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-espresso/8 bg-soft-white p-6 shadow-[0_30px_80px_rgba(28,22,18,0.06)] md:p-10">
              {submitted ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                  <span className="font-display text-4xl text-champagne">
                    Merci
                  </span>
                  <h3 className="mt-3 font-display text-3xl text-espresso">
                    Inquiry received
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-warm-gray">
                    Thank you for reaching out. Our team will reply within 1–2
                    business days with next steps for your Lancaster-area event.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[11px] uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm sm:col-span-1">
                    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-warm-gray">
                      Name *
                    </span>
                    <input
                      required
                      name="name"
                      className="w-full rounded-xl border border-espresso/10 bg-ivory px-4 py-3 text-espresso transition-all"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block text-sm sm:col-span-1">
                    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-warm-gray">
                      Email *
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full rounded-xl border border-espresso/10 bg-ivory px-4 py-3 text-espresso transition-all"
                      placeholder="you@email.com"
                    />
                  </label>
                  <label className="block text-sm sm:col-span-1">
                    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-warm-gray">
                      Phone
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full rounded-xl border border-espresso/10 bg-ivory px-4 py-3 text-espresso transition-all"
                      placeholder="(717) 000-0000"
                    />
                  </label>
                  <label className="block text-sm sm:col-span-1">
                    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-warm-gray">
                      Event Date
                    </span>
                    <input
                      name="date"
                      type="date"
                      className="w-full rounded-xl border border-espresso/10 bg-ivory px-4 py-3 text-espresso transition-all"
                    />
                  </label>
                  <label className="block text-sm sm:col-span-1">
                    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-warm-gray">
                      Event Type *
                    </span>
                    <select
                      required
                      name="type"
                      defaultValue=""
                      className="w-full rounded-xl border border-espresso/10 bg-ivory px-4 py-3 text-espresso transition-all"
                    >
                      <option value="" disabled>
                        Select type
                      </option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Baby Shower</option>
                      <option>Graduation</option>
                      <option>Engagement / Proposal</option>
                      <option>Corporate / Gala</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block text-sm sm:col-span-1">
                    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-warm-gray">
                      Venue / City
                    </span>
                    <input
                      name="venue"
                      className="w-full rounded-xl border border-espresso/10 bg-ivory px-4 py-3 text-espresso transition-all"
                      placeholder="Lancaster, PA"
                    />
                  </label>
                  <label className="block text-sm sm:col-span-2">
                    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-warm-gray">
                      Tell us your vision
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full resize-y rounded-xl border border-espresso/10 bg-ivory px-4 py-3 text-espresso transition-all"
                      placeholder="Guest count, color palette, must-have moments..."
                    />
                  </label>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-espresso px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-ivory transition-all hover:bg-charcoal hover:shadow-xl sm:w-auto"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
