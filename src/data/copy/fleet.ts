export const fleetCopy = {
  id: {
    tagline: "Penjualan & Rental Kendaraan EV",
    heading: "Kendaraan EV untuk Setiap Skala Operasional",
    description:
      "Dari mobil penumpang eksekutif hingga van kargo niaga. Tersedia untuk penjualan maupun rental B2B, dirawat secara berkala, dan terintegrasi dengan infrastruktur charging SSD.",
    cta: "Cek Ketersediaan Kendaraan",
    filters: {
      all: "Semua Armada",
      passenger: "Mobil Penumpang",
      commercial: "Kendaraan Niaga",
      recreation: "Transportasi Rekreasi",
    },
  },
  en: {
    tagline: "EV Vehicle Sales & Rental",
    heading: "EV Vehicles for Every Operational Scale",
    description:
      "From executive passenger cars to commercial cargo vans. Available for purchase or B2B rental, routinely maintained, and integrated with SSD charging infrastructure.",
    cta: "Check Vehicle Availability",
    filters: {
      all: "All Fleet",
      passenger: "Passenger Cars",
      commercial: "Commercial Vehicles",
      recreation: "Recreational Transport",
    },
  },
} as const;

export type FleetLanguage = keyof typeof fleetCopy;
export type FleetCategory = "all" | "passenger" | "commercial" | "recreation";
export const fleetData = [
  {
    id: "ev-1",
    name: "Ioniq 5 Signature",
    category: "passenger",
    range: "481 km",
    image: "/cars/ioniq-5-signature.jpg",
  },
  {
    id: "ev-2",
    name: "DFSK Gelora E",
    category: "commercial",
    range: "300 km",
    image: "/cars/dfsk-gelora-e.jpg",
  },
  {
    id: "ev-3",
    name: "Wuling BinguoEV",
    category: "passenger",
    range: "410 km",
    image: "/cars/wuling-binguo-ev.jpg",
  },
  {
    id: "ev-4",
    name: "Wuling Air EV Lite",
    category: "recreation",
    range: "200 km",
    image: "/cars/wuling-binguo-ev.jpg", // Pastikan gambar tersedia nanti
  },
];
