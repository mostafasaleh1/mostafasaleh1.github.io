import React from 'react';
import { ArticleTitle, Date, P, Image, H1, H2, H3, H4, OrderedList, UnorderedList, UnorderedListExtraPadding, OrderedListExtraPadding } from "../../articleComponents/Exports";
import ArticlePage from '../../ArticlePage';
import i18n from "../../../../../../i18n";
import { useTranslation } from 'react-i18next';

const A1 = () => {

  const { t } = useTranslation("articles");

  const ID = "a2";

  const activeLang = () => {
    if (i18n.language === 'ar') {
      return `AR_${ID}`;
    }
    else if (i18n.language === "ru") {
      return `RU_${ID}`;
    }
    else if (i18n.language === "en") {
      return `EN_${ID}`;
    }
    else if (i18n.language === "de") {
      return `DE_${ID}`;
    }
  }

  return (
    <ArticlePage>
      <ArticleTitle>{t(`${activeLang()}.articleTitle`)}</ArticleTitle>
      <Date>-{t(`${activeLang()}.date`)}-</Date>
      <P>
        {t(`${activeLang()}.p1`)}
      </P>
    </ArticlePage>
  )
}

export default A1;