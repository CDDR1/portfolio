const form = document.querySelector(".contact__form");

const togglePopup = () => {
    const popup = document.querySelector(".contact__popup-container");
    const page = document.querySelector(".page");

    popup.classList.toggle("hide-popup");
    page.classList.toggle("avoid-scroll");
};

async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            Accept: "application/json",
        },
    });
    if (response.ok) {
        this.reset();
        
        // SHOW POPUP
        togglePopup();
        const closePopup = document.querySelector(".contact__popup-btn");
        closePopup.addEventListener("click", togglePopup);
    }
}

form.addEventListener("submit", handleSubmit);