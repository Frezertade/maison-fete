"use client";

import { FormEvent, useState } from "react";
import { budgets, projectTypes, timelines } from "@/lib/content";

type Props = {
  /** "compact" is used in the hero card; "full" in the contact section. */
  variant?: "compact" | "full";
  source?: string;
};

const field =
  "w-full rounded-xl border border-espresso/10 bg-ivory px-4 py-3 text-espresso transition-all";
const label =
  "mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-warm-gray";

export default function LeadForm({ variant = "full", source = "contact" }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const compact = variant === "compact";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source,
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
        <span className="font-display text-4xl text-champagne">Merci</span>
        <h3 className="mt-3 font-display text-3xl text-espresso">
          Request received
        </h3>
        <p className="mt-3 max-w-sm text-sm text-warm-gray">
          We’ll review your project and connect you with a vetted Lancaster-area
          décor pro — usually within 1 business day.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-8 text-[11px] uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
        >
          Submit another project
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      {/* Honeypot for bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <label className="block text-sm">
        <span className={label}>Name *</span>
        <input required name="name" autoComplete="name" className={field} placeholder="Your name" />
      </label>
      <label className="block text-sm">
        <span className={label}>Phone *</span>
        <input required name="phone" type="tel" autoComplete="tel" className={field} placeholder="(717) 000-0000" />
      </label>
      <label className="block text-sm">
        <span className={label}>Email *</span>
        <input required type="email" name="email" autoComplete="email" className={field} placeholder="you@email.com" />
      </label>
      <label className="block text-sm">
        <span className={label}>ZIP code *</span>
        <input
          required
          name="zip"
          inputMode="numeric"
          pattern="[0-9]{5}"
          maxLength={5}
          autoComplete="postal-code"
          className={field}
          placeholder="17601"
        />
      </label>
      <label className="block text-sm">
        <span className={label}>Project type *</span>
        <select required name="projectType" defaultValue="" className={field}>
          <option value="" disabled>
            Select project
          </option>
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className={label}>Budget</span>
        <select name="budget" defaultValue="" className={field}>
          <option value="" disabled>
            Select budget
          </option>
          {budgets.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className={`block text-sm ${compact ? "sm:col-span-2" : ""}`}>
        <span className={label}>Timeline</span>
        <select name="timeline" defaultValue="" className={field}>
          <option value="" disabled>
            When do you need it?
          </option>
          {timelines.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      {!compact && (
        <label className="block text-sm sm:col-span-2">
          <span className={label}>Tell us about your project</span>
          <textarea
            name="message"
            rows={4}
            className={`${field} resize-y`}
            placeholder="Rooms or event, style you love, date, guest count..."
          />
        </label>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={state === "sending"}
          className="w-full rounded-full bg-espresso px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-ivory transition-all hover:bg-charcoal hover:shadow-xl disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Get My Free Décor Quote"}
        </button>
        {state === "error" && (
          <p className="mt-3 text-sm text-rose">
            Something went wrong — please try again in a moment.
          </p>
        )}
        <p className="mt-3 text-[11px] leading-relaxed text-warm-gray">
          Free, no obligation. By submitting, you agree we may share your
          request with up to 2 independent local décor professionals who may
          contact you by phone, text, or email about your project.
        </p>
      </div>
    </form>
  );
}
