export const metadata = { title: "Confidentialité — Agios" };

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen px-5 py-10 max-w-md mx-auto">
      <h1 className="font-titre text-2xl font-semibold text-encre mb-6">
        Politique de confidentialité
      </h1>
      <div className="text-encre/80 leading-relaxed space-y-4 text-sm">
        <p>
          <strong>Responsable du traitement :</strong>{" "}
          [À COMPLÉTER : ton nom ou ta raison sociale], contact :{" "}
          [À COMPLÉTER].
        </p>
        <h2 className="font-semibold text-encre pt-2">
          Données collectées
        </h2>
        <p>
          Lors du paiement : adresse email et informations de paiement,
          traitées directement par Stripe (Agios n&apos;a jamais accès à ton
          numéro de carte). Si tu envoies ton relevé bancaire, il est utilisé
          uniquement pour produire ton dossier de réclamation.
        </p>
        <h2 className="font-semibold text-encre pt-2">
          Mesure d&apos;audience
        </h2>
        <p>
          Ce site utilise Vercel Web Analytics, une mesure d&apos;audience
          anonymisée qui ne dépose aucun cookie de suivi et ne collecte aucune
          donnée personnelle identifiable.
        </p>
        <h2 className="font-semibold text-encre pt-2">Conservation</h2>
        <p>
          Les données sont conservées le temps nécessaire au traitement de ta
          demande, puis supprimées ou archivées conformément à nos obligations
          légales.
        </p>
        <h2 className="font-semibold text-encre pt-2">Tes droits</h2>
        <p>
          Conformément au RGPD, tu disposes d&apos;un droit d&apos;accès, de
          rectification et de suppression de tes données. Pour l&apos;exercer,
          écris à [À COMPLÉTER].
        </p>
      </div>
    </main>
  );
}
