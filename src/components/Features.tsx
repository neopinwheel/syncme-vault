const features = [
  {
    icon: "🔄",
    title: "Automatic wireless backup",
    body: "The moment you're home and charging, new photos and files sync over WiFi 6E — no cables, no app to remember to open.",
  },
  {
    icon: "🧠",
    title: "AI photo organization",
    body: "Trips, family, pets, food, receipts, screenshots — sorted automatically into albums, no folders required.",
  },
  {
    icon: "🪞",
    title: "Duplicate & near-duplicate cleanup",
    body: "Embedding-based matching finds exact copies and near-duplicate bursts, even across renamed files and WhatsApp forwards.",
  },
  {
    icon: "⭐",
    title: "Best-shot selection",
    body: "AI scores every burst for focus, exposure, and expression, so you keep the best frame instead of all twenty-five.",
  },
  {
    icon: "🔐",
    title: "Secure vault",
    body: "A private, encrypted space unlockable by fingerprint or PIN — for IDs, passports, and anything you'd never put in the cloud.",
  },
  {
    icon: "👪",
    title: "Shared family backup",
    body: "One device, separate private spaces for everyone, plus shared family albums for the moments you want together.",
  },
  {
    icon: "🔍",
    title: "Offline AI search",
    body: "“Videos from last Diwali” or “photos where my son wears blue” — search that never leaves the device.",
  },
  {
    icon: "💻",
    title: "Cross-platform, no drivers",
    body: "Works as a flash drive on PC, a NAS over WiFi, and a local cloud on iPhone, Android, macOS, and Linux.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          What it does
        </h2>
        <p className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Not just storage. A personal AI cloud.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.04]"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
