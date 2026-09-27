"use client";

import { useState } from "react";

const BENEFICES = [
  {
    titre: "On lit ton relevé pour toi",
    texte:
      "Douze mois d'historique passés au peigne fin : commissions d'intervention, frais de rejet, options jamais utilisées.",
  },
  {
    titre: "On compare aux plafonds légaux",
    texte:
      "La plupart de ces frais sont plafonnés par la loi. On te montre noir sur blanc ce qui dépasse.",
  },
  {
    titre: "Ton courrier, prêt à envoyer",
    texte:
      "Une réclamation argumentée, adressée à ta bonne agence. Tu n'as plus qu'à l'envoyer.",
  },
];

export default function LandingPage() {
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function payer() {
    setErreur(null);
    setChargement(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Erreur inconnue");
      }
      window.location.href = data.url;
    } catch (e) {
      setErreur(
        "Le paiement n'a pas pu démarrer. Réessaie dans un instant."
      );
      setChargement(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Héro */}
      <section className="flex-1 px-5 pt-10 pb-8 max-w-md mx-auto w-full flex flex-col gap-6">
        <div className="inline-flex self-start items-center gap-1.5 bg-corail/10 text-corail-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
          FRAIS BANCAIRES
        </div>

        <h1 className="font-titre text-[2.1rem] leading-[1.1] font-semibold text-encre">
          Ta banque te doit probablement de l&apos;argent.
        </h1>

        <p className="text-base leading-relaxed text-encre/80">
          Commissions d&apos;intervention, frais de rejet, options facturées
          sans usage : ils s&apos;ajoutent par petites lignes illisibles. La
          plupart sont plafonnés par la loi — et presque jamais contestés.
        </p>

        <div className="bg-encre text-ivoire rounded-2xl p-5">
          <p className="text-sm text-ivoire/70 mb-1">
            Frais bancaires moyens récupérables
          </p>
          <p className="font-titre text-3xl font-semibold">150 € à 400 €</p>
          <p className="text-sm text-ivoire/70 mt-1">sur douze mois</p>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          {BENEFICES.map((b) => (
            <div key={b.titre} className="flex gap-3">
              <div className="w-1.5 shrink-0 rounded-full bg-corail" />
              <div>
                <p className="font-semibold text-encre">{b.titre}</p>
                <p className="text-sm text-encre/70 leading-relaxed">
                  {b.texte}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={payer}
            disabled={chargement}
            className="w-full bg-corail hover:bg-corail-dark active:scale-[0.98] transition disabled:opacity-60 text-ivoire font-semibold text-lg py-4 rounded-xl shadow-lg shadow-corail/20"
          >
            {chargement ? "Un instant..." : "Récupérer mes frais — 19 €"}
          </button>
          <p className="text-xs text-center text-encre/50 mt-2">
            Paiement unique. Sans abonnement. Dossier livré par email sous 24h.
          </p>
          {erreur && (
            <p className="text-sm text-corail-dark text-center mt-2">
              {erreur}
            </p>
          )}
        </div>
      </section>

      <footer className="border-t border-encre/10 px-5 py-6 text-xs text-encre/50 flex flex-wrap gap-x-4 gap-y-2 justify-center">
        <a href="/mentions-legales" className="underline">
          Mentions légales
        </a>
        <a href="/cgv" className="underline">
          CGV
        </a>
        <a href="/confidentialite" className="underline">
          Confidentialité
        </a>
      </footer>
    </main>
  );
}
