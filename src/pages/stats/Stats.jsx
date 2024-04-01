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
                            <embed className='x' title='Wakatime Language Stats' src="https://github-readme-stats.vercel.app/api/wakatime?username=mostafasaleh1" type=""></embed>
                        </div>
                    </div>

                    <div className='stats-language-graphs-container'>
                        <div>
                            <h2>{t(`${statsActiveLang()}.langs30days`)}</h2>
                            <figure title='Languages over Last 30 Days'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh1/3c7b26db-0dfd-45fb-a145-624aed210d48.svg"></embed></figure>
                        </div>
                        <div>
                            <h2>{t(`${statsActiveLang()}.langs1year`)}</h2>
                            <figure title='Languages over Last Year'><embed src="https://wakatime.com/share/@mostafasaleh1/a10cebfb-9a12-46cd-86e4-5218653bb7e4.svg"></embed></figure>
                        </div>
                        <div>
                            <h2>{t(`${statsActiveLang()}.langsAllTime`)}</h2>
                            <figure title='Languages over All Time'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh1/b101992f-d14e-4731-9554-a908fa745723.svg"></embed></figure>
                        </div>
                        <div className='stats-operating-system-usage'>
                            <h2>{t(`${statsActiveLang()}.osAllTime`)}</h2>
                            <figure title='Operating Systems used in coding over All Time'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh1/a42efce9-5f16-49c1-b4b1-32c3fae549c7.svg"></embed></figure>
                        </div>
                    </div>

                    <div className='stats-activity-container'>
                        <div>
                            <figure><embed src="https://wakatime.com/share/@mostafasaleh1/9e88b76d-961f-435b-8bc0-99b594e1f49e.svg"></embed></figure>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Stats;