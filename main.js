let rightArrow = document.getElementById("right-arrow");
let leftArrow = document.getElementById("left-arrow");
let diamond = document.querySelector("#diamond");
let diaPath = document.querySelector("#filledDia");
let diaNav = document.getElementsByClassName("diamond-nav")[0];
let navText = document.querySelectorAll("nav h6");
let openNav = false;

diamond.addEventListener('click', () => {
    if (openNav) 
    {
        rightArrow.style.opacity = "0";
        leftArrow.style.opacity = "0";
        diaNav.style.gap = "0";
        for (let text of navText) {
            text.style.opacity = "0";
        }
        openNav = false;
        diaPath.style.opacity = "0";
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
        diaPath.style.opacity = "1";
    }
});

diaNav.addEventListener("mouseenter", () => {
    diaPath.style.opacity = "1";
});

diaNav.addEventListener("mouseleave", () => {
    if (!openNav)
        diaPath.style.opacity = "0";
});