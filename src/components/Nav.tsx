const links = [
  { href: "#story", label: "Story" },
  { href: "#features", label: "Features" },
  { href: "#specs", label: "Specs" },
  { href: "#engineering", label: "Engineering" },
  { href: "#tiers", label: "Rewards" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07080a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/60">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          SyncME&nbsp;Vault
        </a>
        <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#notify"
          className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
        >
          Get notified
        </a>
      </div>
    </header>
  );
}
