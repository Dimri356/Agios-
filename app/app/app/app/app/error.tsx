"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <div className="max-w-sm w-full">
        <h1 className="font-titre text-xl font-semibold text-encre mb-3">
          Un problème est survenu
        </h1>
        <p className="text-encre/70 leading-relaxed mb-6">
          Ce n&apos;est pas grave, réessaie — si ça persiste, écris-nous.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block bg-corail text-ivoire font-semibold px-6 py-3 rounded-xl"
        >
          Réessayer
        </button>
      </div>
    </main>
  );
}
