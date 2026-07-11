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
      "Integrated electric vehicle solutions for corporate operational needs, covering vehicle provision, consulting, operational management, and charging infrastructure.",
    primaryCta: "Register Now",
    secondaryCta: "Join as an Investor",
  },
} as const;

export type Language = keyof typeof heroCopy;
