export const pricingCopy = {
  id: {
    tagline: "Investasi Fleksibel",
    heading: "Pilihan Layanan Sesuai Skala Bisnis",
    monthly: "/ bulan",
    plans: [
      {
        id: "short-term",
        name: "Konsultasi Kendaraan Listrik B2B",
        price: "Hubungi Kami",
        description:
          "Konsultasi kendaraan listrik B2B untuk bisnis. Fokus utama pada transformasi menuju kendaraan listrik.",
        features: [
          "Konsultasi Kendaraan Listrik B2B",
          "Fokus proyeksi 6 hingga 12 bulan ke depan",
        ],
        cta: "Pilih Paket",
        isPopular: false,
      },
      {
        id: "corporate",
        name: "Penyewaan B2B",
        price: "Mulai Rp 5 Juta",
        description:
          "Sewa kendaraan listrik untuk kebutuhan operasional bisnis dengan biaya bulanan yang dapat diprediksi.",
        features: [
          "Bebas Pilih Unit Kendaraan Listrik",
          "Pemeliharaan Penuh Terjadwal",
          "Asuransi Komprehensif (All-Risk)",
          "Akses Jaringan Pengisian Daya SSD",
          "Penggantian Unit Darurat",
        ],
        cta: "Minta Penawaran",
        isPopular: true,
      },
      {
        id: "end-to-end",
        name: "Penjualan & Infrastruktur Kendaraan Listrik",
        price: "Custom Pricing",
        description:
          "Penjualan kendaraan listrik lengkap dengan instalasi stasiun pengisian daya dan sistem proteksi kebakaran LFK.",
        features: [
          "Pengadaan Unit Kepemilikan",
          "Instalasi Stasiun Pengisian Daya",
          "Sistem Proteksi Kebakaran LFK",
          "Pelatihan Pengemudi & Teknisi",
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
          "B2B EV consulting for businesses. Primary focus targets fleet transformations for the next 6 to 12 months.",
        features: [
          "B2B EV Consulting",
          "Focus on the next 6 to 12 months",
        ],
        cta: "Select Plan",
        isPopular: false,
      },
      {
        id: "corporate",
        name: "B2B Rentals",
        price: "From Rp 5 Million",
        description:
          "Electric vehicle leasing for business operational needs with predictable monthly costs.",
        features: [
          "Choice of EV Models",
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
          "EV sales complete with charging station installations and LFK fire safety systems.",
        features: [
          "Ownership Unit Procurement",
          "Charging Station Installations",
          "LFK Fire Safety System",
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