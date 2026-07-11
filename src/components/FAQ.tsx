const faqs = [
  {
    q: "Is my data really never uploaded anywhere?",
    a: "Correct. Backup, AI organization, deduplication, and search all run on-device. Nothing leaves SyncME Vault unless you explicitly export or share it.",
  },
  {
    q: "Which phones and computers does it work with?",
    a: "iPhone, Android, Windows, macOS, and Linux — no drivers required. It shows up as a flash drive on PC, a NAS over WiFi, and a local cloud in the mobile app.",
  },
  {
    q: "Is there a subscription?",
    a: "No. The hardware purchase includes core backup and organization features. Optional advanced AI packs (e.g. face recognition, highlight reels) may be offered as one-time add-ons, never a required monthly fee.",
  },
  {
    q: "How much storage can it hold?",
    a: "Planned configurations range from 512 GB up to 4 TB, using standard NVMe M.2 modules.",
  },
  {
    q: "When will it ship?",
    a: "We're finalizing hardware validation now. Sign up above and you'll be the first to know our Kickstarter launch date and estimated ship window.",
  },
  {
    q: "What happens to my pledge if the campaign doesn't fund?",
    a: "Standard Kickstarter rules apply — if we don't reach our funding goal, no one is charged. We'll share the funding goal when the campaign goes live.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          FAQ
        </h2>
        <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Questions, answered
        </p>

        <div className="mt-12 divide-y divide-white/10 border-t border-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}
                <span className="shrink-0 text-cyan-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
