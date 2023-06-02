import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { EN_main, AR_main, RU_main } from "./languages/Exports";
// import { EN_blog, AR_blog, RU_blog } from "./languages/Exports";
// import { EN_cv, AR_cv, RU_cv } from "./languages/Exports";

const resources = {
  en: {
    main: {
      EN_main
    },
  },
  ar: {
    main: {
      AR_main
    },
  },
  ru: {
    main: {
      RU_main
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "ar", "ru"],
    resources,
    lng: document.documentElement.lang,
    fallbackLng: "en",

    detection: {
      order: ["cookie", "localStorage"],
      caches: ["cookie"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
