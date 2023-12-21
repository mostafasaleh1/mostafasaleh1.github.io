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
                            <figure title='Languages over Last 30 Days'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh2015/676f4a5a-05aa-49d8-a7a7-46de9e0d77da.svg"></embed></figure>
                        </div>
                        <div>
                            <h2>{t(`${statsActiveLang()}.langs1year`)}</h2>
                            <figure title='Languages over Last Year'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh2015/5d0ec789-f33d-4ff0-954e-0c2b5c3e2b98.svg"></embed></figure>
                        </div>
                        <div>
                            <h2>{t(`${statsActiveLang()}.langsAllTime`)}</h2>
                            <figure title='Languages over All Time'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh2015/f5aae390-18cd-40e1-8723-8b1f56078f2e.svg"></embed></figure>
                        </div>
                        <div className='stats-operating-system-usage'>
                            <h2>{t(`${statsActiveLang()}.osAllTime`)}</h2>
                            <figure title='Operating Systems used in coding over All Time'><embed className='stats-usage' src="https://wakatime.com/share/@mostafasaleh2015/af5f5ac5-c021-4c86-9aa5-47e79396e430.svg"></embed></figure>
                        </div>
                    </div>

                    <div className='stats-activity-container'>
                        <div>
                            <figure><embed src="https://wakatime.com/share/@mostafasaleh2015/c5221e4e-f682-4b5c-8dd0-1dcfa4c3a5b8.svg"></embed></figure>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Stats;