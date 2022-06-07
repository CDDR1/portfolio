const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
        scrollUp.classList.remove("scroll-up--hidden");
    } else {
        scrollUp.classList.add("scroll-up--hidden");
    }
});