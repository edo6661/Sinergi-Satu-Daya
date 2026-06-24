import {
  TrendingDown,
  Layers,
  ShieldAlert,
  Leaf,
  CarFront,
} from "lucide-react";

export const benefitsCopy = {
  id: {
    tagline: "Nilai Lebih untuk Bisnis Anda",
    heading: "Mengapa Memilih Ekosistem SSD?",
    cta: "Hitung Estimasi Penghematan Anda",
    items: [
      {
        title: "Efisiensi Biaya Operasional",
        description:
          "Pangkas pengeluaran bahan bakar dan perawatan rutin armada Anda secara signifikan.",
        icon: TrendingDown,
      },
      {
        title: "Solusi Terintegrasi (End-to-End)",
        description:
          "Bebas ribet. Kami urus semuanya mulai dari unit EV, infrastruktur charging, hingga perizinan.",
        icon: Layers,
      },
      {
        title: "Keamanan Standar",
        description:
          "Mitigasi risiko maksimal dengan sistem yang dirancang khusus untuk baterai EV.",
        icon: ShieldAlert,
      },
      {
        title: "Peningkatan Reputasi ESG",
        description:
          "Jadikan perusahaan Anda pelopor industri hijau dengan mobilitas tanpa emisi karbon.",
        icon: Leaf,
      },
      {
        title: "Sewa & Jual Beli Kendaraan",
        description:
          "Menawarkan berbagai jenis kendaraan listrik untuk dibeli maupun disewa dengan harga terjangkau sesuai kebutuhan operasional bisnis Anda.",
        icon: CarFront,
      },
    ],
  },
  en: {
    tagline: "Value for Your Business",
    heading: "Why Choose the SSD Ecosystem?",
    cta: "Calculate Your Estimated Savings",
    items: [
      {
        title: "Operational Cost Efficiency",
        description:
          "Significantly cut your business fleet's fuel and routine maintenance expenses.",
        icon: TrendingDown,
      },
      {
        title: "End-to-End Integrated Solution",
        description:
          "Hassle-free. We handle everything from EV units and infrastruktur charging to licensing.",
        icon: Layers,
      },
      {
        title: "Safety Standards",
        description:
          "Maximum risk mitigation with our specialized safety system designed for EV batteries.",
        icon: ShieldAlert,
      },
      {
        title: "ESG Reputation Boost",
        description:
          "Position your company as a green industry pioneer with zero-emission mobility.",
        icon: Leaf,
      },
      {
        title: "Leasing & Vehicle Sales",
        description:
          "Offering a variety of electric vehicles for purchase or lease at affordable prices to suit your business operational needs.",
        icon: CarFront,
      },
    ],
  },
} as const;

export type BenefitsLanguage = keyof typeof benefitsCopy;
