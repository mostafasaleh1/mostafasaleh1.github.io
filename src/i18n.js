import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { EN_main, AR_main, RU_main, DE_main } from "./languages/Exports";
import { EN_blog, AR_blog, RU_blog, DE_blog } from "./languages/Exports";
import { EN_cv, AR_cv, RU_cv, DE_cv } from "./languages/Exports";
import { EN_projects, AR_projects, RU_projects, DE_projects } from "./languages/Exports";
import { EN_stats, AR_stats, RU_stats, DE_stats } from "./languages/Exports";

import { EN_a1, RU_a1, DE_a1, AR_a1 } from "./pages/blog/main/articlepage/ArticleLocale";
import { EN_a2, RU_a2, DE_a2, AR_a2 } from "./pages/blog/main/articlepage/ArticleLocale";

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
    stats: {
      EN_stats
    },
    articles: {
      EN_a1,
      EN_a2,
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
    stats: {
      AR_stats
    },
    articles: {
      AR_a1,
      AR_a2,
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
    stats: {
      RU_stats
    },
    articles: {
      RU_a1,
      RU_a2,
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
    stats: {
      DE_stats
    },
    articles: {
      DE_a1,
      DE_a2,
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
