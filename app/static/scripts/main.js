function revealElement(selector) {
    ScrollReveal().reveal(selector, {
        duration: 500,
        delay: 200,
        origin: "bottom",
        distance: "50px",
        easing: "ease-in",
        afterReveal: (el) => {
            el.style.opacity = 1;
        },
    });
}

revealElement(".section");
revealElement(".resume");
revealElement(".about");

// Pushbar button
const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});