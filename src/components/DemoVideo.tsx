export default function DemoVideo() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          See it
        </h2>
        <p className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          The concept film
        </p>
        <p className="mt-4 max-w-2xl text-neutral-400">
          An early look at the design and vision behind SyncME Vault.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/60">
          <video
            className="w-full"
            controls
            preload="metadata"
            poster="/media/product-shot.png"
          >
            <source src="/media/product-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
