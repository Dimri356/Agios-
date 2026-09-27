import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <div className="max-w-sm w-full">
        <p className="font-titre text-5xl font-semibold text-corail mb-3">
          404
        </p>
        <h1 className="font-titre text-xl font-semibold text-encre mb-3">
          Cette page n&apos;existe pas
        </h1>
        <p className="text-encre/70 leading-relaxed mb-6">
          Le lien est peut-être mal copié. Retourne à l&apos;accueil pour
          continuer.
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
