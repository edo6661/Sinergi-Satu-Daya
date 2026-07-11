export interface LogoItem {
  id: string;
  name: string;
  image: string;
}

const CLIENT_IMAGES = {
  kemenperin:
    "/logo/external/valluable%20cust/kementrianperindustrian-logo.png",
  bin: "/logo/external/valluable%20cust/bin-logo.png",
  pln: "/logo/external/valluable%20cust/pln%20logo.png",
  haleyora: "/logo/external/valluable%20cust/haleyora-logo.png",
  mnp: "/logo/external/valluable%20cust/cmnp-logo.png",
  jup: "/logo/external/valluable%20cust/jup-logo.png",
  golkar: "/logo/external/valluable%20cust/golkar-logo.png",
  pdi: "/logo/external/valluable%20cust/pdi-logo.png",
  ebdc: "/logo/external/valluable%20cust/EBDC-logo.png",
  grab: "/logo/external/valluable%20cust/grab-logo.png",
  bijb: "/logo/external/valluable%20cust/bijb-logo.png",
  kebunraya: "/logo/external/valluable%20cust/kebunraya-logo.png",
  mardika: "/logo/external/valluable%20cust/mardikadayatribuana-logo.png",
} as const;

const PARTNER_IMAGES = {
  wuling: "/logo/external/partner/wuling-logo.png",
  foton: "/logo/external/partner/Foton-logo.png",
  maka: "/logo/external/partner/maka-logo.png",
  yadea: "/logo/external/partner/Yadea-logo.png",
  delta: "/logo/external/partner/DELTA_Electronics_Logo.png",
  evpower: "/logo/external/partner/evpower%20logo.png",
} as const;

export const clientsPartnersCopy = {
  id: {
    tagline: "Kepercayaan & Kolaborasi",
    heading: "Klien & Mitra Kami",
    clientsLabel: "Pelanggan Berharga Kami",
    partnersLabel: "Mitra Kami",
    dragHint: "Geser untuk melihat lebih banyak",
    clients: [
      {
        id: "c1",
        name: "Kementerian Perindustrian RI",
        image: CLIENT_IMAGES.kemenperin,
      },
      {
        id: "c2",
        name: "Badan Intelijen Negara (BIN)",
        image: CLIENT_IMAGES.bin,
      },
      { id: "c3", name: "PLN", image: CLIENT_IMAGES.pln },
      { id: "c4", name: "Haleyora Powerindo", image: CLIENT_IMAGES.haleyora },
      { id: "c5", name: "MNP", image: CLIENT_IMAGES.mnp },
      { id: "c6", name: "JUP by JAKPRO", image: CLIENT_IMAGES.jup },
      { id: "c7", name: "Partai Golkar", image: CLIENT_IMAGES.golkar },
      { id: "c8", name: "PDI Perjuangan", image: CLIENT_IMAGES.pdi },
      { id: "c9", name: "EBDC", image: CLIENT_IMAGES.ebdc },
      { id: "c10", name: "Grab", image: CLIENT_IMAGES.grab },
      {
        id: "c11",
        name: "Kertajati International Airport",
        image: CLIENT_IMAGES.bijb,
      },
      { id: "c12", name: "Kebun Raya BRIN", image: CLIENT_IMAGES.kebunraya },
      {
        id: "c13",
        name: "Mardika Daya Tribuana",
        image: CLIENT_IMAGES.mardika,
      },
    ] satisfies LogoItem[],
    partners: [
      { id: "p1", name: "Wuling", image: PARTNER_IMAGES.wuling },
      { id: "p2", name: "Foton", image: PARTNER_IMAGES.foton },
      { id: "p3", name: "Maka Motors", image: PARTNER_IMAGES.maka },
      { id: "p4", name: "Yadea", image: PARTNER_IMAGES.yadea },
      { id: "p5", name: "Delta Electronics", image: PARTNER_IMAGES.delta },
      { id: "p6", name: "EV Power", image: PARTNER_IMAGES.evpower },
    ] satisfies LogoItem[],
  },
  en: {
    tagline: "Trust & Collaboration",
    heading: "Our Clients & Partners",
    clientsLabel: "Our Valuable Customers",
    partnersLabel: "Our Partners",
    dragHint: "Drag to explore more",
    clients: [
      {
        id: "c1",
        name: "Ministry of Industry of Indonesia",
        image: CLIENT_IMAGES.kemenperin,
      },
      {
        id: "c2",
        name: "State Intelligence Agency (BIN)",
        image: CLIENT_IMAGES.bin,
      },
      { id: "c3", name: "PLN", image: CLIENT_IMAGES.pln },
      { id: "c4", name: "Haleyora Powerindo", image: CLIENT_IMAGES.haleyora },
      { id: "c5", name: "MNP", image: CLIENT_IMAGES.mnp },
      { id: "c6", name: "JUP by JAKPRO", image: CLIENT_IMAGES.jup },
      { id: "c7", name: "Golkar Party", image: CLIENT_IMAGES.golkar },
      { id: "c8", name: "PDI Perjuangan", image: CLIENT_IMAGES.pdi },
      { id: "c9", name: "EBDC", image: CLIENT_IMAGES.ebdc },
      { id: "c10", name: "Grab", image: CLIENT_IMAGES.grab },
      {
        id: "c11",
        name: "Kertajati International Airport",
        image: CLIENT_IMAGES.bijb,
      },
      { id: "c12", name: "Kebun Raya BRIN", image: CLIENT_IMAGES.kebunraya },
      {
        id: "c13",
        name: "Mardika Daya Tribuana",
        image: CLIENT_IMAGES.mardika,
      },
    ] satisfies LogoItem[],
    partners: [
      { id: "p1", name: "Wuling", image: PARTNER_IMAGES.wuling },
      { id: "p2", name: "Foton", image: PARTNER_IMAGES.foton },
      { id: "p3", name: "Maka Motors", image: PARTNER_IMAGES.maka },
      { id: "p4", name: "Yadea", image: PARTNER_IMAGES.yadea },
      { id: "p5", name: "Delta Electronics", image: PARTNER_IMAGES.delta },
      { id: "p6", name: "EV Power", image: PARTNER_IMAGES.evpower },
    ] satisfies LogoItem[],
  },
} as const;

export type ClientsPartnersLanguage = keyof typeof clientsPartnersCopy;
