import React from 'react';
import { ArticleTitle, Date, P, Image, H1, H2, H3, H4, OrderedList, UnorderedList, UnorderedListExtraPadding, OrderedListExtraPadding } from "../../articleComponents/Exports";
import ArticlePage from '../../ArticlePage';
import i18n from "../../../../../../i18n";
import { useTranslation } from 'react-i18next';
import i1 from "./images/1.webp";
import i2 from "./images/2.jpg";
import i3 from "./images/2-1.jpg";
import i4 from "./images/3.jpg";
import i5 from "./images/4.jpg";
import i6 from "./images/5.jpg";
import i7 from "./images/6.jpg";
import i8 from "./images/7.jpg";
import i9 from "./images/8.jpg";
import i10 from "./images/9.jpg";
import i11 from "./images/10.jpg";
import i12 from "./images/11.jpg";
import i13 from "./images/12.jpg";
import i14 from "./images/13.jpg";
import i15 from "./images/14.jpg";
import i16 from "./images/15.jpg";
import i17 from "./images/16.jpg";
import i18 from "./images/17.jpg";
import i19 from "./images/18.jpg";
import i20 from "./images/19.jpg";
import i21 from "./images/20.jpg";
import i22 from "./images/21.jpg";
import i23 from "./images/22.jpg";
import i24 from "./images/23.jpg";
import i25 from "./images/24.jpg";
import i26 from "./images/25.jpg";
import i27 from "./images/26.jpg";
import i28 from "./images/27.jpg";
import i29 from "./images/28.jpg";
import i30 from "./images/29.jpg";
import i31 from "./images/30.jpg";
import i32 from "./images/31.jpg";
import i33 from "./images/32.jpg";

