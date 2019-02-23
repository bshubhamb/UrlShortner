//Make navigation bar sticky. Also add part to make input field sticky.
let navbar = document.getElementById("navbar");
let input = document.getElementsByClassName("url-input");
let sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        input.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

