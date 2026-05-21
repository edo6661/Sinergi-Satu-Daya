import { ShieldCheck, Zap, TrendingUp } from "lucide-react";

export const companyProfileCopy = {
  id: {
    tagline: "Tentang PT Sinergi Satu Daya",
    heading: "Penggerak Utama Transformasi Mobilitas Berkelanjutan",
    description:
      "PT Sinergi Satu Daya (SSD) hadir sebagai pelopor Integrated Mobility Solution Provider. Kami tidak sekadar menyewakan kendaraan, kami mendampingi bisnis Anda melakukan transisi ke ekosistem kendaraan listrik (EV) tanpa mengganggu operasional. Dari pengadaan armada, instalasi infrastruktur charging, hingga proteksi keselamatan LFK—semuanya dalam satu pintu.",
    cta: "Jadwalkan Konsultasi Bisnis",
    badges: [
      {
        title: "Ekosistem Terintegrasi",
        desc: "Satu vendor untuk semua kebutuhan EV Anda.",
        icon: Zap,
      },
      {
        title: "Proteksi Menyeluruh",
        desc: "Dilengkapi sistem keselamatan standar industri (LFK).",
        icon: ShieldCheck,
      },
      {
        title: "Efisiensi Jangka Panjang",
        desc: "Pangkas biaya operasional dan perawatan armada.",
        icon: TrendingUp,
      },
    ],
  },
  en: {
    tagline: "About PT Sinergi Satu Daya",
    heading: "The Main Driver of Sustainable Mobility Transformation",
    description:
      "PT Sinergi Satu Daya (SSD) stands as a pioneer in Integrated Mobility Solutions. We don't just lease vehicles; we guide your business through a seamless transition to the electric vehicle (EV) ecosystem without disrupting operations. From fleet procurement and charging infrastructure installation to LFK safety protection—everything under one roof.",
    cta: "Schedule Business Consultation",
    badges: [
      {
        title: "Integrated Ecosystem",
        desc: "One vendor for all your EV mobility needs.",
        icon: Zap,
      },
      {
        title: "Comprehensive Protection",
        desc: "Equipped with industry-standard safety systems (LFK).",
        icon: ShieldCheck,
      },
      {
        title: "Long-term Efficiency",
        desc: "Cut your fleet's operational and maintenance costs.",
        icon: TrendingUp,
      },
    ],
  },
} as const;

export type ProfileLanguage = keyof typeof companyProfileCopy;
