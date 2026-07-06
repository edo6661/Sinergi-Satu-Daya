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
    heading: "Layanan SSD untuk Ekosistem Bisnis Anda",
    cta: "Jadwalkan Konsultasi Bisnis",
    items: [
      {
        title: "Penjualan Kendaraan Listrik",
        description:
          "Menyediakan berbagai jenis kendaraan listrik untuk dibeli sesuai dengan kebutuhan operasional bisnis Anda.",
        icon: CarFront,
      },
      {
        title: "Penyewaan B2B",
        description:
          "Menyediakan fasilitas penyewaan kendaraan listrik yang fleksibel untuk mendukung operasional bisnis Anda.",
        icon: TrendingDown,
      },
      {
        title: "Konsultasi Kendaraan Listrik B2B",
        description:
          "Layanan konsultasi B2B dengan fokus utama pada transformasi armada konvensional menjadi kendaraan listrik.",
        icon: Users,
      },
      {
        title: "Instalasi Pengisi Daya Kendaraan Listrik",
        description:
          "Menyediakan peralatan dan jasa instalasi stasiun pengisian daya kendaraan listrik untuk fasilitas Anda.",
        icon: PlugZap,
      },
      {
        title: "Proteksi Keamanan Kendaraan Listrik",
        description:
          "Sistem mitigasi kebakaran khusus baterai litium (kendaraan listrik) di area pangkalan armada dan stasiun pengisian daya Anda.",
        icon: ShieldAlert,
      },
    ],
  },
  en: {
    tagline: "Value for Your Business",
    heading: "SSD Ecosystem Services for Your Business",
    cta: "Schedule a Business Consultation",
    items: [
      {
        title: "EV Sales",
        description:
          "Providing a wide range of electric vehicles available for purchase to meet your business's operational needs.",
        icon: CarFront,
      },
      {
        title: "B2B Rentals",
        description:
          "Providing flexible electric vehicle leasing options tailored to suit your business operations.",
        icon: TrendingDown,
      },
      {
        title: "B2B EV Consulting",
        description:
          "B2B EV consulting services, with a primary focus on fleet transformation over the next 6 to 12 months.",
        icon: Users,
      },
      {
        title: "EV Charger Installation",
        description:
          "Charging station installation at your fleet pool or warehouse, including access to the SSD public network.",
        icon: PlugZap,
      },
      {
        title: "LFK Fire Safety",
        description:
          "Specialized fire mitigation systems for EV lithium batteries in your fleet pools and charging areas.",
        icon: ShieldAlert,
      },
    ],
  },
} as const;

export type BenefitsLanguage = keyof typeof benefitsCopy;