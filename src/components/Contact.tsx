"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const QUERY_TYPES = [
  "General question",
  "Press & media",
  "Partnership",
  "Investor",
  "Support",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  subject: QUERY_TYPES[0],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-cyan-400/60 focus:bg-white/[0.07]";
  const labelClass = "mb-1.5 block text-xs font-medium text-neutral-400";

  return (
    <section id="contact" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get in touch
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Questions, feedback, press?
          </p>
          <p className="mt-4 text-neutral-400">
            Send us a note and let us know what it&apos;s about — we read every
            message and reply from a real inbox.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-2xl shadow-black/40 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>
              <input
                id="contact-name"
                required
                type="text"
                placeholder="Ada Lovelace"
                value={form.name}
                maxLength={100}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <input
                id="contact-email"
                required
                type="email"
                placeholder="you@email.com"
                value={form.email}
                maxLength={200}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="contact-subject" className={labelClass}>
              What&apos;s this about?
            </label>
            <select
              id="contact-subject"
              value={form.subject}
              onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
              className={`${inputClass} appearance-none bg-[right_1rem_center] bg-no-repeat pr-10`}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2367e8f9' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m5 7.5 5 5 5-5'/%3E%3C/svg%3E\")",
              }}
            >
              {QUERY_TYPES.map((t) => (
                <option key={t} value={t} className="bg-[#0a0b0d] text-white">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="contact-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="contact-message"
              required
              placeholder="Tell us what's on your mind..."
              value={form.message}
              maxLength={5000}
              rows={5}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-medium text-cyan-300">
              ✓ Thanks — your message is on its way to us.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 rounded-xl border border-red-400/40 bg-red-400/10 px-5 py-3 text-center text-sm font-medium text-red-300">
              {errorMsg || "Something went wrong. Please try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
