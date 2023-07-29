let rightArrow = document.getElementById("right-arrow");
let leftArrow = document.getElementById("left-arrow");
let diamond = document.getElementById("diamond");
let diaNav = document.getElementsByClassName("diamond-nav")[0];
let navText = document.querySelectorAll("nav h6");
let openNav = false;

diaNav.addEventListener('click', () => {
    if (openNav) 
    {
        rightArrow.style.opacity = "0";
        leftArrow.style.opacity = "0";
        diaNav.style.gap = "0";
        for (let text of navText) {
            text.style.opacity = "0";
        }
        openNav = false;
    } 
        
    else 
    {
        rightArrow.style.opacity = "1";
        leftArrow.style.opacity = "1";
        diaNav.style.gap = "25px";
        for (let text of navText) {
            text.style.opacity = "1";
        }
        openNav = true;
    }
});