const menu = document.querySelector('.header__menu');
const nav = document.querySelector('.collapsable');
const navLinks = document.querySelectorAll('.collapsable__link');

const toggleNav = () => {
    nav.classList.toggle('hidden');
};

menu.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', toggleNav));