import { ShieldCheck, Zap, TrendingUp } from "lucide-react";

export const companyProfileCopy = {
  id: {
    tagline: "Tentang PT Sinergi Satu Daya",
    heading: "Penggerak Utama Transformasi Mobilitas Berkelanjutan",
    description:
      "Berdiri sejak tahun 2019, PT Sinergi Satu Daya (SSD) hadir sebagai pelopor Integrated Mobility Solution Provider. Misi kami berkomitmen untuk menyediakan kendaraan listrik yang aman dan efisien, serta layanan purna jual yang memuaskan. Kami tidak sekadar menyediakan kendaraan, kami mendampingi bisnis Anda melakukan transisi ke ekosistem EV secara menyeluruh.",
    cta: "Jadwalkan Konsultasi Bisnis",
    badges: [
      {
        title: "Ekosistem Terintegrasi",
        desc: "Satu vendor untuk semua kebutuhan EV Anda.",
        icon: Zap,
      },
      {
        title: "Proteksi Menyeluruh",
        desc: "Dilengkapi sistem keselamatan standar industri.",
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
      "Established in 2025, PT Sinergi Satu Daya (SSD) stands as a pioneer in Integrated Mobility Solutions. Our mission is committed to providing safe and efficient electric vehicles, along with highly satisfying after-sales services. We don't just lease vehicles; we guide your business through a seamless transition to the EV ecosystem.",
    cta: "Schedule Business Consultation",
    badges: [
      {
        title: "Integrated Ecosystem",
        desc: "One vendor for all your EV mobility needs.",
        icon: Zap,
      },
      {
        title: "Comprehensive Protection",
        desc: "Equipped with industry-standard safety systems.",
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
