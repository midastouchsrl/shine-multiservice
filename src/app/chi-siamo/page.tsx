"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import {
  Users,
  Target,
  Heart,
  Shield,
  Award,
  Clock,
  Leaf,
  ThumbsUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passione",
    description:
      "Amiamo il nostro lavoro e lo facciamo con dedizione ogni giorno.",
  },
  {
    icon: Shield,
    title: "Affidabilità",
    description:
      "Puoi contare su di noi: puntualità e serietà sono i nostri punti fermi.",
  },
  {
    icon: Award,
    title: "Qualità",
    description:
      "Non ci accontentiamo: ogni lavoro deve essere impeccabile.",
  },
  {
    icon: Leaf,
    title: "Sostenibilità",
    description:
      "Utilizziamo prodotti eco-compatibili quando possibile, per rispettare l'ambiente.",
  },
];

const stats = [
  { value: "10+", label: "Anni di esperienza" },
  { value: "500+", label: "Clienti soddisfatti" },
  { value: "50+", label: "Condomini gestiti" },
  { value: "100%", label: "Impegno garantito" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-shine-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-shine-600 font-semibold text-sm uppercase tracking-wider">
              Chi siamo
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
              La nostra storia, i nostri valori
            </h1>
            <p className="text-lg text-muted-foreground">
              Shine Multiservice nasce dalla passione per la cura degli spazi e
              dalla volontà di offrire servizi professionali a Roma e provincia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Una squadra al tuo servizio
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shine Multiservice è un'impresa di servizi con sede a Roma,
                  specializzata in pulizie professionali, giardinaggio e
                  disinfestazioni. Lavoriamo con condomini, uffici, attività
                  commerciali e privati.
                </p>
                <p>
                  Il nostro team è composto da professionisti esperti e
                  qualificati, sempre pronti a rispondere alle esigenze dei
                  clienti con flessibilità e competenza.
                </p>
                <p>
                  Crediamo che un ambiente pulito e curato migliori la qualità
                  della vita. Per questo mettiamo il massimo impegno in ogni
                  intervento, grande o piccolo che sia.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contatti">
                    Contattaci
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-shine-100 rounded-3xl transform rotate-3" />
                <div className="absolute inset-0 bg-shine-200 rounded-3xl transform -rotate-3" />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl flex items-center justify-center">
                  <Image
                    src="/images/Black@600x.png"
                    alt="Shine Multiservice"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-shine-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-shine-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-shine-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-shine-600 font-semibold text-sm uppercase tracking-wider">
              I nostri valori
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Cosa ci guida ogni giorno
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-shine-100 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-shine-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-shine-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-shine-600 font-semibold text-sm uppercase tracking-wider">
                Standard di qualità
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-3 mb-6">
                Il nostro impegno per l'eccellenza
              </h2>
              <p className="text-muted-foreground mb-8">
                Ogni intervento segue procedure precise per garantire risultati
                costanti e di alta qualità. Non lasciamo nulla al caso.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8">
                <ul className="space-y-4">
                  {siteConfig.qualityStandards.map((standard, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-shine-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{standard}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-shine-500 to-shine-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Lavoriamo insieme?
            </h2>
            <p className="text-lg text-shine-100 mb-8">
              Siamo pronti ad ascoltare le tue esigenze e proporti la soluzione
              più adatta. Il primo sopralluogo è sempre gratuito.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-shine-700 hover:bg-shine-50"
            >
              <Link href="/contatti">
                Richiedi un preventivo gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
