"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import {
  Building2,
  Briefcase,
  Sparkles,
  TreePine,
  Bug,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Briefcase,
  Sparkles,
  TreePine,
  Bug,
};

const servicesDetails = [
  {
    id: "pulizie-condomini",
    title: "Pulizie Condomini",
    description:
      "Manteniamo le aree comuni del tuo condominio sempre pulite e accoglienti. Dal portone d'ingresso all'ultimo piano, ogni spazio riceve la cura che merita.",
    icon: "Building2",
    features: [
      "Pulizia scale e pianerottoli",
      "Lavaggio e lucidatura pavimenti",
      "Pulizia ascensori e cabine",
      "Sanificazione corrimano e maniglie",
      "Pulizia vetrate e specchi",
      "Rimozione ragnatele e polvere",
      "Pulizia garage e cantine",
      "Cura aree esterne condominiali",
    ],
    frequency: "Interventi giornalieri, settimanali o personalizzati",
  },
  {
    id: "pulizie-uffici",
    title: "Pulizie Uffici",
    description:
      "Un ambiente di lavoro pulito aumenta produttività e benessere. Offriamo servizi completi per uffici di ogni dimensione, con flessibilità oraria per non disturbare il lavoro.",
    icon: "Briefcase",
    features: [
      "Pulizia postazioni di lavoro",
      "Sanificazione bagni e aree comuni",
      "Svuotamento cestini e raccolta differenziata",
      "Pulizia e igienizzazione cucine/break room",
      "Lavaggio pavimenti e moquette",
      "Pulizia vetrate interne ed esterne",
      "Spolveratura arredi e attrezzature",
      "Sanificazione con prodotti certificati",
    ],
    frequency: "Servizio disponibile anche in orari serali/notturni",
  },
  {
    id: "sgrossi",
    title: "Sgrossi e Pulizie Straordinarie",
    description:
      "Interventi di pulizia profonda per situazioni particolari: fine cantiere, traslochi, pulizie dopo ristrutturazioni o quando serve una pulizia più intensa del normale.",
    icon: "Sparkles",
    features: [
      "Pulizia post-cantiere",
      "Rimozione residui di lavorazione",
      "Sgrassatura e deceratura pavimenti",
      "Pulizia dopo trasloco",
      "Trattamento superfici delicate",
      "Rimozione macchie ostinate",
      "Ripristino superfici trascurate",
      "Pulizia a fondo di ogni ambiente",
    ],
    frequency: "Interventi una tantum o programmati",
  },
  {
    id: "giardinaggio",
    title: "Giardinaggio e Cura del Verde",
    description:
      "Dalla semplice manutenzione del prato alla progettazione di spazi verdi, ci prendiamo cura del verde di condomini, aziende e privati con competenza e passione.",
    icon: "TreePine",
    features: [
      "Taglio e manutenzione prati",
      "Potatura siepi e arbusti",
      "Potatura alberi ad alto fusto",
      "Piantumazione e trapianti",
      "Installazione impianti di irrigazione",
      "Concimazione e trattamenti fitosanitari",
      "Pulizia foglie e residui vegetali",
      "Manutenzione aiuole e fioriere",
    ],
    frequency: "Contratti stagionali o annuali disponibili",
  },
  {
    id: "disinfestazioni",
    title: "Disinfestazioni",
    description:
      "Interventi professionali contro ogni tipo di infestante: insetti, roditori, volatili. Utilizziamo metodi sicuri ed efficaci, nel rispetto dell'ambiente e delle persone.",
    icon: "Bug",
    features: [
      "Derattizzazione",
      "Disinfestazione insetti striscianti",
      "Disinfestazione insetti volanti",
      "Trattamenti anti-zanzare",
      "Allontanamento volatili",
      "Trattamenti anti-tarme",
      "Bonifica da cimici dei letti",
      "Monitoraggio e prevenzione",
    ],
    frequency: "Interventi singoli o piani di monitoraggio continuo",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ServiziPage() {
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
              I nostri servizi
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
              Soluzioni professionali per ogni esigenza
            </h1>
            <p className="text-lg text-muted-foreground">
              Offriamo una gamma completa di servizi di pulizia e manutenzione.
              Ogni intervento è personalizzato sulle tue necessità specifiche.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {servicesDetails.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-shine-100 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-shine-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <p className="text-sm font-medium text-shine-600 mb-8">
                      {service.frequency}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild>
                        <Link href="/contatti">
                          Richiedi preventivo
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href={siteConfig.links.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 w-4 h-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <Card className="p-8 bg-gradient-to-br from-white to-shine-50/50">
                      <h3 className="font-semibold text-foreground mb-6">
                        Cosa include:
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-shine-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-shine-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Non trovi quello che cerchi?
            </h2>
            <p className="text-lg text-shine-200 mb-8">
              Contattaci per discutere delle tue esigenze specifiche. Siamo
              sempre disponibili a valutare soluzioni personalizzate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-shine-700 hover:bg-shine-50"
              >
                <Link href="/contatti">Contattaci</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10"
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
