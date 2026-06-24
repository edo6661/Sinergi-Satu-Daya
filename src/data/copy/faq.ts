export const faqCopy = {
  id: {
    tagline: "Pertanyaan Seputar Ekosistem SSD",
    heading: "Jawaban untuk Kebutuhan Operasional Anda",
    footerText: "Punya pertanyaan lebih spesifik untuk bisnis Anda?",
    cta: "Konsultasi dengan Expert",
    items: [
      {
        question: "Apa fokus layanan konsultasi EV B2B dari SSD?",
        answer:
          "Konsultasi EV B2B untuk bisnis. Fokus utama layanan konsultasi untuk 6 bulan hingga 1 tahun ke depan.",
      },
      {
        question:
          "Bagaimana skema pengisian daya (charging) untuk armada Anda?",
        answer:
          "Kami menyediakan instalasi charging station langsung di pool/gudang Anda, ditambah akses ke jaringan publik SSD. Kami juga membantu menyusun manajemen daya agar pengisian tidak mengganggu jam operasional dan kelistrikan fasilitas Anda.",
      },
      {
        question:
          "Apakah biaya perawatan rutin sudah termasuk dalam kontrak rental B2B?",
        answer:
          "Ya. Untuk paket Rental B2B, seluruh biaya perawatan berkala, suku cadang (fast-moving), dan pemeliharaan baterai ditanggung 100% oleh SSD. Tidak ada biaya tersembunyi, sehingga pengeluaran Anda mudah diprediksi.",
      },
      {
        question:
          "Bagaimana jika unit mengalami kendala teknis atau mogok saat beroperasi?",
        answer:
          "Kami menyediakan layanan tanggap darurat 24/7. Jika unit membutuhkan perbaikan intensif, SSD akan mengirimkan unit pengganti sementara (backup unit) agar rantai pasok dan operasional bisnis Anda tidak terhenti.",
      },
      {
        question: "Apa fungsi sistem fire safety LFK dalam ekosistem ini?",
        answer:
          "LFK (Local Fire Extinguisher) adalah sistem mitigasi kebakaran khusus baterai lithium (EV). Kami menginstalasinya di area pool dan charging station Anda untuk memenuhi standar Keselamatan dan Kesehatan Kerja (K3) tertinggi industri.",
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
        question: "What is the focus of SSD's B2B EV consulting service?",
        answer:
          "B2B EV consulting for businesses. The primary consulting focus is for the next 6 months to 1 year.",
      },
      {
        question: "How does the charging scheme work for our fleet?",
        answer:
          "We provide charging station installations directly at your pool/warehouse, plus access to the SSD public network. We also help structure power management so charging doesn't disrupt operations or overload your facility's electricity.",
      },
      {
        question: "Is routine maintenance included in the B2B rental contract?",
        answer:
          "Yes. For the B2B Rental plan, all periodic maintenance, fast-moving parts, and battery care are 100% covered by SSD. No hidden fees, making your expenses highly predictable.",
      },
      {
        question: "What happens if a unit breaks down during operation?",
        answer:
          "We provide a 24/7 emergency response service. If a unit requires intensive repair, SSD will dispatch a temporary replacement (backup unit) to ensure your business operations remain uninterrupted.",
      },
      {
        question:
          "What is the role of the LFK fire safety system in this ecosystem?",
        answer:
          "LFK (Local Fire Extinguisher) is a specialized fire mitigation system for EV lithium batteries. We install it in your fleet pool and charging areas to meet the highest industrial Occupational Health and Safety (OHS) standards.",
      },
    ],
  },
} as const;

export type FaqLanguage = keyof typeof faqCopy;
