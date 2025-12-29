import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Scopri tutti i servizi di Shine Multiservice: pulizie condomini, pulizie uffici, sgrossi post-cantiere, giardinaggio e disinfestazioni a Roma e provincia.",
  openGraph: {
    title: "I Nostri Servizi | Shine Multiservice",
    description:
      "Pulizie professionali, giardinaggio e disinfestazioni a Roma. Preventivi gratuiti.",
  },
};

export default function ServiziLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
