export interface MediaHighlightArticle {
  id: string;
  source: string;
  sourceColor: string;
  headline: string;
  excerpt: string;
  url: string;
  image: string;
}

export const mediaHighlightsCopy = {
  id: {
    tagline: "Liputan Media Nasional",
    heading: "Media Highlights",
    description:
      "Sinergi Satu Daya dan ekosistem kendaraan listrik Wuling mendapat perhatian media terkemuka Indonesia — dari pemesanan massal hingga deployment operasional di sektor transportasi dan pemerintahan.",
    readMore: "Baca Artikel",
    cta: "Diskusikan Kebutuhan Armada Anda",
    articles: [
      {
        id: "mh1",
        source: "Kompas.com",
        sourceColor: "#00529C",
        headline:
          "Jusuf Hamka Borong 100 Unit Mobil Listrik Wuling di GIIAS 2024",
        excerpt:
          "Pengusaha jalan tol Jusuf Hamka memesan 100 unit mobil listrik Wuling — 50 Bingou EV dan 50 Cloud EV — senilai sekitar Rp 30 miliar untuk operasional Citra Marga, disaksikan langsung oleh Menko Perekonomian Airlangga Hartarto.",
        url: "https://otomotif.kompas.com/read/2024/07/24/180100715/jusuf-hamka-borong-100-unit-mobil-listrik-wuling-di-giias-2024",
        image: "/media-highlights/kompas.jpg",
      },
      {
        id: "mh2",
        source: "Suara.com",
        sourceColor: "#E31E24",
        headline:
          'Wuling Air ev Bertuliskan "G24" Membawa Airlangga Hartarto dan Puan Maharani Promosi Energi Hijau',
        excerpt:
          "Ketua Umum Golkar Airlangga Hartarto dan Ketua DPR Puan Maharani berkendara Wuling Air ev mengitari Monas sebagai bagian dari promosi green energy menjelang KTT G20, menyerahkan kunci mobil listrik sebagai simbol komitmen energi hijau.",
        url: "https://www.suara.com/otomotif/2022/10/08/205527/wuling-air-ev-bertuliskan-g24-membawa-airlangga-hartarto-dan-puan-maharani-promosi-energi-hijau",
        image: "/media-highlights/suara.jpg",
      },
      {
        id: "mh3",
        source: "Tempo",
        sourceColor: "#DA2128",
        headline:
          "Sebanyak 37 Mobil Listrik Wuling Air ev Diberikan ke Seluruh Ketua DPD Golkar",
        excerpt:
          "Partai Golkar menyerahkan 37 unit Wuling Air ev kepada seluruh Ketua DPD Golkar di Indonesia sebagai bagian dari komitmen mendukung transisi energi hijau dan elektrifikasi kendaraan operasional partai.",
        url: "https://www.tempo.co/arsip/sebanyak-37-mobil-listrik-wuling-air-ev-diberikan-ke-seluruh-ketua-dpd-golkar-269569",
        image: "/media-highlights/tempo.jpg",
      },
      {
        id: "mh4",
        source: "Detik.com",
        sourceColor: "#21409A",
        headline:
          "Penampakan Wuling Air Ev yang Diborong Jusuf Hamka untuk Mobil Patroli Tol",
        excerpt:
          "Jusuf Hamka memborong Wuling Air ev untuk dijadikan mobil patroli jalan tol dengan livery 'Sinergi Satu Daya' dan logo CMNP. Rencananya, masing-masing ruas jalan tol akan mendapatkan tiga unit mobil listrik patroli.",
        url: "https://oto.detik.com/mobil/d-6362433/penampakan-wuling-air-ev-yang-diborong-jusuf-hamka-untuk-mobil-patroli-tol",
        image: "/media-highlights/detik.jpg",
      },
    ] satisfies MediaHighlightArticle[],
  },
  en: {
    tagline: "National Media Coverage",
    heading: "Media Highlights",
    description:
      "Sinergi Satu Daya and the Wuling electric vehicle ecosystem have been featured across Indonesia's leading media — from bulk fleet orders to operational deployments in transportation and government sectors.",
    readMore: "Read Article",
    cta: "Discuss Your Fleet Requirements",
    articles: [
      {
        id: "mh1",
        source: "Kompas.com",
        sourceColor: "#00529C",
        headline:
          "Jusuf Hamka Orders 100 Wuling Electric Vehicles at GIIAS 2024",
        excerpt:
          "Toll road entrepreneur Jusuf Hamka ordered 100 Wuling EVs — 50 Bingou EV and 50 Cloud EV — worth around IDR 30 billion for Citra Marga operations, witnessed by Coordinating Minister for Economic Affairs Airlangga Hartarto.",
        url: "https://otomotif.kompas.com/read/2024/07/24/180100715/jusuf-hamka-borong-100-unit-mobil-listrik-wuling-di-giias-2024",
        image: "/media-highlights/kompas.jpg",
      },
      {
        id: "mh2",
        source: "Suara.com",
        sourceColor: "#E31E24",
        headline:
          'Wuling Air ev Labeled "G24" Carries Airlangga Hartarto and Puan Maharani to Promote Green Energy',
        excerpt:
          "Golkar Chairman Airlangga Hartarto and House Speaker Puan Maharani drove a Wuling Air ev around Monas to promote green energy ahead of the G20 Summit, handing over the EV keys as a symbol of clean energy commitment.",
        url: "https://www.suara.com/otomotif/2022/10/08/205527/wuling-air-ev-bertuliskan-g24-membawa-airlangga-hartarto-dan-puan-maharani-promosi-energi-hijau",
        image: "/media-highlights/suara.jpg",
      },
      {
        id: "mh3",
        source: "Tempo",
        sourceColor: "#DA2128",
        headline:
          "37 Wuling Air ev Electric Cars Distributed to All Golkar Regional Chairpersons",
        excerpt:
          "Golkar Party handed over 37 Wuling Air ev units to all regional chairpersons across Indonesia as part of its commitment to supporting green energy transition and electrifying party operational vehicles.",
        url: "https://www.tempo.co/arsip/sebanyak-37-mobil-listrik-wuling-air-ev-diberikan-ke-seluruh-ketua-dpd-golkar-269569",
        image: "/media-highlights/tempo.jpg",
      },
      {
        id: "mh4",
        source: "Detik.com",
        sourceColor: "#21409A",
        headline:
          "First Look at Wuling Air Ev Bulk-Ordered by Jusuf Hamka for Toll Road Patrol Cars",
        excerpt:
          "Jusuf Hamka bulk-ordered Wuling Air ev units as toll road patrol vehicles with 'Sinergi Satu Daya' livery and CMNP branding. Each toll road segment is planned to receive three electric patrol units.",
        url: "https://oto.detik.com/mobil/d-6362433/penampakan-wuling-air-ev-yang-diborong-jusuf-hamka-untuk-mobil-patroli-tol",
        image: "/media-highlights/detik.jpg",
      },
    ] satisfies MediaHighlightArticle[],
  },
} as const;

export type MediaHighlightsLanguage = keyof typeof mediaHighlightsCopy;
