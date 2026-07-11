import Link from "next/link";
import Stripe from "stripe";

async function getSession(sessionId: string | undefined) {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey || !sessionId) return null;

  try {
    const stripe = new Stripe(apiKey);
    return await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });
  } catch {
    return null;
  }
}

export default async function PledgeSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const session = await getSession(session_id);
  const item = session?.line_items?.data?.[0];
  const paid = session?.payment_status === "paid";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#07080a] px-6 py-24 text-center text-neutral-100">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/60">
        <span className="h-4 w-4 rounded-full bg-cyan-400" />
      </div>

      <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
        {paid ? "You're in." : "Checkout complete"}
      </h1>

      {item ? (
        <p className="mt-4 max-w-md text-neutral-400">
          Thanks for backing <span className="text-white">{item.description}</span>.
          A confirmation has been sent to your email.
        </p>
      ) : (
        <p className="mt-4 max-w-md text-neutral-400">
          Thanks for your pledge to SyncME Vault. A confirmation has been sent
          to your email.
        </p>
      )}

      <p className="mt-2 text-xs uppercase tracking-widest text-neutral-600">
        Processed via Stripe test mode — no real charge was made
      </p>

      <Link
        href="/"
        className="mt-10 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
      >
        Back to SyncME Vault
      </Link>
    </div>
  );
}