const A1 = () => {

    const { t } = useTranslation("articles");

    const ID = "a1";

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
            <P>
                {t(`${activeLang()}.p2`)}
            </P>
            <P>
                {t(`${activeLang()}.p3`)}
            </P>
            <P>
                {t(`${activeLang()}.p4`)}
            </P>
            <P>
                {t(`${activeLang()}.p5`)}
            </P>
            <Image src={i1} alt={t(`${activeLang()}.i1.alt`)} description={t(`${activeLang()}.i1.description`)} />
            <P>
                {t(`${activeLang()}.p6`)}
            </P>
            <P>
                {t(`${activeLang()}.p7`)}
            </P>
            <P>
                {t(`${activeLang()}.p8`)}
            </P>
            <Image src={i2} alt={t(`${activeLang()}.i2.alt`)} description={t(`${activeLang()}.i2.description`)} />
            <H3>{t(`${activeLang()}.h3_1`)}</H3>
            <OrderedList>
                {t(`${activeLang()}.ol1`)}
            </OrderedList>
            <H3>{t(`${activeLang()}.h3_2`)}</H3>
            <OrderedList>
                {t(`${activeLang()}.ol2`)}
            </OrderedList>
            <H2>{t(`${activeLang()}.h2_1`)}</H2>
            <P>
                {t(`${activeLang()}.p9`)}
            </P>
            <H2>{t(`${activeLang()}.h2_2`)}</H2>
            <P>
                {t(`${activeLang()}.p10`)}
            </P>
            <Image src={i3} alt={t(`${activeLang()}.i3.alt`)} size="50%" description={t(`${activeLang()}.i3.description`)} />
            <H2>{t(`${activeLang()}.h2_3`)}</H2>
            <P>
                {t(`${activeLang()}.p11`)}
            </P>
            <H2>{t(`${activeLang()}.h2_4`)}</H2>
            <P>
                {t(`${activeLang()}.p12`)}
            </P>
            <Image src={i4} alt={t(`${activeLang()}.i4.alt`)} size="50%" description={t(`${activeLang()}.i4.description`)} />
            <P>
                {t(`${activeLang()}.p13`)}
            </P>
            <P>
                {t(`${activeLang()}.p14`)}
            </P>
            <P>
                {t(`${activeLang()}.p15`)}
            </P>
            <Image src={i5} alt={t(`${activeLang()}.i5.alt`)} size="50%" description={t(`${activeLang()}.i5.description`)} />
            <P>
                {t(`${activeLang()}.p16`)}
            </P>
            <P>
                {t(`${activeLang()}.p17`)}
            </P>
            <P textCenter={true}>
                {t(`${activeLang()}.p18`)}
            </P>
            <P>
                {t(`${activeLang()}.p19`)}
            </P>
            <P>
                {t(`${activeLang()}.p20`)}
            </P>
            <Image src={i6} alt={t(`${activeLang()}.i6.alt`)} size="50%" description={t(`${activeLang()}.i6.description`)} />
            <H2>{t(`${activeLang()}.h2_5`)}</H2>
            <P>
                {t(`${activeLang()}.p21`)}
            </P>
            <P>
                {t(`${activeLang()}.p22`)}
            </P>
            <OrderedList>
                {t(`${activeLang()}.ol3`)}
            </OrderedList>
            <UnorderedList>
                {t(`${activeLang()}.ul_1`)}
            </UnorderedList>
            <Image src={i7} alt={t(`${activeLang()}.i7.alt`)} size="50%" description={t(`${activeLang()}.i7.description`)} />
            <P>
                {t(`${activeLang()}.p23`)}
            </P>
            <Image src={i8} alt={t(`${activeLang()}.i8.alt`)} size="50%" description={t(`${activeLang()}.i8.description`)} />
            <H3>{t(`${activeLang()}.h3_3`)}</H3>
            <P>
                {t(`${activeLang()}.p24`)}
            </P>
            <P textCenter={true}>
                {t(`${activeLang()}.p25`)}
            </P>
            <P>
                {t(`${activeLang()}.p26`)}
            </P>
            <P>
                {t(`${activeLang()}.p27`)}
            </P>
            <H2>{t(`${activeLang()}.h2_6`)}</H2>
            <H3>{t(`${activeLang()}.h3_4`)}</H3>
            <P>
                {t(`${activeLang()}.p28`)}
            </P>
            <OrderedList>
                {t(`${activeLang()}.ol4`)}
            </OrderedList>
            <H3>{t(`${activeLang()}.h3_5`)}</H3>
            <P>
                {t(`${activeLang()}.p29`)}
            </P>
            <OrderedList>
                {t(`${activeLang()}.ol5`)}
            </OrderedList>
            <H2>{t(`${activeLang()}.h2_7`)}</H2>
            <P>
                {t(`${activeLang()}.p30`)}
            </P>
            <H3>{t(`${activeLang()}.h3_6`)}</H3>
            <P>
                {t(`${activeLang()}.p31`)}
            </P>
            <Image src={i9} alt={t(`${activeLang()}.i9.alt`)} size="50%" description={t(`${activeLang()}.i9.description`)} />
            <H3>{t(`${activeLang()}.h3_7`)}</H3>
            <P>
                {t(`${activeLang()}.p32`)}
            </P>
            <Image src={i10} alt={t(`${activeLang()}.i10.alt`)} size="50%" description={t(`${activeLang()}.i10.description`)} />
            <H3>{t(`${activeLang()}.h3_8`)}</H3>
            <UnorderedList>
                {t(`${activeLang()}.ul_2`)}
            </UnorderedList>
            <Image src={i11} alt={t(`${activeLang()}.i11.alt`)} size="50%" description={t(`${activeLang()}.i11.description`)} />
            <UnorderedList>
                {t(`${activeLang()}.ul_3`)}
            </UnorderedList>
            <Image src={i12} alt={t(`${activeLang()}.i12.alt`)} size="50%" description={t(`${activeLang()}.i12.description`)} />
            <H2>{t(`${activeLang()}.h2_8`)}</H2>
            <P>
                {t(`${activeLang()}.p33`)}
            </P>
            <P>
                {t(`${activeLang()}.p34`)}
            </P>
            <P>
                {t(`${activeLang()}.p35`)}
            </P>
            <OrderedList>
                {t(`${activeLang()}.ol6`)}
            </OrderedList>
             <UnorderedListExtraPadding>
             {t(`${activeLang()}.ulx_1`)}
            </UnorderedListExtraPadding>
            <P>
                {t(`${activeLang()}.p36`)}
            </P>
            <H2>{t(`${activeLang()}.h2_9`)}</H2>
            <P>
                {t(`${activeLang()}.p37`)}
            </P>
            <Image src={i13} alt={t(`${activeLang()}.i13.alt`)} size="50%" description={t(`${activeLang()}.i13.description`)} />
            <H2>{t(`${activeLang()}.h2_10`)}</H2>
            <P>
                {t(`${activeLang()}.p38`)}
            </P>
            <Image src={i14} alt={t(`${activeLang()}.i14.alt`)} size="50%" description={t(`${activeLang()}.i14.description`)} />
            <P>
                {t(`${activeLang()}.p39`)}
            </P>
            <P>
                {t(`${activeLang()}.p40`)}
            </P>
            <Image src={i15} alt={t(`${activeLang()}.i15.alt`)} size="50%" description={t(`${activeLang()}.i15.description`)} />
            <H2>{t(`${activeLang()}.h2_11`)}</H2>
            <P>
                {t(`${activeLang()}.p41`)}
            </P>
            <H3>{t(`${activeLang()}.h3_9`)}</H3>
            <P>
                {t(`${activeLang()}.p42`)}
            </P>
            <Image src={i16} alt={t(`${activeLang()}.i16.alt`)} size="50%" description={t(`${activeLang()}.i16.description`)} />
            <H3>{t(`${activeLang()}.h3_10`)}</H3>
            <P>
                {t(`${activeLang()}.p43`)}
            </P>
            <Image src={i17} alt={t(`${activeLang()}.i17.alt`)} size="50%" description={t(`${activeLang()}.i17.description`)} />
            <P>
                {t(`${activeLang()}.p44`)}
            </P>
            <Image src={i18} alt={t(`${activeLang()}.i18.alt`)} size="50%" description={t(`${activeLang()}.i18.description`)} />
            <P>
                {t(`${activeLang()}.p45`)}
            </P>
            <H2>{t(`${activeLang()}.h2_12`)}</H2>
            <P>
                {t(`${activeLang()}.p46`)}
            </P>
            <P underline={true}>
                {t(`${activeLang()}.p47`)}
            </P>
            <H3>{t(`${activeLang()}.h3_11`)}</H3>
            <P>
                {t(`${activeLang()}.p48`)}
            </P>
            <Image src={i19} alt={t(`${activeLang()}.i19.alt`)} size="50%" description={t(`${activeLang()}.i19.description`)} />
            <P>
                {t(`${activeLang()}.p49`)}
            </P>
            <P>
                {t(`${activeLang()}.p50`)}
            </P>
            <H3>{t(`${activeLang()}.h3_12`)}</H3>
            <P>
                {t(`${activeLang()}.p51`)}
            </P>
            <Image src={i20} alt={t(`${activeLang()}.i20.alt`)} size="50%" description={t(`${activeLang()}.i20.description`)} />
            <P>
                {t(`${activeLang()}.p52`)}
            </P>
            <Image src={i21} alt={t(`${activeLang()}.i21.alt`)} size="50%" description={t(`${activeLang()}.i21.description`)} />
            <H2>{t(`${activeLang()}.h2_13`)}</H2>
            <P>
                {t(`${activeLang()}.p53`)}
            </P>
            <H3>{t(`${activeLang()}.h3_13`)}</H3>
            <P>
                {t(`${activeLang()}.p54`)}
            </P>
            <P>
                {t(`${activeLang()}.p55`)}
            </P>
             <UnorderedListExtraPadding>
             {t(`${activeLang()}.ulx_2`)}
            </UnorderedListExtraPadding>
            <P>
                {t(`${activeLang()}.p56`)}
            </P>
            <H3>{t(`${activeLang()}.h3_14`)}</H3>
            <UnorderedList listStyleHidden={true}>
                {t(`${activeLang()}.ul_4`)}
            </UnorderedList>
            <H3>{t(`${activeLang()}.h3_15`)}</H3>
            <UnorderedList listStyleHidden={true}>
                {t(`${activeLang()}.ul_5`)}
            </UnorderedList>
            <H3>{t(`${activeLang()}.h3_16`)}</H3>
            <UnorderedList listStyleHidden={true}>
                {t(`${activeLang()}.ul_6`)}
            </UnorderedList>
            <Image src={i22} alt={t(`${activeLang()}.i22.alt`)} size="50%" description={t(`${activeLang()}.i22.description`)} />
            <H2>{t(`${activeLang()}.h2_14`)}</H2>
            <H3>{t(`${activeLang()}.h3_17`)}</H3>
            <P>
                {t(`${activeLang()}.p57`)}
            </P>
            <Image src={i23} alt={t(`${activeLang()}.i23.alt`)} size="50%" description={t(`${activeLang()}.i23.description`)} />
            <Image src={i24} alt={t(`${activeLang()}.i24.alt`)} size="50%" description={t(`${activeLang()}.i24.description`)} />
            <H3>{t(`${activeLang()}.h3_18`)}</H3>
            <P>
                {t(`${activeLang()}.p58`)}
            </P>
            <OrderedList>
                {t(`${activeLang()}.ol7`)}
            </OrderedList>
            <P>
                {t(`${activeLang()}.p59`)}
            </P>
            <P>
                {t(`${activeLang()}.p60`)}
            </P>
            <Image src={i25} alt={t(`${activeLang()}.i25.alt`)} size="75%" description={t(`${activeLang()}.i25.description`)} />
            <P>
                {t(`${activeLang()}.p61`)}
            </P>
            <H1 textCenter={true}>{t(`${activeLang()}.h1_1`)}</H1>
            <P>
                {t(`${activeLang()}.p62`)}
            </P>
            <H2>{t(`${activeLang()}.h2_15`)}</H2>
            <P>
                {t(`${activeLang()}.p63`)}
            </P>
            <H3>{t(`${activeLang()}.h3_19`)}</H3>
            <P>
                {t(`${activeLang()}.p64`)}
            </P>
            <H3>{t(`${activeLang()}.h3_20`)}</H3>
            <P>
                {t(`${activeLang()}.p65`)}
            </P>
            <Image src={i26} alt={t(`${activeLang()}.i26.alt`)} size="75%" description={t(`${activeLang()}.i26.description`)} />
            <P>
                {t(`${activeLang()}.p66`)}
            </P>
            <P>
                {t(`${activeLang()}.p67`)}
            </P>
            <P>
                {t(`${activeLang()}.p68`)}
            </P>
            <P>
                {t(`${activeLang()}.p69`)}
            </P>
            <Image src={i27} alt={t(`${activeLang()}.i27.alt`)} size="75%" description={t(`${activeLang()}.i27.description`)} />
            <H2>{t(`${activeLang()}.h2_16`)}</H2>
            <P>
                {t(`${activeLang()}.p70`)}
            </P>
            <Image src={i28} alt={t(`${activeLang()}.i28.alt`)} size="75%" description={t(`${activeLang()}.i28.description`)} />
            <H2>{t(`${activeLang()}.h2_17`)}</H2>
            <P>
                {t(`${activeLang()}.p71`)}
            </P>
            <Image src={i29} alt={t(`${activeLang()}.i29.alt`)} size="75%" description={t(`${activeLang()}.i29.description`)} />
            <P>
                {t(`${activeLang()}.p72`)}
            </P>
            <H2>{t(`${activeLang()}.h2_18`)}</H2>
            <P>
                {t(`${activeLang()}.p73`)}
            </P>
            <P>
                {t(`${activeLang()}.p74`)}
            </P>
            <P>
                {t(`${activeLang()}.p75`)}
            </P>
            <H1 textCenter={true}>{t(`${activeLang()}.h1_2`)}</H1>
            <P>
                {t(`${activeLang()}.p76`)}
            </P>
            <P>
                {t(`${activeLang()}.p77`)}
            </P>
            <P>
                {t(`${activeLang()}.p78`)}
            </P>
            <P>
                {t(`${activeLang()}.p79`)}
            </P>
            <P>
                {t(`${activeLang()}.p80`)}
            </P>
            <Image src={i30} alt={t(`${activeLang()}.i30.alt`)} size="75%" description={t(`${activeLang()}.i30.description`)} />
            <P>
                {t(`${activeLang()}.p81`)}
            </P>
            <P>
                {t(`${activeLang()}.p82`)}
            </P>
            <P>
                {t(`${activeLang()}.p83`)}
            </P>
            <Image src={i31} alt={t(`${activeLang()}.i31.alt`)} size="75%" description={t(`${activeLang()}.i31.description`)} />
            <P>
                {t(`${activeLang()}.p84`)}
            </P>
            <Image src={i32} alt={t(`${activeLang()}.i32.alt`)} size="75%" description={t(`${activeLang()}.i32.description`)} />
             <UnorderedListExtraPadding>
             {t(`${activeLang()}.ulx_3`)}
            </UnorderedListExtraPadding>
            <P>
                {t(`${activeLang()}.p85`)}
            </P>
            <P>
                {t(`${activeLang()}.p86`)}
            </P>
            <P>
                {t(`${activeLang()}.p87`)}
            </P>
            <P>
                {t(`${activeLang()}.p88`)}
            </P>
            <Image src={i33} alt={t(`${activeLang()}.i33.alt`)} size="75%" description={t(`${activeLang()}.i33.description`)} />
            <H2>{t(`${activeLang()}.h2_19`)}</H2>
            <H2>{t(`${activeLang()}.h2_20`)}</H2>
            <UnorderedList listStyleHidden={true}>
                {t(`${activeLang()}.ul_7`)}
            </UnorderedList>
            <H2>{t(`${activeLang()}.h2_21`)}</H2>
            <UnorderedList listStyleHidden={true}>
                {t(`${activeLang()}.ul_8`)}
            </UnorderedList>
        </ArticlePage>
    )
}

export default A1;