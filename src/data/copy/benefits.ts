import {
  TrendingDown,
  CarFront,
  Users,
  PlugZap,
  ShieldAlert,
} from "lucide-react";

export const benefitsCopy = {
  id: {
    tagline: "Nilai Lebih untuk Bisnis Anda",
    heading: "Layanan Ekosistem SSD untuk Bisnis",
    cta: "Jadwalkan Konsultasi Bisnis",
    items: [
      {
        title: "Penjualan Kendaraan EV",
        description:
          "Menyediakan berbagai jenis kendaraan listrik untuk dibeli sesuai kebutuhan operasional bisnis Anda.",
        icon: CarFront,
      },
      {
        title: "Rental B2B",
        description:
          "Menyediakan kendaraan listrik untuk disewa sesuai kebutuhan operasional bisnis Anda.",
        icon: TrendingDown,
      },
      {
        title: "Konsultasi EV B2B",
        description:
          "Konsultasi EV B2B. Fokus utama untuk 6 bulan hingga 1 tahun ke depan.",
        icon: Users,
      },
      {
        title: "Pemasangan EV Charger",
        description:
          "Instalasi charging station di pool/gudang Anda, ditambah akses ke jaringan publik SSD.",
        icon: PlugZap,
      },
      {
        title: "Fire Safety LFK",
        description:
          "Sistem mitigasi kebakaran khusus baterai lithium (EV) di area pool dan charging station Anda.",
        icon: ShieldAlert,
      },
    ],
  },
  en: {
    tagline: "Value for Your Business",
    heading: "SSD Ecosystem Services for Business",
    cta: "Schedule Business Consultation",
    items: [
      {
        title: "EV Vehicle Sales",
        description:
          "Providing a variety of electric vehicles for purchase to suit your business operational needs.",
        icon: CarFront,
      },
      {
        title: "B2B Rental",
        description:
          "Providing electric vehicles for lease to suit your business operational needs.",
        icon: TrendingDown,
      },
      {
        title: "B2B EV Consulting",
        description:
          "B2B EV consulting. Primary focus for the next 6 months to 1 year.",
        icon: Users,
      },
      {
        title: "EV Charger Installation",
        description:
          "Charging station installation at your pool/warehouse, plus access to the SSD public network.",
        icon: PlugZap,
      },
      {
        title: "LFK Fire Safety",
        description:
          "Specialized fire mitigation system for EV lithium batteries in your fleet pool and charging areas.",
        icon: ShieldAlert,
      },
    ],
  },
} as const;

export type BenefitsLanguage = keyof typeof benefitsCopy;
