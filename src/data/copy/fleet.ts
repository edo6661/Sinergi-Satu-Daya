export const fleetCopy = {
  id: {
    tagline: "Penjualan & Penyewaan Kendaraan Listrik",
    heading: "Kendaraan Listrik untuk Setiap Skala Operasional",
    description:
      "Dari kendaraan roda dua hingga mobil penumpang dan armada niaga atau logistik. Tersedia untuk penjualan maupun penyewaan B2B, dirawat secara berkala, dan terintegrasi dengan infrastruktur pengisian daya SSD.",
    cta: "Cek Ketersediaan Kendaraan",
    catalogCta: "Lihat Katalog",
    filters: {
      all: "Semua Armada",
      twoWheel: "Roda 2",
      passenger: "Mobil Penumpang",
      commercial: "Niaga & Logistik",
    },
  },
  en: {
    tagline: "EV Sales & Rentals",
    heading: "Electric Vehicles for Every Operational Scale",
    description:
      "From two-wheelers to passenger cars and commercial or logistics fleets. Available for purchase or B2B rentals, routinely maintained, and integrated with SSD's charging infrastructure.",
    cta: "Check Vehicle Availability",
    catalogCta: "View Catalog",
    filters: {
      all: "All Fleets",
      twoWheel: "2-Wheelers",
      passenger: "Passenger Cars",
      commercial: "Commercial & Logistics",
    },
  },
} as const;

export type FleetLanguage = keyof typeof fleetCopy;
export type FleetCategory = "all" | "twoWheel" | "passenger" | "commercial";

export const fleetSliderItems = [
  {
    key: "twoWheel" as const,
    categoryId: "two-wheel",
    image: "/category/1.png",
  },
  {
    key: "passenger" as const,
    categoryId: "passenger",
    image: "/category/2.png",
  },
  {
    key: "commercial" as const,
    categoryId: "commercial",
    image: "/category/3.png",
  },
] as const;

export const fleetData = [
  {
    id: "ev-maka",
    name: "MAKA",
    category: "twoWheel",
    range: "—",
    image: "/category/1.png",
  },
  {
    id: "ev-volta",
    name: "VOLTA",
    category: "twoWheel",
    range: "—",
    image: "/category/1.png",
  },
  {
    id: "ev-wuling",
    name: "Wuling",
    category: "passenger",
    range: "—",
    image: "/category/2.png",
  },
  {
    id: "ev-mg",
    name: "MG",
    category: "passenger",
    range: "—",
    image: "/category/2.png",
  },
  {
    id: "ev-mitra",
    name: "Mitra EV (Wuling) 4 Roda",
    category: "commercial",
    range: "—",
    image: "/category/3.png",
  },
  {
    id: "ev-foton",
    name: "Foton EV (4-6 Roda)",
    category: "commercial",
    range: "—",
    image: "/category/3.png",
  },
  {
    id: "ev-mab",
    name: "MAB EV (3-6 Roda)",
    category: "commercial",
    range: "—",
    image: "/category/3.png",
  },
];
