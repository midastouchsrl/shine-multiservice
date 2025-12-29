import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Shine Multiservice per un preventivo gratuito. Telefono, email, WhatsApp. Servizi di pulizia professionale a Roma e provincia.",
  openGraph: {
    title: "Contattaci | Shine Multiservice",
    description:
      "Richiedi un preventivo gratuito. Rispondiamo entro 24 ore. Roma e provincia.",
  },
};

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
