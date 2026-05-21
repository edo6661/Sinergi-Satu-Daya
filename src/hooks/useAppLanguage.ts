import { useTranslation } from "react-i18next";

export type AppLanguage = "id" | "en";

export const useAppLanguage = () => {
  const { i18n } = useTranslation();

  const lang = (i18n.language === "en" ? "en" : "id") as AppLanguage;

  return { lang, i18n };
};
