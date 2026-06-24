export const heroCopy = {
  id: {
    surtitle: "Ekosistem Kendaraan Listrik B2B Terpercaya",
    headline: "One Stop Solution for Electric Mobility",
    description:
      "Solusi EV B2B terintegrasi untuk bisnis Anda: penjualan kendaraan EV, rental B2B, konsultasi EV, pemasangan EV charger, hingga sistem fire safety LFK.",
    primaryCta: "Daftar Sekarang",
    secondaryCta: "Join with us (Investor)",
  },
  en: {
    surtitle: "Trusted B2B Electric Vehicle Ecosystem",
    headline: "One Stop Solution for Electric Mobility",
    description:
      "Integrated B2B EV solutions for your business: EV vehicle sales, B2B rental, EV consulting, EV charger installation, and LFK fire safety systems.",
    primaryCta: "Register Now",
    secondaryCta: "Join with us (Investor)",
  },
} as const;

export type Language = keyof typeof heroCopy;
