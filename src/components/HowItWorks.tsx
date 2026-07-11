const steps = [
  {
    n: "01",
    title: "Drop it in your bag",
    body: "SyncME Vault is key-fob sized and battery powered. Clip it, pocket it, forget it.",
  },
  {
    n: "02",
    title: "Walk in the door",
    body: "Your phone auto-connects over WiFi 6E the moment you're home. No app to open.",
  },
  {
    n: "03",
    title: "AI takes over",
    body: "New photos and videos are backed up, deduped, scored, and sorted into albums — locally.",
  },
  {
    n: "04",
    title: "It goes back to sleep",
    body: "No cloud upload, no notifications, no subscription. Just a private, growing archive.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          How it works
        </h2>
        <p className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Set it once. It runs itself.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative pl-1">
              <div className="text-sm font-mono text-cyan-400/70">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
