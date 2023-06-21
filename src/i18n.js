import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { EN_main, AR_main, RU_main, DE_main } from "./languages/Exports";
import { EN_blog, AR_blog, RU_blog, DE_blog } from "./languages/Exports";
import { EN_cv, AR_cv, RU_cv, DE_cv } from "./languages/Exports";
import { EN_projects, AR_projects, RU_projects, DE_projects } from "./languages/Exports";

const resources = {
  en: {
    main: {
      EN_main
    },
    blog: {
      EN_blog
    },
    projects: {
      EN_projects
    },
    cv: {
      EN_cv
    },
  },
  ar: {
    main: {
      AR_main
    },
    blog: {
      AR_blog
    },
    projects: {
      AR_projects
    },
    cv: {
      AR_cv
    },
  },
  ru: {
    main: {
      RU_main
    },
    blog: {
      RU_blog
    },
    projects: {
      RU_projects
    },
    cv: {
      RU_cv
    },
  },
  de: {
    main: {
      DE_main
    },
    blog: {
      DE_blog
    },
    projects: {
      DE_projects
    },
    cv: {
      DE_cv
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
