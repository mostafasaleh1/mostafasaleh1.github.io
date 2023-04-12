/* TYPING ANIMATION */
var typed = new Typed(".typed", {
    strings: ["Frontend Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})
/* END TYPING ANIMATION */

/* ACTIVE CLASS */
window.addEventListener("scroll", function () { //making the window do the function below while scrolling, this fucntion cotinuously checks if the section is in the vieport or not. If yes it adds the active class, if not it remove the active class.
    let secArr = document.querySelectorAll('section'); // creating an array that contains all the section on the document.
    let navlinks = document.querySelectorAll(".navbar-links");
    secArr.forEach(function (SecInViewport) { // looping over the scetion in the viewport and checking continuously if it's existing or not.
        let id = SecInViewport.getAttribute("id");
        let bounds = SecInViewport.getBoundingClientRect(); // getting the dimentions of the rectangle of the section being looped and storing it into a variable called bound.

//these are the dimensions that determine if that section is 75% in the viewport or not.

        if (bounds.top <= 350.00 && bounds.top >= -350.00) { // checking if the rectangle is in the viewport or not.
            if (!SecInViewport.classList.contains("active-class")) { //checking if the rectangle doesn't contain the activ class.
                SecInViewport.classList.add("active-class"); //if the active class doesn't exist and the seciton is in the viewport, it'll add the class as an attribute to the sction in the viewport.
                navlinks.forEach(link => {
                    link.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
            }
        } 
        else {
            SecInViewport.classList.remove("active-class"); // if the section already has an active class and this section is not in the viewport, it'll remove the class.
        }
    });
});
/* END ACTIVE CLASS */

let htmlElement = document.querySelector("html");

if (window.innerWidth > window.innerHeight){
    htmlElement.setAttribute("style", "font-size: .71vw;");
}
else if (window.innerWidth < window.innerHeight){
    htmlElement.setAttribute("style", "font-size: 1vh;");
}
else{
    htmlElement.setAttribute("style", "font-size: .8vw;");
}