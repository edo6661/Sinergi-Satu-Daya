export const faqCopy = {
  id: {
    tagline: "Pertanyaan Seputar Ekosistem SSD",
    heading: "Jawaban untuk Kebutuhan Operasional Anda",
    footerText: "Punya pertanyaan lebih spesifik untuk bisnis Anda?",
    cta: "Konsultasi dengan Expert",
    items: [
      {
        question:
          "Bagaimana skema pengisian daya (charging) untuk armada logistik kami?",
        answer:
          "Kami menyediakan instalasi charging station langsung di pool/gudang Anda, ditambah akses ke jaringan publik SSD. Kami juga membantu menyusun manajemen daya agar pengisian tidak mengganggu jam operasional dan kelistrikan fasilitas Anda.",
      },
      {
        question:
          "Apakah biaya perawatan rutin sudah termasuk dalam kontrak sewa?",
        answer:
          "Ya. Untuk paket Kontrak Korporat, seluruh biaya perawatan berkala, suku cadang (fast-moving), dan pemeliharaan baterai ditanggung 100% oleh SSD. Tidak ada biaya tersembunyi, sehingga pengeluaran Anda mudah diprediksi.",
      },
      {
        question:
          "Bagaimana jika unit mengalami kendala teknis atau mogok saat beroperasi?",
        answer:
          "Kami menyediakan layanan tanggap darurat 24/7. Jika unit membutuhkan perbaikan intensif, SSD akan mengirimkan unit pengganti sementara (backup unit) agar rantai pasok dan operasional bisnis Anda tidak terhenti.",
      },
      {
        question: "Apa fungsi Sistem Keselamatan LFK dalam ekosistem ini?",
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
        question: "How does the charging scheme work for our logistics fleet?",
        answer:
          "We provide charging station installations directly at your pool/warehouse, plus access to the SSD public network. We also help structure power management so charging doesn't disrupt operations or overload your facility's electricity.",
      },
      {
        question: "Is routine maintenance included in the leasing contract?",
        answer:
          "Yes. For the Corporate Contract plan, all periodic maintenance, fast-moving parts, and battery care are 100% covered by SSD. No hidden fees, making your expenses highly predictable.",
      },
      {
        question: "What happens if a unit breaks down during operation?",
        answer:
          "We provide a 24/7 emergency response service. If a unit requires intensive repair, SSD will dispatch a temporary replacement (backup unit) to ensure your logistics and business operations remain uninterrupted.",
      },
      {
        question:
          "What is the role of the LFK Safety System in this ecosystem?",
        answer:
          "LFK (Local Fire Extinguisher) is a specialized fire mitigation system for EV lithium batteries. We install it in your fleet pool and charging areas to meet the highest industrial Occupational Health and Safety (OHS) standards.",
      },
    ],
  },
} as const;

export type FaqLanguage = keyof typeof faqCopy;
