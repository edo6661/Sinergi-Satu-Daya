import { ShieldCheck, Zap, TrendingUp } from "lucide-react";

export const companyProfileCopy = {
  id: {
    tagline: "Tentang PT Sinergi Satu Daya",
    heading: "Penggerak Utama Transformasi Mobilitas Berkelanjutan",
    description:
      "Berdiri sejak tahun 2019, PT Sinergi Satu Daya (SSD) hadir sebagai pelopor Penyedia Solusi Mobilitas Terintegrasi (Integrated Mobility Solution Provider). Kami menyediakan penjualan kendaraan listrik, penyewaan B2B, konsultasi kendaraan listrik untuk bisnis, instalasi stasiun pengisian daya, serta sistem proteksi kebakaran. Fokus utama layanan konsultasi B2B kami berada pada proyeksi 6 hingga 12 bulan ke depan.",
    cta: "Jadwalkan Konsultasi Bisnis",
    badges: [
      {
        title: "Penjualan & Penyewaan B2B",
        desc: "Kendaraan listrik untuk dibeli maupun disewa sesuai dengan kebutuhan operasional bisnis Anda.",
        icon: Zap,
      },
      {
        title: "Konsultasi Kendaraan Listrik B2B",
        desc: "Layanan konsultasi kendaraan listrik B2B dengan fokus proyeksi 6 hingga 12 bulan ke depan.",
        icon: TrendingUp,
      },
      {
        title: "Infrastruktur Kendaraan Listrik",
        desc: "Instalasi stasiun pengisian daya kendaraan listrik beserta sistem keamanannya.",
        icon: ShieldCheck,
      },
    ],
  },
  en: {
    tagline: "About PT Sinergi Satu Daya",
    heading: "The Main Driver of Sustainable Mobility Transformation",
    description:
      "Established in 2019, PT Sinergi Satu Daya (SSD) stands as a pioneer in providing Integrated Mobility Solutions. We offer EV sales, B2B rentals, EV consulting for businesses, EV charging station installations, and LFK fire safety systems. Our primary B2B consulting focus targets the next 6 to 12 months.",
    cta: "Schedule a Business Consultation",
    badges: [
      {
        title: "EV Sales & B2B Rentals",
        desc: "Electric vehicles available for purchase or lease to meet your business's operational needs.",
        icon: Zap,
      },
      {
        title: "B2B EV Consulting",
        desc: "B2B EV consulting services focusing on the next 6 to 12 months.",
        icon: TrendingUp,
      },
      {
        title: "EV Infrastructure",
        desc: "EV charging station installations and LFK fire safety systems.",
        icon: ShieldCheck,
      },
    ],
  },
} as const;

export type ProfileLanguage = keyof typeof companyProfileCopy;