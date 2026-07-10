export const HOME_SECTIONS = {
  home: "home-section",
  layanan: "layanan-section",
  contact: "contact-section",
} as const;

export type HomeSectionId = (typeof HOME_SECTIONS)[keyof typeof HOME_SECTIONS];

export function scrollToSectionId(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

export function scrollToSectionWithRetry(
  sectionId: string,
  onComplete?: () => void,
  maxAttempts = 30,
) {
  let attempts = 0;

  const tryScroll = () => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      onComplete?.();
      return;
    }

    if (++attempts < maxAttempts) {
      requestAnimationFrame(tryScroll);
    }
  };

  tryScroll();
}
