const points = [
  {
    stat: "800 GB",
    label: "of photos & video the average phone now carries",
  },
  {
    stat: "$120+/yr",
    label: "spent on cloud storage subscriptions that never stop billing",
  },
  {
    stat: "1000s",
    label: "of near-duplicate shots and screenshots clogging every library",
  },
];

export default function Story() {
  return (
    <section id="story" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              The problem
            </h2>
            <p className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Cloud storage keeps getting more expensive.
              <span className="text-neutral-500"> Your privacy keeps getting smaller.</span>
            </p>
            <p className="mt-6 text-neutral-400">
              Google Photos, iCloud, OneDrive, Dropbox — every one of them wants
              a monthly fee, and every one of them means your family photos
              live on someone else&apos;s servers. Meanwhile your phone is
              drowning in duplicate bursts, blurry shots, and screenshots you&apos;ll
              never look at again.
            </p>
            <p className="mt-4 text-neutral-400">
              We think the fix isn&apos;t a bigger subscription. It&apos;s a
              small, smart device that does the organizing for you — and then
              gets out of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
            {points.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="text-3xl font-bold text-cyan-400">{p.stat}</div>
                <div className="mt-2 text-sm text-neutral-400">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
