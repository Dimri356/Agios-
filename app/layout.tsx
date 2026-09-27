import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const titre = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-titre",
  display: "swap",
});

const texte = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-texte",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Agios — Récupère les frais bancaires prélevés à tort",
  description:
    "Commissions d'intervention, frais de rejet, options jamais utilisées : la plupart sont plafonnés par la loi et jamais contestés. Ton dossier de réclamation, prêt à envoyer.",
  openGraph: {
    title: "Agios — Récupère les frais bancaires prélevés à tort",
    description:
      "La plupart de tes frais bancaires sont plafonnés par la loi et jamais contestés. On prépare ton dossier de réclamation.",
    url: siteUrl,
    siteName: "Agios",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agios — Récupère les frais bancaires prélevés à tort",
    description:
      "La plupart de tes frais bancaires sont plafonnés par la loi et jamais contestés.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body className="font-texte antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
