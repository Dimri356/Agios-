export const metadata = { title: "Mentions légales — Agios" };

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen px-5 py-10 max-w-md mx-auto">
      <h1 className="font-titre text-2xl font-semibold text-encre mb-6">
        Mentions légales
      </h1>
      <div className="prose-sm text-encre/80 leading-relaxed space-y-4 text-sm">
        <p>
          Le site Agios est édité par{" "}
          <strong>[À COMPLÉTER : ton nom ou ta raison sociale]</strong>.
        </p>
        <p>
          <strong>Statut :</strong> [À COMPLÉTER — ex. entreprise individuelle,
          micro-entreprise]
          <br />
          <strong>SIRET :</strong> [À COMPLÉTER dès immatriculation]
          <br />
          <strong>Adresse :</strong> [À COMPLÉTER]
          <br />
          <strong>Email de contact :</strong> [À COMPLÉTER]
        </p>
        <p>
          <strong>Hébergement :</strong> Vercel Inc., 340 S Lemon Ave #4133,
          Walnut, CA 91789, États-Unis.
        </p>
        <p>
          <strong>Directeur de publication :</strong> [À COMPLÉTER]
        </p>
        <p className="text-xs text-encre/50 pt-4 border-t border-encre/10">
          Tant que tu n&apos;es pas immatriculé (avant ta première vente
          officielle), tu peux vendre en tant que particulier de façon très
          limitée, mais il faudra régulariser rapidement (micro-entreprise)
          dès que l&apos;activité devient récurrente — on en reparle à
          l&apos;étape suivante.
        </p>
      </div>
    </main>
  );
}
