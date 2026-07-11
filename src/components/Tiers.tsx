const tiers = [
  {
    name: "Early Bird",
    price: "$99",
    storage: "512 GB",
    note: "First 500 backers only",
    highlight: false,
    perks: ["512 GB NVMe storage", "USB-C + WiFi 6E sync", "Companion apps, all platforms"],
  },
  {
    name: "Standard",
    price: "$149",
    storage: "1 TB",
    note: "Planned retail: $199",
    highlight: true,
    perks: [
      "1 TB NVMe storage",
      "Everything in Early Bird",
      "AI organization & duplicate cleanup",
      "Fingerprint secure vault",
    ],
  },
  {
    name: "Family Pack",
    price: "$139 ea.",
    storage: "1 TB × 2",
    note: "Two units, shared setup",
    highlight: false,
    perks: [
      "Two 1 TB units",
      "Shared family albums, separate private spaces",
      "Everything in Standard",
    ],
  },
  {
    name: "Founder's Edition",
    price: "$299",
    storage: "4 TB",
    note: "Limited run, numbered enclosure",
    highlight: false,
    perks: [
      "4 TB NVMe storage",
      "MagSafe ring + wireless charging",
      "Lifetime AI feature updates",
      "Name in the credits",
    ],
  },
];

export default function Tiers() {
  return (
    <section id="tiers" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Planned reward tiers
        </h2>
        <p className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Reserve your spot before we launch
        </p>
        <p className="mt-4 max-w-2xl text-neutral-400">
          These are the reward tiers we&apos;re planning for our Kickstarter
          campaign. Sign up to get notified the moment pledging opens —
          nothing is charged now.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.name}
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
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
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

              <a
                href="#notify"
                className={`mt-6 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition ${
                  t.highlight
                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                    : "border border-white/15 text-white hover:border-cyan-400/50"
                }`}
              >
                Notify me
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
