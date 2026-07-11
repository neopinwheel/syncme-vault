import Image from "next/image";
import EmailCapture from "./EmailCapture";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-300">
            <span className="pulse-ring h-1.5 w-1.5 rounded-full bg-cyan-400" />
            LAUNCHING SOON ON KICKSTARTER
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Own your memories.
            <br />
            <span className="text-cyan-400">Skip the cloud.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-neutral-400">
            SyncME Vault is a pocket-sized AI vault that automatically backs up,
            organizes, and de-dupes every photo and file from your phone —
            entirely offline, entirely private, with no monthly subscription.
          </p>

          <div id="notify" className="mt-8 scroll-mt-24">
            <EmailCapture />
            <p className="mt-3 text-xs text-neutral-500">
              No spam — just a heads up when we launch. Unsubscribe anytime.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-400">
            <span>🔒 100% local &amp; private</span>
            <span>♾️ Zero subscriptions</span>
            <span>⚡ Auto wireless sync</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-3 shadow-2xl shadow-black/60">
            <Image
              src="/media/product-shot.png"
              alt="SyncME Vault device — pocket-sized AI backup drive with glowing status ring and wireless charging pad"
              width={1344}
              height={1024}
              priority
              className="w-full rounded-2xl"
            />
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-widest text-neutral-500">
            Early industrial design render — key-fob sized
          </p>
        </div>
      </div>
    </section>
  );
}
