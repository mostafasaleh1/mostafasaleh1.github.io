import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { EN_main, AR_main, RU_main, DE_main } from "./languages/Exports";
import { EN_blog, AR_blog, RU_blog, DE_blog } from "./languages/Exports";
// import { EN_cv, AR_cv, RU_cv, DE_cv } from "./languages/Exports";

const resources = {
  en: {
    main: {
      EN_main
    },
    blog: {
      EN_blog
    },
  },
  ar: {
    main: {
      AR_main
    },
    blog: {
      AR_blog
    },
  },
  ru: {
    main: {
      RU_main
    },
    blog: {
      RU_blog
    },
  },
  de: {
    main: {
      DE_main
    },
    blog: {
      DE_blog
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "ar", "ru", "de"],
    resources,
    fallbackLng: "en",

    detection: {
      order: ["cookie", "htmlTag", "localStorage"],
      caches: ["cookie"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
