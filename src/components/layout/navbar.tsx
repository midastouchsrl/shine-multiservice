"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

// Pagine con sfondo chiaro che richiedono logo/testo scuro
const lightBackgroundPages = ["/contatti", "/chi-siamo", "/servizi"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Usa colori scuri se scrollato O se siamo su una pagina con sfondo chiaro
  const useDarkColors = isScrolled || lightBackgroundPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        useDarkColors
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo - bianco quando non scrollato, nero quando scrollato */}
          <Link href="/" className="flex items-center">
            <Image
              src={useDarkColors ? "/images/Black@600x.png" : "/images/White@600x.png"}
              alt="Shine Multiservice"
              width={180}
              height={65}
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  useDarkColors
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                useDarkColors
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{siteConfig.phone}</span>
            </a>
            <Link
              href="/contatti"
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all",
                useDarkColors
                  ? "bg-shine-600 text-white hover:bg-shine-700"
                  : "bg-white text-shine-700 hover:bg-gray-100"
              )}
            >
              Preventivo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 -mr-2",
              useDarkColors ? "text-gray-900" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className={cn(
            "flex flex-col gap-2 pt-4 border-t",
            useDarkColors ? "border-gray-200" : "border-white/20"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-2 px-3 text-base font-medium rounded-lg transition-colors",
                  useDarkColors
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-inherit">
              <a
                href={`tel:${siteConfig.phone}`}
                className={cn(
                  "flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-base font-medium border-2 transition-colors",
                  useDarkColors
                    ? "border-shine-600 text-shine-600 hover:bg-shine-600 hover:text-white"
                    : "border-white text-white hover:bg-white/10"
                )}
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contatti"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-center py-3 px-4 rounded-lg text-base font-semibold transition-colors",
                  useDarkColors
                    ? "bg-shine-600 text-white hover:bg-shine-700"
                    : "bg-white text-shine-700 hover:bg-gray-100"
                )}
              >
                Richiedi Preventivo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
