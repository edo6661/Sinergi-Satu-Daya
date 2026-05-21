export const pricingCopy = {
  id: {
    tagline: "Investasi Fleksibel",
    heading: "Pilihan Paket Sesuai Skala Bisnis",
    monthly: "/ bulan",
    plans: [
      {
        id: "short-term",
        name: "Jangka Pendek (Pilot)",
        price: "Mulai Rp 5 Juta",
        description:
          "Ideal untuk pengujian efisiensi operasional armada EV di perusahaan Anda.",
        features: [
          "Unit Mobil Penumpang/Niaga",
          "Asuransi Dasar (TLO)",
          "Bantuan Jalan Darurat 24/7",
          "Jarak Tempuh Maks 2.000 km",
        ],
        cta: "Pilih Paket",
        isPopular: false,
      },
      {
        id: "corporate",
        name: "Kontrak Korporat",
        price: "Mulai Rp 8 Juta",
        description:
          "Solusi bebas ribet dengan biaya operasional bulanan yang dapat diprediksi.",
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
        name: "End-to-End Ecosystem",
        price: "Custom Pricing",
        description:
          "Pengadaan aset permanen lengkap dengan infrastruktur dan sistem keamanan.",
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
    heading: "Pricing Plans Scaled to Your Business",
    monthly: "/ month",
    plans: [
      {
        id: "short-term",
        name: "Short-Term (Pilot)",
        price: "From Rp 5 Million",
        description:
          "Ideal for testing EV fleet operational efficiency in your company.",
        features: [
          "Passenger/Commercial Unit",
          "Basic Insurance (TLO)",
          "24/7 Roadside Assistance",
          "Max Mileage 2,000 km",
        ],
        cta: "Select Plan",
        isPopular: false,
      },
      {
        id: "corporate",
        name: "Corporate Contract",
        price: "From Rp 8 Million",
        description:
          "Hassle-free solution with predictable monthly operational costs.",
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
        name: "End-to-End Ecosystem",
        price: "Custom Pricing",
        description:
          "Permanent asset procurement complete with infrastructure and safety systems.",
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
