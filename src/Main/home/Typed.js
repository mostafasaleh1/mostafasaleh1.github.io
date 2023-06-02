import React from 'react';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';
import { mainActiveLang } from '../../languages/language/ActiveLang';

const TypedSpan = () => {
    const { t } = useTranslation("main");
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [`${t(`${mainActiveLang()}.home.spancontent1`)}`, `${t(`${mainActiveLang()}.home.spancontent2`)}`, `${t(`${mainActiveLang()}.home.spancontent3`)}`],
            typeSpeed: 120,
            backSpeed: 40,
            backDelay: 2000,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [t]);

    return (
        <span className="typed" ref={el}></span>
    );
}
export default TypedSpan;