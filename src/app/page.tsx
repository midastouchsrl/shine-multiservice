"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import {
  Building2,
  Briefcase,
  Sparkles,
  TreePine,
  Bug,
  Phone,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Briefcase,
  Sparkles,
  TreePine,
  Bug,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Base color layer - shine blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-shine-900 via-shine-800 to-shine-950" />

        {/* Background Image con opacità ridotta */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/hero-bg.png"
            alt="Shine Multiservice - Pulizie professionali"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Overlay gradiente per profondità */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              Servizi professionali a Roma
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Pulizia e cura
              <span className="text-shine-300 block">dei tuoi spazi</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg text-lg font-semibold bg-shine-500 text-white shadow-lg hover:bg-shine-600 active:scale-[0.98] transition-all duration-200"
              >
                Richiedi Preventivo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg text-lg font-semibold bg-[#25D366] text-white shadow-lg hover:bg-[#1DA851] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white" id="servizi">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-shine-600 font-semibold text-sm uppercase tracking-wider">
              I nostri servizi
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Soluzioni complete per ogni esigenza
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Offriamo una gamma completa di servizi professionali per mantenere
              i tuoi spazi sempre impeccabili.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {siteConfig.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              return (
                <motion.div key={service.id} variants={fadeInUp}>
                  <Card className="group p-6 h-full hover:shadow-lg hover:border-shine-200 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-shine-100 flex items-center justify-center mb-5 group-hover:bg-shine-500 transition-colors">
                      <IconComponent className="w-7 h-7 text-shine-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.shortDesc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-shine-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-shine-600 font-semibold text-sm uppercase tracking-wider">
              Perché sceglierci
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Professionalità e affidabilità
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {siteConfig.trustPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-shine-100 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-shine-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-shine-600 font-semibold text-sm uppercase tracking-wider">
              Come lavoriamo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Un processo semplice e trasparente
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {siteConfig.steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-shine-600 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
                {index < siteConfig.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-shine-200" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 lg:py-28 bg-shine-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-shine-300 font-semibold text-sm uppercase tracking-wider">
              Settori serviti
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Esperienza in diversi ambiti
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {siteConfig.sectors.map((sector, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
              >
                {sector}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-shine-500 to-shine-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto per un preventivo gratuito?
            </h2>
            <p className="text-xl text-shine-100 mb-8 max-w-2xl mx-auto">
              Contattaci oggi stesso per una consulenza senza impegno. Ti
              risponderemo entro 24 ore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg text-base font-semibold bg-white text-shine-700 shadow-sm hover:bg-gray-100 active:scale-[0.98] transition-all duration-200"
              >
                Richiedi Preventivo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg text-base font-semibold border-2 border-white text-white bg-transparent hover:bg-white/20 active:scale-[0.98] transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Chiamaci ora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
