import {
  CarFront,
  TrendingDown,
  Users,
  PlugZap,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: { id: string; en: string };
  description: { id: string; en: string };
  longDescription: { id: string; en: string };
  features: { id: string; en: string }[];
  image: string;
  hasProductCatalog: boolean;
  catalogCategoryIds: string[];
}

const img = (path: string) => encodeURI(path);

export const services: Service[] = [
  {
    id: "ev-sales",
    slug: "ev-sales",
    icon: CarFront,
    title: {
      id: "Penjualan Kendaraan Listrik",
      en: "EV Sales",
    },
    description: {
      id: "Menyediakan berbagai jenis kendaraan listrik untuk dibeli sesuai dengan kebutuhan operasional bisnis Anda.",
      en: "Providing a wide range of electric vehicles available for purchase to meet your business's operational needs.",
    },
    longDescription: {
      id: "SSD menyediakan beragam kendaraan listrik dari berbagai merek — mulai dari motor roda dua, mobil penumpang, hingga armada niaga dan logistik. Setiap unit dipilih untuk mendukung efisiensi operasional bisnis Anda, dengan opsi pengadaan yang fleksibel sesuai skala armada.",
      en: "SSD provides a diverse range of electric vehicles from multiple brands — from two-wheelers and passenger cars to commercial and logistics fleets. Each unit is selected to support your business operational efficiency, with flexible procurement options scaled to your fleet size.",
    },
    features: [
      {
        id: "Motor listrik roda dua (MAKA, Volta, Yadea)",
        en: "Two-wheel EVs (MAKA, Volta, Yadea)",
      },
      {
        id: "Mobil penumpang listrik (MG, Wuling)",
        en: "Passenger EVs (MG, Wuling)",
      },
      {
        id: "Armada niaga & logistik (Foton, MAB)",
        en: "Commercial & logistics fleets (Foton, MAB)",
      },
      {
        id: "Konsultasi pemilihan unit sesuai kebutuhan",
        en: "Unit selection consulting tailored to your needs",
      },
      {
        id: "Dukungan purna jual dan garansi resmi",
        en: "After-sales support and official warranty",
      },
    ],
    image: img("/products/Passanger Roda 4/Wuling/Air EV Long Range.png"),
    hasProductCatalog: true,
    catalogCategoryIds: ["two-wheel", "passenger", "commercial"],
  },
  {
    id: "b2b-rental",
    slug: "b2b-rental",
    icon: TrendingDown,
    title: {
      id: "Penyewaan B2B",
      en: "B2B Rentals",
    },
    description: {
      id: "Menyediakan fasilitas penyewaan kendaraan listrik yang fleksibel untuk mendukung operasional bisnis Anda.",
      en: "Providing flexible electric vehicle leasing options tailored to suit your business operations.",
    },
    longDescription: {
      id: "Solusi penyewaan kendaraan listrik B2B dengan biaya bulanan yang dapat diprediksi. Armada dirawat secara berkala, dilengkapi asuransi komprehensif, akses jaringan pengisian daya SSD, dan unit pengganti darurat agar operasional bisnis Anda tidak terhenti.",
      en: "B2B electric vehicle rental solutions with predictable monthly costs. Fleets are routinely maintained, include comprehensive insurance, SSD charging network access, and emergency replacement units so your business operations never stop.",
    },
    features: [
      {
        id: "Bebas pilih unit kendaraan listrik",
        en: "Freedom to choose EV models",
      },
      { id: "Pemeliharaan penuh terjadwal", en: "Scheduled full maintenance" },
      {
        id: "Asuransi komprehensif (All-Risk)",
        en: "Comprehensive insurance (All-Risk)",
      },
      {
        id: "Akses jaringan pengisian daya SSD",
        en: "SSD charging network access",
      },
      {
        id: "Penggantian unit darurat 24/7",
        en: "24/7 emergency replacement unit",
      },
    ],
    image: img("/cars/wuling-binguo-ev.jpg"),
    hasProductCatalog: true,
    catalogCategoryIds: ["project"],
  },
  {
    id: "b2b-consulting",
    slug: "b2b-consulting",
    icon: Users,
    title: {
      id: "Konsultasi Kendaraan Listrik B2B",
      en: "B2B EV Consulting",
    },
    description: {
      id: "Layanan konsultasi B2B dengan fokus utama pada transformasi armada konvensional menjadi kendaraan listrik.",
      en: "B2B EV consulting services, with a primary focus on fleet transformation over the next 6 to 12 months.",
    },
    longDescription: {
      id: "Tim konsultan SSD membantu perusahaan merencanakan transformasi armada menuju kendaraan listrik. Fokus utama pada proyeksi 6 hingga 12 bulan ke depan — mencakup analisis kebutuhan, perhitungan TCO, strategi transisi bertahap, dan rekomendasi infrastruktur pendukung.",
      en: "SSD's consulting team helps companies plan fleet transformation toward electric vehicles. Primary focus on the next 6 to 12 months — covering needs analysis, TCO calculation, phased transition strategy, and supporting infrastructure recommendations.",
    },
    features: [
      {
        id: "Analisis kebutuhan armada bisnis",
        en: "Business fleet needs analysis",
      },
      {
        id: "Proyeksi TCO 6–12 bulan ke depan",
        en: "TCO projection for the next 6–12 months",
      },
      {
        id: "Strategi transisi armada bertahap",
        en: "Phased fleet transition strategy",
      },
      {
        id: "Rekomendasi infrastruktur pengisian daya",
        en: "Charging infrastructure recommendations",
      },
      {
        id: "Pendampingan dari perencanaan hingga eksekusi",
        en: "Support from planning through execution",
      },
    ],
    image: img("/company-profile/ev-ecosystem.jpg"),
    hasProductCatalog: false,
    catalogCategoryIds: [],
  },
  {
    id: "charger-installation",
    slug: "charger",
    icon: PlugZap,
    title: {
      id: "Instalasi Pengisi Daya Kendaraan Listrik",
      en: "EV Charger Installation",
    },
    description: {
      id: "Menyediakan peralatan dan jasa instalasi stasiun pengisian daya kendaraan listrik untuk fasilitas Anda.",
      en: "Charging station installation at your fleet pool or warehouse, including access to the SSD public network.",
    },
    longDescription: {
      id: "SSD menyediakan peralatan dan jasa instalasi stasiun pengisian daya kendaraan listrik — mulai dari charger AC 11 kWh untuk kantor dan fasilitas bisnis, hingga charger DC cepat 60–360 kWh untuk armada dan hub charging skala besar.",
      en: "SSD provides EV charging equipment and installation services — from AC 11 kWh chargers for offices and business facilities, to DC fast chargers 60–360 kWh for fleets and large-scale charging hubs.",
    },
    features: [
      {
        id: "Charger AC 11 kWh untuk fasilitas bisnis",
        en: "AC 11 kWh chargers for business facilities",
      },
      { id: "Charger DC cepat 60–360 kWh", en: "DC fast chargers 60–360 kWh" },
      {
        id: "Survey lokasi dan desain instalasi",
        en: "Site survey and installation design",
      },
      {
        id: "Instalasi dan commissioning resmi",
        en: "Official installation and commissioning",
      },
      {
        id: "Akses jaringan pengisian daya publik SSD",
        en: "SSD public charging network access",
      },
    ],
    image: img("/products/Charger Device/AC 11 kWh.jpeg"),
    hasProductCatalog: true,
    catalogCategoryIds: ["charger"],
  },
  {
    id: "ev-safety",
    slug: "ev-safety",
    icon: ShieldAlert,
    title: {
      id: "Proteksi Keamanan Kendaraan Listrik",
      en: "EV Safety Protection",
    },
    description: {
      id: "Sistem mitigasi kebakaran khusus baterai litium (kendaraan listrik) di area pangkalan armada dan stasiun pengisian daya Anda.",
      en: "Specialized fire mitigation systems for EV lithium batteries in your fleet pools and charging areas.",
    },
    longDescription: {
      id: "Sistem proteksi keamanan kendaraan listrik berbasis Lithium Fire Killer (LFK) — pemadam api litium pertama di dunia. Dirancang khusus untuk melindungi area pangkalan armada, garasi EV, dan stasiun pengisian daya dari risiko kebakaran baterai litium.",
      en: "EV safety protection system based on Lithium Fire Killer (LFK) — the world's first lithium fire extinguisher. Specifically designed to protect fleet pool areas, EV garages, and charging stations from lithium battery fire risks.",
    },
    features: [
      {
        id: "Lithium Fire Killer (LFK) HARTINDO AF31",
        en: "Lithium Fire Killer (LFK) HARTINDO AF31",
      },
      {
        id: "Proteksi area pangkalan armada EV",
        en: "EV fleet pool area protection",
      },
      {
        id: "Proteksi stasiun pengisian daya",
        en: "Charging station protection",
      },
      {
        id: "Sertifikasi SNI & ramah lingkungan",
        en: "SNI certified & eco-friendly",
      },
      {
        id: "Instalasi dan pelatihan penggunaan",
        en: "Installation and usage training",
      },
    ],
    image: img("/products/Proteksi/LFK_3_KG_[Font].avif"),
    hasProductCatalog: true,
    catalogCategoryIds: ["proteksi"],
  },
];

export const EV_SALES_SLUG = "ev-sales";
export const B2B_RENTAL_SLUG = "b2b-rental";
export const CHARGER_INSTALLATION_SLUG = "charger";
export const EV_SAFETY_SLUG = "ev-safety";

export const categoryToServiceSlug: Record<string, string> = {
  "two-wheel": EV_SALES_SLUG,
  passenger: EV_SALES_SLUG,
  commercial: EV_SALES_SLUG,
  charger: CHARGER_INSTALLATION_SLUG,
  project: B2B_RENTAL_SLUG,
  proteksi: EV_SAFETY_SLUG,
};

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  "charger-installation": CHARGER_INSTALLATION_SLUG,
};

export function resolveServiceSlug(slug: string): string {
  return SERVICE_SLUG_ALIASES[slug] ?? slug;
}

export function getServiceBySlug(slug: string): Service | undefined {
  const resolved = resolveServiceSlug(slug);
  return services.find((s) => s.slug === resolved);
}

export function getServicePath(service: Pick<Service, "slug">): string {
  return `/layanan/${service.slug}`;
}
