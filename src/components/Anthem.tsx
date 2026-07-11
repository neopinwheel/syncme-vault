export default function Anthem() {
  return (
    <section className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center sm:flex-row sm:text-left">
          <div className="text-2xl">🎵</div>
          <div className="flex-1">
            <h3 className="font-semibold">The unofficial Vault anthem</h3>
            <p className="mt-1 text-sm text-neutral-400">
              A just-for-fun, AI-generated theme track our team made while
              naming the SoC. Turn it up.
            </p>
          </div>
          <audio controls preload="none" className="w-full sm:w-64">
            <source src="/media/vault-anthem.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </section>
  );
}
