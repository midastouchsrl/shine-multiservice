export const siteConfig = {
  name: "Shine Multiservice",
  description: "Servizi professionali di pulizia e manutenzione a Roma e provincia. Pulizie condomini, uffici, giardinaggio, disinfestazioni.",
  url: "https://shinemultiservice.it",
  whatsapp: "+39 327 469 2069",
  whatsappClean: "393274692069",
  phone: "+39 327 469 2069",
  email: "shinemultisrv@gmail.com",
  location: "Roma e provincia",

  // Form configuration
  form: {
    // "mailto" | "api"
    mode: "mailto" as const,
    // API endpoint (used when mode is "api")
    apiEndpoint: "/api/contact",
  },

  links: {
    whatsapp: "https://wa.me/393274692069?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20servizi.",
  },

  services: [
    {
      id: "pulizie-condomini",
      title: "Pulizie Condomini",
      shortDesc: "Scale, androni, aree comuni sempre impeccabili",
      icon: "Building2",
    },
    {
      id: "pulizie-uffici",
      title: "Pulizie Uffici",
      shortDesc: "Ambienti di lavoro puliti e professionali",
      icon: "Briefcase",
    },
    {
      id: "sgrossi",
      title: "Sgrossi",
      shortDesc: "Pulizie profonde post-cantiere e straordinarie",
      icon: "Sparkles",
    },
    {
      id: "giardinaggio",
      title: "Giardinaggio",
      shortDesc: "Cura del verde, potature, manutenzione",
      icon: "TreePine",
    },
    {
      id: "disinfestazioni",
      title: "Disinfestazioni",
      shortDesc: "Interventi mirati contro infestanti",
      icon: "Bug",
    },
  ],

  trustPoints: [
    { title: "Sopralluogo rapido", desc: "Valutiamo le tue esigenze sul posto" },
    { title: "Interventi programmati", desc: "Pianificazione flessibile e puntuale" },
    { title: "Prodotti professionali", desc: "Qualità certificata per ogni superficie" },
    { title: "Flessibilità oraria", desc: "Ci adattiamo ai tuoi orari" },
  ],

  steps: [
    { title: "Sopralluogo", desc: "Valutiamo insieme gli spazi e le tue necessità specifiche" },
    { title: "Proposta", desc: "Ti presentiamo un preventivo chiaro e dettagliato" },
    { title: "Esecuzione", desc: "Il nostro team interviene con professionalità" },
    { title: "Controllo qualità", desc: "Verifichiamo il risultato e la tua soddisfazione" },
  ],

  sectors: [
    "Condomini",
    "Studi professionali",
    "Piccole aziende",
    "Spazi commerciali",
    "Strutture ricettive",
    "Ambulatori",
  ],

  qualityStandards: [
    "Checklist operative per ogni intervento",
    "Referenti dedicati per ogni cliente",
    "Report su richiesta",
    "Prodotti eco-compatibili disponibili",
    "Personale formato e assicurato",
  ],
} as const;
