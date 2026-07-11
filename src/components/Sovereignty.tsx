import Image from "next/image";

export default function Sovereignty() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Data sovereignty
        </h2>
        <p className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Not just backup. A private AI you actually own.
        </p>
        <p className="mt-4 max-w-2xl text-neutral-400">
          SyncME Vault doesn&apos;t just store your files locally — it hosts
          private AI models entirely offline, so organization, search, and
          inference happen on the device in your pocket, not on someone
          else&apos;s server.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/media/privacy-paradox.png"
            alt="Diagram comparing cloud-dependent AI, which routes personal data through third-party servers with latency and risk, against SyncME Vault, which bypasses networks entirely for secure, instant, on-device AI"
            width={1376}
            height={768}
            className="w-full"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/media/hardware-identity.png"
              alt="Close-up render showing the fingerprint sensor routed directly to the SoC via SPI, capacitive touch surfaces, and RGB status light pipe"
              width={1376}
              height={768}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/media/premium-fabrication.png"
              alt="Exploded render of the clamshell enclosure showing heat-set inserts and integrated port gasketing"
              width={1376}
              height={768}
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/media/sovereign-future.png"
            alt="Diagram of SyncME Vault acting as a secure biometric-locked hub connecting sovereign cloud infrastructure, smart home devices, and wearables"
            width={1376}
            height={768}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
