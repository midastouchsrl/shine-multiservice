import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/White@600x.png"
                alt="Shine Multiservice"
                width={150}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Servizi professionali di pulizia e manutenzione a Roma e provincia.
              Qualità, affidabilità e passione dal primo giorno.
            </p>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servizi</h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servizi#${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Link utili</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/servizi"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  I nostri servizi
                </Link>
              </li>
              <li>
                <Link
                  href="/chi-siamo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-shine-400" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-shine-400" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-shine-400" />
                  {siteConfig.location}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
