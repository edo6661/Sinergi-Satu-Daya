import { categoryToServiceSlug, resolveServiceSlug } from "./services";

export interface LayananCategory {
  id: string;
  slug: string;
  name: { id: string; en: string };
  description: { id: string; en: string };
}

export interface LayananProduct {
  id: string;
  slug: string;
  categoryId: string;
  brand?: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  image: string;
  images?: {
    front: string;
    back: string;
    left: string;
    right: string;
  };
}

const img = (path: string) => encodeURI(path);

export const layananCategories: LayananCategory[] = [
  {
    id: "two-wheel",
    slug: "two-wheel",
    name: { id: "Roda 2", en: "2-Wheelers" },
    description: {
      id: "Motor listrik untuk operasional harian dan pengiriman jarak pendek.",
      en: "Electric motorcycles for daily operations and short-range delivery.",
    },
  },
  {
    id: "passenger",
    slug: "passenger",
    name: { id: "Mobil Penumpang", en: "Passenger Cars" },
    description: {
      id: "Mobil listrik penumpang untuk kebutuhan korporat dan operasional bisnis.",
      en: "Passenger EVs for corporate and business operational needs.",
    },
  },
  {
    id: "commercial",
    slug: "commercial",
    name: { id: "Niaga & Logistik", en: "Commercial & Logistics" },
    description: {
      id: "Armada niaga dan logistik listrik untuk distribusi dan transportasi barang.",
      en: "Electric commercial and logistics fleets for distribution and cargo transport.",
    },
  },
  {
    id: "charger",
    slug: "charger",
    name: { id: "Pengisi Daya Kendaraan Listrik", en: "EV Chargers" },
    description: {
      id: "Stasiun pengisian daya AC dan DC untuk infrastruktur kendaraan listrik.",
      en: "AC and DC charging stations for EV infrastructure.",
    },
  },
  {
    id: "project",
    slug: "project",
    name: { id: "Proyek Berhasil", en: "Successful Projects" },
    description: {
      id: "Implementasi armada listrik berskala besar yang telah kami dukung.",
      en: "Large-scale EV fleet implementations we have supported.",
    },
  },
  {
    id: "proteksi",
    slug: "proteksi",
    name: { id: "Proteksi Kebakaran LFK", en: "LFK Fire Protection" },
    description: {
      id: "Pemadam api litium Lithium Fire Killer (LFK) untuk proteksi area armada dan charging station.",
      en: "Lithium Fire Killer (LFK) extinguishers for fleet pool and charging station protection.",
    },
  },
];

