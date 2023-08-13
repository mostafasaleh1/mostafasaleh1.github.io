import React from 'react';
import { statsActiveLang } from '../../languages/language/ActiveLang';
import { useTranslation } from 'react-i18next';
import Footer from '../../Main/footer/Footer';
import "./stats.css";

const Stats = () => {
    const { t } = useTranslation("stats");
    return (
        <React.Fragment>
            <section>
                <h2 className="heading">{t(`${statsActiveLang()}.my`)} <span>{t(`${statsActiveLang()}.stats`)}</span></h2>
                <div className='stats-main-container'>
                    <div className='stats-yyyyyyyyy-container'>
                        <div className='stats-statsandstreak'>
                            <embed title='Github Stats' className='x' src="https://github-readme-stats.vercel.app/api?username=mostafasaleh1&show_icons=true&count_private=true" type="" />
                            <embed title='Streak Stats' className='x' src="https://streak-stats.demolab.com?user=mostafasaleh1&date_format=j%20M%5B%20Y%5D" type="" />
                        </div>

                        <div className='stats-Lanugage-time-stats'>
                            <embed className='x' title='Wakatime Language Stats' src="https://github-readme-stats.vercel.app/api/wakatime?username=mostafasaleh2015" type=""></embed>
                        </div>
                    </div>

                    <div className='stats-language-graphs-container'>
                        <div>
                            <h2>{t(`${statsActiveLang()}.langs30days`)}</h2>
                            <figure title='Languages over Last 30 Days'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh2015/c96c6948-4371-4410-a641-f4662ec73173.svg"></embed></figure>
                        </div>
                        <div>
                            <h2>{t(`${statsActiveLang()}.langs1year`)}</h2>
                            <figure title='Languages over Last Year'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh2015/e4864d6d-a89d-4248-88db-709704d1c8af.svg"></embed></figure>
                        </div>
                        <div>
                            <h2>{t(`${statsActiveLang()}.langsAllTime`)}</h2>
                            <figure title='Languages over All Time'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh2015/8d898ac3-85cf-4933-ab91-f36d466467ce.svg"></embed></figure>
                        </div>
                        <div className='stats-operating-system-usage'>
                            <h2>{t(`${statsActiveLang()}.osAllTime`)}</h2>
                            <figure title='Operating Systems used in coding over All Time'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh2015/b0b67a7a-9dd9-41cc-b20f-46d60ae6dfce.svg"></embed></figure>
                        </div>
                    </div>

                    <div className='stats-activity-container'>
                        <div>
                            <figure><embed src="https://wakatime.com/share/@mostafasaleh2015/38a83641-079c-448d-a3f4-adf17d048e74.svg"></embed></figure>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Stats;