export const pricingCopy = {
  id: {
    tagline: "Investasi Fleksibel",
    heading: "Pilihan Layanan Sesuai Skala Bisnis",
    monthly: "/ bulan",
    plans: [
      {
        id: "short-term",
        name: "Konsultasi EV B2B",
        price: "Hubungi Kami",
        description:
          "Konsultasi EV B2B untuk bisnis. Fokus untuk tranformasi kendaraan ke ev",
        features: [
          "Konsultasi EV B2B",
          "Fokus 6 bulan hingga 1 tahun ke depan",
        ],
        cta: "Pilih Paket",
        isPopular: false,
      },
      {
        id: "corporate",
        name: "Rental B2B",
        price: "Mulai Rp 5 Juta",
        description:
          "Sewa kendaraan EV untuk kebutuhan operasional bisnis dengan biaya bulanan yang dapat diprediksi.",
        features: [
          "Unit EV Bebas Pilih",
          "Full Maintenance Terjadwal",
          "Asuransi Komprehensif (All-Risk)",
          "Akses Jaringan Charging SSD",
          "Penggantian Unit Darurat",
        ],
        cta: "Minta Penawaran",
        isPopular: true,
      },
      {
        id: "end-to-end",
        name: "Penjualan & Infrastruktur EV",
        price: "Custom Pricing",
        description:
          "Penjualan kendaraan EV lengkap dengan pemasangan EV charger dan sistem fire safety LFK.",
        features: [
          "Pengadaan Unit Kepemilikan",
          "Instalasi Charging Station",
          "Sistem Keselamatan LFK",
          "Pelatihan Driver & Teknisi",
          "Dukungan Teknis Prioritas",
        ],
        cta: "Konsultasi Custom",
        isPopular: false,
      },
    ],
  },
  en: {
    tagline: "Flexible Investment",
    heading: "Service Options Scaled to Your Business",
    monthly: "/ month",
    plans: [
      {
        id: "short-term",
        name: "B2B EV Consulting",
        price: "Contact Us",
        description:
          "B2B EV consulting for businesses. Primary focus for the next 6 months to 1 year.",
        features: [
          "B2B EV consulting",
          "Focus for the next 6 months to 1 year",
        ],
        cta: "Select Plan",
        isPopular: false,
      },
      {
        id: "corporate",
        name: "B2B Rental",
        price: "From Rp 8 Million",
        description:
          "EV vehicle lease for business operational needs with predictable monthly costs.",
        features: [
          "Choice of EV Unit",
          "Scheduled Full Maintenance",
          "Comprehensive Insurance",
          "SSD Charging Network Access",
          "Emergency Replacement Unit",
        ],
        cta: "Request Quote",
        isPopular: true,
      },
      {
        id: "end-to-end",
        name: "EV Sales & Infrastructure",
        price: "Custom Pricing",
        description:
          "EV vehicle sales complete with EV charger installation and LFK fire safety systems.",
        features: [
          "Ownership Unit Procurement",
          "Charging Station Installation",
          "LFK Safety System",
          "Driver & Technician Training",
          "Priority Tech Support",
        ],
        cta: "Custom Consultation",
        isPopular: false,
      },
    ],
  },
} as const;

export type PricingLanguage = keyof typeof pricingCopy;
