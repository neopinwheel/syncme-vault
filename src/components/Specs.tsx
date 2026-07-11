const specs = [
  { label: "Processor", value: "ARM SoC w/ WiFi 6E + Bluetooth LE (Mediatek Genio 700 class)" },
  { label: "Storage", value: "NVMe SSD, 512 GB – 4 TB (M.2, upgradeable)" },
  { label: "Connectivity", value: "WiFi 6E, Bluetooth LE, USB-C 3.2 Gen 2" },
  { label: "Battery", value: "3.7V LiPo, hot-swap capable charging" },
  { label: "Charging", value: "USB-C wired + optional Qi wireless charging" },
  { label: "Security", value: "Optional capacitive fingerprint sensor, encrypted vault" },
  { label: "Mounting", value: "Optional MagSafe-compatible ring" },
  { label: "Indicators", value: "RGB status ring + capacitive touch button" },
  { label: "Form factor", value: "Car key fob sized, pocket portable" },
  { label: "Thermal", value: "Passive heat spreader over NVMe module" },
];

export default function Specs() {
  return (
    <section id="specs" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Under the hood
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tech specs
            </p>
            <p className="mt-6 text-neutral-400">
              SyncME Vault pairs a WiFi 6E-capable ARM SoC with an NVMe SSD in a
              sealed, key-fob-sized enclosure — enough horsepower to run on-device
              AI for photo scoring, deduplication, and search without a cloud
              round-trip.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-neutral-500">
              Specifications are preliminary and may change before production.
            </p>
          </div>

          <dl className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
            {specs.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:justify-between sm:gap-6">
                <dt className="text-sm font-medium text-neutral-300">{s.label}</dt>
                <dd className="text-sm text-neutral-500 sm:text-right">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
