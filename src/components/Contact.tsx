"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Get in touch
        </h2>
        <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Questions, feedback, press?
        </p>
        <p className="mt-4 text-neutral-400">
          Send us a note — we read every message.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              type="text"
              placeholder="Your name"
              value={form.name}
              maxLength={100}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-cyan-400/60"
            />
            <input
              required
              type="email"
              placeholder="you@email.com"
              value={form.email}
              maxLength={200}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-cyan-400/60"
            />
          </div>
          <textarea
            required
            placeholder="Your message"
            value={form.message}
            maxLength={5000}
            rows={5}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-cyan-400/60"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-medium text-cyan-300">
              Thanks — your message is on its way to us.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-full border border-red-400/40 bg-red-400/10 px-5 py-3 text-center text-sm font-medium text-red-300">
              {errorMsg || "Something went wrong. Please try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
