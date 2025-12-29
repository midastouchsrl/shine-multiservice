"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    description: "Lun-Ven 8:00-18:00, Sab 9:00-13:00",
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Rispondiamo entro 24 ore",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Scrivici su WhatsApp",
    href: siteConfig.links.whatsapp,
    description: "Il modo più veloce per contattarci",
  },
  {
    icon: MapPin,
    title: "Zona operativa",
    value: siteConfig.location,
    href: null,
    description: "Interveniamo in tutta la provincia",
  },
];

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Costruisci il corpo dell'email
    const subject = `Richiesta preventivo - ${formData.service || "Generale"}`;
    const body = `Nome: ${formData.name}
Email: ${formData.email}
Telefono: ${formData.phone}
Servizio richiesto: ${formData.service || "Non specificato"}

Messaggio:
${formData.message}`;

    // Apri il client email
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Simula invio completato
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

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
              Contatti
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
              Parliamo del tuo progetto
            </h1>
            <p className="text-lg text-muted-foreground">
              Richiedi un preventivo gratuito o contattaci per qualsiasi
              informazione. Siamo a tua disposizione.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Come contattarci
                </h2>
                <p className="text-muted-foreground">
                  Scegli il canale che preferisci. Siamo sempre pronti ad
                  ascoltarti e a trovare la soluzione migliore per te.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-shine-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-shine-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-shine-600 hover:text-shine-700 font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-foreground">{item.value}</span>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="p-6 bg-green-50 border-green-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      Preferisci WhatsApp?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Risposte rapide, anche con foto
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-green-500 hover:bg-green-600"
                  asChild
                >
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chatta con noi
                  </a>
                </Button>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Grazie per averci contattato!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Il tuo client email dovrebbe essersi aperto con il
                      messaggio pronto da inviare. Se non si è aperto, puoi
                      scriverci direttamente a{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-shine-600 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: "",
                        });
                      }}
                    >
                      Invia un altro messaggio
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Richiedi un preventivo
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Compila il form e ti ricontatteremo al più presto.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Nome e cognome *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Mario Rossi"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Telefono *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+39 333 1234567"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="mario.rossi@email.it"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Servizio richiesto
                        </label>
                        <Select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                        >
                          <option value="">Seleziona un servizio</option>
                          {siteConfig.services.map((service) => (
                            <option key={service.id} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                          <option value="Altro">Altro</option>
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Messaggio *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Descrivi le tue esigenze: tipo di ambiente, metratura, frequenza desiderata..."
                        />
                      </div>

                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>
                          Ti risponderemo entro 24 ore lavorative. Per urgenze,
                          chiamaci o scrivici su WhatsApp.
                        </span>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Preparazione email..."
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5" />
                            Invia richiesta
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder / Area servita */}
      <section className="py-16 bg-shine-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <MapPin className="w-12 h-12 text-shine-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Operiamo a Roma e in tutta la provincia
            </h2>
            <p className="text-muted-foreground">
              Dal centro storico ai comuni limitrofi, raggiungiamo ogni zona per
              sopralluoghi gratuiti e preventivi personalizzati. Contattaci per
              verificare la copertura nella tua area.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
