import { services } from "../catalog/services";

export const benefitsCopy = {
  id: {
    tagline: "Nilai Lebih untuk Bisnis Anda",
    heading: "Layanan SSD untuk Ekosistem Bisnis Anda",
    cta: "Jadwalkan Konsultasi Bisnis",
    items: services.map((s) => ({
      slug: s.slug,
      title: s.title.id,
      description: s.description.id,
      icon: s.icon,
    })),
  },
  en: {
    tagline: "Added Value for Your Business",
    heading: "SSD Services for Your Business Ecosystem",
    cta: "Schedule a Business Consultation",
    items: services.map((s) => ({
      slug: s.slug,
      title: s.title.en,
      description: s.description.en,
      icon: s.icon,
    })),
  },
} as const;

export type BenefitsLanguage = keyof typeof benefitsCopy;
