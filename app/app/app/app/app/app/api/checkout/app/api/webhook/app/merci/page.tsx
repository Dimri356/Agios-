import Stripe from "stripe";
import Link from "next/link";

export const metadata = {
  title: "Merci — Agios",
};

async function verifierPaiement(sessionId: string | undefined) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!sessionId || !secretKey) return null;

  const stripe = new Stripe(secretKey);
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session.payment_status === "paid" ? session : null;
  } catch {
    return null;
  }
}

export default async function MerciPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const session = await verifierPaiement(searchParams.session_id);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <div className="max-w-sm w-full">
        {session ? (
          <>
            <div className="w-14 h-14 rounded-full bg-corail/10 text-corail-dark flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
              ✓
            </div>
            <h1 className="font-titre text-2xl font-semibold text-encre mb-3">
              Paiement reçu, merci !
            </h1>
            <p className="text-encre/70 leading-relaxed mb-6">
              Ton dossier est en préparation. Tu reçois ton analyse et ton
              courrier de réclamation par email sous 24h à l&apos;adresse{" "}
              <strong>{session.customer_details?.email}</strong>.
            </p>
            <p className="text-sm text-encre/50">
              Une question en attendant ? Réponds simplement à l&apos;email de
              confirmation Stripe que tu viens de recevoir.
            </p>
          </>
        ) : (
          <>
            <h1 className="font-titre text-2xl font-semibold text-encre mb-3">
              On ne retrouve pas ce paiement
            </h1>
            <p className="text-encre/70 leading-relaxed mb-6">
              Si l&apos;argent a bien été débité, pas d&apos;inquiétude — écris-nous,
              on vérifie et on te répond. Sinon, retente le paiement.
            </p>
            <Link
              href="/"
              className="inline-block bg-corail text-ivoire font-semibold px-6 py-3 rounded-xl"
            >
              Retour à l&apos;accueil
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
