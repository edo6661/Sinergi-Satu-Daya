export const heroCopy = {
  id: {
    surtitle: "Ekosistem Kendaraan Listrik B2B Terpercaya",
    headline: "One Stop Solution for Electric Mobility",
    description:
      "Transformasi armada bisnis Anda dengan ekosistem EV terintegrasi. Dari pengadaan unit, infrastruktur charging, hingga sistem keselamatan LFK. Hemat biaya operasional dan tingkatkan efisiensi logistik Anda hari ini.",
    primaryCta: "Konsultasi Gratis Sekarang",
    secondaryCta: "Jelajahi Ekosistem",
  },
  en: {
    surtitle: "Trusted B2B Electric Vehicle Ecosystem",
    headline: "One Stop Solution for Electric Mobility",
    description:
      "Transform your business fleet with an integrated EV ecosystem. From unit procurement and charging infrastructure to LFK safety systems. Cut operational costs and boost your logistics efficiency today.",
    primaryCta: "Get a Free Consultation",
    secondaryCta: "Explore Ecosystem",
  },
} as const;

export type Language = keyof typeof heroCopy;
