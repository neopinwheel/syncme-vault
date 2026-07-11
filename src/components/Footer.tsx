export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 sm:flex-row">
        <div className="flex items-center gap-2 font-medium text-neutral-300">
          <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/60">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
          SyncME Vault
        </div>
        <p className="text-center">
          SyncME Vault is currently in development. This page previews our
          upcoming crowdfunding campaign — no pledges are being collected yet.
        </p>
        <p>&copy; {new Date().getFullYear()} SyncME Vault</p>
      </div>
    </footer>
  );
}
