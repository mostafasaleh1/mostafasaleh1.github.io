import i18n from "../../i18n"

export const RTL = () => {
    if (i18n.language === "ar") {
        return "rtl";
    }
    else {
        return "";
    }
}

export const onlyText_RTL = () => {
    if (i18n.language === "ar") {
        return "onlytext-rtl";
    }
    else {
        return "";
    }
}