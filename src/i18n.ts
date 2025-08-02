import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ur from "./locales/ur.json";

i18n
  .use(LanguageDetector) // Detect language from browser
  .use(initReactI18next) // Connect with React
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    resources: {
      en: { translation: en },
      ur: { translation: ur },
    },
  });

export default i18n;
