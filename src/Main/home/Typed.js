import React from 'react';
import Typed from 'typed.js';

function TypedSpan() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Engineer", "Frontend Developer", "React Developer"],
            typeSpeed: 120,
            backSpeed: 40,
            backDelay: 2000,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <span className="typed" ref={el}></span>
    );
}
export default TypedSpan;