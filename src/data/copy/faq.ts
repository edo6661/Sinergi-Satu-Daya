export const faqCopy = {
  id: {
    tagline: "Pertanyaan Seputar Ekosistem SSD",
    heading: "Jawaban untuk Kebutuhan Operasional Anda",
    footerText: "Punya pertanyaan lebih spesifik untuk bisnis Anda?",
    cta: "Konsultasi dengan Pakar",
    items: [
      {
        question: "Apa fokus layanan konsultasi kendaraan listrik B2B dari SSD?",
        answer:
          "Layanan konsultasi kendaraan listrik B2B kami dirancang khusus untuk bisnis. Fokus utama layanan ini berada pada proyeksi 6 hingga 12 bulan ke depan.",
      },
      {
        question:
          "Bagaimana skema pengisian daya untuk armada kami?",
        answer:
          "Kami menyediakan instalasi stasiun pengisian daya langsung di pangkalan armada atau gudang Anda, ditambah akses ke jaringan publik SSD. Kami juga membantu menyusun manajemen daya agar proses pengisian tidak mengganggu jam operasional maupun kapasitas kelistrikan fasilitas Anda.",
      },
      {
        question:
          "Apakah biaya perawatan rutin sudah termasuk dalam kontrak penyewaan B2B?",
        answer:
          "Ya. Untuk paket Penyewaan B2B, seluruh biaya perawatan berkala, penggantian suku cadang (fast-moving), dan pemeliharaan baterai ditanggung 100% oleh SSD. Tidak ada biaya tersembunyi, sehingga pengeluaran Anda lebih mudah diprediksi.",
      },
      {
        question:
          "Bagaimana jika unit mengalami kendala teknis atau mogok saat beroperasi?",
        answer:
          "Kami menyediakan layanan tanggap darurat 24/7. Jika unit membutuhkan perbaikan intensif, SSD akan mengirimkan unit pengganti sementara agar rantai pasok dan operasional bisnis Anda tidak terhenti.",
      },
      {
        question: "Apa fungsi sistem proteksi kebakaran dalam ekosistem ini?",
        answer:
          "LFK (Local Fire Extinguisher) adalah sistem mitigasi kebakaran yang dirancang khusus untuk baterai litium (kendaraan listrik). Kami menginstalasinya di area pangkalan armada dan stasiun pengisian daya Anda untuk memenuhi standar Keselamatan dan Kesehatan Kerja (K3) tertinggi di industri.",
      },
    ],
  },
  en: {
    tagline: "About the SSD Ecosystem",
    heading: "Answers for Your Operational Needs",
    footerText: "Have a more specific question for your business?",
    cta: "Consult with an Expert",
    items: [
      {
        question: "What is the focus of SSD's B2B EV consulting services?",
        answer:
          "We provide B2B EV consulting services tailored for businesses. Our primary focus targets fleet transformations for the next 6 to 12 months.",
      },
      {
        question: "How does the charging scheme work for our fleet?",
        answer:
          "We provide charging station installations directly at your fleet pool or warehouse, along with access to the SSD public network. We also help structure power management so charging does not disrupt operations or overload your facility's electrical capacity.",
      },
      {
        question: "Is routine maintenance included in the B2B rental contract?",
        answer:
          "Yes. For the B2B Rental plan, all periodic maintenance, fast-moving parts replacement, and battery care are 100% covered by SSD. There are no hidden fees, making your operational expenses highly predictable.",
      },
      {
        question: "What happens if a vehicle breaks down during operation?",
        answer:
          "We provide a 24/7 emergency response service. If a vehicle requires intensive repairs, SSD will dispatch a temporary replacement unit to ensure your supply chain and business operations remain uninterrupted.",
      },
      {
        question:
          "What is the role of the fire safety system in this ecosystem?",
        answer:
          "LFK (Local Fire Extinguisher) is a specialized fire mitigation system for EV lithium batteries. We install it in your fleet pools and charging areas to comply with the highest industrial Occupational Health and Safety (OHS) standards.",
      },
    ],
  },
} as const;

export type FaqLanguage = keyof typeof faqCopy;