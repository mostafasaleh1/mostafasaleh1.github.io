import i18n from "../../i18n";
import { GB, SA, RU, DE } from '../../assets/Exports';

/* MAIN PAIGE */
/* MAIN PAIGE */

/* HOME SECTION */
export let mainActiveLang = () => {
    if (i18n.language === 'ar') {
        return "AR_main";
    }
    else if (i18n.language === "ru") {
        return "RU_main";
    }
    else if (i18n.language === "en") {
        return "EN_main";
    }
    else if (i18n.language === "de") {
        return "DE_main";
    }
}

export let blogActiveLang = () => {
    if (i18n.language === 'ar') {
        return "AR_blog";
    }
    else if (i18n.language === "ru") {
        return "RU_blog";
    }
    else if (i18n.language === "en") {
        return "EN_blog";
    }
    else if (i18n.language === "de") {
        return "DE_blog";
    }
}

export let activeFlag = () => {
    if (i18n.language === "ar") {
        return <SA />;
    } 
    else if (i18n.language === "en") {
        return <GB />;
    } 
    else if (i18n.language === "ru") {
        return <RU />;
    }
    else if (i18n.language === "de") {
        return <DE />;
    }
}