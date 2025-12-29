import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Scopri Shine Multiservice: la nostra storia, i nostri valori e il nostro impegno per offrire servizi di pulizia professionali a Roma e provincia.",
  openGraph: {
    title: "Chi Siamo | Shine Multiservice",
    description:
      "Un team di professionisti dedicati alla cura dei tuoi spazi. Scopri i nostri valori.",
  },
};

export default function ChiSiamoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
