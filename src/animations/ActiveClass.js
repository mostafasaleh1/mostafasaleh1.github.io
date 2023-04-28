export const ActiveClass = () => {
        // ACTIVE CLASS AND ACTIVE LINKS
        window.addEventListener("scroll", function () {
            const navLinks = document.querySelectorAll(".navbar-links");
            const secArr = document.querySelectorAll('section');
            secArr.forEach(function (SecInViewport) {
                let id = SecInViewport.getAttribute("id");
                let bounds = SecInViewport.getBoundingClientRect();
    
                if (bounds.top <= 350.00 && bounds.top >= -350.00) {
                    if (!SecInViewport.classList.contains("active-class")) {
                        SecInViewport.classList.add("active-class");
                        navLinks.forEach(link => {
                            link.classList.remove("active");
                            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                        });
                    }
                }
                else {
                    SecInViewport.classList.remove("active-class");
                }
            });
        });
}