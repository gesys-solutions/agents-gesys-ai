import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sprint Comptable Gesys — Votre assistant comptable IA en 10 jours",
  description:
    "Automatisez vos tâches comptables répétitives avec un agent IA configuré en 10 jours. Spécialisé CPA Québec. Données au Canada. TPS/TVQ, DAS, T1/T2.",
  openGraph: {
    title: "Sprint Comptable Gesys — Assistant comptable IA",
    description:
      "Réduisez de 30 à 40 % le temps de votre technicien sur les tâches répétitives. Opérationnel en 10 jours.",
    url: "https://agents.gesys.ai",
    siteName: "agents.gesys.ai",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