export const layananProducts: LayananProduct[] = [
  // Roda 2 — MAKA
  {
    id: "maka-cavalry-ocean-blue",
    slug: "maka-cavalry-ocean-blue",
    categoryId: "two-wheel",
    brand: "MAKA",
    title: { id: "MAKA Cavalry — Ocean Blue", en: "MAKA Cavalry — Ocean Blue" },
    description: {
      id: "Motor listrik MAKA Cavalry untuk operasional bisnis yang efisien dan ramah lingkungan.",
      en: "MAKA Cavalry electric motorcycle for efficient and eco-friendly business operations.",
    },
    image: img("/products/Roda 2/MAKA/Ocean-Blue-Maka-Cavalry.webp"),
  },
  {
    id: "maka-cavalry-royal-white",
    slug: "maka-cavalry-royal-white",
    categoryId: "two-wheel",
    brand: "MAKA",
    title: {
      id: "MAKA Cavalry — Royal White",
      en: "MAKA Cavalry — Royal White",
    },
    description: {
      id: "Motor listrik MAKA Cavalry untuk operasional bisnis yang efisien dan ramah lingkungan.",
      en: "MAKA Cavalry electric motorcycle for efficient and eco-friendly business operations.",
    },
    image: img("/products/Roda 2/MAKA/Royal-White-Maka-Cavalry.webp"),
  },
  {
    id: "maka-cavalry-victory-red",
    slug: "maka-cavalry-victory-red",
    categoryId: "two-wheel",
    brand: "MAKA",
    title: {
      id: "MAKA Cavalry — Victory Red",
      en: "MAKA Cavalry — Victory Red",
    },
    description: {
      id: "Motor listrik MAKA Cavalry untuk operasional bisnis yang efisien dan ramah lingkungan.",
      en: "MAKA Cavalry electric motorcycle for efficient and eco-friendly business operations.",
    },
    image: img("/products/Roda 2/MAKA/Victory-Red-Maka-Cavalry.webp"),
  },
  // Roda 2 — Volta
  {
    id: "volta-mandala-x",
    slug: "volta-mandala-x",
    categoryId: "two-wheel",
    brand: "Volta",
    title: { id: "Volta Mandala X", en: "Volta Mandala X" },
    description: {
      id: "Motor listrik Volta Mandala X untuk mobilitas perkotaan dan pengiriman.",
      en: "Volta Mandala X electric motorcycle for urban mobility and delivery.",
    },
    image: img("/products/Roda 2/Volta/Mandala X.jpg"),
  },
  {
    id: "volta-patriot-x",
    slug: "volta-patriot-x",
    categoryId: "two-wheel",
    brand: "Volta",
    title: { id: "Volta Patriot X", en: "Volta Patriot X" },
    description: {
      id: "Motor listrik Volta Patriot X dengan performa tangguh untuk operasional harian.",
      en: "Volta Patriot X electric motorcycle with robust performance for daily operations.",
    },
    image: img("/products/Roda 2/Volta/Patriot X.jpg"),
  },
  {
    id: "volta-401",
    slug: "volta-401",
    categoryId: "two-wheel",
    brand: "Volta",
    title: { id: "Volta 401", en: "Volta 401" },
    description: {
      id: "Motor listrik Volta 401 untuk kebutuhan mobilitas bisnis skala menengah.",
      en: "Volta 401 electric motorcycle for mid-scale business mobility needs.",
    },
    image: img("/products/Roda 2/Volta/Volta_401.png"),
  },
  // Roda 2 — Yadea
  {
    id: "yadea-gs70",
    slug: "yadea-gs70",
    categoryId: "two-wheel",
    brand: "Yadea",
    title: { id: "Yadea GS70", en: "Yadea GS70" },
    description: {
      id: "Motor listrik Yadea GS70 untuk pengiriman dan operasional jarak menengah.",
      en: "Yadea GS70 electric motorcycle for delivery and mid-range operations.",
    },
    image: img("/products/Roda 2/Yadea/Mandala X.png"),
  },
  {
    id: "yadea-gt20",
    slug: "yadea-gt20",
    categoryId: "two-wheel",
    brand: "Yadea",
    title: { id: "Yadea GT20", en: "Yadea GT20" },
    description: {
      id: "Motor listrik Yadea GT20 dengan desain modern untuk armada bisnis.",
      en: "Yadea GT20 electric motorcycle with modern design for business fleets.",
    },
    image: img("/products/Roda 2/Yadea/Patriot X.png"),
  },
  {
    id: "yadea-velax",
    slug: "yadea-velax",
    categoryId: "two-wheel",
    brand: "Yadea",
    title: { id: "Yadea Velax", en: "Yadea Velax" },
    description: {
      id: "Motor listrik Yadea Velax untuk mobilitas perkotaan yang efisien.",
      en: "Yadea Velax electric motorcycle for efficient urban mobility.",
    },
    image: img("/products/Roda 2/Yadea/Volta_401.png"),
  },
  // Mobil Penumpang — MG
  {
    id: "mg-4-ev",
    slug: "mg-4-ev",
    categoryId: "passenger",
    brand: "MG",
    title: { id: "MG 4 EV", en: "MG 4 EV" },
    description: {
      id: "Mobil penumpang listrik MG 4 EV untuk kebutuhan korporat dan eksekutif.",
      en: "MG 4 EV passenger electric car for corporate and executive needs.",
    },
    image: img("/products/Passanger Roda 4/MG/mg-4-ev-color-163696.png"),
  },
  {
    id: "mg-zs-ev",
    slug: "mg-zs-ev",
    categoryId: "passenger",
    brand: "MG",
    title: { id: "MG ZS EV", en: "MG ZS EV" },
    description: {
      id: "SUV listrik MG ZS EV dengan jarak tempuh optimal untuk operasional bisnis.",
      en: "MG ZS EV electric SUV with optimal range for business operations.",
    },
    image: img("/products/Passanger Roda 4/MG/MG ZS EV.png"),
  },
  // Mobil Penumpang — Wuling
  {
    id: "wuling-air-ev",
    slug: "wuling-air-ev",
    categoryId: "passenger",
    brand: "Wuling",
    title: { id: "Wuling Air EV Long Range", en: "Wuling Air EV Long Range" },
    description: {
      id: "Mobil listrik kompak Wuling Air EV untuk mobilitas perkotaan perusahaan.",
      en: "Wuling Air EV compact electric car for corporate urban mobility.",
    },
    image: img("/products/Passanger Roda 4/Wuling/Air EV Long Range.png"),
  },
  {
    id: "wuling-binguo-ev",
    slug: "wuling-binguo-ev",
    categoryId: "passenger",
    brand: "Wuling",
    title: { id: "Wuling Binguo EV", en: "Wuling Binguo EV" },
    description: {
      id: "Mobil listrik Wuling Binguo EV dengan desain stylish untuk armada korporat.",
      en: "Wuling Binguo EV electric car with stylish design for corporate fleets.",
    },
    image: img("/products/Passanger Roda 4/Wuling/Binguo EV.png"),
  },
  {
    id: "wuling-cloud-ev",
    slug: "wuling-cloud-ev",
    categoryId: "passenger",
    brand: "Wuling",
    title: { id: "Wuling Cloud EV", en: "Wuling Cloud EV" },
    description: {
      id: "Mobil listrik Wuling Cloud EV untuk kebutuhan transportasi penumpang bisnis.",
      en: "Wuling Cloud EV electric car for business passenger transport needs.",
    },
    image: img("/products/Passanger Roda 4/Wuling/Cloud EV.png"),
  },
  {
    id: "wuling-mitra-ev-passenger",
    slug: "wuling-mitra-ev-passenger",
    categoryId: "passenger",
    brand: "Wuling",
    title: { id: "Wuling Mitra EV Passenger", en: "Wuling Mitra EV Passenger" },
    description: {
      id: "Mobil penumpang listrik Wuling Mitra EV untuk layanan transportasi B2B.",
      en: "Wuling Mitra EV passenger electric car for B2B transport services.",
    },
    image: img("/products/Passanger Roda 4/Wuling/Mitra EV Passanger.png"),
  },
  // Niaga & Logistik — Foton Roda 4
  {
    id: "foton-e-truckmate",
    slug: "foton-e-truckmate",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Truckmate", en: "Foton E-Truckmate" },
    description: {
      id: "Kendaraan niaga listrik Foton E-Truckmate untuk distribusi dan logistik.",
      en: "Foton E-Truckmate electric commercial vehicle for distribution and logistics.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 4/E-Truckmate.png",
    ),
  },
  {
    id: "foton-e-tunland",
    slug: "foton-e-tunland",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Tunland", en: "Foton E-Tunland" },
    description: {
      id: "Pick-up listrik Foton E-Tunland untuk operasional niaga dan konstruksi.",
      en: "Foton E-Tunland electric pickup for commercial and construction operations.",
    },
    image: img("/products/Niaga.LogistikCommercial/Foton/Roda 4/E-Tunland.png"),
  },
  {
    id: "foton-e-view-connect",
    slug: "foton-e-view-connect",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-View Connect", en: "Foton E-View Connect" },
    description: {
      id: "Van listrik Foton E-View Connect untuk transportasi penumpang komersial.",
      en: "Foton E-View Connect electric van for commercial passenger transport.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 4/E-View Connect.png",
    ),
  },
  {
    id: "foton-e-miler",
    slug: "foton-e-miler",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Miler", en: "Foton E-Miler" },
    description: {
      id: "Kendaraan listrik Foton E-Miler untuk armada logistik jarak menengah.",
      en: "Foton E-Miler electric vehicle for mid-range logistics fleets.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 4/Foton E-Miler.png",
    ),
  },
  // Niaga & Logistik — Foton Roda 6
  {
    id: "foton-e-aumark-14t",
    slug: "foton-e-aumark-14t",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Aumark 14T", en: "Foton E-Aumark 14T" },
    description: {
      id: "Truk listrik Foton E-Aumark 14T untuk distribusi barang berskala besar.",
      en: "Foton E-Aumark 14T electric truck for large-scale cargo distribution.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 6/E-Aumark 14T.png",
    ),
  },
  {
    id: "foton-e-aumark-85t",
    slug: "foton-e-aumark-85t",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Aumark 8.5T", en: "Foton E-Aumark 8.5T" },
    description: {
      id: "Truk listrik Foton E-Aumark 8.5T untuk logistik dan distribusi regional.",
      en: "Foton E-Aumark 8.5T electric truck for regional logistics and distribution.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 6/E-Aumark 8.5T.png",
    ),
  },
  {
    id: "foton-e-aumark",
    slug: "foton-e-aumark",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Aumark", en: "Foton E-Aumark" },
    description: {
      id: "Truk listrik Foton E-Aumark untuk kebutuhan armada niaga dan logistik.",
      en: "Foton E-Aumark electric truck for commercial and logistics fleet needs.",
    },
    image: img("/products/Niaga.LogistikCommercial/Foton/Roda 6/E-Aumark.png"),
  },
  // Niaga & Logistik — MAB
  {
    id: "mab-dtw-60t",
    slug: "mab-dtw-60t",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB DTW 60T", en: "MAB DTW 60T" },
    description: {
      id: "Kendaraan niaga listrik MAB DTW 60T untuk transportasi barang berat.",
      en: "MAB DTW 60T electric commercial vehicle for heavy cargo transport.",
    },
    image: img("/products/Niaga.LogistikCommercial/MAB/DTW 60T.png"),
  },
  {
    id: "mab-eth-6",
    slug: "mab-eth-6",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB ETH 6", en: "MAB ETH 6" },
    description: {
      id: "Bus listrik MAB ETH 6 untuk transportasi penumpang komersial.",
      en: "MAB ETH 6 electric bus for commercial passenger transport.",
    },
    image: img("/products/Niaga.LogistikCommercial/MAB/ETH 6.png"),
  },
  {
    id: "mab-8-nf",
    slug: "mab-8-nf",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB 8 NF", en: "MAB 8 NF" },
    description: {
      id: "Bus listrik MAB 8 NF untuk armada transportasi penumpang B2B.",
      en: "MAB 8 NF electric bus for B2B passenger transport fleets.",
    },
    image: img("/products/Niaga.LogistikCommercial/MAB/MAB 8 NF.png"),
  },
  {
    id: "mab-md-12-e",
    slug: "mab-md-12-e",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB MD 12-E", en: "MAB MD 12-E" },
    description: {
      id: "Bus listrik MAB MD 12-E dengan lantai normal untuk operasional komersial.",
      en: "MAB MD 12-E electric bus with normal floor for commercial operations.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/MAB/MAB MD 12-E Nromal Floor.png",
    ),
  },
  {
    id: "mab-md-8-e",
    slug: "mab-md-8-e",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB MD 8 E", en: "MAB MD 8 E" },
    description: {
      id: "Bus listrik medium MAB MD 8 E untuk transportasi korporat.",
      en: "MAB MD 8 E medium electric bus for corporate transport.",
    },
    image: img("/products/Niaga.LogistikCommercial/MAB/MAB MD 8 E.png"),
  },
  // Niaga & Logistik — Wuling
  {
    id: "wuling-mitra-ev-bv",
    slug: "wuling-mitra-ev-bv",
    categoryId: "commercial",
    brand: "Wuling",
    title: { id: "Wuling Mitra EV BV", en: "Wuling Mitra EV BV" },
    description: {
      id: "Van niaga listrik Wuling Mitra EV BV untuk distribusi dan logistik.",
      en: "Wuling Mitra EV BV electric commercial van for distribution and logistics.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Wuling/Wuling Mitra EV BV.png",
    ),
  },
  // EV Charger
  {
    id: "ac-11-kwh",
    slug: "ac-11-kwh",
    categoryId: "charger",
    brand: "SSD",
    title: { id: "AC Charger 11 kWh", en: "AC Charger 11 kWh" },
    description: {
      id: "Stasiun pengisian daya AC 11 kWh untuk instalasi kantor dan fasilitas bisnis.",
      en: "AC 11 kWh charging station for office and business facility installations.",
    },
    image: img("/products/Charger Device/AC 11 kWh.jpeg"),
  },
  {
    id: "dc-60-360-kwh",
    slug: "dc-60-360-kwh",
    categoryId: "charger",
    brand: "SSD",
    title: { id: "DC Charger 60–360 kWh", en: "DC Charger 60–360 kWh" },
    description: {
      id: "Stasiun pengisian daya DC cepat 60–360 kWh untuk armada dan hub charging.",
      en: "DC fast charging station 60–360 kWh for fleets and charging hubs.",
    },
    image: img("/products/Charger Device/DC 60-360 kWh.png"),
  },
  {
    id: "dc-120-360-kwh",
    slug: "dc-120-360-kwh",
    categoryId: "charger",
    brand: "SSD",
    title: { id: "DC Charger 120–360 kWh", en: "DC Charger 120–360 kWh" },
    description: {
      id: "Stasiun pengisian daya DC ultra-cepat 120–360 kWh untuk operasional skala besar.",
      en: "DC ultra-fast charging station 120–360 kWh for large-scale operations.",
    },
    image: img("/products/Charger Device/DC 120-360 kWh.png"),
  },
  // Proyek Berhasil
  {
    id: "double-decker",
    slug: "double-decker",
    categoryId: "project",
    brand: "SSD",
    title: { id: "Armada Double Decker", en: "Double Decker Fleet" },
    description: {
      id: "Implementasi armada bus listrik double decker berskala besar.",
      en: "Large-scale double decker electric bus fleet implementation.",
    },
    image: img("/products/Project Berhasil/Double Decker.png"),
  },
  {
    id: "panoramic",
    slug: "panoramic",
    categoryId: "project",
    brand: "SSD",
    title: { id: "Armada Panoramic", en: "Panoramic Fleet" },
    description: {
      id: "Proyek armada bus panoramic listrik untuk transportasi komersial.",
      en: "Panoramic electric bus fleet project for commercial transport.",
    },
    image: img("/products/Project Berhasil/Panoramic.png"),
  },
  // Proteksi — LFK
  {
    id: "lfk-af31-1kg",
    slug: "lfk-af31-1kg",
    categoryId: "proteksi",
    brand: "LFK HARTINDO",
    title: { id: "LFK AF31 Portable — 1 KG", en: "LFK AF31 Portable — 1 KG" },
    description: {
      id: "Pemadam api litium portabel 1 kg, ideal untuk kendaraan listrik pribadi dan area kompak di pangkalan armada.",
      en: "1 kg portable lithium fire extinguisher, ideal for personal EVs and compact areas in fleet pools.",
    },
    image: img("/products/Proteksi/LFK_1_KG_[Font].avif"),
    images: {
      front: img("/products/Proteksi/LFK_1_KG_[Font].avif"),
      back: img("/products/Proteksi/LFK_1_KG_[Back].avif"),
      left: img("/products/Proteksi/LFK_1_KG_[Left].avif"),
      right: img("/products/Proteksi/LFK_1_KG_[Right].avif"),
    },
  },
  {
    id: "lfk-af31-3kg",
    slug: "lfk-af31-3kg",
    categoryId: "proteksi",
    brand: "LFK HARTINDO",
    title: { id: "LFK AF31 Portable — 3 KG", en: "LFK AF31 Portable — 3 KG" },
    description: {
      id: "Pemadam api litium 3 kg untuk garasi kendaraan listrik, server room, dan ruang komersial di fasilitas bisnis.",
      en: "3 kg lithium fire extinguisher for EV garages, server rooms, and commercial spaces in business facilities.",
    },
    image: img("/products/Proteksi/LFK_3_KG_[Font].avif"),
    images: {
      front: img("/products/Proteksi/LFK_3_KG_[Font].avif"),
      back: img("/products/Proteksi/LFK_3_KG_[Back].avif"),
      left: img("/products/Proteksi/LFK_3_KG_[Left].avif"),
      right: img("/products/Proteksi/LFK_3_KG_[Right].avif"),
    },
  },
];

