export const testimonialCopy = {
  id: {
    tagline: "Kisah Sukses Mitra Kami",
    heading: "Dipercaya oleh Pemimpin Industri Logistik",
    cta: "Jadilah Bagian dari Ekosistem Kami",
    reviews: [
      {
        id: "t1",
        quote:
          "Transisi ke EV awalnya menakutkan bagi operasional logistik kami. Namun, ekosistem end-to-end SSD, terutama jaminan backup unit dan instalasi charging, membuat semuanya mulus. Biaya operasional armada kami turun drastis.",
        author: "Budi Santoso",
        role: "Direktur Operasional",
        company: "PT Logistik Nusantara",
      },
      {
        id: "t2",
        quote:
          "Sistem mitigasi kebakaran LFK dari SSD memberi kami ketenangan pikiran. Sebagai perusahaan multinasional, standar K3 adalah harga mati. SSD memenuhi kualifikasi ketat kami dengan sempurna.",
        author: "Sarah Wijaya",
        role: "Head of Fleet Management",
        company: "JX Express",
      },
      {
        id: "t3",
        quote:
          "Dukungan teknis 24/7 bukan sekadar janji. Saat salah satu van niaga kami mengalami kendala di luar jam kerja, tim SSD sangat responsif. Ini adalah standar layanan B2B sejati yang kami cari.",
        author: "Andi Rahman",
        role: "CEO",
        company: "FreshDeliver Jabodetabek",
      },
    ],
  },
  en: {
    tagline: "Our Partners' Success Stories",
    heading: "Trusted by Logistics Industry Leaders",
    cta: "Become Our Next Success Story",
    reviews: [
      {
        id: "t1",
        quote:
          "Transitioning to EVs was initially daunting for our logistics operations. However, SSD's end-to-end ecosystem, especially the backup unit guarantee and charging installation, made it seamless. Our fleet's operational costs have dropped drastically.",
        author: "Budi Santoso",
        role: "Chief Operating Officer",
        company: "PT Logistik Nusantara",
      },
      {
        id: "t2",
        quote:
          "The LFK fire mitigation system from SSD gives us true peace of mind. As a multinational company, OHS standards are non-negotiable. SSD met our strict qualifications perfectly.",
        author: "Sarah Wijaya",
        role: "Head of Fleet Management",
        company: "JX Express",
      },
      {
        id: "t3",
        quote:
          "24/7 technical support is not just an empty promise. When one of our commercial vans had an issue after hours, the SSD team was highly responsive. This is the true B2B service standard we were looking for.",
        author: "Andi Rahman",
        role: "CEO",
        company: "FreshDeliver Jabodetabek",
      },
    ],
  },
} as const;

export type TestimonialLanguage = keyof typeof testimonialCopy;
