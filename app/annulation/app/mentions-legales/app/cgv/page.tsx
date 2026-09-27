export const metadata = { title: "CGV — Agios" };

export default function CGVPage() {
  return (
    <main className="min-h-screen px-5 py-10 max-w-md mx-auto">
      <h1 className="font-titre text-2xl font-semibold text-encre mb-6">
        Conditions générales de vente
      </h1>
      <div className="text-encre/80 leading-relaxed space-y-4 text-sm">
        <p>
          Les présentes CGV régissent la vente du service Agios par{" "}
          <strong>[À COMPLÉTER : ta raison sociale]</strong>, ci-après
          « Agios », à tout client, ci-après « le Client ».
        </p>
        <h2 className="font-semibold text-encre pt-2">1. Le service</h2>
        <p>
          Agios propose une analyse des frais bancaires du Client sur les
          douze derniers mois, une comparaison aux plafonds légaux applicables,
          et la rédaction d&apos;un courrier de réclamation adressé à
          l&apos;agence bancaire du Client. Agios n&apos;est ni un cabinet
          d&apos;avocats ni un établissement financier, et ne garantit aucun
          remboursement de la part de la banque du Client.
        </p>
        <h2 className="font-semibold text-encre pt-2">2. Prix</h2>
        <p>
          Le service est facturé 19 € TTC, paiement unique, réglé par carte
          bancaire via Stripe.
        </p>
        <h2 className="font-semibold text-encre pt-2">
          3. Livraison
        </h2>
        <p>
          Le dossier (analyse + courrier) est livré par email dans un délai
          maximum de 24 heures après confirmation du paiement.
        </p>
        <h2 className="font-semibold text-encre pt-2">
          4. Droit de rétractation
        </h2>
        <p>
          Conformément à l&apos;article L221-18 du Code de la consommation, le
          Client dispose de 14 jours pour se rétracter. Le Client reconnaît
          que, en demandant la livraison immédiate du service numérique, il
          renonce à son droit de rétractation dès que l&apos;exécution a
          commencé, conformément à l&apos;article L221-28.
        </p>
        <h2 className="font-semibold text-encre pt-2">
          5. Contact et réclamations
        </h2>
        <p>Email : [À COMPLÉTER]</p>
        <p className="text-xs text-encre/50 pt-4 border-t border-encre/10">
          Ce texte est un point de départ, pas un avis juridique. Fais-le
          relire par un professionnel avant un volume de ventes important.
        </p>
      </div>
    </main>
  );
}
