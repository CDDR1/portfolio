// COLLAPSABLE NAV
const menu = document.querySelector(".navbar__menu");
const closeMenuBtn = document.querySelector(".collapsable__close-btn");
const nav = document.querySelector(".collapsable");
const navLinks = document.querySelectorAll(".collapsable__link");
const body = document.querySelector(".page");

const showNav = () => {
    nav.classList.remove("hidden");
    body.style.overflowY = "hidden";
};

const collapseNav = () => {
    nav.classList.add("hidden");body.style.overflowY = "auto";
};

menu.addEventListener("click", showNav);
closeMenuBtn.addEventListener("click", collapseNav);
navLinks.forEach((link) => link.addEventListener("click", collapseNav));