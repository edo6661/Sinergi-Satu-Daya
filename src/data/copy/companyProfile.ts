import { ShieldCheck, Zap, TrendingUp } from "lucide-react";

export const companyProfileCopy = {
  id: {
    tagline: "Tentang PT Sinergi Satu Daya",
    heading: "Penggerak Utama Transformasi Mobilitas Berkelanjutan",
    description:
      "Berdiri sejak tahun 2019, PT Sinergi Satu Daya (SSD) hadir sebagai pelopor Integrated Mobility Solution Provider. Kami menyediakan penjualan kendaraan EV, rental B2B, konsultasi EV untuk bisnis, pemasangan EV charger, serta sistem fire safety LFK. Fokus utama konsultasi B2B kami untuk 6 bulan hingga 1 tahun ke depan.",
    cta: "Jadwalkan Konsultasi Bisnis",
    badges: [
      {
        title: "Penjualan & Rental B2B",
        desc: "Kendaraan EV untuk dibeli maupun disewa sesuai kebutuhan operasional bisnis.",
        icon: Zap,
      },
      {
        title: "Konsultasi EV B2B",
        desc: "Konsultasi EV B2B. Fokus 6 bulan hingga 1 tahun ke depan.",
        icon: TrendingUp,
      },
      {
        title: "Infrastruktur EV",
        desc: "Pemasangan EV charger dan sistem fire safety LFK.",
        icon: ShieldCheck,
      },
    ],
  },
  en: {
    tagline: "About PT Sinergi Satu Daya",
    heading: "The Main Driver of Sustainable Mobility Transformation",
    description:
      "Established in 2025, PT Sinergi Satu Daya (SSD) stands as a pioneer in Integrated Mobility Solutions. We provide EV vehicle sales, B2B rental, EV consulting for businesses, EV charger installation, and LFK fire safety systems. Our primary B2B consulting focus is for the next 6 months to 1 year.",
    cta: "Schedule Business Consultation",
    badges: [
      {
        title: "EV Sales & B2B Rental",
        desc: "Electric vehicles for purchase or lease to suit your business operational needs.",
        icon: Zap,
      },
      {
        title: "B2B EV Consulting",
        desc: "B2B EV consulting. Focus for the next 6 months to 1 year.",
        icon: TrendingUp,
      },
      {
        title: "EV Infrastructure",
        desc: "EV charger installation and LFK fire safety systems.",
        icon: ShieldCheck,
      },
    ],
  },
} as const;

export type ProfileLanguage = keyof typeof companyProfileCopy;
