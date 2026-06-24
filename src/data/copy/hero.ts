export const heroCopy = {
  id: {
    surtitle: "Ekosistem Kendaraan Listrik B2B Terpercaya",
    headline: "One Stop Solution for Electric Mobility",
    description:
      "Transformasi armada bisnis Anda dengan ekosistem EV terintegrasi. Dari pengadaan unit, infrastruktur charging, hingga Sistem keamanan & keselamatan berstandar internasional. Hemat biaya operasional dan tingkatkan Efisiensi bisnis Anda hari ini.",
    primaryCta: "Daftar Sekarang",
    secondaryCta: "Join with us (Investor)",
  },
  en: {
    surtitle: "Trusted B2B Electric Vehicle Ecosystem",
    headline: "One Stop Solution for Electric Mobility",
    description:
      "Transform your business fleet with an integrated EV ecosystem. From unit procurement and charging infrastructure to international safety standards systems. Cut operational costs and boost your business efficiency today.",
    primaryCta: "Register Now",
    secondaryCta: "Join with us (Investor)",
  },
} as const;

export type Language = keyof typeof heroCopy;
