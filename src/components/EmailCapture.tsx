"use client";

import { useState, type FormEvent } from "react";

export default function EmailCapture({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300">
        You&apos;re on the list — we&apos;ll email you the moment the campaign goes live.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full ${compact ? "max-w-sm" : "max-w-md"} flex-col gap-3 sm:flex-row`}
    >
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-cyan-400/60"
      />
      <button
        type="submit"
        className="whitespace-nowrap rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
      >
        Notify me
      </button>
    </form>
  );
}
