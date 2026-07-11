import Image from "next/image";

const gallery = [
  {
    src: "/media/anatomy-electrical.png",
    alt: "Diagram of the electrical core: Mediatek Genio 700 SoC wired to power, charging, storage, input, and security nodes",
    caption: "Anatomy of the electrical core",
  },
  {
    src: "/media/anatomy-mechanical.png",
    alt: "Exploded diagram of the mechanical enclosure: PETG top shell, passive heat spreader, PCB mounting frame, LiPo battery tray, and PETG bottom shell",
    caption: "Mechanical armor & thermals",
  },
  {
    src: "/media/bus-matrix.png",
    alt: "Table listing each component's protocol interface and primary function, from PCIe NVMe storage to SPI biometric authentication",
    caption: "System integration & data bus matrix",
  },
];

export default function Engineering() {
  return (
    <section id="engineering" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Open, buildable hardware
        </h2>
        <p className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Inside the build
        </p>
        <p className="mt-4 max-w-2xl text-neutral-400">
          We&apos;re engineering SyncME Vault in the open — real board
          architecture, real bill of materials, real assembly documentation.
          No black box.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure
              key={g.src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <Image
                src={g.src}
                alt={g.alt}
                width={1376}
                height={768}
                className="w-full"
              />
              <figcaption className="px-4 py-3 text-sm text-neutral-400">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.04]">
          <Image
            src="/media/synthesis.png"
            alt="Summary panel: an estimated $150 investment in desktop fabrication, precision soldering, and embedded systems engineering yields a high-capacity, AI-ready data hub with offline LLM hosting, biometric security, and PCIe transfer speeds"
            width={1376}
            height={768}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