export function getLayananProductPath(
  product: Pick<LayananProduct, "slug" | "categoryId">,
): string {
  const serviceSlug = categoryToServiceSlug[product.categoryId];
  return `/layanan/${serviceSlug}/${product.slug}`;
}

export function getProductsForService(serviceSlug: string): LayananProduct[] {
  const resolved = resolveServiceSlug(serviceSlug);
  return layananProducts.filter(
    (p) => categoryToServiceSlug[p.categoryId] === resolved,
  );
}

export function getCategoriesForService(
  serviceSlug: string,
): LayananCategory[] {
  const resolved = resolveServiceSlug(serviceSlug);
  const categoryIds = Object.entries(categoryToServiceSlug)
    .filter(([, slug]) => slug === resolved)
    .map(([catId]) => catId);
  return layananCategories.filter((c) => categoryIds.includes(c.id));
}

export function getServiceSlugForProduct(
  product: Pick<LayananProduct, "categoryId">,
): string | undefined {
  return categoryToServiceSlug[product.categoryId];
}

export function getLayananProductBySlug(
  slug: string,
): LayananProduct | undefined {
  return layananProducts.find((p) => p.slug === slug);
}

export function getLayananCategoryById(
  id: string,
): LayananCategory | undefined {
  return layananCategories.find((c) => c.id === id);
}
