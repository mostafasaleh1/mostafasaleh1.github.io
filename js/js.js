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
    secArr.forEach(function (SecInViewport) { // looping over the scetion in the viewport and checking continuously if it's existing or not.

        let bounds = SecInViewport.getBoundingClientRect(); // getting the dimentions of the rectangle of the section being looped and storing it into a variable called bound.

//these are the dimensions that determine if that section is 75% in the viewport or not.

        if (bounds.top <= 350.00 && bounds.top >= -350.00) { // checking if the rectangle is in the viewport or not.
            if (!SecInViewport.classList.contains("your-active-class")) { //checking if the rectangle doesn't contain the activ class.
                SecInViewport.setAttribute("id", "your-active-class"); //if the active class doesn't exist and the seciton is in the viewport, it'll add the class as an attribute to the sction in the viewport.
            }
        } 
        else {
            SecInViewport.removeAttribute("id"); // if the section already has an active class and this section is not in the viewport, it'll remove the class.
        }
    });
});
/* END ACTIVE CLASS */