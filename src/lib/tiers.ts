export type TierId = "early-bird" | "standard" | "family-pack" | "founders-edition";

export interface Tier {
  id: TierId;
  name: string;
  storage: string;
  amount: number; // cents (USD)
  note: string;
  highlight: boolean;
  perks: string[];
}

export const TIERS: Tier[] = [
  {
    id: "early-bird",
    name: "Early Bird",
    storage: "512 GB",
    amount: 9900,
    note: "First 500 backers only",
    highlight: false,
    perks: ["512 GB NVMe storage", "USB-C + WiFi 6E sync", "Companion apps, all platforms"],
  },
  {
    id: "standard",
    name: "Standard",
    storage: "1 TB",
    amount: 14900,
    note: "Planned retail: $199",
    highlight: true,
    perks: [
      "1 TB NVMe storage",
      "Everything in Early Bird",
      "AI organization & duplicate cleanup",
      "Fingerprint secure vault",
    ],
  },
  {
    id: "family-pack",
    name: "Family Pack",
    storage: "1 TB × 2",
    amount: 27800,
    note: "Two units, shared setup",
    highlight: false,
    perks: [
      "Two 1 TB units",
      "Shared family albums, separate private spaces",
      "Everything in Standard",
    ],
  },
  {
    id: "founders-edition",
    name: "Founder's Edition",
    storage: "4 TB",
    amount: 29900,
    note: "Limited run, numbered enclosure",
    highlight: false,
    perks: [
      "4 TB NVMe storage",
      "MagSafe ring + wireless charging",
      "Lifetime AI feature updates",
      "Name in the credits",
    ],
  },
];

export function getTier(id: string): Tier | undefined {
  return TIERS.find((t) => t.id === id);
}

export function formatUsd(cents: number): string {
  return `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}
