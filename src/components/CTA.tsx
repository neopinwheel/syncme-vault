import EmailCapture from "./EmailCapture";

export default function CTA() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Be first in line
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Own your memories. Skip the cloud.
        </h2>
        <p className="mt-4 text-neutral-400">
          Join the list to get notified the moment SyncME Vault launches on
          Kickstarter — plus early-bird pricing before anyone else.
        </p>
        <div className="mt-8 flex justify-center">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
}
