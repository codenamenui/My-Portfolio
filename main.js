let rightArrow = document.getElementById("right-arrow");
let leftArrow = document.getElementById("left-arrow");
let diamond = document.querySelector("#diamond");
let diaPath = document.querySelector("#filledDia");
let diaNav = document.getElementsByClassName("diamond-nav")[0];
let navText = document.querySelectorAll("nav a");
let navH6 = document.querySelectorAll("nav a h6");
let openNav = true;

for (let i = 0; i < navText.length; i++) {
    navH6[i].classList.toggle('hover-line');
    navText[i].addEventListener("mouseenter", () => {
        navH6[i].classList.toggle('hover-line')
        navH6[i].classList.toggle('unhover-line');
    });
    navText[i].addEventListener("mouseleave", () => {
        navH6[i].classList.toggle('hover-line');
        navH6[i].classList.toggle('unhover-line');
    });
}

diamond.addEventListener('click', () => {
    if (!openNav) 
    {
        rightArrow.style.opacity = "0";
        leftArrow.style.opacity = "0";
        diaNav.style.gap = "0";
        openNav = true;
        diaPath.style.opacity = "0";
        navText[0].style.transform = "translateX(0)";
        navText[1].style.transform = "translateX(0)";
        navText[2].style.transform = "translateX(0)";
        navText[3].style.transform = "translateX(0)";
        for (let text of navText) {
            text.style['transition'] = "opacity 100ms linear 100ms, transform 300ms linear";
            text.style.opacity = "0";
        }
    } 
        
    else 
    {
        rightArrow.style.opacity = "1";
        leftArrow.style.opacity = "1";
        diaNav.style.gap = "clamp(0.5vw, 2vw, 3vw)";
        diaPath.style.opacity = "1";
        navText[0].style.transform = "translateX(-300%)";
        navText[1].style.transform = "translateX(-150%)";
        navText[2].style.transform = "translateX(150%)";
        navText[3].style.transform = "translateX(300%)";
        for (let text of navText) {
            text.style['transition'] = "opacity 300ms linear, transform 300ms linear";
            text.style.opacity = "1";
        }
        openNav = false;
    }
});

diaNav.addEventListener("mouseenter", () => {
    diaPath.style.opacity = "1";
});

diaNav.addEventListener("mouseleave", () => {
    if (!openNav)
        diaPath.style.opacity = "0";
});
