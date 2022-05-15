const menu = document.querySelector(".header__menu");
const closeMenuBtn = document.querySelector(".collapsable__close-btn");
const nav = document.querySelector(".collapsable");
const navLinks = document.querySelectorAll(".collapsable__link");

const showNav = () => {
    nav.classList.remove("hidden");
};

const collapseNav = () => {
    nav.classList.add("hidden");
};

menu.addEventListener("click", showNav);
closeMenuBtn.addEventListener("click", collapseNav);
navLinks.forEach((link) => link.addEventListener("click", collapseNav));