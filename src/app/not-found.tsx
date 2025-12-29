"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-shine-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto"
        >
          <div className="relative mb-8">
            <span className="text-[150px] sm:text-[200px] font-bold text-shine-100 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 sm:w-24 sm:h-24 text-shine-400" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pagina non trovata
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            La pagina che stai cercando non esiste o è stata spostata. Torna
            alla homepage o esplora i nostri servizi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 w-5 h-5" />
                Torna alla home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/servizi">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Vedi i servizi
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
