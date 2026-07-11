export interface ProjectSuccessItem {
  id: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  url: string;
  image: string;
}

export const projectSuccessCopy = {
  id: {
    tagline: "Bukti Eksekusi di Lapangan",
    heading: "Portofolio",
    description:
      "Bukti nyata keberhasilan SSD dalam menghadirkan solusi kendaraan listrik, pengadaan armada, dan layanan mobilitas yang efisien, aman, dan berkelanjutan untuk berbagai kebutuhan industri.",
    readMore: "Lihat Detail",
    cta: "Diskusikan Proyek Anda",
    projects: [
      {
        id: "ps1",
        categoryColor: "#00529C",
        title: "Pengadaan 100 Unit Kendaraan Listrik",
        excerpt:
          "Satu Daya (SSD) menghadirkan solusi implementasi armada kendaraan listrik bagi kebutuhan operasional perusahaan.",
        url: "https://otomotif.kompas.com/read/2024/07/24/180100715/jusuf-hamka-borong-100-unit-mobil-listrik-wuling-di-giias-2024",
        image: "/media-highlights/kompas.jpg",
      },
      {
        id: "ps2",
        categoryColor: "#E31E24",
        title: "Dukungan Mobilitas G20",
        excerpt:
          "Sinergi Satu Daya (SSD) mendukung penyediaan kendaraan listrik untuk mobilitas pada rangkaian kegiatan G20.",
        url: "https://www.suara.com/otomotif/2022/10/08/205527/wuling-air-ev-bertuliskan-g24-membawa-airlangga-hartarto-dan-puan-maharani-promosi-energi-hijau",
        image: "/media-highlights/suara.jpg",
      },
      {
        id: "ps3",
        categoryColor: "#DA2128",
        title: "Solusi Mobilitas Hijau",
        excerpt:
          "Sinergi Satu Daya (SSD) menyediakan solusi kendaraan listrik sebagai bagian dari transformasi menuju mobilitas berkelanjutan.",
        url: "https://www.tempo.co/arsip/sebanyak-37-mobil-listrik-wuling-air-ev-diberikan-ke-seluruh-ketua-dpd-golkar-269569",
        image: "/media-highlights/tempo.jpg",
      },
      {
        id: "ps4",
        categoryColor: "#21409A",
        title: "EV Patrol untuk Jalan Tol",
        excerpt:
          "Sinergi Satu Daya (SSD) mendukung implementasi kendaraan listrik sebagai armada patroli jalan tol.",
        url: "https://oto.detik.com/mobil/d-6362433/penampakan-wuling-air-ev-yang-diborong-jusuf-hamka-untuk-mobil-patroli-tol",
        image: "/media-highlights/detik.jpg",
      },
    ] satisfies ProjectSuccessItem[],
  },
  en: {
    tagline: "Proof of Execution in the Field",
    heading: "Portfolio",
    description:
      "Concrete proof of SSD's success in delivering electric vehicle solutions, fleet procurement, and mobility services that are efficient, safe, and sustainable for a wide range of industry needs.",
    readMore: "View Details",
    cta: "Discuss Your Project",
    projects: [
      {
        id: "ps1",
        categoryColor: "#00529C",
        title: "Procurement of 100 Electric Vehicles",
        excerpt:
          "Satu Daya (SSD) delivers electric vehicle fleet implementation solutions for corporate operational needs.",
        url: "https://otomotif.kompas.com/read/2024/07/24/180100715/jusuf-hamka-borong-100-unit-mobil-listrik-wuling-di-giias-2024",
        image: "/media-highlights/kompas.jpg",
      },
      {
        id: "ps2",
        categoryColor: "#E31E24",
        title: "G20 Mobility Support",
        excerpt:
          "Sinergi Satu Daya (SSD) supports the provision of electric vehicles for mobility throughout the G20 events.",
        url: "https://www.suara.com/otomotif/2022/10/08/205527/wuling-air-ev-bertuliskan-g24-membawa-airlangga-hartarto-dan-puan-maharani-promosi-energi-hijau",
        image: "/media-highlights/suara.jpg",
      },
      {
        id: "ps3",
        categoryColor: "#DA2128",
        title: "Green Mobility Solutions",
        excerpt:
          "Sinergi Satu Daya (SSD) provides electric vehicle solutions as part of the transition toward sustainable mobility.",
        url: "https://www.tempo.co/arsip/sebanyak-37-mobil-listrik-wuling-air-ev-diberikan-ke-seluruh-ketua-dpd-golkar-269569",
        image: "/media-highlights/tempo.jpg",
      },
      {
        id: "ps4",
        categoryColor: "#21409A",
        title: "EV Patrol for Toll Roads",
        excerpt:
          "Sinergi Satu Daya (SSD) supports the implementation of electric vehicles as a toll road patrol fleet.",
        url: "https://oto.detik.com/mobil/d-6362433/penampakan-wuling-air-ev-yang-diborong-jusuf-hamka-untuk-mobil-patroli-tol",
        image: "/media-highlights/detik.jpg",
      },
    ] satisfies ProjectSuccessItem[],
  },
} as const;

export type ProjectSuccessLanguage = keyof typeof projectSuccessCopy;
