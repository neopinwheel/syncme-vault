"use client";

import { useState } from "react";
import { TIERS, formatUsd } from "@/lib/tiers";

export default function Tiers() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handlePledge(tierId: string) {
    setErrorMsg("");
    setLoadingId(tierId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tierId }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data?.error || "Could not start checkout");
      }
      window.location.assign(data.url);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Could not start checkout");
      setLoadingId(null);
    }
  }

  return (
    <section id="tiers" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Reward tiers
        </h2>
        <p className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Reserve your unit
        </p>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Secure checkout powered by Stripe. We&apos;re in pre-launch, so
          payments are currently running in Stripe test mode — no real charge
          will be made.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((t) => (
            <div
              key={t.id}
              className={`flex flex-col rounded-2xl border p-6 ${
                t.highlight
                  ? "border-cyan-400/50 bg-cyan-400/[0.06] shadow-lg shadow-cyan-500/10"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {t.highlight && (
                <span className="mb-3 w-fit rounded-full bg-cyan-400 px-3 py-1 text-[11px] font-semibold text-black">
                  MOST ANTICIPATED
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-bold">{formatUsd(t.amount)}</div>
              <div className="mt-1 text-sm text-cyan-400">{t.storage}</div>
              <p className="mt-1 text-xs text-neutral-500">{t.note}</p>

              <ul className="mt-6 flex-1 space-y-2 text-sm text-neutral-400">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handlePledge(t.id)}
                disabled={loadingId === t.id}
                className={`mt-6 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
                  t.highlight
                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                    : "border border-white/15 text-white hover:border-cyan-400/50"
                }`}
              >
                {loadingId === t.id ? "Redirecting…" : `Pledge ${formatUsd(t.amount)}`}
              </button>
            </div>
          ))}
        </div>

        {errorMsg && (
          <p className="mt-6 rounded-xl border border-red-400/40 bg-red-400/10 px-5 py-3 text-center text-sm font-medium text-red-300">
            {errorMsg}
          </p>
        )}

        <p className="mt-6 text-center text-xs text-neutral-500">
          Test mode — use card number 4242 4242 4242 4242, any future
          expiry, and any CVC to complete a test pledge.
        </p>
      </div>
    </section>
  );
}
