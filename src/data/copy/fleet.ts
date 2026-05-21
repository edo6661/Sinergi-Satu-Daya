export const fleetCopy = {
  id: {
    tagline: "Pilihan Armada EV",
    heading: "Armada Premium untuk Setiap Skala Operasional",
    description:
      "Dari mobil penumpang eksekutif hingga van kargo niaga. Semua unit siap jalan, dirawat secara berkala, dan terintegrasi penuh dengan infrastruktur charging SSD.",
    cta: "Cek Ketersediaan Armada",
    filters: {
      all: "Semua Armada",
      passenger: "Mobil Penumpang",
      commercial: "Kendaraan Niaga",
    },
  },
  en: {
    tagline: "EV Fleet Selection",
    heading: "Premium Fleet for Every Operational Scale",
    description:
      "From executive passenger cars to commercial cargo vans. All units are road-ready, routinely maintained, and fully integrated with SSD's charging infrastructure.",
    cta: "Check Fleet Availability",
    filters: {
      all: "All Fleet",
      passenger: "Passenger Cars",
      commercial: "Commercial Vehicles",
    },
  },
} as const;

export type FleetLanguage = keyof typeof fleetCopy;
export type FleetCategory = "all" | "passenger" | "commercial";
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
];
