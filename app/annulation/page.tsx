import Link from "next/link";

export const metadata = { title: "Paiement annulé — Agios" };

export default function AnnulationPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <div className="max-w-sm w-full">
        <h1 className="font-titre text-2xl font-semibold text-encre mb-3">
          Paiement annulé
        </h1>
        <p className="text-encre/70 leading-relaxed mb-6">
          Aucune somme n&apos;a été débitée. Tu peux réessayer quand tu veux.
        </p>
        <Link
          href="/"
          className="inline-block bg-corail text-ivoire font-semibold px-6 py-3 rounded-xl"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
