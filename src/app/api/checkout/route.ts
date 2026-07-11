import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getTier } from "@/lib/tiers";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { tierId } = body as Record<string, unknown>;
  const tier = typeof tierId === "string" ? getTier(tierId) : undefined;
  if (!tier) {
    return NextResponse.json({ error: "Unknown reward tier" }, { status: 400 });
  }

  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Payments are not configured" }, { status: 500 });
  }

  const stripe = new Stripe(apiKey);
  const origin = request.headers.get("origin") ?? new URL(request.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `SyncME Vault — ${tier.name} (${tier.storage})`,
              description: tier.perks.join(" · "),
            },
            unit_amount: tier.amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/pledge/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#tiers`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Failed to start checkout" }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session failed:", err);
    return NextResponse.json({ error: "Failed to start checkout" }, { status: 502 });
  }
}
