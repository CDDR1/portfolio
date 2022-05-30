// COLLAPSABLE NAV
const menu = document.querySelector(".navbar__menu");
const closeMenuBtn = document.querySelector(".collapsable__close-btn");
const nav = document.querySelector(".collapsable");
const navLinks = document.querySelectorAll(".collapsable__link");
const body = document.querySelector(".page");

const toggleNav = () => {
    nav.classList.toggle("hidden");
    body.classList.toggle("avoid-scroll");
    menu.classList.toggle("hide-menu");
    closeMenuBtn.classList.toggle("hidden");
};

menu.addEventListener("click", toggleNav);
closeMenuBtn.addEventListener("click", toggleNav);
navLinks.forEach(link => link.addEventListener("click", toggleNav));