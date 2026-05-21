import { TrendingDown, Layers, ShieldAlert, Leaf } from "lucide-react";

export const benefitsCopy = {
  id: {
    tagline: "Nilai Lebih untuk Bisnis Anda",
    heading: "Mengapa Memilih Ekosistem SSD?",
    cta: "Hitung Estimasi Penghematan Anda",
    items: [
      {
        title: "Efisiensi Biaya Operasional",
        description:
          "Pangkas pengeluaran bahan bakar dan perawatan rutin armada logistik Anda secara signifikan.",
        icon: TrendingDown,
      },
      {
        title: "Solusi Terintegrasi (End-to-End)",
        description:
          "Bebas ribet. Kami urus semuanya mulai dari unit EV, instalasi charging station, hingga perizinan.",
        icon: Layers,
      },
      {
        title: "Keamanan Standar LFK",
        description:
          "Mitigasi risiko maksimal dengan sistem Fire Safety LFK yang dirancang khusus untuk baterai EV.",
        icon: ShieldAlert,
      },
      {
        title: "Peningkatan Reputasi ESG",
        description:
          "Jadikan perusahaan Anda pelopor industri hijau dengan mobilitas tanpa emisi karbon.",
        icon: Leaf,
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
          "Significantly cut your logistics fleet's fuel and routine maintenance expenses.",
        icon: TrendingDown,
      },
      {
        title: "End-to-End Integrated Solution",
        description:
          "Hassle-free. We handle everything from EV units and charging station installations to licensing.",
        icon: Layers,
      },
      {
        title: "LFK Safety Standards",
        description:
          "Maximum risk mitigation with our specialized LFK Fire Safety system designed for EV batteries.",
        icon: ShieldAlert,
      },
      {
        title: "ESG Reputation Boost",
        description:
          "Position your company as a green industry pioneer with zero-emission mobility.",
        icon: Leaf,
      },
    ],
  },
} as const;

export type BenefitsLanguage = keyof typeof benefitsCopy;
