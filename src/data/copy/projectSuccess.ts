export interface ProjectSuccessItem {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  url: string;
  image: string;
}

export const projectSuccessCopy = {
  id: {
    tagline: "Bukti Eksekusi di Lapangan",
    heading: "Project Success",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ringkasan portofolio proyek SSD Mobility yang telah berhasil dijalankan bersama mitra strategis.",
    readMore: "Lihat Detail",
    cta: "Diskusikan Proyek Anda",
    projects: [
      {
        id: "ps1",
        category: "Armada EV",
        categoryColor: "#00529C",
        title: "Lorem ipsum dolor sit amet consectetur",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "https://otomotif.kompas.com/read/2024/07/24/180100715/jusuf-hamka-borong-100-unit-mobil-listrik-wuling-di-giias-2024",
        image: "/media-highlights/kompas.jpg",
      },
      {
        id: "ps2",
        category: "Sektor Publik",
        categoryColor: "#E31E24",
        title: "Ut enim ad minim veniam quis nostrud",
        excerpt:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://www.suara.com/otomotif/2022/10/08/205527/wuling-air-ev-bertuliskan-g24-membawa-airlangga-hartarto-dan-puan-maharani-promosi-energi-hijau",
        image: "/media-highlights/suara.jpg",
      },
      {
        id: "ps3",
        category: "Energi Hijau",
        categoryColor: "#DA2128",
        title: "Duis aute irure dolor in reprehenderit",
        excerpt:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        url: "https://www.tempo.co/arsip/sebanyak-37-mobil-listrik-wuling-air-ev-diberikan-ke-seluruh-ketua-dpd-golkar-269569",
        image: "/media-highlights/tempo.jpg",
      },
      {
        id: "ps4",
        category: "Infrastruktur Tol",
        categoryColor: "#21409A",
        title: "Excepteur sint occaecat cupidatat non",
        excerpt:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: "https://oto.detik.com/mobil/d-6362433/penampakan-wuling-air-ev-yang-diborong-jusuf-hamka-untuk-mobil-patroli-tol",
        image: "/media-highlights/detik.jpg",
      },
    ] satisfies ProjectSuccessItem[],
  },
  en: {
    tagline: "Proven Track Record",
    heading: "Project Success",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A snapshot of SSD Mobility project portfolios successfully delivered with strategic partners.",
    readMore: "View Details",
    cta: "Discuss Your Project",
    projects: [
      {
        id: "ps1",
        category: "EV Fleet",
        categoryColor: "#00529C",
        title: "Lorem ipsum dolor sit amet consectetur",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "https://otomotif.kompas.com/read/2024/07/24/180100715/jusuf-hamka-borong-100-unit-mobil-listrik-wuling-di-giias-2024",
        image: "/media-highlights/kompas.jpg",
      },
      {
        id: "ps2",
        category: "Public Sector",
        categoryColor: "#E31E24",
        title: "Ut enim ad minim veniam quis nostrud",
        excerpt:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://www.suara.com/otomotif/2022/10/08/205527/wuling-air-ev-bertuliskan-g24-membawa-airlangga-hartarto-dan-puan-maharani-promosi-energi-hijau",
        image: "/media-highlights/suara.jpg",
      },
      {
        id: "ps3",
        category: "Green Energy",
        categoryColor: "#DA2128",
        title: "Duis aute irure dolor in reprehenderit",
        excerpt:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        url: "https://www.tempo.co/arsip/sebanyak-37-mobil-listrik-wuling-air-ev-diberikan-ke-seluruh-ketua-dpd-golkar-269569",
        image: "/media-highlights/tempo.jpg",
      },
      {
        id: "ps4",
        category: "Toll Infrastructure",
        categoryColor: "#21409A",
        title: "Excepteur sint occaecat cupidatat non",
        excerpt:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: "https://oto.detik.com/mobil/d-6362433/penampakan-wuling-air-ev-yang-diborong-jusuf-hamka-untuk-mobil-patroli-tol",
        image: "/media-highlights/detik.jpg",
      },
    ] satisfies ProjectSuccessItem[],
  },
} as const;

export type ProjectSuccessLanguage = keyof typeof projectSuccessCopy;
