const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            const entryClasses = entry.target.classList;
            if (entryClasses.contains("projects__title") || entryClasses.contains("contact__title")) {
                entryClasses.add("animate__slideInLeft");
            }
            if (entryClasses.contains("about__photo-container")) {
                entryClasses.add("animate__fadeInLeft");
            }
            if (entryClasses.contains("about__content")) {
                entryClasses.add("animate__fadeInRight");
            }
            if (entryClasses.contains("github-icon")) {
                entryClasses.add("animate__fadeIn");
            }
            if (entryClasses.contains("linkedin-icon")) {
                entryClasses.add("animate__fadeIn");
            }
            if (entryClasses.contains("award-icon")) {
                entryClasses.add("animate__fadeIn");
            }
            if (entryClasses.contains("projects__card")) {
                entryClasses.add("animate__fadeIn");
            }
            if (entryClasses.contains("contact__subtitle")) {
                entryClasses.add("animate__bounceIn");
            }
        }
    });
});

observer.observe(document.querySelector(".projects__title"));
observer.observe(document.querySelector(".contact__title"));
observer.observe(document.querySelector(".about__photo-container"));
observer.observe(document.querySelector(".about__content"));
observer.observe(document.querySelector(".github-icon"));
observer.observe(document.querySelector(".linkedin-icon"));
observer.observe(document.querySelector(".award-icon"));
observer.observe(document.querySelector(".contact__subtitle"));
const projectCards = document.querySelectorAll(".projects__card");
projectCards.forEach(card => observer.observe(card));
