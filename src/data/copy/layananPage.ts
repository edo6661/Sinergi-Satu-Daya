export const layananPageCopy = {
  id: {
    badge: "Layanan SSD",
    title: "Solusi Kendaraan Listrik",
    titleHighlight: "Lengkap untuk Bisnis",
    viewDetails: "Lihat Detail",
    breadcrumbHome: "Beranda",
    breadcrumbLayanan: "Layanan",
    contactCta: "Konsultasi via WhatsApp",
    backToLayanan: "Kembali ke Layanan",
    allProducts: "Semua Kategori",
    productCatalog: "Katalog Kendaraan",
    productCatalogDesc:
      "Jelajahi berbagai pilihan kendaraan listrik yang tersedia untuk kebutuhan bisnis Anda.",
  },
  en: {
    badge: "SSD Services",
    title: "Electric Vehicle Solutions",
    titleHighlight: "Complete for Business",
    viewDetails: "View Details",
    breadcrumbHome: "Home",
    breadcrumbLayanan: "Services",
    contactCta: "Consult via WhatsApp",
    backToLayanan: "Back to Services",
    allProducts: "All Categories",
    productCatalog: "Vehicle Catalog",
    productCatalogDesc:
      "Explore the various electric vehicle options available for your business needs.",
  },
} as const;

export type LayananPageLanguage = keyof typeof layananPageCopy;
