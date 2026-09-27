import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey || !webhookSecret) {
    console.error("Webhook: configuration manquante.");
    return NextResponse.json({ error: "Configuration manquante." }, { status: 500 });
  }

  const stripe = new Stripe(secretKey);
  const signature = req.headers.get("stripe-signature");
  const body = await req.text();

  let event: Stripe.Event;

  try {
    if (!signature) throw new Error("Signature manquante.");
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Signature webhook invalide:", err);
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log("Paiement confirmé:", {
      sessionId: session.id,
      email: session.customer_details?.email,
      montant: session.amount_total,
    });
  }

  return NextResponse.json({ received: true });
}
