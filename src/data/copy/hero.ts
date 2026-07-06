export const heroCopy = {
  id: {
    surtitle: "Ekosistem Kendaraan Listrik B2B Terpercaya",
    headline: "One-Stop Solution for Electric Mobility",
    description:
      "Solusi kendaraan listrik terintegrasi untuk kebutuhan operasional perusahaan, mencakup penyediaan kendaraan, konsultasi, manajemen operasional, dan infrastruktur pengisian daya.",
    primaryCta: "Daftar Sekarang",
    secondaryCta: "Bergabung sebagai Investor",
  },
  en: {
    surtitle: "Trusted B2B Electric Vehicle Ecosystem",
    headline: "One-Stop Solution for Electric Mobility",
    description:
      "Integrated B2B EV solutions for your business: EV sales, B2B rentals, EV consulting, EV charging station installations, and LFK fire safety systems.",
    primaryCta: "Register Now",
    secondaryCta: "Join Us (Investor)",
  },
} as const;

export type Language = keyof typeof heroCopy;