import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!secretKey || !siteUrl) {
    return NextResponse.json(
      { error: "Configuration serveur manquante." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Agios — Dossier de réclamation",
              description:
                "Analyse de tes frais bancaires sur 12 mois + courrier de réclamation prêt à envoyer.",
            },
            unit_amount: 1900,
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/annulation`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Erreur création session Stripe:", err);
    return NextResponse.json(
      { error: "Impossible de créer la session de paiement." },
      { status: 500 }
    );
  }
}
